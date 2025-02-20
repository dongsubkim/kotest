package com.sksamuel.kotest.engine.test.names

import io.kotest.core.NamedTag
import io.kotest.core.Tag
import io.kotest.core.config.Configuration
import io.kotest.core.descriptors.append
import io.kotest.core.descriptors.toDescriptor
import io.kotest.core.names.TestName
import io.kotest.core.sourceRef
import io.kotest.core.spec.DisplayName
import io.kotest.core.spec.Isolate
import io.kotest.core.spec.style.FunSpec
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestType
import io.kotest.core.test.config.ResolvedTestConfig
import io.kotest.engine.test.names.DefaultDisplayNameFormatter
import io.kotest.matchers.shouldBe

@Isolate
class DefaultDisplayNameFormatterTest : FunSpec() {
   init {

      test("@DisplayName should be used for spec name") {
         DefaultDisplayNameFormatter(Configuration()).format(SpecWithDisplayName::class) shouldBe "ZZZZZ"
      }

      test("test name should use full path option") {
         val conf = Configuration()
         conf.displayFullTestPath = true
         val tc1 = TestCase(
            SpecWithDisplayName::class.toDescriptor().append("test"),
            TestName("test"),
            SpecWithDisplayName(),
            {},
            sourceRef(),
            TestType.Test,
         )
         val tc2 = TestCase(
            SpecWithDisplayName::class.toDescriptor().append("test2"),
            TestName("test2"),
            SpecWithDisplayName(),
            {},
            sourceRef(),
            TestType.Test,
            parent = tc1
         )
         DefaultDisplayNameFormatter(conf).format(tc2) shouldBe "test test2"
      }

      test("tags should be appended from config when configuration is set") {
         val c = Configuration()
         c.testNameAppendTags = true

         val tc = TestCase(
            SpecWithDisplayName::class.toDescriptor().append("test"),
            TestName("test"),
            SpecWithDisplayName(),
            {},
            sourceRef(),
            TestType.Test,
            ResolvedTestConfig.default.copy(tags = setOf(NamedTag("Foo"), Dummy))
         )
         DefaultDisplayNameFormatter(c).format(tc) shouldBe "test[tags = Foo, Dummy]"
      }

      test("bang should not be included in test name") {

         val tc = TestCase(
            descriptor = SpecWithDisplayName::class.toDescriptor().append("!test"),
            name = TestName("!test"),
            spec = SpecWithDisplayName(),
            test = {},
            source = sourceRef(),
            type = TestType.Test,
            config = ResolvedTestConfig.default.copy(tags = setOf(Dummy, NoUse))
         )

         DefaultDisplayNameFormatter(Configuration()).format(tc) shouldBe "test"
      }

      test("focus should not be included in test name") {

         val tc = TestCase(
            descriptor = SpecWithDisplayName::class.toDescriptor().append("f:test"),
            name = TestName("f:test"),
            spec = SpecWithDisplayName(),
            test = {},
            source = sourceRef(),
            type = TestType.Test,
            config = ResolvedTestConfig.default.copy(tags = setOf(Dummy, NoUse))
         )

         DefaultDisplayNameFormatter(Configuration()).format(tc) shouldBe "test"
      }
   }
}

object Dummy : Tag()
object NoUse : Tag()

@DisplayName("ZZZZZ")
private class SpecWithDisplayName : FunSpec({
   test("a") { }
})
