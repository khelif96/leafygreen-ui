"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8745],{"./packages/icon-button/src/IconButton.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Generated:()=>Generated,LiveExample:()=>LiveExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IconButton_story});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_iconButtonSizes,_templateObject6,_templateObject7,_iconButtonMode,_templateObject8,_templateObject9,_focusStyle,_templateObject10,_templateObject11,_disabledStyle,_templateObject12,_templateObject13,_activeStyle,_templateObject14,react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./packages/icon/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/lib/dist/esm/index.js"),Size={Default:"default",Large:"large",XLarge:"xlarge"},prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),a11y_dist_esm=__webpack_require__("./packages/a11y/dist/esm/index.js"),box_dist_esm=__webpack_require__("./packages/box/dist/esm/index.js"),emotion_dist_esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),leafygreen_provider_dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),palette_dist_esm=__webpack_require__("./packages/palette/dist/esm/index.js"),tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var removeButtonStyle=(0,emotion_dist_esm.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  border: none;\n  -webkit-appearance: unset;\n  padding: unset;\n"]))),baseIconButtonStyle=(0,emotion_dist_esm.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  display: inline-block;\n  border-radius: 100px;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: ","ms ease-in-out;\n  transition-property: color, box-shadow;\n\n  // Set background to fully-transparent white for cross-browser compatability with Safari\n  //\n  // Safari treats \"transparent\" values in CSS as transparent black instead of white\n  // which can make things render differently across browsers if not defined explicitly.\n  background-color: rgba(255, 255, 255, 0);\n\n  &:before {\n    content: '';\n    transition: ","ms all ease-in-out;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-radius: 100%;\n    opacity: 0;\n    transform: scale(0.8);\n  }\n\n  &:active:before,\n  &:hover:before,\n  &:focus:before {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])),tokens_dist_esm.nV.default,tokens_dist_esm.nV.default),iconButtonSizes=(_defineProperty(_iconButtonSizes={},Size.Default,(0,emotion_dist_esm.css)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    height: 28px;\n    width: 28px;\n  "])))),_defineProperty(_iconButtonSizes,Size.Large,(0,emotion_dist_esm.css)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    height: 36px;\n    width: 36px;\n  "])))),_defineProperty(_iconButtonSizes,Size.XLarge,(0,emotion_dist_esm.css)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    height: 42px;\n    width: 42px;\n  "])))),_iconButtonSizes),iconButtonMode=(_defineProperty(_iconButtonMode={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    color: ",";\n\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),palette_dist_esm.D.gray.base,palette_dist_esm.D.black,palette_dist_esm.D.gray.light2)),_defineProperty(_iconButtonMode,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n    color: ",";\n\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),palette_dist_esm.D.gray.light1,palette_dist_esm.D.gray.light3,palette_dist_esm.D.gray.dark1)),_iconButtonMode),focusStyle=(_defineProperty(_focusStyle={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n    &:focus-visible {\n      color: ",";\n      box-shadow: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),palette_dist_esm.D.black,tokens_dist_esm.kN[dist_esm.Q2.Light].default,palette_dist_esm.D.gray.light2)),_defineProperty(_focusStyle,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(_templateObject9||(_templateObject9=_taggedTemplateLiteral(["\n    &:focus-visible {\n      color: ",";\n      box-shadow: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),palette_dist_esm.D.gray.light3,tokens_dist_esm.kN[dist_esm.Q2.Dark].default,palette_dist_esm.D.gray.dark1)),_focusStyle),disabledStyle=(_defineProperty(_disabledStyle={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(_templateObject10||(_templateObject10=_taggedTemplateLiteral(["\n    cursor: not-allowed;\n    color: ",";\n    background-color: rgba(255, 255, 255, 0);\n\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: rgba(255, 255, 255, 0);\n      }\n    }\n\n    &:focus {\n      color: ",";\n\n      &:before {\n        background-color: rgba(255, 255, 255, 0);\n      }\n    }\n  "])),palette_dist_esm.D.gray.light1,palette_dist_esm.D.gray.light1,palette_dist_esm.D.gray.light1)),_defineProperty(_disabledStyle,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(_templateObject11||(_templateObject11=_taggedTemplateLiteral(["\n    cursor: not-allowed;\n    color: ",";\n    background-color: rgba(255, 255, 255, 0);\n\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: rgba(255, 255, 255, 0);\n      }\n    }\n\n    &:focus {\n      color: ",";\n\n      &:before {\n        background-color: rgba(255, 255, 255, 0);\n      }\n    }\n  "])),palette_dist_esm.D.gray.dark1,palette_dist_esm.D.gray.dark1,palette_dist_esm.D.gray.dark1)),_disabledStyle),activeStyle=(_defineProperty(_activeStyle={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(_templateObject12||(_templateObject12=_taggedTemplateLiteral(["\n    color: ",";\n\n    &:before {\n      background-color: ",";\n      opacity: 1;\n      transform: scale(1);\n    }\n  "])),palette_dist_esm.D.black,palette_dist_esm.D.gray.light2)),_defineProperty(_activeStyle,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(_templateObject13||(_templateObject13=_taggedTemplateLiteral(["\n    color: ",";\n\n    &:before {\n      background-color: ",";\n      opacity: 1;\n      transform: scale(1);\n    }\n  "])),palette_dist_esm.D.gray.light3,palette_dist_esm.D.gray.dark1)),_activeStyle),iconStyle=(0,emotion_dist_esm.css)(_templateObject14||(_templateObject14=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));function IconButton_typeof(obj){return IconButton_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},IconButton_typeof(obj)}var _excluded=["size","darkMode","disabled","active","tabIndex","className","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){IconButton_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function IconButton_defineProperty(obj,key,value){return(key=function IconButton_toPropertyKey(arg){var key=function IconButton_toPrimitive(input,hint){if("object"!==IconButton_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==IconButton_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===IconButton_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _LiveExample$paramete,_LiveExample$paramete2,_LiveExample$paramete3,_Generated$parameters,_Generated$parameters2,_Generated$parameters3,IconButton=react.forwardRef((function(_ref,ref){var _cx,_objectSpread2,_ref$size=_ref.size,size=void 0===_ref$size?Size.Default:_ref$size,darkModeProp=_ref.darkMode,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$active=_ref.active,active=void 0!==_ref$active&&_ref$active,_ref$tabIndex=_ref.tabIndex,tabIndex=void 0===_ref$tabIndex?0:_ref$tabIndex,className=_ref.className,children=_ref.children,rest=_objectWithoutProperties(_ref,_excluded),theme=(0,leafygreen_provider_dist_esm.vs)(darkModeProp).theme,isAnchor="string"==typeof rest.href;(0,a11y_dist_esm.Lk)(rest,"IconButton");var processedChildren=react.Children.map(children,(function(child){if(!child)return null;if((0,dist_esm.Kf)(child,"Icon")||(0,esm.fx)(child)){var _child$props=child.props,childSize=_child$props.size,title=_child$props.title,newChildProps={size:childSize||size};return"string"==typeof title&&0!==title.length||(newChildProps.title=!1),react.cloneElement(child,newChildProps)}return child})),iconButtonProps=_objectSpread(_objectSpread({},rest),{},(IconButton_defineProperty(_objectSpread2={ref,tabIndex},"aria-disabled",disabled),IconButton_defineProperty(_objectSpread2,"href",disabled?void 0:rest.href),IconButton_defineProperty(_objectSpread2,"onClick",disabled?void 0:rest.onClick),IconButton_defineProperty(_objectSpread2,"className",(0,emotion_dist_esm.cx)(removeButtonStyle,baseIconButtonStyle,iconButtonSizes[size],iconButtonMode[theme],focusStyle[theme],(IconButton_defineProperty(_cx={},activeStyle[theme],active&&!disabled),IconButton_defineProperty(_cx,disabledStyle[theme],disabled),_cx),className)),_objectSpread2));return react.createElement(box_dist_esm.Z,_extends({as:isAnchor?"a":"button"},iconButtonProps),react.createElement("div",{className:iconStyle},processedChildren))}));IconButton.displayName="IconButton",IconButton.propTypes={darkMode:prop_types_default().bool,size:prop_types_default().oneOf(Object.values(Size)),className:prop_types_default().string,children:prop_types_default().node,disabled:prop_types_default().bool,href:prop_types_default().string,active:prop_types_default().bool};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: any) => void) | RefObject<any> | (((instance: HTMLAnchorElement | null) => void) & ((instance: any) => void)) | (((instance: HTMLAnchorElement | null) => void) & RefObject<...>) | ... 455 more ... | undefined"}},darkMode:{defaultValue:null,description:"",name:"darkMode",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"The Leafygreen `<Icon />` component to render",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},tabIndex:{defaultValue:{value:"0"},description:"Sets the tabIndex for IconButton component.",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onClick:{defaultValue:null,description:"Callback fired on click",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined"}},active:{defaultValue:{value:"false"},description:"If `true`, the button will be rendered with active styles",name:"active",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"default"},description:"Size of the icon",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"large"'},{value:'"xlarge"'}]}},disabled:{defaultValue:{value:"false"},description:"If `true`, the button will be rendered with disabled styles",name:"disabled",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"The component or HTML Element that the button is rendered as.",name:"as",required:!1,type:{name:"ElementType<any> | undefined"}},href:{defaultValue:null,description:"`href` property for the button. If this value is set, the IconButton will be rendered with an anchor tag.",name:"href",required:!1,type:{name:"string | undefined"}},"aria-label":{defaultValue:null,description:"The aria-label attribute defines a string value that labels an interactive element.\n\n[Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-labelledby":{defaultValue:null,description:"The aria-labelledby attribute identifies the element (or elements) that labels the element it is applied to.\n\n[Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)",name:"aria-labelledby",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/icon-button/src/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"packages/icon-button/src/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}function IconButton_story_typeof(obj){return IconButton_story_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},IconButton_story_typeof(obj)}var IconButton_story_excluded=["darkMode"];function IconButton_story_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function IconButton_story_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?IconButton_story_ownKeys(Object(source),!0).forEach((function(key){IconButton_story_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconButton_story_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function IconButton_story_defineProperty(obj,key,value){return(key=function IconButton_story_toPropertyKey(arg){var key=function IconButton_story_toPrimitive(input,hint){if("object"!==IconButton_story_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==IconButton_story_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===IconButton_story_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function IconButton_story_extends(){return IconButton_story_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},IconButton_story_extends.apply(this,arguments)}function IconButton_story_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function IconButton_story_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const IconButton_story={title:"Components/IconButton",component:IconButton,parameters:{default:"LiveExample",controls:{exclude:[].concat(function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(dist_esm.xZ),["children"])},generate:{combineArgs:{darkMode:[!1,!0],active:[!1,!0],size:Object.values(Size),disabled:[!1,!0]}}},args:{href:void 0,children:react.createElement(esm.ZP,{glyph:"Cloud"})},argTypes:{darkMode:dist_esm.bN.darkMode,href:{control:"string"},active:{control:"boolean"},disabled:{control:"boolean"}}};var LiveExample=function LiveExample(_ref){var darkMode=_ref.darkMode,args=IconButton_story_objectWithoutProperties(_ref,IconButton_story_excluded);return react.createElement(IconButton,IconButton_story_extends({darkMode},args))};LiveExample.displayName="LiveExample",LiveExample.parameters={chromatic:{disableSnapshot:!0}};var Generated=function Generated(){};LiveExample.parameters=IconButton_story_objectSpread(IconButton_story_objectSpread({},LiveExample.parameters),{},{docs:IconButton_story_objectSpread(IconButton_story_objectSpread({},null===(_LiveExample$paramete=LiveExample.parameters)||void 0===_LiveExample$paramete?void 0:_LiveExample$paramete.docs),{},{source:IconButton_story_objectSpread({originalSource:"({\n  darkMode,\n  ...args\n}: AccessibleIconButtonProps & DarkModeProps) => <IconButton darkMode={darkMode} {...args} />"},null===(_LiveExample$paramete2=LiveExample.parameters)||void 0===_LiveExample$paramete2||null===(_LiveExample$paramete3=_LiveExample$paramete2.docs)||void 0===_LiveExample$paramete3?void 0:_LiveExample$paramete3.source)})}),Generated.parameters=IconButton_story_objectSpread(IconButton_story_objectSpread({},Generated.parameters),{},{docs:IconButton_story_objectSpread(IconButton_story_objectSpread({},null===(_Generated$parameters=Generated.parameters)||void 0===_Generated$parameters?void 0:_Generated$parameters.docs),{},{source:IconButton_story_objectSpread({originalSource:"() => {}"},null===(_Generated$parameters2=Generated.parameters)||void 0===_Generated$parameters2||null===(_Generated$parameters3=_Generated$parameters2.docs)||void 0===_Generated$parameters3?void 0:_Generated$parameters3.source)})});var __namedExportsOrder=["LiveExample","Generated"];try{StoryMetaType.displayName="StoryMetaType",StoryMetaType.__docgenInfo={description:"Type of the Story default export",displayName:"StoryMetaType",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/icon-button/src/IconButton.story.tsx#StoryMetaType"]={docgenInfo:StoryMetaType.__docgenInfo,name:"StoryMetaType",path:"packages/icon-button/src/IconButton.story.tsx#StoryMetaType"})}catch(__react_docgen_typescript_loader_error){}}}]);