(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{228:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=t.DocsPreferredVersionContextProvider=t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=t.usePluralForm=t.useTitleFormatter=t.isSamePath=t.isDocsPluginEnabled=t.DEFAULT_SEARCH_TAG=t.docVersionSearchTag=t.parseCodeBlockTitle=t.useAlternatePageUtils=t.listStorageKeys=t.createStorageSlot=t.useThemeConfig=void 0;var n=r(244);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return n.useThemeConfig}});var o=r(245);Object.defineProperty(t,"createStorageSlot",{enumerable:!0,get:function(){return o.createStorageSlot}}),Object.defineProperty(t,"listStorageKeys",{enumerable:!0,get:function(){return o.listStorageKeys}});var u=r(264);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return u.useAlternatePageUtils}});var a=r(265);Object.defineProperty(t,"parseCodeBlockTitle",{enumerable:!0,get:function(){return a.parseCodeBlockTitle}});var i=r(266);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return i.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return i.DEFAULT_SEARCH_TAG}});var s=r(246);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return s.isDocsPluginEnabled}});var c=r(270);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return c.isSamePath}});var l=r(271);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return l.useTitleFormatter}});var f=r(272);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return f.usePluralForm}});var d=r(273);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return d.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return d.useDocsPreferredVersionByPluginId}});var g=r(247);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return g.DocsPreferredVersionContextProvider}});var v=r(276);Object.defineProperty(t,"ThemeClassNames",{enumerable:!0,get:function(){return v.ThemeClassNames}})},229:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},230:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return d}));var n=r(0),o=r.n(n),u=/{\w+}/g,a="{}";function i(e,t){var r=[],n=e.replace(u,(function(e){var n=e.substr(1,e.length-2),u=null==t?void 0:t[n];if(void 0!==u){var i=o.a.isValidElement(u)?u:String(u);return r.push(i),a}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?n.split(a).reduce((function(e,t,n){var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):n.split(a).reduce((function(e,t,n){return[].concat(e,[o.a.createElement(o.a.Fragment,{key:n},t,r[n])])}),[])}function s(e){return i(e.children,e.values)}var c=r(28);function l(e){var t,r=e.id,n=e.message;return null!==(t=c[null!=r?r:n])&&void 0!==t?t:n}function f(e,t){var r,n=e.message;return i(null!==(r=l({message:n,id:e.id}))&&void 0!==r?r:n,t)}function d(e){var t,r=e.children,n=e.id,u=e.values,a=null!==(t=l({message:r,id:n}))&&void 0!==t?t:r;return o.a.createElement(s,{values:u},a)}},233:function(e,t,r){try{e.exports=r(267)}catch(o){var n={};e.exports={useAllDocsData:function(){return n},useActivePluginAndVersion:function(){}}}},244:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var n=r(231).__importDefault(r(16));t.useThemeConfig=function(){return n.default().siteConfig.themeConfig}},245:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listStorageKeys=t.createStorageSlot=void 0;var n="localStorage";function o(e){if(void 0===e&&(e=n),"undefined"==typeof window)throw new Error("Browser storage is not available on NodeJS / Docusaurus SSR process");if("none"===e)return null;try{return window[e]}catch(r){return t=r,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an Iframe, in an Incognito browser session, or using too strict browser privacy settings.",t),u=!0),null}var t}var u=!1;var a={get:function(){return null},set:function(){},del:function(){}};t.createStorageSlot=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error("Illegal storage API usage for storage key="+e+".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.")}return{get:t,set:t,del:t}}(e);var r=o(null==t?void 0:t.persistence);return null===r?a:{get:function(){return r.getItem(e)},set:function(t){return r.setItem(e,t)},del:function(){return r.removeItem(e)}}},t.listStorageKeys=function(e){void 0===e&&(e=n);var t=o(e);if(!t)return[];for(var r=[],u=0;u<t.length;u+=1){var a=t.key(u);null!==a&&r.push(a)}return r}},246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var n=r(233);t.isDocsPluginEnabled=!!n.useAllDocsData},247:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var n=r(231),o=n.__importStar(r(0)),u=r(244),a=r(246),i=r(233),s=n.__importDefault(r(274));function c(e){var t=e.pluginIds,r=e.versionPersistence,n=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=s.default.read(e,r);return n[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(s.default.clear(e,r),{preferredVersionName:null})}(e)})),o}function l(){var e=i.useAllDocsData(),t=u.useThemeConfig().docs.versionPersistence,r=o.useMemo((function(){return Object.keys(e)}),[e]),n=o.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(r)})),a=n[0],l=n[1];return o.useEffect((function(){l(c({allDocsData:e,versionPersistence:t,pluginIds:r}))}),[e,t,r]),[a,o.useMemo((function(){return{savePreferredVersion:function(e,r){s.default.save(e,t,r),l((function(t){var n;return Object.assign({},t,((n={})[e]={preferredVersionName:r},n))}))}}}),[l])]}var f=o.createContext(null);function d(e){var t=e.children,r=l();return o.default.createElement(f.Provider,{value:r},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return a.isDocsPluginEnabled?o.default.createElement(d,null,t):o.default.createElement(o.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=o.useContext(f);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},256:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(0),o=r.n(n),u=r(27),a=r(228),i=r(224);function s(e){var t=e.title,r=e.description,n=e.keywords,s=e.image,c=Object(a.useThemeConfig)().image,l=Object(a.useTitleFormatter)(t),f=Object(i.a)(s||c,{absolute:!0});return o.a.createElement(u.a,null,o.a.createElement("title",null,l),o.a.createElement("meta",{property:"og:title",content:l}),r&&o.a.createElement("meta",{name:"description",content:r}),r&&o.a.createElement("meta",{property:"og:description",content:r}),n&&o.a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),f&&o.a.createElement("meta",{property:"og:image",content:f}),f&&o.a.createElement("meta",{name:"twitter:image",content:f}),f&&o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},264:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;var n=r(231).__importDefault(r(16)),o=r(24);t.useAlternatePageUtils=function(){var e=n.default(),t=e.siteConfig,r=t.baseUrl,u=t.url,a=e.i18n,i=a.defaultLocale,s=a.currentLocale,c=o.useLocation().pathname,l=s===i?r:r.replace("/"+s+"/","/"),f=c.replace(r,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?u:"")+function(e){return e===i?""+l:""+l+e+"/"}(t)+f}}}},265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseCodeBlockTitle=void 0;var n=/title=(["'])(.*?)\1/;t.parseCodeBlockTitle=function(e){var t,r;return null!==(r=null===(t=null==e?void 0:e.match(n))||void 0===t?void 0:t[2])&&void 0!==r?r:""}},266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var n=r(24),o=r(268),u=r(269);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")};t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var r=t.useAllDocsData(),o=n.useLocation().pathname;return u.getActivePlugin(r,o,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var r=t.useActivePlugin(e),o=n.useLocation().pathname;if(r)return{activePlugin:r,activeVersion:u.getActiveVersion(r.pluginData,o)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var r=t.useDocsData(e);return u.getLatestVersion(r)};t.useActiveVersion=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getActiveVersion(r,o)};t.useActiveDocContext=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getActiveDocContext(r,o)};t.useDocVersionSuggestions=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getDocVersionSuggestions(r,o)}},268:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o})),r.d(t,"useAllPluginInstancesData",(function(){return u})),r.d(t,"usePluginData",(function(){return a}));var n=r(16);function o(){var e=Object(n.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function u(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function a(e,t){void 0===t&&(t="default");var r=u(e)[t];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return r}},269:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var n=r(24);t.getActivePlugin=function(e,t,r){void 0===r&&(r={});var o=Object.entries(e).find((function(e){e[0];var r=e[1];return!!n.matchPath(t,{path:r.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&r.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return u};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,r){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!n.matchPath(r,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,r){var o,u,a=t.getActiveVersion(e,r),i=null==a?void 0:a.docs.find((function(e){return!!n.matchPath(r,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:i,alternateDocVersions:i?(o=i.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(u[e.name]=t)}))})),u):{}}};t.getDocVersionSuggestions=function(e,r){var n=t.getLatestVersion(e),o=t.getActiveDocContext(e,r),u=o.activeVersion!==n;return{latestDocSuggestion:u?null==o?void 0:o.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:u?n:void 0}}},270:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0;t.isSamePath=function(e,t){var r=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return r(e)===r(t)}},271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var n=r(231).__importDefault(r(16));t.useTitleFormatter=function(e){var t=n.default().siteConfig,r=void 0===t?{}:t,o=r.title,u=r.titleDelimiter,a=void 0===u?"|":u;return e&&e.trim().length?e.trim()+" "+a+" "+o:o}},272:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;var n=r(231),o=r(0),u=n.__importDefault(r(16)),a=["zero","one","two","few","many","other"];function i(e){return a.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=u.default().i18n.currentLocale;return o.useMemo((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),s;try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:i(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),s}var t,r}),[e])}t.usePluralForm=function(){var e=c();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+n.length+" plural forms: "+e+" ");var o=r.select(t),u=r.pluralForms.indexOf(o);return n[Math.min(u,n.length-1)]}(r,t,e)}}}},273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var n=r(0),o=r(247),u=r(233),a=r(275);t.useDocsPreferredVersion=function(e){void 0===e&&(e=a.DEFAULT_PLUGIN_ID);var t=u.useDocsData(e),r=o.useDocsPreferredVersionContext(),i=r[0],s=r[1],c=i[e].preferredVersionName;return{preferredVersion:c?t.versions.find((function(e){return e.name===c})):null,savePreferredVersionName:n.useCallback((function(t){s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){var e=u.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],r=Object.keys(e),n={};return r.forEach((function(r){n[r]=function(r){var n=e[r],o=t[r].preferredVersionName;return o?n.versions.find((function(e){return e.name===o})):null}(r)})),n}},274:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(245),o=function(e){return"docs-preferred-version-"+e},u={save:function(e,t,r){n.createStorageSlot(o(e),{persistence:t}).set(r)},read:function(e,t){return n.createStorageSlot(o(e),{persistence:t}).get()},clear:function(e,t){n.createStorageSlot(o(e),{persistence:t}).del()}};t.default=u},275:function(e,t,r){"use strict";r.r(t),r.d(t,"DEFAULT_PLUGIN_ID",(function(){return n}));var n="default"},276:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=void 0,t.ThemeClassNames={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}}}]);