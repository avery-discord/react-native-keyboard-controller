"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3,description:"A testing-guide showing how to write unit-tests using jest",keywords:["react-native-keyboard-controller","jest","mock","testing"]},a="Jest testing guide",s={unversionedId:"recipes/jest-testing-guide",id:"recipes/jest-testing-guide",title:"Jest testing guide",description:"A testing-guide showing how to write unit-tests using jest",source:"@site/docs/recipes/jest-testing-guide.md",sourceDirName:"recipes",slug:"/recipes/jest-testing-guide",permalink:"/react-native-keyboard-controller/pr-preview/pr-205/docs/next/recipes/jest-testing-guide",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/docs/recipes/jest-testing-guide.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"A testing-guide showing how to write unit-tests using jest",keywords:["react-native-keyboard-controller","jest","mock","testing"]},sidebar:"tutorialSidebar",previous:{title:"Platforms capabilities and limitations",permalink:"/react-native-keyboard-controller/pr-preview/pr-205/docs/next/recipes/platform-differences"},next:{title:"API Reference",permalink:"/react-native-keyboard-controller/pr-preview/pr-205/docs/next/category/api-reference"}},c={},l=[{value:"Setting up a mock",id:"setting-up-a-mock",level:2},{value:"Test case example",id:"test-case-example",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jest-testing-guide"},"Jest testing guide"),(0,i.kt)("h2",{id:"setting-up-a-mock"},"Setting up a mock"),(0,i.kt)("p",null,"This library includes a built in mock for Jest. To use it, add the following code to the ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#setupfiles-array"},"jest setup")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('react-native-keyboard-controller', () =>\n  require('react-native-keyboard-controller/jest')\n);\n")),(0,i.kt)("h2",{id:"test-case-example"},"Test case example"),(0,i.kt)("p",null,"Once you've set up mock - you can write your first test \ud83d\ude0a. A sample of test case is shown below. For more test cases please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example/__tests__"},"this")," link."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@testing-library/jest-native/extend-expect';\nimport React from 'react';\nimport { Animated } from 'react-native';\nimport { render } from '@testing-library/react-native';\n\nimport { useKeyboardAnimation } from 'react-native-keyboard-controller';\n\nfunction TestComponent() {\n  const { height } = useKeyboardAnimation();\n\n  return (\n    <Animated.View\n      testID=\"view\"\n      style={{ transform: [{ translateY: height }] }}\n    />\n  );\n}\n\ndescribe('basic keyboard interaction', () => {\n  it('should have different styles depends on position', () => {\n    const { getByTestId, update } = render(<TestComponent />);\n\n    expect(getByTestId('view')).toHaveStyle({ transform: [{ translateY: 0 }] });\n\n    (useKeyboardAnimation as jest.Mock).mockReturnValue({\n      height: new Animated.Value(150),\n      progress: new Animated.Value(0.5),\n    });\n    update(<TestComponent />);\n\n    expect(getByTestId('view')).toHaveStyle({\n      transform: [{ translateY: 150 }],\n    });\n\n    (useKeyboardAnimation as jest.Mock).mockReturnValue({\n      height: new Animated.Value(300),\n      progress: new Animated.Value(1),\n    });\n    update(<TestComponent />);\n\n    expect(getByTestId('view')).toHaveStyle({\n      transform: [{ translateY: 300 }],\n    });\n  });\n});\n")))}u.isMDXComponent=!0}}]);