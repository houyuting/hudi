"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[34543],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>c});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},g=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=s(t),u=i,c=p["".concat(d,".").concat(u)]||p[u]||m[u]||l;return t?n.createElement(c,r(r({ref:a},g),{},{components:t})):n.createElement(c,r({ref:a},g))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},50497:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=t(58168),i=(t(96540),t(15680));const l={title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},r=void 0,o={unversionedId:"metadata",id:"metadata",title:"Metadata Table",description:"Metadata Table",source:"@site/docs/metadata.md",sourceDirName:".",slug:"/metadata",permalink:"/cn/docs/next/metadata",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/metadata.md",tags:[],version:"current",frontMatter:{title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},sidebar:"docs",previous:{title:"Schema Evolution",permalink:"/cn/docs/next/schema_evolution"},next:{title:"Concurrency Control",permalink:"/cn/docs/next/concurrency_control"}},d=[{value:"Metadata Table",id:"metadata-table",children:[],level:2},{value:"Supporting Multi-Modal Index in Hudi",id:"supporting-multi-modal-index-in-hudi",children:[{value:"Metadata table indices",id:"metadata-table-indices",children:[{value:"New Indexes in 1.0.0",id:"new-indexes-in-100",children:[],level:4}],level:3}],level:2},{value:"Enable Hudi Metadata Table and Multi-Modal Index in write side",id:"enable-hudi-metadata-table-and-multi-modal-index-in-write-side",children:[],level:2},{value:"Use metadata indices for query side improvements",id:"use-metadata-indices-for-query-side-improvements",children:[{value:"files index",id:"files-index",children:[],level:3},{value:"column_stats index and data skipping",id:"column_stats-index-and-data-skipping",children:[],level:3}],level:2},{value:"Deployment considerations for metadata Table",id:"deployment-considerations-for-metadata-table",children:[{value:"Deployment Model A: Single writer with inline table services",id:"deployment-model-a-single-writer-with-inline-table-services",children:[],level:3},{value:"Deployment Model B: Single writer with async table services",id:"deployment-model-b-single-writer-with-async-table-services",children:[],level:3},{value:"Deployment Model C: Multi-writer",id:"deployment-model-c-multi-writer",children:[],level:3}],level:2},{value:"Related Resources",id:"related-resources",children:[],level:2}],s={toc:d},g="wrapper";function p(e){let{components:a,...t}=e;return(0,i.yg)(g,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"metadata-table"},"Metadata Table"),(0,i.yg)("p",null,"Database indices contain auxiliary data structures to quickly locate records needed, without reading unnecessary data\nfrom storage. Given that Hudi\u2019s design has been heavily optimized for handling mutable change streams, with different\nwrite patterns, Hudi considers ",(0,i.yg)("a",{parentName:"p",href:"#indexing"},"indexing")," as an integral part of its design and has uniquely supported\n",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2020/11/11/hudi-indexing-mechanisms/"},"indexing capabilities")," from its inception, to speed\nup upserts on the Data Lakehouse. While Hudi's indices has benefited writers for fast upserts and deletes, Hudi's metadata table\naims to tap these benefits more generally for both the readers and writers. The metadata table implemented as a single\ninternal Hudi Merge-On-Read table hosts different types of indices containing table metadata and is designed to be\nserverless and independent of compute and query engines. This is similar to common practices in databases where metadata\nis stored as internal views."),(0,i.yg)("p",null,"The metadata table aims to significantly improve read/write performance of the queries by addressing the following key challenges:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Eliminate the requirement of ",(0,i.yg)("inlineCode",{parentName:"strong"},"list files")," operation"),":",(0,i.yg)("br",null),"\nWhen reading and writing data, file listing operations are performed to get the current view of the file system.\nWhen data sets are large, listing all the files may be a performance bottleneck, but more importantly in the case of cloud storage systems\nlike AWS S3, the large number of file listing requests sometimes causes throttling due to certain request limits.\nThe metadata table will instead proactively maintain the list of files and remove the need for recursive file listing operations"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Expose columns stats through indices for better query planning and faster lookups by readers"),":",(0,i.yg)("br",null),"\nQuery engines rely on techniques such as partitioning and file pruning to cut down on the amount of irrelevant data\nscanned for query planning and execution. During query planning phase all data files are read for metadata on range\ninformation of columns for further pruning data files based on query predicates and available range information. This\napproach is expensive and does not scale if there are large number of partitions and data files to be scanned. In\naddition to storage optimizations such as automatic file sizing, clustering, etc that helps data organization in a query\noptimized way, Hudi's metadata table improves query planning further by supporting multiple types of indices that aid\nin efficiently looking up data files based on relevant query predicates instead of reading the column stats from every\nindividual data file and then pruning.\n")),(0,i.yg)("h2",{id:"supporting-multi-modal-index-in-hudi"},"Supporting Multi-Modal Index in Hudi"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.onehouse.ai/blog/introducing-multi-modal-index-for-the-lakehouse-in-apache-hudi"},"Multi-modal indexing"),",\nintroduced in ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.11.0/#multi-modal-index"},"0.11.0 Hudi release"),",\nis a re-imagination of what a general purpose indexing subsystem should look like for the lake. Multi-modal indexing is\nimplemented by enhancing Hudi's metadata table with the flexibility to extend to new index types as new partitions,\nalong with an ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/metadata_indexing/#setup-async-indexing"},"asynchronous index")," building\nmechanism and is built on the following core principles:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Scalable metadata"),": The table metadata, i.e., the auxiliary data about the table, must be scalable to extremely\nlarge size, e.g., Terabytes (TB).  Different types of indices should be easily integrated to support various use cases\nwithout having to worry about managing the same. To realize this, all indices in Hudi's metadata table are stored as\npartitions in a single internal MOR table. The MOR table layout enables lightning-fast writes by avoiding synchronous\nmerge of data with reduced write amplification. This is extremely important for large datasets as the size of updates to the\nmetadata table can grow to be unmanageable otherwise. This helps Hudi to scale metadata to TBs of sizes. The\nfoundational framework for multi-modal indexing is built to enable and disable new indices as needed. The\n",(0,i.yg)("a",{parentName:"li",href:"https://www.onehouse.ai/blog/asynchronous-indexing-using-hudi"},"async indexing")," supports index building alongside\nregular writers without impacting the write latency."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"ACID transactional updates"),": The index and table metadata must be always up-to-date and in sync with the data table.\nThis is designed via multi-table transaction within Hudi and ensures atomicity of writes and resiliency to failures so that\npartial writes to either the data or metadata table are never exposed to other read or write transactions. The metadata\ntable is built to be self-managed so users don\u2019t need to spend operational cycles on any table services including\ncompaction and cleaning    "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Fast lookup"),": The needle-in-a-haystack type of lookups must be fast and efficient without having to scan the entire\nindex, as index size can be TBs for large datasets. Since most access to the metadata table are point and range lookups,\nthe HFile format is chosen as the base file format for the internal metadata table. Since the metadata table stores\nthe auxiliary data at the partition level (files index) or the file level (column_stats index), the lookup based on a\nsingle partition path and a file group is going to be very efficient with the HFile format. Both the base and log files\nin Hudi\u2019s metadata table uses the HFile format and are meticulously designed to reduce remote GET calls on cloud storages.\nFurther, these metadata table indices are served via a centralized timeline server which caches the metadata, further\nreducing the latency of the lookup from executors.")),(0,i.yg)("h3",{id:"metadata-table-indices"},"Metadata table indices"),(0,i.yg)("p",null,"Following are the different indices currently available under the metadata table."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},(0,i.yg)("a",{parentName:"em",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+15%3A+HUDI+File+Listing+Improvements"},"files index"))),":\nStored as ",(0,i.yg)("em",{parentName:"p"},"files")," partition in the metadata table. Contains file information such as file name, size, and active state\nfor each partition in the data table. Improves the files listing performance by avoiding direct file system calls such\nas ",(0,i.yg)("em",{parentName:"p"},"exists, listStatus")," and ",(0,i.yg)("em",{parentName:"p"},"listFiles")," on the data table.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},(0,i.yg)("a",{parentName:"em",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-27/rfc-27.md"},"column_stats index"))),": Stored as ",(0,i.yg)("em",{parentName:"p"},"column_stats"),"\npartition in the metadata table. Contains the statistics of interested columns, such as min and max values, total values,\nnull counts, size, etc., for all data files and are used while serving queries with predicates matching interested\ncolumns. This index is used along with the ",(0,i.yg)("a",{parentName:"p",href:"https://www.onehouse.ai/blog/hudis-column-stats-index-and-data-skipping-feature-help-speed-up-queries-by-an-orders-of-magnitude"},"data skipping"),"\nto speed up queries by orders of magnitude. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},(0,i.yg)("a",{parentName:"em",href:"https://github.com/apache/hudi/blob/46f41d186c6c84a6af2c54a907ff2736b6013e15/rfc/rfc-37/rfc-37.md"},"bloom_filter index"))),":\nStored as ",(0,i.yg)("em",{parentName:"p"},"bloom_filter")," partition in the metadata table. This index employs range-based pruning on the minimum and\nmaximum values of the record keys and bloom-filter-based lookups to tag incoming records. For large tables, this\ninvolves reading the footers of all matching data files for bloom filters, which can be expensive in the case of random\nupdates across the entire dataset. This index stores bloom filters of all data files centrally to avoid scanning the\nfooters directly from all data files.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},(0,i.yg)("a",{parentName:"em",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC-08++Record+level+indexing+mechanisms+for+Hudi+datasets"},"record_index"))),":\nStored as ",(0,i.yg)("em",{parentName:"p"},"record_index")," partition in the metadata table. Contains the mapping of the record key to location. Record\nindex is a global index, enforcing key uniqueness across all partitions in the table. Most recently added in 0.14.0\nHudi release, this index aids in locating records faster than other existing indices and can provide a speedup orders of magnitude\nfaster in large deployments where index lookup dominates write latencies."))),(0,i.yg)("h4",{id:"new-indexes-in-100"},"New Indexes in 1.0.0"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Functional Index")),":\nA ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/3789840be3d041cbcfc6b24786740210e4e6d6ac/rfc/rfc-63/rfc-63.md"},"functional index"),"\nis an index on a function of a column. If a query has a predicate on a function of a column, the functional index can\nbe used to speed up the query. Functional index is stored in ",(0,i.yg)("em",{parentName:"p"},"func",(0,i.yg)("em",{parentName:"em"},"index"))," prefixed partitions (one for each\nfunction) under metadata table. Functional index can be created using SQL syntax. Please checkout SQL DDL\ndocs ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/sql_ddl#create-functional-index-experimental"},"here")," for more details.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Partition Stats Index")),"\nPartition stats index aggregates statistics at the partition level for the columns for which it is enabled. This helps\nin efficient partition pruning even for non-partition fields. The partition stats index is stored in ",(0,i.yg)("em",{parentName:"p"},"partition_stats"),"\npartition under metadata table. Partition stats index can be enabled using the following configs (note it is required\nto specify the columns for which stats should be aggregated):"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"  hoodie.metadata.index.partition.stats.enable=true\n  hoodie.metadata.index.column.stats.columns=<comma-separated-column-names>\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Secondary Index")),":\nSecondary indexes allow users to create indexes on columns that are not part of record key columns in Hudi tables (for\nrecord key fields, Hudi supports ",(0,i.yg)("a",{parentName:"p",href:"/blog/2023/11/01/record-level-index"},"Record-level Index"),". Secondary indexes\ncan be used to speed up queries with predicate on columns other than record key columns. "))),(0,i.yg)("p",null,"To try out these features, refer to the ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/sql_ddl#create-partition-stats-and-secondary-index-experimental"},"SQL guide"),"."),(0,i.yg)("h2",{id:"enable-hudi-metadata-table-and-multi-modal-index-in-write-side"},"Enable Hudi Metadata Table and Multi-Modal Index in write side"),(0,i.yg)("p",null,"Following are the Spark based basic configs that are needed to enable metadata and multi-modal indices. For advanced configs please refer\n",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#Metadata-Configs-advanced-configs"},"here"),"."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Config Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.metadata.enable"),(0,i.yg)("td",{parentName:"tr",align:null},"true (Optional) Enabled on the write side"),(0,i.yg)("td",{parentName:"tr",align:null},"Enable the internal metadata table which serves table metadata like level file listings. For 0.10.1 and prior releases, metadata table is disabled by default and needs to be explicitly enabled.",(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: ENABLE"),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Since Version: 0.7.0"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.metadata.index.bloom.filter.enable"),(0,i.yg)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"Enable indexing bloom filters of user data files under metadata table. When enabled, metadata table will have a partition to store the bloom filter index and will be used during the index lookups.",(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: ENABLE_METADATA_INDEX_BLOOM_FILTER"),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Since Version: 0.11.0"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.metadata.index.column.stats.enable"),(0,i.yg)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"Enable indexing column ranges of user data files under metadata table key lookups. When enabled, metadata table will have a partition to store the column ranges and will be used for pruning files during the index lookups.",(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: ENABLE_METADATA_INDEX_COLUMN_STATS"),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Since Version: 0.11.0"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.metadata.record.index.enable"),(0,i.yg)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"Create the HUDI Record Index within the Metadata Table",(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: RECORD_INDEX_ENABLE_PROP"),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Since Version: 0.14.0"))))),(0,i.yg)("p",null,"The metadata table with synchronous updates and metadata-table-based file listing are enabled by default.\nThere are prerequisite configurations and steps in ",(0,i.yg)("a",{parentName:"p",href:"#deployment-considerations-for-metadata-table"},"Deployment considerations")," to\nsafely use this feature.  The metadata table and related file listing functionality can still be turned off by setting\n",(0,i.yg)("a",{parentName:"p",href:"/docs/configurations#hoodiemetadataenable"},(0,i.yg)("inlineCode",{parentName:"a"},"hoodie.metadata.enable"))," to ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),". The\n",(0,i.yg)("a",{parentName:"p",href:"https://www.onehouse.ai/blog/introducing-multi-modal-index-for-the-lakehouse-in-apache-hudi"},"multi-modal index")," are\ndisabled by default and can be enabled in write side explicitly using the above configs."),(0,i.yg)("p",null,"For flink, following are the basic configs of interest to enable metadata based indices. Please refer\n",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#Flink-Options"},"here")," for advanced configs"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Config Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"metadata.enabled"),(0,i.yg)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"Enable the internal metadata table which serves table metadata like level file listings, default disabled",(0,i.yg)("br",null),(0,i.yg)("br",null)," ",(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: METADATA_ENABLED"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.metadata.index.column.stats.enable"),(0,i.yg)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"Enable indexing column ranges of user data files under metadata table key lookups. When enabled, metadata table will have a partition to store the column ranges and will be used for pruning files during the index lookups.",(0,i.yg)("br",null))))),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"If you turn off the metadata table after enabling, be sure to wait for a few commits so that the metadata table is fully\ncleaned up, before re-enabling the metadata table again."))),(0,i.yg)("h2",{id:"use-metadata-indices-for-query-side-improvements"},"Use metadata indices for query side improvements"),(0,i.yg)("h3",{id:"files-index"},"files index"),(0,i.yg)("p",null,"Metadata based listing using ",(0,i.yg)("em",{parentName:"p"},"files_index")," can be leveraged on the read side by setting appropriate configs/session properties\nfrom different engines as shown below:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Readers"),(0,i.yg)("th",{parentName:"tr",align:null},"Config"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("ul",null,(0,i.yg)("li",null,"Spark DataSource"),(0,i.yg)("li",null,"Spark SQL"),(0,i.yg)("li",null,"Strucured Streaming"))),(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.metadata.enable"),(0,i.yg)("td",{parentName:"tr",align:null},"When set to ",(0,i.yg)("inlineCode",{parentName:"td"},"true")," enables use of the spark file index implementation for Hudi, that speeds up listing of large tables.",(0,i.yg)("br",null))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Presto"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://prestodb.io/docs/current/connector/hudi.html"},"hudi.metadata-table-enabled")),(0,i.yg)("td",{parentName:"tr",align:null},"When set to ",(0,i.yg)("inlineCode",{parentName:"td"},"true")," fetches the list of file names and sizes from Hudi\u2019s metadata table rather than storage.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Trino"),(0,i.yg)("td",{parentName:"tr",align:null},"N/A"),(0,i.yg)("td",{parentName:"tr",align:null},"Support for reading from the metadata table ",(0,i.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-7020"},"has been dropped in Trino 419"),".")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Athena"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://docs.aws.amazon.com/athena/latest/ug/querying-hudi.html"},"hudi.metadata-listing-enabled")),(0,i.yg)("td",{parentName:"tr",align:null},"When this table property is set to ",(0,i.yg)("inlineCode",{parentName:"td"},"TRUE")," enables the Hudi metadata table and the related file listing functionality")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("ul",null,(0,i.yg)("li",null,"Flink DataStream"),(0,i.yg)("li",null,"Flink SQL"))),(0,i.yg)("td",{parentName:"tr",align:null},"metadata.enabled"),(0,i.yg)("td",{parentName:"tr",align:null},"When set to ",(0,i.yg)("inlineCode",{parentName:"td"},"true")," from DDL uses the internal metadata table to serves table metadata like level file listings")))),(0,i.yg)("h3",{id:"column_stats-index-and-data-skipping"},"column_stats index and data skipping"),(0,i.yg)("p",null,"Enabling metadata table and column stats index is a prerequisite to enabling data skipping capabilities. Following are the\ncorresponding configs across Spark adn Flink readers."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Readers"),(0,i.yg)("th",{parentName:"tr",align:null},"Config"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("ul",null,(0,i.yg)("li",null,"Spark DataSource"),(0,i.yg)("li",null,"Spark SQL"),(0,i.yg)("li",null,"Strucured Streaming"))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("ul",null,(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"td"},"hoodie.metadata.enable")),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"td"},"hoodie.enable.data.skipping")))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("ul",null,(0,i.yg)("li",null,"When set to ",(0,i.yg)("inlineCode",{parentName:"td"},"true")," enables use of the spark file index implementation for Hudi, that speeds up listing of large tables."),(0,i.yg)("li",null,"When set to ",(0,i.yg)("inlineCode",{parentName:"td"},"true")," enables data-skipping allowing queries to leverage indices to reduce the search space by skipping over files ",(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: ENABLE_DATA_SKIPPING"),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Since Version: 0.10.0")," ",(0,i.yg)("br",null))))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("ul",null,(0,i.yg)("li",null,"Flink DataStream"),(0,i.yg)("li",null,"Flink SQL"))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("ul",null,(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"td"},"metadata.enabled")),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"td"},"read.data.skipping.enabled")))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("ul",null,(0,i.yg)("li",null," When set to ",(0,i.yg)("inlineCode",{parentName:"td"},"true")," from DDL uses the internal metadata table to serves table metadata like level file listings"),(0,i.yg)("li",null,"When set to ",(0,i.yg)("inlineCode",{parentName:"td"},"true")," enables data-skipping allowing queries to leverage indices to reduce the search space byskipping over files")))))),(0,i.yg)("h2",{id:"deployment-considerations-for-metadata-table"},"Deployment considerations for metadata Table"),(0,i.yg)("p",null,"To ensure that metadata table stays up to date, all write operations on the same Hudi table need additional configurations\nbesides the above in different deployment models.  Before enabling metadata table, all writers on the same table must\nbe stopped. Please refer to the different ",(0,i.yg)("a",{parentName:"p",href:"/docs/concurrency_control#deployment-models-with-supported-concurrency-controls"},"deployment models"),"\nfor more details on each model. This section only highlights how to safely enable metadata table in different deployment models. "),(0,i.yg)("h3",{id:"deployment-model-a-single-writer-with-inline-table-services"},"Deployment Model A: Single writer with inline table services"),(0,i.yg)("p",null,"In ",(0,i.yg)("a",{parentName:"p",href:"/docs/concurrency_control#model-a-single-writer-with-inline-table-services"},"Model A"),", after setting ",(0,i.yg)("a",{parentName:"p",href:"/docs/configurations#hoodiemetadataenable"},(0,i.yg)("inlineCode",{parentName:"a"},"hoodie.metadata.enable"))," to ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", restarting\nthe single writer is sufficient to safely enable metadata table."),(0,i.yg)("h3",{id:"deployment-model-b-single-writer-with-async-table-services"},"Deployment Model B: Single writer with async table services"),(0,i.yg)("p",null,"If your current deployment model is ",(0,i.yg)("a",{parentName:"p",href:"/docs/concurrency_control#model-b-single-writer-with-async-table-services"},"Model B"),", enabling metadata\ntable requires adding optimistic concurrency control along with suggested lock provider like below."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.InProcessLockProvider\n")),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"These configurations are required only if metadata table is enabled in this deployment model."))),(0,i.yg)("p",null,"If multiple writers in different processes are present, including one writer with async table services, please refer to\n",(0,i.yg)("a",{parentName:"p",href:"#deployment-model-c-multi-writer"},"Deployment Model C: Multi-writer")," for configs, with the difference of using a\ndistributed lock provider.  Note that running a separate compaction (",(0,i.yg)("inlineCode",{parentName:"p"},"HoodieCompactor"),") or clustering (",(0,i.yg)("inlineCode",{parentName:"p"},"HoodieClusteringJob"),")\njob apart from the ingestion writer is considered as multi-writer deployment, as they are not running in the same\nprocess which cannot rely on the in-process lock provider."),(0,i.yg)("h3",{id:"deployment-model-c-multi-writer"},"Deployment Model C: Multi-writer"),(0,i.yg)("p",null,"If your current deployment model is ",(0,i.yg)("a",{parentName:"p",href:"/docs/concurrency_control#model-c-multi-writer"},"multi-writer")," along with a lock\nprovider and other required configs set for every writer as follows, there is no additional configuration required. You\ncan bring up the writers sequentially after stopping the writers for enabling metadata table. Applying the proper\nconfigurations to only partial writers leads to loss of data from the inconsistent writer. So, ensure you enable\nmetadata table across all writers."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=<distributed-lock-provider-classname>\n")),(0,i.yg)("p",null,"Note that there are different external ",(0,i.yg)("a",{parentName:"p",href:"/docs/concurrency_control#external-locking-and-lock-providers"},"lock providers available"),"\nto choose from."),(0,i.yg)("h2",{id:"related-resources"},"Related Resources"),(0,i.yg)("h3",null,"Blogs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.onehouse.ai/blog/introducing-multi-modal-index-for-the-lakehouse-in-apache-hudi"},"Multi-Modal Index for the Lakehouse in Apache Hudi")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://medium.com/@simpsons/table-service-deployment-models-in-apache-hudi-9cfa5a44addf"},"Table service deployment models in Apache Hudi"))))}p.isMDXComponent=!0}}]);