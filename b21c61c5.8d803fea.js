(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return c}));var a=n(2),i=n(6),s=(n(0),n(215)),o={id:"mult-instances",title:"Multiple Instances of BI Hub",sidebar_label:"Multiple Instances of BI Hub"},r={unversionedId:"admin-guide/admin-functions/multiple-instances/mult-instances",id:"admin-guide/admin-functions/multiple-instances/mult-instances",isDocsHomePage:!1,title:"Multiple Instances of BI Hub",description:"To ensure high availability or perform load balancing when the large number of concurrent users (excess of 800) use BI Hub, multiple instances of BI Hub agents are required. Two or more instances of the same agent type can be clustered together and they point to the same BI",source:"@site/docs/admin-guide/admin-functions/multiple-instances/mult-instances.md",permalink:"/VV-Docs/docs/admin-guide/admin-functions/multiple-instances/mult-instances",sidebar_label:"Multiple Instances of BI Hub",sidebar:"adminGuide",previous:{title:"Audit",permalink:"/VV-Docs/docs/admin-guide/admin-functions/audit"},next:{title:"Creating a Cluster",permalink:"/VV-Docs/docs/admin-guide/admin-functions/multiple-instances/create-cluster"}},u=[],l={rightToc:u};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"To ensure high availability or perform load balancing when the large number of concurrent users (excess of 800) use BI Hub, multiple instances of BI Hub agents are required. Two or more instances of the same agent type can be clustered together and they point to the same BI\nplatform. "),Object(s.b)("p",null,"For example, two ",Object(s.b)("em",{parentName:"p"},"Tableau")," agents are created to form a cluster and these two agents point to the same Tableau platform. If one agent fails, the load will be taken by another instance, thus ensuring high availability.\nSimilarly, if large number of BI Hub concurrent users launch Tableau reports, these two agents perform load balancing. Tying up the two agents to form an agent cluster is accomplished using BI Hub cluster manager. This BI Hub agent cluster interacts with the cluster/load balancer already setup in the enterprise to handle load balancing/high availability. In fact, the details entered during BI Hub cluster setup such as URL, Port etc., is based on the configuration of\nthe Load Balancer used in the enterprise."))}c.isMDXComponent=!0}}]);