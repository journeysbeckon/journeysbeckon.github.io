(()=>{var e={};e.id=438,e.ids=[438],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5782:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>l});var n=r(482),s=r(9108),o=r(2563),a=r.n(o),i=r(8300),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);r.d(t,c);let l=["",{children:["countries",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5377)),"/home/runner/work/journeys-beckon/journeys-beckon/src/app/countries/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,3091)),"/home/runner/work/journeys-beckon/journeys-beckon/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/runner/work/journeys-beckon/journeys-beckon/src/app/countries/page.tsx"],u="/countries/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/countries/page",pathname:"/countries",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8653:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},8496:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.bind(r,4723))},5303:()=>{},4723:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(5344),s=r(3729),o=r(2225),a=r(372);r(5324);let i=()=>{let[e,t]=(0,s.useState)("light");(0,s.useEffect)(()=>{},[]),(0,s.useEffect)(()=>{"dark"===e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e)},[e]);let r=e=>{t(e)};return(0,n.jsxs)("div",{className:"theme-toggle",children:[n.jsx(o.G,{icon:a.OwZ,className:`theme-icon theme-icon-system ${"system"===e?"theme-icon-opacity-100":"theme-icon-opacity-50"}`,onClick:()=>r("system")}),n.jsx(o.G,{icon:a.enB,className:`theme-icon theme-icon-light ${"light"===e?"theme-icon-opacity-100":"theme-icon-opacity-50"}`,onClick:()=>r("light")}),n.jsx(o.G,{icon:a.DBF,className:`theme-icon theme-icon-dark ${"dark"===e?"theme-icon-opacity-100":"theme-icon-opacity-50"}`,onClick:()=>r("dark")})]})}},5377:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(5036),s=r(206);async function o(){try{return(await (0,s.r)()).flatMap(e=>e.states.flatMap(e=>e.cities.flatMap(e=>e.places)))}catch(e){return[]}}async function a(){let e=await o();return(0,n.jsxs)("div",{children:[n.jsx("h1",{children:"Places"}),n.jsx("ul",{children:e.map(e=>n.jsx("li",{children:e.name},e.name))})]})}},3091:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y,metadata:()=>x});var n=r(5036),s=r(2195),o=r.n(s),a=r(2813);let i=(0,r(6843).createProxy)(String.raw`/home/runner/work/journeys-beckon/journeys-beckon/src/app/ui/components/theme.tsx`),{__esModule:c,$$typeof:l}=i,d=i.default;r(5934);let u=()=>n.jsx("header",{className:"header",children:(0,n.jsxs)("div",{className:"header-content",children:[(0,n.jsxs)("div",{className:"logo-container",children:[n.jsx(a.default,{src:"/journeysbeckon.svg",alt:"Journeys Beckon",className:"logo",width:100,height:24,priority:!0}),n.jsx("h1",{className:"header-title",children:"Welcome to Journeys Beckon"})]}),n.jsx(d,{})]})});var m=r(6990),p=r(7984);r(6877);let h=()=>n.jsx("footer",{className:"footer",children:n.jsx("div",{className:"footer-container",children:n.jsx("div",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"footer-icons",children:[n.jsx("a",{href:"https://www.instagram.com/journeysbeckon/",target:"_blank",rel:"noopener noreferrer",className:"social-icon",children:n.jsx(p.G,{icon:m.Zzi})}),n.jsx("a",{href:"https://www.facebook.com/JourneysBeckon/",target:"_blank",rel:"noopener noreferrer",className:"social-icon",children:n.jsx(p.G,{icon:m.AYu})})]}),n.jsx("p",{className:"footer-copyright",children:"\xa9 2024 Journeys Beckon. All Rights Reserved."})]})})})});r(4777);let x={title:"Journeys Beckon",description:"Journeys Beckon app"};function y({children:e}){return(0,n.jsxs)("html",{lang:"en",children:[n.jsx("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1366747998924653",crossOrigin:"anonymous"}),(0,n.jsxs)("body",{className:o().className,children:[n.jsx(u,{}),e,n.jsx(h,{})]})]})}},206:(e,t,r)=>{"use strict";r.d(t,{r:()=>o});let n=new(require("mongodb")).MongoClient("mongodb+srv://vercel-admin-user:36QaYvy9v4TFTiX8@journeysbeckon.onis3w8.mongodb.net/?retryWrites=true&w=majority&appName=JourneysBeckon");async function s(){try{await n.connect(),console.log("Connected to MongoDB")}catch(e){console.error("Error connecting to MongoDB:",e)}}async function o(){try{await s();let e=n.db("JourneysBeckon").collection("countries");return await e.find().toArray()}catch(e){return console.error("Error fetching data from MongoDB:",e),[]}}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4777:()=>{},6877:()=>{},5934:()=>{},5324:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,506,337],()=>r(5782));module.exports=n})();