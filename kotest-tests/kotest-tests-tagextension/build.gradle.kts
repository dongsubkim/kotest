plugins {
   id("java")
   kotlin("jvm")
   id("java-library")
}

dependencies {
   implementation(project(Projects.Framework.engine))
   implementation(project(Projects.Assertions.Shared))
   implementation(project(Projects.JunitRunner))
   implementation(Libs.Coroutines.coreJvm)
}

tasks.named<Test>("test") {
   useJUnitPlatform()
   filter {
      isFailOnNoMatchingTests = false
   }
   testLogging {
      showExceptions = true
      showStandardStreams = true
      events = setOf(
         org.gradle.api.tasks.testing.logging.TestLogEvent.FAILED,
         org.gradle.api.tasks.testing.logging.TestLogEvent.PASSED
      )
      exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
   }
}

apply(from = "../../nopublish.gradle")
