package com.sksamuel.kt.extensions.system

import io.kotest.core.listeners.TestListener
import io.kotest.core.spec.AutoScan
import io.kotest.core.spec.Spec
import io.kotest.core.spec.style.FreeSpec
import io.kotest.core.spec.style.WordSpec
import io.kotest.core.spec.style.scopes.FreeSpecContainerScope
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.extensions.system.OverrideMode
import io.kotest.extensions.system.SystemEnvironmentTestListener
import io.kotest.extensions.system.withEnvironment
import io.kotest.inspectors.forAll
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import kotlin.reflect.KClass

class SystemEnvironmentExtensionTest : FreeSpec() {

   private val key = "SystemEnvironmentExtensionTestFoo"
   private val value = "SystemEnvironmentExtensionTestBar"

   init {
         "Should return original environment to its place after execution" - {
            val before = System.getenv().toMap()

            executeOnAllEnvironmentOverloads {
               System.getenv() shouldNotBe before
            }
            System.getenv() shouldBe before

         }

      "Should set environment to specific map" - {
         executeOnAllEnvironmentOverloads {
            System.getenv(key) shouldBe value
         }
      }

      "Should return the computed value" - {
         val results = executeOnAllEnvironmentOverloads { "RETURNED" }

         results.forAll {
            it shouldBe "RETURNED"
         }
      }
   }

   private suspend fun <T> FreeSpecContainerScope.executeOnAllEnvironmentOverloads(block: suspend () -> T): List<T> {
      val results = mutableListOf<T>()

      "String String overload" {
         results += withEnvironment(key, value, OverrideMode.SetOrOverride) { block() }
      }

      "Pair overload" {
         results += withEnvironment(key to value, OverrideMode.SetOrOverride) { block() }
      }

      "Map overload" {
         results += withEnvironment(mapOf(key to value), OverrideMode.SetOrOverride) { block() }
      }

      return results
   }

}

@AutoScan
object SysEnvTestListener : TestListener {
   override val name: String
      get() = "SysEnvTestListener"

   override suspend fun prepareSpec(kclass: KClass<out Spec>) {
      if (kclass == SystemEnvironmentTestListenerTest::class) {
         System.getenv("mop") shouldBe null
      }
   }

   override suspend fun finalizeSpec(kclass: KClass<out Spec>, results: Map<TestCase, TestResult>) {
      if (kclass == SystemEnvironmentTestListenerTest::class) {
         System.getenv("mop") shouldBe null
      }
   }
}

class SystemEnvironmentTestListenerTest : WordSpec() {

   val setl = SystemEnvironmentTestListener("mop", "dop", mode = OverrideMode.SetOrOverride)

   override fun listeners() = listOf(setl)

   init {
      "sys environment extension" should {
         "set environment variable" {
            System.getenv("mop") shouldBe "dop"
         }
      }
   }
}
