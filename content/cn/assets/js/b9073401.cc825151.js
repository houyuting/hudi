"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3323],{61614:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"clustering","title":"Clustering","description":"Background","source":"@site/versioned_docs/version-0.14.0/clustering.md","sourceDirName":".","slug":"/clustering","permalink":"/cn/docs/0.14.0/clustering","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/clustering.md","tags":[],"version":"0.14.0","frontMatter":{"title":"Clustering","summary":"In this page, we describe async compaction in Hudi.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"Compaction","permalink":"/cn/docs/0.14.0/compaction"},"next":{"title":"Metadata Indexing","permalink":"/cn/docs/0.14.0/metadata_indexing"}}');var s=i(74848),r=i(28453);const a={title:"Clustering",summary:"In this page, we describe async compaction in Hudi.",toc:!0,last_modified_at:null},l=void 0,o={},c=[{value:"Background",id:"background",level:2},{value:"How is compaction different from clustering?",id:"how-is-compaction-different-from-clustering",level:2},{value:"Clustering Architecture",id:"clustering-architecture",level:2},{value:"Overall, there are 2 steps to clustering",id:"overall-there-are-2-steps-to-clustering",level:3},{value:"Schedule clustering",id:"schedule-clustering",level:3},{value:"Execute clustering",id:"execute-clustering",level:3},{value:"Clustering Usecases",id:"clustering-usecases",level:2},{value:"Batching small files",id:"batching-small-files",level:3},{value:"Cluster by sort key",id:"cluster-by-sort-key",level:3},{value:"Clustering Strategies",id:"clustering-strategies",level:2},{value:"Plan Strategy",id:"plan-strategy",level:3},{value:"Size-based clustering strategies",id:"size-based-clustering-strategies",level:4},{value:"SparkSingleFileSortPlanStrategy",id:"sparksinglefilesortplanstrategy",level:4},{value:"SparkConsistentBucketClusteringPlanStrategy",id:"sparkconsistentbucketclusteringplanstrategy",level:4},{value:"Execution Strategy",id:"execution-strategy",level:3},{value:"Update Strategy",id:"update-strategy",level:3},{value:"Inline clustering",id:"inline-clustering",level:2},{value:"Async Clustering",id:"async-clustering",level:2},{value:"Setup Asynchronous Clustering",id:"setup-asynchronous-clustering",level:2},{value:"HoodieClusteringJob",id:"hoodieclusteringjob",level:3},{value:"HoodieStreamer",id:"hoodiestreamer",level:3},{value:"Spark Structured Streaming",id:"spark-structured-streaming",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(t.p,{children:["Apache Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing. In a data lake/warehouse, one of the key trade-offs is between ingestion speed and query performance. Data ingestion typically prefers small files to improve parallelism and make data available to queries as soon as possible. However, query performance degrades poorly with a lot of small files. Also, during ingestion, data is typically co-located based on arrival time. However, the query engines perform better when the data frequently queried is co-located together. In most architectures each of these systems tend to add optimizations independently to improve performance which hits limitations due to un-optimized data layouts. This doc introduces a new kind of table service called clustering ",(0,s.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance",children:"[RFC-19]"})," to reorganize data for improved query performance without compromising on ingestion speed."]}),"\n",(0,s.jsx)(t.h2,{id:"how-is-compaction-different-from-clustering",children:"How is compaction different from clustering?"}),"\n",(0,s.jsxs)(t.p,{children:["Hudi is modeled like a log-structured storage engine with multiple versions of the data.\nParticularly, ",(0,s.jsx)(t.a,{href:"/docs/table_types#merge-on-read-table",children:"Merge-On-Read"}),"\ntables in Hudi store data using a combination of base file in columnar format and row-based delta logs that contain\nupdates. Compaction is a way to merge the delta logs with base files to produce the latest file slices with the most\nrecent snapshot of data. Compaction helps to keep the query performance in check (larger delta log files would incur\nlonger merge times on query side). On the other hand, clustering is a data layout optimization technique. One can stitch\ntogether small files into larger files using clustering. Additionally, data can be clustered by sort key so that queries\ncan take advantage of data locality."]}),"\n",(0,s.jsx)(t.h2,{id:"clustering-architecture",children:"Clustering Architecture"}),"\n",(0,s.jsxs)(t.p,{children:["At a high level, Hudi provides different operations such as insert/upsert/bulk_insert through it\u2019s write client API to be able to write data to a Hudi table. To be able to choose a trade-off between file size and ingestion speed, Hudi provides a knob ",(0,s.jsx)(t.code,{children:"hoodie.parquet.small.file.limit"})," to be able to configure the smallest allowable file size. Users are able to configure the small file ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations/#hoodieparquetsmallfilelimit",children:"soft limit"})," to ",(0,s.jsx)(t.code,{children:"0"})," to force new data to go into a new set of filegroups or set it to a higher value to ensure new data gets \u201cpadded\u201d to existing files until it meets that limit that adds to ingestion latencies."]}),"\n",(0,s.jsx)(t.p,{children:"To be able to support an architecture that allows for fast ingestion without compromising query performance, we have introduced a \u2018clustering\u2019 service to rewrite the data to optimize Hudi data lake file layout."}),"\n",(0,s.jsx)(t.p,{children:"Clustering table service can run asynchronously or synchronously adding a new action type called \u201cREPLACE\u201d, that will mark the clustering action in the Hudi metadata timeline."}),"\n",(0,s.jsx)(t.h3,{id:"overall-there-are-2-steps-to-clustering",children:"Overall, there are 2 steps to clustering"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Scheduling clustering: Create a clustering plan using a pluggable clustering strategy."}),"\n",(0,s.jsx)(t.li,{children:"Execute clustering: Process the plan using an execution strategy to create new files and replace old files."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"schedule-clustering",children:"Schedule clustering"}),"\n",(0,s.jsx)(t.p,{children:"Following steps are followed to schedule clustering."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Identify files that are eligible for clustering: Depending on the clustering strategy chosen, the scheduling logic will identify the files eligible for clustering."}),"\n",(0,s.jsx)(t.li,{children:"Group files that are eligible for clustering based on specific criteria. Each group is expected to have data size in multiples of \u2018targetFileSize\u2019. Grouping is done as part of \u2018strategy\u2019 defined in the plan. Additionally, there is an option to put a cap on group size to improve parallelism and avoid shuffling large amounts of data."}),"\n",(0,s.jsxs)(t.li,{children:["Finally, the clustering plan is saved to the timeline in an avro ",(0,s.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/avro/HoodieClusteringPlan.avsc",children:"metadata format"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"execute-clustering",children:"Execute clustering"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Read the clustering plan and get the \u2018clusteringGroups\u2019 that mark the file groups that need to be clustered."}),"\n",(0,s.jsx)(t.li,{children:"For each group, we instantiate appropriate strategy class with strategyParams (example: sortColumns) and apply that strategy to rewrite the data."}),"\n",(0,s.jsxs)(t.li,{children:["Create a \u201cREPLACE\u201d commit and update the metadata in ",(0,s.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieReplaceCommitMetadata.java",children:"HoodieReplaceCommitMetadata"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Clustering Service builds on Hudi\u2019s MVCC based design to allow for writers to continue to insert new data while clustering action runs in the background to reformat data layout, ensuring snapshot isolation between concurrent readers and writers."}),"\n",(0,s.jsx)(t.p,{children:"NOTE: Clustering can only be scheduled for tables / partitions not receiving any concurrent updates. In the future, concurrent updates use-case will be supported as well."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Clustering example",src:i(94367).A+"",width:"1200",height:"600"}),"\n",(0,s.jsx)(t.em,{children:"Figure: Illustrating query performance improvements by clustering"})]}),"\n",(0,s.jsx)(t.h2,{id:"clustering-usecases",children:"Clustering Usecases"}),"\n",(0,s.jsx)(t.h3,{id:"batching-small-files",children:"Batching small files"}),"\n",(0,s.jsx)(t.p,{children:"As mentioned in the intro, streaming ingestion generally results in smaller files in your data lake. But having a lot of\nsuch small files could lead to higher query latency. From our experience supporting community users, there are quite a\nfew users who are using Hudi just for small file handling capabilities. So, you could employ clustering to batch a lot\nof such small files into larger ones."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Batching small files",src:i(50275).A+"",width:"1280",height:"720"})}),"\n",(0,s.jsx)(t.h3,{id:"cluster-by-sort-key",children:"Cluster by sort key"}),"\n",(0,s.jsx)(t.p,{children:"Another classic problem in data lake is the arrival time vs event time problem. Generally you write data based on\narrival time, while query predicates do not sit well with it. With clustering, you can re-write your data by sorting\nbased on query predicates and so, your data skipping will be very efficient and your query can ignore scanning a lot of\nunnecessary data."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Batching small files",src:i(44482).A+"",width:"1280",height:"720"})}),"\n",(0,s.jsx)(t.h2,{id:"clustering-strategies",children:"Clustering Strategies"}),"\n",(0,s.jsx)(t.p,{children:"On a high level, clustering creates a plan based on a configurable strategy, groups eligible files based on specific\ncriteria and then executes the plan. As mentioned before, clustering plan as well as execution depends on configurable\nstrategy. These strategies can be broadly classified into three types: clustering plan strategy, execution strategy and\nupdate strategy."}),"\n",(0,s.jsx)(t.h3,{id:"plan-strategy",children:"Plan Strategy"}),"\n",(0,s.jsxs)(t.p,{children:["This strategy comes into play while creating clustering plan. It helps to decide what file groups should be clustered\nand how many output file groups should the clustering produce. Note that these strategies are easily pluggable using the\nconfig ",(0,s.jsx)(t.a,{href:"/docs/configurations#hoodieclusteringplanstrategyclass",children:"hoodie.clustering.plan.strategy.class"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Different plan strategies are as follows:"}),"\n",(0,s.jsx)(t.h4,{id:"size-based-clustering-strategies",children:"Size-based clustering strategies"}),"\n",(0,s.jsxs)(t.p,{children:["This strategy creates clustering groups based on max size allowed per group. Also, it excludes files that are greater\nthan the small file limit from the clustering plan. Available strategies depending on write client\nare: ",(0,s.jsx)(t.code,{children:"SparkSizeBasedClusteringPlanStrategy"}),", ",(0,s.jsx)(t.code,{children:"FlinkSizeBasedClusteringPlanStrategy"}),"\nand ",(0,s.jsx)(t.code,{children:"JavaSizeBasedClusteringPlanStrategy"}),". Furthermore, Hudi provides flexibility to include or exclude partitions for\nclustering, tune the file size limits, maximum number of output groups. Please refer to ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringplanstrategysmallfilelimit",children:"hoodie.clustering.plan.strategy.small.file.limit"}),"\n, ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringplanstrategymaxnumgroups",children:"hoodie.clustering.plan.strategy.max.num.groups"}),", ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringplanstrategymaxbytespergroup",children:"hoodie.clustering.plan.strategy.max.bytes.per.group"}),"\n, ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringplanstrategytargetfilemaxbytes",children:"hoodie.clustering.plan.strategy.target.file.max.bytes"})," for more details."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Name"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.clustering.plan.strategy.partition.selected"}),(0,s.jsxs)(t.td,{children:["N/A ",(0,s.jsx)(t.strong,{children:"(Required)"})]}),(0,s.jsxs)(t.td,{children:["Comma separated list of partitions to run clustering",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: PARTITION_SELECTED"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Since Version: 0.11.0"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.clustering.plan.strategy.partition.regex.pattern"}),(0,s.jsxs)(t.td,{children:["N/A ",(0,s.jsx)(t.strong,{children:"(Required)"})]}),(0,s.jsxs)(t.td,{children:["Filter clustering partitions that matched regex pattern",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: PARTITION_REGEX_PATTERN"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Since Version: 0.11.0"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.clustering.plan.partition.filter.mode"}),(0,s.jsx)(t.td,{children:"NONE (Optional)"}),(0,s.jsxs)(t.td,{children:["Partition filter mode used in the creation of clustering plan. Possible values:",(0,s.jsx)("br",{}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"NONE"}),": Do not filter partitions. The clustering plan will include all partitions that have clustering candidates."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"RECENT_DAYS"}),": This filter assumes that your data is partitioned by date. The clustering plan will only include partitions from K days ago to N days ago, where K >= N. K is determined by ",(0,s.jsx)(t.code,{children:"hoodie.clustering.plan.strategy.daybased.lookback.partitions"})," and N is determined by ",(0,s.jsx)(t.code,{children:"hoodie.clustering.plan.strategy.daybased.skipfromlatest.partitions"}),"."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"SELECTED_PARTITIONS"}),": The clustering plan will include only partition paths with names that sort within the inclusive range [",(0,s.jsx)(t.code,{children:"hoodie.clustering.plan.strategy.cluster.begin.partition"}),", ",(0,s.jsx)(t.code,{children:"hoodie.clustering.plan.strategy.cluster.end.partition"}),"]."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"DAY_ROLLING"}),": To determine the partitions in the clustering plan, the eligible partitions will be sorted in ascending order. Each partition will have an index i in that list. The clustering plan will only contain partitions such that i mod 24 = H, where H is the current hour of the day (from 0 to 23)."]})]}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: PLAN_PARTITION_FILTER_MODE_NAME"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Since Version: 0.11.0"})]})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"sparksinglefilesortplanstrategy",children:"SparkSingleFileSortPlanStrategy"}),"\n",(0,s.jsxs)(t.p,{children:["In this strategy, clustering group for each partition is built in the same way as ",(0,s.jsx)(t.code,{children:"SparkSizeBasedClusteringPlanStrategy"}),"\n. The difference is that the output group is 1 and file group id remains the same,\nwhile ",(0,s.jsx)(t.code,{children:"SparkSizeBasedClusteringPlanStrategy"})," can create multiple file groups with newer fileIds."]}),"\n",(0,s.jsx)(t.h4,{id:"sparkconsistentbucketclusteringplanstrategy",children:"SparkConsistentBucketClusteringPlanStrategy"}),"\n",(0,s.jsx)(t.p,{children:"This strategy is specifically used for consistent bucket index. This will be leveraged to expand your bucket index (from\nstatic partitioning to dynamic). Typically, users don\u2019t need to use this strategy. Hudi internally uses this for\ndynamically expanding the buckets for bucket index datasets."}),"\n",(0,s.jsx)(t.admonition,{title:"The latter two strategies are applicable only for the Spark engine.",type:"note"}),"\n",(0,s.jsx)(t.h3,{id:"execution-strategy",children:"Execution Strategy"}),"\n",(0,s.jsxs)(t.p,{children:["After building the clustering groups in the planning phase, Hudi applies execution strategy, for each group, primarily\nbased on sort columns and size. The strategy can be specified using the\nconfig ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringexecutionstrategyclass",children:"hoodie.clustering.execution.strategy.class"}),". By\ndefault, Hudi sorts the file groups in the plan by the specified columns, while meeting the configured target file\nsizes."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Name"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.clustering.execution.strategy.class"}),(0,s.jsx)(t.td,{children:"org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy (Optional)"}),(0,s.jsxs)(t.td,{children:["Config to provide a strategy class (subclass of RunClusteringStrategy) to define how the  clustering plan is executed. By default, we sort the file groups in th plan by the specified columns, while  meeting the configured target file sizes.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: EXECUTION_STRATEGY_CLASS_NAME"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Since Version: 0.7.0"})]})]})})]}),"\n",(0,s.jsx)(t.p,{children:"The available strategies are as follows:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SPARK_SORT_AND_SIZE_EXECUTION_STRATEGY"}),": Uses bulk_insert to re-write data from input file groups.","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Set ",(0,s.jsx)(t.code,{children:"hoodie.clustering.execution.strategy.class"}),"\nto ",(0,s.jsx)(t.code,{children:"org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hoodie.clustering.plan.strategy.sort.columns"}),": Columns to sort the data while clustering. This goes in\nconjunction with layout optimization strategies depending on your query predicates. One can set comma separated\nlist of columns that needs to be sorted in this config."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"JAVA_SORT_AND_SIZE_EXECUTION_STRATEGY"}),": Similar to ",(0,s.jsx)(t.code,{children:"SPARK_SORT_AND_SIZE_EXECUTION_STRATEGY"}),", for the Java and Flink\nengines. Set ",(0,s.jsx)(t.code,{children:"hoodie.clustering.execution.strategy.class"}),"\nto ",(0,s.jsx)(t.code,{children:"org.apache.hudi.client.clustering.run.strategy.JavaSortAndSizeExecutionStrategy"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SPARK_CONSISTENT_BUCKET_EXECUTION_STRATEGY"}),": As the name implies, this is applicable to dynamically expand\nconsistent bucket index and only applicable to the Spark engine. Set ",(0,s.jsx)(t.code,{children:"hoodie.clustering.execution.strategy.class"}),"\nto ",(0,s.jsx)(t.code,{children:"org.apache.hudi.client.clustering.run.strategy.SparkConsistentBucketClusteringExecutionStrategy"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"update-strategy",children:"Update Strategy"}),"\n",(0,s.jsxs)(t.p,{children:["Currently, clustering can only be scheduled for tables/partitions not receiving any concurrent updates. By default,\nthe config for update strategy - ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringupdatesstrategy",children:(0,s.jsx)(t.code,{children:"hoodie.clustering.updates.strategy"})})," is set to ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"SparkRejectUpdateStrategy"})}),". If some file group has updates during clustering then it will reject updates and throw an\nexception. However, in some use-cases updates are very sparse and do not touch most file groups. The default strategy to\nsimply reject updates does not seem fair. In such use-cases, users can set the config to ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"SparkAllowUpdateStrategy"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["We discussed the critical strategy configurations. All other configurations related to clustering are\nlisted ",(0,s.jsx)(t.a,{href:"/docs/configurations/#Clustering-Configs",children:"here"}),". Out of this list, a few configurations that will be very useful\nfor inline or async clustering are shown below with code samples."]}),"\n",(0,s.jsx)(t.h2,{id:"inline-clustering",children:"Inline clustering"}),"\n",(0,s.jsx)(t.p,{children:"Inline clustering happens synchronously with the regular ingestion writer, which means the next round of ingestion\ncannot proceed until the clustering is complete. Inline clustering can be setup easily using spark dataframe options.\nSee sample below"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\n\nval df =  //generate data frame\ndf.write.format("org.apache.hudi").\n        options(getQuickstartWriteConfigs).\n        option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n        option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n        option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n        option(TABLE_NAME, "tableName").\n        option("hoodie.parquet.small.file.limit", "0").\n        option("hoodie.clustering.inline", "true").\n        option("hoodie.clustering.inline.max.commits", "4").\n        option("hoodie.clustering.plan.strategy.target.file.max.bytes", "1073741824").\n        option("hoodie.clustering.plan.strategy.small.file.limit", "629145600").\n        option("hoodie.clustering.plan.strategy.sort.columns", "column1,column2"). //optional, if sorting is needed as part of rewriting data\n        mode(Append).\n        save("dfs://location");\n'})}),"\n",(0,s.jsx)(t.h2,{id:"async-clustering",children:"Async Clustering"}),"\n",(0,s.jsxs)(t.p,{children:["Async clustering runs the clustering table service in the background without blocking the regular ingestions writers.\nHudi supports ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/concurrency_control#enabling-multi-writing",children:"multi-writers"})," which provides\nsnapshot isolation between multiple table services, thus allowing writers to continue with ingestion while clustering\nruns in the background."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Name"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.clustering.async.enabled"}),(0,s.jsx)(t.td,{children:"false (Optional)"}),(0,s.jsxs)(t.td,{children:["Enable running of clustering service, asynchronously as inserts happen on the table.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: ASYNC_CLUSTERING_ENABLE"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Since Version: 0.7.0"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.clustering.async.max.commits"}),(0,s.jsx)(t.td,{children:"4 (Optional)"}),(0,s.jsxs)(t.td,{children:["Config to control frequency of async clustering",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: ASYNC_CLUSTERING_MAX_COMMITS"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Since Version: 0.9.0"})]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"setup-asynchronous-clustering",children:"Setup Asynchronous Clustering"}),"\n",(0,s.jsxs)(t.p,{children:["Users can leverage ",(0,s.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-SetupforAsyncclusteringJob",children:"HoodieClusteringJob"}),"\nto setup 2-step asynchronous clustering."]}),"\n",(0,s.jsx)(t.h3,{id:"hoodieclusteringjob",children:"HoodieClusteringJob"}),"\n",(0,s.jsxs)(t.p,{children:["By specifying the ",(0,s.jsx)(t.code,{children:"scheduleAndExecute"})," mode both schedule as well as clustering can be achieved in the same step.\nThe appropriate mode can be specified using ",(0,s.jsx)(t.code,{children:"-mode"})," or ",(0,s.jsx)(t.code,{children:"-m"})," option. There are three modes:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"schedule"}),": Make a clustering plan. This gives an instant which can be passed in execute mode."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"execute"}),": Execute a clustering plan at a particular instant. If no instant-time is specified, HoodieClusteringJob will execute for the earliest instant on the Hudi timeline."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"scheduleAndExecute"}),": Make a clustering plan first and execute that plan immediately."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Note that to run this job while the original writer is still running, please enable multi-writing:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\n"})}),"\n",(0,s.jsx)(t.p,{children:"A sample spark-submit command to setup HoodieClusteringJob is as below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"spark-submit \\\n--class org.apache.hudi.utilities.HoodieClusteringJob \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clusteringjob.properties \\\n--mode scheduleAndExecute \\\n--base-path /path/to/hudi_table/basePath \\\n--table-name hudi_table_schedule_clustering \\\n--spark-memory 1g\n"})}),"\n",(0,s.jsxs)(t.p,{children:["A sample ",(0,s.jsx)(t.code,{children:"clusteringjob.properties"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"hoodie.clustering.async.enabled=true\nhoodie.clustering.async.max.commits=4\nhoodie.clustering.plan.strategy.target.file.max.bytes=1073741824\nhoodie.clustering.plan.strategy.small.file.limit=629145600\nhoodie.clustering.execution.strategy.class=org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy\nhoodie.clustering.plan.strategy.sort.columns=column1,column2\n"})}),"\n",(0,s.jsx)(t.h3,{id:"hoodiestreamer",children:"HoodieStreamer"}),"\n",(0,s.jsxs)(t.p,{children:["This brings us to our users' favorite utility in Hudi. Now, we can trigger asynchronous clustering with Hudi Streamer.\nJust set the ",(0,s.jsx)(t.code,{children:"hoodie.clustering.async.enabled"})," config to true and specify other clustering config in properties file\nwhose location can be pased as ",(0,s.jsx)(t.code,{children:"\u2014props"})," when starting the Hudi Streamer (just like in the case of HoodieClusteringJob)."]}),"\n",(0,s.jsx)(t.p,{children:"A sample spark-submit command to setup HoodieStreamer is as below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"spark-submit \\\n--class org.apache.hudi.utilities.streamer.HoodieStreamer \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clustering_kafka.properties \\\n--schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n--source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n--source-ordering-field impresssiontime \\\n--table-type COPY_ON_WRITE \\\n--target-base-path /path/to/hudi_table/basePath \\\n--target-table impressions_cow_cluster \\\n--op INSERT \\\n--hoodie-conf hoodie.clustering.async.enabled=true \\\n--continuous\n"})}),"\n",(0,s.jsx)(t.h3,{id:"spark-structured-streaming",children:"Spark Structured Streaming"}),"\n",(0,s.jsx)(t.p,{children:"We can also enable asynchronous clustering with Spark structured streaming sink as shown below."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:'val commonOpts = Map(\n   "hoodie.insert.shuffle.parallelism" -> "4",\n   "hoodie.upsert.shuffle.parallelism" -> "4",\n   DataSourceWriteOptions.RECORDKEY_FIELD.key -> "_row_key",\n   DataSourceWriteOptions.PARTITIONPATH_FIELD.key -> "partition",\n   DataSourceWriteOptions.PRECOMBINE_FIELD.key -> "timestamp",\n   HoodieWriteConfig.TBL_NAME.key -> "hoodie_test"\n)\n\ndef getAsyncClusteringOpts(isAsyncClustering: String, \n                           clusteringNumCommit: String, \n                           executionStrategy: String):Map[String, String] = {\n   commonOpts + (DataSourceWriteOptions.ASYNC_CLUSTERING_ENABLE.key -> isAsyncClustering,\n           HoodieClusteringConfig.ASYNC_CLUSTERING_MAX_COMMITS.key -> clusteringNumCommit,\n           HoodieClusteringConfig.EXECUTION_STRATEGY_CLASS_NAME.key -> executionStrategy\n   )\n}\n\ndef initStreamingWriteFuture(hudiOptions: Map[String, String]): Future[Unit] = {\n   val streamingInput = // define the source of streaming\n   Future {\n      println("streaming starting")\n      streamingInput\n              .writeStream\n              .format("org.apache.hudi")\n              .options(hudiOptions)\n              .option("checkpointLocation", basePath + "/checkpoint")\n              .mode(Append)\n              .start()\n              .awaitTermination(10000)\n      println("streaming ends")\n   }\n}\n\ndef structuredStreamingWithClustering(): Unit = {\n   val df = //generate data frame\n   val hudiOptions = getClusteringOpts("true", "1", "org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy")\n   val f1 = initStreamingWriteFuture(hudiOptions)\n   Await.result(f1, Duration.Inf)\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},94367:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/example_perf_improvement-acd223093d7c84fb6f0a896dcb571737.png"},50275:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/clustering_small_files-060489fdacfa64a9c16c82a06e7d6c50.gif"},44482:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/clustering_sort-727259cb20686386dcf5406b53d67ee5.gif"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);