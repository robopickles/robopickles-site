(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{117:function(t,e,r){"use strict";r.r(e),e.default=r.p+"assets/images/minefield-ca2a6901b5946e38a95807d1e288e43f.jpg"},76:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return a})),r.d(e,"metadata",(function(){return l})),r.d(e,"toc",(function(){return u})),r.d(e,"default",(function(){return c}));var i=r(3),n=r(7),o=(r(0),r(103)),a={title:"Android Studio setup for Flutter plugin",author:"Kirill Pinchuk",authorURL:"https://github.com/cybergrind",tags:["flutter","android-studio","intellij-idea"]},l={permalink:"/blog/2020/10/03/flutter-and-android-studio",editUrl:"https://github.com/robopickles/blog/2020-10-03-flutter-and-android-studio.mdx",source:"@site/blog/2020-10-03-flutter-and-android-studio.mdx",description:"We wanted to run inference on the phone for our neural network for unwrapping. We have an application built with Flutter to provide cross-platform development, and we wanted to integrate with the mobile Pytorch library. We always tried to cut corners everywhere we could. But there were no excellent Flutter plugins that support our neural model on the current Flutter's life stage. Most plugins re-create Pytorch's mobile sample application that is classifying images, but it's required to calculate heatmaps in our case.",date:"2020-10-03T00:00:00.000Z",tags:[{label:"flutter",permalink:"/blog/tags/flutter"},{label:"android-studio",permalink:"/blog/tags/android-studio"},{label:"intellij-idea",permalink:"/blog/tags/intellij-idea"}],title:"Android Studio setup for Flutter plugin",readingTime:4.24,truncated:!0,nextItem:{title:"Seamless Stitching of Perfect Labels",permalink:"/blog/seamless-stitching"}},u=[],s={toc:u};function c(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We wanted to run inference on the phone for our ",Object(o.b)("a",{parentName:"p",href:"https://perfectlabel.io"},"neural network for unwrapping"),". We have an application built with Flutter to provide cross-platform development, and we wanted to integrate with the mobile Pytorch library. We always tried to cut corners everywhere we could. But there were no excellent Flutter plugins that support our neural model on the current Flutter's life stage. Most plugins re-create Pytorch's mobile sample application that is classifying images, but it's required to calculate heatmaps in our case."),Object(o.b)("p",null,"Since it\u2019s super easy to call native code in Flutter, it was an idea to write a custom plugin, doing the required calculations."),Object(o.b)("p",null,"But many different possible outputs can exist, and we can improve existing Flutter's ecosphere by separating ",Object(o.b)("a",{parentName:"p",href:"https://github.com/robopickles/proper_pytorch"},"part of an internal application to plugin"),"."),Object(o.b)("p",null,"This article is about how to start plugin development using Flutter and Android Studio. Currently, Flutter (1.20.3) and android-studio (3.6/4.0) have some gotchas to work it better than out-of-box."),Object(o.b)("p",null,Object(o.b)("img",{alt:"caution",src:r(117).default})))}c.isMDXComponent=!0}}]);