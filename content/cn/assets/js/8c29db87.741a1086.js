"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[10354],{5443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"flink_configuration","title":"Flink Setup","description":"Global Configurations","source":"@site/versioned_docs/version-0.10.0/flink_configuration.md","sourceDirName":".","slug":"/flink_configuration","permalink":"/cn/docs/0.10.0/flink_configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/flink_configuration.md","tags":[],"version":"0.10.0","frontMatter":{"title":"Flink Setup","toc":true},"sidebar":"docs","previous":{"title":"Querying Data","permalink":"/cn/docs/0.10.0/querying_data"},"next":{"title":"Syncing to Metastore","permalink":"/cn/docs/0.10.0/syncing_metastore"}}');var i=n(74848),r=n(28453);const d={title:"Flink Setup",toc:!0},c=void 0,o={},l=[{value:"Global Configurations",id:"global-configurations",level:2},{value:"Parallelism",id:"parallelism",level:3},{value:"Memory",id:"memory",level:3},{value:"Checkpoint",id:"checkpoint",level:3},{value:"Table Options",id:"table-options",level:2},{value:"Memory",id:"memory-1",level:3},{value:"Parallelism",id:"parallelism-1",level:3},{value:"Compaction",id:"compaction",level:3},{value:"Memory Optimization",id:"memory-optimization",level:2},{value:"MOR",id:"mor",level:3},{value:"COW",id:"cow",level:3},{value:"Write Rate Limit",id:"write-rate-limit",level:2},{value:"Options",id:"options",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"global-configurations",children:"Global Configurations"}),"\n",(0,i.jsxs)(t.p,{children:["When using Flink, you can set some global configurations in ",(0,i.jsx)(t.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"})]}),"\n",(0,i.jsx)(t.h3,{id:"parallelism",children:"Parallelism"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option Name"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"taskmanager.numberOfTaskSlots"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"1"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Integer"})}),(0,i.jsx)(t.td,{children:"The number of parallel operator or user function instances that a single TaskManager can run. We recommend setting this value > 4, and the actual value needs to be set according to the amount of data"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"parallelism.default"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"1"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Integer"})}),(0,i.jsxs)(t.td,{children:["The default parallelism used when no parallelism is specified anywhere (default: 1). For example, If the value of ",(0,i.jsx)(t.a,{href:"#parallelism-1",children:(0,i.jsx)(t.code,{children:"write.bucket_assign.tasks"})})," is not set, this value will be used"]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"memory",children:"Memory"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option Name"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"jobmanager.memory.process.size"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"(none)"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"MemorySize"})}),(0,i.jsx)(t.td,{children:"Total Process Memory size for the JobManager. This includes all the memory that a JobManager JVM process consumes, consisting of Total Flink Memory, JVM Metaspace, and JVM Overhead"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"taskmanager.memory.task.heap.size"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"(none)"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"MemorySize"})}),(0,i.jsx)(t.td,{children:"Task Heap Memory size for TaskExecutors. This is the size of JVM heap memory reserved for write cache"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"taskmanager.memory.managed.size"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"(none)"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"MemorySize"})}),(0,i.jsx)(t.td,{children:"Managed Memory size for TaskExecutors. This is the size of off-heap memory managed by the memory manager, reserved for sorting and RocksDB state backend. If you choose RocksDB as the state backend, you need to set this memory"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"checkpoint",children:"Checkpoint"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option Name"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"execution.checkpointing.interval"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"(none)"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Duration"})}),(0,i.jsxs)(t.td,{children:["Setting this value as ",(0,i.jsx)(t.code,{children:"execution.checkpointing.interval = 150000ms"}),", 150000ms = 2.5min. Configuring this parameter is equivalent to enabling the checkpoint"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"state.backend"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"(none)"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsxs)(t.td,{children:["The state backend to be used to store state. We recommend setting store state as ",(0,i.jsx)(t.code,{children:"rocksdb"})," : ",(0,i.jsx)(t.code,{children:"state.backend: rocksdb"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"state.backend.rocksdb.localdir"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"(none)"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The local directory (on the TaskManager) where RocksDB puts its files"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"state.checkpoints.dir"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"(none)"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The default directory used for storing the data files and meta data of checkpoints in a Flink supported filesystem. The storage path must be accessible from all participating processes/nodes(i.e. all TaskManagers and JobManagers), like hdfs and oss path"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"state.backend.incremental"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Boolean"})}),(0,i.jsxs)(t.td,{children:["Option whether the state backend should create incremental checkpoints, if possible. For an incremental checkpoint, only a diff from the previous checkpoint is stored, rather than the complete checkpoint state. If store state is setting as ",(0,i.jsx)(t.code,{children:"rocksdb"}),", recommending to turn on"]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"table-options",children:"Table Options"}),"\n",(0,i.jsxs)(t.p,{children:["Flink SQL jobs can be configured through options in the ",(0,i.jsx)(t.code,{children:"WITH"})," clause.\nThe actual datasource level configs are listed below."]}),"\n",(0,i.jsx)(t.h3,{id:"memory-1",children:"Memory"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"When optimizing memory, we need to pay attention to the memory configuration\nand the number of taskManagers, parallelism of write tasks (write.tasks : 4) first. After confirm each write task to be\nallocated with enough memory, we can try to set these memory options."})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Remarks"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"write.task.max.size"})}),(0,i.jsxs)(t.td,{children:["Maximum memory in MB for a write task, when the threshold hits, it flushes the max size data bucket to avoid OOM. Default ",(0,i.jsx)(t.code,{children:"1024MB"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"1024D"})}),(0,i.jsxs)(t.td,{children:["The memory reserved for write buffer is ",(0,i.jsx)(t.code,{children:"write.task.max.size"})," - ",(0,i.jsx)(t.code,{children:"compaction.max_memory"}),". When total buffer of write tasks reach the threshold, the largest buffer in the memory will be flushed"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"write.batch.size"})}),(0,i.jsxs)(t.td,{children:["In order to improve the efficiency of writing, Flink write task will cache data in buffer according to the write bucket until the memory reaches the threshold. When reached threshold, the data buffer would be flushed out. Default ",(0,i.jsx)(t.code,{children:"64MB"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"64D"})}),(0,i.jsx)(t.td,{children:"Recommend to use the default settings"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"write.log_block.size"})}),(0,i.jsxs)(t.td,{children:["The log writer of Hudi will not flush the data immediately after receiving data. The writer flush data to the disk in the unit of ",(0,i.jsx)(t.code,{children:"LogBlock"}),". Before ",(0,i.jsx)(t.code,{children:"LogBlock"})," reached threshold, records will be buffered in the writer in form of serialized bytes. Default ",(0,i.jsx)(t.code,{children:"128MB"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"128"})}),(0,i.jsx)(t.td,{children:"Recommend to use the default settings"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"write.merge.max_memory"})}),(0,i.jsxs)(t.td,{children:["If write type is ",(0,i.jsx)(t.code,{children:"COPY_ON_WRITE"}),", Hudi will merge the incremental data and base file data. The incremental data will be cached and spilled to disk. this threshold controls the max heap size that can be used. Default ",(0,i.jsx)(t.code,{children:"100MB"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"100"})}),(0,i.jsx)(t.td,{children:"Recommend to use the default settings"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"compaction.max_memory"})}),(0,i.jsxs)(t.td,{children:["Same as ",(0,i.jsx)(t.code,{children:"write.merge.max_memory"}),", but occurs during compaction. Default ",(0,i.jsx)(t.code,{children:"100MB"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"100"})}),(0,i.jsxs)(t.td,{children:["If it is online compaction, it can be turned up when resources are sufficient, such as setting as ",(0,i.jsx)(t.code,{children:"1024MB"})]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"parallelism-1",children:"Parallelism"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Remarks"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"write.tasks"})}),(0,i.jsxs)(t.td,{children:["The parallelism of writer tasks. Each write task writes 1 to ",(0,i.jsx)(t.code,{children:"N"})," buckets in sequence. Default ",(0,i.jsx)(t.code,{children:"4"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"4"})}),(0,i.jsx)(t.td,{children:"Increases the parallelism has no effect on the number of small files"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"write.bucket_assign.tasks"})}),(0,i.jsxs)(t.td,{children:["The parallelism of bucket assigner operators. No default value, using Flink ",(0,i.jsx)(t.code,{children:"parallelism.default"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#parallelism",children:(0,i.jsx)(t.code,{children:"parallelism.default"})})}),(0,i.jsx)(t.td,{children:"Increases the parallelism also increases the number of buckets, thus the number of small files (small buckets)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"write.index_boostrap.tasks"})}),(0,i.jsxs)(t.td,{children:["The parallelism of index bootstrap. Increasing parallelism can speed up the efficiency of the bootstrap stage. The bootstrap stage will block checkpointing. Therefore, it is necessary to set more checkpoint failure tolerance times. Default using Flink ",(0,i.jsx)(t.code,{children:"parallelism.default"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#parallelism",children:(0,i.jsx)(t.code,{children:"parallelism.default"})})}),(0,i.jsxs)(t.td,{children:["It only take effect when ",(0,i.jsx)(t.code,{children:"index.bootsrap.enabled"})," is ",(0,i.jsx)(t.code,{children:"true"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"read.tasks"})}),(0,i.jsxs)(t.td,{children:["The parallelism of read operators (batch and stream). Default ",(0,i.jsx)(t.code,{children:"4"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"4"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"compaction.tasks"})}),(0,i.jsxs)(t.td,{children:["The parallelism of online compaction. Default ",(0,i.jsx)(t.code,{children:"4"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"4"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"Online compaction"})," will occupy the resources of the write task. It is recommended to use ",(0,i.jsx)(t.a,{href:"#offline-compaction",children:(0,i.jsx)(t.code,{children:"offline compaction"})})]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"compaction",children:"Compaction"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["These are options only for ",(0,i.jsx)(t.code,{children:"online compaction"}),"."]})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Turn off online compaction by setting ",(0,i.jsx)(t.code,{children:"compaction.async.enabled"})," = ",(0,i.jsx)(t.code,{children:"false"}),", but we still recommend turning on ",(0,i.jsx)(t.code,{children:"compaction.schedule.enable"})," for the writing job. You can then execute the compaction plan by ",(0,i.jsx)(t.a,{href:"#offline-compaction",children:(0,i.jsx)(t.code,{children:"offline compaction"})}),"."]})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Remarks"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"compaction.schedule.enabled"})}),(0,i.jsx)(t.td,{children:"Whether to generate compaction plan periodically"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsxs)(t.td,{children:["Recommend to turn it on, even if ",(0,i.jsx)(t.code,{children:"compaction.async.enabled"})," = ",(0,i.jsx)(t.code,{children:"false"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"compaction.async.enabled"})}),(0,i.jsx)(t.td,{children:"Async Compaction, enabled by default for MOR"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsxs)(t.td,{children:["Turn off ",(0,i.jsx)(t.code,{children:"online compaction"})," by turning off this option"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"compaction.trigger.strategy"})}),(0,i.jsx)(t.td,{children:"Strategy to trigger compaction"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"num_commits"})}),(0,i.jsxs)(t.td,{children:["Options are ",(0,i.jsx)(t.code,{children:"num_commits"}),": trigger compaction when reach N delta commits; ",(0,i.jsx)(t.code,{children:"time_elapsed"}),": trigger compaction when time elapsed > N seconds since last compaction; ",(0,i.jsx)(t.code,{children:"num_and_time"}),": trigger compaction when both ",(0,i.jsx)(t.code,{children:"NUM_COMMITS"})," and ",(0,i.jsx)(t.code,{children:"TIME_ELAPSED"})," are satisfied; ",(0,i.jsx)(t.code,{children:"num_or_time"}),": trigger compaction when ",(0,i.jsx)(t.code,{children:"NUM_COMMITS"})," or ",(0,i.jsx)(t.code,{children:"TIME_ELAPSED"})," is satisfied."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"compaction.delta_commits"})}),(0,i.jsxs)(t.td,{children:["Max delta commits needed to trigger compaction, default ",(0,i.jsx)(t.code,{children:"5"})," commits"]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"5"})}),(0,i.jsx)(t.td,{children:"--"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"compaction.delta_seconds"})}),(0,i.jsxs)(t.td,{children:["Max delta seconds time needed to trigger compaction, default ",(0,i.jsx)(t.code,{children:"1"})," hour"]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"3600"})}),(0,i.jsx)(t.td,{children:"--"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"compaction.max_memory"})}),(0,i.jsxs)(t.td,{children:["Max memory in MB for compaction spillable map, default ",(0,i.jsx)(t.code,{children:"100MB"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"100"})}),(0,i.jsxs)(t.td,{children:["If your have sufficient resources, recommend to adjust to ",(0,i.jsx)(t.code,{children:"1024MB"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"compaction.target_io"})}),(0,i.jsxs)(t.td,{children:["Target IO per compaction (both read and write), default ",(0,i.jsx)(t.code,{children:"500GB"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"512000"})}),(0,i.jsx)(t.td,{children:"--"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"memory-optimization",children:"Memory Optimization"}),"\n",(0,i.jsx)(t.h3,{id:"mor",children:"MOR"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.a,{href:"#checkpoint",children:["Setting Flink state backend to ",(0,i.jsx)(t.code,{children:"rocksdb"})]})," (the default ",(0,i.jsx)(t.code,{children:"in memory"})," state backend is very memory intensive)."]}),"\n",(0,i.jsxs)(t.li,{children:["If there is enough memory, ",(0,i.jsx)(t.code,{children:"compaction.max_memory"})," can be set larger (",(0,i.jsx)(t.code,{children:"100MB"})," by default, and can be adjust to ",(0,i.jsx)(t.code,{children:"1024MB"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["Pay attention to the memory allocated to each write task by taskManager to ensure that each write task can be allocated to the\ndesired memory size ",(0,i.jsx)(t.code,{children:"write.task.max.size"}),". For example, taskManager has ",(0,i.jsx)(t.code,{children:"4GB"})," of memory running two streamWriteFunction, so each write task\ncan be allocated with ",(0,i.jsx)(t.code,{children:"2GB"})," memory. Please reserve some buffers because the network buffer and other types of tasks on taskManager (such as bucketAssignFunction) will also consume memory."]}),"\n",(0,i.jsxs)(t.li,{children:["Pay attention to the memory changes of compaction. ",(0,i.jsx)(t.code,{children:"compaction.max_memory"})," controls the maximum memory that each task can be used when compaction tasks read\nlogs. ",(0,i.jsx)(t.code,{children:"compaction.tasks"})," controls the parallelism of compaction tasks."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"cow",children:"COW"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.a,{href:"#checkpoint",children:["Setting Flink state backend to ",(0,i.jsx)(t.code,{children:"rocksdb"})]})," (the default ",(0,i.jsx)(t.code,{children:"in memory"})," state backend is very memory intensive)."]}),"\n",(0,i.jsxs)(t.li,{children:["Increase both ",(0,i.jsx)(t.code,{children:"write.task.max.size"})," and ",(0,i.jsx)(t.code,{children:"write.merge.max_memory"})," (",(0,i.jsx)(t.code,{children:"1024MB"})," and ",(0,i.jsx)(t.code,{children:"100MB"})," by default, adjust to ",(0,i.jsx)(t.code,{children:"2014MB"})," and ",(0,i.jsx)(t.code,{children:"1024MB"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["Pay attention to the memory allocated to each write task by taskManager to ensure that each write task can be allocated to the\ndesired memory size ",(0,i.jsx)(t.code,{children:"write.task.max.size"}),". For example, taskManager has ",(0,i.jsx)(t.code,{children:"4GB"})," of memory running two write tasks, so each write task\ncan be allocated with ",(0,i.jsx)(t.code,{children:"2GB"})," memory. Please reserve some buffers because the network buffer and other types of tasks on taskManager (such as ",(0,i.jsx)(t.code,{children:"BucketAssignFunction"}),") will also consume memory."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"write-rate-limit",children:"Write Rate Limit"}),"\n",(0,i.jsxs)(t.p,{children:["In the existing data synchronization, ",(0,i.jsx)(t.code,{children:"snapshot data"})," and ",(0,i.jsx)(t.code,{children:"incremental data"})," are send to kafka first, and then streaming write\nto Hudi by Flink. Because the direct consumption of ",(0,i.jsx)(t.code,{children:"snapshot data"})," will lead to problems such as high throughput and serious\ndisorder (writing partition randomly), which will lead to write performance degradation and throughput glitches. At this time,\nthe ",(0,i.jsx)(t.code,{children:"write.rate.limit"})," option can be turned on to ensure smooth writing."]}),"\n",(0,i.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option Name"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Remarks"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"write.rate.limit"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"0"})}),(0,i.jsx)(t.td,{children:"Turn off by default"})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);