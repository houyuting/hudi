"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[6559],{40410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"query_engine_setup","title":"Query Engine Setup","description":"Spark","source":"@site/versioned_docs/version-0.10.1/query_engine_setup.md","sourceDirName":".","slug":"/query_engine_setup","permalink":"/cn/docs/0.10.1/query_engine_setup","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/query_engine_setup.md","tags":[],"version":"0.10.1","frontMatter":{"title":"Query Engine Setup","summary":"In this page, we describe how to setup various query engines for Hudi.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"Configurations","permalink":"/cn/docs/0.10.1/configurations"},"next":{"title":"Performance","permalink":"/cn/docs/0.10.1/performance"}}');var i=t(74848),s=t(28453);const o={title:"Query Engine Setup",summary:"In this page, we describe how to setup various query engines for Hudi.",toc:!0,last_modified_at:null},a=void 0,d={},l=[{value:"Spark",id:"spark",level:2},{value:"PrestoDB",id:"prestodb",level:2},{value:"Presto Environment",id:"presto-environment",level:3},{value:"Query",id:"query",level:3},{value:"Trino",id:"trino",level:2},{value:"Hive",id:"hive",level:2},{value:"Redshift Spectrum",id:"redshift-spectrum",level:2},{value:"StarRocks",id:"starrocks",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"spark",children:"Spark"}),"\n",(0,i.jsxs)(n.p,{children:["The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi tables can be queried via the Spark datasource with a simple ",(0,i.jsx)(n.code,{children:"spark.read.parquet"}),".\nSee the ",(0,i.jsx)(n.a,{href:"/docs/quick-start-guide",children:"Spark Quick Start"})," for more examples of Spark datasource reading queries."]}),"\n",(0,i.jsxs)(n.p,{children:["If your Spark environment does not have the Hudi jars installed, add ",(0,i.jsx)(n.code,{children:"--jars <path to jar>/hudi-spark-bundle_2.11-<hudi version>.jar"})," to the classpath of drivers\nand executors. Alternatively, hudi-spark-bundle can also fetched via the ",(0,i.jsx)(n.code,{children:"--packages"})," options (e.g: ",(0,i.jsx)(n.code,{children:"--packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.3"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"prestodb",children:"PrestoDB"}),"\n",(0,i.jsx)(n.p,{children:"PrestoDB is a popular query engine, providing interactive query performance. PrestoDB currently supports snapshot querying on COPY_ON_WRITE tables.\nBoth snapshot and read optimized queries are supported on MERGE_ON_READ Hudi tables. Since PrestoDB-Hudi integration has evolved over time, the installation\ninstructions for PrestoDB would vary based on versions. Please check the below table for query types supported and installation instructions\nfor different versions of PrestoDB."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"PrestoDB Version"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Installation description"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Query types supported"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"< 0.233"}),(0,i.jsxs)(n.td,{children:["Requires the ",(0,i.jsx)(n.code,{children:"hudi-presto-bundle"})," jar to be placed into ",(0,i.jsx)(n.code,{children:"<presto_install>/plugin/hive-hadoop2/"}),", across the installation."]}),(0,i.jsx)(n.td,{children:"Snapshot querying on COW tables. Read optimized querying on MOR tables."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:">= 0.233"}),(0,i.jsx)(n.td,{children:"No action needed. Hudi (0.5.1-incubating) is a compile time dependency."}),(0,i.jsx)(n.td,{children:"Snapshot querying on COW tables. Read optimized querying on MOR tables."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:">= 0.240"}),(0,i.jsx)(n.td,{children:"No action needed. Hudi 0.5.3 version is a compile time dependency."}),(0,i.jsx)(n.td,{children:"Snapshot querying on both COW and MOR tables"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"presto-environment",children:"Presto Environment"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Configure Presto according to the ",(0,i.jsx)(n.a,{href:"https://prestodb.io/docs/current/installation/deployment.html",children:"Presto configuration document"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Configure hive catalog in ",(0,i.jsx)(n.code,{children:" /presto-server-0.2xxx/etc/catalog/hive.properties"})," as follows:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-properties",children:"connector.name=hive-hadoop2\nhive.metastore.uri=thrift://xxx.xxx.xxx.xxx:9083\nhive.config.resources=.../hadoop-2.x/etc/hadoop/core-site.xml,.../hadoop-2.x/etc/hadoop/hdfs-site.xml\n"})}),"\n",(0,i.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,i.jsx)(n.p,{children:"Beginning query by connecting hive metastore with presto client. The presto client connection command is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# The presto client connection command\n./presto --server xxx.xxx.xxx.xxx:9999 --catalog hive --schema default\n"})}),"\n",(0,i.jsx)(n.h2,{id:"trino",children:"Trino"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://trino.io/",children:"Trino"})," (formerly PrestoSQL) was forked off of PrestoDB a few years ago. Hudi supports 'Snapshot' queries for Copy-On-Write tables and 'Read Optimized' queries\nfor Merge-On-Read tables. This is through the initial input format based integration in PrestoDB (pre forking). This approach has\nknown performance limitations with very large tables, which has been since fixed on PrestoDB. We are working on replicating the same fixes on Trino as well."]})}),"\n",(0,i.jsxs)(n.p,{children:["To query Hudi tables on Trino, please place the ",(0,i.jsx)(n.code,{children:"hudi-trino-bundle"})," jar into the Hive connector installation ",(0,i.jsx)(n.code,{children:"<trino_install>/plugin/hive-hadoop2"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"hive",children:"Hive"}),"\n",(0,i.jsx)(n.p,{children:"In order for Hive to recognize Hudi tables and query correctly,"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the HiveServer2 needs to be provided with the ",(0,i.jsx)(n.code,{children:"hudi-hadoop-mr-bundle-x.y.z-SNAPSHOT.jar"})," in its ",(0,i.jsx)(n.a,{href:"https://www.cloudera.com/documentation/enterprise/5-6-x/topics/cm_mc_hive_udf#concept_nc3_mms_lr",children:"aux jars path"}),". This will ensure the input format\nclasses with its dependencies are available for query planning & execution."]}),"\n",(0,i.jsx)(n.li,{children:"For MERGE_ON_READ tables, additionally the bundle needs to be put on the hadoop/hive installation across the cluster, so that queries can pick up the custom RecordReader as well."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to setup above, for beeline cli access, the ",(0,i.jsx)(n.code,{children:"hive.input.format"})," variable needs to be set to the fully qualified path name of the\ninputformat ",(0,i.jsx)(n.code,{children:"org.apache.hudi.hadoop.HoodieParquetInputFormat"}),". For Tez, additionally the ",(0,i.jsx)(n.code,{children:"hive.tez.input.format"})," needs to be set\nto ",(0,i.jsx)(n.code,{children:"org.apache.hadoop.hive.ql.io.HiveInputFormat"}),". Then proceed to query the table like any other Hive table."]}),"\n",(0,i.jsx)(n.h2,{id:"redshift-spectrum",children:"Redshift Spectrum"}),"\n",(0,i.jsx)(n.p,{children:"Copy on Write Tables in Apache Hudi versions 0.5.2, 0.6.0, 0.7.0, 0.8.0, 0.9.0, 0.10.x, 0.11.x and 0.12.0 can be queried via Amazon Redshift Spectrum external tables.\nTo be able to query Hudi versions 0.10.0 and above please try latest versions of Redshift."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Hudi tables are supported only when AWS Glue Data Catalog is used. It's not supported when you use an Apache Hive metastore as the external catalog."})}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-external-tables.html#c-spectrum-column-mapping-hudi",children:"Redshift Spectrum Integration with Apache Hudi"}),"\nfor more details."]}),"\n",(0,i.jsx)(n.h2,{id:"starrocks",children:"StarRocks"}),"\n",(0,i.jsxs)(n.p,{children:["Copy on Write tables in Apache Hudi 0.10.0 and above can be queried via StarRocks external tables from StarRocks version 2.2.0.\nOnly snapshot queries are supported currently. In future releases Merge on Read tables will also be supported.\nPlease refer to ",(0,i.jsx)(n.a,{href:"https://docs.starrocks.com/en-us/2.2/using_starrocks/External_table#hudi-external-table",children:"StarRocks Hudi external table"}),"\nfor more details on the setup."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);