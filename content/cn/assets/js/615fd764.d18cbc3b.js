"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[69844],{15844:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"use_cases","title":"Use Cases","description":"Near Real-Time Ingestion","source":"@site/learn/use_cases.md","sourceDirName":".","slug":"/use_cases","permalink":"/cn/learn/use_cases","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Use Cases","keywords":["hudi","data ingestion","etl","real time","use cases"],"summary":"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency","toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"defaultSidebar"}');var i=t(74848),s=t(28453);const r={title:"Use Cases",keywords:["hudi","data ingestion","etl","real time","use cases"],summary:"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,l={},c=[{value:"Near Real-Time Ingestion",id:"near-real-time-ingestion",level:2},{value:"Data Deletion",id:"data-deletion",level:2},{value:"Unified Storage For Analytics",id:"unified-storage-for-analytics",level:2},{value:"Incremental Processing Pipelines",id:"incremental-processing-pipelines",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h2,{id:"near-real-time-ingestion",children:"Near Real-Time Ingestion"}),"\n",(0,i.jsxs)(a.p,{children:["Hudi offers some great benefits across ingestion of all kinds. Hudi helps ",(0,i.jsx)(a.strong,{children:"enforces a minimum file size on DFS"}),". This helps\nsolve the ",(0,i.jsx)(a.a,{href:"https://blog.cloudera.com/blog/2009/02/the-small-files-problem/",children:'"small files problem"'})," for HDFS and Cloud Stores alike,\nsignificantly improving query performance. Hudi adds the much needed ability to atomically commit new data, shielding queries from\never seeing partial writes and helping ingestion recover gracefully from failures."]}),"\n",(0,i.jsxs)(a.p,{children:["Ingesting data from OLTP sources like (event logs, databases, external sources) into a ",(0,i.jsx)(a.a,{href:"http://martinfowler.com/bliki/DataLake",children:"Data Lake"}),' is a common problem,\nthat is unfortunately solved in a piecemeal fashion, using a medley of ingestion tools. This "raw data" layer of the data lake often forms the bedrock on which\nmore value is created.']}),"\n",(0,i.jsxs)(a.p,{children:["For RDBMS ingestion, Hudi provides ",(0,i.jsx)(a.strong,{children:"faster loads via Upserts"}),", as opposed costly & inefficient bulk loads. It's very common to use a change capture solution like\n",(0,i.jsx)(a.a,{href:"http://debezium.io/",children:"Debezium"})," or ",(0,i.jsx)(a.a,{href:"https://docs.confluent.io/platform/current/connect/index",children:"Kafka Connect"})," or\n",(0,i.jsx)(a.a,{href:"https://sqoop.apache.org/docs/1.4.2/SqoopUserGuide#_incremental_imports",children:"Sqoop Incremental Import"})," and apply them to an\nequivalent Hudi table on DFS. For NoSQL datastores like ",(0,i.jsx)(a.a,{href:"http://cassandra.apache.org/",children:"Cassandra"})," / ",(0,i.jsx)(a.a,{href:"http://www.project-voldemort.com/voldemort/",children:"Voldemort"})," / ",(0,i.jsx)(a.a,{href:"https://hbase.apache.org/",children:"HBase"}),",\neven moderately big installations store billions of rows. It goes without saying that ",(0,i.jsx)(a.strong,{children:"full bulk loads are simply infeasible"})," and more efficient approaches\nare needed if ingestion is to keep up with the typically high update volumes."]}),"\n",(0,i.jsxs)(a.p,{children:["Even for immutable data sources like ",(0,i.jsx)(a.a,{href:"https://kafka.apache.org",children:"Kafka"}),", there is often a need to de-duplicate the incoming events against what's stored on DFS.\nHudi achieves this by ",(0,i.jsx)(a.a,{href:"http://hudi.apache.org/blog/hudi-indexing-mechanisms/",children:"employing indexes"})," of different kinds, quickly and efficiently."]}),"\n",(0,i.jsx)(a.p,{children:"All of this is seamlessly achieved by the Hudi DeltaStreamer tool, which is maintained in tight integration with rest of the code\nand we are always trying to add more capture sources, to make this easier for the users. The tool also has a continuous mode, where it\ncan self-manage clustering/compaction asynchronously, without blocking ingestion, significantly improving data freshness."}),"\n",(0,i.jsx)(a.h2,{id:"data-deletion",children:"Data Deletion"}),"\n",(0,i.jsxs)(a.p,{children:["Hudi also offers ability to delete the data stored in the data lake, and more so provides efficient ways of dealing with\nlarge write amplification, resulting from random deletes based on user_id (or any secondary key), by way of the ",(0,i.jsx)(a.code,{children:"Merge On Read"})," table types.\nHudi's elegant log based concurrency control, ensures that the ingestion/writing can continue happening,as a background compaction job\namortizes the cost of rewriting data/enforcing deletes."]}),"\n",(0,i.jsx)(a.p,{children:"Hudi also unlocks special capabilities like data clustering, which allow users to optimize the data layout for deletions. Specifically,\nusers can cluster older event log data based on user_id, such that, queries that evaluate candidates for data deletion can do so, while\nmore recent partitions are optimized for query performance and clustered on say timestamp."}),"\n",(0,i.jsx)(a.h2,{id:"unified-storage-for-analytics",children:"Unified Storage For Analytics"}),"\n",(0,i.jsxs)(a.p,{children:["The world we live in is polarized - even on data analytics storage - into real-time and offline/batch storage. Typically, real-time ",(0,i.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Data_mart",children:"datamarts"}),"\nare powered by specialized analytical stores such as ",(0,i.jsx)(a.a,{href:"http://druid.io/",children:"Druid"})," or ",(0,i.jsx)(a.a,{href:"http://www.memsql.com/",children:"Memsql"})," or ",(0,i.jsx)(a.a,{href:"https://clickhouse.tech/",children:"Clickhouse"}),", fed by event buses like\n",(0,i.jsx)(a.a,{href:"https://kafka.apache.org",children:"Kafka"})," or ",(0,i.jsx)(a.a,{href:"https://pulsar.apache.org",children:"Pulsar"}),". This model is prohibitively expensive, unless a small fraction of your data lake data\nneeds sub-second query responses such as system monitoring or interactive real-time analysis."]}),"\n",(0,i.jsx)(a.p,{children:"The same data gets ingested into data lake storage much later (say every few hours or so) and then runs through batch ETL pipelines, with intolerable data freshness\nto do any kind of near-realtime analytics. On the other hand, the data lakes provide access to interactive SQL engines like Presto/SparkSQL, which can horizontally scale\neasily and provide return even more complex queries, within few seconds."}),"\n",(0,i.jsxs)(a.p,{children:["By bringing streaming primitives to data lake storage, Hudi opens up new possibilities by being able to ingest data within few minutes and also author incremental data\npipelines that are orders of magnitude faster than traditional batch processing. By bringing ",(0,i.jsx)(a.strong,{children:"data freshness to a few minutes"}),", Hudi can provide a much efficient alternative,\nfor a large class of data applications, compared to real-time datamarts. Also, Hudi has no upfront server infrastructure investments\nand thus enables faster analytics on much fresher analytics, without increasing the operational overhead. This external ",(0,i.jsx)(a.a,{href:"https://www.analyticsinsight.net/can-big-data-solutions-be-affordable/",children:"article"}),"\nfurther validates this newer model."]}),"\n",(0,i.jsx)(a.h2,{id:"incremental-processing-pipelines",children:"Incremental Processing Pipelines"}),"\n",(0,i.jsxs)(a.p,{children:["Data Lake ETL typically involves building a chain of tables derived from each other via DAGs expressed as workflows. Workflows often depend on new data being output by\nmultiple upstream workflows and traditionally, availability of new data is indicated by a new DFS Folder/Hive Partition.\nLet's take a concrete example to illustrate this. An upstream workflow ",(0,i.jsx)(a.code,{children:"U"})," can create a Hive partition for every hour, with data for that hour (event_time) at the end of each hour (processing_time), providing effective freshness of 1 hour.\nThen, a downstream workflow ",(0,i.jsx)(a.code,{children:"D"}),", kicks off immediately after ",(0,i.jsx)(a.code,{children:"U"})," finishes, and does its own processing for the next hour, increasing the effective latency to 2 hours."]}),"\n",(0,i.jsxs)(a.p,{children:["The above paradigm simply ignores late arriving data i.e when ",(0,i.jsx)(a.code,{children:"processing_time"})," and ",(0,i.jsx)(a.code,{children:"event_time"})," drift apart.\nUnfortunately, in today's post-mobile & pre-IoT world, ",(0,i.jsx)(a.strong,{children:"late data from intermittently connected mobile devices & sensors are the norm, not an anomaly"}),".\nIn such cases, the only remedy to guarantee correctness is to reprocess the last few hours worth of data, over and over again each hour,\nwhich can significantly hurt the efficiency across the entire ecosystem. For e.g; imagine reprocessing TBs worth of data every hour across hundreds of workflows."]}),"\n",(0,i.jsxs)(a.p,{children:["Hudi comes to the rescue again, by providing a way to consume new data (including late data) from an upstream Hudi table ",(0,i.jsx)(a.code,{children:"HU"})," at a record granularity (not folders/partitions),\napply the processing logic, and efficiently update/reconcile late data with a downstream Hudi table ",(0,i.jsx)(a.code,{children:"HD"}),". Here, ",(0,i.jsx)(a.code,{children:"HU"})," and ",(0,i.jsx)(a.code,{children:"HD"})," can be continuously scheduled at a much more frequent schedule\nlike 15 mins, and providing an end-end latency of 30 mins at ",(0,i.jsx)(a.code,{children:"HD"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["To achieve this, Hudi has embraced similar concepts from stream processing frameworks like ",(0,i.jsx)(a.a,{href:"https://spark.apache.org/docs/latest/streaming-programming-guide#join-operations",children:"Spark Streaming"})," , Pub/Sub systems like ",(0,i.jsx)(a.a,{href:"http://kafka.apache.org/documentation/#theconsumer",children:"Kafka"}),"\n",(0,i.jsx)(a.a,{href:"https://flink.apache.org",children:"Flink"})," or database replication technologies like ",(0,i.jsx)(a.a,{href:"https://docs.oracle.com/cd/E11882_01/server.112/e16545/xstrm_cncpt.htm#XSTRM187",children:"Oracle XStream"}),".\nFor the more curious, a more detailed explanation of the benefits of Incremental Processing can be found ",(0,i.jsx)(a.a,{href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop",children:"here"})]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var n=t(96540);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);