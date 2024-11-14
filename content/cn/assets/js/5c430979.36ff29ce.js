"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[60193],{18919:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"query_engine_setup","title":"Query Engine Setup","description":"Spark","source":"@site/versioned_docs/version-0.13.0/query_engine_setup.md","sourceDirName":".","slug":"/query_engine_setup","permalink":"/cn/docs/0.13.0/query_engine_setup","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.0/query_engine_setup.md","tags":[],"version":"0.13.0","frontMatter":{"title":"Query Engine Setup","summary":"In this page, we describe how to setup various query engines for Hudi.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"All Configurations","permalink":"/cn/docs/0.13.0/configurations"},"next":{"title":"Performance","permalink":"/cn/docs/0.13.0/performance"}}');var i=r(74848),s=r(28453);const o={title:"Query Engine Setup",summary:"In this page, we describe how to setup various query engines for Hudi.",toc:!0,last_modified_at:null},d=void 0,a={},c=[{value:"Spark",id:"spark",level:2},{value:"PrestoDB",id:"prestodb",level:2},{value:"Presto Environment",id:"presto-environment",level:3},{value:"Query",id:"query",level:3},{value:"Trino",id:"trino",level:2},{value:"Hive Connector",id:"hive-connector",level:3},{value:"Hudi Connector",id:"hudi-connector",level:3},{value:"Hive",id:"hive",level:2},{value:"Redshift Spectrum",id:"redshift-spectrum",level:2},{value:"Doris",id:"doris",level:2},{value:"StarRocks",id:"starrocks",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"spark",children:"Spark"}),"\n",(0,i.jsxs)(n.p,{children:["The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi tables can be queried via the Spark datasource with a simple ",(0,i.jsx)(n.code,{children:"spark.read.parquet"}),".\nSee the ",(0,i.jsx)(n.a,{href:"/docs/quick-start-guide",children:"Spark Quick Start"})," for more examples of Spark datasource reading queries."]}),"\n",(0,i.jsxs)(n.p,{children:["If your Spark environment does not have the Hudi jars installed, add ",(0,i.jsx)(n.code,{children:"--jars <path to jar>/hudi-spark-bundle_2.11-<hudi version>.jar"})," to the classpath of drivers\nand executors. Alternatively, hudi-spark-bundle can also fetched via the ",(0,i.jsx)(n.code,{children:"--packages"})," options (e.g: ",(0,i.jsx)(n.code,{children:"--packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.3"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"prestodb",children:"PrestoDB"}),"\n",(0,i.jsx)(n.p,{children:"PrestoDB is a popular query engine, providing interactive query performance.\nOne can use both Hive or Hudi connector (Presto version 0.275 onwards) for querying Hudi tables.\nBoth connectors currently support snapshot querying on COPY_ON_WRITE tables, and\nsnapshot and read optimized queries on MERGE_ON_READ Hudi tables."}),"\n",(0,i.jsx)(n.p,{children:"Since PrestoDB-Hudi integration has evolved over time, the installation\ninstructions for PrestoDB would vary based on versions.\nPlease check the below table for query types supported and installation instructions\nfor different versions of PrestoDB."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"PrestoDB Version"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Installation description"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Query types supported"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"< 0.233"}),(0,i.jsxs)(n.td,{children:["Requires the ",(0,i.jsx)(n.code,{children:"hudi-presto-bundle"})," jar to be placed into ",(0,i.jsx)(n.code,{children:"<presto_install>/plugin/hive-hadoop2/"}),", across the installation."]}),(0,i.jsx)(n.td,{children:"Snapshot querying on COW tables. Read optimized querying on MOR tables."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:">= 0.233"}),(0,i.jsx)(n.td,{children:"No action needed. Hudi (0.5.1-incubating) is a compile time dependency."}),(0,i.jsx)(n.td,{children:"Snapshot querying on COW tables. Read optimized querying on MOR tables."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:">= 0.240"}),(0,i.jsx)(n.td,{children:"No action needed. Hudi 0.5.3 version is a compile time dependency."}),(0,i.jsx)(n.td,{children:"Snapshot querying on both COW and MOR tables."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:">= 0.268"}),(0,i.jsx)(n.td,{children:"No action needed. Hudi 0.9.0 version is a compile time dependency."}),(0,i.jsx)(n.td,{children:"Snapshot querying on bootstrap tables."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:">= 0.272"}),(0,i.jsx)(n.td,{children:"No action needed. Hudi 0.10.1 version is a compile time dependency."}),(0,i.jsx)(n.td,{children:"File listing optimizations. Improved query performance."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:">= 0.275"}),(0,i.jsx)(n.td,{children:"No action needed. Hudi 0.11.0 version is a compile time dependency."}),(0,i.jsx)(n.td,{children:"All of the above. Native Hudi connector that is on par with Hive connector."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about the usage of Hudi connector, please checkout ",(0,i.jsx)(n.a,{href:"https://prestodb.io/docs/current/connector/hudi.html",children:"prestodb documentation"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Incremental queries and point in time queries are not supported either through the Hive connector or Hudi connector.\nHowever, it is in our roadmap and you can track the development under ",(0,i.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-3210",children:"HUDI-3210"}),"."]}),(0,i.jsxs)(n.p,{children:["There is a known issue (",(0,i.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-4290",children:"HUDI-4290"}),") for a clustered Hudi table. Presto query using version 0.272 or later\nmay contain duplicates in results if clustering is enabled. This issue has been fixed in Hudi version 0.12.0 and we need to upgrade ",(0,i.jsx)(n.code,{children:"hudi-presto-bundle"}),"\nin presto to version 0.12.0. It is tracked in ",(0,i.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-4605",children:"HUDI-4605"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"presto-environment",children:"Presto Environment"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Configure Presto according to the ",(0,i.jsx)(n.a,{href:"https://prestodb.io/docs/current/installation/deployment.html",children:"Presto configuration document"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Configure hive catalog in ",(0,i.jsx)(n.code,{children:" /presto-server-0.2xxx/etc/catalog/hive.properties"})," as follows:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-properties",children:"connector.name=hive-hadoop2\nhive.metastore.uri=thrift://xxx.xxx.xxx.xxx:9083\nhive.config.resources=.../hadoop-2.x/etc/hadoop/core-site.xml,.../hadoop-2.x/etc/hadoop/hdfs-site.xml\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Alternatively, configure hudi catalog in ",(0,i.jsx)(n.code,{children:" /presto-server-0.2xxx/etc/catalog/hudi.properties"})," as follows:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-properties",children:"connector.name=hudi\nhive.metastore.uri=thrift://xxx.xxx.xxx.xxx:9083\nhive.config.resources=.../hadoop-2.x/etc/hadoop/core-site.xml,.../hadoop-2.x/etc/hadoop/hdfs-site.xml\n"})}),"\n",(0,i.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,i.jsx)(n.p,{children:"Beginning query by connecting hive metastore with presto client. The presto client connection command is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# The presto client connection command where <catalog_name> is either hudi or hive,\n# and <schema_name> is the database name used in hive sync.\n./presto --server xxx.xxx.xxx.xxx:9999 --catalog <catalog_name> --schema <schema_name>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"trino",children:"Trino"}),"\n",(0,i.jsxs)(n.p,{children:["Just like PrestoDB, there are two ways to query Hudi tables using Trino i.e. either using ",(0,i.jsx)(n.a,{href:"https://trino.io/docs/current/connector/hive.html",children:"Hive"})," connector or the native\n",(0,i.jsx)(n.a,{href:"https://trino.io/docs/current/connector/hudi.html",children:"Hudi"})," connector (available since version 398). However, since version 411, Hive connector redirects to Hudi catalog for reading Hudi tables."]}),"\n",(0,i.jsx)(n.h3,{id:"hive-connector",children:"Hive Connector"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Trino Version"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Installation description"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Query types supported"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"< 406"}),(0,i.jsxs)(n.td,{children:["Requires the ",(0,i.jsx)(n.code,{children:"hudi-trino-bundle"})," jar to be placed into ",(0,i.jsx)(n.code,{children:"<trino_install>/plugin/hive"})]}),(0,i.jsx)(n.td,{children:"Snapshot querying on COW tables. Read optimized querying on MOR tables."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"> = 406"}),(0,i.jsxs)(n.td,{children:["Requires the ",(0,i.jsx)(n.code,{children:"hudi-trino-bundle"})," jar to be placed into ",(0,i.jsx)(n.code,{children:"<trino_install>/plugin/hive"})]}),(0,i.jsxs)(n.td,{children:["Snapshot querying on COW tables. Read optimized querying on MOR tables. ",(0,i.jsx)(n.strong,{children:"Redirection to Hudi catalog also supported."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"> = 411"}),(0,i.jsx)(n.td,{children:"NA"}),(0,i.jsxs)(n.td,{children:["Snapshot querying on COW tables. Read optimized querying on MOR tables. Hudi tables can be ",(0,i.jsx)(n.strong,{children:"only"})," queried by ",(0,i.jsx)(n.a,{href:"https://trino.io/docs/current/connector/hive.html#table-redirection",children:"table redirection"}),"."]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"If you are using Trino version 411 or greater, and also using Hive connector to query Hudi tables, please set the below config to support table redirection."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"hive.hudi-catalog-name=hudi\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It is recommended to use ",(0,i.jsx)(n.code,{children:"hudi-trino-bundle"})," version 0.12.2 or later for optimal query performance with Hive connector."]}),"\n",(0,i.jsx)(n.h3,{id:"hudi-connector",children:"Hudi Connector"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Trino Version"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Installation description"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Query types supported"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"< 398"}),(0,i.jsx)(n.td,{children:"NA - can only use Hive connector to query Hudi tables"}),(0,i.jsx)(n.td,{children:"Same as that of Hive connector version < 406."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"> = 398"}),(0,i.jsx)(n.td,{children:"NA - no need to place bundle jars manually, as they are compile-time dependency"}),(0,i.jsx)(n.td,{children:"Snapshot querying on COW tables. Read optimized querying on MOR tables."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about the usage of Hudi connector, please check out\nthe ",(0,i.jsx)(n.a,{href:"https://trino.io/docs/current/connector/hudi.html",children:"connector documentation"}),". Both the connectors are on par in\nterms of query support, i.e. 'Snapshot' queries for COW tables and 'Read Optimized' queries for MOR\ntables. We have an active ",(0,i.jsx)(n.a,{href:"https://github.com/trinodb/trino/pull/16034",children:"PR"})," under review to bring the performance of\nHudi connector on par with Hive connector. Furthermore, we\nexpect ",(0,i.jsx)(n.a,{href:"https://github.com/trinodb/trino/pull/14786",children:"MOR table snapshot query"})," support will soon be added to the Hudi\nconnector."]}),"\n",(0,i.jsx)(n.h2,{id:"hive",children:"Hive"}),"\n",(0,i.jsx)(n.p,{children:"In order for Hive to recognize Hudi tables and query correctly,"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the HiveServer2 needs to be provided with the ",(0,i.jsx)(n.code,{children:"hudi-hadoop-mr-bundle-x.y.z-SNAPSHOT.jar"})," in its ",(0,i.jsx)(n.a,{href:"https://www.cloudera.com/documentation/enterprise/5-6-x/topics/cm_mc_hive_udf.html#concept_nc3_mms_lr",children:"aux jars path"}),". This will ensure the input format\nclasses with its dependencies are available for query planning & execution."]}),"\n",(0,i.jsx)(n.li,{children:"For MERGE_ON_READ tables, additionally the bundle needs to be put on the hadoop/hive installation across the cluster, so that queries can pick up the custom RecordReader as well."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to setup above, for beeline cli access, the ",(0,i.jsx)(n.code,{children:"hive.input.format"})," variable needs to be set to the fully qualified path name of the\ninputformat ",(0,i.jsx)(n.code,{children:"org.apache.hudi.hadoop.HoodieParquetInputFormat"}),". For Tez, additionally the ",(0,i.jsx)(n.code,{children:"hive.tez.input.format"})," needs to be set\nto ",(0,i.jsx)(n.code,{children:"org.apache.hadoop.hive.ql.io.HiveInputFormat"}),". Then proceed to query the table like any other Hive table."]}),"\n",(0,i.jsx)(n.h2,{id:"redshift-spectrum",children:"Redshift Spectrum"}),"\n",(0,i.jsx)(n.p,{children:"Copy on Write Tables in Apache Hudi versions 0.5.2, 0.6.0, 0.7.0, 0.8.0, 0.9.0, 0.10.x, 0.11.x and 0.12.x can be queried via Amazon Redshift Spectrum external tables.\nTo be able to query Hudi versions 0.10.0 and above please try latest versions of Redshift."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Hudi tables are supported only when AWS Glue Data Catalog is used. It's not supported when you use an Apache Hive metastore as the external catalog."})}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-external-tables.html#c-spectrum-column-mapping-hudi",children:"Redshift Spectrum Integration with Apache Hudi"}),"\nfor more details."]}),"\n",(0,i.jsx)(n.h2,{id:"doris",children:"Doris"}),"\n",(0,i.jsxs)(n.p,{children:["Copy on Write Tables in Hudi version 0.10.0 can be queried via Doris external tables starting from Doris version 1.1.\nPlease refer to ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/docs/ecosystem/external-table/hudi-external-table/",children:"Doris Hudi external table"}),"\nfor more details on the setup."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The current default supported version of Hudi is 0.10.0 and has not been tested in other versions. More versions will be supported in the future."})}),"\n",(0,i.jsx)(n.h2,{id:"starrocks",children:"StarRocks"}),"\n",(0,i.jsxs)(n.p,{children:["For Copy-on-Write tables StarRocks provides support for Snapshot queries and for Merge-on-Read tables, StarRocks provides support for Snapshot and Read Optimized queries.\nPlease refer ",(0,i.jsx)(n.a,{href:"https://docs.starrocks.io/docs/data_source/catalog/hudi_catalog/",children:"StarRocks docs"})," for more details."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);