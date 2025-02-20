import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
   id("org.springframework.boot") version "2.3.0.RELEASE"
   id("io.spring.dependency-management") version "1.0.11.RELEASE"
   kotlin("jvm")
   kotlin("plugin.spring") version "1.6.20-dev-4892"
}

group = "com.example"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_1_8

dependencies {
   implementation("org.springframework.boot:spring-boot-starter-webflux")
   implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
   implementation("io.projectreactor.kotlin:reactor-kotlin-extensions")
   implementation(kotlin("stdlib"))
   implementation(kotlin("reflect"))
   implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")
   testImplementation("org.springframework.boot:spring-boot-starter-test") {
      exclude(group = "org.junit.vintage", module = "junit-vintage-engine")
      exclude(module = "mockito-core")
   }
   testImplementation("com.ninja-squad:springmockk:3.0.1")
   testImplementation("io.projectreactor:reactor-test")
   testImplementation(project(Projects.JunitRunner))
   testImplementation(project(":kotest-extensions:kotest-extensions-spring"))
}

tasks.withType<Test> {
   useJUnitPlatform()
   filter {
      isFailOnNoMatchingTests = false
   }
}

tasks.withType<KotlinCompile> {
   kotlinOptions {
      freeCompilerArgs = listOf("-Xjsr305=strict")
      jvmTarget = "1.8"
   }
}
