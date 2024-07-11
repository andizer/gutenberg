"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[6605],{"./packages/components/src/heading/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>heading_component});var context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),hook=__webpack_require__("./packages/components/src/text/hook.ts"),font_size=__webpack_require__("./packages/components/src/utils/font-size.ts"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedHeading(props,forwardedRef){const headerProps=function useHeading(props){const{as:asProp,level=2,color=colors_values.D.gray[900],isBlock=!0,weight=config_values.Z.fontWeightHeading,...otherProps}=(0,use_context_system.y)(props,"Heading"),as=asProp||`h${level}`,a11yProps={};return"string"==typeof as&&"h"!==as[0]&&(a11yProps.role="heading",a11yProps["aria-level"]="string"==typeof level?parseInt(level):level),{...(0,hook.Z)({color,isBlock,weight,size:(0,font_size.gZ)(level),...otherProps}),...a11yProps,as}}(props);return(0,jsx_runtime.jsx)(component.Z,{...headerProps,ref:forwardedRef})}UnconnectedHeading.displayName="UnconnectedHeading";const Heading=(0,context_connect.Iq)(UnconnectedHeading,"Heading"),heading_component=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:'`Heading` renders headings and titles using the library\'s typography system.\n\n```jsx\nimport { __experimentalHeading as Heading } from "@wordpress/components";\n\nfunction Example() {\n  return <Heading>Code is Poetry</Heading>;\n}\n```',displayName:"Heading",props:{children:{defaultValue:null,description:"The children elements.\n\nNote: text truncation will be attempted only if the `children` are either\nof type `string` or `number`. In any other scenarios, the component will\nnot attempt to truncate the text, and will pass through the `children`.",name:"children",required:!0,type:{name:"ReactNode"}},display:{defaultValue:null,description:"Adjusts the CSS display.",name:"display",required:!1,type:{name:"Display"}},letterSpacing:{defaultValue:null,description:"Adjusts letter-spacing of the text.",name:"letterSpacing",required:!1,type:{name:"LetterSpacing<string | number>"}},align:{defaultValue:null,description:"Adjusts the text alignment.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"inherit"'},{value:'"end"'},{value:'"start"'},{value:'"initial"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"match-parent"'}]}},ellipsis:{defaultValue:{value:"'…'"},description:"The ellipsis string when truncating the text by the `limit` prop's value.",name:"ellipsis",required:!1,type:{name:"string"}},ellipsizeMode:{defaultValue:{value:"'auto'"},description:"Determines where to truncate.  For example, we can truncate text right in\nthe middle. To do this, we need to set `ellipsizeMode` to `middle` and a\ntext `limit`.\n\n* `auto`: Trims content at the end automatically without a `limit`.\n* `head`: Trims content at the beginning. Requires a `limit`.\n* `middle`: Trims content in the middle. Requires a `limit`.\n* `tail`: Trims content at the end. Requires a `limit`.",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"none"'},{value:'"auto"'},{value:'"middle"'},{value:'"tail"'}]}},limit:{defaultValue:{value:"0"},description:"Determines the max number of characters to be displayed before the rest\nof the text gets truncated. Requires `ellipsizeMode` to assume values\ndifferent from `auto` and `none`.",name:"limit",required:!1,type:{name:"number"}},numberOfLines:{defaultValue:{value:"0"},description:"Clamps the text content to the specified `numberOfLines`, adding an\nellipsis at the end. Note: this feature ignores the value of the\n`ellipsis` prop and always displays the default `…` ellipsis.",name:"numberOfLines",required:!1,type:{name:"number"}},adjustLineHeightForInnerControls:{defaultValue:null,description:"Automatically calculate the appropriate line-height value for contents that render text and Control elements (e.g. `TextInput`).",name:"adjustLineHeightForInnerControls",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xSmall"'}]}},isDestructive:{defaultValue:{value:"false"},description:"Renders a destructive color.",name:"isDestructive",required:!1,type:{name:"boolean"}},highlightEscape:{defaultValue:{value:"false"},description:"Escape characters in `highlightWords` which are meaningful in regular expressions.",name:"highlightEscape",required:!1,type:{name:"boolean"}},highlightCaseSensitive:{defaultValue:{value:"false"},description:"Determines if `highlightWords` should be case sensitive.",name:"highlightCaseSensitive",required:!1,type:{name:"boolean"}},highlightSanitize:{defaultValue:null,description:"Array of search words. String search terms are automatically cast to RegExps unless `highlightEscape` is true.",name:"highlightSanitize",required:!1,type:{name:"(text: string) => string"}},lineHeight:{defaultValue:null,description:"Adjusts all text line-height based on the typography system.",name:"lineHeight",required:!1,type:{name:"LineHeight<string | number>"}},optimizeReadabilityFor:{defaultValue:null,description:"The `Text` color can be adapted to a background color for optimal readability. `optimizeReadabilityFor` can accept CSS variables, in addition to standard CSS color values (e.g. Hex, RGB, HSL, etc...).",name:"optimizeReadabilityFor",required:!1,type:{name:"Color"}},truncate:{defaultValue:{value:"false"},description:"Enables text truncation. When `truncate` is set, we are able to truncate the long text in a variety of ways. Note: text truncation won't work if the `isBlock` property is set to `true`",name:"truncate",required:!1,type:{name:"boolean"}},upperCase:{defaultValue:{value:"false"},description:"Uppercases the text content.",name:"upperCase",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Adjusts style variation of the text.",name:"variant",required:!1,type:{name:'"muted"'}},highlightWords:{defaultValue:null,description:"Letters or words within `Text` can be highlighted using `highlightWords`.",name:"highlightWords",required:!1,type:{name:"string[]"}},level:{defaultValue:{value:"2"},description:"Passing any of the heading levels to `level` will both render the correct\ntypographic text size as well as the semantic element corresponding to\nthe level (`h1` for `1` for example).",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:'"1"'},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},isBlock:{defaultValue:{value:"true"},description:"Sets `Heading` to have `display: block`. Note: text truncation only works\nwhen `isBlock` is `false`.",name:"isBlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"'#1e1e1e'"},description:"Adjusts the text color.",name:"color",required:!1,type:{name:"Color"}},weight:{defaultValue:{value:"'600'"},description:"Adjusts font-weight of the text.",name:"weight",required:!1,type:{name:"FontWeight | TextWeight"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/heading/component.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"packages/components/src/heading/component.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/card/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FullBleedContent:()=>FullBleedContent,default:()=>index_story});var component=__webpack_require__("./packages/components/src/card/card/component.tsx"),card_header_component=__webpack_require__("./packages/components/src/card/card-header/component.tsx"),card_body_component=__webpack_require__("./packages/components/src/card/card-body/component.tsx"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),divider_component=__webpack_require__("./packages/components/src/divider/component.tsx"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),styles=__webpack_require__("./packages/components/src/card/styles.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedCardDivider(props,forwardedRef){const dividerProps=function useCardDivider(props){const{className,...otherProps}=(0,use_context_system.y)(props,"CardDivider"),cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>cx(styles.iz,styles.tv,"components-card__divider",className)),[className,cx])}}(props);return(0,jsx_runtime.jsx)(divider_component.Z,{...dividerProps,ref:forwardedRef})}UnconnectedCardDivider.displayName="UnconnectedCardDivider";const CardDivider=(0,context_connect.Iq)(UnconnectedCardDivider,"CardDivider"),card_divider_component=CardDivider;try{CardDivider.displayName="CardDivider",CardDivider.__docgenInfo={description:"`CardDivider` renders an optional divider within a `Card`.\nIt is typically used to divide multiple `CardBody` components from each other.\n\n```jsx\nimport { Card, CardBody, CardDivider } from `@wordpress/components`;\n\n<Card>\n <CardBody>...</CardBody>\n <CardDivider />\n <CardBody>...</CardBody>\n</Card>\n```",displayName:"CardDivider",props:{ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement> & LegacyRef<any>"}},wrapElement:{defaultValue:null,description:"",name:"wrapElement",required:!1,type:{name:"WrapElement"}},margin:{defaultValue:null,description:"Adjusts all margins on the inline dimension.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",name:"margin",required:!1,type:{name:"SpaceInput"}},marginEnd:{defaultValue:null,description:"Adjusts the inline-end margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",name:"marginEnd",required:!1,type:{name:"SpaceInput"}},marginStart:{defaultValue:null,description:"Adjusts the inline-start margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",name:"marginStart",required:!1,type:{name:"SpaceInput"}},orientation:{defaultValue:{value:"'horizontal'"},description:"Divider's orientation. When using inside a flex container, you may need\nto make sure the divider is `stretch` aligned in order for it to be\nvisible.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/card-divider/component.tsx#CardDivider"]={docgenInfo:CardDivider.__docgenInfo,name:"CardDivider",path:"packages/components/src/card/card-divider/component.tsx#CardDivider"})}catch(__react_docgen_typescript_loader_error){}var view_component=__webpack_require__("./packages/components/src/view/component.tsx");function UnconnectedCardMedia(props,forwardedRef){const cardMediaProps=function useCardMedia(props){const{className,...otherProps}=(0,use_context_system.y)(props,"CardMedia"),cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>cx(styles.pU,styles.E0,"components-card__media",className)),[className,cx])}}(props);return(0,jsx_runtime.jsx)(view_component.Z,{...cardMediaProps,ref:forwardedRef})}UnconnectedCardMedia.displayName="UnconnectedCardMedia";const CardMedia=(0,context_connect.Iq)(UnconnectedCardMedia,"CardMedia"),card_media_component=CardMedia;try{CardMedia.displayName="CardMedia",CardMedia.__docgenInfo={description:"`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color.",displayName:"CardMedia",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/card-media/component.tsx#CardMedia"]={docgenInfo:CardMedia.__docgenInfo,name:"CardMedia",path:"packages/components/src/card/card-media/component.tsx#CardMedia"})}catch(__react_docgen_typescript_loader_error){}var card_footer_component=__webpack_require__("./packages/components/src/card/card-footer/component.tsx"),text_component=__webpack_require__("./packages/components/src/text/component.tsx"),heading_component=__webpack_require__("./packages/components/src/heading/component.tsx"),src_button=__webpack_require__("./packages/components/src/button/index.tsx");const index_story={component:component.C,subcomponents:{CardHeader:card_header_component.Z,CardBody:card_body_component.Z,CardDivider:card_divider_component,CardMedia:card_media_component,CardFooter:card_footer_component.Z},title:"Components/Card",argTypes:{as:{control:{type:null}},children:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/card",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=args=>(0,jsx_runtime.jsx)(component.C,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(card_header_component.Z,{children:(0,jsx_runtime.jsx)(heading_component.Z,{children:"CardHeader"})}),(0,jsx_runtime.jsx)(card_body_component.Z,{children:(0,jsx_runtime.jsx)(text_component.Z,{children:"CardBody"})}),(0,jsx_runtime.jsx)(card_body_component.Z,{children:(0,jsx_runtime.jsx)(text_component.Z,{children:"CardBody (before CardDivider)"})}),(0,jsx_runtime.jsx)(card_divider_component,{}),(0,jsx_runtime.jsx)(card_body_component.Z,{children:(0,jsx_runtime.jsx)(text_component.Z,{children:"CardBody (after CardDivider)"})}),(0,jsx_runtime.jsx)(card_media_component,{children:(0,jsx_runtime.jsx)("img",{alt:"Card Media",src:"https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80"})}),(0,jsx_runtime.jsxs)(card_footer_component.Z,{children:[(0,jsx_runtime.jsx)(text_component.Z,{children:"CardFooter"}),(0,jsx_runtime.jsx)(src_button.ZP,{variant:"secondary",children:"Action Button"})]})]})};const FullBleedContent=Template.bind({});FullBleedContent.args={...Default.args,children:(0,jsx_runtime.jsx)(card_media_component,{children:(0,jsx_runtime.jsx)("div",{style:{padding:16,background:"beige"},children:"Some full bleed content"})})},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...Default.parameters?.docs?.source}}},FullBleedContent.parameters={...FullBleedContent.parameters,docs:{...FullBleedContent.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...FullBleedContent.parameters?.docs?.source},description:{story:"`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color. The corners will be rounded if necessary.",...FullBleedContent.parameters?.docs?.description}}};try{FullBleedContent.displayName="FullBleedContent",FullBleedContent.__docgenInfo={description:"`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color. The corners will be rounded if necessary.",displayName:"FullBleedContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/stories/index.story.tsx#FullBleedContent"]={docgenInfo:FullBleedContent.__docgenInfo,name:"FullBleedContent",path:"packages/components/src/card/stories/index.story.tsx#FullBleedContent"})}catch(__react_docgen_typescript_loader_error){}}}]);