package com.sksamuel.kotest.engine.tags

import io.kotest.core.Tag
import io.kotest.core.TagExpression
import io.kotest.core.config.Configuration
import io.kotest.core.extensions.TagExtension
import io.kotest.core.spec.style.StringSpec
import io.kotest.engine.TestEngineLauncher
import io.kotest.engine.listener.CollectingTestEngineListener
import io.kotest.matchers.shouldBe

class TagExtensionTest : StringSpec() {

   init {
      "tag extensions should be used when calculating runtime tags" {
         val ext = object : TagExtension {
            override fun tags(): TagExpression =
               TagExpression(setOf(TagA), setOf(TagB))
         }
         val c = Configuration().apply { registry().add(ext) }
         val collector = CollectingTestEngineListener()
         TestEngineLauncher(collector).withClasses(TestWithTags::class).withConfiguration(c).launch()
         collector.tests.mapKeys { it.key.name.testName }.mapValues { it.value.reasonOrNull } shouldBe
            mapOf(
               "should be tagged with tagA and therefore included" to null,
               "should be untagged and therefore excluded" to "Disabled by tags: (TagA) & (!TagB) & !SpecExcluded",
               "should be tagged with tagB and therefore excluded" to "Disabled by tags: (TagA) & (!TagB) & !SpecExcluded"
            )
      }
   }
}

object TagA : Tag()
object TagB : Tag()

private class TestWithTags : StringSpec() {
   init {
      "should be tagged with tagA and therefore included".config(tags = setOf(TagA)) { }

      "should be untagged and therefore excluded" { }

      "should be tagged with tagB and therefore excluded".config(tags = setOf(TagB)) { }
   }
}
