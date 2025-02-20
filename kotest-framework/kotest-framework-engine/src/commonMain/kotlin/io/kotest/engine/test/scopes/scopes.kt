package io.kotest.engine.test.scopes

import io.kotest.core.concurrency.CoroutineDispatcherFactory
import io.kotest.core.config.Configuration
import io.kotest.core.names.DuplicateTestNameMode
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestScope
import io.kotest.engine.listener.TestEngineListener
import kotlin.coroutines.CoroutineContext

/**
 * Returns a new [TestScope] which uses the given [coroutineContext] with the other methods
 * delegating to the receiver context.
 */
internal fun TestScope.withCoroutineContext(coroutineContext: CoroutineContext): TestScope = when  {
   this.coroutineContext == coroutineContext -> this
   this is TestScopeWithCoroutineContext -> TestScopeWithCoroutineContext(delegate, coroutineContext)
   else -> TestScopeWithCoroutineContext(this, coroutineContext)
}

private class TestScopeWithCoroutineContext(
   val delegate: TestScope,
   override val coroutineContext: CoroutineContext
) : TestScope by delegate {
   override fun toString(): String = "TestCaseContext [$coroutineContext]"
}

/**
 * Creates a [TestScope] suitable for use in a single instance runner.
 */
fun createSingleInstanceTestScope(
   testCase: TestCase,
   coroutineContext: CoroutineContext,
   mode: DuplicateTestNameMode,
   listener: TestEngineListener,
   dispatcherFactory: CoroutineDispatcherFactory,
   configuration: Configuration,
): TestScope {
   return DuplicateNameHandlingTestScope(
      testCase.spec.duplicateTestNameMode ?: configuration.duplicateTestNameMode,
      InOrderTestScope(
         testCase,
         coroutineContext,
         mode,
         listener,
         dispatcherFactory,
         configuration,
      )
   )
}
