(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(22),s=c.n(a),i=c(11),r=(c(29),c(30),c(31),c(0)),l=function(){return Object(r.jsx)("nav",{className:"Navbar",children:Object(r.jsxs)("ul",{className:"Navbar__list",children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/characters",children:"Characters"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/episodes",children:"Episodes"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/locations",children:"Locations"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{className:"Navbar__link",activeClassName:"Navbar__link--active",to:"/my_list",children:"My watch list"})})]})})},o=function(){return Object(r.jsx)("header",{className:"Header",children:Object(r.jsx)(l,{})})},j=(c(38),c(4)),b=c(2),u=c(8),d=c.n(u),O=c(12),h=c(3),x=c(10),p=c.n(x),m=(c(40),function(){var e=Object(O.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://rickandmortyapi.com/api/").concat(t),{mode:"cors"});case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=(c(41),function(e){var t=e.handleFilter,c=Object(n.useState)({status:"",species:"",gender:""}),a=Object(h.a)(c,2),s=a[0],i=a[1];return Object(r.jsxs)("form",{className:"CharactersFilter",children:[Object(r.jsxs)("select",{className:"CharactersFilter__select",value:s.status,name:"status",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{status:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{status:e.target.value}))},children:[Object(r.jsx)("option",{value:"",children:"All"}),Object(r.jsx)("option",{value:"Dead",children:"Dead"}),Object(r.jsx)("option",{value:"Alive",children:"Alive"}),Object(r.jsx)("option",{value:"unknown",children:"Unknown"})]}),Object(r.jsxs)("select",{className:"CharactersFilter__select",value:s.gender,name:"gender",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{gender:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{gender:e.target.value}))},children:[Object(r.jsx)("option",{value:"",children:"All"}),Object(r.jsx)("option",{value:"Male",children:"Male"}),Object(r.jsx)("option",{value:"Female",children:"Female"}),Object(r.jsx)("option",{value:"Genderless",children:"Genderless"}),Object(r.jsx)("option",{value:"unknown",children:"Unknown"})]}),Object(r.jsxs)("select",{className:"CharactersFilter__select",value:s.species,name:"species",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{species:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{species:e.target.value}))},children:[Object(r.jsx)("option",{value:"",children:"All"}),Object(r.jsx)("option",{value:"Human",children:"Human"}),Object(r.jsx)("option",{value:"Alien",children:"Alien"}),Object(r.jsx)("option",{value:"Animal",children:"Animal"}),Object(r.jsx)("option",{value:"Disease",children:"Disease"}),Object(r.jsx)("option",{value:"Cronenberg",children:"Cronenberg"}),Object(r.jsx)("option",{value:"Robot",children:"Robot"}),Object(r.jsx)("option",{value:"Humanoid",children:"Humanoid"}),Object(r.jsx)("option",{value:"Poopybutthole",children:"Poopybutthole"}),Object(r.jsx)("option",{value:"unknown",children:"Unknown"})]})]})}),f=(c(42),function(e){var t=e.id,c=e.name,n=e.status,a=e.species,s=e.gender,i=e.image,l=e.showMore;return Object(r.jsxs)("div",{onClick:function(){return l(e)},className:p()("Character",{"Character--alive":"Alive"===n,"Character--dead":"Dead"===n,"Character--unknown":"unknown"===n}),children:[Object(r.jsx)("div",{className:"Character__picture",children:Object(r.jsx)("img",{className:"Character__image",src:i,alt:c})}),Object(r.jsxs)("div",{className:"Character__info",children:[Object(r.jsx)("span",{className:"Character__index",children:t}),Object(r.jsxs)("p",{className:"Character__name",children:["Name: ",c]}),Object(r.jsxs)("p",{className:"Character__speacies",children:["Species: ",a]}),Object(r.jsxs)("p",{className:"Character__gender",children:["Gender: ",s]})]})]})}),g=(c(43),function(e){var t=e.image,c=e.name,n=e.species,a=e.gender,s=e.status,i=e.location,l=e.origin,o=e.modalReset;return Object(r.jsxs)("div",{className:"ModalCharacter",children:[Object(r.jsx)("button",{className:"ModalCharacter__close",type:"button",onClick:o,children:"x"}),Object(r.jsx)("div",{className:"ModalCharacter__picture",children:Object(r.jsx)("img",{className:"ModalCharacter__image",src:t,alt:c})}),Object(r.jsxs)("ul",{className:"ModalCharacter__list",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Name: "}),c]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Species: "}),n]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Gender: "}),a]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Status: "}),s]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Origin: "}),l.name]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Location: "}),i.name]})]})]})}),_=(c(44),function(e){var t=e.currentPage,c=e.setCurrentPage,n=e.pagesAmount;return Object(r.jsxs)("div",{className:"Pagination",children:[t>1&&Object(r.jsx)("button",{type:"button",className:"Pagination__page-button",onClick:function(){c(1)},children:"1"}),t>3&&"...",t>2&&Object(r.jsx)("button",{type:"button",className:"Pagination__page-button",onClick:function(){c(t-1)},children:t-1}),Object(r.jsx)("button",{disabled:!0,type:"button",className:"Pagination__page-button Pagination__page-button--active",children:t}),t<n-1&&Object(r.jsx)("button",{type:"button",className:"Pagination__page-button",onClick:function(){c(t+1)},children:t+1}),t<n-2&&"...",t<n&&Object(r.jsx)("button",{type:"button",className:"Pagination__page-button",onClick:function(){c(n)},children:n})]})}),N=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(h.a)(s,2),l=i[0],o=i[1],j=Object(n.useState)(0),u=Object(h.a)(j,2),x=u[0],N=u[1],C=Object(n.useState)(1),y=Object(h.a)(C,2),k=y[0],S=y[1],w=Object(n.useState)(null),D=Object(h.a)(w,2),P=D[0],F=D[1],L=Object(n.useState)({status:"",species:"",gender:""}),A=Object(h.a)(L,2),E=A[0],M=A[1],W=E.status,R=E.species,T=E.gender;Object(n.useEffect)(Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("character/?page=".concat(k,"&status=").concat(W,"&gender=").concat(T,"&species=").concat(R));case 2:if(!(t=e.sent).error){e.next=9;break}return a(t.results),o(0),N(0),console.log(t.error),e.abrupt("return");case 9:o(t.info.count),N(t.info.pages),a(t.results);case 12:case"end":return e.stop()}}),e)}))),[k,E]);var H=function(e){var t=Object.assign({},e);F(t)},I=function(){F(null)};return console.log(E),Object(r.jsxs)("div",{className:"Characters",children:[Object(r.jsx)("h1",{className:"Characters__title",children:"Characters"}),Object(r.jsxs)("div",{className:"Characters__info",children:[Object(r.jsxs)("p",{children:["Found characters: ",l||"0"]}),Object(r.jsxs)("p",{children:["Pages: ",x||"0"]})]}),Object(r.jsx)(v,{handleFilter:function(e){M(Object(b.a)({},e)),S(1)}}),Object(r.jsx)(_,{currentPage:k,setCurrentPage:S,pagesAmount:x}),Object(r.jsxs)("div",{className:"Characters__nav",children:[Object(r.jsx)("button",{type:"button",className:p()("Characters__nav-toggler",{"Characters__nav-toggler--disabled":k<2}),onClick:function(e){e.preventDefault(),I(),S((function(e){return e-1}))},children:"back"}),Object(r.jsx)("button",{type:"button",className:p()("Characters__nav-toggler",{"Characters__nav-toggler--disabled":x<=k}),onClick:function(e){e.preventDefault(),I(),S((function(e){return e+1}))},children:"forward"})]}),c&&Object(r.jsx)("div",{className:"Characters__list",children:c.map((function(e){return Object(r.jsx)(f,Object(b.a)({showMore:H},e),e.id)}))}),P&&Object(r.jsx)(g,Object(b.a)(Object(b.a)({},P),{},{modalReset:I}))]})},C=(c(45),c(46),function(e){var t=e.handleSearch,c=e.setCurrentPage,a=Object(n.useState)(""),s=Object(h.a)(a,2),i=s[0],l=s[1];return Object(r.jsx)("input",{className:"EpisodesFilter",type:"text",value:i,autoComplete:"off",placeholder:"Episode title",onChange:function(e){c(1),l(e.target.value),t(e.target.value)}})}),y=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(h.a)(s,2),l=i[0],o=i[1],j=Object(n.useState)(0),b=Object(h.a)(j,2),u=b[0],x=b[1],v=Object(n.useState)(1),f=Object(h.a)(v,2),g=f[0],N=f[1],y=Object(n.useState)(""),k=Object(h.a)(y,2),S=k[0],w=k[1];Object(n.useEffect)(Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("episode?page=".concat(g,"&name=").concat(S));case 2:if(!(t=e.sent).error){e.next=5;break}return e.abrupt("return");case 5:console.log(t),o(t.info.count),x(t.info.pages),a(t.results);case 9:case"end":return e.stop()}}),e)}))),[g,S]);return Object(r.jsxs)("div",{className:"Episodes",children:[Object(r.jsx)("h1",{className:"Episodes__title",children:"Episodes"}),Object(r.jsxs)("div",{className:"Episodes__info",children:[Object(r.jsxs)("p",{children:["Found series: ",l||"0"]}),Object(r.jsxs)("p",{children:["Pages: ",u||"0"]})]}),Object(r.jsx)(C,{handleSearch:function(e){w(e)},setCurrentPage:N}),Object(r.jsx)(_,{currentPage:g,setCurrentPage:N,pagesAmount:u}),Object(r.jsxs)("div",{className:"Episodes__nav",children:[Object(r.jsx)("button",{type:"button",className:p()("Episodes__nav-toggler",{"Episodes__nav-toggler--disabled":g<2}),onClick:function(e){e.preventDefault(),N((function(e){return e-1}))},children:"back"}),Object(r.jsx)("button",{type:"button",className:p()("Episodes__nav-toggler",{"Episodes__nav-toggler--disabled":u<=g}),onClick:function(e){e.preventDefault(),N((function(e){return e+1}))},children:"forward"})]}),Object(r.jsxs)("table",{className:"Episodes__table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"\u2116"}),Object(r.jsx)("td",{children:"Episodes"}),Object(r.jsx)("td",{children:"Title"}),Object(r.jsx)("td",{children:"Air date"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[e.id,"."]}),Object(r.jsx)("td",{children:e.episode}),Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.air_date})]},e.id)}))})]})]})},k=(c(47),c(48),function(e){var t=e.handleFilter,c=Object(n.useState)({name:"",type:"",dimension:""}),a=Object(h.a)(c,2),s=a[0],i=a[1];return Object(r.jsxs)("form",{className:"LocationsFilter",children:[Object(r.jsx)("input",{className:"LocationsFilter__field",type:"text",value:s.name,name:"name",placeholder:"Location",autoComplete:"off",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{name:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{name:e.target.value}))}}),Object(r.jsxs)("select",{className:"LocationsFilter__field",value:s.type,name:"gender",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{type:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{type:e.target.value}))},children:[Object(r.jsx)("option",{value:"",children:"All"}),Object(r.jsx)("option",{value:"Planet",children:"Planet"}),Object(r.jsx)("option",{value:"Cluster",children:"Cluster"}),Object(r.jsx)("option",{value:"Space station",children:"Space station"}),Object(r.jsx)("option",{value:"Microverse",children:"Microverse"}),Object(r.jsx)("option",{value:"Resort",children:"Resort"}),Object(r.jsx)("option",{value:"Fantasy town",children:"Fantasy town"}),Object(r.jsx)("option",{value:"Space station",children:"Space station"}),Object(r.jsx)("option",{value:"TV",children:"TV"}),Object(r.jsx)("option",{value:"Dream",children:"Dream"})]}),Object(r.jsxs)("select",{className:"LocationsFilter__field",value:s.dimension,name:"species",onChange:function(e){i(Object(b.a)(Object(b.a)({},s),{},{dimension:e.target.value})),t(Object(b.a)(Object(b.a)({},s),{},{dimension:e.target.value}))},children:[Object(r.jsx)("option",{value:"",children:"All"}),Object(r.jsx)("option",{value:"Dimension C-137",children:"Dimension C-137"}),Object(r.jsx)("option",{value:"unknown",children:"unknown"}),Object(r.jsx)("option",{value:"Replacement Dimension",children:"Replacement Dimension"}),Object(r.jsx)("option",{value:"Cronenberg Dimension",children:"Cronenberg Dimension"}),Object(r.jsx)("option",{value:"Fantasy Dimension",children:"Fantasy Dimension"}),Object(r.jsx)("option",{value:"Dimension 5-126",children:"Dimension 5-126"}),Object(r.jsx)("option",{value:"Post-Apocalyptic Dimension",children:"Post-Apocalyptic Dimension"})]})]})}),S=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(h.a)(s,2),l=i[0],o=i[1],j=Object(n.useState)(0),u=Object(h.a)(j,2),x=u[0],v=u[1],f=Object(n.useState)(1),g=Object(h.a)(f,2),N=g[0],C=g[1],y=Object(n.useState)({name:"",type:"",dimension:""}),S=Object(h.a)(y,2),w=S[0],D=S[1],P=w.name,F=w.type,L=w.dimension;Object(n.useEffect)(Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("location?page=".concat(N,"&name=").concat(P,"&type=").concat(F,"&dimension=").concat(L));case 2:if(!(t=e.sent).error){e.next=8;break}return o(0),v(0),console.log(t.error),e.abrupt("return");case 8:console.log(t),o(t.info.count),v(t.info.pages),a(t.results);case 12:case"end":return e.stop()}}),e)}))),[N,w]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"Locations__title",children:"Locations"}),Object(r.jsxs)("div",{className:"Locations__info",children:[Object(r.jsxs)("p",{children:["Found characters: ",l||"0"]}),Object(r.jsxs)("p",{children:["Pages: ",x||"0"]})]}),Object(r.jsx)(k,{handleFilter:function(e){D(Object(b.a)({},e)),C(1)}}),Object(r.jsx)(_,{currentPage:N,setCurrentPage:C,pagesAmount:x}),l>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"Locations__nav",children:[Object(r.jsx)("button",{type:"button",className:p()("Locations__nav-toggler",{"Locations__nav-toggler--disabled":N<2}),onClick:function(e){e.preventDefault(),C((function(e){return e-1}))},children:"back"}),Object(r.jsx)("button",{type:"button",className:p()("Locations__nav-toggler",{"Locations__nav-toggler--disabled":x<=N}),onClick:function(e){e.preventDefault(),C((function(e){return e+1}))},children:"forward"})]}),Object(r.jsxs)("table",{className:"Locations__table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"\u2116"}),Object(r.jsx)("td",{children:"Name"}),Object(r.jsx)("td",{children:"Type"}),Object(r.jsx)("td",{children:"Dimension"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[e.id,"."]}),Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.type}),Object(r.jsx)("td",{children:e.dimension})]},e.id)}))})]})]})]})},w=c(24),D=(c(49),c(50),function(e){var t=e.movie,c=e.index,n=e.toggleMovie,a=e.removeMovie;return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[c+1,"."]}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"checkbox",checked:t.completed,onChange:function(){return n(t.id)}})}),Object(r.jsx)("td",{children:t.title}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{className:"WatchItem__button",onClick:function(){return a(t.id)},children:"Delete"})})]},t.id)}),P=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(h.a)(s,2),l=i[0],o=i[1];Object(n.useEffect)((function(){var e=localStorage.getItem("movies")||[];a(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("movies",JSON.stringify(c))}),[c]);var j=function(e){a(c.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},b=function(e){a(c.filter((function(t){return t.id!==e})))};return Object(r.jsxs)("div",{className:"WatchList",children:[Object(r.jsx)("h1",{className:"WatchList__title",children:"My watch list"}),Object(r.jsxs)("form",{className:"WatchList__form",action:"",onSubmit:function(e){e.preventDefault(),l&&(a([].concat(Object(w.a)(c),[{id:Date.now(),title:l,completed:!1}])),o(""))},children:[Object(r.jsx)("input",{className:"WatchList__input",placeholder:"Episide",autoComplete:"off",type:"text",value:l,onChange:function(e){return o(e.target.value)}}),Object(r.jsx)("button",{type:"submit",className:"WatchList__button",children:"Add"})]}),Object(r.jsxs)("table",{className:"WatchList__table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"WatchList__first-row",children:[Object(r.jsx)("td",{children:"\u2116"}),Object(r.jsx)("td",{children:"Watched"}),Object(r.jsx)("td",{children:"Title"}),Object(r.jsx)("td",{children:"Delete"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e,t){return Object(r.jsx)(D,{index:t,movie:e,title:l,toggleMovie:j,removeMovie:b},e.id)}))})]})]})},F=function(){return Object(r.jsx)("main",{className:"Main",children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/episodes",children:Object(r.jsx)(y,{})}),Object(r.jsx)(j.a,{exact:!0,path:"/locations",children:Object(r.jsx)(S,{})}),Object(r.jsx)(j.a,{exact:!0,path:"/my_list",children:Object(r.jsx)(P,{})}),Object(r.jsx)(j.a,{path:"/",children:Object(r.jsx)(N,{})})]})})};var L=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(F,{})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};s.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),A()}},[[51,1,2]]]);
//# sourceMappingURL=main.31c9b641.chunk.js.map