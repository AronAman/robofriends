(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(7),s=n.n(a),o=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),i=n(2),h=n(3),u=n(5),l=n(4);var b=function(e){var t=e.name,n=e.email;return e.id,Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:""}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})};var d=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsx)(b,{id:e.id,name:e.name,email:e.email},t)}))})};var j=function(e){var t=e.searchChange;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"search",placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t})})};var f=function(e){return Object(r.jsx)("div",{style:{overflowY:"auto",border:"1px solid black",height:"900px"},children:e.children})},v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"An error has occured"}):this.props.children}}]),n}(c.Component),O=(n(14),n.p,function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).searchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"RoboFriends"}),Object(r.jsx)(j,{searchChange:this.searchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(v,{children:Object(r.jsx)(d,{robots:c})})})]})}}]),n}(c.Component));n(15);s.a.render(Object(r.jsx)(O,{}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.affa281e.chunk.js.map