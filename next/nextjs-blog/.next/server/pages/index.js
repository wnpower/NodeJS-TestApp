(()=>{var e={};e.id=405,e.ids=[405,888,660],e.modules={881:e=>{e.exports={container:"layout_container__FUycR",header:"layout_header__SFlEE",backToHome:"layout_backToHome__D9QFr"}},2800:e=>{e.exports={heading2Xl:"utils_heading2Xl__oxFoJ",headingXl:"utils_headingXl__zlq1q",headingLg:"utils_headingLg__RYtYb",headingMd:"utils_headingMd__XQE5B",borderCircle:"utils_borderCircle__zmKqF",colorInherit:"utils_colorInherit__Jz9NS",padding1px:"utils_padding1px__Ov2XA",list:"utils_list__zR_Au",listItem:"utils_listItem__6FEiz",lightText:"utils_lightText__B_gv3"}},6030:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>x,default:()=>h,getServerSideProps:()=>m,getStaticPaths:()=>g,getStaticProps:()=>p,reportWebVitals:()=>_,routeModule:()=>v,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>j});var a=s(7093),i=s(5244),n=s(1323),l=s(5388),c=s.n(l),o=s(2166),d=s(4081),u=e([d]);d=(u.then?(await u)():u)[0];let h=(0,n.l)(d,"default"),p=(0,n.l)(d,"getStaticProps"),g=(0,n.l)(d,"getStaticPaths"),m=(0,n.l)(d,"getServerSideProps"),x=(0,n.l)(d,"config"),_=(0,n.l)(d,"reportWebVitals"),j=(0,n.l)(d,"unstable_getStaticProps"),f=(0,n.l)(d,"unstable_getStaticPaths"),S=(0,n.l)(d,"unstable_getStaticParams"),b=(0,n.l)(d,"unstable_getServerProps"),y=(0,n.l)(d,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:o.default,Document:c()},userland:d});r()}catch(e){r(e)}})},7289:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(997),a=s(8420),i=s(4900);function n({dateString:e}){let t=(0,a.Z)(e);return r.jsx("time",{dateTime:e,children:(0,i.Z)(t,"LLLL d, yyyy")})}},111:(e,t,s)=>{"use strict";s.d(t,{Z:()=>j,y:()=>_});var r=s(997),a=s(968),i=s.n(a),n=s(5675),l=s.n(n),c=s(4298),o=s.n(c),d=s(881),u=s.n(d),h=s(2800),p=s.n(h),g=s(1664),m=s.n(g);let x="[Your Name]",_="Next.js Sample Website";function j({children:e,home:t}){return(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsxs)(i(),{children:[r.jsx("link",{rel:"icon",href:"/favicon.ico"}),r.jsx("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),r.jsx("meta",{property:"og:image",content:`https://og-image.vercel.app/${encodeURI(_)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}),r.jsx("meta",{name:"og:title",content:_}),r.jsx("meta",{name:"twitter:card",content:"summary_large_image"})]}),r.jsx(o(),{src:"https://connect.facebook.net/en_US/sdk.js",strategy:"lazyOnload",onLoad:()=>console.log("script loaded correctly, window.FB has been populated")}),r.jsx("header",{className:u().header,children:t?(0,r.jsxs)(r.Fragment,{children:[r.jsx(l(),{priority:!0,src:"/images/profile.jpg",className:p().borderCircle,height:144,width:144,alt:x}),r.jsx("h1",{className:p().heading2Xl,children:x})]}):(0,r.jsxs)(r.Fragment,{children:[r.jsx(m(),{href:"/",children:r.jsx(l(),{priority:!0,src:"/images/profile.jpg",className:p().borderCircle,height:108,width:108,alt:x})}),r.jsx("h2",{className:p().headingLg,children:r.jsx(m(),{href:"/",className:p().colorInherit,children:x})})]})}),r.jsx("main",{children:e}),!t&&r.jsx("div",{className:u().backToHome,children:r.jsx(m(),{href:"/",children:"← Back to home"})})]})}},5932:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{AU:()=>m,Le:()=>g,ld:()=>p});var a=s(7147),i=s.n(a),n=s(1017),l=s.n(n),c=s(8076),o=s.n(c),d=s(1774),u=s(7740),h=e([d,u]);[d,u]=h.then?(await h)():h;let x=l().join(process.cwd(),"posts");function p(){return i().readdirSync(x).map(e=>{let t=e.replace(/\.md$/,""),s=l().join(x,e),r=i().readFileSync(s,"utf8"),a=o()(r);return{id:t,...a.data}}).sort((e,t)=>e.date<t.date?1:-1)}function g(){return i().readdirSync(x).map(e=>({params:{id:e.replace(/\.md$/,"")}}))}async function m(e){let t=l().join(x,`${e}.md`),s=i().readFileSync(t,"utf8"),r=o()(s),a=(await (0,d.remark)().use(u.default).process(r.content)).toString();return{id:e,contentHtml:a,...r.data}}r()}catch(e){r(e)}})},2166:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(997);function a({Component:e,pageProps:t}){return r.jsx(e,{...t})}s(9605)},4081:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>m,getStaticProps:()=>x});var a=s(997),i=s(968),n=s.n(i),l=s(111),c=s(2800),o=s.n(c),d=s(5932),u=s(1664),h=s.n(u),p=s(7289),g=e([d]);function m({allPostsData:e}){return(0,a.jsxs)(l.Z,{home:!0,children:[a.jsx(n(),{children:a.jsx("title",{children:l.y})}),(0,a.jsxs)("section",{className:o().headingMd,children:[a.jsx("p",{children:"[Your Self Introduction]"}),(0,a.jsxs)("p",{children:["(This is a sample website - you’ll be building a site like this in"," ",a.jsx("a",{href:"https://nextjs.org/learn",children:"our Next.js tutorial"}),".)"]})]}),(0,a.jsxs)("section",{className:`${o().headingMd} ${o().padding1px}`,children:[a.jsx("h2",{className:o().headingLg,children:"Blog"}),a.jsx("ul",{className:o().list,children:e.map(({id:e,date:t,title:s})=>(0,a.jsxs)("li",{className:o().listItem,children:[a.jsx(h(),{href:`/posts/${e}`,children:s}),a.jsx("br",{}),a.jsx("small",{className:o().lightText,children:a.jsx(p.Z,{dateString:t})})]},e))})]})]})}async function x(){return{props:{allPostsData:(0,d.ld)()}}}d=(g.then?(await g)():g)[0],r()}catch(e){r(e)}})},9605:()=>{},8076:e=>{"use strict";e.exports=require("gray-matter")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1774:e=>{"use strict";e.exports=import("remark")},7740:e=>{"use strict";e.exports=import("remark-html")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[388,534],()=>s(6030));module.exports=r})();