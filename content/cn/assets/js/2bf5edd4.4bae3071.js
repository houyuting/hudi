"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[41455],{69671:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"migration_guide","title":"Bootstrapping","description":"Hudi maintains metadata such as commit timeline and indexes to manage a table. The commit timelines helps to understand the actions happening on a table as well as the current state of a table. Indexes are used by Hudi to maintain a record key to file id mapping to efficiently locate a record. At the moment, Hudi supports writing only parquet columnar formats.","source":"@site/versioned_docs/version-0.11.0/migration_guide.md","sourceDirName":".","slug":"/migration_guide","permalink":"/cn/docs/0.11.0/migration_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.0/migration_guide.md","tags":[],"version":"0.11.0","frontMatter":{"title":"Bootstrapping","keywords":["hudi","migration","use case"],"summary":"In this page, we will discuss some available tools for migrating your existing table into a Hudi table","last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Google BigQuery","permalink":"/cn/docs/0.11.0/gcp_bigquery"},"next":{"title":"Compaction","permalink":"/cn/docs/0.11.0/compaction"}}');var n=a(74848),o=a(28453);const s={title:"Bootstrapping",keywords:["hudi","migration","use case"],summary:"In this page, we will discuss some available tools for migrating your existing table into a Hudi table",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},r=void 0,l={},d=[{value:"Approaches",id:"approaches",level:2},{value:"Use Hudi for new partitions alone",id:"use-hudi-for-new-partitions-alone",level:3},{value:"Convert existing table to Hudi",id:"convert-existing-table-to-hudi",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Hudi maintains metadata such as commit timeline and indexes to manage a table. The commit timelines helps to understand the actions happening on a table as well as the current state of a table. Indexes are used by Hudi to maintain a record key to file id mapping to efficiently locate a record. At the moment, Hudi supports writing only parquet columnar formats.\nTo be able to start using Hudi for your existing table, you will need to migrate your existing table into a Hudi managed table. There are a couple of ways to achieve this."}),"\n",(0,n.jsx)(t.h2,{id:"approaches",children:"Approaches"}),"\n",(0,n.jsx)(t.h3,{id:"use-hudi-for-new-partitions-alone",children:"Use Hudi for new partitions alone"}),"\n",(0,n.jsx)(t.p,{children:"Hudi can be used to manage an existing table without affecting/altering the historical data already present in the\ntable. Hudi has been implemented to be compatible with such a mixed table with a caveat that either the complete\nHive partition is Hudi managed or not. Thus the lowest granularity at which Hudi manages a table is a Hive\npartition. Start using the datasource API or the WriteClient to write to the table and make sure you start writing\nto a new partition or convert your last N partitions into Hudi instead of the entire table. Note, since the historical\npartitions are not managed by HUDI, none of the primitives provided by HUDI work on the data in those partitions. More concretely, one cannot perform upserts or incremental pull on such older partitions not managed by the HUDI table.\nTake this approach if your table is an append only type of table and you do not expect to perform any updates to existing (or non Hudi managed) partitions."}),"\n",(0,n.jsx)(t.h3,{id:"convert-existing-table-to-hudi",children:"Convert existing table to Hudi"}),"\n",(0,n.jsx)(t.p,{children:"Import your existing table into a Hudi managed table. Since all the data is Hudi managed, none of the limitations\nof Approach 1 apply here. Updates spanning any partitions can be applied to this table and Hudi will efficiently\nmake the update available to queries. Note that not only do you get to use all Hudi primitives on this table,\nthere are other additional advantages of doing this. Hudi automatically manages file sizes of a Hudi managed table\n. You can define the desired file size when converting this table and Hudi will ensure it writes out files\nadhering to the config. It will also ensure that smaller files later get corrected by routing some new inserts into\nsmall files rather than writing new small ones thus maintaining the health of your cluster."}),"\n",(0,n.jsx)(t.p,{children:"There are a few options when choosing this approach."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Option 1"}),"\nUse the HDFSParquetImporter tool. As the name suggests, this only works if your existing table is in parquet file format.\nThis tool essentially starts a Spark Job to read the existing parquet table and converts it into a HUDI managed table by re-writing all the data."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Option 2"}),"\nFor huge tables, this could be as simple as :"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'for partition in [list of partitions in source table] {\n        val inputDF = spark.read.format("any_input_format").load("partition_path")\n        inputDF.write.format("org.apache.hudi").option()....save("basePath")\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Option 3"}),"\nWrite your own custom logic of how to load an existing table into a Hudi managed one. Please read about the RDD API\n",(0,n.jsx)(t.a,{href:"/docs/quick-start-guide",children:"here"}),". Using the HDFSParquetImporter Tool. Once hudi has been built via ",(0,n.jsx)(t.code,{children:"mvn clean install -DskipTests"}),", the shell can be\nfired by via ",(0,n.jsx)(t.code,{children:"cd hudi-cli && ./hudi-cli.sh"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"hudi->hdfsparquetimport\n        --upsert false\n        --srcPath /user/parquet/table/basepath\n        --targetPath /user/hoodie/table/basepath\n        --tableName hoodie_table\n        --tableType COPY_ON_WRITE\n        --rowKeyField _row_key\n        --partitionPathField partitionStr\n        --parallelism 1500\n        --schemaFilePath /user/table/schema\n        --format parquet\n        --sparkMemory 6g\n        --retry 2\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var i=a(96540);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);