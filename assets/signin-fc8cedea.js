import{r as m,R as d,d as Ze,u as er,j as W}from"./index-9d24a4f4.js";import{useAuth as rr}from"./authProvider-defeb3b5.js";import{c as k,g as X,u as E,B as C,a as $e,e as he,r as ee,b as tr,d as ar}from"./Button-455a275e.js";function nr(e){return Array.isArray(e)?e:[e]}const sr=typeof document<"u"?m.useLayoutEffect:m.useEffect;function or(){return`mantine-${Math.random().toString(36).slice(2,11)}`}const ir=d["useId".toString()]||(()=>{});function lr(){const e=ir();return e?`mantine-${e.replace(/:/g,"")}`:""}function pr(e){const r=lr(),[t,a]=m.useState(r);return sr(()=>{a(or())},[]),typeof e=="string"?e:typeof window>"u"?r:t}var cr=Object.defineProperty,fr=Object.defineProperties,dr=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,ur=Object.prototype.hasOwnProperty,_r=Object.prototype.propertyIsEnumerable,le=(e,r,t)=>r in e?cr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,q=(e,r)=>{for(var t in r||(r={}))ur.call(r,t)&&le(e,t,r[t]);if(ie)for(var t of ie(r))_r.call(r,t)&&le(e,t,r[t]);return e},mr=(e,r)=>fr(e,dr(r));function vr({underline:e,strikethrough:r}){const t=[];return e&&t.push("underline"),r&&t.push("line-through"),t.length>0?t.join(" "):"none"}function yr({theme:e,color:r}){return r==="dimmed"?e.fn.dimmed():typeof r=="string"&&(r in e.colors||r.split(".")[0]in e.colors)?e.fn.variant({variant:"filled",color:r}).background:r||"inherit"}function Pr(e){return typeof e=="number"?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:e,WebkitBoxOrient:"vertical"}:null}function Or({theme:e,truncate:r}){return r==="start"?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",direction:e.dir==="ltr"?"rtl":"ltr",textAlign:e.dir==="ltr"?"right":"left"}:r?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null}var gr=k((e,{color:r,lineClamp:t,truncate:a,inline:n,inherit:o,underline:f,gradient:l,weight:s,transform:i,align:u,strikethrough:_,italic:p},{size:c})=>{const v=e.fn.variant({variant:"gradient",gradient:l});return{root:mr(q(q(q(q({},e.fn.fontStyles()),e.fn.focusStyles()),Pr(t)),Or({theme:e,truncate:a})),{color:yr({color:r,theme:e}),fontFamily:o?"inherit":e.fontFamily,fontSize:o||c===void 0?"inherit":X({size:c,sizes:e.fontSizes}),lineHeight:o?"inherit":n?1:e.lineHeight,textDecoration:vr({underline:f,strikethrough:_}),WebkitTapHighlightColor:"transparent",fontWeight:o?"inherit":s,textTransform:i,textAlign:u,fontStyle:p?"italic":void 0}),gradient:{backgroundImage:v.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}});const wr=gr;var br=Object.defineProperty,F=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,pe=(e,r,t)=>r in e?br(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,$r=(e,r)=>{for(var t in r||(r={}))Se.call(r,t)&&pe(e,t,r[t]);if(F)for(var t of F(r))Ie.call(r,t)&&pe(e,t,r[t]);return e},hr=(e,r)=>{var t={};for(var a in e)Se.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&F)for(var a of F(e))r.indexOf(a)<0&&Ie.call(e,a)&&(t[a]=e[a]);return t};const Sr={variant:"text"},xe=m.forwardRef((e,r)=>{const t=E("Text",Sr,e),{className:a,size:n,weight:o,transform:f,color:l,align:s,variant:i,lineClamp:u,truncate:_,gradient:p,inline:c,inherit:v,underline:O,strikethrough:P,italic:w,classNames:y,styles:h,unstyled:S,span:I,__staticSelector:x}=t,j=hr(t,["className","size","weight","transform","color","align","variant","lineClamp","truncate","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span","__staticSelector"]),{classes:b,cx:z}=wr({color:l,lineClamp:u,truncate:_,inline:c,inherit:v,underline:O,strikethrough:P,italic:w,weight:o,transform:f,align:s,gradient:p},{unstyled:S,name:x||"Text",variant:i,size:n});return d.createElement(C,$r({ref:r,className:z(b.root,{[b.gradient]:i==="gradient"},a),component:I?"span":"div"},j))});xe.displayName="@mantine/core/Text";const Ne=$e(xe);var Ir=Object.defineProperty,xr=Object.defineProperties,Nr=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,ce=(e,r,t)=>r in e?Ir(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,V=(e,r)=>{for(var t in r||(r={}))Ee.call(r,t)&&ce(e,t,r[t]);if(L)for(var t of L(r))je.call(r,t)&&ce(e,t,r[t]);return e},Er=(e,r)=>xr(e,Nr(r)),jr=(e,r)=>{var t={};for(var a in e)Ee.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&L)for(var a of L(e))r.indexOf(a)<0&&je.call(e,a)&&(t[a]=e[a]);return t};function zr(e,r,t){const a=E(e,r,t),{label:n,description:o,error:f,required:l,classNames:s,styles:i,className:u,unstyled:_,__staticSelector:p,sx:c,errorProps:v,labelProps:O,descriptionProps:P,wrapperProps:w,id:y,size:h,style:S,inputContainer:I,inputWrapperOrder:x,withAsterisk:j,variant:b}=a,z=jr(a,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","sx","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk","variant"]),g=pr(y),{systemStyles:T,rest:$}=he(z),R=V({label:n,description:o,error:f,required:l,classNames:s,className:u,__staticSelector:p,sx:c,errorProps:v,labelProps:O,descriptionProps:P,unstyled:_,styles:i,id:g,size:h,style:S,inputContainer:I,inputWrapperOrder:x,withAsterisk:j,variant:b},w);return Er(V({},$),{classNames:s,styles:i,unstyled:_,wrapperProps:V(V({},R),T),inputProps:{required:l,classNames:s,styles:i,unstyled:_,id:g,size:h,__staticSelector:p,error:f,variant:b}})}var Wr=k((e,r,{size:t})=>({label:{display:"inline-block",fontSize:X({size:t,sizes:e.fontSizes}),fontWeight:500,color:e.colorScheme==="dark"?e.colors.dark[0]:e.colors.gray[9],wordBreak:"break-word",cursor:"default",WebkitTapHighlightColor:"transparent"},required:{color:e.fn.variant({variant:"filled",color:"red"}).background}}));const Dr=Wr;var Rr=Object.defineProperty,H=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,fe=(e,r,t)=>r in e?Rr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Cr=(e,r)=>{for(var t in r||(r={}))ze.call(r,t)&&fe(e,t,r[t]);if(H)for(var t of H(r))We.call(r,t)&&fe(e,t,r[t]);return e},Tr=(e,r)=>{var t={};for(var a in e)ze.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&H)for(var a of H(e))r.indexOf(a)<0&&We.call(e,a)&&(t[a]=e[a]);return t};const kr={labelElement:"label",size:"sm"},re=m.forwardRef((e,r)=>{const t=E("InputLabel",kr,e),{labelElement:a,children:n,required:o,size:f,classNames:l,styles:s,unstyled:i,className:u,htmlFor:_,__staticSelector:p,variant:c,onMouseDown:v}=t,O=Tr(t,["labelElement","children","required","size","classNames","styles","unstyled","className","htmlFor","__staticSelector","variant","onMouseDown"]),{classes:P,cx:w}=Dr(null,{name:["InputWrapper",p],classNames:l,styles:s,unstyled:i,variant:c,size:f});return d.createElement(C,Cr({component:a,ref:r,className:w(P.label,u),htmlFor:a==="label"?_:void 0,onMouseDown:y=>{v==null||v(y),!y.defaultPrevented&&y.detail>1&&y.preventDefault()}},O),n,o&&d.createElement("span",{className:P.required,"aria-hidden":!0}," *"))});re.displayName="@mantine/core/InputLabel";var Br=k((e,r,{size:t})=>({error:{wordBreak:"break-word",color:e.fn.variant({variant:"filled",color:"red"}).background,fontSize:`calc(${X({size:t,sizes:e.fontSizes})} - ${ee(2)})`,lineHeight:1.2,display:"block"}}));const qr=Br;var Vr=Object.defineProperty,M=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,de=(e,r,t)=>r in e?Vr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ar=(e,r)=>{for(var t in r||(r={}))De.call(r,t)&&de(e,t,r[t]);if(M)for(var t of M(r))Re.call(r,t)&&de(e,t,r[t]);return e},Fr=(e,r)=>{var t={};for(var a in e)De.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&M)for(var a of M(e))r.indexOf(a)<0&&Re.call(e,a)&&(t[a]=e[a]);return t};const Lr={size:"sm"},te=m.forwardRef((e,r)=>{const t=E("InputError",Lr,e),{children:a,className:n,classNames:o,styles:f,unstyled:l,size:s,__staticSelector:i,variant:u}=t,_=Fr(t,["children","className","classNames","styles","unstyled","size","__staticSelector","variant"]),{classes:p,cx:c}=qr(null,{name:["InputWrapper",i],classNames:o,styles:f,unstyled:l,variant:u,size:s});return d.createElement(Ne,Ar({className:c(p.error,n),ref:r},_),a)});te.displayName="@mantine/core/InputError";var Hr=k((e,r,{size:t})=>({description:{wordBreak:"break-word",color:e.colorScheme==="dark"?e.colors.dark[2]:e.colors.gray[6],fontSize:`calc(${X({size:t,sizes:e.fontSizes})} - ${ee(2)})`,lineHeight:1.2,display:"block"}}));const Mr=Hr;var Ur=Object.defineProperty,U=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,ue=(e,r,t)=>r in e?Ur(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Gr=(e,r)=>{for(var t in r||(r={}))Ce.call(r,t)&&ue(e,t,r[t]);if(U)for(var t of U(r))Te.call(r,t)&&ue(e,t,r[t]);return e},Jr=(e,r)=>{var t={};for(var a in e)Ce.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&U)for(var a of U(e))r.indexOf(a)<0&&Te.call(e,a)&&(t[a]=e[a]);return t};const Kr={size:"sm"},ae=m.forwardRef((e,r)=>{const t=E("InputDescription",Kr,e),{children:a,className:n,classNames:o,styles:f,unstyled:l,size:s,__staticSelector:i,variant:u}=t,_=Jr(t,["children","className","classNames","styles","unstyled","size","__staticSelector","variant"]),{classes:p,cx:c}=Mr(null,{name:["InputWrapper",i],classNames:o,styles:f,unstyled:l,variant:u,size:s});return d.createElement(Ne,Gr({color:"dimmed",className:c(p.description,n),ref:r,unstyled:l},_),a)});ae.displayName="@mantine/core/InputDescription";const ke=m.createContext({offsetBottom:!1,offsetTop:!1,describedBy:void 0}),Qr=ke.Provider,Xr=()=>m.useContext(ke);function Yr(e,{hasDescription:r,hasError:t}){const a=e.findIndex(s=>s==="input"),n=e[a-1],o=e[a+1];return{offsetBottom:r&&o==="description"||t&&o==="error",offsetTop:r&&n==="description"||t&&n==="error"}}var Zr=Object.defineProperty,et=Object.defineProperties,rt=Object.getOwnPropertyDescriptors,_e=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,me=(e,r,t)=>r in e?Zr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,nt=(e,r)=>{for(var t in r||(r={}))tt.call(r,t)&&me(e,t,r[t]);if(_e)for(var t of _e(r))at.call(r,t)&&me(e,t,r[t]);return e},st=(e,r)=>et(e,rt(r)),ot=k(e=>({root:st(nt({},e.fn.fontStyles()),{lineHeight:e.lineHeight})}));const it=ot;var lt=Object.defineProperty,pt=Object.defineProperties,ct=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,ve=(e,r,t)=>r in e?lt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,N=(e,r)=>{for(var t in r||(r={}))Be.call(r,t)&&ve(e,t,r[t]);if(G)for(var t of G(r))qe.call(r,t)&&ve(e,t,r[t]);return e},ye=(e,r)=>pt(e,ct(r)),ft=(e,r)=>{var t={};for(var a in e)Be.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&G)for(var a of G(e))r.indexOf(a)<0&&qe.call(e,a)&&(t[a]=e[a]);return t};const dt={labelElement:"label",size:"sm",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},Ve=m.forwardRef((e,r)=>{const t=E("InputWrapper",dt,e),{className:a,label:n,children:o,required:f,id:l,error:s,description:i,labelElement:u,labelProps:_,descriptionProps:p,errorProps:c,classNames:v,styles:O,size:P,inputContainer:w,__staticSelector:y,unstyled:h,inputWrapperOrder:S,withAsterisk:I,variant:x}=t,j=ft(t,["className","label","children","required","id","error","description","labelElement","labelProps","descriptionProps","errorProps","classNames","styles","size","inputContainer","__staticSelector","unstyled","inputWrapperOrder","withAsterisk","variant"]),{classes:b,cx:z}=it(null,{classNames:v,styles:O,name:["InputWrapper",y],unstyled:h,variant:x,size:P}),g={classNames:v,styles:O,unstyled:h,size:P,variant:x,__staticSelector:y},T=typeof I=="boolean"?I:f,$=l?`${l}-error`:c==null?void 0:c.id,R=l?`${l}-description`:p==null?void 0:p.id,B=`${!!s&&typeof s!="boolean"?$:""} ${i?R:""}`,Je=B.trim().length>0?B.trim():void 0,Ke=n&&d.createElement(re,N(N({key:"label",labelElement:u,id:l?`${l}-label`:void 0,htmlFor:l,required:T},g),_),n),se=i&&d.createElement(ae,ye(N(N({key:"description"},p),g),{size:(p==null?void 0:p.size)||g.size,id:(p==null?void 0:p.id)||R}),i),Qe=d.createElement(m.Fragment,{key:"input"},w(o)),oe=typeof s!="boolean"&&s&&d.createElement(te,ye(N(N({},c),g),{size:(c==null?void 0:c.size)||g.size,key:"error",id:(c==null?void 0:c.id)||$}),s),Xe=S.map(Ye=>{switch(Ye){case"label":return Ke;case"input":return Qe;case"description":return se;case"error":return oe;default:return null}});return d.createElement(Qr,{value:N({describedBy:Je},Yr(S,{hasDescription:!!se,hasError:!!oe}))},d.createElement(C,N({className:z(b.root,a),ref:r},j),Xe))});Ve.displayName="@mantine/core/InputWrapper";var ut=Object.defineProperty,J=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,Pe=(e,r,t)=>r in e?ut(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_t=(e,r)=>{for(var t in r||(r={}))Ae.call(r,t)&&Pe(e,t,r[t]);if(J)for(var t of J(r))Fe.call(r,t)&&Pe(e,t,r[t]);return e},mt=(e,r)=>{var t={};for(var a in e)Ae.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&J)for(var a of J(e))r.indexOf(a)<0&&Fe.call(e,a)&&(t[a]=e[a]);return t};const vt={},Le=m.forwardRef((e,r)=>{const t=E("InputPlaceholder",vt,e),{sx:a}=t,n=mt(t,["sx"]);return d.createElement(C,_t({component:"span",sx:[o=>o.fn.placeholderStyles(),...nr(a)],ref:r},n))});Le.displayName="@mantine/core/InputPlaceholder";var yt=Object.defineProperty,Pt=Object.defineProperties,Ot=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,Oe=(e,r,t)=>r in e?yt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,A=(e,r)=>{for(var t in r||(r={}))He.call(r,t)&&Oe(e,t,r[t]);if(K)for(var t of K(r))Me.call(r,t)&&Oe(e,t,r[t]);return e},ge=(e,r)=>Pt(e,Ot(r)),gt=(e,r)=>{var t={};for(var a in e)He.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&K)for(var a of K(e))r.indexOf(a)<0&&Me.call(e,a)&&(t[a]=e[a]);return t};const wt={size:"sm",variant:"default"},D=m.forwardRef((e,r)=>{const t=E("Input",wt,e),{className:a,error:n,required:o,disabled:f,variant:l,icon:s,style:i,rightSectionWidth:u,iconWidth:_,rightSection:p,rightSectionProps:c,radius:v,size:O,wrapperProps:P,classNames:w,styles:y,__staticSelector:h,multiline:S,sx:I,unstyled:x,pointer:j}=t,b=gt(t,["className","error","required","disabled","variant","icon","style","rightSectionWidth","iconWidth","rightSection","rightSectionProps","radius","size","wrapperProps","classNames","styles","__staticSelector","multiline","sx","unstyled","pointer"]),{offsetBottom:z,offsetTop:g,describedBy:T}=Xr(),{classes:$,cx:R}=tr({radius:v,multiline:S,invalid:!!n,rightSectionWidth:u?ee(u):void 0,iconWidth:_,withRightSection:!!p,offsetBottom:z,offsetTop:g,pointer:j},{classNames:w,styles:y,name:["Input",h],unstyled:x,variant:l,size:O}),{systemStyles:ne,rest:B}=he(b);return d.createElement(C,A(A({className:R($.wrapper,a),sx:I,style:i},ne),P),s&&d.createElement("div",{className:$.icon},s),d.createElement(C,ge(A({component:"input"},B),{ref:r,required:o,"aria-invalid":!!n,"aria-describedby":T,disabled:f,"data-disabled":f||void 0,"data-with-icon":!!s||void 0,"data-invalid":!!n||void 0,className:$.input})),p&&d.createElement("div",ge(A({},c),{className:$.rightSection}),p))});D.displayName="@mantine/core/Input";D.Wrapper=Ve;D.Label=re;D.Description=ae;D.Error=te;D.Placeholder=Le;const we=$e(D);var bt=Object.defineProperty,$t=Object.defineProperties,ht=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,be=(e,r,t)=>r in e?bt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Y=(e,r)=>{for(var t in r||(r={}))Ue.call(r,t)&&be(e,t,r[t]);if(Q)for(var t of Q(r))Ge.call(r,t)&&be(e,t,r[t]);return e},St=(e,r)=>$t(e,ht(r)),It=(e,r)=>{var t={};for(var a in e)Ue.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&Q)for(var a of Q(e))r.indexOf(a)<0&&Ge.call(e,a)&&(t[a]=e[a]);return t};const xt={type:"text",size:"sm",__staticSelector:"TextInput"},Z=m.forwardRef((e,r)=>{const t=zr("TextInput",xt,e),{inputProps:a,wrapperProps:n}=t,o=It(t,["inputProps","wrapperProps"]);return d.createElement(we.Wrapper,Y({},n),d.createElement(we,St(Y(Y({},a),o),{ref:r})))});Z.displayName="@mantine/core/TextInput";const zt=()=>{var s;const[e,r]=d.useState({name:"",password:""}),t=rr(),a=Ze(),n=er(),o=((s=n.state)==null?void 0:s.from)||"/",f=i=>{r(u=>({...u,[i.target.name]:i.target.value}))},l=i=>{i.preventDefault(),t.signin(e,()=>{a(o,{replace:!0})})};return W.jsxs(W.Fragment,{children:[n.state.from==="/signin"?null:W.jsx("h3",{className:"title",children:"Для работы приложения нужно зарегистрироваться:"}),W.jsxs("form",{className:"form",onSubmit:i=>l(i),children:[W.jsx(Z,{value:e.name,onChange:f,name:"name",disabled:!1,type:"text",className:"input",placeholder:"имя",label:"Введите имя",withAsterisk:!0,required:!0}),W.jsx(Z,{value:e.password,onChange:f,name:"password",disabled:!1,type:"password",className:"input",placeholder:"пароль",label:"Введите пароль",withAsterisk:!0,required:!0}),W.jsx(ar,{type:"submit",className:"submit-btn",children:"Войти"})]})]})};export{zt as default};