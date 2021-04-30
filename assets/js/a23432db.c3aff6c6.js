(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(223)),i={id:"recovery",title:"Recovery (in the event of a system crash)",sidebar_label:"Recovery (in the event of a system crash)"},c={unversionedId:"admin-guide/backup-recovery/recovery",id:"admin-guide/backup-recovery/recovery",isDocsHomePage:!1,title:"Recovery (in the event of a system crash)",description:"Follow the steps below in case of a Recovery:",source:"@site/docs/admin-guide/backup-recovery/recovery.md",sourceDirName:"admin-guide/backup-recovery",slug:"/admin-guide/backup-recovery/recovery",permalink:"/docs/admin-guide/backup-recovery/recovery",version:"current",sidebar_label:"Recovery (in the event of a system crash)",frontMatter:{id:"recovery",title:"Recovery (in the event of a system crash)",sidebar_label:"Recovery (in the event of a system crash)"},sidebar:"adminGuide",previous:{title:"Backup",permalink:"/docs/admin-guide/backup-recovery/backup"},next:{title:"Log Levels",permalink:"/docs/admin-guide/log-levels/log-levels"}},l=[],s={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Follow the steps below in case of a Recovery:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In the event of a system crash and if the application needs to be re-installed OR if the application needs to be migrated from one server to another, contact Visual BI support (",Object(o.b)("a",{parentName:"li",href:"mailto:support@bihub.com"},"support@bihub.com"),") to deactivate the current instance details and activate a new one."),Object(o.b)("li",{parentName:"ul"},"BI Hub Server:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"As a part of your application recovery, when you configure the application database, use the recent database backup."),Object(o.b)("li",{parentName:"ol"},"Replace the backup files in the appropriate folder and create the instances BI Hub Agents:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"To restore all the agent instances, after the new installation of agents follow the steps below",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Stop the service manager if it is running"),Object(o.b)("li",{parentName:"ol"},"Replace the manager.ini and the conf folder which has been backed up as said in Backup"),Object(o.b)("li",{parentName:"ol"},"Open manager.ini file and add Mode=recovery under the Main section"),Object(o.b)("li",{parentName:"ol"},"Start the service manager. This recovers all the agent instances and logs the output in logsServiceManager.log"),Object(o.b)("li",{parentName:"ol"},"After recovery of instances, remove the value that has been added in 3 above"))),Object(o.b)("li",{parentName:"ul"},"Repeat the above steps for all the agents to be recovered.")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"BI Hub Web:")),Object(o.b)("p",null,"Replace the backup files in the appropriate folder inside the installation directory."))}b.isMDXComponent=!0}}]);