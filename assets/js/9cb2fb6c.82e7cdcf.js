(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(223)),r=n(224),l=(n(225),n(226)),s=(n(56),{id:"ssl-web",title:"Configure SSL for BI Hub Web",sidebar_label:"Configure SSL for BI Hub Web"}),c={unversionedId:"installation-guide/advanced/ssl/ssl-web",id:"installation-guide/advanced/ssl/ssl-web",isDocsHomePage:!1,title:"Configure SSL for BI Hub Web",description:"This section explains the steps to configure the SSL, if you have installed BI Hub Web with Nginx.",source:"@site/docs/installation-guide/advanced/ssl/ssl-web.mdx",sourceDirName:"installation-guide/advanced/ssl",slug:"/installation-guide/advanced/ssl/ssl-web",permalink:"/docs/installation-guide/advanced/ssl/ssl-web",version:"current",sidebar_label:"Configure SSL for BI Hub Web",frontMatter:{id:"ssl-web",title:"Configure SSL for BI Hub Web",sidebar_label:"Configure SSL for BI Hub Web"},sidebar:"installationGuide",previous:{title:"Configure SSL for BI Hub Server",permalink:"/docs/installation-guide/advanced/ssl/ssl-server"},next:{title:"Configure SSL for BI Hub Agents",permalink:"/docs/installation-guide/advanced/ssl/ssl-agents"}},b=[],d={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section explains the steps to ",Object(o.b)("em",{parentName:"p"},"configure the SSL"),", if you have installed ",Object(o.b)("em",{parentName:"p"},"BI Hub Web with Nginx"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you have installed BI Hub Web without Nginx, then configuring SSL will be out of the scope for this document. "))),Object(o.b)("p",null,"By default,the bundled Nginx will contain the self-signed SSL certificate issued to example.com. "),Object(o.b)("p",null,"Kindly have the proper SSL certificate from the authorized vendor in ",Object(o.b)("inlineCode",{parentName:"p"},".crt")," format and key file.\nYou can also have your Self-Signed SSL certificate, but you need to make sure that the certificate belongs to a trusted certificate store by following the configuration steps provided by the particular browser which is out of scope for this document. "),Object(o.b)("p",null,"BI Hub recommends having the proper SSL certificate from the authorized vendor."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Rename the SSL files to the required names:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"X.X.X.X.crt")," file should be renamed to ",Object(o.b)("inlineCode",{parentName:"li"},"server.crt"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"X.X.X.X.key")," file should be renamed to ",Object(o.b)("inlineCode",{parentName:"li"},"server.key"),"."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the nginx directory ",Object(o.b)("inlineCode",{parentName:"p"},"<installation_folder>/VBIViewWeb/nginx/nginx/conf")," and take backup of the ",Object(o.b)("inlineCode",{parentName:"p"},"server.crt")," and ",Object(o.b)("inlineCode",{parentName:"p"},"server.key")," files."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"If the SSL configuration fails, we will need these files to bring back the server to normal working condition."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Replace these files with your trusted SSL files.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Edit the ",Object(o.b)("inlineCode",{parentName:"p"},"config.json")," file located in the directory ",Object(o.b)("inlineCode",{parentName:"p"},"C:\\Program Files\\Visual BI Solutions\\VBI View\\VBIViewWeb"),", and change the value of host from ",Object(o.b)("strong",{parentName:"p"},"http")," to ",Object(o.b)("strong",{parentName:"p"},"https"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="C:\\Program Files\\Visual BI Solutions\\VBI View\\VBIViewWeb\\config.json" {2}',title:'"C:\\Program',"Files\\Visual":!0,BI:!0,"Solutions\\VBI":!0,'View\\VBIViewWeb\\config.json"':!0,"{2}":!0},'{\n  "host": "https://...",\n  "port": 12000\n}\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Restart the Nginx Server for the configuration to take effect."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("inlineCode",{parentName:"li"},"<installation_folder>/VBIViewWeb/nginx/")," directory, and run the ",Object(o.b)("strong",{parentName:"li"},"manager-windows.exe")," file as administrator."),Object(o.b)("li",{parentName:"ul"},"Go to the ",Object(o.b)("strong",{parentName:"li"},"Manage Server")," tab. Select  ",Object(o.b)("strong",{parentName:"li"},"Nginx")," and click ",Object(o.b)("strong",{parentName:"li"},"Restart")," ( Wait for the server to get restarted and close the window).")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the browser and type the ",Object(o.b)("inlineCode",{parentName:"li"},"<https://Backend server url>"),".",Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"BI Hub Web with secured SSL connection",src:Object(r.a)("doc-images/installation-guide/web-ssl-confirm.png")})),Object(o.b)("p",null,"BI Hub Web with secured SSL connection")))),Object(o.b)("p",null,"\u2705 The BI Hub Web will be loaded with a secured SSL connection."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"If there is any problem in restarting the server, check the log files for the errors which could be found at ",Object(o.b)("inlineCode",{parentName:"li"},"<installation_folder>/VBIViewWeb/nginx/nginx/logs/"),"."),Object(o.b)("li",{parentName:"ul"},"If the problem persists, replace the old SSL files with the new ones and restart the server.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If the server starts successfully, verify the SSL certificate and have a proper SSL format.")))),Object(o.b)("p",{parentName:"div"},"If you continue to have the problem, you could raise the support ticket in the support portal or by sending an email to ",Object(o.b)("a",{parentName:"p",href:"mailto:support@bihub.com"},"support@bihub.com")," with supported log files and error images."))),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you are going to configure SSL, please make sure that BI Hub Server and BI Hub Agents and its respective BI platforms should also be configured with proper SSL. "),Object(o.b)("p",{parentName:"div"},"You cannot access HTTP content from the https protocol. The browser will throw the mixed content error if you try to access HTTP content from the https URL."))))}p.isMDXComponent=!0}}]);