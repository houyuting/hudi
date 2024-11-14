"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[30035],{28201:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"structure","title":"Structure","description":"Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (HDFS or cloud stores) and provides three types of queries.","source":"@site/versioned_docs/version-0.5.3/structure.md","sourceDirName":".","slug":"/structure","permalink":"/cn/docs/0.5.3/structure","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.3/structure.md","tags":[],"version":"0.5.3","frontMatter":{"version":"0.5.3","title":"Structure","keywords":["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],"summary":"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.","last_modified_at":"2019-12-30T19:59:57.000Z"}}');var a=t(74848),n=t(28453);const o={version:"0.5.3",title:"Structure",keywords:["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],summary:"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},i=void 0,d={},c=[];function l(e){const r={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (",(0,a.jsx)(r.a,{href:"http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign",children:"HDFS"})," or cloud stores) and provides three types of queries."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Read Optimized query"})," - Provides excellent query performance on pure columnar storage, much like plain ",(0,a.jsx)(r.a,{href:"https://parquet.apache.org/",children:"Parquet"})," tables."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Incremental query"})," - Provides a change stream out of the dataset to feed downstream jobs/ETLs."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Snapshot query"})," - Provides queries on real-time data, using a combination of columnar & row based storage (e.g Parquet + ",(0,a.jsx)(r.a,{href:"http://avro.apache.org/docs/current/mr",children:"Avro"}),")"]}),"\n"]}),"\n",(0,a.jsx)("figure",{children:(0,a.jsx)("img",{className:"docimage",src:"/assets/images/hudi_intro_1.png",alt:"hudi_intro_1.png"})}),"\n",(0,a.jsxs)(r.p,{children:["By carefully managing how data is laid out in storage & how it\u2019s exposed to queries, Hudi is able to power a rich data ecosystem where external sources can be ingested in near real-time and made available for interactive SQL Engines like ",(0,a.jsx)(r.a,{href:"https://prestodb.io",children:"Presto"})," & ",(0,a.jsx)(r.a,{href:"https://spark.apache.org/sql/",children:"Spark"}),", while at the same time capable of being consumed incrementally from processing/ETL frameworks like ",(0,a.jsx)(r.a,{href:"https://hive.apache.org/",children:"Hive"})," & ",(0,a.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/",children:"Spark"})," to build derived (Hudi) tables."]}),"\n",(0,a.jsxs)(r.p,{children:["Hudi broadly consists of a self contained Spark library to build tables and integrations with existing query engines for data access. See ",(0,a.jsx)(r.a,{href:"/docs/quick-start-guide",children:"quickstart"})," for a demo."]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var s=t(96540);const a={},n=s.createContext(a);function o(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);