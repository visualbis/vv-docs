(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return r}));var i=n(2),o=n(6),a=(n(0),n(215)),l=(n(216),{id:"install",title:"Installation of BI Hub Web",sidebar_label:"Installation of BI Hub Web"}),s={unversionedId:"installation-guide/install-bihub-windows/web/install",id:"installation-guide/install-bihub-windows/web/install",isDocsHomePage:!1,title:"Installation of BI Hub Web",description:"Follow the steps below to install and configure the BI Hub Web.",source:"@site/docs/installation-guide/install-bihub-windows/web/install.md",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/web/install",sidebar_label:"Installation of BI Hub Web",sidebar:"installationGuide",previous:{title:"Troubleshooting Steps",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/server/troubleshooting"},next:{title:"BI Hub Web Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/web/config"}},b=[],c={rightToc:b};function r(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Follow the steps below to install and configure the BI Hub Web."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Kindly make sure whether you have installed BI Hub Server and configured at least one instance of BI Hub Server in running state."))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Double Click on the BIHubWeb-X.X.X-windows-installer.exe file to start the installation process."),Object(a.b)("li",{parentName:"ol"},"Click Next in the startup page."),Object(a.b)("li",{parentName:"ol"},"Read through the license terms and conditions. To proceed further accept the license terms and click next to continue."),Object(a.b)("li",{parentName:"ol"},"In the next screen provide the DNS resolvable URL and port details of BI Hub Server instance.This URL should be accessed by the Users (i.e., External URL of the BI Hub Server)."),Object(a.b)("li",{parentName:"ol"},"In the next Component Selection screen, select BI Hub Web with NGINX if you prefer the bundled NGINX webserver. If you have your own webserver then select BI Hub Web without NGINX component. You cannot select both the components."),Object(a.b)("li",{parentName:"ol"},"In the Directory Selection screen, choose the directory to install BI Hub Server. The default directory is ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Visual BI Solutions\\BI Hub\\VBIViewWeb"),". If you have chosen BI Hub Web without NGINX version, then kindly make sure that you choose the web root directory of your webserver. For example in Apache the directory should be ",Object(a.b)("inlineCode",{parentName:"li"},"<Apache installation directory>/htdocs"),". In Nginx the directory should be ",Object(a.b)("inlineCode",{parentName:"li"},"<Nginx Installation directory>/html")),Object(a.b)("li",{parentName:"ol"},"If you have chosen bundled NGINX webserver to be installed,you will be shown a NGINX port details screen. Accept the default port or else provide your own port details."),Object(a.b)("li",{parentName:"ol"},"The next screen provides details of installation. Clicking next button will start to install the BI Hub Web with all the selected components."),Object(a.b)("li",{parentName:"ol"},"Kindly wait for the installation to finish. After successful installation, the final screen provides options to Open Readme file")),Object(a.b)("p",null,"You have successfully installed and configured the BI Hub Web in your server."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"As of now, BI Hub Web has been configured with basic default configuration. If you want to do advanced configuration, kindly follow the next section of the document."))))}r.isMDXComponent=!0}}]);