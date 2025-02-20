package com.sksamuel.kotest.engine.spec.interceptor

import io.kotest.core.spec.style.FunSpec
import io.kotest.engine.listener.AbstractTestEngineListener
import io.kotest.engine.spec.ReflectiveSpecRef
import io.kotest.engine.spec.interceptor.SpecFinishedInterceptor
import io.kotest.engine.spec.interceptor.SpecStartedInterceptor
import io.kotest.matchers.shouldBe
import kotlin.reflect.KClass

class SpecStartedFinishedInterceptorTest : FunSpec() {
   init {

      test("SpecStartedInterceptor should call specStarted before invoking spec") {
         var result = ""
         val listener = object : AbstractTestEngineListener() {
            override suspend fun specStarted(kclass: KClass<*>) {
               result += "a"
            }
         }
         SpecStartedInterceptor(listener)
            .intercept(ReflectiveSpecRef(FooSpec::class)) {
               result += "b"
               Result.success(emptyMap())
            }
         result shouldBe "ab"
      }

      test("SpecFinishedInterceptor should call specFinished after invoking spec") {
         var result = ""
         val listener = object : AbstractTestEngineListener() {
            override suspend fun specFinished(kclass: KClass<*>, t: Throwable?) {
               result += "a"
            }
         }
         SpecFinishedInterceptor(listener)
            .intercept(ReflectiveSpecRef(FooSpec::class)) {
               result += "b"
               Result.success(emptyMap())
            }
         result shouldBe "ba"
      }
   }
}

private class FooSpec : FunSpec()
