(this["webpackJsonpburguessafado-app"]=this["webpackJsonpburguessafado-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(73)},38:function(e,t,a){},40:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),s=(a(38),a(3)),l=(a(39),a(40),a(26)),i=a.n(l),m=function(e){return i.a.get(e,{headers:{"secret-key":"$2b$10$kAOQB3Xlwn3iY08.nYZfcO3E2lMbELVxXx2lxpTvVeP4KKZCEI7oq"}})},u=function(e){var t=e.person,a=t.name,n=(t.photo,t.description);return r.a.createElement("div",null,r.a.createElement("p",{className:"lead text-muted"},"Name: ",a),r.a.createElement("p",{className:"lead text-muted"},n))},d=a(27),b=a.n(d),p=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),f=function(e){var t=e.url;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:t,className:"card-img-top",alt:"Burger"}),r.a.createElement("p",{className:"card-text"}),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},"Comprar"),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},"Vender"))))))};var h=function(e){e.person;var t=e.list,a=e.onChangePerson,c=t.length,o=Object(n.useState)(1),l=Object(s.a)(o,2),i=l[0],m=l[1];return r.a.createElement(b.a,{infiniteLoop:!0,gutter:12,activePosition:"center",chevronWidth:30,disableSwipe:!1,alwaysShowChevrons:!1,numberOfCards:4,slidesToScroll:1,outsideChevron:!0,showSlither:!1,firstAndLastGutter:!1,activeItemIndex:i,requestToChangeActive:function(e){var n=e>=c?0:e;console.log(n),console.log(c),m(n),a(t.find((function(e,t){return t===n})))},rightChevron:">",leftChevron:"<"},t.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("img",{key:t,className:"App-imgBilionariosPerfil",alt:e.name,src:e.photo,onClick:function(){return a(e)}}))})))},v=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(s.a)(o,2),i=l[0],d=l[1],b=Object(n.useState)({}),v=Object(s.a)(b,2),E=v[0],g=v[1],N=Object(n.useState)(0),j=Object(s.a)(N,2),O=j[0],w=j[1],y=Object(n.useState)([]),x=Object(s.a)(y,2),C=x[0],S=x[1];Object(n.useEffect)((function(){m("https://api.jsonbin.io/b/5dcb25a3f05d9041253a89c0/latest").then((function(e){var t=e.data,a=Object(s.a)(t,1)[0];d(t),k(a),c(!1)})).catch((function(e){return console.error(e)}))}),[]),Object(n.useEffect)((function(){m("https://api.jsonbin.io/b/5dcae832c1f85104e53cd9e7/latest").then((function(e){var t=e.data;S(t)})).catch((function(e){return console.error(e)}))}),[]);var k=function(e){g(e),w(e.fortune)};return a?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement("main",{role:"main"},r.a.createElement("section",{className:"text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"jumbotron-heading"},"Bilion\xe1rios"),r.a.createElement("div",{style:{padding:"0 60px",maxWidth:800,margin:"0 auto"}},r.a.createElement(h,{person:E,list:i,onChangePerson:k})),r.a.createElement(u,{person:E}))),r.a.createElement("div",{className:"alert alert-success",role:"alert"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return p.format(e)}(O)),r.a.createElement("div",{className:"album py-5 bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},C.map((function(e){return r.a.createElement(f,{url:e.photo})})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.605cc3f7.chunk.js.map