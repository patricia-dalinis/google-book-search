(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(63)},39:function(e,t,n){},40:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(31),r=n.n(i),l=(n(39),n(7)),c=n(8),s=n(10),u=n(9),h=n(11),d=(n(40),n(41),n(13)),p=n(12),m=n(4);var k=function(e){return o.a.createElement("div",{id:"searchContainer"},o.a.createElement("h3",null,"Seek and Find"),o.a.createElement("form",{id:"bookSearch"},o.a.createElement("label",{htmlFor:"bookInput",form:"bookSearch"},"Enter a book to search:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"bookInput",id:"bookInput",form:"bookSearch",onChange:function(t){return e.handleChange(t)},placeholder:"Book Title",required:!0}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",onClick:function(t){return e.handleSearchClick(t)}},"Search")))},b=n(16),v=n.n(b),f={getBooks:function(){return v.a.get("/api/books")},searchBooks:function(e){return v.a.post("/search",{title:e})},addBookToDB:function(e){return v.a.post("/api/books",e)},deleteBook:function(e){return v.a.delete("/api/books/".concat(e))}},g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSaveClick=function(e){this.setState({saved:!0});var t={title:this.props.title,authors:this.props.authors,link:this.props.link,img:this.props.img,description:this.props.description};e.preventDefault(),f.addBookToDB(t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},n.state={saved:!1,deleted:!1},n.handleSaveClick=n.handleSaveClick.bind(Object(m.a)(Object(m.a)(n))),n.handleDeleteClick=n.handleDeleteClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleDeleteClick",value:function(e){var t=this;this.setState({deleted:!0}),e.preventDefault(),f.deleteBook(this.props.id).then(function(e){console.log(e),d.a.dispatch(t.props.location,null)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Results",id:this.props.id?this.props.id:null,style:{display:this.state.deleted?"none":"block"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"aboutBook"},o.a.createElement("h4",null,this.props.title),o.a.createElement("p",null,"By: ",this.props.authors?this.props.authors.join(", "):"N/A")),o.a.createElement("div",{className:"btnDiv"},this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{type:"button",name:"view"},"View")):null,"/"===this.props.path?o.a.createElement("button",{type:"button",name:"save",onClick:this.handleSaveClick,disabled:this.state.saved},this.state.saved?"Saved":"Save"):o.a.createElement("button",{type:"button",name:"Delete",onClick:this.handleDeleteClick,disabled:this.state.deleted},"Delete"))),o.a.createElement("div",{className:"row"},this.props.img?o.a.createElement("img",{src:this.props.img.smallThumbnail?this.props.img.smallThumbnail:this.props.img.thumbnail?this.props.img.thumbnail:"",alt:"book cover"}):null,o.a.createElement("p",null,this.props.description?this.props.description:"N/A")))}}]),t}(o.a.Component);var E=function(e){return"/"===e.path?o.a.createElement("div",{id:"resultsDiv"},o.a.createElement("h3",null,"Take a Gander..."),e.bookInfo.map(function(t){var n=t.volumeInfo;return o.a.createElement(g,{title:n.title,authors:n.authors,description:n.description,link:n.canonicalVolumeLink,img:n.imageLinks,path:e.path,key:t.id})})):"/saved"===e.path?e.savedBooks.length>0?o.a.createElement("div",{id:"resultsDiv"},o.a.createElement("h3",null,"Your Library"),e.savedBooks.map(function(t){return o.a.createElement(g,{title:t.title,authors:t.authors,description:t.description,link:t.link,img:t.img,id:t._id,path:e.path,key:t._id})})):o.a.createElement("div",{id:"resultsDiv"},o.a.createElement("h3",null,"Your Library"),o.a.createElement("p",null,"Nothing but dusty shelves here...")):void 0},C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={bookInput:"",bookInfo:[]},n.handleSearchClick=n.handleSearchClick.bind(Object(m.a)(Object(m.a)(n))),n.handleChange=n.handleChange.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState({bookInput:e.target.value})}},{key:"handleSearchClick",value:function(e){var t=this;e.preventDefault(),f.searchBooks(this.state.bookInput).then(function(e){t.setState({bookInfo:e.data}),t.setState({bookInput:""})})}},{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(k,{handleChange:this.handleChange,handleSearchClick:this.handleSearchClick}),this.state.bookInfo.length>0?o.a.createElement(E,{bookInfo:this.state.bookInfo,path:this.props.match.path}):null)}}]),t}(o.a.Component),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={savedBooks:[]},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.getBooks().then(function(t){e.setState({savedBooks:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.state.savedBooks),o.a.createElement("main",null,o.a.createElement(E,{savedBooks:this.state.savedBooks,path:this.props.match.path}))}}]),t}(o.a.Component);var O=function(){return o.a.createElement("nav",null,o.a.createElement(d.b,{to:"/"},"Search "),o.a.createElement(d.b,{to:"/saved"}," Saved"))},w={backgroundColor:"#33658A",maxWidth:"100%",height:"25%",backgroundSize:"cover",position:"relative"};var y=function(){return o.a.createElement("header",{style:w},o.a.createElement("h1",null,"My Google Library"),o.a.createElement("p",null,"Find and Create Your Own Collection!"))},S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(O,null),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:C}),o.a.createElement(p.a,{path:"/saved",component:j}))))}}]),t}(a.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");B?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):D(e)})}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.4df0dac4.chunk.js.map