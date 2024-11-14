"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[44960],{38338:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"structure","title":"Structure","description":"Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical datasets over DFS (HDFS or cloud stores) and provides three logical views for query access.","source":"@site/versioned_docs/version-0.5.0/structure.md","sourceDirName":".","slug":"/structure","permalink":"/cn/docs/0.5.0/structure","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.0/structure.md","tags":[],"version":"0.5.0","frontMatter":{"version":"0.5.0","title":"Structure","keywords":["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],"summary":"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.","last_modified_at":"2019-12-30T19:59:57.000Z"}}');var a=s(74848),i=s(28453);const o={version:"0.5.0",title:"Structure",keywords:["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],summary:"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},n=void 0,c={},d=[];function l(e){const t={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical datasets over DFS (",(0,a.jsx)(t.a,{href:"http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign",children:"HDFS"})," or cloud stores) and provides three logical views for query access."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Read Optimized View"})," - Provides excellent query performance on pure columnar storage, much like plain ",(0,a.jsx)(t.a,{href:"https://parquet.apache.org/",children:"Parquet"})," tables."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Incremental View"})," - Provides a change stream out of the dataset to feed downstream jobs/ETLs."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Near-Real time Table"})," - Provides queries on real-time data, using a combination of columnar & row based storage (e.g Parquet + ",(0,a.jsx)(t.a,{href:"http://avro.apache.org/docs/current/mr",children:"Avro"}),")"]}),"\n"]}),"\n",(0,a.jsx)("figure",{children:(0,a.jsx)("img",{className:"docimage",src:"/assets/images/hudi_intro_1.png",alt:"hudi_intro_1.png"})}),"\n",(0,a.jsxs)(t.p,{children:["By carefully managing how data is laid out in storage & how it\u2019s exposed to queries, Hudi is able to power a rich data ecosystem where external sources can be ingested in near real-time and made available for interactive SQL Engines like ",(0,a.jsx)(t.a,{href:"https://prestodb.io",children:"Presto"})," & ",(0,a.jsx)(t.a,{href:"https://spark.apache.org/sql/",children:"Spark"}),", while at the same time capable of being consumed incrementally from processing/ETL frameworks like ",(0,a.jsx)(t.a,{href:"https://hive.apache.org/",children:"Hive"})," & ",(0,a.jsx)(t.a,{href:"https://spark.apache.org/docs/latest/",children:"Spark"})," to build derived (Hudi) datasets."]}),"\n",(0,a.jsxs)(t.p,{children:["Hudi broadly consists of a self contained Spark library to build datasets and integrations with existing query engines for data access. See ",(0,a.jsx)(t.a,{href:"/docs/quick-start-guide",children:"quickstart"})," for a demo."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>n});var r=s(96540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);