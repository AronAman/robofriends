(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),s=r(3),a=r.n(s),o=(r(13),r(4)),i=r(5),h=r(7),b=r(6);var l=function(e){var t=e.name,r=e.email;return e.id,Object(n.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(n.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:""}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:t}),Object(n.jsx)("p",{children:r})]})]})};var d=function(e){var t=e.robots;return Object(n.jsx)("div",{children:t.map((function(e,t){return Object(n.jsx)(l,{id:e.id,name:e.name,email:e.email},t)}))})};var u=function(e){var t=e.searchChange;return Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"search",placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t})})};var j=function(e){return Object(n.jsx)("div",{style:{overflowY:"auto",border:"1px solid black",height:"900px"},children:e.children})},v=(r(14),r.p,function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).searchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,r=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())||e.email.toLowerCase().includes(r.toLowerCase())}));return Object(n.jsxs)("div",{className:"tc",children:[Object(n.jsx)("h1",{children:"RoboFriends"}),Object(n.jsx)(u,{searchChange:this.searchChange}),Object(n.jsx)(j,{children:Object(n.jsx)(d,{robots:c})})]})}}]),r}(c.Component));r(15);a.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.746be3a0.chunk.js.map