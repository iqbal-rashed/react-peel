import{jsx as e,jsxs as n,Fragment as F}from"react/jsx-runtime";import{P as o,a as s,b as r,c}from"./ReactPeel.963cc82d.js";import"react";const B=void 0,A=[{id:"static-examples",text:"Static Examples",depth:2},{id:"simple",text:"Simple",depth:3},{id:"corner",text:"Corner",depth:3},{id:"shadows",text:"Shadows",depth:3},{id:"reflection",text:"Reflection",depth:3},{id:"circle",text:"Circle",depth:3},{id:"path",text:"Path",depth:3},{id:"dynamic-examples",text:"Dynamic Examples",depth:2},{id:"dragging",text:"Dragging",depth:3},{id:"dragging-heart",text:"Dragging Heart",depth:3},{id:"constraining",text:"Constraining",depth:3},{id:"page-turning-effect",text:"Page turning effect",depth:3},{id:"fade-threshold",text:"Fade threshold",depth:3},{id:"fading-out",text:"Fading out",depth:3},{id:"setting-a-peel-path",text:"Setting a peel path",depth:3},{id:"peel-path-as-a-bezier-curve",text:"Peel path as a bezier curve",depth:3},{id:"animated-examples",text:"Animated Examples",depth:2}],g="Examples";function y(t){const l=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",div:"div",button:"button",span:"span",pre:"pre",code:"code"},t.components);return n(F,{children:[n(l.h1,{id:"examples",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#examples",children:"#"}),"Examples"]}),`
`,n(l.h2,{id:"static-examples",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#static-examples",children:"#"}),"Static Examples"]}),`
`,n(l.h3,{id:"simple",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#simple",children:"#"}),"Simple"]}),`
`,e(l.p,{children:"Simplest possible example. 3 elements define the 3 layers used. A constructor sets up the effect, and a call to setPeelPosition tells it where to peel back to:"}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,peelPosition:{x:80,y:120},children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"peelPosition"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"80"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"y"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"120"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"corner",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#corner",children:"#"}),"Corner"]}),`
`,e(l.p,{children:"Any corner can be used for the peel effect:"}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,corner:"TOP_LEFT",peelPosition:{x:80,y:70},children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:'// options={{ corner: "TOP_LEFT" }}'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"corner"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"TOP_LEFT"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"peelPosition"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"80"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"y"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"70"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#81A1C1"},children:">"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"shadows",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#shadows",children:"#"}),"Shadows"]}),`
`,e(l.p,{children:"The shadow effects can be controlled through various options to the constructor (options listed below):"}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,options:{topShadow:!1,backShadowSize:.12,bottomShadowDarkAlpha:1,bottomShadowLightAlpha:.4},peelPosition:{x:150,y:0},children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"options"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"topShadow"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"false"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"backShadowSize"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0.12"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"bottomShadowDarkAlpha"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"bottomShadowLightAlpha"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0.4"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"peelPosition"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"150"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"y"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#81A1C1"},children:">"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"reflection",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#reflection",children:"#"}),"Reflection"]}),`
`,e(l.p,{children:"Adding a back reflection gives the peel a shiny effect. Reflection strength can be controller in the constructor options (see below):"}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,options:{backReflection:!0,backReflectionAlpha:.3},peelPosition:{x:150,y:0},children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"options"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"backReflection"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"true"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"backReflectionAlpha"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0.3"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"peelPosition"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"150"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"y"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#81A1C1"},children:">"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"circle",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#circle",children:"#"}),"Circle"]}),`
`,e(l.p,{children:"SVG shapes can also be used for clipping effects:"}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,options:{shape:{circle:{cx:100,cy:100,r:100}}},peelPosition:{x:100,y:80},children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"options"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"shape"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#88C0D0"},children:"circle"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#88C0D0"},children:"cx"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"100"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#88C0D0"},children:"cy"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"100"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#88C0D0"},children:"r"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"100"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"peelPosition"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"100"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"y"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"80"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#81A1C1"},children:">"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"path",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#path",children:"#"}),"Path"]}),`
`,e(l.p,{children:"More complex shapes such as paths can create custom shapes:"}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,options:{shape:{path:{d:"M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z"}}},peelPosition:{x:150,y:0},children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"options"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"shape"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#88C0D0"},children:"path"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#88C0D0"},children:"d"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"peelPosition"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"150"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"y"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#81A1C1"},children:">"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h2,{id:"dynamic-examples",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-examples",children:"#"}),"Dynamic Examples"]}),`
`,n(l.h3,{id:"dragging",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#dragging",children:"#"}),"Dragging"]}),`
`,e(l.p,{children:"Allowing the user to drag the effect by mouse or touch."}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,drag:!0,children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"drag"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"dragging-heart",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#dragging-heart",children:"#"}),"Dragging Heart"]}),`
`,e(l.p,{children:"Dragging works on custom shapes as well. Note that the corner point can be set anywhere, allowing the effect to precisely follow the mouse cursor."}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,options:{shape:{path:{d:"M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z"}}},corner:{x:101,y:175},drag:!0,children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"options"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"shape"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#88C0D0"},children:"path"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#88C0D0"},children:"d"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"corner"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"101"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"y"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"175"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"drag"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#81A1C1"},children:">"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"constraining",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#constraining",children:"#"}),"Constraining"]}),`
`,e(l.p,{children:"The peeling effect can be constrained at any point. This can be thought of as a point on the layers that are connected and cannot be torn apart:"}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,constraints:"BOTTOM_LEFT",drag:!0,children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"constraints"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"BOTTOM_LEFT"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"drag"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"page-turning-effect",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#page-turning-effect",children:"#"}),"Page turning effect"]}),`
`,e(l.p,{children:"Any number of corners can be constrained. Most often this is used to create a book-like effect, which there is a shortcut for:"}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:160,width:130,mode:"book",drag:!0,children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"160"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"130"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"mode"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"book"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"drag"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"fade-threshold",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#fade-threshold",children:"#"}),"Fade threshold"]}),`
`,e(l.p,{children:"The top layer can be faded out past a threshold which represents the clipped area of the top layer."}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,fadeThreshold:.9,drag:!0,children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"fadeThreshold"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"0.9"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"drag"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"fading-out",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#fading-out",children:"#"}),"Fading out"]}),`
`,e(l.p,{children:"Using the getAmountClipped method gives you greater control over behavior, such as stopping the effect after the top layer has been removed."}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,fadeThreshold:.9,handleDrag:(p,i,d,a)=>{a.setPeelPosition(i,d),a.getAmountClipped()===1&&a.removeEvents()},children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"fadeThreshold"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"0.9"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"handleDrag"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"evt"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"y"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"peel"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"peel"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setPeelPosition"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"y"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"if"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#D8DEE9"},children:"peel"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"getAmountClipped"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"() "}),e(l.span,{style:{color:"#81A1C1"},children:"==="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:") "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"peel"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"removeEvents"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#81A1C1"},children:">"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"setting-a-peel-path",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#setting-a-peel-path",children:"#"}),"Setting a peel path"]}),`
`,e(l.p,{children:"Sometimes you want the peel animation to follow an exact path rather than being unrestricted. The setPeelPath and setTimeAlongPath methods can accomplish this."}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:200,width:200,peelPath:[200,200,-200,-200],handleDrag:(p,i,d,a)=>{const h=(i-a.width)/-a.width;a.setTimeAlongPath(h)},children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"peelPath"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"["}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"-"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"-"}),e(l.span,{style:{color:"#B48EAD"},children:"200"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"handleDrag"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"evt"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"y"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"p"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"t"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#D8DEE9"},children:"x"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"-"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"p"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"width"}),e(l.span,{style:{color:"#D8DEE9FF"},children:") "}),e(l.span,{style:{color:"#81A1C1"},children:"/"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"-"}),e(l.span,{style:{color:"#D8DEE9"},children:"p"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"p"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setTimeAlongPath"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"t"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#81A1C1"},children:">"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"peel-path-as-a-bezier-curve",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#peel-path-as-a-bezier-curve",children:"#"}),"Peel path as a bezier curve"]}),`
`,e(l.p,{children:"Sometimes you want the peel animation to follow an exact path rather than being unrestricted. The setPeelPath and setTimeAlongPath methods can accomplish this."}),`
`,e("div",{style:{padding:"20px"},children:n(o,{height:160,width:130,peelPath:[130,160,50,60,-70,210,-130,160],handleDrag:(p,i,d,a)=>{let h=(i-a.width)/(-a.width*2);a.setTimeAlongPath(h)},children:[e(s,{style:{backgroundColor:"#81afcb"}}),e(r,{style:{backgroundColor:"#a0c7df"}}),e(c,{style:{backgroundColor:"#688394"}})]})}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"height"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"160"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"width"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#B48EAD"},children:"130"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"peelPath"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"["}),e(l.span,{style:{color:"#B48EAD"},children:"130"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"160"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"50"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"60"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"-"}),e(l.span,{style:{color:"#B48EAD"},children:"70"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"210"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"-"}),e(l.span,{style:{color:"#B48EAD"},children:"130"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"160"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"handleDrag"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"evt"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"x"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"y"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"p"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"let"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"t"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#D8DEE9"},children:"x"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"-"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"p"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"width"}),e(l.span,{style:{color:"#D8DEE9FF"},children:") "}),e(l.span,{style:{color:"#81A1C1"},children:"/"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#81A1C1"},children:"-"}),e(l.span,{style:{color:"#D8DEE9"},children:"p"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"width"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"*"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"p"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setTimeAlongPath"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"t"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#81A1C1"},children:">"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#81afcb"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelTop"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#a0c7df"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBack"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"backgroundColor"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"#688394"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}></"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelBottom"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"PeelWrapper"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h2,{id:"animated-examples",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#animated-examples",children:"#"}),"Animated Examples"]}),`
`,e(l.p,{children:"Comming soon..."}),`
`,e(l.p,{children:"Or you can help me to add more examples"})]})}function m(t={}){const{wrapper:l}=t.components||{};return l?e(l,Object.assign({},t,{children:e(y,t)})):y(t)}const P="2025/5/22 09:38:25",b=`import { PeelBack, PeelBottom, PeelWrapper, PeelTop } from "../../src/index";

# Examples

## Static Examples

### Simple

Simplest possible example. 3 elements define the 3 layers used. A constructor sets up the effect, and a call to setPeelPosition tells it where to peel back to:

<div style={{ padding: "20px" }}>
  <PeelWrapper height={200} width={200} peelPosition={{ x: 80, y: 120 }}>
    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper height={200} width={200} peelPosition={{ x: 80, y: 120 }}>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Corner

Any corner can be used for the peel effect:

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
    corner={"TOP_LEFT"}
    peelPosition={{ x: 80, y: 70 }}

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper
  height={200}
  width={200}
  // options={{ corner: "TOP_LEFT" }}
  corner={"TOP_LEFT"}
  peelPosition={{ x: 80, y: 70 }}
>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Shadows

The shadow effects can be controlled through various options to the constructor (options listed below):

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
    options={{  
      topShadow: false,
      backShadowSize: .12,
      bottomShadowDarkAlpha: 1,
      bottomShadowLightAlpha: .4
    }}
    peelPosition={{ x: 150, y: 0 }}

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper
  height={200}
  width={200}
  options={{
    topShadow: false,
    backShadowSize: 0.12,
    bottomShadowDarkAlpha: 1,
    bottomShadowLightAlpha: 0.4,
  }}
  peelPosition={{ x: 150, y: 0 }}
>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Reflection

Adding a back reflection gives the peel a shiny effect. Reflection strength can be controller in the constructor options (see below):

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
    options={{  
      backReflection: true,
      backReflectionAlpha: .3
    }}
    peelPosition={{ x: 150, y: 0 }}

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper
  height={200}
  width={200}
  options={{
    backReflection: true,
    backReflectionAlpha: 0.3,
  }}
  peelPosition={{ x: 150, y: 0 }}
>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Circle

SVG shapes can also be used for clipping effects:

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
    options={{  
      shape:{
  circle: {
    cx: 100,
    cy: 100,
    r: 100
  }}

    }}
    peelPosition={{ x: 100, y: 80 }}

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper
  height={200}
  width={200}
  options={{
    shape: {
      circle: {
        cx: 100,
        cy: 100,
        r: 100,
      },
    },
  }}
  peelPosition={{ x: 100, y: 80 }}
>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Path

More complex shapes such as paths can create custom shapes:

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
    options={{  
      shape:{
      path: {
        d: "M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z",
      },
      }

    }}
    peelPosition={{ x: 150, y: 0 }}

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper
  height={200}
  width={200}
  options={{
    shape: {
      path: {
        d: "M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z",
      },
    },
  }}
  peelPosition={{ x: 150, y: 0 }}
>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

## Dynamic Examples

### Dragging

Allowing the user to drag the effect by mouse or touch.

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
  drag

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper height={200} width={200} drag>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Dragging Heart

Dragging works on custom shapes as well. Note that the corner point can be set anywhere, allowing the effect to precisely follow the mouse cursor.

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
    options={{  
      shape:{
      path: {
        d: "M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z",
      },
      }

    }}
    corner={{x:101,y:175}}
    drag

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper
  height={200}
  width={200}
  options={{
    shape: {
      path: {
        d: "M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z",
      },
    },
  }}
  corner={{ x: 101, y: 175 }}
  drag
>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Constraining

The peeling effect can be constrained at any point. This can be thought of as a point on the layers that are connected and cannot be torn apart:

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
    constraints={"BOTTOM_LEFT"}
    drag

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper height={200} width={200} constraints={"BOTTOM_LEFT"} drag>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Page turning effect

Any number of corners can be constrained. Most often this is used to create a book-like effect, which there is a shortcut for:

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={160}
    width={130}
    mode="book"
    drag

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper height={160} width={130} mode="book" drag>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Fade threshold

The top layer can be faded out past a threshold which represents the clipped area of the top layer.

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
    fadeThreshold={.9}
    drag

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper height={200} width={200} fadeThreshold={0.9} drag>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Fading out

Using the getAmountClipped method gives you greater control over behavior, such as stopping the effect after the top layer has been removed.

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
    fadeThreshold={.9}
    handleDrag={(evt,x,y,p)=>{
        p.setPeelPosition(x, y);
      if (p.getAmountClipped() === 1) {
        p.removeEvents();
      }
    }}

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper
  height={200}
  width={200}
  fadeThreshold={0.9}
  handleDrag={(evt, x, y, peel) => {
    peel.setPeelPosition(x, y);
    if (peel.getAmountClipped() === 1) {
      peel.removeEvents();
    }
  }}
>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Setting a peel path

Sometimes you want the peel animation to follow an exact path rather than being unrestricted. The setPeelPath and setTimeAlongPath methods can accomplish this.

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={200}
    width={200}
    peelPath={[200,200,-200,-200]}
    handleDrag={(evt,x,y,p)=>{
      const t = (x - p.width) / -p.width;
      p.setTimeAlongPath(t);
    }}

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper
  height={200}
  width={200}
  peelPath={[200, 200, -200, -200]}
  handleDrag={(evt, x, y, p) => {
    const t = (x - p.width) / -p.width;
    p.setTimeAlongPath(t);
  }}
>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

### Peel path as a bezier curve

Sometimes you want the peel animation to follow an exact path rather than being unrestricted. The setPeelPath and setTimeAlongPath methods can accomplish this.

<div style={{ padding: "20px" }}>
  <PeelWrapper
    height={160}
    width={130}
    peelPath={[130, 160, 50, 60, -70, 210, -130, 160]}
    handleDrag={(evt,x,y,p)=>{
      let t = (x - p.width) / (-p.width * 2);
      p.setTimeAlongPath(t);
    }}

>

    <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
    <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
    <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>

  </PeelWrapper>
</div>

\`\`\`jsx
<PeelWrapper
  height={160}
  width={130}
  peelPath={[130, 160, 50, 60, -70, 210, -130, 160]}
  handleDrag={(evt, x, y, p) => {
    let t = (x - p.width) / (-p.width * 2);
    p.setTimeAlongPath(t);
  }}
>
  <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
  <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
  <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
</PeelWrapper>
\`\`\`

## Animated Examples

Comming soon...

Or you can help me to add more examples
`;export{b as content,m as default,B as frontmatter,P as lastUpdatedTime,g as title,A as toc};
