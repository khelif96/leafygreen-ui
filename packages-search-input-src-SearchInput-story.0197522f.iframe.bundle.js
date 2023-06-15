"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[101],{"./packages/search-input/src/SearchInput.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Generated:()=>Generated,LiveExample:()=>LiveExample,WithResults:()=>WithResults,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchInput_story});var _templateObject,_templateObject2,_templateObject3,_searchResultLabelSty,react=__webpack_require__("./node_modules/react/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/lib/dist/esm/index.js"),palette_dist_esm=__webpack_require__("./packages/palette/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),SearchInput_types=__webpack_require__("./packages/search-input/src/SearchInput/SearchInput.types.ts"),SearchInput=__webpack_require__("./packages/search-input/src/SearchInput/index.ts"),SearchResult=__webpack_require__("./packages/search-input/src/SearchResult/index.ts"),input_option_dist_esm=__webpack_require__("./packages/input-option/dist/esm/index.js"),leafygreen_provider_dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var searchResultLabelWrapperStyle=(0,esm.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  padding-top: 12px;\n  padding-bottom: 0;\n"]))),searchResultLabelStyle=(_defineProperty(_searchResultLabelSty={},dist_esm.Q2.Light,(0,esm.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    color: ",";\n  "])),palette_dist_esm.D.gray.dark1)),_defineProperty(_searchResultLabelSty,dist_esm.Q2.Dark,(0,esm.css)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    color: ",";\n  "])),palette_dist_esm.D.gray.base)),_searchResultLabelSty),_excluded=["children","label"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SearchInput_story_templateObject,SearchInput_story_templateObject2,SearchInput_story_templateObject3,_templateObject4,_LiveExample$paramete,_LiveExample$paramete2,_LiveExample$paramete3,_Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_WithResults$paramete,_WithResults$paramete2,_WithResults$paramete3,_Generated$parameters,_Generated$parameters2,_Generated$parameters3,SearchResultGroup=function SearchResultGroup(_ref){var children=_ref.children,label=_ref.label,rest=_objectWithoutProperties(_ref,_excluded),validatedChildren=(0,dist_esm.E6)(children,["SearchResult","SearchResultGroup"]),theme=(0,leafygreen_provider_dist_esm.vs)().theme;return react.createElement("div",null,react.createElement(input_option_dist_esm.cn,_extends({"aria-label":label,isInteractive:!1,className:searchResultLabelWrapperStyle},rest),react.createElement(typography_dist_esm.Lh,{className:searchResultLabelStyle[theme]},label)),validatedChildren)};SearchResultGroup.displayName="SearchResultGroup",SearchResultGroup.displayName="SearchResultGroup";try{SearchResultGroup.displayName="SearchResultGroup",SearchResultGroup.__docgenInfo={description:"",displayName:"SearchResultGroup",props:{label:{defaultValue:null,description:"Title for the group of options",name:"label",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Must be <SearchResult /> or <SearchResultGroup />",name:"children",required:!0,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/search-input/src/SearchResultGroup/SearchResultGroup.tsx#SearchResultGroup"]={docgenInfo:SearchResultGroup.__docgenInfo,name:"SearchResultGroup",path:"packages/search-input/src/SearchResultGroup/SearchResultGroup.tsx#SearchResultGroup"})}catch(__react_docgen_typescript_loader_error){}function SearchInput_story_typeof(obj){return SearchInput_story_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},SearchInput_story_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){SearchInput_story_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function SearchInput_story_defineProperty(obj,key,value){return(key=function SearchInput_story_toPropertyKey(arg){var key=function SearchInput_story_toPrimitive(input,hint){if("object"!==SearchInput_story_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==SearchInput_story_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===SearchInput_story_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SearchInput_story_extends(){return SearchInput_story_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},SearchInput_story_extends.apply(this,arguments)}function SearchInput_story_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const SearchInput_story={title:"Components/SearchInput",component:SearchInput.Mj,parameters:{default:"LiveExample",controls:{exclude:[].concat(function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(dist_esm.xZ),["value","id","showWedge"])},generate:{combineArgs:{darkMode:[!1,!0],disabled:[!1,!0]}}},argTypes:{darkMode:dist_esm.bN.darkMode,state:{control:"select",options:Object.values(SearchInput_types.Z)},placeholder:{control:"text"},disabled:{control:"boolean"}}};var data=[{name:"apple",description:"A round fruit which typically has thin red or green skin and crisp flesh"},{name:"banana",description:" Along curved fruit which grows in clusters"},{name:"carrot",description:"A tapering orange-colored root eaten as a vegetable"},{name:"dragonfruit",description:"The fruit of a pitahaya cactus, with leathery red, pink, or yellow skin "},{name:"eggplant",description:"The purple egg-shaped fruit of a tropical Old World plant"},{name:"fig",description:"A soft pear-shaped fruit with sweet dark flesh and many small seeds"},{name:"grape",description:"A berry, typically green, purple, red, or black, growing in clusters on a vine"},{name:"honeydew",description:"A melon of a variety with smooth pale skin and sweet green flesh"},{name:"iceberg-lettuce",description:"A lettuce of a variety having a dense round head of crisp pale leaves."},{name:"jalapeño",description:"A very hot green chili pepper, used especially in Mexican-style cooking"},{name:"kiwi",description:"A fruit with a thin hairy skin, green flesh, and black seeds"},{name:"lemon",description:"A yellow, oval citrus fruit with thick skin and fragrant, acidic juice:"},{name:"melon",description:"The large round fruit of a plant of the gourd family, with sweet pulpy flesh and many seeds"},{name:"nectarine",description:"A peach of a variety with smooth, thin, brightly colored skin and rich firm flesh."},{name:"orange",description:"A round juicy citrus fruit with a tough bright reddish-yellow rind"},{name:"pomegranate",description:"An orange-sized fruit with a tough reddish outer skin and sweet red gelatinous flesh containing many seeds"},{name:"quince",description:"A hard, acid pear-shaped fruit used in preserves or as flavoring"},{name:"raspberry",description:"An edible soft fruit related to the blackberry, consisting of a cluster of reddish-pink drupelets"},{name:"strawberry",description:"A sweet soft red fruit with a seed-studded surface"},{name:"tomato",description:"A glossy red, or occasionally yellow, pulpy edible fruit that is eaten as a vegetable or in salad"},{name:"ugli-fruit",description:"A mottled green and yellow citrus fruit which is a hybrid of a grapefruit and a tangerine"},{name:"vanilla",description:"A tropical climbing orchid that has fragrant flowers and long podlike fruit"},{name:"watermelon",description:"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice"},{name:"ximenia",description:"Can be eaten raw and can be used to make juice, jams or intoxicating drinks"},{name:"yam",description:"The edible starchy tuber of a climbing plant that is widely grown in tropical and subtropical countries"},{name:"zucchini",description:"A green variety of smooth-skinned summer squash"}],LiveExample=function LiveExample(args){var _useState2=_slicedToArray((0,react.useState)(),2),currentPage=_useState2[0],setPage=_useState2[1],_useState4=_slicedToArray((0,react.useState)(data),2),searchResults=_useState4[0],setSearchResults=_useState4[1];return react.createElement("div",{className:(0,esm.css)(SearchInput_story_templateObject||(SearchInput_story_templateObject=SearchInput_story_taggedTemplateLiteral(["\n        width: 256px;\n      "])))},react.createElement(SearchInput.Mj,SearchInput_story_extends({"aria-label":"Item",onChange:function handleChange(e){var _args$onChange,value=e.target.value;console.log("Storybook: handleChange",{value}),null===(_args$onChange=args.onChange)||void 0===_args$onChange||_args$onChange.call(args,e),setSearchResults(data.filter((function(datum){return datum.name.includes((0,lodash.kebabCase)(value))})))},onSubmit:function handleSelect(e){var _args$onSelect,value=e.target[0].value;null===(_args$onSelect=args.onSelect)||void 0===_args$onSelect||_args$onSelect.call(args,e),console.log("Storybook: handleSelect",{value}),setPage(data.find((function(item){return(0,lodash.kebabCase)(item.name)===(0,lodash.kebabCase)(value)})))}},args),searchResults.map((function(item){return react.createElement(SearchResult.l,{key:item.name,description:item.description,onClick:function onClick(){return console.log("Storybook: Clicked",item.name)}},(0,lodash.startCase)(item.name))}))),currentPage&&react.createElement("div",{className:(0,esm.css)(SearchInput_story_templateObject2||(SearchInput_story_templateObject2=SearchInput_story_taggedTemplateLiteral(["\n            min-width: min-content;\n            margin-block: 20px;\n            padding: 20px;\n            outline: 1px solid ",";\n          "])),palette_dist_esm.D.green.dark2)},react.createElement(typography_dist_esm.H1,null,(0,lodash.startCase)(currentPage.name)),react.createElement(typography_dist_esm.uT,null,currentPage.description)))};LiveExample.displayName="LiveExample",LiveExample.parameters={chromatic:{disableSnapshot:!0}},LiveExample.argTypes={onChange:{action:"Change"},onSubmit:{action:"Submit"},onClick:{action:"Click"}};var Basic=function Basic(props){return react.createElement(SearchInput.Mj,SearchInput_story_extends({className:(0,esm.css)(SearchInput_story_templateObject3||(SearchInput_story_templateObject3=SearchInput_story_taggedTemplateLiteral(["\n      width: 200px;\n    "])))},props))};Basic.displayName="Basic",Basic.parameters={chromatic:{disableSnapshot:!0}};var WithResults=function WithResults(props){return react.createElement(SearchInput.Mj,SearchInput_story_extends({className:(0,esm.css)(_templateObject4||(_templateObject4=SearchInput_story_taggedTemplateLiteral(["\n      width: 200px;\n    "]))),onChange:function onChange(){console.log("SB: Change")}},props),react.createElement(SearchResult.l,{onClick:function onClick(){console.log("SB: Click Apple")},description:"This is a description"},"Apple"),react.createElement(SearchResult.l,null,"Banana"),react.createElement(SearchResult.l,{as:"a",href:"#",description:"This is a link"},"Carrot"),react.createElement(SearchResult.l,{description:"This is a very very long description. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."},"Dragonfruit"),react.createElement(SearchResultGroup,{label:"Peppers"},react.createElement(SearchResult.l,{description:"A moderately hot chili pepper used to flavor dishes"},"Cayenne"),react.createElement(SearchResult.l,null,"Ghost pepper"),react.createElement(SearchResult.l,null,"Habanero"),react.createElement(SearchResult.l,null,"Jalapeño"),react.createElement(SearchResult.l,null,"Red pepper"),react.createElement(SearchResult.l,null,"Scotch bonnet")))};WithResults.displayName="WithResults",WithResults.parameters={chromatic:{disableSnapshot:!0}};var Generated=function Generated(){};LiveExample.parameters=_objectSpread(_objectSpread({},LiveExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LiveExample$paramete=LiveExample.parameters)||void 0===_LiveExample$paramete?void 0:_LiveExample$paramete.docs),{},{source:_objectSpread({originalSource:"(args: SearchInputProps) => {\n  const [currentPage, setPage] = useState<typeof data[0]>();\n  const [searchResults, setSearchResults] = useState(data);\n  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {\n    const {\n      value\n    } = e.target;\n    console.log('Storybook: handleChange', {\n      value\n    });\n    args.onChange?.(e);\n    setSearchResults(data.filter(datum => datum.name.includes(kebabCase(value))));\n  };\n  const handleSelect: FormEventHandler<HTMLFormElement> = e => {\n    const {\n      value\n    } = ((e.target as HTMLFormElement)[0] as HTMLInputElement);\n    args.onSelect?.(e);\n    console.log('Storybook: handleSelect', {\n      value\n    });\n    setPage(data.find(\n    /// @ts-ignore\n    item => kebabCase(item.name) === kebabCase(value)));\n  };\n  return <div className={css`\n        width: 256px;\n      `}>\n      <SearchInput aria-label=\"Item\" onChange={handleChange} onSubmit={handleSelect} {...args}>\n        {searchResults.map(item => <SearchResult key={item.name} description={item.description} onClick={() => console.log('Storybook: Clicked', item.name)}>\n            {startCase(item.name)}\n          </SearchResult>)}\n      </SearchInput>\n      {currentPage && <div className={css`\n            min-width: min-content;\n            margin-block: 20px;\n            padding: 20px;\n            outline: 1px solid ${palette.green.dark2};\n          `}>\n          <H1>{startCase(currentPage.name)}</H1>\n          <Body>{currentPage.description}</Body>\n        </div>}\n    </div>;\n}"},null===(_LiveExample$paramete2=LiveExample.parameters)||void 0===_LiveExample$paramete2||null===(_LiveExample$paramete3=_LiveExample$paramete2.docs)||void 0===_LiveExample$paramete3?void 0:_LiveExample$paramete3.source)})}),Basic.parameters=_objectSpread(_objectSpread({},Basic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:_objectSpread({originalSource:"(props: SearchInputProps) => <SearchInput className={css`\n      width: 200px;\n    `} {...props} />"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source)})}),WithResults.parameters=_objectSpread(_objectSpread({},WithResults.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithResults$paramete=WithResults.parameters)||void 0===_WithResults$paramete?void 0:_WithResults$paramete.docs),{},{source:_objectSpread({originalSource:'(props: SearchInputProps) => <SearchInput className={css`\n      width: 200px;\n    `} onChange={() => {\n  console.log(\'SB: Change\');\n}} {...props}>\n    <SearchResult onClick={() => {\n    console.log(\'SB: Click Apple\');\n  }} description="This is a description">\n      Apple\n    </SearchResult>\n    <SearchResult>Banana</SearchResult>\n    <SearchResult as="a" href="#" description="This is a link">\n      Carrot\n    </SearchResult>\n    <SearchResult description="This is a very very long description. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.">\n      Dragonfruit\n    </SearchResult>\n    <SearchResultGroup label="Peppers">\n      <SearchResult description="A moderately hot chili pepper used to flavor dishes">\n        Cayenne\n      </SearchResult>\n      <SearchResult>Ghost pepper</SearchResult>\n      <SearchResult>Habanero</SearchResult>\n      <SearchResult>Jalapeño</SearchResult>\n      <SearchResult>Red pepper</SearchResult>\n      <SearchResult>Scotch bonnet</SearchResult>\n    </SearchResultGroup>\n  </SearchInput>'},null===(_WithResults$paramete2=WithResults.parameters)||void 0===_WithResults$paramete2||null===(_WithResults$paramete3=_WithResults$paramete2.docs)||void 0===_WithResults$paramete3?void 0:_WithResults$paramete3.source)})}),Generated.parameters=_objectSpread(_objectSpread({},Generated.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Generated$parameters=Generated.parameters)||void 0===_Generated$parameters?void 0:_Generated$parameters.docs),{},{source:_objectSpread({originalSource:"() => {}"},null===(_Generated$parameters2=Generated.parameters)||void 0===_Generated$parameters2||null===(_Generated$parameters3=_Generated$parameters2.docs)||void 0===_Generated$parameters3?void 0:_Generated$parameters3.source)})});var __namedExportsOrder=["LiveExample","Basic","WithResults","Generated"];try{StoryMetaType.displayName="StoryMetaType",StoryMetaType.__docgenInfo={description:"Type of the Story default export",displayName:"StoryMetaType",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/search-input/src/SearchInput.story.tsx#StoryMetaType"]={docgenInfo:StoryMetaType.__docgenInfo,name:"StoryMetaType",path:"packages/search-input/src/SearchInput.story.tsx#StoryMetaType"})}catch(__react_docgen_typescript_loader_error){}}}]);