"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[6370],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(d,i(i({ref:e},p),{},{components:n})):a.createElement(d,i({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9494:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"custom-test-names",title:"Custom Test Names",slug:"custom-test-names.html"},l=void 0,c={unversionedId:"framework/datatesting/custom-test-names",id:"framework/datatesting/custom-test-names",isDocsHomePage:!1,title:"Custom Test Names",description:"By default, the name of each test is simply the toString() on the input row. This typically works well for data",source:"@site/docs/framework/datatesting/custom_test_names.md",sourceDirName:"framework/datatesting",slug:"/framework/datatesting/custom-test-names.html",permalink:"/docs/framework/datatesting/custom-test-names.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/datatesting/custom_test_names.md",tags:[],version:"current",frontMatter:{id:"custom-test-names",title:"Custom Test Names",slug:"custom-test-names.html"},sidebar:"framework",previous:{title:"Nested Data Tests",permalink:"/docs/framework/datatesting/nested-tests.html"},next:{title:"Eventually",permalink:"/docs/framework/concurrency/eventually.html"}},p=[{value:"WithDataTestName",id:"withdatatestname",children:[],level:2},{value:"Test Name Function",id:"test-name-function",children:[],level:2}],u={toc:p};function m(t){var e=t.components,s=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, the name of each test is simply the ",(0,o.kt)("inlineCode",{parentName:"p"},"toString()")," on the input row. This typically works well for data\nclasses."),(0,o.kt)("p",null,"However, we can customize this if we wish, by passing in test names into the ",(0,o.kt)("inlineCode",{parentName:"p"},"withData")," function in the form of map,\nwhere the key is the test name, and the value is the input value for that row."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'context("Pythag triples tests") {\n  withData(\n    mapOf(\n      "3, 4, 5" to PythagTriple(3, 4, 5),\n      "6, 8, 10" to PythagTriple(6, 8, 10),\n      "8, 15, 17" to PythagTriple(8, 15, 17),\n      "7, 24, 25" to PythagTriple(7, 24, 25)\n    )\n  ) { (a, b, c) ->\n    a * a + b * b shouldBe c * c\n  }\n}\n')),(0,o.kt)("p",null,"Or we can pass a function to ",(0,o.kt)("inlineCode",{parentName:"p"},"withData")," which take ",(0,o.kt)("inlineCode",{parentName:"p"},"row")," as input and return the test name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'context("Pythag triples tests") {\n  withData(\n    nameFn = { t: PythagTriple -> "${t.a}__${t.b}__${t.c}" },\n    PythagTriple(3, 4, 5),\n    PythagTriple(6, 8, 10),\n    PythagTriple(8, 15, 17),\n    PythagTriple(7, 24, 25)\n  ) { (a, b, c) ->\n    a * a + b * b shouldBe c * c\n  }\n}\n')),(0,o.kt)("p",null,"The output from this example is now slightly clearer:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"data test example output",src:n(4091).Z})),(0,o.kt)("h2",{id:"withdatatestname"},"WithDataTestName"),(0,o.kt)("p",null,"Another alternative is to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"WithDataTestName")," interface. When provided, the ",(0,o.kt)("inlineCode",{parentName:"p"},"toString()")," will not be used,\ninstead the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataTestName")," function will be invoked for each row."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class PythagTriple(val a: Int, val b: Int, val c: Int) : WithDataTestName {\n  override fun dataTestName() = "$a, $b, $c"\n}\n')),(0,o.kt)("h2",{id:"test-name-function"},"Test Name Function"),(0,o.kt)("p",null,"Finally, another option is to provide a function directly to the ",(0,o.kt)("inlineCode",{parentName:"p"},"withData")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'context("Pythag triples tests") {\n  withData<PythagTriple>(\n    { "${it.a}, ${it.b}, ${it.c}" },\n    PythagTriple(3, 4, 5),\n    PythagTriple(6, 8, 10),\n    PythagTriple(8, 15, 17),\n    PythagTriple(7, 24, 25)\n  ) { (a, b, c) ->\n    a * a + b * b shouldBe c * c\n  }\n}\n')),(0,o.kt)("p",null,"Whether this is worth the extra effort or not depends on how readable the toString() method is on the data classes you\nare using."))}m.isMDXComponent=!0},4091:function(t,e,n){e.Z=n.p+"assets/images/datatest3-61c742b23508b1da55388fea50d7f996.png"}}]);