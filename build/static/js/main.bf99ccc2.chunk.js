(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__5jj78"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3i6uI",Modal:"Modal_Modal__x5nG-"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__10-Bm",ImageGalleryItem:"ImageGallery_ImageGalleryItem__Pw7yw"}},27:function(e,t,a){e.exports={Button:"Button_Button__2A7BY"}},32:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(24),c=a.n(r),l=(a(32),a(15)),i=a(4),s=a(5),u=a(7),h=a(6),m=a(12),d=a.n(m);d.a.defaults.baseURL="https://pixabay.com/api";var p="23140878-cc837524a3fe3a996e92890e9",g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return console.log(e,t),d.a.get("/?q=".concat(e,"&page=").concat(t,"&key=").concat(p,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},b=a(8),f=a.n(b),j=a(0),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={inputValue:""},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state.inputValue),e.props.onSubmit(e.state.inputValue)},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:f.a.Searchbar,children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.SearchForm,children:[Object(j.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(j.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{onChange:this.handleChange,className:f.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Type your query..."})]})})}}]),a}(n.Component),O=y,S=a(25),v=a.n(S),_=function(){return Object(j.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:Object(j.jsx)(v.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})},x=a(13),I=a.n(x),k=function(e){var t=e.image,a=e.onClick;return Object(j.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(j.jsx)("img",{onClick:function(){return a(t.largeImageURL)},src:t.webformatURL,alt:t.tags,className:I.a.ImageGalleryItemImage})})},w=a(26),C=a.n(w),F=function(e){var t=e.images,a=e.onClick;return Object(j.jsx)("ul",{className:C.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)(k,{image:e,onClick:a},e.id)}))})},M=a(27),B=a.n(M),G=function(e){var t=e.onClick;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:B.a.Button,onClick:t,children:"Load More"})})},N=a(14),V=a.n(N),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).modalKeyDown=function(t){"Escape"===t.key&&e.props.onClose()},e.closeOnClick=function(t){t.target!==t.currentTarget&&e.props.onClose()},e.backdropRef=Object(n.createRef)(),e.modalClick=function(t){var a=e.backdropRef.current;a&&t.target!==a||e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.modalKeyDown)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.modalKeyDown)}},{key:"render",value:function(){var e=this.props.url;return Object(j.jsx)("div",{onClick:this.modalClick,className:V.a.Overlay,ref:this.backdropRef,children:Object(j.jsx)("div",{className:V.a.Modal,onClick:this.closeOnClick,children:Object(j.jsx)("img",{src:e,alt:"img"})})})}}]),a}(n.Component),R=L,E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchValue:"",page:1,images:null,loading:!1,showModal:!1},e.fetch=function(){var t=e.state,a=t.searchValue,n=t.page;return e.setState({loading:!0}),g(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),page:e.page+1}}))})).finally((function(){return e.setState({loading:!1})}))},e.handleSubmit=function(t){e.setState({searchValue:t})},e.scrollWindow=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.loadMore=function(){e.setState({loading:!0}),e.fetch().then((function(){e.scrollWindow()}))},e.openModal=function(t){e.setState({largeImage:t,showModal:!0})},e.onClose=function(){e.setState({showModal:!1})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;if(t.searchValue!==this.state.searchValue)return g(this.state.searchValue,1).then((function(e){a.setState({images:e,page:1})})).catch((function(e){return console.log("Error:",e)}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.showModal;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{onSubmit:this.handleSubmit}),t&&Object(j.jsx)(F,{images:t,onClick:this.openModal}),a&&Object(j.jsx)(_,{}),t&&Object(j.jsx)(G,{onClick:this.loadMore}),n&&Object(j.jsx)(R,{url:this.state.largeImage,onClose:this.onClose})]})}}]),a}(n.Component),D=E;c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3s5SE",SearchForm:"Searchbar_SearchForm__1yd2g",SearchFormButton:"Searchbar_SearchFormButton__2A7PI",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__12ghj",SearchFormInput:"Searchbar_SearchFormInput__1wLWV","SearchForm-input":"Searchbar_SearchForm-input__3Rsab"}}},[[72,1,2]]]);
//# sourceMappingURL=main.bf99ccc2.chunk.js.map