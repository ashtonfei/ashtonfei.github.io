import{m as P,a as v,A as b,B as S,H as h,i as y,R as N,b as O,C as W,c as X,W as Y,q as $,r as j,d as z,D as J,s as K,f as Q,x as U,F as Z,G as ee,g as ae,X as te,v as ne,w as ie,h as de,E as se,V as le,Y as ce,y as re}from"./VRow.b6641fe1.js";import{l as p,m as n,am as ue,s as oe,I as o,n as ve,q as me,c as I,a1 as fe,a2 as ge}from"./index.9a5996fa.js";const he=p()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...P()},setup(e,i){let{slots:t}=i;return v(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},t)),{}}});const ke=ue({name:"VCardActions",setup(e,i){let{slots:t}=i;return oe({VBtn:{variant:"text"}}),v(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ye=b("v-card-subtitle"),be=b("v-card-title"),pe=p()({name:"VCardItem",props:{appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:String,title:String,...S()},setup(e,i){let{slots:t}=i;return v(()=>{var c;const a=!!(e.prependAvatar||e.prependIcon),m=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),f=!!(l||t.append),g=!!(e.title||t.title),k=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[m&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(y,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(h,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[g&&n(be,{key:"title"},{default:()=>{var d,s;return[(s=(d=t.title)==null?void 0:d.call(t))!=null?s:e.title]}}),k&&n(ye,{key:"subtitle"},{default:()=>{var d,s;return[(s=(d=t.subtitle)==null?void 0:d.call(t))!=null?s:e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),f&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(y,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):l&&n(h,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ce=b("v-card-text"),Ie=p()({name:"VCard",directives:{Ripple:N},props:{appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...ve(),...O(),...S(),...W(),...X(),...Y(),...$(),...j(),...z(),...J(),...P(),...K({variant:"elevated"})},setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:m}=me(e),{borderClasses:l}=Q(e),{colorClasses:f,colorStyles:g,variantClasses:k}=U(e),{densityClasses:c}=Z(e),{dimensionStyles:d}=ee(e),{elevationClasses:s}=ae(e),{loaderClasses:x}=te(e),{locationStyles:B}=ne(e),{positionClasses:D}=ie(e),{roundedClasses:T}=de(e),r=se(e,t),_=I(()=>e.link!==!1&&r.isLink.value),u=I(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return v(()=>{const L=_.value?"a":e.tag,R=!!(a.title||e.title),E=!!(a.subtitle||e.subtitle),q=R||E,w=!!(a.append||e.appendAvatar||e.appendIcon),F=!!(a.prepend||e.prependAvatar||e.prependIcon),H=!!(a.image||e.image),M=q||F||w,G=!!(a.text||e.text);return fe(n(L,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":u.value},m.value,l.value,f.value,c.value,s.value,x.value,D.value,T.value,k.value],style:[g.value,d.value,B.value],href:r.href.value,onClick:u.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[H&&n("div",{key:"image",class:"v-card__image"},[a.image?n(y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(le,{key:"image-img",cover:!0,src:e.image},null)]),n(ce,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),M&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),G&&n(Ce,{key:"text"},{default:()=>{var A,V;return[(V=(A=a.text)==null?void 0:A.call(a))!=null?V:e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(ke,null,{default:a.actions}),re(u.value,"v-card")]}}),[[ge("ripple"),u.value&&e.ripple]])}),{}}});export{he as V,Ie as a,Ce as b,be as c,ye as d,ke as e};