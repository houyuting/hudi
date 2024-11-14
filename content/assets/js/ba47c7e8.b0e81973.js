"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[65246],{8787:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"use_cases","title":"Use Cases","description":"Near Real-Time Ingestion","source":"@site/versioned_docs/version-0.6.0/use_cases.md","sourceDirName":".","slug":"/use_cases","permalink":"/docs/0.6.0/use_cases","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.6.0/use_cases.md","tags":[],"version":"0.6.0","frontMatter":{"version":"0.6.0","title":"Use Cases","keywords":["hudi","data ingestion","etl","real time","use cases"],"summary":"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency","toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Quick-Start Guide","permalink":"/docs/0.6.0/quick-start-guide"},"next":{"title":"Writing Hudi Tables","permalink":"/docs/0.6.0/writing_data"}}');var i=s(74848),n=s(28453);const o={version:"0.6.0",title:"Use Cases",keywords:["hudi","data ingestion","etl","real time","use cases"],summary:"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},r=void 0,l={},c=[{value:"Near Real-Time Ingestion",id:"near-real-time-ingestion",level:2},{value:"Near Real-time Analytics",id:"near-real-time-analytics",level:2},{value:"Incremental Processing Pipelines",id:"incremental-processing-pipelines",level:2},{value:"Data Dispersal From DFS",id:"data-dispersal-from-dfs",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h2,{id:"near-real-time-ingestion",children:"Near Real-Time Ingestion"}),"\n",(0,i.jsxs)(a.p,{children:["Ingesting data from external sources like (event logs, databases, external sources) into a ",(0,i.jsx)(a.a,{href:"http://martinfowler.com/bliki/DataLake",children:"Hadoop Data Lake"})," is a well known problem.\nIn most (if not all) Hadoop deployments, it is unfortunately solved in a piecemeal fashion, using a medley of ingestion tools,\neven though this data is arguably the most valuable for the entire organization."]}),"\n",(0,i.jsxs)(a.p,{children:["For RDBMS ingestion, Hudi provides ",(0,i.jsx)(a.strong,{children:"faster loads via Upserts"}),", as opposed costly & inefficient bulk loads. For e.g, you can read the MySQL BIN log or ",(0,i.jsx)(a.a,{href:"https://sqoop.apache.org/docs/1.4.2/SqoopUserGuide#_incremental_imports",children:"Sqoop Incremental Import"})," and apply them to an\nequivalent Hudi table on DFS. This would be much faster/efficient than a ",(0,i.jsx)(a.a,{href:"https://sqoop.apache.org/docs/1.4.0-incubating/SqoopUserGuide#id1770457",children:"bulk merge job"}),"\nor ",(0,i.jsx)(a.a,{href:"http://hortonworks.com/blog/four-step-strategy-incremental-updates-hive/",children:"complicated handcrafted merge workflows"})]}),"\n",(0,i.jsxs)(a.p,{children:["For NoSQL datastores like ",(0,i.jsx)(a.a,{href:"http://cassandra.apache.org/",children:"Cassandra"})," / ",(0,i.jsx)(a.a,{href:"http://www.project-voldemort.com/voldemort/",children:"Voldemort"})," / ",(0,i.jsx)(a.a,{href:"https://hbase.apache.org/",children:"HBase"}),", even moderately big installations store billions of rows.\nIt goes without saying that ",(0,i.jsx)(a.strong,{children:"full bulk loads are simply infeasible"})," and more efficient approaches are needed if ingestion is to keep up with the typically high update volumes."]}),"\n",(0,i.jsxs)(a.p,{children:["Even for immutable data sources like ",(0,i.jsx)(a.a,{href:"https://kafka.apache.org",children:"Kafka"})," , Hudi helps ",(0,i.jsx)(a.strong,{children:"enforces a minimum file size on HDFS"}),", which improves NameNode health by solving one of the ",(0,i.jsx)(a.a,{href:"https://blog.cloudera.com/blog/2009/02/the-small-files-problem/",children:"age old problems in Hadoop land"})," in a holistic way. This is all the more important for event streams, since typically its higher volume (eg: click streams) and if not managed well, can cause serious damage to your Hadoop cluster."]}),"\n",(0,i.jsx)(a.p,{children:"Across all sources, Hudi adds the much needed ability to atomically publish new data to consumers via notion of commits, shielding them from partial ingestion failures"}),"\n",(0,i.jsx)(a.h2,{id:"near-real-time-analytics",children:"Near Real-time Analytics"}),"\n",(0,i.jsxs)(a.p,{children:["Typically, real-time ",(0,i.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Data_mart",children:"datamarts"})," are powered by specialized analytical stores such as ",(0,i.jsx)(a.a,{href:"http://druid.io/",children:"Druid"})," or ",(0,i.jsx)(a.a,{href:"http://www.memsql.com/",children:"Memsql"})," or ",(0,i.jsx)(a.a,{href:"http://opentsdb.net/",children:"even OpenTSDB"})," .\nThis is absolutely perfect for lower scale (",(0,i.jsx)(a.a,{href:"https://blog.twitter.com/2015/hadoop-filesystem-at-twitter",children:"relative to Hadoop installations like this"}),") data, that needs sub-second query responses such as system monitoring or interactive real-time analysis.\nBut, typically these systems end up getting abused for less interactive queries also since data on Hadoop is intolerably stale. This leads to under utilization & wasteful hardware/license costs."]}),"\n",(0,i.jsxs)(a.p,{children:["On the other hand, interactive SQL solutions on Hadoop such as Presto & SparkSQL excel in ",(0,i.jsx)(a.strong,{children:"queries that finish within few seconds"}),".\nBy bringing ",(0,i.jsx)(a.strong,{children:"data freshness to a few minutes"}),", Hudi can provide a much efficient alternative, as well unlock real-time analytics on ",(0,i.jsx)(a.strong,{children:"several magnitudes larger tables"})," stored in DFS.\nAlso, Hudi has no external dependencies (like a dedicated HBase cluster, purely used for real-time analytics) and thus enables faster analytics on much fresher analytics, without increasing the operational overhead."]}),"\n",(0,i.jsx)(a.h2,{id:"incremental-processing-pipelines",children:"Incremental Processing Pipelines"}),"\n",(0,i.jsxs)(a.p,{children:["One fundamental ability Hadoop provides is to build a chain of tables derived from each other via DAGs expressed as workflows.\nWorkflows often depend on new data being output by multiple upstream workflows and traditionally, availability of new data is indicated by a new DFS Folder/Hive Partition.\nLet's take a concrete example to illustrate this. An upstream workflow ",(0,i.jsx)(a.code,{children:"U"})," can create a Hive partition for every hour, with data for that hour (event_time) at the end of each hour (processing_time), providing effective freshness of 1 hour.\nThen, a downstream workflow ",(0,i.jsx)(a.code,{children:"D"}),", kicks off immediately after ",(0,i.jsx)(a.code,{children:"U"})," finishes, and does its own processing for the next hour, increasing the effective latency to 2 hours."]}),"\n",(0,i.jsxs)(a.p,{children:["The above paradigm simply ignores late arriving data i.e when ",(0,i.jsx)(a.code,{children:"processing_time"})," and ",(0,i.jsx)(a.code,{children:"event_time"})," drift apart.\nUnfortunately, in today's post-mobile & pre-IoT world, ",(0,i.jsx)(a.strong,{children:"late data from intermittently connected mobile devices & sensors are the norm, not an anomaly"}),".\nIn such cases, the only remedy to guarantee correctness is to ",(0,i.jsx)(a.a,{href:"https://falcon.apache.org/FalconDocumentation#Handling_late_input_data",children:"reprocess the last few hours"})," worth of data,\nover and over again each hour, which can significantly hurt the efficiency across the entire ecosystem. For e.g; imagine reprocessing TBs worth of data every hour across hundreds of workflows."]}),"\n",(0,i.jsxs)(a.p,{children:["Hudi comes to the rescue again, by providing a way to consume new data (including late data) from an upstream Hudi table ",(0,i.jsx)(a.code,{children:"HU"})," at a record granularity (not folders/partitions),\napply the processing logic, and efficiently update/reconcile late data with a downstream Hudi table ",(0,i.jsx)(a.code,{children:"HD"}),". Here, ",(0,i.jsx)(a.code,{children:"HU"})," and ",(0,i.jsx)(a.code,{children:"HD"})," can be continuously scheduled at a much more frequent schedule\nlike 15 mins, and providing an end-end latency of 30 mins at ",(0,i.jsx)(a.code,{children:"HD"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["To achieve this, Hudi has embraced similar concepts from stream processing frameworks like ",(0,i.jsx)(a.a,{href:"https://spark.apache.org/docs/latest/streaming-programming-guide#join-operations",children:"Spark Streaming"})," , Pub/Sub systems like ",(0,i.jsx)(a.a,{href:"http://kafka.apache.org/documentation/#theconsumer",children:"Kafka"}),"\nor database replication technologies like ",(0,i.jsx)(a.a,{href:"https://docs.oracle.com/cd/E11882_01/server.112/e16545/xstrm_cncpt.htm#XSTRM187",children:"Oracle XStream"}),".\nFor the more curious, a more detailed explanation of the benefits of Incremental Processing (compared to Stream Processing & Batch Processing) can be found ",(0,i.jsx)(a.a,{href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop",children:"here"})]}),"\n",(0,i.jsx)(a.h2,{id:"data-dispersal-from-dfs",children:"Data Dispersal From DFS"}),"\n",(0,i.jsxs)(a.p,{children:["A popular use-case for Hadoop, is to crunch data and then disperse it back to an online serving store, to be used by an application.\nFor e.g, a Spark Pipeline can ",(0,i.jsx)(a.a,{href:"https://eng.uber.com/telematics/",children:"determine hard braking events on Hadoop"})," and load them into a serving store like ElasticSearch, to be used by the Uber application to increase safe driving. Typical architectures for this employ a ",(0,i.jsx)(a.code,{children:"queue"})," between Hadoop and serving store, to prevent overwhelming the target serving store.\nA popular choice for this queue is Kafka and this model often results in ",(0,i.jsx)(a.strong,{children:"redundant storage of same data on DFS (for offline analysis on computed results) and Kafka (for dispersal)"})]}),"\n",(0,i.jsx)(a.p,{children:"Once again Hudi can efficiently solve this problem, by having the Spark Pipeline upsert output from\neach run into a Hudi table, which can then be incrementally tailed (just like a Kafka topic) for new data & written into the serving store."})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>o,x:()=>r});var t=s(96540);const i={},n=t.createContext(i);function o(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);