(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(22),s=c.n(a),i=c(10),r=(c(29),c(30),c(31),c(0)),l=function(){return Object(r.jsx)("nav",{className:"Navbar",children:Object(r.jsxs)("ul",{className:"Navbar__list",children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/characters",children:"Characters"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/episodes",children:"Episodes"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/locations",children:"Locations"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/my_list",children:"My watch list"})})]})})},j=function(){return Object(r.jsx)("header",{className:"Header",children:Object(r.jsx)(l,{})})},o=(c(38),c(4)),b=c(2),u=c(8),d=c.n(u),O=c(11),h=c(3),x=(c(40),function(){var e=Object(O.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://rickandmortyapi.com/api/").concat(t),{mode:"cors"});case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=(c(41),function(e){var t=e.handleFilter,c=Object(n.useState)({status:"",species:"",gender:""}),a=Object(h.a)(c,2),s=a[0],i=a[1];return Object(r.jsxs)("form",{className:"CharactersFilter",children:[Object(r.jsxs)("select",{className:"CharactersFilter__select",value:s.status,name:"status",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{status:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{status:e.target.value}))},children:[Object(r.jsx)("option",{value:"",children:"All"}),Object(r.jsx)("option",{value:"Dead",children:"Dead"}),Object(r.jsx)("option",{value:"Alive",children:"Alive"}),Object(r.jsx)("option",{value:"unknown",children:"Unknown"})]}),Object(r.jsxs)("select",{className:"CharactersFilter__select",value:s.gender,name:"gender",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{gender:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{gender:e.target.value}))},children:[Object(r.jsx)("option",{value:"",children:"All"}),Object(r.jsx)("option",{value:"Male",children:"Male"}),Object(r.jsx)("option",{value:"Female",children:"Female"}),Object(r.jsx)("option",{value:"Genderless",children:"Genderless"}),Object(r.jsx)("option",{value:"unknown",children:"Unknown"})]}),Object(r.jsxs)("select",{className:"CharactersFilter__select",value:s.species,name:"species",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{species:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{species:e.target.value}))},children:[Object(r.jsx)("option",{value:"",children:"All"}),Object(r.jsx)("option",{value:"Human",children:"Human"}),Object(r.jsx)("option",{value:"Alien",children:"Alien"}),Object(r.jsx)("option",{value:"Animal",children:"Animal"}),Object(r.jsx)("option",{value:"Disease",children:"Disease"}),Object(r.jsx)("option",{value:"Cronenberg",children:"Cronenberg"}),Object(r.jsx)("option",{value:"Robot",children:"Robot"}),Object(r.jsx)("option",{value:"Humanoid",children:"Humanoid"}),Object(r.jsx)("option",{value:"Poopybutthole",children:"Poopybutthole"}),Object(r.jsx)("option",{value:"unknown",children:"Unknown"})]})]})}),m=(c(42),c(13)),v=c.n(m),f=function(e){var t=e.id,c=e.name,n=e.status,a=e.species,s=e.gender,i=e.image,l=e.showMore;return Object(r.jsxs)("div",{onClick:function(){return l(e)},className:v()("Character",{"Character--alive":"Alive"===n,"Character--dead":"Dead"===n,"Character--unknown":"unknown"===n}),children:[Object(r.jsx)("div",{className:"Character__picture",children:Object(r.jsx)("img",{className:"Character__image",src:i,alt:c})}),Object(r.jsxs)("div",{className:"Character__info",children:[Object(r.jsx)("span",{className:"Character__index",children:t}),Object(r.jsxs)("p",{className:"Character__name",children:["Name: ",c]}),Object(r.jsxs)("p",{className:"Character__speacies",children:["Species: ",a]}),Object(r.jsxs)("p",{className:"Character__gender",children:["Gender: ",s]})]})]})},g=(c(43),function(e){var t=e.image,c=e.name,n=e.species,a=e.gender,s=e.status,i=e.location,l=e.origin,j=e.modalReset;return Object(r.jsxs)("div",{className:"ModalCharacter",children:[Object(r.jsx)("button",{className:"ModalCharacter__close",type:"button",onClick:j,children:"x"}),Object(r.jsx)("div",{className:"ModalCharacter__picture",children:Object(r.jsx)("img",{className:"ModalCharacter__image",src:t,alt:c})}),Object(r.jsxs)("ul",{className:"ModalCharacter__list",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Name: "}),c]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Species: "}),n]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Gender: "}),a]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Status: "}),s]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Origin: "}),l.name]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Location: "}),i.name]})]})]})}),_=(c(44),function(e){var t=e.currentPage,c=e.setCurrentPage,n=e.pagesAmount;return Object(r.jsxs)("div",{className:"Pagination",children:[t>1&&Object(r.jsx)("button",{type:"button",className:"Pagination__page-button",onClick:function(){c(1)},children:"1"}),t>3&&"...",t>2&&Object(r.jsx)("button",{type:"button",className:"Pagination__page-button",onClick:function(){c(t-1)},children:t-1}),Object(r.jsx)("button",{disabled:!0,type:"button",className:"Pagination__page-button Pagination__page-button--active",children:t}),t<n-1&&Object(r.jsx)("button",{type:"button",className:"Pagination__page-button",onClick:function(){c(t+1)},children:t+1}),t<n-2&&"...",t<n&&Object(r.jsx)("button",{type:"button",className:"Pagination__page-button",onClick:function(){c(n)},children:n})]})}),N=(c(45),function(e){var t=e.currentPage,c=e.pagesAmount,n=e.setCurrentPage;return Object(r.jsxs)("div",{className:"ListNav",children:[Object(r.jsx)("button",{type:"button",className:v()("ListNav__nav-toggler",{"ListNav__nav-toggler--disabled":t<2}),onClick:function(e){e.preventDefault(),n((function(e){return e-1}))},children:"back"}),Object(r.jsx)("button",{type:"button",className:v()("ListNav__nav-toggler",{"ListNav__nav-toggler--disabled":c<=t}),onClick:function(e){e.preventDefault(),n((function(e){return e+1}))},children:"forward"})]})}),C=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(h.a)(s,2),l=i[0],j=i[1],o=Object(n.useState)(0),u=Object(h.a)(o,2),m=u[0],v=u[1],C=Object(n.useState)(1),y=Object(h.a)(C,2),k=y[0],P=y[1],S=Object(n.useState)(null),w=Object(h.a)(S,2),D=w[0],F=w[1],A=Object(n.useState)({status:"",species:"",gender:""}),L=Object(h.a)(A,2),M=L[0],E=L[1],W=M.status,R=M.species,T=M.gender;Object(n.useEffect)(Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("character/?page=".concat(k,"&status=").concat(W,"&gender=").concat(T,"&species=").concat(R));case 2:if(!(t=e.sent).error){e.next=9;break}return a(t.results),j(0),v(0),console.log(t.error),e.abrupt("return");case 9:j(t.info.count),v(t.info.pages),a(t.results);case 12:case"end":return e.stop()}}),e)}))),[k,M]);var H=function(e){var t=Object.assign({},e);F(t)};return Object(r.jsxs)("div",{className:"Characters",children:[Object(r.jsx)("h1",{className:"Characters__title",children:"Characters"}),Object(r.jsxs)("div",{className:"Characters__info",children:[Object(r.jsxs)("p",{children:["Found characters: ",l||"0"]}),Object(r.jsxs)("p",{children:["Pages: ",m||"0"]})]}),Object(r.jsx)(p,{handleFilter:function(e){E(Object(b.a)({},e)),P(1)}}),Object(r.jsx)(_,{currentPage:k,setCurrentPage:P,pagesAmount:m}),Object(r.jsx)(N,{currentPage:k,pagesAmount:m,setCurrentPage:P}),c&&Object(r.jsx)("div",{className:"Characters__list",children:c.map((function(e){return Object(r.jsx)(f,Object(b.a)({showMore:H},e),e.id)}))}),D&&Object(r.jsx)(g,Object(b.a)(Object(b.a)({},D),{},{modalReset:function(){F(null)}}))]})},y=(c(46),c(47),function(e){var t=e.handleSearch,c=e.setCurrentPage,a=Object(n.useState)(""),s=Object(h.a)(a,2),i=s[0],l=s[1];return Object(r.jsx)("input",{className:"EpisodesFilter",type:"text",value:i,autoComplete:"off",placeholder:"Episode title",onChange:function(e){c(1),l(e.target.value),t(e.target.value)}})}),k=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(h.a)(s,2),l=i[0],j=i[1],o=Object(n.useState)(0),b=Object(h.a)(o,2),u=b[0],p=b[1],m=Object(n.useState)(1),v=Object(h.a)(m,2),f=v[0],g=v[1],C=Object(n.useState)(""),k=Object(h.a)(C,2),P=k[0],S=k[1];Object(n.useEffect)(Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("episode?page=".concat(f,"&name=").concat(P));case 2:if(!(t=e.sent).error){e.next=5;break}return e.abrupt("return");case 5:j(t.info.count),p(t.info.pages),a(t.results);case 8:case"end":return e.stop()}}),e)}))),[f,P]);return Object(r.jsxs)("div",{className:"Episodes",children:[Object(r.jsx)("h1",{className:"Episodes__title",children:"Episodes"}),Object(r.jsxs)("div",{className:"Episodes__info",children:[Object(r.jsxs)("p",{children:["Found series: ",l||"0"]}),Object(r.jsxs)("p",{children:["Pages: ",u||"0"]})]}),Object(r.jsx)(y,{handleSearch:function(e){S(e)},setCurrentPage:g}),Object(r.jsx)(_,{currentPage:f,setCurrentPage:g,pagesAmount:u}),Object(r.jsx)(N,{currentPage:f,pagesAmount:u,setCurrentPage:g}),Object(r.jsxs)("table",{className:"Episodes__table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"\u2116"}),Object(r.jsx)("td",{children:"Episodes"}),Object(r.jsx)("td",{children:"Title"}),Object(r.jsx)("td",{children:"Air date"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[e.id,"."]}),Object(r.jsx)("td",{children:e.episode}),Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.air_date})]},e.id)}))})]})]})},P=(c(48),c(49),function(e){var t=e.handleFilter,c=Object(n.useState)({name:"",type:"",dimension:""}),a=Object(h.a)(c,2),s=a[0],i=a[1];return Object(r.jsxs)("form",{className:"LocationsFilter",children:[Object(r.jsx)("input",{className:"LocationsFilter__field",type:"text",value:s.name,name:"name",placeholder:"Location",autoComplete:"off",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{name:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{name:e.target.value}))}}),Object(r.jsxs)("select",{className:"LocationsFilter__field",value:s.type,name:"gender",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{type:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{type:e.target.value}))},children:[Object(r.jsx)("option",{value:"",children:"All"}),Object(r.jsx)("option",{value:"Planet",children:"Planet"}),Object(r.jsx)("option",{value:"Cluster",children:"Cluster"}),Object(r.jsx)("option",{value:"Space station",children:"Space station"}),Object(r.jsx)("option",{value:"Microverse",children:"Microverse"}),Object(r.jsx)("option",{value:"Resort",children:"Resort"}),Object(r.jsx)("option",{value:"Fantasy town",children:"Fantasy town"}),Object(r.jsx)("option",{value:"Space station",children:"Space station"}),Object(r.jsx)("option",{value:"TV",children:"TV"}),Object(r.jsx)("option",{value:"Dream",children:"Dream"})]}),Object(r.jsxs)("select",{className:"LocationsFilter__field",value:s.dimension,name:"species",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{dimension:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{dimension:e.target.value}))},children:[Object(r.jsx)("option",{value:"",children:"All"}),Object(r.jsx)("option",{value:"Dimension C-137",children:"Dimension C-137"}),Object(r.jsx)("option",{value:"unknown",children:"unknown"}),Object(r.jsx)("option",{value:"Replacement Dimension",children:"Replacement Dimension"}),Object(r.jsx)("option",{value:"Cronenberg Dimension",children:"Cronenberg Dimension"}),Object(r.jsx)("option",{value:"Fantasy Dimension",children:"Fantasy Dimension"}),Object(r.jsx)("option",{value:"Dimension 5-126",children:"Dimension 5-126"}),Object(r.jsx)("option",{value:"Post-Apocalyptic Dimension",children:"Post-Apocalyptic Dimension"})]})]})}),S=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(h.a)(s,2),l=i[0],j=i[1],o=Object(n.useState)(0),u=Object(h.a)(o,2),p=u[0],m=u[1],v=Object(n.useState)(1),f=Object(h.a)(v,2),g=f[0],C=f[1],y=Object(n.useState)({name:"",type:"",dimension:""}),k=Object(h.a)(y,2),S=k[0],w=k[1],D=S.name,F=S.type,A=S.dimension;Object(n.useEffect)(Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("location?page=".concat(g,"&name=").concat(D,"&type=").concat(F,"&dimension=").concat(A));case 2:if(!(t=e.sent).error){e.next=8;break}return j(0),m(0),console.log(t.error),e.abrupt("return");case 8:j(t.info.count),m(t.info.pages),a(t.results);case 11:case"end":return e.stop()}}),e)}))),[g,S]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"Locations__title",children:"Locations"}),Object(r.jsxs)("div",{className:"Locations__info",children:[Object(r.jsxs)("p",{children:["Found characters: ",l||"0"]}),Object(r.jsxs)("p",{children:["Pages: ",p||"0"]})]}),Object(r.jsx)(P,{handleFilter:function(e){w(Object(b.a)({},e)),C(1)}}),Object(r.jsx)(_,{currentPage:g,setCurrentPage:C,pagesAmount:p}),Object(r.jsx)(N,{currentPage:g,pagesAmount:p,setCurrentPage:C}),l>0&&Object(r.jsxs)("table",{className:"Locations__table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"\u2116"}),Object(r.jsx)("td",{children:"Name"}),Object(r.jsx)("td",{children:"Type"}),Object(r.jsx)("td",{children:"Dimension"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[e.id,"."]}),Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.type}),Object(r.jsx)("td",{children:e.dimension})]},e.id)}))})]})]})},w=c(24),D=(c(50),c(51),function(e){var t=e.movie,c=e.index,n=e.toggleMovie,a=e.removeMovie;return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[c+1,"."]}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"checkbox",checked:t.completed,onChange:function(){return n(t.id)}})}),Object(r.jsx)("td",{children:t.title}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{className:"WatchItem__button",onClick:function(){return a(t.id)},children:"Delete"})})]},t.id)}),F=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(h.a)(s,2),l=i[0],j=i[1];Object(n.useEffect)((function(){var e=localStorage.getItem("movies")||"[]";a(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("movies",JSON.stringify(c))}),[c]);var o=function(e){a(c.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},b=function(e){a(c.filter((function(t){return t.id!==e})))};return Object(r.jsxs)("div",{className:"WatchList",children:[Object(r.jsx)("h1",{className:"WatchList__title",children:"My watch list"}),Object(r.jsxs)("form",{className:"WatchList__form",action:"",onSubmit:function(e){e.preventDefault(),l.trim()&&(a([].concat(Object(w.a)(c),[{id:Date.now(),title:l.trim(),completed:!1}])),j(""))},children:[Object(r.jsx)("input",{className:"WatchList__input",placeholder:"Episide",autoComplete:"off",type:"text",value:l,onChange:function(e){return j(e.target.value)}}),Object(r.jsx)("button",{type:"submit",className:"WatchList__button",children:"Add"})]}),Object(r.jsxs)("table",{className:"WatchList__table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"WatchList__first-row",children:[Object(r.jsx)("td",{children:"\u2116"}),Object(r.jsx)("td",{children:"Watched"}),Object(r.jsx)("td",{children:"Title"}),Object(r.jsx)("td",{children:"Delete"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e,t){return Object(r.jsx)(D,{index:t,movie:e,title:l,toggleMovie:o,removeMovie:b},e.id)}))})]})]})},A=function(){return Object(r.jsx)("main",{className:"Main",children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/episodes",children:Object(r.jsx)(k,{})}),Object(r.jsx)(o.a,{exact:!0,path:"/locations",children:Object(r.jsx)(S,{})}),Object(r.jsx)(o.a,{exact:!0,path:"/my_list",children:Object(r.jsx)(F,{})}),Object(r.jsx)(o.a,{path:"/",children:Object(r.jsx)(C,{})})]})})};var L=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{}),Object(r.jsx)(A,{})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};s.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),M()}},[[52,1,2]]]);
//# sourceMappingURL=main.387ffbcb.chunk.js.map