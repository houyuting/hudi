"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[49112],{92114:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"metadata_indexing","title":"Indexing","description":"Hudi maintains a scalable metadata that has some auxiliary data about the table.","source":"@site/docs/metadata_indexing.md","sourceDirName":".","slug":"/metadata_indexing","permalink":"/docs/next/metadata_indexing","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/metadata_indexing.md","tags":[],"version":"current","frontMatter":{"title":"Indexing","summary":"In this page, we describe how to run metadata indexing asynchronously.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"Clustering","permalink":"/docs/next/clustering"},"next":{"title":"Auto Rollbacks","permalink":"/docs/next/rollbacks"}}');var a=i(74848),r=i(28453);const o={title:"Indexing",summary:"In this page, we describe how to run metadata indexing asynchronously.",toc:!0,last_modified_at:null},d=void 0,s={},l=[{value:"Concurrent Indexing",id:"concurrent-indexing",level:2},{value:"Index Creation Using SQL",id:"index-creation-using-sql",level:2},{value:"Index Creation Using Datasource",id:"index-creation-using-datasource",level:2},{value:"Setup Async Indexing",id:"setup-async-indexing",level:2},{value:"Configurations",id:"configurations",level:3},{value:"Schedule indexing",id:"schedule-indexing",level:3},{value:"Execute Indexing",id:"execute-indexing",level:3},{value:"Drop Index",id:"drop-index",level:3},{value:"Caveats",id:"caveats",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Hudi maintains a scalable ",(0,a.jsx)(n.a,{href:"/docs/metadata",children:"metadata"})," that has some auxiliary data about the table.\nThe ",(0,a.jsx)(n.a,{href:"https://www.onehouse.ai/blog/introducing-multi-modal-index-for-the-lakehouse-in-apache-hudi",children:"pluggable indexing subsystem"}),"\nof Hudi depends on the metadata table. Different types of index, from ",(0,a.jsx)(n.code,{children:"files"})," index for locating records efficiently\nto ",(0,a.jsx)(n.code,{children:"column_stats"})," index for data skipping, are part of the metadata table. A fundamental tradeoff in any data system\nthat supports indices is to balance the write throughput with index updates. A brute-force way is to lock out the writes\nwhile indexing. Hudi supports index creation using SQL, Datasource as well as async indexing. However, very large tables\ncan take hours to index. This is where Hudi's novel concurrent indexing comes into play."]}),"\n",(0,a.jsx)(n.h2,{id:"concurrent-indexing",children:"Concurrent Indexing"}),"\n",(0,a.jsx)(n.p,{children:"Indexes in Hudi are created in two phases and uses a mix of optimistic concurrency control and multi-version concurrency control techniques. The two\nphase approach ensures that the other writers are unblocked."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Scheduling & Planning"})," : This is the first phase which schedules an indexing plan and is protected by a lock. Indexing plan considers all the completed commits upto indexing instant."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Execution"})," : This phase creates the index files as mentioned in the index plan. At the end of the phase Hudi ensures the completed commits after indexing instant used already created index plan to add corresponding index metadata. This check is protected by a metadata table lock and in case of failures indexing is aborted."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["We can now create different indexes and metadata, including ",(0,a.jsx)(n.code,{children:"bloom_filters"}),", ",(0,a.jsx)(n.code,{children:"column_stats"}),", ",(0,a.jsx)(n.code,{children:"partition_stats"}),", ",(0,a.jsx)(n.code,{children:"record_index"}),", ",(0,a.jsx)(n.code,{children:"secondary_index"}),"\nand ",(0,a.jsx)(n.code,{children:"expression_index"})," asynchronously in Hudi. Being able to index without blocking writing ensures write performance is unaffected and no\nadditional manual maintenance is necessary to add/remove indexes. It also reduces resource wastage by avoiding contention between writing and indexing."]}),"\n",(0,a.jsxs)(n.p,{children:["Please refer section ",(0,a.jsx)(n.a,{href:"#setup-async-indexing",children:"Setup Async Indexing"})," to get more details on how to setup\nasynchronous indexing. To learn more about the design of asynchronous indexing feature, please check out ",(0,a.jsx)(n.a,{href:"https://www.onehouse.ai/blog/asynchronous-indexing-using-hudi",children:"this blog"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"index-creation-using-sql",children:"Index Creation Using SQL"}),"\n",(0,a.jsxs)(n.p,{children:["Currently indexes like secondary index, expression index and record index can be created using SQL create index command.\nFor more information on these indexes please refer ",(0,a.jsx)(n.a,{href:"/docs/next/metadata/#types-of-table-metadata",children:"metadata section"})]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"Please note in order to create secondary index:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["The table must have a primary key and merge mode should be ",(0,a.jsx)(n.a,{href:"/docs/next/record_merger#commit_time_ordering",children:"COMMIT_TIME_ORDERING"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Record index must be enabled. This can be done by setting ",(0,a.jsx)(n.code,{children:"hoodie.metadata.record.index.enable=true"})," and then creating ",(0,a.jsx)(n.code,{children:"record_index"}),". Please note the example below."]}),"\n"]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Create record index on primary key - uuid\nCREATE INDEX record_index ON hudi_indexed_table (uuid);\n\n-- Create secondary index on rider column.\nCREATE INDEX idx_rider ON hudi_indexed_table (rider);\n\n-- Create expression index by performing transformation on ts and driver column \n-- The index is created on the transformed column. Here column stats index is created on ts column\n-- and bloom filters index is created on driver column.\nCREATE INDEX idx_column_ts ON hudi_indexed_table USING column_stats(ts) OPTIONS(expr='from_unixtime', format = 'yyyy-MM-dd');\nCREATE INDEX idx_bloom_driver ON hudi_indexed_table USING bloom_filters(driver) OPTIONS(expr='identity');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For more information on index creation using SQL refer ",(0,a.jsx)(n.a,{href:"/docs/next/sql_ddl#create-index",children:"SQL DDL"})]}),"\n",(0,a.jsx)(n.h2,{id:"index-creation-using-datasource",children:"Index Creation Using Datasource"}),"\n",(0,a.jsxs)(n.p,{children:["Indexes like ",(0,a.jsx)(n.code,{children:"bloom_filters"}),", ",(0,a.jsx)(n.code,{children:"column_stats"}),", ",(0,a.jsx)(n.code,{children:"partition_stats"})," and ",(0,a.jsx)(n.code,{children:"record_index"})," can be created using Datasource.\nBelow we list the various configs which are needed to create the indexes mentioned."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- [Required Configs] Partition stats\nhoodie.metadata.index.partition.stats.enable=true\nhoodie.metadata.index.column.stats.enable=true\n-- [Optional Configs] - list of columns to index on. By default all columns are indexed\nhoodie.metadata.index.column.stats.column.list=col1,col2,...\n\n-- [Required Configs] Column stats\nhoodie.metadata.index.column.stats.enable=true\n-- [Optional Configs] - list of columns to index on. By default all columns are indexed\nhoodie.metadata.index.column.stats.column.list=col1,col2,...\n\n-- [Required Configs] Record Level Index\nhoodie.metadata.record.index.enable=true\n\n-- [Required Configs] Bloom filter Index\nhoodie.metadata.index.bloom.filter.enable=true\n"})}),"\n",(0,a.jsx)(n.p,{children:"Here is an example which shows how to create indexes for a table created using Datasource API."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'import scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.common.table.HoodieTableConfig._\nimport org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.hudi.keygen.constant.KeyGeneratorOptions._\nimport org.apache.hudi.common.model.HoodieRecord\nimport spark.implicits._\n\nval tableName = "trips_table_index"\nval basePath = "file:///tmp/trips_table_index"\n\nval columns = Seq("ts","uuid","rider","driver","fare","city")\nval data =\n  Seq((1695159649087L,"334e26e9-8355-45cc-97c6-c31daf0df330","rider-A","driver-K",19.10,"san_francisco"),\n    (1695091554788L,"e96c4396-3fad-413a-a942-4cb36106d721","rider-C","driver-M",27.70 ,"san_francisco"),\n    (1695046462179L,"9909a8b1-2d15-4d3d-8ec9-efc48c536a00","rider-D","driver-L",33.90 ,"san_francisco"),\n    (1695516137016L,"e3cf430c-889d-4015-bc98-59bdce1e530c","rider-F","driver-P",34.15,"sao_paulo"    ),\n    (1695115999911L,"c8abbe79-8d89-47ea-b4ce-4d224bae5bfa","rider-J","driver-T",17.85,"chennai"));\n\nvar inserts = spark.createDataFrame(data).toDF(columns:_*)\ninserts.write.format("hudi").\n  option("hoodie.datasource.write.partitionpath.field", "city").\n  option("hoodie.table.name", tableName).\n  option("hoodie.write.record.merge.mode", "COMMIT_TIME_ORDERING").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  mode(Overwrite).\n  save(basePath)\n  \n// Create record index and secondary index for the table\nspark.sql(s"CREATE TABLE test_table_external USING hudi LOCATION \'$basePath\'")\nspark.sql(s"SET hoodie.metadata.record.index.enable=true")\nspark.sql(s"CREATE INDEX record_index ON test_table_external (uuid)")\nspark.sql(s"CREATE INDEX idx_rider ON test_table_external (rider)")\nspark.sql(s"SHOW INDEXES FROM hudi_indexed_table").show(false)\nspark.sql(s"SELECT * FROM hudi_indexed_table WHERE rider = \'rider-E\'").show(false)  \n'})}),"\n",(0,a.jsx)(n.h2,{id:"setup-async-indexing",children:"Setup Async Indexing"}),"\n",(0,a.jsx)(n.p,{children:"In the example we will have continuous writing using Hudi Streamer and also create index in parallel. The index creation\nin example is done using HoodieIndexer so that schedule and execute phases are clearly visible for indexing. The asynchronous\nconfigurations can be used with Datasource and SQL based configs to create index as well."}),"\n",(0,a.jsxs)(n.p,{children:["First, we will generate a continuous workload. In the below example, we are going to start a ",(0,a.jsx)(n.a,{href:"/docs/hoodie_streaming_ingestion#hudi-streamer",children:"Hudi Streamer"})," which will continuously write data\nfrom raw parquet to Hudi table. We used the widely available ",(0,a.jsx)(n.a,{href:"https://registry.opendata.aws/nyc-tlc-trip-records-pds/",children:"NY Taxi dataset"}),", whose setup details are as below:"]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Ingestion write config"}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"hoodie.datasource.write.recordkey.field=VendorID\nhoodie.datasource.write.partitionpath.field=tpep_dropoff_datetime\nhoodie.datasource.write.precombine.field=tpep_dropoff_datetime\nhoodie.streamer.source.dfs.root=/Users/home/path/to/data/parquet_files/\nhoodie.streamer.schemaprovider.target.schema.file=/Users/home/path/to/schema/schema.avsc\nhoodie.streamer.schemaprovider.source.schema.file=/Users/home/path/to/schema/schema.avsc\n// set lock provider configs\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\nhoodie.write.lock.zookeeper.url=<zk_url>\nhoodie.write.lock.zookeeper.port=<zk_port>\nhoodie.write.lock.zookeeper.lock_key=<zk_key>\nhoodie.write.lock.zookeeper.base_path=<zk_base_path>\n"})})})]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Run Hudi Streamer"}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"spark-submit \\\n--class org.apache.hudi.utilities.streamer.HoodieStreamer `ls /Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.13.0.jar` \\\n--props `ls /Users/home/path/to/write/config.properties` \\\n--source-class org.apache.hudi.utilities.sources.ParquetDFSSource  --schemaprovider-class org.apache.hudi.utilities.schema.FilebasedSchemaProvider \\\n--source-ordering-field tpep_dropoff_datetime   \\\n--table-type COPY_ON_WRITE \\\n--target-base-path file:///tmp/hudi-ny-taxi/   \\\n--target-table ny_hudi_tbl  \\\n--op UPSERT  \\\n--continuous \\\n--source-limit 5000000 \\\n--min-sync-interval-seconds 60\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Hudi metadata table is enabled by default and the files index will be automatically created. While the Hudi Streamer is running in continuous mode, let\nus schedule the indexing for COLUMN_STATS index. First we need to define a properties file for the indexer."}),"\n",(0,a.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,a.jsxs)(n.p,{children:["As mentioned before, metadata indices are pluggable. One can add any index at any point in time depending on changing\nbusiness requirements. Some configurations to enable particular indices are listed below. Currently, available indices under\nmetadata table can be explored ",(0,a.jsx)(n.a,{href:"/docs/next/metadata/#types-of-table-metadata",children:"here"})," along with ",(0,a.jsx)(n.a,{href:"/docs/next/metadata#enable-hudi-metadata-table-and-multi-modal-index-in-write-side",children:"configs"}),"\nto enable them. The full set of metadata configurations can be explored ",(0,a.jsx)(n.a,{href:"/docs/next/configurations/#Metadata-Configs",children:"here"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Enabling the metadata table and configuring a lock provider are the prerequisites for using async indexer. Checkout a sample\nconfiguration below."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"# ensure that async indexing is enabled\nhoodie.metadata.index.async=true\n# enable column_stats index config\nhoodie.metadata.index.column.stats.enable=true\n# set concurrency mode and lock configs as this is a multi-writer scenario\n# check https://hudi.apache.org/docs/concurrency_control/ for differnt lock provider configs\nhoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\nhoodie.write.lock.zookeeper.url=<zk_url>\nhoodie.write.lock.zookeeper.port=<zk_port>\nhoodie.write.lock.zookeeper.lock_key=<zk_key>\nhoodie.write.lock.zookeeper.base_path=<zk_base_path>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"schedule-indexing",children:"Schedule indexing"}),"\n",(0,a.jsxs)(n.p,{children:["Now, we can schedule indexing using ",(0,a.jsx)(n.code,{children:"HoodieIndexer"})," in ",(0,a.jsx)(n.code,{children:"schedule"})," mode as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"spark-submit \\\n--class org.apache.hudi.utilities.HoodieIndexer \\\n/Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.13.0.jar \\\n--props /Users/home/path/to/indexer.properties \\\n--mode schedule \\\n--base-path /tmp/hudi-ny-taxi \\\n--table-name ny_hudi_tbl \\\n--index-types COLUMN_STATS \\\n--parallelism 1 \\\n--spark-memory 1g\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will write an ",(0,a.jsx)(n.code,{children:"indexing.requested"})," instant to the timeline."]}),"\n",(0,a.jsx)(n.h3,{id:"execute-indexing",children:"Execute Indexing"}),"\n",(0,a.jsxs)(n.p,{children:["To execute indexing, run the indexer in ",(0,a.jsx)(n.code,{children:"execute"})," mode as below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"spark-submit \\\n--class org.apache.hudi.utilities.HoodieIndexer \\\n/Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.13.0.jar \\\n--props /Users/home/path/to/indexer.properties \\\n--mode execute \\\n--base-path /tmp/hudi-ny-taxi \\\n--table-name ny_hudi_tbl \\\n--index-types COLUMN_STATS \\\n--parallelism 1 \\\n--spark-memory 1g\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We can also run the indexer in ",(0,a.jsx)(n.code,{children:"scheduleAndExecute"})," mode to do the above two steps in one shot. Doing it separately gives us better control over when we want to execute."]}),"\n",(0,a.jsx)(n.p,{children:"Let's look at the data timeline."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ls -lrt /tmp/hudi-ny-taxi/.hoodie\ntotal 1816\n-rw-r--r--  1 sagars  wheel       0 Apr 14 19:53 20220414195327683.commit.requested\n-rw-r--r--  1 sagars  wheel  153423 Apr 14 19:54 20220414195327683.inflight\n-rw-r--r--  1 sagars  wheel  207061 Apr 14 19:54 20220414195327683.commit\n-rw-r--r--  1 sagars  wheel       0 Apr 14 19:54 20220414195423420.commit.requested\n-rw-r--r--  1 sagars  wheel     659 Apr 14 19:54 20220414195437837.indexing.requested\n-rw-r--r--  1 sagars  wheel  323950 Apr 14 19:54 20220414195423420.inflight\n-rw-r--r--  1 sagars  wheel       0 Apr 14 19:55 20220414195437837.indexing.inflight\n-rw-r--r--  1 sagars  wheel  222920 Apr 14 19:55 20220414195423420.commit\n-rw-r--r--  1 sagars  wheel     734 Apr 14 19:55 hoodie.properties\n-rw-r--r--  1 sagars  wheel     979 Apr 14 19:55 20220414195437837.indexing\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the data timeline, we can see that indexing was scheduled after one commit completed (",(0,a.jsx)(n.code,{children:"20220414195327683.commit"}),") and another was requested\n(",(0,a.jsx)(n.code,{children:"20220414195423420.commit.requested"}),"). This would have picked ",(0,a.jsx)(n.code,{children:"20220414195327683"})," as the base instant. Indexing was inflight with an inflight writer as well. If we parse the\nindexer logs, we would find that it indeed caught up with instant ",(0,a.jsx)(n.code,{children:"20220414195423420"})," after indexing upto the base instant."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"22/04/14 19:55:22 INFO HoodieTableMetaClient: Finished Loading Table of type MERGE_ON_READ(version=1, baseFileFormat=HFILE) from /tmp/hudi-ny-taxi/.hoodie/metadata\n22/04/14 19:55:22 INFO RunIndexActionExecutor: Starting Index Building with base instant: 20220414195327683\n22/04/14 19:55:22 INFO HoodieBackedTableMetadataWriter: Creating a new metadata index for partition 'column_stats' under path /tmp/hudi-ny-taxi/.hoodie/metadata upto instant 20220414195327683\n...\n...\n22/04/14 19:55:38 INFO RunIndexActionExecutor: Total remaining instants to index: 1\n22/04/14 19:55:38 INFO HoodieTableMetaClient: Loading HoodieTableMetaClient from /tmp/hudi-ny-taxi/.hoodie/metadata\n22/04/14 19:55:38 INFO HoodieTableConfig: Loading table properties from /tmp/hudi-ny-taxi/.hoodie/metadata/.hoodie/hoodie.properties\n22/04/14 19:55:38 INFO HoodieTableMetaClient: Finished Loading Table of type MERGE_ON_READ(version=1, baseFileFormat=HFILE) from /tmp/hudi-ny-taxi/.hoodie/metadata\n22/04/14 19:55:38 INFO HoodieActiveTimeline: Loaded instants upto : Option{val=[20220414195423420__deltacommit__COMPLETED]}\n22/04/14 19:55:38 INFO RunIndexActionExecutor: Starting index catchup task\n...\n"})}),"\n",(0,a.jsx)(n.h3,{id:"drop-index",children:"Drop Index"}),"\n",(0,a.jsxs)(n.p,{children:["To drop an index, just run the index in ",(0,a.jsx)(n.code,{children:"dropindex"})," mode."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"spark-submit \\\n--class org.apache.hudi.utilities.HoodieIndexer \\\n/Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.13.0.jar \\\n--props /Users/home/path/to/indexer.properties \\\n--mode dropindex \\\n--base-path /tmp/hudi-ny-taxi \\\n--table-name ny_hudi_tbl \\\n--index-types COLUMN_STATS \\\n--parallelism 1 \\\n--spark-memory 2g\n"})}),"\n",(0,a.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,a.jsx)(n.p,{children:"Asynchronous indexing feature is still evolving. Few points to note from deployment perspective while running the indexer:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Files index is created by default as long as the metadata table is enabled."}),"\n",(0,a.jsx)(n.li,{children:"Trigger indexing for one metadata partition (or index type) at a time."}),"\n",(0,a.jsx)(n.li,{children:"If an index is enabled via async indexing, then ensure that index is also enabled in configs corresponding to regular ingestion writers. Otherwise, metadata writer will\nthink that particular index was disabled and cleanup the metadata partition."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Some of these limitations will be removed in the upcoming releases. Please\nfollow ",(0,a.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-2488",children:"HUDI-2488"})," for developments on this feature."]}),"\n",(0,a.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsx)("h3",{children:"Videos"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=TSphQCsY4pY",children:"Advantages of Metadata Indexing and Asynchronous Indexing in Hudi Hands on Lab"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(96540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);