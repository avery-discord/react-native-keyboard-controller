"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7253],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>k});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),k=o,b=d["".concat(s,".").concat(k)]||d[k]||u[k]||a;return t?n.createElement(b,i(i({ref:r},p),{},{components:t})):n.createElement(b,i({ref:r},p))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1172:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={slug:"new-hook",title:"Version 1.4.0 with new hook",authors:["kirill"],tags:["new hook","iOS","intermediate values"],keyword:["react-native-keyboard-controller","new hook","useKeyboardHandler","low-level","keyboard lifecycle"]},i=void 0,l={permalink:"/react-native-keyboard-controller/pr-preview/pr-209/blog/new-hook",editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2022-10-15-new-hook/index.md",source:"@site/blog/2022-10-15-new-hook/index.md",title:"Version 1.4.0 with new hook",description:"New 1.4.0 release enhance API and adds new useKeyboardHandler hook. While keeping no breaking changes this release (via new hook) adds an ability to have intermediate values on iOS for height and progress values (before it was not possible and it was a restriction of the library).",date:"2022-10-15T00:00:00.000Z",formattedDate:"October 15, 2022",tags:[{label:"new hook",permalink:"/react-native-keyboard-controller/pr-preview/pr-209/blog/tags/new-hook"},{label:"iOS",permalink:"/react-native-keyboard-controller/pr-preview/pr-209/blog/tags/i-os"},{label:"intermediate values",permalink:"/react-native-keyboard-controller/pr-preview/pr-209/blog/tags/intermediate-values"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"Kirill Zyusko",title:"Library author",url:"https://github.com/kirillzyusko",imageURL:"https://github.com/kirillzyusko.png",key:"kirill"}],frontMatter:{slug:"new-hook",title:"Version 1.4.0 with new hook",authors:["kirill"],tags:["new hook","iOS","intermediate values"],keyword:["react-native-keyboard-controller","new hook","useKeyboardHandler","low-level","keyboard lifecycle"]},prevItem:{title:"Interactive keyboard support",permalink:"/react-native-keyboard-controller/pr-preview/pr-209/blog/interactive-keyboard"},nextItem:{title:"Version 1.2.0 with new architecture support",permalink:"/react-native-keyboard-controller/pr-preview/pr-209/blog/fabric"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"New 1.4.0 release enhance API and adds new ",(0,o.kt)("inlineCode",{parentName:"p"},"useKeyboardHandler")," hook. While keeping no breaking changes this release (via new hook) adds an ability to have intermediate values on iOS for ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"progress")," values (before it was not possible and it was a restriction of the library)."),(0,o.kt)("p",null,"Also this hooks allow to track keyboard lifecycle and it's better suit for complex animations \ud83d\ude0e"),(0,o.kt)("p",null,"Check out the new documentation for this hook, upgrade library version to ",(0,o.kt)("inlineCode",{parentName:"p"},"1.4.0")," and start using it today!"))}u.isMDXComponent=!0}}]);