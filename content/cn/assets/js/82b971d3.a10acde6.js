"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[11289],{42565:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"concurrency_control","title":"Concurrency Control","description":"Concurrency control defines how different writers/readers coordinate access to the table. Hudi ensures atomic writes, by way of publishing commits atomically to the timeline, stamped with an instant time that denotes the time at which the action is deemed to have occurred. Unlike general purpose file version control, Hudi draws clear distinction between writer processes (that issue user\u2019s upserts/deletes), table services (that write data/metadata to optimize/perform bookkeeping) and readers (that execute queries and read data). Hudi provides snapshot isolation between all three types of processes, meaning they all operate on a consistent snapshot of the table. Hudi provides optimistic concurrency control (OCC) between writers, while providing lock-free, non-blocking Multiversion Concurrency Control (MVCC) based concurrency control between writers and table-services and between different table services.","source":"@site/versioned_docs/version-0.14.0/concurrency_control.md","sourceDirName":".","slug":"/concurrency_control","permalink":"/cn/docs/0.14.0/concurrency_control","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/concurrency_control.md","tags":[],"version":"0.14.0","frontMatter":{"title":"Concurrency Control","summary":"In this page, we will discuss how to perform concurrent writes to Hudi Tables.","toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4,"last_modified_at":"2021-03-19T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Key Generation","permalink":"/cn/docs/0.14.0/key_generation"},"next":{"title":"Record Payload","permalink":"/cn/docs/0.14.0/record_payload"}}');var n=t(74848),o=t(28453);const s={title:"Concurrency Control",summary:"In this page, we will discuss how to perform concurrent writes to Hudi Tables.",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4,last_modified_at:new Date("2021-03-19T19:59:57.000Z")},a=void 0,c={},l=[{value:"Deployment models with supported concurrency controls",id:"deployment-models-with-supported-concurrency-controls",level:2},{value:"Model A: Single writer with inline table services",id:"model-a-single-writer-with-inline-table-services",level:3},{value:"Single Writer Guarantees",id:"single-writer-guarantees",level:4},{value:"Model B: Single writer with async table services",id:"model-b-single-writer-with-async-table-services",level:3},{value:"Model C: Multi-writer",id:"model-c-multi-writer",level:3},{value:"Multi Writer Guarantees",id:"multi-writer-guarantees",level:4},{value:"Enabling Multi Writing",id:"enabling-multi-writing",level:2},{value:"External Locking and lock providers",id:"external-locking-and-lock-providers",level:3},{value:"Zookeeper based lock provider",id:"zookeeper-based-lock-provider",level:4},{value:"HiveMetastore based lock provider",id:"hivemetastore-based-lock-provider",level:4},{value:"Amazon DynamoDB based lock provider",id:"amazon-dynamodb-based-lock-provider",level:4},{value:"FileSystem based lock provider (Experimental)",id:"filesystem-based-lock-provider-experimental",level:4},{value:"Multi Writing via Spark Datasource Writer",id:"multi-writing-via-spark-datasource-writer",level:2},{value:"Multi Writing via Hudi Streamer",id:"multi-writing-via-hudi-streamer",level:2},{value:"Early conflict Detection",id:"early-conflict-detection",level:2},{value:"Best Practices when using Optimistic Concurrency Control",id:"best-practices-when-using-optimistic-concurrency-control",level:2},{value:"Disabling Multi Writing",id:"disabling-multi-writing",level:2},{value:"Caveats",id:"caveats",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Concurrency control defines how different writers/readers coordinate access to the table. Hudi ensures atomic writes, by way of publishing commits atomically to the timeline, stamped with an instant time that denotes the time at which the action is deemed to have occurred. Unlike general purpose file version control, Hudi draws clear distinction between writer processes (that issue user\u2019s upserts/deletes), table services (that write data/metadata to optimize/perform bookkeeping) and readers (that execute queries and read data). Hudi provides snapshot isolation between all three types of processes, meaning they all operate on a consistent snapshot of the table. Hudi provides optimistic concurrency control (OCC) between writers, while providing lock-free, non-blocking Multiversion Concurrency Control (MVCC) based concurrency control between writers and table-services and between different table services."}),"\n",(0,n.jsx)(i.p,{children:"In this section, we will discuss the different concurrency controls supported by Hudi and how they are leveraged to provide flexible deployment models; we will cover multi-writing, a  popular deployment model; finally, we\u2019ll describe ways to ingest data into a Hudi Table from multiple writers using different writers, like  Hudi Streamer, Hudi datasource, Spark Structured Streaming and Spark SQL."}),"\n",(0,n.jsx)(i.h2,{id:"deployment-models-with-supported-concurrency-controls",children:"Deployment models with supported concurrency controls"}),"\n",(0,n.jsx)(i.h3,{id:"model-a-single-writer-with-inline-table-services",children:"Model A: Single writer with inline table services"}),"\n",(0,n.jsx)(i.p,{children:"This is the simplest form of concurrency, meaning there is no concurrency at all in the write processes. In this model, Hudi eliminates the need for concurrency control and maximizes throughput by supporting these table services out-of-box and running inline after every write to the table. Execution plans are idempotent, persisted to the timeline and auto-recover from failures. For most simple use-cases, this means just writing is sufficient to get a well-managed table that needs no concurrency control."}),"\n",(0,n.jsxs)(i.p,{children:["There is no actual concurrent writing in this model. ",(0,n.jsx)(i.strong,{children:"MVCC"})," is leveraged to provide snapshot isolation guarantees between ingestion writer and multiple readers and also between multiple table service writers and readers. Writes to the table either from ingestion or from table services produce versioned data that are available to readers only after the writes are committed. Until then, readers can access only the previous version of the data."]}),"\n",(0,n.jsx)(i.p,{children:"A single writer with all table services such as cleaning, clustering, compaction, etc can be configured to be inline (such as Hudi Streamer sync-once mode and Spark Datasource with default configs) without any additional configs."}),"\n",(0,n.jsx)(i.h4,{id:"single-writer-guarantees",children:"Single Writer Guarantees"}),"\n",(0,n.jsxs)(i.p,{children:["In this model, the following are the guarantees on ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/write_operations/",children:"write operations"})," to expect:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"UPSERT Guarantee"}),": The target table will NEVER show duplicates."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"INSERT Guarantee"}),": The target table wilL NEVER have duplicates if dedup: ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodiedatasourcewriteinsertdropduplicates",children:(0,n.jsx)(i.code,{children:"hoodie.datasource.write.insert.drop.duplicates"})})," & ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations/#hoodiecombinebeforeinsert",children:(0,n.jsx)(i.code,{children:"hoodie.combine.before.insert"})}),", is enabled."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"BULK_INSERT Guarantee"}),": The target table will NEVER have duplicates if dedup: ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodiedatasourcewriteinsertdropduplicates",children:(0,n.jsx)(i.code,{children:"hoodie.datasource.write.insert.drop.duplicates"})})," & ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations/#hoodiecombinebeforeinsert",children:(0,n.jsx)(i.code,{children:"hoodie.combine.before.insert"})}),", is enabled."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"INCREMENTAL PULL Guarantee"}),": Data consumption and checkpoints are NEVER out of order."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"model-b-single-writer-with-async-table-services",children:"Model B: Single writer with async table services"}),"\n",(0,n.jsxs)(i.p,{children:["Hudi provides the option of running the table services in an async fashion, where most of the heavy lifting (e.g actually rewriting the columnar data by compaction service) is done asynchronously. In this model, the async deployment eliminates any repeated wasteful retries and optimizes the table using clustering techniques while a single writer consumes the writes to the table without having to be blocked by such table services. This model avoids the need for taking an ",(0,n.jsx)(i.a,{href:"#external-locking-and-lock-providers",children:"external lock"})," to control concurrency and avoids the need to separately orchestrate and monitor offline table services jobs.."]}),"\n",(0,n.jsxs)(i.p,{children:["A single writer along with async table services runs in the same process. For example, you can have a  Hudi Streamer in continuous mode write to a MOR table using async compaction; you can use Spark Streaming (where ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/compaction",children:"compaction"})," is async by default), and you can use Flink streaming or your own job setup and enable async table services inside the same writer."]}),"\n",(0,n.jsxs)(i.p,{children:["Hudi leverages ",(0,n.jsx)(i.strong,{children:"MVCC"})," in this model to support running any number of table service jobs concurrently, without any concurrency conflict.  This is made possible by ensuring Hudi 's ingestion writer and async table services coordinate among themselves to ensure no conflicts and avoid race conditions. The same single write guarantees described in Model A above can be achieved in this model as well.\nWith this model users don't need to spin up different spark jobs and manage the orchestration among it. For larger deployments, this model can ease the operational burden significantly while getting the table services running without blocking the writers."]}),"\n",(0,n.jsx)(i.h3,{id:"model-c-multi-writer",children:"Model C: Multi-writer"}),"\n",(0,n.jsx)(i.p,{children:"It is not always possible to serialize all write operations to a table (such as UPSERT, INSERT or DELETE) into the same write process and therefore, multi-writing capability may be required. In multi-writing, disparate distributed processes run in parallel or overlapping time windows to write to the same table. In such cases, an external locking mechanism becomes necessary to coordinate concurrent accesses. Here are few different scenarios that would all fall under multi-writing:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Multiple ingestion writers to the same table",":For"," instance, two Spark Datasource writers working on different sets of partitions form a source kafka topic."]}),"\n",(0,n.jsx)(i.li,{children:"Multiple ingestion writers to the same table, including one writer with async table services: For example, a Hudi Streamer with async compaction for regular ingestion & a Spark Datasource writer for backfilling."}),"\n",(0,n.jsx)(i.li,{children:"A single ingestion writer and a separate compaction (HoodieCompactor) or clustering (HoodieClusteringJob) job apart from the ingestion writer: This is considered as multi-writing as they are not running in the same process."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Hudi's concurrency model intelligently differentiates actual writing to the table from table services that manage or optimize the table. Hudi offers similar ",(0,n.jsx)(i.strong,{children:"optimistic concurrency control across multiple writers"}),", but ",(0,n.jsx)(i.strong,{children:"table services can still execute completely lock-free and async"})," as long as they run in the same process as one of the writers.\nFor multi-writing, Hudi leverages file level optimistic concurrency control(OCC). For example, when two writers write to non overlapping files, both writes are allowed to succeed. However, when the writes from different writers overlap (touch the same set of files), only one of them will succeed. Please note that this feature is currently experimental and requires external lock providers to acquire locks briefly at critical sections during the write. More on lock providers below."]}),"\n",(0,n.jsx)(i.h4,{id:"multi-writer-guarantees",children:"Multi Writer Guarantees"}),"\n",(0,n.jsx)(i.p,{children:"With multiple writers using OCC, these are the write guarantees to expect:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"UPSERT Guarantee"}),": The target table will NEVER show duplicates."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"INSERT Guarantee"}),": The target table MIGHT have duplicates even if dedup is enabled."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"BULK_INSERT Guarantee"}),": The target table MIGHT have duplicates even if dedup is enabled."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"INCREMENTAL PULL Guarantee"}),": Data consumption and checkpoints are NEVER out of order. If there are inflight commits\n(due to multi-writing), incremental queries will not expose the completed commits following the inflight commits."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"enabling-multi-writing",children:"Enabling Multi Writing"}),"\n",(0,n.jsx)(i.p,{children:"The following properties are needed to be set appropriately to turn on optimistic concurrency control to achieve multi writing."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=<lock-provider-classname>\nhoodie.cleaner.policy.failed.writes=LAZY\n"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Config Name"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.write.concurrency.mode"}),(0,n.jsx)(i.td,{children:"SINGLE_WRITER (Optional)"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/c387f2a6dd3dc9db2cd22ec550a289d3a122e487/hudi-common/src/main/java/org/apache/hudi/common/model/WriteConcurrencyMode.java",children:"Concurrency modes"})})," for write operations.",(0,n.jsx)("br",{}),"Possible values:",(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"SINGLE_WRITER"}),": Only one active writer to the table. Maximizes throughput."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"OPTIMISTIC_CONCURRENCY_CONTROL"}),": Multiple writers can operate on the table with lazy conflict resolution using locks. This means that only one writer succeeds if multiple writers write to the same file group."]})]}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: WRITE_CONCURRENCY_MODE"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.write.lock.provider"}),(0,n.jsx)(i.td,{children:"org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider (Optional)"}),(0,n.jsxs)(i.td,{children:["Lock provider class name, user can provide their own implementation of LockProvider which should be subclass of org.apache.hudi.common.lock.LockProvider",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: LOCK_PROVIDER_CLASS_NAME"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Since Version: 0.8.0"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.cleaner.policy.failed.writes"}),(0,n.jsx)(i.td,{children:"EAGER (Optional)"}),(0,n.jsxs)(i.td,{children:["org.apache.hudi.common.model.HoodieFailedWritesCleaningPolicy: Policy that controls how to clean up failed writes. Hudi will delete any files written by failed writes to re-claim space.     EAGER(default): Clean failed writes inline after every write operation.     LAZY: Clean failed writes lazily after heartbeat timeout when the cleaning service runs. This policy is required when multi-writers are enabled.     NEVER: Never clean failed writes.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: FAILED_WRITES_CLEANER_POLICY"})]})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"external-locking-and-lock-providers",children:"External Locking and lock providers"}),"\n",(0,n.jsx)(i.p,{children:"As can be seen above, a lock provider needs to be configured in muti-writing scenarios. External locking is typically used in conjunction with optimistic concurrency control because it provides a way to prevent conflicts that might occur when two or more transactions (commits in our case) attempt to modify the same resource concurrently. When a transaction attempts to modify a resource that is currently locked by another transaction, it must wait until the lock is released before proceeding."}),"\n",(0,n.jsx)(i.p,{children:"In case of multi-writing in Hudi, the locks are acquired on the Hudi table for a very short duration during specific phases (such as just before committing the writes or before scheduling table services) instead of locking for the entire span of time. This approach allows multiple writers to work on the same table simultaneously, increasing concurrency and avoids conflicts."}),"\n",(0,n.jsxs)(i.p,{children:["There are 4 different lock providers that require different configurations to be set. Please refer to comprehensive locking configs ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#LOCK",children:"here"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"zookeeper-based-lock-provider",children:"Zookeeper based lock provider"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\n"})}),"\n",(0,n.jsx)(i.p,{children:"Following are the basic configs required to setup this lock provider:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Config Name"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.write.lock.zookeeper.base_path"}),(0,n.jsxs)(i.td,{children:["N/A ",(0,n.jsx)(i.strong,{children:"(Required)"})]}),(0,n.jsxs)(i.td,{children:["The base path on Zookeeper under which to create lock related ZNodes. This should be same for all concurrent writers to the same table",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: ZK_BASE_PATH"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Since Version: 0.8.0"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.write.lock.zookeeper.port"}),(0,n.jsxs)(i.td,{children:["N/A ",(0,n.jsx)(i.strong,{children:"(Required)"})]}),(0,n.jsxs)(i.td,{children:["Zookeeper port to connect to.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: ZK_PORT"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Since Version: 0.8.0"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.write.lock.zookeeper.url"}),(0,n.jsxs)(i.td,{children:["N/A ",(0,n.jsx)(i.strong,{children:"(Required)"})]}),(0,n.jsxs)(i.td,{children:["Zookeeper URL to connect to.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: ZK_CONNECT_URL"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Since Version: 0.8.0"})]})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"hivemetastore-based-lock-provider",children:"HiveMetastore based lock provider"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.lock.provider=org.apache.hudi.hive.transaction.lock.HiveMetastoreBasedLockProvider\n"})}),"\n",(0,n.jsx)(i.p,{children:"Following are the basic configs required to setup this lock provider:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Config Name"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.write.lock.hivemetastore.database"}),(0,n.jsxs)(i.td,{children:["N/A ",(0,n.jsx)(i.strong,{children:"(Required)"})]}),(0,n.jsxs)(i.td,{children:["For Hive based lock provider, the Hive database to acquire lock against",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: HIVE_DATABASE_NAME"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Since Version: 0.8.0"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.write.lock.hivemetastore.table"}),(0,n.jsxs)(i.td,{children:["N/A ",(0,n.jsx)(i.strong,{children:"(Required)"})]}),(0,n.jsxs)(i.td,{children:["For Hive based lock provider, the Hive table to acquire lock against",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: HIVE_TABLE_NAME"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Since Version: 0.8.0"})]})]})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"The HiveMetastore URI's are picked up from the hadoop configuration file loaded during runtime."})}),"\n",(0,n.jsx)(i.h4,{id:"amazon-dynamodb-based-lock-provider",children:"Amazon DynamoDB based lock provider"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.lock.provider=org.apache.hudi.aws.transaction.lock.DynamoDBBasedLockProvider\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Amazon DynamoDB based lock provides a simple way to support multi writing across different clusters.  You can refer to the\n",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#DynamoDB-based-Locks-Configurations",children:"DynamoDB based Locks Configurations"}),"\nsection for the details of each related configuration knob. Following are the basic configs required to setup this lock provider:"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Config Name"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.write.lock.dynamodb.endpoint_url"}),(0,n.jsxs)(i.td,{children:["N/A ",(0,n.jsx)(i.strong,{children:"(Required)"})]}),(0,n.jsxs)(i.td,{children:["For DynamoDB based lock provider, the url endpoint used for Amazon DynamoDB service. Useful for development with a local dynamodb instance.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: DYNAMODB_ENDPOINT_URL"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Since Version: 0.10.1"})]})]})})]}),"\n",(0,n.jsxs)(i.p,{children:["For advanced configs refer ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#DynamoDB-based-Locks-Configurations",children:"here"})]}),"\n",(0,n.jsxs)(i.p,{children:["When using the DynamoDB-based lock provider, the name of the DynamoDB table acting as the lock table for Hudi is\nspecified by the config ",(0,n.jsx)(i.code,{children:"hoodie.write.lock.dynamodb.table"}),". This DynamoDB table is automatically created by Hudi, so you\ndon't have to create the table yourself. If you want to use an existing DynamoDB table, make sure that an attribute with\nthe name ",(0,n.jsx)(i.code,{children:"key"})," is present in the table.  The ",(0,n.jsx)(i.code,{children:"key"})," attribute should be the partition key of the DynamoDB table. The\nconfig ",(0,n.jsx)(i.code,{children:"hoodie.write.lock.dynamodb.partition_key"})," specifies the value to put for the ",(0,n.jsx)(i.code,{children:"key"})," attribute (not the attribute\nname), which is used for the lock on the same table. By default, ",(0,n.jsx)(i.code,{children:"hoodie.write.lock.dynamodb.partition_key"})," is set to\nthe table name, so that multiple writers writing to the same table share the same lock. If you customize the name, make\nsure it's the same across multiple writers."]}),"\n",(0,n.jsx)(i.p,{children:"Also, to set up the credentials for accessing AWS resources, customers can pass the following props to Hudi jobs:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.aws.access.key\nhoodie.aws.secret.key\nhoodie.aws.session.token\n"})}),"\n",(0,n.jsxs)(i.p,{children:["If not configured, Hudi falls back to use ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html",children:"DefaultAWSCredentialsProviderChain"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"IAM policy for your service instance will need to add the following permissions:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "Sid":"DynamoDBLocksTable",\n  "Effect": "Allow",\n  "Action": [\n    "dynamodb:CreateTable",\n    "dynamodb:DeleteItem",\n    "dynamodb:DescribeTable",\n    "dynamodb:GetItem",\n    "dynamodb:PutItem",\n    "dynamodb:Scan",\n    "dynamodb:UpdateItem"\n  ],\n  "Resource": "arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}"\n}\n'})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"TableName"})," : same as ",(0,n.jsx)(i.code,{children:"hoodie.write.lock.dynamodb.partition_key"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Region"}),": same as ",(0,n.jsx)(i.code,{children:"hoodie.write.lock.dynamodb.region"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"AWS SDK dependencies are not bundled with Hudi from v0.10.x and will need to be added to your classpath.\nAdd the following Maven packages (check the latest versions at time of install):"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"com.amazonaws:dynamodb-lock-client\ncom.amazonaws:aws-java-sdk-dynamodb\ncom.amazonaws:aws-java-sdk-core\n"})}),"\n",(0,n.jsx)(i.h4,{id:"filesystem-based-lock-provider-experimental",children:"FileSystem based lock provider (Experimental)"}),"\n",(0,n.jsx)(i.p,{children:"FileSystem based lock provider supports multiple writers cross different jobs/applications based on atomic create/delete operations of the underlying filesystem."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.FileSystemBasedLockProvider\n"})}),"\n",(0,n.jsxs)(i.p,{children:["When using the FileSystem based lock provider, by default, the lock file will store into ",(0,n.jsx)(i.code,{children:"hoodie.base.path"}),"+",(0,n.jsx)(i.code,{children:"/.hoodie/lock"}),". You may use a custom folder to store the lock file by specifying ",(0,n.jsx)(i.code,{children:"hoodie.write.lock.filesystem.path"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["In case the lock cannot release during job crash, you can set ",(0,n.jsx)(i.code,{children:"hoodie.write.lock.filesystem.expire"})," (lock will never expire by default) to a desired expire time in minutes. You may also delete lock file manually in such situation."]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"FileSystem based lock provider is not supported with cloud storage like S3 or GCS."})}),"\n",(0,n.jsx)(i.h2,{id:"multi-writing-via-spark-datasource-writer",children:"Multi Writing via Spark Datasource Writer"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"hudi-spark"})," module offers the DataSource API to write (and read) a Spark DataFrame into a Hudi table."]}),"\n",(0,n.jsx)(i.p,{children:"Following is an example of how to use optimistic_concurrency_control via spark datasource"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:'inputDF.write.format("hudi")\n       .options(getQuickstartWriteConfigs)\n       .option(PRECOMBINE_FIELD_OPT_KEY, "ts")\n       .option("hoodie.cleaner.policy.failed.writes", "LAZY")\n       .option("hoodie.write.concurrency.mode", "optimistic_concurrency_control")\n       .option("hoodie.write.lock.zookeeper.url", "zookeeper")\n       .option("hoodie.write.lock.zookeeper.port", "2181")\n       .option("hoodie.write.lock.zookeeper.base_path", "/test")\n       .option(RECORDKEY_FIELD_OPT_KEY, "uuid")\n       .option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath")\n       .option(TABLE_NAME, tableName)\n       .mode(Overwrite)\n       .save(basePath)\n'})}),"\n",(0,n.jsx)(i.h2,{id:"multi-writing-via-hudi-streamer",children:"Multi Writing via Hudi Streamer"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"HoodieStreamer"})," utility (part of hudi-utilities-bundle) provides ways to ingest from different sources such as DFS or Kafka, with the following capabilities."]}),"\n",(0,n.jsx)(i.p,{children:"Using optimistic_concurrency_control via Hudi Streamer requires adding the above configs to the properties file that can be passed to the\njob. For example below, adding the configs to kafka-source.properties file and passing them to Hudi Streamer will enable optimistic concurrency.\nA Hudi Streamer job can then be triggered as follows:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"[hoodie]$ spark-submit --class org.apache.hudi.utilities.streamer.HoodieStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n  --props file://${PWD}/hudi-utilities/src/test/resources/streamer-config/kafka-source.properties \\\n  --schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n  --source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n  --source-ordering-field impresssiontime \\\n  --target-base-path file:\\/\\/\\/tmp/hudi-streamer-op \\ \n  --target-table tableName \\\n  --op BULK_INSERT\n"})}),"\n",(0,n.jsx)(i.h2,{id:"early-conflict-detection",children:"Early conflict Detection"}),"\n",(0,n.jsx)(i.p,{children:"Multi writing using OCC allows multiple writers to concurrently write and atomically commit to the Hudi table if there is no overlapping data file to be written, to guarantee data consistency, integrity and correctness. Prior to 0.13.0 release, as the OCC (optimistic concurrency control) name suggests, each writer will optimistically proceed with ingestion and towards the end, just before committing will go about conflict resolution flow to deduce overlapping writes and abort one if need be. But this could result in lot of compute waste, since the aborted commit will have to retry from beginning. With 0.13.0, Hudi introduced early conflict deduction leveraging markers in hudi to deduce the conflicts eagerly and abort early in the write lifecyle instead of doing it in the end. For large scale deployments, this might avoid wasting lot o compute resources if there could be overlapping concurrent writers."}),"\n",(0,n.jsxs)(i.p,{children:["To improve the concurrency control, the ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/releases/release-0.13.0#early-conflict-detection-for-multi-writer",children:"0.13.0 release"})," introduced a new feature, early conflict detection in OCC, to detect the conflict during the data writing phase and abort the writing early on once a conflict is detected, using Hudi's marker mechanism. Hudi can now stop a conflicting writer much earlier because of the early conflict detection and release computing resources necessary to cluster, improving resource utilization."]}),"\n",(0,n.jsxs)(i.p,{children:["By default, this feature is turned off. To try this out, a user needs to set ",(0,n.jsx)(i.code,{children:"hoodie.write.concurrency.early.conflict.detection.enable"})," to true, when using OCC for concurrency control (Refer ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#Write-Configurations-advanced-configs",children:"configs"})," page for all relevant configs)."]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["Early conflict Detection in OCC is an ",(0,n.jsx)(i.strong,{children:"EXPERIMENTAL"})," feature"]})}),"\n",(0,n.jsx)(i.h2,{id:"best-practices-when-using-optimistic-concurrency-control",children:"Best Practices when using Optimistic Concurrency Control"}),"\n",(0,n.jsx)(i.p,{children:"Concurrent Writing to Hudi tables requires acquiring a lock with one of the lock providers mentioned above. Due to several reasons you might want to configure retries to allow your application to acquire the lock."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Network connectivity or excessive load on servers increasing time for lock acquisition resulting in timeouts"}),"\n",(0,n.jsx)(i.li,{children:"Running a large number of concurrent jobs that are writing to the same hudi table can result in contention during lock acquisition can cause timeouts"}),"\n",(0,n.jsx)(i.li,{children:"In some scenarios of conflict resolution, Hudi commit operations might take upto 10's of seconds while the lock is being held. This can result in timeouts for other jobs waiting to acquire a lock."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Set the correct native lock provider client retries."}),"\n",(0,n.jsxs)(i.admonition,{type:"note",children:[(0,n.jsx)(i.mdxAdmonitionTitle,{}),(0,n.jsx)(i.p,{children:"Please note that sometimes these settings are set on the server once and all clients inherit the same configs. Please check your settings before enabling optimistic concurrency."})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.lock.wait_time_ms\nhoodie.write.lock.num_retries\n"})}),"\n",(0,n.jsx)(i.p,{children:"Set the correct hudi client retries for Zookeeper & HiveMetastore. This is useful in cases when native client retry settings cannot be changed. Please note that these retries will happen in addition to any native client retries that you may have set."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.lock.client.wait_time_ms\nhoodie.write.lock.client.num_retries\n"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"Setting the right values for these depends on a case by case basis; some defaults have been provided for general cases."})}),"\n",(0,n.jsx)(i.h2,{id:"disabling-multi-writing",children:"Disabling Multi Writing"}),"\n",(0,n.jsx)(i.p,{children:"Remove the following settings that were used to enable multi-writer or override with default values."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.concurrency.mode=single_writer\nhoodie.cleaner.policy.failed.writes=EAGER\n"})}),"\n",(0,n.jsx)(i.h2,{id:"caveats",children:"Caveats"}),"\n",(0,n.jsxs)(i.p,{children:["If you are using the ",(0,n.jsx)(i.code,{children:"WriteClient"})," API, please note that multiple writes to the table need to be initiated from 2 different instances of the write client.\nIt is ",(0,n.jsx)(i.strong,{children:"NOT"})," recommended to use the same instance of the write client to perform multi writing."]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var r=t(96540);const n={},o=r.createContext(n);function s(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);