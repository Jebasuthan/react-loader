(this["webpackJsonpreact-loader"]=this["webpackJsonpreact-loader"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),s=n(7),c=n.n(s),r=(n(13),n(8)),i=n(2),l=n(3),h=n(5),d=n(4),u=(n(14),n(0)),j=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.loading?Object(u.jsxs)("div",{tabIndex:"0",className:"loader-overlay is-active is-full-page","aria-label":"Loading",style:{backgroundColor:this.props.background,opacity:.5},children:[Object(u.jsx)("div",{className:"loader-background"}),Object(u.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.props.width,height:this.props.height,stroke:this.props.color,children:Object(u.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(u.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[Object(u.jsx)("circle",{strokeOpacity:".25",cx:"18",cy:"18",r:"18"}),Object(u.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(u.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"})})]})})})]}):Object(u.jsx)("div",{})}}]),n}(a.Component);j.defaultProps={color:"#ff0000",background:"#ffffff"};var b=j,f=(n(16),a.Component,n(17),function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={showLoader:!1,height:100,width:100,color:"#ff0000",background:"#ffffff"},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadListItem()}},{key:"loadListItem",value:function(){this.setState({showLoader:!1})}},{key:"onChangeRange",value:function(t){var e=t.target,n=e.name,a=e.value;this.setState(Object(r.a)({},n,"color"===n||"background"===n?a:parseInt(a)))}},{key:"showLoader",value:function(){var t=this;this.setState({showLoader:!0}),setTimeout((function(){t.setState({showLoader:!1})}),3e3)}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{loading:this.state.showLoader,width:this.state.width,height:this.state.height,color:this.state.color,background:this.state.background}),Object(u.jsx)("h2",{children:"React Loader"}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Color "}),Object(u.jsx)("input",{type:"color",name:"color",value:this.state.color,onChange:function(e){return t.onChangeRange(e)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Background color "}),Object(u.jsx)("input",{type:"color",name:"background",value:this.state.background,onChange:function(e){return t.onChangeRange(e)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Width"}),Object(u.jsx)("input",{type:"range",min:"10",step:"5",max:"256",value:this.state.width,name:"width",onChange:function(e){return t.onChangeRange(e)}})," ",Object(u.jsx)("span",{className:"text-value",children:this.state.width})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Height"}),Object(u.jsx)("input",{type:"range",min:"10",step:"5",max:"256",value:this.state.height,name:"height",onChange:function(e){return t.onChangeRange(e)}})," ",Object(u.jsx)("span",{className:"text-value",children:this.state.height})]}),Object(u.jsx)("div",{className:"form-control",children:Object(u.jsx)("button",{type:"button",onClick:function(){return t.showLoader()},children:"Show Loader"})})]})}}]),n}(o.a.Component)),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),o(t),s(t),c(t)}))};c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.16e1e7e0.chunk.js.map