(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{157:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return r})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return s})),n.d(a,"default",(function(){return c}));var t=n(2),o=n(6),i=(n(0),n(215)),r={id:"tableau",sidebar_label:"TABLEAU",title:"Tableau Platform Configuration"},l={unversionedId:"installation-guide/install-bihub-windows/agents/bi-platform-config/tableau",id:"installation-guide/install-bihub-windows/agents/bi-platform-config/tableau",isDocsHomePage:!1,title:"Tableau Platform Configuration",description:"Configuration of Tableau Server - Version 2018.2 and above",source:"@site/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/tableau.md",permalink:"/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/tableau",sidebar_label:"TABLEAU",sidebar:"installationGuide",previous:{title:"BOBJ REST BI Platform Configuration",permalink:"/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/bobj-rest-bi"},next:{title:"QlikSense Platform Configuration",permalink:"/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/qliksense"}},s=[{value:"Configuration of Tableau Server - Version 2018.2 and above",id:"configuration-of-tableau-server---version-20182-and-above",children:[]},{value:"Configuration of Tableau Server - Before Version 2018.2",id:"configuration-of-tableau-server---before-version-20182",children:[]}],b={rightToc:s};function c(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},b,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"configuration-of-tableau-server---version-20182-and-above"},"Configuration of Tableau Server - Version 2018.2 and above"),Object(i.b)("p",null,"Follow the below steps to configure the Tableau Server Version 2018.2 and above."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Click the Start button and select ",Object(i.b)("strong",{parentName:"li"},"All Programs > Accessories > Command Prompt"),".\nRight-click Command Prompt and select ",Object(i.b)("strong",{parentName:"li"},"Run as administrator"),"."),Object(i.b)("li",{parentName:"ol"},"For disabling the ClickJack protection, follow the below command:\n",Object(i.b)("inlineCode",{parentName:"li"},"tsm configuration set -k wgserver.clickjack_defense.enabled -v false")),Object(i.b)("li",{parentName:"ol"},"For adding the Trusted Hosts, follow the below command:\n",Object(i.b)("inlineCode",{parentName:"li"},"tsm authentication trusted configure -th <trusted IP address1 or host name1>,<trusted IP address2 or host name2>")),Object(i.b)("li",{parentName:"ol"},"For enabling API Access, follow the below command: ",Object(i.b)("inlineCode",{parentName:"li"},"tsm configuration set -k api.server.enabled -v true")),Object(i.b)("li",{parentName:"ol"},"Follow the below command to save all the above changes: ",Object(i.b)("inlineCode",{parentName:"li"},"tsm pending-changes apply"))),Object(i.b)("h2",{id:"configuration-of-tableau-server---before-version-20182"},"Configuration of Tableau Server - Before Version 2018.2"),Object(i.b)("p",null,"Follow the below steps to configure the Tableau Server before Version 2018.2."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click the Start button and select ",Object(i.b)("strong",{parentName:"p"},"All Programs>Accessories>Command Prompt"),".\nRight-click Command Prompt and select ",Object(i.b)("strong",{parentName:"p"},"Run as administrator"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To enable the trusted host run the following commands in the command prompt. IP address or host name of the Tableau agent Server machine should be given in the place of ",Object(i.b)("inlineCode",{parentName:"p"},"<trusted IP addresses or host names>")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'cd "<Tableau Server Installation Location>\\Tableau\\Tableau Server\\<version>\\bin"\n\ntabadmin stop\n\ntabadmin set wgserver.trusted_hosts "<trusted IP addresses or host names>" \n\ntabadmin config\n\ntabadmin start\n\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To disable clickjack protection run the following commands in the command prompt\n",Object(i.b)("inlineCode",{parentName:"p"},'cd "<Tableau Server Installation Location> \\Tableau\\Tableau Server\\<version>\\bin"')),Object(i.b)("p",{parentName:"li"},"Run the following commands, in order:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"\ntabadmin stop\n\ntabadmin set wgserver.clickjack_defense.enabled false\n\ntabadmin config\n\ntabadmin start\n\n")))))}c.isMDXComponent=!0}}]);