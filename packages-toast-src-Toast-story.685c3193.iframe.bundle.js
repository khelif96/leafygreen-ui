"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2311],{"./packages/toast/src/Toast.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Generated:()=>Generated,LiveExample:()=>LiveExample,WithInitialToasts:()=>WithInitialToasts,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_LiveExample$paramete,_LiveExample$paramete2,_LiveExample$paramete3,_WithInitialToasts$pa,_WithInitialToasts$pa2,_WithInitialToasts$pa3,_Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_Generated$parameters,_Generated$parameters2,_Generated$parameters3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/button/dist/esm/index.js"),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/typography/dist/esm/index.js"),_InternalToast_VariantIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/toast/src/InternalToast/VariantIcon.tsx"),_ToastContext_utils_makeToast__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/toast/src/ToastContext/utils/makeToast.ts"),_InternalToast__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/toast/src/InternalToast/index.ts"),___WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/toast/src/index.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Toast",component:_InternalToast__WEBPACK_IMPORTED_MODULE_8__.Sn,decorators:[function(Story,meta){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_9__.VW,{initialValue:meta.args.initialValue,portalClassName:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n          // Ensures a new stacking context is established\n          z-index: 1;\n        "])))},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,meta))}],parameters:{default:"LiveExample",controls:{exclude:[].concat(function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_5__.xZ),["as","title","description","dismissible","progress","variant"])},generate:{combineArgs:{darkMode:[!1,!0],description:[void 0,"Lorem ipsum dolor sit amet",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"This is a ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_6__.rU,null,"Link"))],dismissible:[!0,!1],variant:Object.values(___WEBPACK_IMPORTED_MODULE_9__.$e),progress:[0,1],actionElement:[void 0,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{size:"small"},"Action")]},args:{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n          position: relative;\n        "])))},excludeCombinations:[{progress:1,variant:[___WEBPACK_IMPORTED_MODULE_9__.$e.Success,___WEBPACK_IMPORTED_MODULE_9__.$e.Note,___WEBPACK_IMPORTED_MODULE_9__.$e.Warning,___WEBPACK_IMPORTED_MODULE_9__.$e.Important]},{actionElement:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_3__.ZP,null),variant:[___WEBPACK_IMPORTED_MODULE_9__.$e.Success,___WEBPACK_IMPORTED_MODULE_9__.$e.Note,___WEBPACK_IMPORTED_MODULE_9__.$e.Warning,___WEBPACK_IMPORTED_MODULE_9__.$e.Important]}]}},argTypes:{timeout:{control:"number",defaultValue:6e3,description:"Dismiss the Toast after `timeout` milliseconds. If timeout is `null | 0`, the Toast will never dismiss automatically."}},args:{darkMode:!1}};_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.seed(0);var LiveExample=function LiveExample(props){var _useToast=(0,___WEBPACK_IMPORTED_MODULE_9__.pm)(),pushToast=_useToast.pushToast,clearStack=_useToast.clearStack,getStack=_useToast.getStack,updateToast=_useToast.updateToast,stack=getStack(),progressToasts=stack&&Array.from(stack).filter((function(_ref){var _ref2=_slicedToArray(_ref,2);_ref2[0];return"progress"===_ref2[1].variant})),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(.1),2),progress=_useState2[0],setProgress=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){progressToasts&&0!==progressToasts.length||setProgress(.1)}),[progressToasts]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n          display: grid;\n          grid-template-columns: repeat(3, 1fr);\n          gap: 8px;\n          margin: 1em 0;\n        "])))},Object.values(___WEBPACK_IMPORTED_MODULE_9__.$e).map((function(variant){var VariantIcon=_InternalToast_VariantIcon__WEBPACK_IMPORTED_MODULE_7__.J[variant],randomText=_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.lorem.lines(1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{"data-testid":"trigger-".concat(variant),key:variant,onClick:function onClick(){pushToast(_objectSpread(_objectSpread({},props),{},{title:"I'm a ".concat(variant," toast"),description:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,randomText,randomText&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"http://localhost:9001"},"Anchor tag"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_6__.rU,{href:"http://localhost:9001"},"Link component"))),variant,progress,timeout:null}))},leftGlyph:react__WEBPACK_IMPORTED_MODULE_0__.createElement(VariantIcon,null)},(0,lodash__WEBPACK_IMPORTED_MODULE_2__.startCase)(variant)," toast")})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{onClick:function onClick(){return clearStack()},variant:"dangerOutline"},"Clear all")),progressToasts&&progressToasts.length>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_6__.__,{htmlFor:"progress"},"Progress: "),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_6__.ZM,null,progress),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{value:progress,onChange:function onChange(e){var _progress=Number(e.target.value);setProgress(_progress),progressToasts.forEach((function(_ref3){var id=_slicedToArray(_ref3,1)[0];updateToast(id,{progress:_progress})}))},type:"range",id:"progress",min:0,max:1,step:.1})))};LiveExample.displayName="LiveExample",LiveExample.parameters={chromatic:{disableSnapshot:!0}};var WithInitialToasts=function WithInitialToasts(props){var _useToast2=(0,___WEBPACK_IMPORTED_MODULE_9__.pm)(),pushToast=_useToast2.pushToast,clearStack=_useToast2.clearStack;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n        display: flex;\n        gap: 8px;\n      "])))},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{"data-testid":"toast-trigger",onClick:function onClick(){var variant=props.variant||_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.helpers.objectValue(___WEBPACK_IMPORTED_MODULE_9__.$e);pushToast(_objectSpread({title:"I'm a ".concat(variant," toast"),description:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.lorem.lines(_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.number.int({min:1,max:2})),variant},props))}},"Push toast"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{onClick:function onClick(){return clearStack()}},"Clear all"))};WithInitialToasts.displayName="WithInitialToasts",WithInitialToasts.parameters={chromatic:{disableSnapshot:!0}},WithInitialToasts.args={initialValue:(0,_ToastContext_utils_makeToast__WEBPACK_IMPORTED_MODULE_10__.L)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(6).map((function(_){return(0,_ToastContext_utils_makeToast__WEBPACK_IMPORTED_MODULE_10__.B)({title:"Initial toast",description:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.lorem.lines(2),variant:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.helpers.objectValue(___WEBPACK_IMPORTED_MODULE_9__.$e)})})))};var Basic=function Basic(props){var _useToast3=(0,___WEBPACK_IMPORTED_MODULE_9__.pm)(),pushToast=_useToast3.pushToast,clearStack=_useToast3.clearStack;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n          display: flex;\n          gap: 8px;\n        "])))},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{"data-testid":"toast-trigger",onClick:function createRandomToast(){var variant=props.variant||_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.helpers.objectValue(___WEBPACK_IMPORTED_MODULE_9__.$e);pushToast(_objectSpread({title:"I'm a ".concat(variant," toast"),description:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.lorem.lines(_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.number.int({min:1,max:2})),variant},props))}},"Push toast"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{onClick:function onClick(){return clearStack()}},"Clear all")))};Basic.displayName="Basic",Basic.parameters={chromatic:{disableSnapshot:!0}};var Generated=function Generated(){};LiveExample.parameters=_objectSpread(_objectSpread({},LiveExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LiveExample$paramete=LiveExample.parameters)||void 0===_LiveExample$paramete?void 0:_LiveExample$paramete.docs),{},{source:_objectSpread({originalSource:'(props: Partial<InternalToastProps>) => {\n  const {\n    pushToast,\n    clearStack,\n    getStack,\n    updateToast\n  } = useToast();\n  const stack = getStack();\n  const progressToasts = stack && Array.from(stack).filter(([_, t]) => t.variant === \'progress\');\n  const [progress, setProgress] = useState(0.1);\n  useEffect(() => {\n    if (!progressToasts || progressToasts.length === 0) {\n      setProgress(0.1);\n    }\n  }, [progressToasts]);\n  return <div>\n      <div className={css`\n          display: grid;\n          grid-template-columns: repeat(3, 1fr);\n          gap: 8px;\n          margin: 1em 0;\n        `}>\n        {Object.values(Variant).map(variant => {\n        const VariantIcon = variantIcons[variant];\n        const randomText = faker.lorem.lines(1);\n        return <Button data-testid={`trigger-${variant}`} key={variant} onClick={() => {\n          pushToast({\n            ...props,\n            title: `I\'m a ${variant} toast`,\n            description: <>\n                      {randomText}\n                      {randomText && <>\n                          &nbsp;\n                          <a href="http://localhost:9001">Anchor tag</a>\n                          <Link href="http://localhost:9001">\n                            Link component\n                          </Link>\n                        </>}\n                    </>,\n            variant,\n            progress,\n            timeout: null\n          });\n        }} leftGlyph={<VariantIcon />}>\n              {startCase(variant)} toast\n            </Button>;\n      })}\n        <Button onClick={() => clearStack()} variant="dangerOutline">\n          Clear all\n        </Button>\n      </div>\n      {progressToasts && progressToasts.length > 0 && <>\n          <Label htmlFor="progress">Progress: </Label>\n          <InlineCode>{progress}</InlineCode>\n          <br />\n          <input value={progress} onChange={e => {\n        const _progress = Number(e.target.value);\n        setProgress(_progress);\n        progressToasts.forEach(([id]) => {\n          updateToast(id, {\n            progress: _progress\n          });\n        });\n      }} type="range" id="progress" min={0} max={1} step={0.1} />\n        </>}\n    </div>;\n}'},null===(_LiveExample$paramete2=LiveExample.parameters)||void 0===_LiveExample$paramete2||null===(_LiveExample$paramete3=_LiveExample$paramete2.docs)||void 0===_LiveExample$paramete3?void 0:_LiveExample$paramete3.source)})}),WithInitialToasts.parameters=_objectSpread(_objectSpread({},WithInitialToasts.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithInitialToasts$pa=WithInitialToasts.parameters)||void 0===_WithInitialToasts$pa?void 0:_WithInitialToasts$pa.docs),{},{source:_objectSpread({originalSource:'(props: Partial<InternalToastProps>) => {\n  const {\n    pushToast,\n    clearStack\n  } = useToast();\n  return <div className={css`\n        display: flex;\n        gap: 8px;\n      `}>\n      <Button data-testid="toast-trigger" onClick={() => {\n      const variant = props.variant || faker.helpers.objectValue(Variant);\n      pushToast({\n        title: `I\'m a ${variant} toast`,\n        description: faker.lorem.lines(faker.number.int({\n          min: 1,\n          max: 2\n        })),\n        variant,\n        ...props\n      });\n    }}>\n        Push toast\n      </Button>\n      <Button onClick={() => clearStack()}>Clear all</Button>\n    </div>;\n}'},null===(_WithInitialToasts$pa2=WithInitialToasts.parameters)||void 0===_WithInitialToasts$pa2||null===(_WithInitialToasts$pa3=_WithInitialToasts$pa2.docs)||void 0===_WithInitialToasts$pa3?void 0:_WithInitialToasts$pa3.source)})}),Basic.parameters=_objectSpread(_objectSpread({},Basic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:_objectSpread({originalSource:'(props: Partial<InternalToastProps> & DarkModeProps) => {\n  const {\n    pushToast,\n    clearStack\n  } = useToast();\n  const createRandomToast = () => {\n    const variant = props.variant || faker.helpers.objectValue(Variant);\n    pushToast({\n      title: `I\'m a ${variant} toast`,\n      description: faker.lorem.lines(faker.number.int({\n        min: 1,\n        max: 2\n      })),\n      variant,\n      ...props\n    });\n  };\n  return <div>\n      <div className={css`\n          display: flex;\n          gap: 8px;\n        `}>\n        <Button data-testid="toast-trigger" onClick={createRandomToast}>\n          Push toast\n        </Button>\n        <Button onClick={() => clearStack()}>Clear all</Button>\n      </div>\n    </div>;\n}'},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source)})}),Generated.parameters=_objectSpread(_objectSpread({},Generated.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Generated$parameters=Generated.parameters)||void 0===_Generated$parameters?void 0:_Generated$parameters.docs),{},{source:_objectSpread({originalSource:"() => {}"},null===(_Generated$parameters2=Generated.parameters)||void 0===_Generated$parameters2||null===(_Generated$parameters3=_Generated$parameters2.docs)||void 0===_Generated$parameters3?void 0:_Generated$parameters3.source)})});var __namedExportsOrder=["LiveExample","WithInitialToasts","Basic","Generated"];try{StoryMetaType.displayName="StoryMetaType",StoryMetaType.__docgenInfo={description:"Type of the Story default export",displayName:"StoryMetaType",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/toast/src/Toast.story.tsx#StoryMetaType"]={docgenInfo:StoryMetaType.__docgenInfo,name:"StoryMetaType",path:"packages/toast/src/Toast.story.tsx#StoryMetaType"})}catch(__react_docgen_typescript_loader_error){}}}]);