(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/components/DropDown.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/react-native-vector-icons/FontAwesome.js"),s=n("./src/components/Modal.tsx"),u=n("./src/modules/theme.ts"),c=n("./node_modules/react-native-web/dist/exports/TouchableHighlight/index.js"),d=n("./node_modules/react-native-web/dist/exports/Text/index.js"),p=n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),m=n("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js"),f=n("./node_modules/react-native-web/dist/exports/View/index.js"),y=n("./node_modules/react-native-web/dist/exports/FlatList/index.js");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function w(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){return g(this,t),w(this,x(t).apply(this,arguments))}return S(t,o["PureComponent"]),v(t,[{key:"render",value:function(){var e=this.props,t=e.first,n=e.last,r=e.label,a=e.value,l=e.onPress,i=Object(u.a)();return o.createElement(c.a,{onPress:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return l(a)}),underlayColor:i.backgroundColor2,style:{borderTopLeftRadius:t?5:0,borderTopRightRadius:t?5:0,borderBottomLeftRadius:n?5:0,borderBottomRightRadius:n?5:0}},o.createElement(d.a,{style:E.modalItem},r))}}]),t}(),D=function(e){function t(){var e,n;g(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=w(this,(e=x(t)).call.apply(e,[this].concat(r)))).state={modalOpen:!1},n.handleItemPress=function(e){var t=n.props.onChange;n.setState({modalOpen:!1}),t(e)},n.getStyles=function(){var e=Object(u.a)();return p.a.create({container:{paddingHorizontal:16,paddingVertical:8,borderWidth:1,borderColor:e.borderColor1,borderRadius:3},label:{color:e.textColor2,fontFamily:"Lato-Regular",fontSize:12,lineHeight:16},text:{height:22,color:e.textColor1,fontFamily:"Lato-Bold",fontSize:16},seta:{color:e.textColor1,fontSize:16,position:"absolute",bottom:10,right:16},modalOverlay:{justifyContent:"center"},modalContainer:{borderRadius:5,backgroundColor:e.backgroundColor1,margin:16},modalItem:{paddingHorizontal:16,paddingVertical:16,fontFamily:"Lato-Bold",fontSize:16},emptyMessageContainer:{flexDirection:"row",alignItems:"center",paddingHorizontal:16}})},n}return S(t,o["Component"]),v(t,[{key:"render",value:function(){var e=this,t=this.state.modalOpen,n=this.props,r=n.label,a=n.items,l=n.value,c=n.emptyMessage,p=n.style,b=a.find(function(e){return e.value===l}),g=this.getStyles(),h=Object(u.a)();return o.createElement(m.a,{onPress:function(){return e.setState({modalOpen:!0})}},o.createElement(f.a,{style:[g.container,p]},o.createElement(d.a,{style:g.label},r),o.createElement(d.a,{style:g.text},b?b.label:"-"),o.createElement(i.a,{name:"caret-down",style:g.seta}),o.createElement(s.a,{visible:t,onRequestClose:function(){return e.setState({modalOpen:!1})},overlayStyle:g.modalOverlay},o.createElement(f.a,{style:g.modalContainer},a.length>0?o.createElement(y.a,{data:a,initialNumToRender:a.length,keyExtractor:function(e){return e.value.toString()},renderItem:function(t){var n=t.item,r=t.index;return o.createElement(_,{first:0===r,last:r===a.length-1,label:n.label,value:n.value,onPress:e.handleItemPress})}}):o.createElement(f.a,{style:g.emptyMessageContainer},o.createElement(i.a,{name:"warning",color:h.warningColor,size:24}),o.createElement(d.a,{style:E.modalItem},c))))))}}]),t}();D.defaultProps={emptyMessage:"N\xe3o h\xe1 registros cadastrados"};var E=p.a.create({modalItem:{paddingHorizontal:16,paddingVertical:16,fontFamily:"Lato-Bold",fontSize:16}});try{D.displayName="DropDown",D.__docgenInfo={description:"",displayName:"DropDown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ label: string; value: any; }[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: any) => void"}},emptyMessage:{defaultValue:{value:"N\xe3o h\xe1 registros cadastrados"},description:"",name:"emptyMessage",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropDown.tsx#DropDown"]={docgenInfo:D.__docgenInfo,name:"DropDown",path:"src/components/DropDown.tsx#DropDown"})}catch(e){}function C(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=C(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"dropdown"}},"DropDown"),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),r.a.createElement(l.PropsTable,{of:D}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(l.Playground,{__position:1,__code:"<DropDown\n  label=\"DropDown\"\n  items={[{ value: 1, label: 'Fernando' }, { value: 2, label: 'Alex' }]}\n  value={2}\n  onChange={value => alert('Selected ' + value)}\n/>",__scope:{props:n,DropDown:D}},r.a.createElement(D,{label:"DropDown",items:[{value:1,label:"Fernando"},{value:2,label:"Alex"}],value:2,onChange:function(e){return alert("Selected "+e)}})))}}}]);