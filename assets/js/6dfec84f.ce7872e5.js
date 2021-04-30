(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return O})),n.d(t,"toc",(function(){return j})),n.d(t,"default",(function(){return y}));var a=n(3),i=n(7),r=n(0),o=n.n(r),s=n(223),l=n(224),u=n(225),c=n(236),b=n(229),d=n(135),m=n.n(d);var p=37,f=39;var v=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,i=e.values,s=e.groupId,l=e.className,u=Object(c.a)(),d=u.tabGroupChoices,v=u.setTabGroupChoices,g=Object(r.useState)(a),h=g[0],O=g[1],j=r.Children.toArray(e.children),I=[];if(null!=s){var y=d[s];null!=y&&y!==h&&i.some((function(e){return e.value===y}))&&O(y)}var w=function(e){var t=e.currentTarget,n=I.indexOf(t),a=i[n].value;O(a),null!=s&&(v(s,a),setTimeout((function(){var e,n,a,i,r,o,s,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,s=o.innerHeight,l=o.innerWidth,n>=0&&r<=l&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m.a.tabItemActive),setTimeout((function(){return t.classList.remove(m.a.tabItemActive)}),2e3))}),150))},B=function(e){var t,n;switch(e.keyCode){case f:var a=I.indexOf(e.target)+1;n=I[a]||I[0];break;case p:var i=I.indexOf(e.target)-1;n=I[i]||I[I.length-1]}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},l)},i.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(b.a)("tabs__item",m.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:B,onFocus:w,onClick:w},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))};var g=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},h={id:"intro",title:"What is BI Hub",sidebar_label:"Introduction",slug:"/"},O={unversionedId:"getting-started/intro",id:"getting-started/intro",isDocsHomePage:!1,title:"What is BI Hub",description:"BI Hub is a web-based Visual BI product.",source:"@site/docs/getting-started/intro.md",sourceDirName:"getting-started",slug:"/",permalink:"/docs/",version:"current",sidebar_label:"Introduction",frontMatter:{id:"intro",title:"What is BI Hub",sidebar_label:"Introduction",slug:"/"},sidebar:"sideBar"},j=[],I={toc:j};function y(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},I,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"BI Hub is a web-based Visual BI product."),Object(s.b)("p",null,"BI Hub enables users to view and analyze reports built-in various BI platforms in one page, without having to login into those platforms individually."),Object(s.b)("p",null,"Highlights of this product includes but not limited to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Smart view and Discovery of BI assets")," - Discover not accessible assets and request access")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Unified view of BI assets")," \u2013 A consolidated view of reports from multiple BI platforms in one page.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Incredibly easy setup and maintenance")," \u2013 Easy to setup and 100% automated synchronization between BI Hub and BI platforms."))),Object(s.b)("p",null,"BI Hub consists of ",Object(s.b)("strong",{parentName:"p"},"BI Hub Server, BI Hub Web, and BI Hub Agents"),"."),Object(s.b)("p",null,"This installation document explains the steps involved in the installation of the three components and the procedure to check the success/failure of the installation process."),Object(s.b)(v,{defaultValue:"Installation Guide",values:[{label:"Installation Guide",value:"Installation Guide"},{label:"Admin Guide",value:"Admin Guide"},{label:"User Guide",value:"User Guide"}],mdxType:"Tabs"},Object(s.b)(g,{value:"Installation Guide",mdxType:"TabItem"},Object(s.b)(u.a,{to:Object(l.a)("docs/installation-guide/welcome"),mdxType:"Link"},"Installation Guide")),Object(s.b)(g,{value:"Admin Guide",mdxType:"TabItem"},Object(s.b)(u.a,{to:Object(l.a)("docs/admin-guide/getting-started/welcome"),mdxType:"Link"},"Admin Guide")),Object(s.b)(g,{value:"User Guide",mdxType:"TabItem"},Object(s.b)(u.a,{to:Object(l.a)("docs/user-guide/onboard"),mdxType:"Link"},"User Guide"))))}y.isMDXComponent=!0},229:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},236:function(e,t,n){"use strict";var a=n(0),i=n(237);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},237:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i}}]);