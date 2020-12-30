(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return u}));var n,i=a(3),o=a(7),r=(a(0),a(209)),c=a(210),b=a(211),s={id:"upgrade-bihub",title:"Upgrade Of BI Hub",sidebar_label:"Upgrade of BI Hub"},d={unversionedId:"installation-guide/upgrade/upgrade-bihub",id:"installation-guide/upgrade/upgrade-bihub",isDocsHomePage:!1,title:"Upgrade Of BI Hub",description:"The user can upgrade the trial version to either the production version or extend the trial period.",source:"@site/docs/installation-guide/upgrade/upgrade-bihub.md",slug:"/installation-guide/upgrade/upgrade-bihub",permalink:"/docs/installation-guide/upgrade/upgrade-bihub",version:"current",sidebar_label:"Upgrade of BI Hub",sidebar:"installationGuide",previous:{title:"Server Restart Checklist",permalink:"/docs/installation-guide/advanced/server-restart-checklist"},next:{title:"Move BI Hub instance from one server to another",permalink:"/docs/installation-guide/move-instance/move-instance"}},p=[{value:"Upgrade from the previous version to the new version",id:"upgrade-from-the-previous-version-to-the-new-version",children:[]},{value:"Upgrade from trial to production",id:"upgrade-from-trial-to-production",children:[]}],l=(n="Zoom",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),m={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The user can upgrade the trial version to either the production version or extend the trial period."),Object(r.b)("h2",{id:"upgrade-from-the-previous-version-to-the-new-version"},"Upgrade from the previous version to the new version"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)(b.a,{to:Object(c.a)("docs/installation-guide/download-bihub"),mdxType:"Link"},"Download")," the latest versions of BI Hub Web, BI Hub Server, and BI Hub agents."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Double click on the ",Object(r.b)("inlineCode",{parentName:"p"},"<desired agent name>Agent-X.X.X-windows-installer.exe")," file to start the upgrade process.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The installer pops up with a ",Object(r.b)("em",{parentName:"p"},"Setup")," screen with the message that indicates that a previous version is already running. If you wish to proceed, click ",Object(r.b)("strong",{parentName:"p"},"Next"),"."),Object(r.b)("div",null,Object(r.b)(l,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Upgrade BI Hub setup screen",src:Object(c.a)("/doc-images/installation-guide/upgrade-confirm.png")}))),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("em",{parentName:"p"},"Confirm to upgrade BI Hub version"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Read through the license agreement and accept the terms before proceeding with the upgrade.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On the next screen click ",Object(r.b)("strong",{parentName:"p"},"Next")," to confirm the upgrade from the current version to the new version.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A successful upgrade screen provides options to open the Readme file."))),Object(r.b)("p",null,"Similar steps need to be followed for all other agents and BI Hub Web. For BI Hub Server however, we have a couple of extra steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"We need to stop the backend instances before upgrading.",Object(r.b)("div",null,Object(r.b)(l,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Stop backend instances",src:Object(c.a)("/doc-images/installation-guide/stop-backend-instance.png")}))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Next"),". Go to the ",Object(r.b)("strong",{parentName:"li"},"Instances")," tab in the ",Object(r.b)("strong",{parentName:"li"},"Config utility")," and stop ( ",Object(r.b)("img",{alt:"icon",src:a(269).default})," ) all the running ",Object(r.b)("em",{parentName:"li"},"instances"),".")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"No ",Object(r.b)("em",{parentName:"p"},"Port")," number should be asked during the upgrade. If you are prompted for the ",Object(r.b)("em",{parentName:"p"},"port")," number, kindly contact the support team at ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:support@bihub.com"}),"support@bihub.com"),"."))),Object(r.b)("h2",{id:"upgrade-from-trial-to-production"},"Upgrade from trial to production"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Ensure all the instances listed in the ",Object(r.b)("em",{parentName:"p"},"Config utility")," are stopped before proceeding.\nThe below screenshot indicates the above ",Object(r.b)("em",{parentName:"p"},"Backend")," instance is stopped and the ",Object(r.b)("em",{parentName:"p"},"Play")," button ( ",Object(r.b)("img",{alt:"icon",src:a(270).default})," ) is now highlighted."),"   ",Object(r.b)("div",null,Object(r.b)(l,{mdxType:"Zoom"},Object(r.b)("img",{alt:"BI Hub Server instances",src:Object(c.a)("/doc-images/installation-guide/stopped-instances.png")}))))),Object(r.b)("p",null,"Follow the steps below to extend the trial period of the BI Hub application:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Next")," to start the upgrade process."),Object(r.b)("li",{parentName:"ul"},"On successful upgrade, you will be prompted to open the ",Object(r.b)("em",{parentName:"li"},"Config utility")," and the ",Object(r.b)("em",{parentName:"li"},"Readme")," file. "),Object(r.b)("li",{parentName:"ul"},"Restart all the backend instances in the ",Object(r.b)("em",{parentName:"li"},"Config utility")," one by one.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Give some time before starting every instance. Do not immediately start one after the other."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"No ",Object(r.b)("em",{parentName:"p"},"Port")," number should be asked during the upgrade. If you are prompted for the ",Object(r.b)("em",{parentName:"p"},"port")," number, kindly contact the support team at ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:support@bihub.com"}),"support@bihub.com"),"."))))}u.isMDXComponent=!0},269:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0iI0ZENzgzRiIvPgo8L3N2Zz4K"},270:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xNy4wNTE4IDguMzg2ODFMMi45MDg5MyAwLjI1NzkwM0MxLjc1OTgyIC0wLjQwMjI1MyAwIDAuMjM4MzcyIDAgMS44NzExOFYxOC4xMjUxQzAgMTkuNTg5OSAxLjYzNTI3IDIwLjQ3MjcgMi45MDg5MyAxOS43Mzg0TDE3LjA1MTggMTEuNjEzNEMxOC4zMTM0IDEwLjg5MDcgMTguMzE3NCA5LjEwOTQ3IDE3LjA1MTggOC4zODY4MVY4LjM4NjgxWiIgZmlsbD0iIzAwODAwMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="}}]);