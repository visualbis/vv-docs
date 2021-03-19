(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),c=(a(0),a(205)),o=a(206),b=a(207),r=a(208),s=(a(53),{id:"upgrade-bihub",title:"Upgrade Of BI Hub",sidebar_label:"Upgrade of BI Hub"}),d={unversionedId:"installation-guide/upgrade/upgrade-bihub",id:"installation-guide/upgrade/upgrade-bihub",isDocsHomePage:!1,title:"Upgrade Of BI Hub",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/installation-guide/upgrade/upgrade-bihub.md",slug:"/installation-guide/upgrade/upgrade-bihub",permalink:"/docs/installation-guide/upgrade/upgrade-bihub",version:"current",sidebar_label:"Upgrade of BI Hub",sidebar:"installationGuide",previous:{title:"Advanced Agent Configuration",permalink:"/docs/installation-guide/advanced/advanced"},next:{title:"Uninstallation of BI Hub in Windows Platform",permalink:"/docs/installation-guide/uninstall-reinstall/uninstall-bihub"}},l=[{value:"Upgrade from the previous version to the new version",id:"upgrade-from-the-previous-version-to-the-new-version",children:[]}],p={rightToc:l};function m(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The user can upgrade the trial version to either the production version or extend the trial period."),Object(c.b)("h2",{id:"upgrade-from-the-previous-version-to-the-new-version"},"Upgrade from the previous version to the new version"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)(b.a,{to:Object(o.a)("docs/installation-guide/download-bihub"),mdxType:"Link"},"Download")," the latest versions of BI Hub Web, BI Hub Server, and BI Hub agents."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Double click on the ",Object(c.b)("inlineCode",{parentName:"p"},"<desired agent name>Agent-X.X.X-windows-installer.exe")," file to start the upgrade process.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The installer pops up with a ",Object(c.b)("em",{parentName:"p"},"Setup")," screen with the message that indicates that a previous version is already running. If you wish to proceed, click ",Object(c.b)("strong",{parentName:"p"},"Next"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(r.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Upgrade BI Hub setup screen",src:Object(o.a)("/doc-images/installation-guide/upgrade-confirm.png")})),Object(c.b)("p",null,"Confirm to upgrade BI Hub version"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Read through the license agreement and accept the terms before proceeding with the upgrade.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"On the next screen click ",Object(c.b)("strong",{parentName:"p"},"Next")," to confirm the upgrade from the current version to the new version.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"A successful upgrade screen provides options to open the Readme file."))),Object(c.b)("p",null,"Similar steps need to be followed for all other agents and BI Hub Web. For BI Hub Server however, we have a couple of extra steps:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"We need to stop the backend instances before upgrading.",Object(c.b)("div",{class:"center"},Object(c.b)(r.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Stop backend instances",src:Object(o.a)("/doc-images/installation-guide/stop-backend-instance.png")}))))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Next"),". Go to the ",Object(c.b)("strong",{parentName:"p"},"Instances")," tab in the ",Object(c.b)("strong",{parentName:"p"},"Config utility")," and stop ( ",Object(c.b)("img",{alt:"icon",src:a(265).default})," ) all the running ",Object(c.b)("em",{parentName:"p"},"instances"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(r.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"BI Hub Server instances",src:Object(o.a)("/doc-images/installation-guide/bihub-server-instances.png")})),Object(c.b)("p",null,"BI Hub Server instances")))),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Ensure all the instances listed in the ",Object(c.b)("em",{parentName:"p"},"Config utility")," are stopped before proceeding.\nThe below screenshot indicates the above ",Object(c.b)("em",{parentName:"p"},"Backend")," instance is stopped and the ",Object(c.b)("em",{parentName:"p"},"Play")," button ( ",Object(c.b)("img",{alt:"icon",src:a(266).default})," ) is now highlighted."),"   ",Object(c.b)("div",{class:"center"},Object(c.b)(r.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"BI Hub Server instances",src:Object(o.a)("/doc-images/installation-guide/stopped-instances.png")}))))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Close the ",Object(c.b)("strong",{parentName:"p"},"Config utility")," after you stop the backend instances before you proceed with the installer, if not an error will be thrown during the upgrade."))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Click ",Object(c.b)("strong",{parentName:"li"},"Next")," to start the upgrade process."),Object(c.b)("li",{parentName:"ul"},"On successful upgrade, you will be prompted to open the ",Object(c.b)("em",{parentName:"li"},"Config utility")," and the ",Object(c.b)("em",{parentName:"li"},"Readme")," file. "),Object(c.b)("li",{parentName:"ul"},"Restart all the backend instances in the ",Object(c.b)("em",{parentName:"li"},"Config utility")," one by one.")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Give some time before starting every instance. Do not immediately start one after the other."))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"No ",Object(c.b)("em",{parentName:"p"},"Port")," number should be asked during the upgrade. If you are prompted for the ",Object(c.b)("em",{parentName:"p"},"port")," number, kindly contact the support team at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:support@bihub.com"}),"support@bihub.com"),"."))))}m.isMDXComponent=!0},265:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0iI0ZENzgzRiIvPgo8L3N2Zz4K"},266:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xNy4wNTE4IDguMzg2ODFMMi45MDg5MyAwLjI1NzkwM0MxLjc1OTgyIC0wLjQwMjI1MyAwIDAuMjM4MzcyIDAgMS44NzExOFYxOC4xMjUxQzAgMTkuNTg5OSAxLjYzNTI3IDIwLjQ3MjcgMi45MDg5MyAxOS43Mzg0TDE3LjA1MTggMTEuNjEzNEMxOC4zMTM0IDEwLjg5MDcgMTguMzE3NCA5LjEwOTQ3IDE3LjA1MTggOC4zODY4MVY4LjM4NjgxWiIgZmlsbD0iIzAwODAwMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="}}]);