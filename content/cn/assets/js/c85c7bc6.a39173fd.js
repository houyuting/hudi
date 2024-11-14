"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[83574],{29846:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"write_operations","title":"Write Operations","description":"It may be helpful to understand the different write operations of Hudi and how best to leverage them. These operations","source":"@site/versioned_docs/version-0.14.0/write_operations.md","sourceDirName":".","slug":"/write_operations","permalink":"/cn/docs/0.14.0/write_operations","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/write_operations.md","tags":[],"version":"0.14.0","frontMatter":{"title":"Write Operations","summary":"In this page, we describe the different write operations in Hudi.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"Metadata Table","permalink":"/cn/docs/0.14.0/metadata"},"next":{"title":"Schema Evolution","permalink":"/cn/docs/0.14.0/schema_evolution"}}');var n=t(74848),r=t(28453);const o={title:"Write Operations",summary:"In this page, we describe the different write operations in Hudi.",toc:!0,last_modified_at:null},a=void 0,d={},l=[{value:"Operation Types",id:"operation-types",level:2},{value:"UPSERT",id:"upsert",level:3},{value:"INSERT",id:"insert",level:3},{value:"BULK_INSERT",id:"bulk_insert",level:3},{value:"DELETE",id:"delete",level:3},{value:"BOOTSTRAP",id:"bootstrap",level:3},{value:"INSERT_OVERWRITE",id:"insert_overwrite",level:3},{value:"INSERT_OVERWRITE_TABLE",id:"insert_overwrite_table",level:3},{value:"DELETE_PARTITION",id:"delete_partition",level:3},{value:"Configs",id:"configs",level:2},{value:"Writing path",id:"writing-path",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["It may be helpful to understand the different write operations of Hudi and how best to leverage them. These operations\ncan be chosen/changed across each commit/deltacommit issued against the table. See the ",(0,n.jsx)(i.a,{href:"/docs/writing_data",children:"How To docs on Writing Data"}),"\nto see more examples."]}),"\n",(0,n.jsx)(i.h2,{id:"operation-types",children:"Operation Types"}),"\n",(0,n.jsx)(i.h3,{id:"upsert",children:"UPSERT"}),"\n",(0,n.jsx)(i.p,{children:"This is the default operation where the input records are first tagged as inserts or updates by looking up the index.\nThe records are ultimately written after heuristics are run to determine how best to pack them on storage to optimize for things like file sizing.\nThis operation is recommended for use-cases like database change capture where the input almost certainly contains updates. The target table will never show duplicates."}),"\n",(0,n.jsx)(i.h3,{id:"insert",children:"INSERT"}),"\n",(0,n.jsx)(i.p,{children:"This operation is very similar to upsert in terms of heuristics/file sizing but completely skips the index lookup step. Thus, it can be a lot faster than upserts\nfor use-cases like log de-duplication (in conjunction with options to filter duplicates mentioned below). This is also suitable for use-cases where the table can tolerate duplicates, but just\nneed the transactional writes/incremental pull/storage management capabilities of Hudi."}),"\n",(0,n.jsx)(i.h3,{id:"bulk_insert",children:"BULK_INSERT"}),"\n",(0,n.jsx)(i.p,{children:"Both upsert and insert operations keep input records in memory to speed up storage heuristics computations faster (among other things) and thus can be cumbersome for\ninitial loading/bootstrapping a Hudi table at first. Bulk insert provides the same semantics as insert, while implementing a sort-based data writing algorithm, which can scale very well for several hundred TBs\nof initial load. However, this just does a best-effort job at sizing files vs guaranteeing file sizes like inserts/upserts do."}),"\n",(0,n.jsx)(i.h3,{id:"delete",children:"DELETE"}),"\n",(0,n.jsx)(i.p,{children:"Hudi supports implementing two types of deletes on data stored in Hudi tables, by enabling the user to specify a different record payload implementation."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Soft Deletes"})," : Retain the record key and just null out the values for all the other fields.\nThis can be achieved by ensuring the appropriate fields are nullable in the table schema and simply upserting the table after setting these fields to null."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Hard Deletes"})," : A stronger form of deletion is to physically remove any trace of the record from the table. This can be achieved in 3 different ways.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Using DataSource, set ",(0,n.jsx)(i.code,{children:"OPERATION_OPT_KEY"})," to ",(0,n.jsx)(i.code,{children:"DELETE_OPERATION_OPT_VAL"}),". This will remove all the records in the DataSet being submitted."]}),"\n",(0,n.jsxs)(i.li,{children:["Using DataSource, set ",(0,n.jsx)(i.code,{children:"PAYLOAD_CLASS_OPT_KEY"})," to ",(0,n.jsx)(i.code,{children:'"org.apache.hudi.EmptyHoodieRecordPayload"'}),". This will remove all the records in the DataSet being submitted."]}),"\n",(0,n.jsxs)(i.li,{children:["Using DataSource or Hudi Streamer, add a column named ",(0,n.jsx)(i.code,{children:"_hoodie_is_deleted"})," to DataSet. The value of this column must be set to ",(0,n.jsx)(i.code,{children:"true"})," for all the records to be deleted and either ",(0,n.jsx)(i.code,{children:"false"})," or left null for any records which are to be upserted."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"bootstrap",children:"BOOTSTRAP"}),"\n",(0,n.jsxs)(i.p,{children:["Hudi supports migrating your existing large tables into a Hudi table using the ",(0,n.jsx)(i.code,{children:"bootstrap"})," operation. There are a couple of ways to approach this. Please refer to\n",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/migration_guide",children:"bootstrapping page"})," for more details."]}),"\n",(0,n.jsx)(i.h3,{id:"insert_overwrite",children:"INSERT_OVERWRITE"}),"\n",(0,n.jsxs)(i.p,{children:["This operation is used to rerwrite the all the partitions that are present in the input. This operation can be faster\nthan ",(0,n.jsx)(i.code,{children:"upsert"})," for batch ETL jobs, that are recomputing entire target partitions at once (as opposed to incrementally\nupdating the target tables). This is because, we are able to bypass indexing, precombining and other repartitioning\nsteps in the upsert write path completely. This comes in handy if you are doing any backfill or any such type of use-cases."]}),"\n",(0,n.jsx)(i.h3,{id:"insert_overwrite_table",children:"INSERT_OVERWRITE_TABLE"}),"\n",(0,n.jsx)(i.p,{children:"This operation can be used to overwrite the entire table for whatever reason. The Hudi cleaner will eventually clean up\nthe previous table snapshot's file groups asynchronously based on the configured cleaning policy. This operation is much\nfaster than issuing explicit deletes."}),"\n",(0,n.jsx)(i.h3,{id:"delete_partition",children:"DELETE_PARTITION"}),"\n",(0,n.jsxs)(i.p,{children:["In addition to deleting individual records, Hudi supports deleting entire partitions in bulk using this operation.\nDeletion of specific partitions can be done using the config\n",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodiedatasourcewritepartitionstodelete",children:(0,n.jsx)(i.code,{children:"hoodie.datasource.write.partitions.to.delete"})}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"configs",children:"Configs"}),"\n",(0,n.jsxs)(i.p,{children:["Here are thh basic configs relevant to the write operations types mentioned above. Please refer to ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#Write-Options",children:"Write Options"})," for more Spark based configs and ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#Flink-Options",children:"Flink options"})," for Flink based configs."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Spark based configs:"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Config Name"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.datasource.write.operation"}),(0,n.jsx)(i.td,{children:"upsert (Optional)"}),(0,n.jsxs)(i.td,{children:["Whether to do upsert, insert or bulk_insert for the write operation. Use bulk_insert to load new data into a table, and there on use upsert/insert. bulk insert uses a disk based write path to scale to load large inputs without need to cache it.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: OPERATION"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.datasource.write.precombine.field"}),(0,n.jsx)(i.td,{children:"ts (Optional)"}),(0,n.jsxs)(i.td,{children:["Field used in preCombining before actual write. When two records have the same key value, we will pick the one with the largest value for the precombine field, determined by Object.compareTo(..)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: PRECOMBINE_FIELD"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.combine.before.insert"}),(0,n.jsx)(i.td,{children:"false (Optional)"}),(0,n.jsxs)(i.td,{children:["When inserted records share same key, controls whether they should be first combined (i.e de-duplicated) before writing to storage.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: COMBINE_BEFORE_INSERT"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.datasource.write.insert.drop.duplicates"}),(0,n.jsx)(i.td,{children:"false (Optional)"}),(0,n.jsxs)(i.td,{children:["If set to true, records from the incoming dataframe will not overwrite existing records with the same key during the write operation. This config is deprecated as of 0.14.0. Please use hoodie.datasource.insert.dup.policy instead.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: INSERT_DROP_DUPS"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.bulkinsert.sort.mode"}),(0,n.jsx)(i.td,{children:"NONE (Optional)"}),(0,n.jsxs)(i.td,{children:["org.apache.hudi.execution.bulkinsert.BulkInsertSortMode: Modes for sorting records during bulk insert. ",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"NONE(default)"}),": No sorting. Fastest and matches ",(0,n.jsx)(i.code,{children:"spark.write.parquet()"})," in number of files and overhead."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"GLOBAL_SORT"}),": This ensures best file sizes, with lowest memory overhead at cost of sorting."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"PARTITION_SORT"}),": Strikes a balance by only sorting within a Spark RDD partition, still keeping the memory overhead of writing low. File sizing is not as good as ",(0,n.jsx)(i.code,{children:"GLOBAL_SORT"}),"."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"PARTITION_PATH_REPARTITION"}),": This ensures that the data for a single physical partition in the table is written by the same Spark executor. This should only be used when input data is evenly distributed across different partition paths. If data is skewed (most records are intended for a handful of partition paths among all) then this can cause an imbalance among Spark executors."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"PARTITION_PATH_REPARTITION_AND_SORT"}),": This ensures that the data for a single physical partition in the table is written by the same Spark executor. This should only be used when input data is evenly distributed across different partition paths. Compared to ",(0,n.jsx)(i.code,{children:"PARTITION_PATH_REPARTITION"}),", this sort mode does an additional step of sorting the records based on the partition path within a single Spark partition, given that data for multiple physical partitions can be sent to the same Spark partition and executor. If data is skewed (most records are intended for a handful of partition paths among all) then this can cause an imbalance among Spark executors."]})]}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: BULK_INSERT_SORT_MODE"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.bootstrap.base.path"}),(0,n.jsxs)(i.td,{children:["N/A ",(0,n.jsx)(i.strong,{children:"(Required)"})]}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.strong,{children:"Applicable only when"})," operation type is ",(0,n.jsx)(i.code,{children:"bootstrap"}),". Base path of the dataset that needs to be bootstrapped as a Hudi table",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: BASE_PATH"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Since Version: 0.6.0"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.bootstrap.mode.selector"}),(0,n.jsx)(i.td,{children:"org.apache.hudi.client.bootstrap.selector.MetadataOnlyBootstrapModeSelector (Optional)"}),(0,n.jsxs)(i.td,{children:["Selects the mode in which each file/partition in the bootstrapped dataset gets bootstrapped",(0,n.jsx)("br",{}),"Possible values:",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"org.apache.hudi.client.bootstrap.selector.MetadataOnlyBootstrapModeSelector"}),": In this mode, the full record data is not copied into Hudi therefore it avoids full cost of rewriting the dataset. Instead, 'skeleton' files containing just the corresponding metadata columns are added to the Hudi table. Hudi relies on the data in the original table and will face data-loss or corruption if files in the original table location are deleted or modified."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"org.apache.hudi.client.bootstrap.selector.FullRecordBootstrapModeSelector"}),": In this mode, the full record data is copied into hudi and metadata columns are added. A full record bootstrap is functionally equivalent to a bulk-insert. After a full record bootstrap, Hudi will function properly even if the original table is modified or deleted."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector"}),": A bootstrap selector which employs bootstrap mode by specified partitions."]})]}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: MODE_SELECTOR_CLASS_NAME"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Since Version: 0.6.0"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.datasource.write.partitions.to.delete"}),(0,n.jsxs)(i.td,{children:["N/A ",(0,n.jsx)(i.strong,{children:"(Required)"})]}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.strong,{children:"Applicable only when"})," operation type is ",(0,n.jsx)(i.code,{children:"delete_partition"}),". Comma separated list of partitions to delete. Allows use of wildcard *",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: PARTITIONS_TO_DELETE"})]})]})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Flink based configs:"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Config Name"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"write.operation"}),(0,n.jsx)(i.td,{children:"upsert (Optional)"}),(0,n.jsxs)(i.td,{children:["The write operation, that this write should do",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsx)(i.code,{children:"Config Param: OPERATION"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"precombine.field"}),(0,n.jsx)(i.td,{children:"ts (Optional)"}),(0,n.jsxs)(i.td,{children:["Field used in preCombining before actual write. When two records have the same key value, we will pick the one with the largest value for the precombine field, determined by Object.compareTo(..)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsx)(i.code,{children:"Config Param: PRECOMBINE_FIELD"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"write.precombine"}),(0,n.jsx)(i.td,{children:"false (Optional)"}),(0,n.jsxs)(i.td,{children:["Flag to indicate whether to drop duplicates before insert/upsert. By default these cases will accept duplicates, to gain extra performance: 1) insert operation; 2) upsert for MOR table, the MOR table deduplicate on reading",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsx)(i.code,{children:"Config Param: PRE_COMBINE"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"write.bulk_insert.sort_input"}),(0,n.jsx)(i.td,{children:"true (Optional)"}),(0,n.jsxs)(i.td,{children:["Whether to sort the inputs by specific fields for bulk insert tasks, default true",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsx)(i.code,{children:"Config Param: WRITE_BULK_INSERT_SORT_INPUT"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"write.bulk_insert.sort_input.by_record_key"}),(0,n.jsx)(i.td,{children:"false (Optional)"}),(0,n.jsxs)(i.td,{children:["Whether to sort the inputs by record keys for bulk insert tasks, default false",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsx)(i.code,{children:"Config Param: WRITE_BULK_INSERT_SORT_INPUT_BY_RECORD_KEY"})]})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"writing-path",children:"Writing path"}),"\n",(0,n.jsx)(i.p,{children:"The following is an inside look on the Hudi write path and the sequence of events that occur during a write."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/configurations#hoodiecombinebeforeinsert",children:"Deduping"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"First your input records may have duplicate keys within the same batch and duplicates need to be combined or reduced by key."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/indexing",children:"Index Lookup"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Next, an index lookup is performed to try and match the input records to identify which file groups they belong to."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/file_sizing",children:"File Sizing"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Then, based on the average size of previous commits, Hudi will make a plan to add enough records to a small file to get it close to the configured maximum limit."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/file_layouts",children:"Partitioning"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"We now arrive at partitioning where we decide what file groups certain updates and inserts will be placed in or if new file groups will be created"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Write I/O","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Now we actually do the write operations which is either creating a new base file, appending to the log file,\nor versioning an existing base file."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Update ",(0,n.jsx)(i.a,{href:"/docs/indexing",children:"Index"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Now that the write is performed, we will go back and update the index."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Commit","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Finally we commit all of these changes atomically. (A ",(0,n.jsx)(i.a,{href:"/docs/writing_data#commit-notifications",children:"callback notification"})," is exposed)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/hoodie_cleaner",children:"Clean"})," (if needed)","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Following the commit, cleaning is invoked if needed."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/compaction",children:"Compaction"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"If you are using MOR tables, compaction will either run inline, or be scheduled asynchronously"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Archive","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Lastly, we perform an archival step which moves old ",(0,n.jsx)(i.a,{href:"/docs/timeline",children:"timeline"})," items to an archive folder."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var s=t(96540);const n={},r=s.createContext(n);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);