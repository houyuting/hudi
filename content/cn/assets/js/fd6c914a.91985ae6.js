"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[26183],{10234:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var i=t(59025),n=t(74848),s=t(28453);const r={title:"Understanding Data Lake Change Data Capture",excerpt:"Explains the concept of CDC in data lakes",author:"Sagar Lakshmipathy",category:"blog",image:"/assets/images/blog/data-lake-cdc/hudi-cdc.jpg",tags:["Data Lake","Apache Hudi","Change Data Capture","CDC"]},o=void 0,d={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"Data Lake",id:"data-lake",level:3},{value:"Change Data Capture",id:"change-data-capture",level:3},{value:"CDC architecture pattern",id:"cdc-architecture-pattern",level:2},{value:"Common CDC Components",id:"common-cdc-components",level:3},{value:"Change Detection",id:"change-detection",level:4},{value:"Timestamp-based / Query-based:",id:"timestamp-based--query-based",level:5},{value:"Pros:",id:"pros",level:5},{value:"Cons:",id:"cons",level:5},{value:"Trigger-based:",id:"trigger-based",level:5},{value:"Pros:",id:"pros-1",level:5},{value:"Cons:",id:"cons-1",level:5},{value:"Log-based:",id:"log-based",level:5},{value:"Pros:",id:"pros-2",level:5},{value:"Cons:",id:"cons-2",level:5},{value:"Data Extraction",id:"data-extraction",level:4},{value:"Data Transformation",id:"data-transformation",level:4},{value:"Data Loading",id:"data-loading",level:4},{value:"Why Combine CDC with Data Lakes?",id:"why-combine-cdc-with-data-lakes",level:2},{value:"Flexibility",id:"flexibility",level:3},{value:"Cost-effective",id:"cost-effective",level:3},{value:"Streamlined ETL Processes",id:"streamlined-etl-processes",level:3},{value:"Designing a CDC Architecture",id:"designing-a-cdc-architecture",level:2},{value:"Solution:",id:"solution",level:3},{value:"Revised architecture:",id:"revised-architecture",level:4},{value:"Implementation Blogs/Guides",id:"implementation-blogsguides",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const a={a:"a",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(a.p,{children:"In data management, two concepts have garnered significant attention: data lakes and change data capture (CDC)."}),"\n",(0,n.jsx)(a.h3,{id:"data-lake",children:"Data Lake"}),"\n",(0,n.jsx)(a.p,{children:"Data lakes serve as vast repositories that store raw data in its native format until needed for analytics."}),"\n",(0,n.jsx)(a.h3,{id:"change-data-capture",children:"Change Data Capture"}),"\n",(0,n.jsx)(a.p,{children:"Change Data Capture (CDC) is a technique used to identify and capture data changes, ensuring that the data remains fresh and consistent across various systems."}),"\n",(0,n.jsx)(a.p,{children:"Combining CDC with data lakes can significantly simplify data management by addressing several challenges commonly faced by ETL pipelines delivering data from transactional databases to analytical databases. These include maintaining data freshness, ensuring consistency, and improving efficiency in data handling. This article will explore the integration between data lakes and CDC, their benefits, implementation methods, key technologies and tools involved, best practices, and how to choose the right tools for your needs."}),"\n",(0,n.jsx)(a.h2,{id:"cdc-architecture-pattern",children:"CDC architecture pattern"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"CDC Architecture",src:t(9077).A+"",width:"632",height:"260"})}),"\n",(0,n.jsx)(a.h3,{id:"common-cdc-components",children:"Common CDC Components"}),"\n",(0,n.jsx)(a.h4,{id:"change-detection",children:"Change Detection"}),"\n",(0,n.jsx)(a.h5,{id:"timestamp-based--query-based",children:"Timestamp-based / Query-based:"}),"\n",(0,n.jsx)(a.p,{children:"This method relies on table schemas to include a column to indicate when it was previously modified, i.e. LAST_UPDATED etc. Whenever the source system is updated, the LAST_UPDATED column should be designed to get updated with the current timestamp. This column can then be queried by consumer applications to get the records, and process the records that have been previously updated."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Timestamp-based CDC",src:t(49887).A+"",width:"1121",height:"359"})}),"\n",(0,n.jsx)(a.h5,{id:"pros",children:"Pros:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Its simple to implement and use"}),"\n"]}),"\n",(0,n.jsx)(a.h5,{id:"cons",children:"Cons:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"If source applications did not have the timestamp columns, the database design needs to be changed to include it"}),"\n",(0,n.jsx)(a.li,{children:"Only supports soft deletes and not DELETE operations in the source table. This is because, once a DELETE operation is performed on the source database the record is removed and the consumer applications cannot track it automatically without the help of a custom log table or an audit trail."}),"\n",(0,n.jsx)(a.li,{children:"As there is no metadata to track, schema evolution scenarios require custom implementations to track the source database schema changes and update the target database schema appropriately. This is complex and hard to implement."}),"\n"]}),"\n",(0,n.jsx)(a.h5,{id:"trigger-based",children:"Trigger-based:"}),"\n",(0,n.jsxs)(a.p,{children:["In a trigger-based CDC design, database triggers are used to detect changes in the data and are used to update target tables accordingly. This method involves having trigger functions automatically executed to capture and store any changes from the source table in the target table; these target tables are commonly referred to as ",(0,n.jsx)(a.strong,{children:"shadow tables"})," or ",(0,n.jsx)(a.strong,{children:"change tables"}),". For example, in this method, stored procedures are triggered when there are specific events in the source database, such as INSERTs, UPDATEs, DELETEs."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Trigger-based CDC",src:t(85600).A+"",width:"880",height:"285"})}),"\n",(0,n.jsx)(a.h5,{id:"pros-1",children:"Pros:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Simple to implement"}),"\n",(0,n.jsx)(a.li,{children:"Triggers are supported natively by most database engines"}),"\n"]}),"\n",(0,n.jsx)(a.h5,{id:"cons-1",children:"Cons:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Maintenance overhead - requires maintaining separate trigger for each operation in each table"}),"\n",(0,n.jsx)(a.li,{children:"Performance overhead - in a highly concurrent database, addition of these triggers may significantly impact performance"}),"\n",(0,n.jsx)(a.li,{children:"Trigger-based CDC does not inherently provide mechanisms for informing downstream applications about schema changes, complicating consumer-side adaptations."}),"\n"]}),"\n",(0,n.jsx)(a.h5,{id:"log-based",children:"Log-based:"}),"\n",(0,n.jsx)(a.p,{children:"Databases maintain transaction logs, a file that records all transactions and database modifications made by each transaction. By reading this log, CDC tools can identify what data has been changed, when it changed and the type of change. Because this method reads changes directly from the database transaction log, ensuring low-latency and minimal impact on database performance."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Log-based CDC",src:t(50790).A+"",width:"1301",height:"320"})}),"\n",(0,n.jsx)(a.h5,{id:"pros-2",children:"Pros:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Supports all kinds of database transactions i.e. INSERTs, UPDATEs, DELETEs"}),"\n",(0,n.jsx)(a.li,{children:"Minimal performance impact on the source/operational databases"}),"\n",(0,n.jsx)(a.li,{children:"No schema changes required in source databases"}),"\n",(0,n.jsxs)(a.li,{children:["With a table format support, i.e. Apache Hudi, schema evolution ",(0,n.jsx)(a.a,{href:"https://hudi.apache.org/docs/schema_evolution/",children:"can be supported"})]}),"\n"]}),"\n",(0,n.jsx)(a.h5,{id:"cons-2",children:"Cons:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"No standardization in publishing the transactional logs between databases - this results in complex design and development overhead to implement support for different database vendors"}),"\n"]}),"\n",(0,n.jsx)(a.h4,{id:"data-extraction",children:"Data Extraction"}),"\n",(0,n.jsx)(a.p,{children:"Once changes are detected, the CDC system extracts the relevant data. This includes the type of operation (insert, update, delete), the affected rows, and the before-and-after state of the data if applicable."}),"\n",(0,n.jsx)(a.h4,{id:"data-transformation",children:"Data Transformation"}),"\n",(0,n.jsx)(a.p,{children:"Extracted data often needs to be transformed before it can be used. This might include converting data formats, applying business rules, or enriching the data with additional context."}),"\n",(0,n.jsx)(a.h4,{id:"data-loading",children:"Data Loading"}),"\n",(0,n.jsx)(a.p,{children:"The transformed data is then loaded into the target system. This could be another database, a data warehouse, a data lake, or a real-time analytics platform. The loading process ensures that the target system reflects the latest state of the source database."}),"\n",(0,n.jsx)(a.h2,{id:"why-combine-cdc-with-data-lakes",children:"Why Combine CDC with Data Lakes?"}),"\n",(0,n.jsx)(a.h3,{id:"flexibility",children:"Flexibility"}),"\n",(0,n.jsx)(a.p,{children:"In general, data lakes offer more flexibility at a lower cost, because of its tendency to support storing any type of data i.e. unstructured, semi-structured and structured data while data warehouses typically only support structured and in some cases semi-structured. This flexibility allows users to maintain a single source of truth and access the same dataset from different query engines. For example, the dataset stored in S3, can be queried using Redshift Spectrum and Amazon Athena."}),"\n",(0,n.jsx)(a.h3,{id:"cost-effective",children:"Cost-effective"}),"\n",(0,n.jsx)(a.p,{children:"Data lakes, when compared to data warehouses, are generally cheaper in terms of storage costs as the volume grows in time. This allows users to implement a medallion architecture which involves storing a huge volume of data in three different levels i.e. bronze, silver and gold layer tables. Over time, data lake users typically implement tiered storage which further reduces storage cost by moving infrequently accessed data to colder storage systems. In a traditional data warehouse implementation, storage costs will be higher to maintain different levels of data and will continue growing as the source database grows."}),"\n",(0,n.jsx)(a.h3,{id:"streamlined-etl-processes",children:"Streamlined ETL Processes"}),"\n",(0,n.jsx)(a.p,{children:"CDC simplifies the Extract, Transform, Load (ETL) processes by continuously capturing and applying changes to the data lake. This streamlining reduces the complexity and resource intensity of traditional ETL operations, often involving bulk data transfers and significant processing overhead. By only dealing with data changes, CDC makes the process more efficient and reduces the load on source systems."}),"\n",(0,n.jsx)(a.p,{children:"For organizations using multiple ingestion pipelines, for example a combination of CDC pipelines, ERP data ingestion, IOT sensor data, having a common storage layer may simplify data processing while giving you the opportunity to build unified tables combining data from different sources."}),"\n",(0,n.jsx)(a.h2,{id:"designing-a-cdc-architecture",children:"Designing a CDC Architecture"}),"\n",(0,n.jsx)(a.p,{children:"For organizations with specific needs or unique data environments, developing custom CDC solutions is a common practice, especially with open source tools/frameworks. These solutions offer flexibility and can be tailored to meet the exact requirements of the business. However, developing custom CDC solutions requires significant expertise and resources, making it a viable option for organizations with complex data needs. Examples include Debezium/Airbyte combined Apache Kafka."}),"\n",(0,n.jsx)(a.h3,{id:"solution",children:"Solution:"}),"\n",(0,n.jsxs)(a.p,{children:["Apache Hudi is an open-source framework designed to streamline incremental data processing and data pipeline development. It efficiently handles business requirements such as data lifecycle management and enhances data quality.\nStarting with Hudi 0.13.0, ",(0,n.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.13.0#change-data-capture",children:"the CDC feature was introduced natively"}),", allowing logging before and after images of the changed records, along with the associated write operation type."]}),"\n",(0,n.jsx)(a.p,{children:"This enables users to"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:'Perform record-level insert, update, and delete for privacy regulations and simplified pipelines \u2013 for privacy regulations like GDPR and CCPA, companies need to perform record-level updates and deletions to comply with individuals\' rights such as the "right to be forgotten" or consent changes. Without support for record-level updates/deletes this required custom solutions to track individual changes and rewrite large data sets for minor updates. With Apache Hudi, you can use familiar operations (insert, update, upsert, delete), and Hudi will track transactions and make granular changes in the data lake, simplifying your data pipelines.'}),"\n",(0,n.jsx)(a.li,{children:"Simplified and efficient file management and near real-time data access \u2013 Streaming IoT and ingestion pipelines need to handle data insertion and update events without creating performance issues due to numerous small files. Hudi automatically tracks changes and merges files to maintain optimal sizes, eliminating the need for custom solutions to manage and rewrite small files."}),"\n",(0,n.jsx)(a.li,{children:"Simplify CDC data pipeline development \u2013 meaning users can store data in the data lake using open storage formats, while integrations with Presto, Apache Hive, Apache Spark, and various data catalogs give you near real-time access to updated data using familiar tools."}),"\n"]}),"\n",(0,n.jsx)(a.h4,{id:"revised-architecture",children:"Revised architecture:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"CDC Architecture with Apache Hudi",src:t(41634).A+"",width:"1337",height:"601"})}),"\n",(0,n.jsx)(a.p,{children:"In this architecture, with the addition of the data processing layer, we have added two important components"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"A data catalog"})," \u2013 acting as a metadata repository for all your data assets across various data sources. This component is updated by the writer i.e. Spark/Flink and is used by the readers i.e. Presto/Trino. Common examples include AWS Glue Catalog, Hive Metastore and Unity Catalog."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"A schema registry"})," \u2013 acting centralized repository for managing and validating schemas. It decouples schemas from producers and consumers, which allows applications to serialize and deserialize messages. Schema registry is also important to ensure data quality. Common examples include, Confluent schema registry, Apicurio schema registry and Glue schema registry."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Apache Hudi"})," \u2013 acting as a platform used in conjunction with Spark/Flink which refers to the schema registry and writes to the data lake and simultaneously catalogs the data to the data catalog."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"The tables written by Spark/Flink + Hudi can now be queried from popular query engines such as Presto, Trino, Amazon Redshift, and Spark SQL."}),"\n",(0,n.jsx)(a.h2,{id:"implementation-blogsguides",children:"Implementation Blogs/Guides"}),"\n",(0,n.jsxs)(a.p,{children:["Over time, the Apache Hudi community has written great step-by-step blogs/guides to help implement Change Data Capture architectures. Some of these blogs can be referred to ",(0,n.jsx)(a.a,{href:"https://hudi.apache.org/blog/tags/cdc",children:"here"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(a.p,{children:"Combining data lakes with Change Data Capture (CDC) techniques offers a powerful solution for addressing the challenges associated with maintaining data freshness, consistency, and efficiency in ETL pipelines."}),"\n",(0,n.jsx)(a.p,{children:"Several methods exist for implementing CDC, including timestamp-based, trigger-based, and log-based approaches, each with its own advantages and drawbacks. Log-based CDC, in particular, stands out for its minimal performance impact on source databases and support for various transactions, though it requires handling different database vendors' transaction log formats."}),"\n",(0,n.jsx)(a.p,{children:"Using tools like Apache Hudi can significantly enhance the CDC process by streamlining incremental data processing and data pipeline development. Hudi provides efficient storage management, supports record-level operations for privacy regulations, and offers near real-time access to data. It also simplifies the management of streaming data and ingestion pipelines by automatically tracking changes and optimizing file sizes, thereby reducing the need for custom solutions."})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9077:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/database-cdc-e9ee525e81a47e7744ae4f408c4e1d8f.png"},41634:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/hudi-cdc-263ca6e0f40b6bff91517bd02c798e2d.jpg"},50790:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/log-based-cdc-92eff429e89653b892b63f1af3485ac6.png"},85600:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/trigger-based-cdc-51c20f90024a12e97cbc728cfc7c0ed4.png"},49887:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/ts-based-cdc-30ce5c2462ea39b02dbf9a93467a360a.png"},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var i=t(96540);const n={},s=i.createContext(n);function r(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:a},e.children)}},59025:e=>{e.exports=JSON.parse('{"permalink":"/cn/blog/2024/07/30/data-lake-cdc","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2024-07-30-data-lake-cdc.md","source":"@site/blog/2024-07-30-data-lake-cdc.md","title":"Understanding Data Lake Change Data Capture","description":"Introduction","date":"2024-07-30T00:00:00.000Z","tags":[{"inline":true,"label":"Data Lake","permalink":"/cn/blog/tags/data-lake"},{"inline":true,"label":"Apache Hudi","permalink":"/cn/blog/tags/apache-hudi"},{"inline":true,"label":"Change Data Capture","permalink":"/cn/blog/tags/change-data-capture"},{"inline":true,"label":"CDC","permalink":"/cn/blog/tags/cdc"}],"readingTime":8.485,"hasTruncateMarker":false,"authors":[{"name":"Sagar Lakshmipathy","key":null,"page":null}],"frontMatter":{"title":"Understanding Data Lake Change Data Capture","excerpt":"Explains the concept of CDC in data lakes","author":"Sagar Lakshmipathy","category":"blog","image":"/assets/images/blog/data-lake-cdc/hudi-cdc.jpg","tags":["Data Lake","Apache Hudi","Change Data Capture","CDC"]},"unlisted":false,"prevItem":{"title":"Column File Formats: How Hudi Leverages Parquet and ORC ","permalink":"/cn/blog/2024/07/31/hudi-file-formats"},"nextItem":{"title":"What is a Data Lakehouse & How does it Work?","permalink":"/cn/blog/2024/07/11/what-is-a-data-lakehouse"}}')}}]);