(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/components/Card.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js"),d=t("./node_modules/react-native-web/dist/exports/Text/index.js"),l=t("./node_modules/react-native-web/dist/exports/View/index.js"),s=t("./src/components/Card.tsx");function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components,t=p(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"card"}},"Card"),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"card-1"}},"Card"),r.a.createElement(c.PropsTable,{of:s.a}),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"cardheader"}},"Card.Header"),r.a.createElement(c.PropsTable,{of:s.a.Header}),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"cardsection"}},"Card.Section"),r.a.createElement(c.PropsTable,{of:s.a.Section}),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),r.a.createElement(c.Playground,{__position:3,__code:"<View style={{ padding: 20, backgroundColor: '#ccc' }}>\n  <Card>\n    <Card.Header title=\"Title\" onHelpPress={() => alert('Help!')} />\n    <Card.Section>\n      <Text>Text...</Text>\n    </Card.Section>\n    <Card.Section>\n      <Text>Another text...</Text>\n    </Card.Section>\n  </Card>\n</View>",__scope:{props:t,Text:d.a,View:l.a,Card:s.a}},r.a.createElement(l.a,{style:{padding:20,backgroundColor:"#ccc"}},r.a.createElement(s.a,null,r.a.createElement(s.a.Header,{title:"Title",onHelpPress:function(){return alert("Help!")}}),r.a.createElement(s.a.Section,null,r.a.createElement(d.a,null,"Text...")),r.a.createElement(s.a.Section,null,r.a.createElement(d.a,null,"Another text..."))))))}}}]);