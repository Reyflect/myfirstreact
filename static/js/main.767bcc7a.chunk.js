(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(15),a=n.n(s),o=(n(25),n.p+"static/media/logo.6ce24c58.svg"),i=(n(26),n(0)),j=function(){return Object(i.jsx)("p",{children:"This is a props children "})};var l=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{children:["Hello ",e.name," ","aka "+e.heroname]}),e.children]})},u=n(16),b=n(17),d=n(20),h=n(19),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).addCount=function(){e.setState({count:e.state.count+1})},e.resetCount=function(){e.setState({count:0})},e.state={count:0},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:this.addCount,children:"Click Me!"}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:this.resetCount,children:"Reset!"}),Object(i.jsxs)("p",{children:["counting = ",this.state.count]})]})}}]),n}(r.a.Component),p=n(5),f=n(18),x=n.n(f).a.create({baseURL:"http://localhost:8080/api/v1/greet",headers:{"Content-Type":"application/json"}}),m=function(){return x.get("/hello")},g=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){m().then((function(e){r(e.data)}))})),n};var v=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(i.jsxs)("p",{children:["Hello World! ",Object(i.jsx)("br",{}),"Edit ",Object(i.jsx)("code",{children:"src/App.js"})," and save to reload. ",Object(i.jsx)("br",{}),"Edit wow",Object(i.jsx)("br",{})]}),Object(i.jsx)(O,{}),Object(i.jsx)(l,{name:"Rey",heroname:"Reyflector",children:Object(i.jsx)(j,{})}),Object(i.jsx)(l,{name:g(),heroname:"testaman"}),Object(i.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.767bcc7a.chunk.js.map