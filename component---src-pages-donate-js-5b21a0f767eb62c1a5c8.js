"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[166],{2574:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(7294),o=a(512),r=a(5971),i=a(4780),s=a(4425),l=a(9219),d=a(948),c=a(8157),p=a(8628),u=a(2129),m=a(8216),v=a(902),h=a(1588),x=a(4867);function g(e){return(0,x.ZP)("MuiButton",e)}var b=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var f=n.createContext({});var y=n.createContext(void 0),S=a(5893);const Z=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],z=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,l.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,m.Z)(a.color)}`],t[`size${(0,m.Z)(a.size)}`],t[`${a.variant}Size${(0,m.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((0,c.Z)((({theme:e})=>{const t="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],a="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(e.vars||e).shadows[2],"&:hover":{boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2]}},"&:active":{boxShadow:(e.vars||e).shadows[8]},[`&.${b.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${b.disabled}`]:{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(e.palette).filter((0,v.Z)(["dark","contrastText"])).map((([t])=>({props:{color:t},style:{"--variant-textColor":(e.vars||e).palette[t].main,"--variant-outlinedColor":(e.vars||e).palette[t].main,"--variant-outlinedBorder":e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.5)`:(0,s.Fq)(e.palette[t].main,.5),"--variant-containedColor":(e.vars||e).palette[t].contrastText,"--variant-containedBg":(e.vars||e).palette[t].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(e.vars||e).palette[t].dark,"--variant-textBg":e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[t].main,e.palette.action.hoverOpacity),"--variant-outlinedBorder":(e.vars||e).palette[t].main,"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[t].main,e.palette.action.hoverOpacity)}}}}))),{props:{color:"inherit"},style:{"--variant-containedColor":e.vars?e.vars.palette.text.primary:e.palette.getContrastText?.(t),"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedHoverBg:a,"--variant-textBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}}))),w=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(a.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...Z]}),k=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(a.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...Z]});var C=n.forwardRef((function(e,t){const a=n.useContext(f),s=n.useContext(y),l=(0,r.Z)(a,e),d=(0,p.i)({props:l,name:"MuiButton"}),{children:c,color:u="primary",component:v="button",className:h,disabled:x=!1,disableElevation:b=!1,disableFocusRipple:Z=!1,endIcon:C,focusVisibleClassName:$,fullWidth:W=!1,size:E="medium",startIcon:I,type:B,variant:R="text",...M}=d,T={...d,color:u,component:v,disabled:x,disableElevation:b,disableFocusRipple:Z,fullWidth:W,size:E,type:B,variant:R},P=(e=>{const{color:t,disableElevation:a,fullWidth:n,size:o,variant:r,classes:s}=e,l={root:["root",r,`${r}${(0,m.Z)(t)}`,`size${(0,m.Z)(o)}`,`${r}Size${(0,m.Z)(o)}`,`color${(0,m.Z)(t)}`,a&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,m.Z)(o)}`],endIcon:["icon","endIcon",`iconSize${(0,m.Z)(o)}`]},d=(0,i.Z)(l,g,s);return{...s,...d}})(T),L=I&&(0,S.jsx)(w,{className:P.startIcon,ownerState:T,children:I}),N=C&&(0,S.jsx)(k,{className:P.endIcon,ownerState:T,children:C}),G=s||"";return(0,S.jsxs)(z,{ownerState:T,className:(0,o.Z)(a.className,P.root,h,G),component:v,disabled:x,focusRipple:!Z,focusVisibleClassName:(0,o.Z)(P.focusVisible,$),ref:t,type:B,...M,classes:P,children:[L,c,N]})}))},2551:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),o=a(512),r=a(4867),i=a(4780),s=a(4142),l=a(1424),d=a(9243),c=a(3213),p=a(5893);const u=(0,c.Z)(),m=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),v=e=>(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:u});var h=a(8216),x=a(948),g=a(1657);const b=function(e={}){const{createStyledComponent:t=m,useThemeProps:a=v,componentName:l="MuiContainer"}=e,d=t((({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,a)=>{const n=a,o=e.breakpoints.values[n];return 0!==o&&(t[e.breakpoints.up(n)]={maxWidth:`${o}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}))),c=n.forwardRef((function(e,t){const n=a(e),{className:c,component:u="div",disableGutters:m=!1,fixed:v=!1,maxWidth:h="lg",classes:x,...g}=n,b={...n,component:u,disableGutters:m,fixed:v,maxWidth:h},f=((e,t)=>{const{classes:a,fixed:n,disableGutters:o,maxWidth:l}=e,d={root:["root",l&&`maxWidth${(0,s.Z)(String(l))}`,n&&"fixed",o&&"disableGutters"]};return(0,i.Z)(d,(e=>(0,r.ZP)(t,e)),a)})(b,l);return(0,p.jsx)(d,{as:u,ownerState:b,className:(0,o.Z)(f.root,c),ref:t,...g})}));return c}({createStyledComponent:(0,x.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,h.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,g.Z)({props:e,name:"MuiContainer"})});var f=b},1657:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(1424),o=a(247),r=a(606);function i({props:e,name:t}){return(0,n.Z)({props:e,name:t,defaultTheme:o.Z,themeId:r.Z})}},9243:function(e,t,a){const n=(0,a(58).ZP)();t.Z=n},1424:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(1141),o=a(8732);function r({props:e,name:t,defaultTheme:a,themeId:r}){let i=(0,o.Z)(a);return r&&(i=i[r]||i),(0,n.Z)({theme:i,name:t,props:e})}},2119:function(e,t,a){var n=a(7294),o=a(4748),r=a(6565),i=a(3611),s=a(6219),l=a(9243),d=a(2734);const c=(0,l.Z)(o.Z)({display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",paddingLeft:"24px",paddingTop:"16px"}),p=(0,l.Z)(r.Z)({WebkitTextStroke:"1px rgba(0, 0, 0, 0.7)",fontWeight:"bold"});t.Z=e=>{let{onClick:t}=e;const a=(0,d.Z)();return(0,i.Z)(a.breakpoints.down("md"))?n.createElement(c,{onClick:t},n.createElement(o.Z,{component:"img",src:s.Z,alt:"MinistryWare logo",sx:{height:30,width:30,margin:0}}),n.createElement(p,{variant:"h6",component:"div"},"MinistryWare")):null}},5633:function(e,t,a){a.r(t),a.d(t,{Head:function(){return S},default:function(){return Z}});var n=a(7294),o=a(559),r=a(4748),i=a(6565),s=a(2551),l=a(9243),d=a.p+"static/donation-hero-wide-233dc84e96fa9be3977633f6f89f1481.jpg",c=a.p+"static/donation-hero-compress-f38b07abf554aa3f9b9fbbe1189a9175.jpg",p=a(2119);const u=(0,l.Z)(r.Z)((e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"flex-start",height:"calc(100vh - 50px)",color:"#fff",textAlign:"left",overflow:"hidden",zIndex:1,backgroundSize:"cover",backgroundPosition:"right",backgroundImage:"url("+d+")",[t.breakpoints.down("md")]:{backgroundImage:"url("+c+")"}}})),m=(0,l.Z)(i.Z)((e=>{let{theme:t}=e;return{position:"absolute",bottom:"150px",left:"20px",fontSize:"80px",color:"white",fontFamily:"'Great Vibes', cursive",textShadow:"2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black",zIndex:3,animation:"text-flicker-in-glow 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}}));var v=()=>n.createElement(u,null,n.createElement(s.Z,{sx:{zIndex:2,height:"inherit",p:"0 !important"}},n.createElement(p.Z,null),n.createElement(m,{className:"text-flicker-in-glow"},"You ",n.createElement("br",null),"Matter"))),h=a(2574),x=a(8732);const g=(0,l.Z)(r.Z)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.background.default,padding:t.spacing(6,0),textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}})),b=(0,l.Z)(h.Z)((e=>{let{theme:t}=e;return{marginTop:t.spacing(4),padding:t.spacing(1.5,4),fontSize:"1.25rem",backgroundColor:t.palette.primary.main,color:t.palette.common.white,"&:hover":{backgroundColor:t.palette.primary.dark}}}));var f=()=>{const e=(0,x.Z)();return n.createElement(g,null,n.createElement(s.Z,null,n.createElement(i.Z,{variant:"h4",sx:{fontWeight:"bold",marginBottom:e.spacing(2)}},"Make a Difference Today"),n.createElement(i.Z,{variant:"body1",sx:{fontSize:"1.25rem",lineHeight:1.75,maxWidth:"600px",margin:"0 auto"}},"Your generous donations help us continue to support our community and spread our mission. Every contribution counts, and together we can make an impact."),n.createElement(b,{variant:"contained",href:"/donate"},"Donate Now")))},y=a(9357);const S=()=>n.createElement(y.Z,{title:"Donate"});var Z=()=>n.createElement(o.Z,null,n.createElement(v,null),n.createElement(f,null),n.createElement("br",null),n.createElement("br",null))}}]);
//# sourceMappingURL=component---src-pages-donate-js-5b21a0f767eb62c1a5c8.js.map