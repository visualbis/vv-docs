(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{196:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),r=(a(0),a(209)),d=a(210),s=a(211),o={id:"integrate",title:"Integrating BI Hub with BI platforms and Microsoft AD \u2013 Initial Setup",sidebar_label:"Integrating BI Hub with BI platforms and Microsoft AD"},b={unversionedId:"admin-guide/integrate",id:"admin-guide/integrate",isDocsHomePage:!1,title:"Integrating BI Hub with BI platforms and Microsoft AD \u2013 Initial Setup",description:"This Section illustrates steps required to integrate BI Hub with BI platforms and Microsoft AD.",source:"@site/docs/admin-guide/integrate.md",slug:"/admin-guide/integrate",permalink:"/docs/admin-guide/integrate",version:"current",sidebar_label:"Integrating BI Hub with BI platforms and Microsoft AD",sidebar:"adminGuide",previous:{title:"Row Level Security for Power BI Reports",permalink:"/docs/admin-guide/row-level-security"},next:{title:"Backup",permalink:"/docs/admin-guide/backup-recovery/backup"}},c=[],m={rightToc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This Section illustrates steps required to integrate BI Hub with BI platforms and Microsoft AD.\nThe Table below depicts the possible scenarios and the appropriate steps to be taken by the administrator."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scenario"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Sections to be followed in Sequence"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Users of all BI platforms are authenticated by Microsoft AD and admin wishes to use single click synchronization to add users and reports."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Refer sections ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/getting-started/prerequisite/add-new-agent"),mdxType:"Link"},"Adding a New Agent"),", ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/add-ms-ad"),mdxType:"Link"},Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/add-ms-ad"),mdxType:"Link"},"Add Microsoft AD details to BI Hub")),", ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-ms-ad-bihub"),mdxType:"Link"},Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-ms-ad-bihub"),mdxType:"Link"},"Synchronize Microsoft AD users with BI Hub"))," and ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-reports-users"),mdxType:"Link"},Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-reports-users"),mdxType:"Link"},"Synchronize Reports of Users")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Users of all BI platforms are authenticated by Microsoft AD and admin wishes to use single click synchronization to add users but add reports to those users manually"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Refer sections ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/getting-started/prerequisite/add-new-agent"),mdxType:"Link"},"Adding a New Agent"),", ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/add-ms-ad"),mdxType:"Link"},"Add Microsoft AD details to BI Hub")," and Add Reports to an existing user")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When one BI platform uses Microsoft AD and the other platform authenticates users natively. User names are same in Microsoft AD and the BI platform."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Refer sections ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/getting-started/prerequisite/add-new-agent"),mdxType:"Link"},"Adding a New Agent"),", ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/add-ms-ad"),mdxType:"Link"},"Add Microsoft AD details to BI Hub"),", ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-ms-ad-bihub"),mdxType:"Link"},"Synchronize Microsoft AD users with BI Hub")," and ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-reports-users"),mdxType:"Link"},"Synchronize Reports of Users"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When one BI platform uses Microsoft AD and the other platform authenticates users natively. User names are different between Microsoft AD and the BI platform."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Refer sections ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/getting-started/prerequisite/add-new-agent"),mdxType:"Link"},"Adding a New Agent"),", ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/add-ms-ad"),mdxType:"Link"},"Add Microsoft AD details to BI Hub"),", ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-ms-ad-bihub"),mdxType:"Link"},"Synchronize Microsoft AD users with BI Hub"),", Add Users from other BI Platforms (users having different user names across BI Platforms) and ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-reports-users"),mdxType:"Link"},"Synchronize Reports of Users"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When all the BI Platforms authenticate users natively (there is no Microsoft AD involved) and user names are same across all the BI platforms."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Refer sections ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/getting-started/prerequisite/add-new-agent"),mdxType:"Link"},"Adding a New Agent"),", Synchronize Users between Agent and BI Hub and ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-reports-users"),mdxType:"Link"},"Synchronize Reports of Users"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When all the BI Platforms authenticate users natively (there is no Microsoft AD involved) and user names are different between the BI platforms."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Refer sections ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/getting-started/prerequisite/add-new-agent"),mdxType:"Link"},"Adding a New Agent"),", Synchronize Users between Agent and BI Hub, Add Users from other BI Platforms (users having different user names across BI Platforms) and ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-reports-users"),mdxType:"Link"},"Synchronize Reports of Users"),".")))),Object(r.b)("p",null,"Sections ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/edit-agent-instance"),mdxType:"Link"},"Editing Agent/Instance Details"),", ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/logfiles-download"),mdxType:"Link"},"Log Files Download for Agent Instances")," and ",Object(r.b)(s.a,{to:Object(d.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/del-msad-bihub"),mdxType:"Link"},"Delete Microsoft AD details in BI Hub")," can be used when necessary."))}u.isMDXComponent=!0}}]);