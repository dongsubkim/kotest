package io.kotest.engine.concurrency

import io.kotest.core.concurrency.CoroutineDispatcherFactory
import io.kotest.core.config.Configuration

/**
 * Returns the default [CoroutineDispatcherFactory] used unless overriden in configuration
 * or per spec.
 */
internal expect fun defaultCoroutineDispatcherFactory(configuration: Configuration): CoroutineDispatcherFactory
