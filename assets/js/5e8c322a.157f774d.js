"use strict";(self.webpackChunk_zendesk_laika_docs=self.webpackChunk_zendesk_laika_docs||[]).push([[597],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"index",title:"@zendesk/laika",slug:"/api/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},s=void 0,u={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"@zendesk/laika",description:"Laika logo",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/laika/docs/api/",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@zendesk/laika",slug:"/api/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"default",next:{title:"How to install in your project",permalink:"/laika/docs/how-to-install"}},p=[{value:"Features",id:"features",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Alternatives",id:"alternatives",children:[],level:2},{value:"Contribution",id:"contribution",children:[],level:2},{value:"License",id:"license",children:[],level:2}],c={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Laika logo",src:n(99).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/laika-example-3yyq0?fontsize=14&hidenavigation=1&theme=dark"},(0,i.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Try Laika on CodeSandbox"}))),(0,i.kt)("p",null,"Test, mock, intercept and modify Apollo Client's operations \u2014 in both browser and unit tests!"),(0,i.kt)("p",null,"Read the Medium article about Laika: ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/zendesk-engineering/mock-graphql-operations-with-laika-the-only-apollo-client-mocking-tool-youll-need-c116e1f62128"},"Mock GraphQL Subscriptions with Laika \u2014 the only Apollo Client mocking tool you\u2019ll need")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example recording output",src:n(2696).Z})),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mock")," responses in either unit tests or browser tests (think Puppeteer or Cypress)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"simulate error state"),(0,i.kt)("li",{parentName:"ul"},"simulate loading state"),(0,i.kt)("li",{parentName:"ul"},"simulate subscriptions (pushing data to the client at any given point)"))),(0,i.kt)("li",{parentName:"ul"},"it can work in production code without affecting the size of the bundle (laika is lazily loaded)"),(0,i.kt)("li",{parentName:"ul"},"captures the variables that were called for a given operation for assertions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"log")," all the data passing through from the network (or whatever Links are after this one)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"record")," your user story"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"generate fixtures and working mock code")," for use in your tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"modify")," backend responses before they reach your components (e.g. to fuzz-test unexpected behavior)")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zendesk.github.io/laika/docs/how-to-install"},"How to install")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zendesk.github.io/laika/docs/usage-in-cypress"},"Usage in Cypress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zendesk.github.io/laika/docs/logging-and-recording"},"Logging and recording")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zendesk.github.io/laika/docs/pitfalls"},"Pitfalls")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zendesk.github.io/laika/docs/modules/Laika"},"API reference"))),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/react/development-testing/testing/"},(0,i.kt)("inlineCode",{parentName:"a"},"MockedProvider"))," - the official Apollo mocking tool designed for unit tests; offers no subscription mocking or recording functionality")),(0,i.kt)("h2",{id:"contribution"},"Contribution"),(0,i.kt)("p",null,"Thanks for your interest in our tool! Community involvement helps make our\ndesign system fresh and tasty for everyone."),(0,i.kt)("p",null,"Got issues with what you find here? Please feel free to create an\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/issues/new"},"issue"),"."),(0,i.kt)("p",null,"If you'd like to take a crack at making some changes, please follow our\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/blob/main/.github/CONTRIBUTING.md"},"contributing")," documentation for details\nneeded to submit a PR."),(0,i.kt)("p",null,"Community behavior is benevolently ruled by a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/blob/main/.github/CODE_OF_CONDUCT.md"},"code of\nconduct"),". Please participate accordingly."),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"Copyright 2021 Zendesk"),(0,i.kt)("p",null,"Licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0.txt"},"Apache License, Version 2.0")))}d.isMDXComponent=!0},2696:function(e,t,n){t.Z=n.p+"assets/images/example-recording-042379b211abc45d31fa27ba7c894f06.png"},99:function(e,t,n){t.Z=n.p+"assets/images/logo-laika-bg-290729bab5b41d117499678d42b25666.png"}}]);