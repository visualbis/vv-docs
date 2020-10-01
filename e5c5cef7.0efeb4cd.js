(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),l=(n(0),n(215)),o=n(216),r=(n(217),n(218)),s=(n(48),{id:"sac",sidebar_label:"SAC",title:"SAC Platform Configuration"}),b={unversionedId:"installation-guide/install-bihub-windows/agents/bi-platform-config/sac",id:"installation-guide/install-bihub-windows/agents/bi-platform-config/sac",isDocsHomePage:!1,title:"SAC Platform Configuration",description:"SAC allows third-party applications to access its web services by using the authorization protocol OAuth2.0. With OAuth 2.0, we can make web service calls without exchanging user credentials between applications.",source:"@site/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/sac.md",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/sac",sidebar_label:"SAC",sidebar:"installationGuide",previous:{title:"Microstrategy Platform Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/microstrategy"},next:{title:"SharePoint Platform Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/sharepoint"}},c=[],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"SAC allows third-party applications to access its web services by using the authorization protocol ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://oauth.net/2/"}),"OAuth2.0"),". With OAuth 2.0, we can make web service calls without exchanging user credentials between applications."),Object(l.b)("p",null,"To integrate SAC Platform with BI Hub, you need to do some setup in your SAC tenant."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Step 1: Register a new client with grant type as 'Authorization Code' - User"),Object(l.b)("li",{parentName:"ul"},"Step 2: Register a new client with grant type as 'Client Credentials' \u2013Resource Owner\nCurrently, these two authorization methods are available.")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"AuthorizationCodeGrant (three-legged) - User"))),Object(l.b)("p",null,"User needs to do OAuth to access a SAC resource, To Register an OAuth client, follow these below steps."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Login to your SAC tenant as an admin."),Object(l.b)("li",{parentName:"ol"},"Navigate to the administration page by clicking on ",Object(l.b)("strong",{parentName:"li"}," \u2261 (Main Menu) -> System -> Administration"),".")),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(r.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"SAC Admin Page",src:Object(o.a)("/doc-images/sac/admin-page.png")}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Move to the tab called "',Object(l.b)("strong",{parentName:"li"},"AppIntegration"),'" \u2013You will find a button called "Add a New OAuth Client", this will open a dialogue box where you will be able to register a new OAuth Client.')),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(r.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New OAuth Client",src:Object(o.a)("/doc-images/sac/new-oauth-client.png")}))),Object(l.b)("p",null,"Also, you will find both Authorization URL and Token URL on this screen, which you will use in your ",Object(l.b)("inlineCode",{parentName:"p"},"config.json")," of SAC Agent."),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(r.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New OAuth Client Form",src:Object(o.a)("/doc-images/sac/new-oauth-client-form.png")}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Name")," \u2013 Enter any relevant name."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"OAuth Client ID")," \u2013 This will be the ThreeLegged Client ID in the ",Object(l.b)("inlineCode",{parentName:"li"},"config.json")," file of SAC Agent."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Authorization Grant"),' \u2013 set it as an "Authorization Code".'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Secret")," \u2013 This will be the ThreeLegged Client Secret in the ",Object(l.b)("inlineCode",{parentName:"li"},"config.json")," file of SAC Agent."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Redirect URL")," \u2013 Enter your BIHub\u2019s backend app URL. Example: ",Object(l.b)("inlineCode",{parentName:"li"},"https://host:8080/Redirect"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Token Details")," \u2013 Defining a lifetime for tokens is optional.")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"ClientCredentialsGrant (two-legged) \u2013 ResourceOwner"))),Object(l.b)("p",null,"This flow does not belong to a specific user. This configuration is for the resource owner, To explain briefly, We need to pass the resource owner(admin) credentials to access and get all users available on SAC.\nIn the above steps, we have done some setup for Registering an OAuth Client as a grant type 'authorization code', like that we need to Register an OAuth Client as a grant type 'client credentials'."),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(r.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New OAuth Client Credentials",src:Object(o.a)("/doc-images/sac/new-oauth-client-credentials.png")}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Name")," \u2013 Enter any relevant name."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"OAuth Client ID")," \u2013 This will be the Client ID in the ",Object(l.b)("inlineCode",{parentName:"li"},"config.json")," file of SAC Agent."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Authorization Grant"),' \u2013 set it as a "Client Credentials".'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Secret")," \u2013 This will be the Client Secret in the ",Object(l.b)("inlineCode",{parentName:"li"},"config.json")," file of SAC Agent."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Token Details")," \u2013 Defining a lifetime for tokens is optional.")))}p.isMDXComponent=!0}}]);