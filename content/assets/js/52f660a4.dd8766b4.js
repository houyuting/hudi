"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[6944],{26515:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>n,toc:()=>p});var n=a(53919),s=a(74848),o=a(28453);const r={title:"Ingesting Database changes via Sqoop/Hudi",excerpt:"Learn how to ingesting changes from a HUDI dataset using Sqoop/Hudi",author:"vinoth",category:"blog",tags:["how-to","apache hudi"]},i=void 0,c={authorsImageUrls:[void 0]},p=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Very simple in just 2 steps."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Step 1"}),": Extract new changes to users table in MySQL, as avro data files on DFS"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"// Command to extract incrementals using sqoop\nbin/sqoop import \\\n  -Dmapreduce.job.user.classpath.first=true \\\n  --connect jdbc:mysql://localhost/users \\\n  --username root \\\n  --password ******* \\\n  --table users \\\n  --as-avrodatafile \\\n  --target-dir \\ \n  s3:///tmp/sqoop/import-1/users\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Step 2"}),": Use your fav datasource to read extracted data and directly \u201cupsert\u201d the users table on DFS/Hive"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:'// Spark Datasource\nimport org.apache.hudi.DataSourceWriteOptions._\n// Use Spark datasource to read avro\nval inputDataset = spark.read.avro("s3://tmp/sqoop/import-1/users/*");\n     \n// save it as a Hudi dataset\ninputDataset.write.format("org.apache.hudi\u201d)\n  .option(HoodieWriteConfig.TABLE_NAME, "hoodie.users")\n  .option(RECORDKEY_FIELD_OPT_KEY(), "userID")\n  .option(PARTITIONPATH_FIELD_OPT_KEY(),"country")\n  .option(PRECOMBINE_FIELD_OPT_KEY(), "last_mod")\n  .option(OPERATION_OPT_KEY(), UPSERT_OPERATION_OPT_VAL())\n  .mode(SaveMode.Append)\n  .save("/path/on/dfs");\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Alternatively, you can also use the Hudi ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/writing_data#deltastreamer",children:"DeltaStreamer"})," tool with the DFSSource."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var n=a(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}},53919:e=>{e.exports=JSON.parse('{"permalink":"/blog/2019/09/09/ingesting-database-changes","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2019-09-09-ingesting-database-changes.md","source":"@site/blog/2019-09-09-ingesting-database-changes.md","title":"Ingesting Database changes via Sqoop/Hudi","description":"Very simple in just 2 steps.","date":"2019-09-09T00:00:00.000Z","tags":[{"inline":true,"label":"how-to","permalink":"/blog/tags/how-to"},{"inline":true,"label":"apache hudi","permalink":"/blog/tags/apache-hudi"}],"readingTime":0.605,"hasTruncateMarker":true,"authors":[{"name":"vinoth","key":null,"page":null}],"frontMatter":{"title":"Ingesting Database changes via Sqoop/Hudi","excerpt":"Learn how to ingesting changes from a HUDI dataset using Sqoop/Hudi","author":"vinoth","category":"blog","tags":["how-to","apache hudi"]},"unlisted":false,"prevItem":{"title":"Hudi On Hops","permalink":"/blog/2019/10/22/Hudi-On-Hops"},"nextItem":{"title":"Registering sample dataset to Hive via beeline","permalink":"/blog/2019/05/14/registering-dataset-to-hive"}}')}}]);