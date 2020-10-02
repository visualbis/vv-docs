(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),o=(a(0),a(215)),s=(a(216),{id:"welcome",hide_title:"BI Hub Installation Guide!",sidebar_label:"BI Hub Installation Guide"}),r={unversionedId:"installation-guide/welcome",id:"installation-guide/welcome",isDocsHomePage:!1,title:"welcome",description:"Who Should Read This Guide?",source:"@site/docs/installation-guide/welcome.md",permalink:"/docs/installation-guide/welcome",sidebar_label:"BI Hub Installation Guide",sidebar:"installationGuide",next:{title:"System Requirements",permalink:"/docs/installation-guide/supported-platforms/sys-req"}},l=[{value:"Who Should Read This Guide?",id:"who-should-read-this-guide",children:[]},{value:"What is BI Hub",id:"what-is-bi-hub",children:[]}],c={rightToc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"who-should-read-this-guide"},"Who Should Read This Guide?"),Object(o.b)("p",null,"The Installation Guide for BI Hub application offered by Visual BI is meant for people who will perform the installation of the software."),Object(o.b)("h2",{id:"what-is-bi-hub"},"What is BI Hub"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"BI Hub is a web-based Visual BI application product.")),Object(o.b)("p",null,"BI Hub is a BI Reporting portal with a one-Stop Solution to all your BI content supporting On-prem, Cloud, Self-Service BI and Modern Data Analytics deployment.\nDiscover, Consume, Organize, Collaborate and optimize your BI assets using our Unified BI Platform by ensuring Report Governance."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Key Features")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Easy access"),": Single sign-on BI portal dashboard to all your Analytics Assests in BI Hub."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Report Governance"),": A simplified Report governance to view and authorize the respective users and collaborate the reports with other users."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Smart Search")," - Search reports and dashboards from all your BI systems with a single click. Request access for other reports within one BI portal with the advanced search option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Ensures Security")," - BI Hub imports all the user accounts and their security from each reporting tool."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Compatability")," - BI Hub reports are easily compatible on mobile devices or tablets device with touch-enabled gestures."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Personalization")," - BI Hub dashboard is configurable to match up to your company's theme.")),Object(o.b)("p",null,"BI Hub comprises of 3 components - ",Object(o.b)("strong",{parentName:"p"},"BI Hub Server, BI Hub Web"),", and ",Object(o.b)("strong",{parentName:"p"},"BI Hub Agents"),"."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Follow the sequence of steps explained in this Installation guide for a smooth installation of BI Hub."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Every installation step also carry out the success/failure checks of the installation process."))))}b.isMDXComponent=!0}}]);