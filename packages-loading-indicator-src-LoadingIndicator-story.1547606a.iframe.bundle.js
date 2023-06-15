"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2435],{"./packages/loading-indicator/src/LoadingIndicator.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LiveExample:()=>LiveExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LoadingIndicator_story});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/lib/dist/esm/index.js"),tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),Spinner_types=__webpack_require__("./packages/loading-indicator/src/Spinner/Spinner.types.ts");const src_PageLoader=__webpack_require__("./packages/loading-indicator/src/PageLoader/PageLoader.tsx").Z;const src_Spinner=__webpack_require__("./packages/loading-indicator/src/Spinner/Spinner.tsx").Z;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _templateObject,_templateObject2,_templateObject3,_LiveExample$paramete,_LiveExample$paramete2,_LiveExample$paramete3;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const LoadingIndicator_story={title:"Components/LoadingIndicator",argTypes:{darkMode:dist_esm.bN.darkMode,description:{control:"text"}},parameters:{default:"LiveExample",controls:{exclude:function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(dist_esm.xZ)},chromatic:{disableSnapshot:!0}}};var storyRootStyles=(0,esm.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  display: flex;\n  gap: 48px;\n  align-items: end;\n"]))),displayOptionContainerStyles=(0,esm.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),labelStyles=(0,esm.css)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  margin-top: ","px;\n"])),tokens_dist_esm.W0[5]),Template=function Template(props){return react.createElement("div",{className:storyRootStyles},Object.values(Spinner_types.z).map((function(displayOption){return react.createElement("div",{key:displayOption,className:displayOptionContainerStyles},react.createElement(src_Spinner,_extends({displayOption},props)),react.createElement(typography_dist_esm.uT,{className:labelStyles,weight:"medium"},react.createElement(typography_dist_esm.ZM,null,displayOption)," Spinner"))})),react.createElement("div",{className:displayOptionContainerStyles},react.createElement(src_PageLoader,props),react.createElement(typography_dist_esm.uT,{className:labelStyles,weight:"medium"},"Blob Loader")," "))};Template.displayName="Template";var LiveExample=Template.bind({});LiveExample.args={description:"Loading..."},LiveExample.parameters=_objectSpread(_objectSpread({},LiveExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LiveExample$paramete=LiveExample.parameters)||void 0===_LiveExample$paramete?void 0:_LiveExample$paramete.docs),{},{source:_objectSpread({originalSource:'(props: {\n  description?: string;\n} & DarkModeProps) => <div className={storyRootStyles}>\n    {Object.values(DisplayOption).map(displayOption => <div key={displayOption} className={displayOptionContainerStyles}>\n        <Spinner displayOption={displayOption} {...props} />\n        <Body className={labelStyles} weight="medium">\n          <InlineCode>{displayOption}</InlineCode> Spinner\n        </Body>\n      </div>)}\n    <div className={displayOptionContainerStyles}>\n      <PageLoader {...props} />\n      <Body className={labelStyles} weight="medium">\n        Blob Loader\n      </Body>{\' \'}\n    </div>\n  </div>'},null===(_LiveExample$paramete2=LiveExample.parameters)||void 0===_LiveExample$paramete2||null===(_LiveExample$paramete3=_LiveExample$paramete2.docs)||void 0===_LiveExample$paramete3?void 0:_LiveExample$paramete3.source)})});var __namedExportsOrder=["LiveExample"];try{StoryMetaType.displayName="StoryMetaType",StoryMetaType.__docgenInfo={description:"Type of the Story default export",displayName:"StoryMetaType",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/loading-indicator/src/LoadingIndicator.story.tsx#StoryMetaType"]={docgenInfo:StoryMetaType.__docgenInfo,name:"StoryMetaType",path:"packages/loading-indicator/src/LoadingIndicator.story.tsx#StoryMetaType"})}catch(__react_docgen_typescript_loader_error){}},"./packages/loading-indicator/src/LoadingIndicator.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>descriptionThemeColor});var _templateObject,_templateObject2,_descriptionThemeColo,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/palette/dist/esm/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var descriptionThemeColor=(_defineProperty(_descriptionThemeColo={},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Dark,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    color: ",";\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light1)),_defineProperty(_descriptionThemeColo,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Light,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    color: ",";\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.dark1)),_descriptionThemeColo)},"./packages/loading-indicator/src/PageLoader/PageLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PageLoader_PageLoader});var react=__webpack_require__("./node_modules/react/index.js"),lottie_react_esm=__webpack_require__("./node_modules/@lottiefiles/react-lottie-player/dist/lottie-react.esm.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),LoadingIndicator_styles=__webpack_require__("./packages/loading-indicator/src/LoadingIndicator.styles.ts");const animation={v:"4.8.0",meta:{g:"LottieFiles AE 3.2.2",a:"",k:"",d:"",tc:""},fr:29.9700012207031,ip:0,op:75.0000030548126,w:72,h:72,nm:"Blob 4",ddd:0,assets:[],layers:[{ddd:0,ind:4,ty:4,nm:"21 Outlines 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[35,32.75,0],ix:2},a:{a:0,k:[50,50,0],ix:1},s:{a:0,k:[69.244,69.244,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0]],o:[[0,0]],v:[[53.25,49]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[0,.929411824544,.392156892664,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[.227,.077],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.519,y:1},o:{x:.692,y:0},t:0,s:[{i:[[6.9,0],[0,-6.9],[-6.9,0],[0,-6.9],[-1.514,-2.068],[-4.143,0],[0,6.9],[0,0],[-13.8,0],[0,0],[0,6.9],[6.9,0],[0,0],[1.821,1.036],[.672,.607],[0,3.68],[6.9,0],[0,-6.9],[0,0]],o:[[-6.9,0],[0,6.9],[6.9,0],[0,2.757],[2.275,3.107],[6.9,0],[0,0],[0,-13.7],[0,0],[6.9,0],[0,-6.9],[0,0],[-2.244,0],[-.792,-.451],[-2.533,-2.288],[0,-6.9],[-6.9,0],[0,0],[-.1,6.9]],v:[[-36.75,5],[-49.25,17.5],[-36.75,30],[-24.25,42.5],[-21.842,49.874],[-11.75,55],[.75,42.5],[.75,29.9],[25.65,5],[38.25,5],[50.75,-7.5],[38.25,-20],[13.25,-20],[7.079,-21.628],[4.876,-23.222],[.75,-32.5],[-11.75,-45],[-24.25,-32.5],[-24.25,-7.5]],c:!0}]},{i:{x:.435,y:1},o:{x:.631,y:0},t:14,s:[{i:[[6.9,0],[0,-6.9],[-6.9,0],[0,-6.9],[-1.514,-2.068],[-4.143,0],[0,6.9],[0,0],[-13.8,0],[0,0],[0,6.9],[14,1],[0,0],[1.821,1.036],[.672,.607],[0,3.68],[6.9,0],[0,-6.9],[0,0]],o:[[-6.9,0],[0,6.9],[6.9,0],[0,2.757],[2.275,3.107],[6.9,0],[0,0],[0,-13.7],[0,0],[11,0],[0,-6.9],[0,0],[-2.244,0],[-.792,-.451],[-2.533,-2.288],[0,-6.9],[-6.9,0],[0,0],[-.1,6.9]],v:[[-37,5],[-49.5,17.5],[-37,30],[-24.5,42.5],[-22.092,49.874],[-12,55],[.5,42.5],[.5,29.9],[25.1,18.5],[38,19],[54.5,0],[38,-20],[13,-20],[6.829,-21.628],[4.626,-23.222],[.5,-32.5],[-12,-45],[-24.5,-32.5],[-24.5,-7.5]],c:!0}]},{i:{x:.53,y:1},o:{x:.705,y:0},t:29,s:[{i:[[7.564,-.08],[-.035,-6.9],[0,0],[-.171,-6.794],[0,0],[-3.758,.141],[0,6.9],[0,0],[-6.656,-.043],[0,0],[-.193,4.328],[8.295,.207],[3.045,.457],[1.24,2.554],[0,0],[.11,3.514],[14.045,-.293],[0,-6.9],[0,0]],o:[[-7.705,.082],[.045,8.707],[0,0],[.295,11.707],[0,0],[7.795,-.293],[0,0],[.045,-7.193],[0,0],[7.295,-.168],[.17,-3.793],[0,0],[-2.288,-.343],[-.864,-1.78],[0,0],[-.205,-6.543],[-13.204,.276],[0,0],[-.1,6.9]],v:[[-37.5,5.75],[-50.25,16.75],[-50.25,31.5],[-50.25,44.75],[-37.25,55.771],[-11.75,55.75],[.25,45],[.375,39.9],[9.95,31],[39.125,31],[49.75,17.25],[39.25,5.125],[30.375,4.75],[25.304,-.098],[24.328,-7.646],[24.25,-25.25],[-.5,-44.75],[-24.625,-25.375],[-24.75,-7.5]],c:!0}]},{i:{x:.477,y:1},o:{x:.663,y:0},t:44,s:[{i:[[15.795,-.543],[-.035,-6.9],[0,0],[-.171,-6.794],[0,0],[-3.758,.141],[0,6.9],[0,0],[-6.656,-.043],[0,0],[-.193,4.328],[8.295,.207],[3.045,.457],[1.24,2.554],[0,0],[.11,3.514],[14.048,.044],[14.175,-.085],[-15.455,-.043]],o:[[-7.701,.265],[.045,8.707],[0,0],[.295,11.707],[0,0],[7.795,-.293],[0,0],[.045,-7.193],[0,0],[7.295,-.168],[.17,-3.793],[0,0],[-2.288,-.343],[-.864,-1.78],[0,0],[-.205,-6.543],[-13.705,-.043],[-13.58,.082],[18.044,.051]],v:[[-37.5,5.75],[-50.25,16.75],[-50.25,31.5],[-50.25,44.75],[-37.25,55.771],[-11.75,55.75],[.25,45],[.375,39.9],[9.95,31],[39.125,31],[49.75,17.25],[39.25,5.125],[30.375,4.75],[25.304,-.098],[24.328,-7.646],[24.25,-25.25],[-.5,-44.75],[-40.125,-44.375],[-39,-20]],c:!0}]},{i:{x:.456,y:1},o:{x:.684,y:0},t:59,s:[{i:[[0,0],[0,0],[0,0],[-.171,-6.794],[-11.33,-1.565],[-3.761,.529],[.045,7.207],[0,0],[-6.656,-.043],[0,0],[-1.455,2.707],[3.545,4.457],[4.795,.082],[2.24,.429],[1.016,1.617],[.11,3.514],[14.047,.044],[15.17,-.418],[.044,-7.043]],o:[[0,0],[0,0],[0,0],[.295,11.707],[4.086,.564],[15.42,-2.168],[0,0],[.045,-7.193],[0,0],[5.42,-.043],[1.616,-3.006],[0,0],[-2.313,-.039],[-1.943,-.372],[-1.462,-2.327],[-.205,-6.543],[-13.706,-.043],[-9.083,.251],[-.057,8.957]],v:[[-50.125,-5.75],[-50.25,11.125],[-50.375,19],[-50.25,33],[-31,55.396],[-18.5,55.25],[0,28.75],[0,18.775],[10.7,6],[36.875,6.25],[47.875,.375],[47.375,-14.75],[39.75,-19.125],[31.929,-19.723],[26.578,-23.521],[24.5,-31.5],[9.25,-44.5],[-38.375,-44.375],[-50.125,-29.25]],c:!0}]},{t:74.0000030140818,s:[{i:[[6.9,0],[0,-6.9],[-6.9,0],[0,-6.9],[-1.514,-2.068],[-4.143,0],[0,6.9],[0,0],[-13.8,0],[0,0],[0,6.9],[6.9,0],[0,0],[1.821,1.036],[.672,.607],[0,3.68],[6.9,0],[0,-6.9],[0,0]],o:[[-6.9,0],[0,6.9],[6.9,0],[0,2.757],[2.275,3.107],[6.9,0],[0,0],[0,-13.7],[0,0],[6.9,0],[0,-6.9],[0,0],[-2.244,0],[-.792,-.451],[-2.533,-2.288],[0,-6.9],[-6.9,0],[0,0],[-.1,6.9]],v:[[-36.75,5],[-49.25,17.5],[-36.75,30],[-24.25,42.5],[-21.842,49.874],[-11.75,55],[.75,42.5],[.75,29.9],[25.65,5],[38.25,5],[50.75,-7.5],[38.25,-20],[13.25,-20],[7.079,-21.628],[4.876,-23.222],[.75,-32.5],[-11.75,-45],[-24.25,-32.5],[-24.25,-7.5]],c:!0}]}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[0,.929411824544,.392156892664,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[50.455,50.293],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[92.583,92.583],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,bm:0,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:-9.00000036657752,op:75.0000030548126,st:0,bm:0}],markers:[]};var _templateObject,tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js");var blobStyles={width:"72px",height:"72px",marginBottom:"".concat(tokens_dist_esm.W0[3],"px")},rootStyles=(0,esm.css)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  text-align: center;\n"]))),_excluded=["baseFontSize","description","darkMode","className"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var PageLoader=function PageLoader(_ref){var baseFontSizeProp=_ref.baseFontSize,description=_ref.description,darkModeProp=_ref.darkMode,className=_ref.className,rest=_objectWithoutProperties(_ref,_excluded),theme=(0,dist_esm.vs)(darkModeProp).theme,baseFontSize=(0,typography_dist_esm.hN)(baseFontSizeProp);return react.createElement("div",_extends({className:(0,esm.cx)(rootStyles,className)},rest),react.createElement(lottie_react_esm.J5,{autoplay:!0,loop:!0,src:animation,style:blobStyles}),description&&react.createElement(typography_dist_esm.uT,{className:LoadingIndicator_styles.o[theme],baseFontSize},description))};PageLoader.displayName="PageLoader",PageLoader.propTypes={darkMode:prop_types_default().bool,description:prop_types_default().string};const PageLoader_PageLoader=PageLoader;try{PageLoader.displayName="PageLoader",PageLoader.__docgenInfo={description:"Displays an animation of various brand shapes morphing from one to another paired with description text",displayName:"PageLoader",props:{description:{defaultValue:null,description:"Description text",name:"description",required:!1,type:{name:"string | undefined"}},baseFontSize:{defaultValue:null,description:"The base font size of the description text.",name:"baseFontSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"16"},{value:"13"}]}},darkMode:{defaultValue:{value:"false"},description:"Renders the component with dark mode styles.",name:"darkMode",required:!1,type:{name:"boolean | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/loading-indicator/src/PageLoader/PageLoader.tsx#PageLoader"]={docgenInfo:PageLoader.__docgenInfo,name:"PageLoader",path:"packages/loading-indicator/src/PageLoader/PageLoader.tsx#PageLoader"})}catch(__react_docgen_typescript_loader_error){}},"./packages/loading-indicator/src/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Spinner_Spinner});var react=__webpack_require__("./node_modules/react/index.js"),lottie_react_esm=__webpack_require__("./node_modules/@lottiefiles/react-lottie-player/dist/lottie-react.esm.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),LoadingIndicator_styles=__webpack_require__("./packages/loading-indicator/src/LoadingIndicator.styles.ts");const animation={v:"4.8.0",meta:{g:"LottieFiles AE 3.2.2",a:"",k:"",d:"",tc:""},fr:60,ip:0,op:54,w:125,h:125,nm:"Spinner",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"Spinner_Blue",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[62.5,62.5,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[24,24],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[0,.639215707779,.360784322023,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:4,ix:5},lc:2,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[300,300],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Read Circle",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:0,s:[50]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:27,s:[38]},{t:54,s:[50]}],ix:1},e:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:0,s:[51]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:27,s:[60]},{t:54,s:[51]}],ix:2},o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:0,s:[180]},{t:54,s:[540]}],ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1}],ip:0,op:300,st:0,bm:0}],markers:[]};var _SpinnerSizes,_SpinnerBottomMargins,_templateObject,_templateObject2,_templateObject3,_templateObject4,palette_dist_esm=__webpack_require__("./packages/palette/dist/esm/index.js"),tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js"),Spinner_types=__webpack_require__("./packages/loading-indicator/src/Spinner/Spinner.types.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var SpinnerSizes=(_defineProperty(_SpinnerSizes={},Spinner_types.z.DefaultHorizontal,24),_defineProperty(_SpinnerSizes,Spinner_types.z.DefaultVertical,24),_defineProperty(_SpinnerSizes,Spinner_types.z.LargeVertical,48),_defineProperty(_SpinnerSizes,Spinner_types.z.XlargeVertical,64),_SpinnerSizes),SpinnerBottomMargins=(_defineProperty(_SpinnerBottomMargins={},Spinner_types.z.DefaultHorizontal,0),_defineProperty(_SpinnerBottomMargins,Spinner_types.z.DefaultVertical,tokens_dist_esm.W0[2]),_defineProperty(_SpinnerBottomMargins,Spinner_types.z.LargeVertical,tokens_dist_esm.W0[2]),_defineProperty(_SpinnerBottomMargins,Spinner_types.z.XlargeVertical,tokens_dist_esm.W0[3]),_SpinnerBottomMargins),rootStyles=(0,esm.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  text-align: center;\n"]))),darkModeSpinnerStyles=(0,esm.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  path {\n    stroke: ",";\n  }\n"])),palette_dist_esm.D.green.base),colorOverrideStyles=function colorOverrideStyles(color){return(0,esm.css)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  path {\n    stroke: ",";\n  }\n"])),color)},horizontalDisplayOptionStyles=(0,esm.css)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 6px;\n"])));function Spinner_typeof(obj){return Spinner_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Spinner_typeof(obj)}var _excluded=["baseFontSize","displayOption","description","sizeOverride","colorOverride","darkMode","className"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function Spinner_defineProperty(obj,key,value){return(key=function Spinner_toPropertyKey(arg){var key=function Spinner_toPrimitive(input,hint){if("object"!==Spinner_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Spinner_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Spinner_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Spinner=function Spinner(_ref){var _cx2,baseFontSizeProp=_ref.baseFontSize,_ref$displayOption=_ref.displayOption,displayOption=void 0===_ref$displayOption?Spinner_types.z.DefaultVertical:_ref$displayOption,description=_ref.description,sizeOverride=_ref.sizeOverride,colorOverride=_ref.colorOverride,darkModeProp=_ref.darkMode,className=_ref.className,rest=_objectWithoutProperties(_ref,_excluded),size=null!=sizeOverride?sizeOverride:SpinnerSizes[displayOption],spinnerMarginBottom=SpinnerBottomMargins[displayOption],_useDarkMode=(0,dist_esm.vs)(darkModeProp),darkMode=_useDarkMode.darkMode,theme=_useDarkMode.theme,baseFontSize=(0,typography_dist_esm.hN)(baseFontSizeProp);return react.createElement("div",_extends({className:(0,esm.cx)(rootStyles,Spinner_defineProperty({},horizontalDisplayOptionStyles,displayOption===Spinner_types.z.DefaultHorizontal),className)},rest),react.createElement(lottie_react_esm.J5,{autoplay:!0,loop:!0,src:animation,className:(0,esm.cx)((_cx2={},Spinner_defineProperty(_cx2,darkModeSpinnerStyles,darkMode),Spinner_defineProperty(_cx2,colorOverrideStyles(colorOverride),!!colorOverride),_cx2)),style:{display:"flex",width:size,height:size,marginBottom:description?spinnerMarginBottom:void 0}}),description&&react.createElement(typography_dist_esm.uT,{className:LoadingIndicator_styles.o[theme],baseFontSize},description))};Spinner.displayName="Spinner",Spinner.propTypes={darkMode:prop_types_default().bool,description:prop_types_default().string};const Spinner_Spinner=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Displays an spinner animation paired with description text",displayName:"Spinner",props:{displayOption:{defaultValue:{value:"default-vertical"},description:"Determines the size or orientation of the spinner and description text",name:"displayOption",required:!1,type:{name:"string | undefined"}},description:{defaultValue:null,description:"Description text",name:"description",required:!1,type:{name:"string | undefined"}},sizeOverride:{defaultValue:null,description:"An override for the spinner animation’s size in pixels. Intended for internal use.",name:"sizeOverride",required:!1,type:{name:"number | undefined"}},colorOverride:{defaultValue:null,description:"An override for the spinner animation’s color. Intended for internal use.",name:"colorOverride",required:!1,type:{name:"string | undefined"}},baseFontSize:{defaultValue:null,description:"The base font size of the description text.",name:"baseFontSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"16"},{value:"13"}]}},darkMode:{defaultValue:{value:"false"},description:"Renders the component with dark mode styles.",name:"darkMode",required:!1,type:{name:"boolean | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/loading-indicator/src/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"packages/loading-indicator/src/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./packages/loading-indicator/src/Spinner/Spinner.types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>DisplayOption});var DisplayOption={DefaultHorizontal:"default-horizontal",DefaultVertical:"default-vertical",LargeVertical:"large-vertical",XlargeVertical:"xlarge-vertical"}}}]);