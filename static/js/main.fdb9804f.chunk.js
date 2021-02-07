(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(20),s=c.n(n),r=c(8),i=(c(26),c(27),c(28),c(0)),l=function(){return Object(i.jsx)("nav",{className:"Navbar",children:Object(i.jsxs)("ul",{className:"Navbar__list",children:[Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/characters",children:"Characters"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/episodes",children:"Episodes"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/locations",children:"Locations"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/my_list",children:"My watch list"})})]})})},j=function(){return Object(i.jsx)("header",{className:"Header",children:Object(i.jsx)(l,{})})},o=(c(35),c(2)),b=c(4),u=c(11),d=c.n(u),h=c(14),O=c(9),x=c(13),p=c.n(x),m=(c(37),function(){var e=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://rickandmortyapi.com/api/").concat(t),{mode:"cors"});case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=(c(38),function(e){var t=e.handleFilter,c=Object(a.useState)({status:"",species:"",gender:""}),n=Object(O.a)(c,2),s=n[0],r=n[1];return Object(i.jsxs)("form",{className:"CharactersFilter",children:[Object(i.jsxs)("select",{className:"CharactersFilter__select",value:s.status,name:"status",onChange:function(e){r(Object(b.a)(Object(b.a)({},s),{},{status:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{status:e.target.value}))},children:[Object(i.jsx)("option",{value:"",children:"All"}),Object(i.jsx)("option",{value:"Dead",children:"Dead"}),Object(i.jsx)("option",{value:"Alive",children:"Alive"}),Object(i.jsx)("option",{value:"unknown",children:"Unknown"})]}),Object(i.jsxs)("select",{className:"CharactersFilter__select",value:s.gender,name:"gender",onChange:function(e){r(Object(b.a)(Object(b.a)({},s),{},{gender:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{gender:e.target.value}))},children:[Object(i.jsx)("option",{value:"",children:"All"}),Object(i.jsx)("option",{value:"Male",children:"Male"}),Object(i.jsx)("option",{value:"Female",children:"Female"}),Object(i.jsx)("option",{value:"Genderless",children:"Genderless"}),Object(i.jsx)("option",{value:"unknown",children:"Unknown"})]}),Object(i.jsxs)("select",{className:"CharactersFilter__select",value:s.species,name:"species",onChange:function(e){r(Object(b.a)(Object(b.a)({},s),{},{species:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{species:e.target.value}))},children:[Object(i.jsx)("option",{value:"",children:"All"}),Object(i.jsx)("option",{value:"Human",children:"Human"}),Object(i.jsx)("option",{value:"Alien",children:"Alien"}),Object(i.jsx)("option",{value:"Animal",children:"Animal"}),Object(i.jsx)("option",{value:"Disease",children:"Disease"}),Object(i.jsx)("option",{value:"Cronenberg",children:"Cronenberg"}),Object(i.jsx)("option",{value:"Robot",children:"Robot"}),Object(i.jsx)("option",{value:"Humanoid",children:"Humanoid"}),Object(i.jsx)("option",{value:"Poopybutthole",children:"Poopybutthole"}),Object(i.jsx)("option",{value:"unknown",children:"Unknown"})]})]})}),_=(c(39),function(e){var t=e.id,c=e.name,a=e.status,n=e.species,s=e.gender,r=e.image,l=e.showMore;return Object(i.jsxs)("div",{onClick:function(){return l(e)},className:p()("Character",{"Character--alive":"Alive"===a,"Character--dead":"Dead"===a,"Character--unknown":"unknown"===a}),children:[Object(i.jsx)("div",{className:"Character__picture",children:Object(i.jsx)("img",{className:"Character__image",src:r,alt:c})}),Object(i.jsxs)("div",{className:"Character__info",children:[Object(i.jsx)("span",{className:"Character__index",children:t}),Object(i.jsxs)("p",{className:"Character__name",children:["Name: ",c]}),Object(i.jsxs)("p",{className:"Character__speacies",children:["Species: ",n]}),Object(i.jsxs)("p",{className:"Character__gender",children:["Gender: ",s]})]})]})}),f=(c(40),function(e){var t=e.image,c=e.name,a=e.species,n=e.gender,s=e.status,r=e.location,l=e.origin,j=e.modalReset;return Object(i.jsxs)("div",{className:"ModalCharacter",children:[Object(i.jsx)("button",{className:"ModalCharacter__close",type:"button",onClick:j,children:"x"}),Object(i.jsx)("div",{className:"ModalCharacter__picture",children:Object(i.jsx)("img",{className:"ModalCharacter__image",src:t,alt:c})}),Object(i.jsxs)("ul",{className:"ModalCharacter__list",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Name: "}),c]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Species: "}),a]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Gender: "}),n]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Status: "}),s]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Origin: "}),l.name]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Location: "}),r.name]})]})]})}),g=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),r=Object(O.a)(s,2),l=r[0],j=r[1],o=Object(a.useState)(0),u=Object(O.a)(o,2),x=u[0],g=u[1],C=Object(a.useState)(1),N=Object(O.a)(C,2),k=N[0],w=N[1],y=Object(a.useState)(null),F=Object(O.a)(y,2),A=F[0],M=F[1],S=Object(a.useState)({status:"",species:"",gender:""}),D=Object(O.a)(S,2),L=D[0],H=D[1],P=L.status,E=L.species,G=L.gender;Object(a.useEffect)(Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("character/?page=".concat(k,"&status=").concat(P,"&gender=").concat(G,"&species=").concat(E));case 2:if(!(t=e.sent).error){e.next=9;break}return n(t.results),j(0),g(0),console.log(t.error),e.abrupt("return");case 9:j(t.info.count),g(t.info.pages),n(t.results);case 12:case"end":return e.stop()}}),e)}))),[k,L]);var R=function(e){var t=Object.assign({},e);M(t)},U=function(){M(null)};return console.log(L),Object(i.jsxs)("div",{className:"Characters",children:[Object(i.jsx)(v,{handleFilter:function(e){H(Object(b.a)({},e)),w(1)}}),Object(i.jsxs)("div",{className:"Characters__info",children:[Object(i.jsxs)("p",{children:["Found characters: ",l||"0"]}),Object(i.jsxs)("p",{children:["Pages: ",x||"0"]})]}),c&&Object(i.jsx)("div",{className:"Characters__list",children:c.map((function(e){return Object(i.jsx)(_,Object(b.a)({showMore:R},e),e.id)}))}),x>1&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"Characters__pagination",children:[k>1&&Object(i.jsx)("button",{type:"button",className:"Characters__page-button",onClick:function(){return w(1)},children:"1"}),k>3&&"...",k>2&&Object(i.jsx)("button",{type:"button",className:"Characters__page-button",onClick:function(){return w(k-1)},children:k-1}),Object(i.jsx)("button",{disabled:!0,type:"button",className:"Characters__page-button",children:k}),k<x-1&&Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("button",{type:"button",className:"Characters__page-button",onClick:function(){return w(k+1)},children:k+1})}),k<x-2&&"...",k<x&&Object(i.jsx)("button",{type:"button",className:"Characters__page-button",onClick:function(){return w(x)},children:x})]}),Object(i.jsxs)("div",{className:"Characters__nav",children:[Object(i.jsx)("button",{type:"button",className:p()("Characters__nav-toggler",{"Characters__nav-toggler--disabled":k<2}),onClick:function(e){e.preventDefault(),U(),w((function(e){return e-1}))},children:"back"}),Object(i.jsx)("button",{type:"button",className:p()("Characters__nav-toggler",{"Characters__nav-toggler--disabled":x<=k}),onClick:function(e){e.preventDefault(),U(),w((function(e){return e+1}))},children:"forward"})]})]}),A&&Object(i.jsx)(f,Object(b.a)(Object(b.a)({},A),{},{modalReset:U}))]})},C=(c(41),function(){return"Episodes"}),N=(c(42),function(){return"Locations"}),k=(c(43),function(){return"WatchList"}),w=function(){return Object(i.jsx)("main",{className:"Main",children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/episodes",children:Object(i.jsx)(C,{})}),Object(i.jsx)(o.a,{exact:!0,path:"/locations",children:Object(i.jsx)(N,{})}),Object(i.jsx)(o.a,{exact:!0,path:"/my_list",children:Object(i.jsx)(k,{})}),Object(i.jsx)(o.a,{path:"/",children:Object(i.jsx)(g,{})})]})})};var y=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsx)(w,{})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};s.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),F()}},[[44,1,2]]]);
//# sourceMappingURL=main.fdb9804f.chunk.js.map