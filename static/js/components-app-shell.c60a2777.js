(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/components/AppShell.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./src/components/DimensionsMonitor.tsx"),u=n("./src/components/Header.tsx"),s=n("./src/components/HeaderDesktop.tsx"),c=n("./src/components/Menu.tsx"),p=n("./src/components/MenuDesktop.tsx"),m=n("./src/modules/theme.ts"),d=n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),g=n("./node_modules/react-native-web/dist/exports/Dimensions/index.js"),f=n("./node_modules/react-native-web/dist/exports/Image/index.js"),h=n("./node_modules/react-native-web/dist/exports/Text/index.js"),y=n("./node_modules/react-native-web/dist/exports/View/index.js");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=x(this,(e=M(t)).call.apply(e,[this].concat(a)))).menu=null,n.getMobileStyles=function(){var e=Object(m.a)();return d.a.create({container:{flex:1,padding:16,height:g.a.get("window").height-s.a.height,overflow:"auto"},logoImage:{width:40,height:40,marginTop:10,marginBottom:10},logoText:{color:e.textColor1,fontFamily:"MankSans-Medium",fontSize:22,marginLeft:10}})},n.getDesktopStyles=function(){return d.a.create({container:{flexDirection:"row",flex:1},content:{flex:1,padding:16,height:g.a.get("window").height-s.a.height,overflow:"auto"}})},n.renderMobile=function(){var e=n.props,t=e.title,o=e.logoMenu,a=e.screenTitle,l=e.renderUserData,i=e.menu,s=e.onMenuPress,p=e.currentMenuPath,m=e.children,d=n.getMobileStyles();return r.createElement(c.a,{ref:function(e){return n.menu=e},menu:i,onMenuPress:s,currentMenuPath:p,renderLogo:function(){return r.createElement(r.Fragment,null,r.createElement(f.a,{source:o,style:d.logoImage}),r.createElement(h.a,{style:d.logoText},t))},renderUserData:l},r.createElement(u.a,{title:a,leftButton:{icon:"bars",onPress:function(){return n.menu.open()}}}),r.createElement(y.a,{style:d.container},m))},n.renderDesktop=function(){var e=n.props,t=e.title,o=e.logoHeader,a=e.greeting,l=e.menu,i=e.onMenuPress,u=e.currentMenuPath,c=e.children,m=n.getDesktopStyles();return r.createElement(r.Fragment,null,r.createElement(s.a,{title:t,logo:o,greeting:a}),r.createElement(y.a,{style:m.container},r.createElement(p.a,{menu:l,headerHeight:s.a.height,onMenuPress:i,currentMenuPath:u}),r.createElement(y.a,{style:m.content},c)))},n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){var e=this;return r.createElement(i.a,null,function(t){return t.isDesktop?e.renderDesktop():e.renderMobile()})}}])&&S(n.prototype,o),a&&S(n,a),t}();try{_.displayName="AppShell",_.__docgenInfo={description:"",displayName:"AppShell",props:{logoHeader:{defaultValue:null,description:"",name:"logoHeader",required:!0,type:{name:"ImageSourcePropType"}},logoMenu:{defaultValue:null,description:"",name:"logoMenu",required:!0,type:{name:"ImageSourcePropType"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},greeting:{defaultValue:null,description:"",name:"greeting",required:!1,type:{name:"string"}},screenTitle:{defaultValue:null,description:"",name:"screenTitle",required:!0,type:{name:"string"}},renderUserData:{defaultValue:null,description:"",name:"renderUserData",required:!1,type:{name:"() => ReactNode"}},menu:{defaultValue:null,description:"",name:"menu",required:!0,type:{name:"{ path: string; text: string; }[]"}},onMenuPress:{defaultValue:null,description:"",name:"onMenuPress",required:!0,type:{name:"(path: string) => void"}},currentMenuPath:{defaultValue:null,description:"",name:"currentMenuPath",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AppShell.tsx#AppShell"]={docgenInfo:_.__docgenInfo,name:"AppShell",path:"src/components/AppShell.tsx#AppShell"})}catch(e){}var P=n("./docs/img/logo.png"),v=n.n(P);function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components,n=E(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"appshell"}},"AppShell"),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),o.a.createElement(l.PropsTable,{of:_}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),o.a.createElement(l.Playground,{__position:1,__code:"<AppShell\n  logoHeader={logo}\n  logoMenu={logo}\n  title=\"App Title\"\n  greeting=\"Hello, user.\"\n  screenTitle=\"Screen Title\"\n  menu={[\n    { text: 'Home', path: 'Home' },\n    { text: 'Settings', path: 'Settings' },\n    { text: 'About', path: 'About' },\n  ]}\n  onMenuPress={path => alert(path)}\n  currentMenuPath=\"Home\"\n/>",__scope:{props:n,AppShell:_,logo:v.a}},o.a.createElement(_,{logoHeader:v.a,logoMenu:v.a,title:"App Title",greeting:"Hello, user.",screenTitle:"Screen Title",menu:[{text:"Home",path:"Home"},{text:"Settings",path:"Settings"},{text:"About",path:"About"}],onMenuPress:function(e){return alert(e)},currentMenuPath:"Home"})))}}}]);