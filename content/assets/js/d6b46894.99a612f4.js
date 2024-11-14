"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7734],{69973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var i=r(47354),n=r(74848),a=r(28453);const s={title:"Improving Marker Mechanism in Apache Hudi",excerpt:"We introduce a new marker mechanism leveraging the timeline server to address performance bottlenecks due to rate-limiting on cloud storage like AWS S3.",author:"yihua",category:"blog",image:"/assets/images/blog/marker-mechanism/timeline-server-based-marker-mechanism.png",tags:["design","timeline-server","markers","apache hudi"]},l=void 0,o={authorsImageUrls:[void 0]},d=[{value:"Need for Markers during Write Operations",id:"need-for-markers-during-write-operations",level:2},{value:"Existing Direct Marker Mechanism and its limitations",id:"existing-direct-marker-mechanism-and-its-limitations",level:2},{value:"Timeline-server-based marker mechanism improving write performance",id:"timeline-server-based-marker-mechanism-improving-write-performance",level:2},{value:"Marker-related write options",id:"marker-related-write-options",level:2},{value:"Performance",id:"performance",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Hudi supports fully automatic cleanup of uncommitted data on storage during its write operations. Write operations in an Apache Hudi table use markers to efficiently track the data files written to storage. In this blog, we dive into the design of the existing direct marker file mechanism and explain its performance problems on cloud storage like AWS S3 for\nvery large writes. We demonstrate how we improve write performance with introduction of timeline-server-based markers."}),"\n",(0,n.jsx)(t.h2,{id:"need-for-markers-during-write-operations",children:"Need for Markers during Write Operations"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.strong,{children:"marker"})," in Hudi, such as a marker file with a unique filename, is a label to indicate that a corresponding data file exists in storage, which then Hudi\nuses to automatically clean up uncommitted data during failure and rollback scenarios. Each marker entry is composed of three parts, the data file name,\nthe marker extension (",(0,n.jsx)(t.code,{children:".marker"}),"), and the I/O operation created the file (",(0,n.jsx)(t.code,{children:"CREATE"})," - inserts, ",(0,n.jsx)(t.code,{children:"MERGE"})," - updates/deletes, or ",(0,n.jsx)(t.code,{children:"APPEND"})," - either). For example, the marker ",(0,n.jsx)(t.code,{children:"91245ce3-bb82-4f9f-969e-343364159174-0_140-579-0_20210820173605.parquet.marker.CREATE"})," indicates\nthat the corresponding data file is ",(0,n.jsx)(t.code,{children:"91245ce3-bb82-4f9f-969e-343364159174-0_140-579-0_20210820173605.parquet"})," and the I/O type is ",(0,n.jsx)(t.code,{children:"CREATE"}),". Hudi creates a marker before creating the corresponding data file in the file system and deletes all markers pertaining to a commit when it succeeds."]}),"\n",(0,n.jsx)(t.p,{children:"The markers are useful for efficiently carrying out different operations by the write client.  Markers serve as a way to track data files of interest rather than scanning the whole Hudi table by listing all files in the table.  Two important operations use markers which come in handy to find uncommitted data files of interest efficiently:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Removing duplicate/partial data files"}),": in Spark, the Hudi write client delegates the data file writing to multiple executors.  One executor can fail the task, leaving partial data files written, and Spark retries the task in this case until it succeeds. When speculative execution is enabled, there can also be multiple successful attempts at writing out the same data into different files, only one of which is finally handed to the Spark driver process for committing. The markers help efficiently identify the partial data files written, which contain duplicate data compared to the data files written by the successful trial later, and these duplicate data files are cleaned up when the commit is finalized.  If there are no such marker to track the per-commit data files, we have to list all files in the file system, correlate that with the files seen in timeline and then delete the ones that belong to partial write failures.  As you could imagine, this would be very costly in a very large installation of a datalake."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Rolling back failed commits"}),": the write operation can fail in the middle, leaving some data files written in storage.  In this case, the marker entries stay in storage as the commit is failed.  In the next write operation, the write client rolls back the failed commit before proceeding with the new write. The rollback is done with the help of markers to identify the data files written as part of the failed commit."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Next, we dive into the existing marker mechanism, explain its performance problem, and demonstrate the new timeline-server-based marker mechanism to address the problem."}),"\n",(0,n.jsx)(t.h2,{id:"existing-direct-marker-mechanism-and-its-limitations",children:"Existing Direct Marker Mechanism and its limitations"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"existing marker mechanism"})," simply creates a new marker file corresponding to each data file, with the marker filename as described above.  The marker file does not have any content, i.e., empty.  Each marker file is written to storage in the same directory hierarchy, i.e., commit instant and partition path, under a temporary folder ",(0,n.jsx)(t.code,{children:".hoodie/.temp"})," under the base path of the Hudi table.  For example, the figure below shows one example of the marker files created and the corresponding data files when writing data to the Hudi table.  When getting or deleting all the marker file paths, the mechanism first lists all the paths under the temporary folder, ",(0,n.jsx)(t.code,{children:".hoodie/.temp/<commit_instant>"}),", and then does the operation."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"An example of marker and data files in direct marker file mechanism",src:r(36995).A+"",width:"3440",height:"1444"})}),"\n",(0,n.jsxs)(t.p,{children:["While it's much efficient over scanning the entire table for uncommitted data files, as the number of data files to write increases, so does the number of marker files to create.  For large writes which need to write significant number of data files, e.g., 10K or more, this can create performance bottlenecks for cloud storage such as AWS S3.  In AWS S3, each file create and delete call triggers an HTTP request and there is ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html",children:"rate-limiting"})," on how many requests can be processed per second per prefix in a bucket.  When the number of data files to write concurrently and the number of marker files is huge, the marker file operations could take up non-trivial time during the write operation, sometimes on the order of a few minutes or more.  Users may barely notice this on a storage like HDFS, where the file system metadata is efficiently cached in memory."]}),"\n",(0,n.jsx)(t.h2,{id:"timeline-server-based-marker-mechanism-improving-write-performance",children:"Timeline-server-based marker mechanism improving write performance"}),"\n",(0,n.jsxs)(t.p,{children:["To address the performance bottleneck due to rate-limiting of AWS S3 explained above, we introduce a ",(0,n.jsx)(t.strong,{children:"new marker mechanism leveraging the timeline server"}),", which optimizes the marker-related latency for storage with non-trivial file I/O latency.  The ",(0,n.jsx)(t.strong,{children:"timeline server"})," in Hudi serves as a centralized place for providing the file system and timeline views. As shown below, the new timeline-server-based marker mechanism delegates the marker creation and other marker-related operations from individual executors to the timeline server for centralized processing.  The timeline server batches the marker creation requests and writes the markers to a bounded set of files in the file system at regular intervals.  In such a way, the number of actual file operations and latency related to markers can be significantly reduced even with a huge number of data files, thus improving the performance of the writes."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Timeline-server-based marker mechanism",src:r(56542).A+"",width:"1200",height:"432"})}),"\n",(0,n.jsx)(t.p,{children:"To improve the efficiency of processing marker creation requests, we design the batched handling of marker requests at the timeline server. Each marker creation request is handled asynchronously in the Javalin timeline server and queued before processing. For every batch interval, e.g., 20ms, the timeline server pulls the pending marker creation requests from the queue and writes all markers to the next file in a round robin fashion.  Inside the timeline server, such batch processing is multi-threaded, designed and implemented to guarantee consistency and correctness.  Both the batch interval and the batch concurrency can be configured through the write options."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Batched processing of marker creation requests",src:r(78660).A+"",width:"3184",height:"1168"})}),"\n",(0,n.jsx)(t.p,{children:"Note that the worker thread always checks whether the marker has already been created by comparing the marker name from the request with the memory copy of all markers maintained at the timeline server. The underlying files storing the markers are only read upon the first marker request (lazy loading).  The responses of requests are only sent back once the new markers are flushed to the files, so that in the case of the timeline server failure, the timeline server can recover the already created markers. These ensure consistency between storage and the in-memory copy, and improve the performance of processing marker requests."}),"\n",(0,n.jsx)(t.h2,{id:"marker-related-write-options",children:"Marker-related write options"}),"\n",(0,n.jsxs)(t.p,{children:["We introduce the following new marker-related write options in ",(0,n.jsx)(t.code,{children:"0.9.0"})," release, to configure the marker mechanism.  Note that the timeline-server-based marker mechanism is not yet supported for HDFS in ",(0,n.jsx)(t.code,{children:"0.9.0"})," release, and we plan to support the timeline-server-based marker mechanism for HDFS in the future."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property Name"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Meaning"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.write.markers.type"})}),(0,n.jsx)(t.td,{children:"direct"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:["Marker type to use.  Two modes are supported: (1) ",(0,n.jsx)(t.code,{children:"direct"}),": individual marker file corresponding to each data file is directly created by the executor; (2) ",(0,n.jsx)(t.code,{children:"timeline_server_based"}),": marker operations are all handled at the timeline service which serves as a proxy.  New marker entries are batch processed and stored in a limited number of underlying files for efficiency."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.markers.timeline_server_based.batch.num_threads"})}),(0,n.jsx)(t.td,{children:"20"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Number of threads to use for batch processing marker creation requests at the timeline server."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.markers.timeline_server_based.batch.interval_ms"})}),(0,n.jsx)(t.td,{children:"50"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"The batch interval in milliseconds for marker creation batch processing."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,n.jsx)(t.p,{children:"We evaluate the write performance over both direct and timeline-server-based marker mechanisms by bulk-inserting a large dataset using Amazon EMR with Spark and S3. The input data is around 100GB.  We configure the write operation to generate a large number of data files concurrently by setting the max parquet file size to be 1MB and parallelism to be 240.  Note that it is unlikely to set max parquet file size to 1MB in production and such a setup is only to evaluate the performance regarding the marker mechanisms. As we noted before, while the latency of direct marker mechanism is acceptable for incremental writes with smaller number of data files written, it increases dramatically for large bulk inserts/writes which produce much more data files."}),"\n",(0,n.jsx)(t.p,{children:"As shown below, direct marker mechanism works really well, when a part of the table is written, e.g., 1K out of 165K data files.  However, the time of direct marker operations is non-trivial when we need to write significant number of data files. Compared to the direct marker mechanism, the timeline-server-based marker mechanism generates much fewer files storing markers because of the batch processing, leading to much less time on marker-related I/O operations, thus achieving 31% lower write completion time compared to the direct marker file mechanism."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Marker Type"}),(0,n.jsx)(t.th,{children:"Total Files"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Num data files written"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Files created for markers"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Marker deletion time"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Bulk Insert Time (including marker deletion)"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Direct"}),(0,n.jsx)(t.td,{children:"165k"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"1k"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"1k"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"5.4secs"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Direct"}),(0,n.jsx)(t.td,{children:"165k"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"165k"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"165k"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"15min"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"55min"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Timeline-server-based"}),(0,n.jsx)(t.td,{children:"165k"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"165k"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"~3s"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"38min"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"We identify that for large writes which need to write significant number of data files, the existing direct marker file mechanism can incur performance bottlenecks due to the rate-limiting of file create and delete calls on cloud storage like AWS S3.  To address this issue, we introduce a new marker mechanism leveraging the timeline server, which delegates the marker creation and other marker-related operations from individual executors to the timeline server and uses batch processing to improve performance.  Performance evaluations on Amazon EMR with Spark and S3 show that the marker-related I/O latency and overall write time are reduced."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},78660:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/batched-marker-creation-e8455c544f3b11ceed810b663df59f7f.png"},36995:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/direct-marker-file-mechanism-b97b82f80430598f1d6a9b96521bb1a0.png"},56542:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/timeline-server-based-marker-mechanism-11d616800a7a241382c8a4ed647515a6.png"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var i=r(96540);const n={},a=i.createContext(n);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}},47354:e=>{e.exports=JSON.parse('{"permalink":"/blog/2021/08/18/improving-marker-mechanism","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-18-improving-marker-mechanism.md","source":"@site/blog/2021-08-18-improving-marker-mechanism.md","title":"Improving Marker Mechanism in Apache Hudi","description":"Hudi supports fully automatic cleanup of uncommitted data on storage during its write operations. Write operations in an Apache Hudi table use markers to efficiently track the data files written to storage. In this blog, we dive into the design of the existing direct marker file mechanism and explain its performance problems on cloud storage like AWS S3 for","date":"2021-08-18T00:00:00.000Z","tags":[{"inline":true,"label":"design","permalink":"/blog/tags/design"},{"inline":true,"label":"timeline-server","permalink":"/blog/tags/timeline-server"},{"inline":true,"label":"markers","permalink":"/blog/tags/markers"},{"inline":true,"label":"apache hudi","permalink":"/blog/tags/apache-hudi"}],"readingTime":8.605,"hasTruncateMarker":true,"authors":[{"name":"yihua","key":null,"page":null}],"frontMatter":{"title":"Improving Marker Mechanism in Apache Hudi","excerpt":"We introduce a new marker mechanism leveraging the timeline server to address performance bottlenecks due to rate-limiting on cloud storage like AWS S3.","author":"yihua","category":"blog","image":"/assets/images/blog/marker-mechanism/timeline-server-based-marker-mechanism.png","tags":["design","timeline-server","markers","apache hudi"]},"unlisted":false,"prevItem":{"title":"Reliable ingestion from AWS S3 using Hudi","permalink":"/blog/2021/08/23/s3-events-source"},"nextItem":{"title":"Adding support for Virtual Keys in Hudi","permalink":"/blog/2021/08/18/virtual-keys"}}')}}]);