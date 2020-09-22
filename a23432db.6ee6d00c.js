(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),r=(a(0),a(214)),i={id:"recovery",title:"Recovery (in the event of a system crash)",sidebar_label:"Recovery (in the event of a system crash)"},c={unversionedId:"admin-guide/backup-recovery/recovery",id:"admin-guide/backup-recovery/recovery",isDocsHomePage:!1,title:"Recovery (in the event of a system crash)",description:"Follow the steps below in case of a Recovery:",source:"@site/docs/admin-guide/backup-recovery/recovery.md",permalink:"/VV-Docs/docs/admin-guide/backup-recovery/recovery",sidebar_label:"Recovery (in the event of a system crash)",sidebar:"adminGuide",previous:{title:"Backup",permalink:"/VV-Docs/docs/admin-guide/backup-recovery/backup"},next:{title:"Log Levels",permalink:"/VV-Docs/docs/admin-guide/log-levels/log-levels"}},l=[],s={rightToc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Follow the steps below in case of a Recovery:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the event of a system crash and if the application needs to be re-installed OR if the application needs to be migrated from one server to another, contact Visual BI support (",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"mailto:support@visualbi.com"}),"support@visualbi.com"),") to deactivate the current instance details and activate a new one."),Object(r.b)("li",{parentName:"ul"},"BI Hub Server:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"As a part of your application recovery, when you configure the application database, use the recent database backup."),Object(r.b)("li",{parentName:"ol"},"Replace the backup files in the appropriate folder and create the instances BI Hub Agents:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"To restore all the agent instances, after the new installation of agents follow the steps below",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Stop the service manager if it is running"),Object(r.b)("li",{parentName:"ol"},"Replace the manager.ini and the conf folder which has been backed up as said in Backup"),Object(r.b)("li",{parentName:"ol"},"Open manager.ini file and add Mode=recovery under the Main section"),Object(r.b)("li",{parentName:"ol"},"Start the service manager. This recovers all the agent instances and logs the output in logsServiceManager.log"),Object(r.b)("li",{parentName:"ol"},"After recovery of instances, remove the value that has been added in 3 above"))),Object(r.b)("li",{parentName:"ul"},"Repeat the above steps for all the agents to be recovered.")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"BI Hub Web:")),Object(r.b)("p",null,"Replace the backup files in the appropriate folder inside the installation directory."))}b.isMDXComponent=!0}}]);