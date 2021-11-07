"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3341],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1082:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],a={id:"eventually",title:"Eventually",slug:"eventually.html"},l=void 0,c={unversionedId:"assertions/eventually",id:"assertions/eventually",isDocsHomePage:!1,title:"Eventually",description:'When testing non-deterministic code, a common use case is "I expect this code to pass after a short period of time".',source:"@site/docs/assertions/eventually.md",sourceDirName:"assertions",slug:"/assertions/eventually.html",permalink:"/docs/assertions/eventually.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/eventually.md",tags:[],version:"current",frontMatter:{id:"eventually",title:"Eventually",slug:"eventually.html"},sidebar:"assertions",previous:{title:"Soft Assertions",permalink:"/docs/assertions/soft-assertions.html"},next:{title:"Continually",permalink:"/docs/assertions/continually.html"}},u=[{value:"Examples",id:"examples",children:[{value:"Simple examples",id:"simple-examples",children:[],level:4},{value:"Exceptions",id:"exceptions",children:[],level:4},{value:"Predicates",id:"predicates",children:[],level:4},{value:"Sharing configuration",id:"sharing-configuration",children:[],level:4}],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'When testing non-deterministic code, a common use case is "I expect this code to pass after a short period of time".'),(0,r.kt)("p",null,"For example, if you were testing a IO operation, you might need to wait until the IO operation has flushed."),(0,r.kt)("p",null,"Sometimes you can do a Thread.sleep but this is isn't ideal as you need to set a sleep threshold high enough so that it\nwon't expire prematurely on a slow machine. Plus it means that your test will sit around waiting on the timeout even if\nthe code completes quickly on a fast machine."),(0,r.kt)("p",null,"Or you can roll a loop and sleep and retry and sleep and retry, but this is just boilerplate slowing you down."),(0,r.kt)("p",null,"Another common approach is to use countdown latches and this works fine if you are able to inject the latches in the\nappropriate places but it isn't always possible to have the code under test trigger a latch."),(0,r.kt)("p",null,"As an alternative, kotest provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventually")," function and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Eventually")," configuration which periodically test\nthe code ignoring your specified exceptions and ensuring the result satisfies an optional predicate, until the timeout\nis eventually reached or too many iterations have passed. This is flexible and is perfect for testing nondeterministic\ncode."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"simple-examples"},"Simple examples"),(0,r.kt)("p",null,"Let's assume that we send a message to an asynchronous service.\nAfter the message is processed, a new row is inserted into user table."),(0,r.kt)("p",null,"We can check this behaviour with our ",(0,r.kt)("inlineCode",{parentName:"p"},"eventually")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec() {\n  init {\n    should("check if user repository has one row after message is sent") {\n      sendMessage()\n      eventually(5.seconds) {\n        userRepository.size() shouldBe 1\n      }\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"exceptions"},"Exceptions"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"eventually")," will ignore any ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertionError")," that is thrown inside the function (note, that means it won't catch ",(0,r.kt)("inlineCode",{parentName:"p"},"Error"),").\nIf you want to be more specific, you can tell ",(0,r.kt)("inlineCode",{parentName:"p"},"eventually")," to ignore specific exceptions and any others will immediately fail the test."),(0,r.kt)("p",null,"Let's assume that our example from before throws a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserNotFoundException")," while the user is not found in the database.\nIt will eventually return the user when the message is processed by the system."),(0,r.kt)("p",null,"In this scenario, we can explicitly skip the exception that we expect to happen until the test passed, but any other exceptions would\nnot be ignored. Note, this example is similar to the former, but if there was some other error, say a ConnectionException for example, this would cause\nthe eventually block to immediately exit with a failure message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec() {\n  init {\n    should("check if user repository has one row") {\n      eventually(5.seconds, UserNotFoundException::class.java) {\n        userRepository.findBy(1) shouldNotBe null\n      }\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"predicates"},"Predicates"),(0,r.kt)("p",null,"In addition to verifying a test case eventually runs without throwing, we can also verify the result and treat a non-throwing result as failing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : StringSpec({\n  "check that predicate eventually succeeds in time" {\n    var i = 0\n    eventually<Int>(25.seconds, predicate = { it == 5 }) {\n      delay(1.seconds)\n      i++\n    }\n  }\n})\n')),(0,r.kt)("h4",{id:"sharing-configuration"},"Sharing configuration"),(0,r.kt)("p",null,"Sharing the configuration for eventually is a breeze with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Eventually"),' data class. Suppose you have classified the operations in your\nsystem to "slow" and "fast" operations. Instead of remembering which timing values were for slow and fast we can set up some objects to share between tests\nand customize them per suite. This is also a perfect time to show off the listener capabilities of ',(0,r.kt)("inlineCode",{parentName:"p"},"eventually")," which give you insight\ninto the current value of the result of your producer and the state of iterations!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val slow = EventuallyConfig<ServerResponse, ServerException>(5.minutes, interval = 25.milliseconds.fibonacci(), exceptionClass = ServerException::class)\nval fast = slow.copy(duration = 5.seconds)\n\nclass FooTests : StringSpec({\n  val logger = logger("FooTests")\n  val fSlow = slow.copy(listener = { i, t -> logger.info("Current $i after {${t.times} attempts")})\n\n  "server eventually provides a result for /foo" {\n    eventually(fSlow) {\n      fooApi()\n    }\n  }\n})\n\nclass BarTests : StringSpec({\n  val logger = logger("BarTests")\n  val bFast = fast.copy(listener = { i, t -> logger.info("Current $i after {${t.times} attempts")})\n\n  "server eventually provides a result for /bar" {\n    eventually(bFast) {\n      barApi()\n    }\n  }\n})\n\n')),(0,r.kt)("p",null,"Here we can see sharing of configuration can be useful to reduce duplicate code while allowing flexibility for things like\ncustom logging per test suite for clear test logs."))}d.isMDXComponent=!0}}]);