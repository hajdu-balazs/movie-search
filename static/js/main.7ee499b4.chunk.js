(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),i=c.n(s),r=(c(10),c(5)),o=c(3),l=(c(11),c(12),c(0)),j=function(e){var t=e.title,c=e.poster_path,a=e.overview,n=e.release_date,s=e.vote_average;return Object(l.jsx)("div",{className:"movie flip-box",children:Object(l.jsxs)("div",{className:"flip-box-inner",children:[Object(l.jsx)("div",{className:"flip-box-front",children:Object(l.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w1280"+c:"https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg",alt:t})}),Object(l.jsxs)("div",{className:"flip-box-back",children:[Object(l.jsx)("span",{className:"vote_average",children:s}),Object(l.jsx)("h2",{children:"Overview:"}),Object(l.jsx)("p",{children:a}),Object(l.jsxs)("p",{className:"release_date",children:["Release date: ",n]})]})]})})},h="https://api.themoviedb.org/3/search/movie?&api_key=".concat("8dfdfd76c21d4d0227af54af4f2a59b7","&query=");var b=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),b=i[0],d=i[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{className:"header-h1",children:"Movie Search"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch(h+b).then((function(e){return e.json()})).then((function(e){n(e.results)}))},children:[Object(l.jsx)("input",{className:"search",type:"text",placeholder:"Search..",onChange:function(e){d(e.target.value)},value:b,required:!0}),Object(l.jsx)("input",{className:"submit",type:"submit",value:"Search"})]})]}),Object(l.jsx)("div",{className:"movie-container",children:c.map((function(e){return Object(l.jsx)(j,Object(r.a)({},e),e.id)}))})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),d()}],[[14,1,2]]]);
//# sourceMappingURL=main.7ee499b4.chunk.js.map