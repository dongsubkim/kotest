package io.kotest.property

data class PropertyResult(
   // the argument names used, if possible to derive on the paltform, otherwise the index of that arg
   val inputs: List<String>,
   val seed: Long,
   val attempts: Int,
   val successes: Int,
   val failures: Int,
   // a map of maps, where each map is the classification labels for the named argument
   val labels: Map<String, Map<String, Int>>,
)
