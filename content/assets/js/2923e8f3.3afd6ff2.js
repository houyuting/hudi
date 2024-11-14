"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[22499],{98798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"sql_dml","title":"SQL DML","description":"Spark SQL","source":"@site/docs/sql_dml.md","sourceDirName":".","slug":"/sql_dml","permalink":"/docs/next/sql_dml","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/sql_dml.md","tags":[],"version":"current","frontMatter":{"title":"SQL DML","summary":"In this page, we go will cover details on how to use DML statements on Hudi tables.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"SQL DDL","permalink":"/docs/next/sql_ddl"},"next":{"title":"Batch Writes","permalink":"/docs/next/writing_data"}}');var s=t(74848),r=t(28453);t(11470),t(19365);const a={title:"SQL DML",summary:"In this page, we go will cover details on how to use DML statements on Hudi tables.",toc:!0,last_modified_at:null},o=void 0,l={},d=[{value:"Spark SQL",id:"spark-sql",level:2},{value:"Insert Into",id:"insert-into",level:3},{value:"Insert Overwrite",id:"insert-overwrite",level:3},{value:"Update",id:"update",level:3},{value:"Merge Into",id:"merge-into",level:3},{value:"Delete From",id:"delete-from",level:3},{value:"Data Skipping and Indexing",id:"data-skipping-and-indexing",level:3},{value:"Flink SQL",id:"flink-sql",level:2},{value:"Insert Into",id:"insert-into-1",level:3},{value:"Update",id:"update-1",level:3},{value:"Delete From",id:"delete-from-1",level:3},{value:"Lookup Joins",id:"lookup-joins",level:3},{value:"Setting Writer/Reader Configs",id:"setting-writerreader-configs",level:3},{value:"Flink SQL In Action",id:"flink-sql-in-action",level:2},{value:"Non-Blocking Concurrency Control (Experimental)",id:"non-blocking-concurrency-control-experimental",level:3},{value:"Consistent hashing index (Experimental)",id:"consistent-hashing-index-experimental",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"spark-sql",children:"Spark SQL"}),"\n",(0,s.jsx)(n.p,{children:"SparkSQL provides several Data Manipulation Language (DML) actions for interacting with Hudi tables. These operations allow you to insert, update, merge and delete data\nfrom your Hudi tables. Let's explore them one by one."}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"/docs/next/sql_ddl",children:"SQL DDL"})," for creating Hudi tables using SQL."]}),"\n",(0,s.jsx)(n.h3,{id:"insert-into",children:"Insert Into"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"INSERT INTO"})," statement to add data to a Hudi table using Spark SQL. Here are some examples:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO <table> \nSELECT <columns> FROM <source>;\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Deprecations",type:"note",children:(0,s.jsxs)(n.p,{children:["From 0.14.0, ",(0,s.jsx)(n.code,{children:"hoodie.sql.bulk.insert.enable"})," and ",(0,s.jsx)(n.code,{children:"hoodie.sql.insert.mode"})," are deprecated. Users are expected to use ",(0,s.jsx)(n.code,{children:"hoodie.spark.sql.insert.into.operation"})," instead.\nTo manage duplicates with ",(0,s.jsx)(n.code,{children:"INSERT INTO"}),", please check out ",(0,s.jsx)(n.a,{href:"/docs/next/configurations#hoodiedatasourceinsertduppolicy",children:"insert dup policy config"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Insert into a copy-on-write (COW) Hudi table\nINSERT INTO hudi_cow_nonpcf_tbl SELECT 1, 'a1', 20;\n\n-- Insert into a merge-on-read (MOR) Hudi table\nINSERT INTO hudi_mor_tbl SELECT 1, 'a1', 20, 1000;\n\n-- Insert into a COW Hudi table with static partition\nINSERT INTO hudi_cow_pt_tbl PARTITION(dt = '2021-12-09', hh='11') SELECT 2, 'a2', 1000;\n\n-- Insert into a COW Hudi table with dynamic partition\nINSERT INTO hudi_cow_pt_tbl PARTITION(dt, hh) SELECT 1 AS id, 'a1' AS name, 1000 AS ts, '2021-12-09' AS dt, '10' AS hh;\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Mapping to write operations",type:"note",children:(0,s.jsxs)(n.p,{children:["Hudi offers flexibility in choosing the underlying ",(0,s.jsx)(n.a,{href:"/docs/write_operations",children:"write operation"})," of a ",(0,s.jsx)(n.code,{children:"INSERT INTO"})," statement using\nthe ",(0,s.jsx)(n.code,{children:"hoodie.spark.sql.insert.into.operation"})," configuration. Possible options include ",(0,s.jsx)(n.em,{children:'"bulk_insert"'})," (large inserts), ",(0,s.jsx)(n.em,{children:'"insert"'})," (with small file management),\nand ",(0,s.jsx)(n.em,{children:'"upsert"'})," (with deduplication/merging). If a precombine field is not set, ",(0,s.jsx)(n.em,{children:'"insert"'})," is chosen as the default. For a table with preCombine field set,\n",(0,s.jsx)(n.em,{children:'"upsert"'})," is chosen as the default operation."]})}),"\n",(0,s.jsx)(n.h3,{id:"insert-overwrite",children:"Insert Overwrite"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"INSERT OVERWRITE"})," statement is used to replace existing data in a Hudi table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT OVERWRITE <table> \nSELECT <columns> FROM <source>;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["All existing partitions that are affected by the ",(0,s.jsx)(n.code,{children:"INSERT OVERWRITE"})," statement will replaced with the source data.\nHere are some examples:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Overwrite non-partitioned table\nINSERT OVERWRITE hudi_mor_tbl SELECT 99, 'a99', 20.0, 900;\nINSERT OVERWRITE hudi_cow_nonpcf_tbl SELECT 99, 'a99', 20.0;\n\n-- Overwrite partitioned table with dynamic partition\nINSERT OVERWRITE TABLE hudi_cow_pt_tbl SELECT 10, 'a10', 1100, '2021-12-09', '10';\n\n-- Overwrite partitioned table with static partition\nINSERT OVERWRITE hudi_cow_pt_tbl PARTITION(dt = '2021-12-09', hh='12') SELECT 13, 'a13', 1100;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"UPDATE"})," statement to modify existing data in a Hudi table directly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE tableIdentifier SET column = EXPRESSION(,column = EXPRESSION) [ WHERE boolExpression]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Update data in a Hudi table\nUPDATE hudi_mor_tbl SET price = price * 2, ts = 1111 WHERE id = 1;\n\n-- Update data in a partitioned Hudi table\nUPDATE hudi_cow_pt_tbl SET name = 'a1_1', ts = 1001 WHERE id = 1;\n\n-- update using non-PK field\nupdate hudi_cow_pt_tbl set ts = 1001 where name = 'a1';\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"UPDATE"})," operation requires the specification of a ",(0,s.jsx)(n.code,{children:"preCombineField"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"merge-into",children:"Merge Into"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"MERGE INTO"})," statement allows you to perform more complex updates and merges against source data. The ",(0,s.jsx)(n.code,{children:"MERGE INTO"})," statement\nis similar to the ",(0,s.jsx)(n.code,{children:"UPDATE"})," statement, but it allows you to specify different actions for matched and unmatched records."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"MERGE INTO tableIdentifier AS target_alias\nUSING (sub_query | tableIdentifier) AS source_alias\nON <merge_condition>\n[ WHEN MATCHED [ AND <condition> ] THEN <matched_action> ]\n[ WHEN NOT MATCHED [ AND <condition> ]  THEN <not_matched_action> ]\n\n<merge_condition> =A equal bool condition \n<matched_action>  =\n  DELETE  |\n  UPDATE SET *  |\n  UPDATE SET column1 = expression1 [, column2 = expression2 ...]\n<not_matched_action>  =\n  INSERT *  |\n  INSERT (column1 [, column2 ...]) VALUES (value1 [, value2 ...])\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WHEN NOT MATCHED"})," clauses specify the action to perform if the values do not match.\nThere are two kinds of ",(0,s.jsx)(n.code,{children:"INSERT"})," clauses:"]}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"INSERT *"})," clauses require that the source table has the same columns as those in the target table."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"INSERT (column1 [, column2 ...]) VALUES (value1 [, value2 ...])"})," clauses do not require to specify all the columns of the target table. For unspecified target columns, insert the ",(0,s.jsx)(n.code,{children:"NULL"})," value."]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"Examples below"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- source table using hudi for testing merging into non-partitioned table\ncreate table merge_source (id int, name string, price double, ts bigint) using hudi\ntblproperties (primaryKey = 'id', preCombineField = 'ts');\ninsert into merge_source values (1, \"old_a1\", 22.22, 900), (2, \"new_a2\", 33.33, 2000), (3, \"new_a3\", 44.44, 2000);\n\nmerge into hudi_mor_tbl as target\nusing merge_source as source\non target.id = source.id\nwhen matched then update set *\nwhen not matched then insert *\n;\n\n-- source table using parquet for testing merging into partitioned table\ncreate table merge_source2 (id int, name string, flag string, dt string, hh string) using parquet;\ninsert into merge_source2 values (1, \"new_a1\", 'update', '2021-12-09', '10'), (2, \"new_a2\", 'delete', '2021-12-09', '11'), (3, \"new_a3\", 'insert', '2021-12-09', '12');\n\nMERGE into hudi_cow_pt_tbl as target\nusing (\n  select id, name, '1000' as ts, flag, dt, hh from merge_source2\n) source\non target.id = source.id\nwhen matched and flag != 'delete' then\n update set id = source.id, name = source.name, ts = source.ts, dt = source.dt, hh = source.hh\nwhen matched and flag = 'delete' then delete\nwhen not matched then\n insert (id, name, ts, dt, hh) values(source.id, source.name, source.ts, source.dt, source.hh)\n;\n\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Key requirements",type:"note",children:(0,s.jsxs)(n.p,{children:["For a Hudi table with user configured primary keys, the join condition in ",(0,s.jsx)(n.code,{children:"Merge Into"})," is expected to contain the primary keys of the table.\nFor a Table where Hudi auto generates primary keys, the join condition in MIT can be on any arbitrary data columns."]})}),"\n",(0,s.jsx)(n.h3,{id:"delete-from",children:"Delete From"}),"\n",(0,s.jsxs)(n.p,{children:["You can remove data from a Hudi table using the ",(0,s.jsx)(n.code,{children:"DELETE FROM"})," statement."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM tableIdentifier [ WHERE boolExpression ]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Examples below"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Delete data from a Hudi table\nDELETE FROM hudi_cow_nonpcf_tbl WHERE uuid = 1;\n\n-- Delete data from a MOR Hudi table based on a condition\nDELETE FROM hudi_mor_tbl WHERE id % 2 = 0;\n\n-- Delete data using a non-primary key field\nDELETE FROM hudi_cow_pt_tbl WHERE name = 'a1';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"data-skipping-and-indexing",children:"Data Skipping and Indexing"}),"\n",(0,s.jsxs)(n.p,{children:["DML operations can be sped up using column statistics for data skipping and using indexes to reduce the amount of data scanned.\nFor e.g. the following helps speed up the ",(0,s.jsx)(n.code,{children:"DELETE"})," operation on a Hudi table, by using the record level index."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET hoodie.enable.data.skipping=true;\nSET hoodie.metadata.record.index.enable=true;\nSET hoodie.metadata.enable=true;\n\nDELETE from hudi_table where uuid = 'c8abbe79-8d89-47ea-b4ce-4d224bae5bfa';\n"})}),"\n",(0,s.jsx)(n.p,{children:"These DML operations give you powerful tools for managing your tables using Spark SQL.\nYou can control the behavior of these operations using various configuration options, as explained in the documentation."}),"\n",(0,s.jsx)(n.h2,{id:"flink-sql",children:"Flink SQL"}),"\n",(0,s.jsx)(n.p,{children:"Flink SQL provides several Data Manipulation Language (DML) actions for interacting with Hudi tables. These operations allow you to insert, update and delete data from your Hudi tables. Let's explore them one by one."}),"\n",(0,s.jsx)(n.h3,{id:"insert-into-1",children:"Insert Into"}),"\n",(0,s.jsx)(n.p,{children:"You can utilize the INSERT INTO statement to incorporate data into a Hudi table using Flink SQL. Here are a few illustrative examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO <table> \nSELECT <columns> FROM <source>;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Insert into a Hudi table\nINSERT INTO hudi_table SELECT 1, 'a1', 20;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"write.operation"})," is 'upsert,' the INSERT INTO statement will not only insert new records but also update existing rows with the same record key."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Insert into a Hudi table in upsert mode\nINSERT INTO hudi_table/*+ OPTIONS('write.operation'='upsert')*/ SELECT 1, 'a1', 20;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-1",children:"Update"}),"\n",(0,s.jsx)(n.p,{children:"With Flink SQL, you can use update command to update the hudi table. Here are a few illustrative examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE tableIdentifier SET column = EXPRESSION(,column = EXPRESSION) [ WHERE boolExpression]\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE hudi_table SET price = price * 2, ts = 1111 WHERE id = 1;\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Key requirements",type:"note",children:(0,s.jsx)(n.p,{children:"Update query only work with batch excution mode."})}),"\n",(0,s.jsx)(n.h3,{id:"delete-from-1",children:"Delete From"}),"\n",(0,s.jsx)(n.p,{children:"With Flink SQL, you can use delete command to delete the rows from hudi table. Here are a few illustrative examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM tableIdentifier [ WHERE boolExpression ]\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM hudi_table WHERE price < 100;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM hudi_table WHERE price < 100;\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Key requirements",type:"note",children:(0,s.jsx)(n.p,{children:"Delete query only work with batch excution mode."})}),"\n",(0,s.jsx)(n.h3,{id:"lookup-joins",children:"Lookup Joins"}),"\n",(0,s.jsx)(n.p,{children:"A lookup join is typically used to enrich a table with data that is queried from an external system. The join requires\none table to have a processing time attribute and the other table to be backed by a lookup source connector."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE datagen_source(\n    id int,\n    name STRING,\n    proctime as PROCTIME()\n) WITH (\n'connector' = 'datagen',\n'rows-per-second'='1',\n'number-of-rows' = '2',\n'fields.id.kind'='sequence',\n'fields.id.start'='1',\n'fields.id.end'='2'\n);\n\nSELECT o.id,o.name,b.id as id2\nFROM datagen_source AS o\nJOIN hudi_table/*+ OPTIONS('lookup.join.cache.ttl'= '2 day') */ FOR SYSTEM_TIME AS OF o.proctime AS b on o.id = b.id; \n"})}),"\n",(0,s.jsx)(n.h3,{id:"setting-writerreader-configs",children:"Setting Writer/Reader Configs"}),"\n",(0,s.jsx)(n.p,{children:"With Flink SQL, you can additionally set the writer/reader writer configs along with the query."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO hudi_table/*+ OPTIONS('${hoodie.config.key1}'='${hoodie.config.value1}')*/\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO hudi_table/*+ OPTIONS('hoodie.keep.max.commits'='true')*/\n"})}),"\n",(0,s.jsx)(n.h2,{id:"flink-sql-in-action",children:"Flink SQL In Action"}),"\n",(0,s.jsx)(n.p,{children:"The hudi-flink module defines the Flink SQL connector for both hudi source and sink.\nThere are a number of options available for the sink table:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option Name"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Remarks"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:"Base path for the target hoodie table. The path would be created if it does not exist, otherwise a hudi table expects to be initialized successfully"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"table.type"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"COPY_ON_WRITE"}),(0,s.jsx)(n.td,{children:"Type of table to write. COPY_ON_WRITE (or) MERGE_ON_READ"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"write.operation"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"upsert"}),(0,s.jsx)(n.td,{children:"The write operation, that this write should do (insert or upsert is supported)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"write.precombine.field"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"ts"}),(0,s.jsx)(n.td,{children:"Field used in preCombining before actual write. When two records have the same key value, we will pick the one with the largest value for the precombine field, determined by Object.compareTo(..)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"write.payload.class"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"OverwriteWithLatestAvroPayload.class"}),(0,s.jsx)(n.td,{children:"Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for the option in-effective"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"write.insert.drop.duplicates"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Flag to indicate whether to drop duplicates upon insert. By default insert will accept duplicates, to gain extra performance"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"write.ignore.failed"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"Flag to indicate whether to ignore any non exception error (e.g. writestatus error). within a checkpoint batch. By default true (in favor of streaming progressing over data integrity)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"hoodie.datasource.write.recordkey.field"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"uuid"}),(0,s.jsxs)(n.td,{children:["Record key field. Value to be used as the ",(0,s.jsx)(n.code,{children:"recordKey"})," component of ",(0,s.jsx)(n.code,{children:"HoodieKey"}),". Actual value will be obtained by invoking .toString() on the field value. Nested fields can be specified using the dot notation eg: ",(0,s.jsx)(n.code,{children:"a.b.c"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"hoodie.datasource.write.keygenerator.class"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"SimpleAvroKeyGenerator.class"}),(0,s.jsx)(n.td,{children:"Key generator class, that implements will extract the key out of incoming record"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"write.tasks"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Parallelism of tasks that do actual write, default is 4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"write.batch.size.MB"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"128"}),(0,s.jsx)(n.td,{children:"Batch buffer size in MB to flush data into the underneath filesystem"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"If the table type is MERGE_ON_READ, you can also specify the asynchronous compaction strategy through options:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option Name"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Remarks"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"compaction.async.enabled"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"Async Compaction, enabled by default for MOR"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"compaction.trigger.strategy"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"num_commits"}),(0,s.jsx)(n.td,{children:"Strategy to trigger compaction, options are 'num_commits': trigger compaction when reach N delta commits; 'time_elapsed': trigger compaction when time elapsed > N seconds since last compaction; 'num_and_time': trigger compaction when both NUM_COMMITS and TIME_ELAPSED are satisfied; 'num_or_time': trigger compaction when NUM_COMMITS or TIME_ELAPSED is satisfied. Default is 'num_commits'"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"compaction.delta_commits"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Max delta commits needed to trigger compaction, default 5 commits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"compaction.delta_seconds"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"3600"}),(0,s.jsx)(n.td,{children:"Max delta seconds time needed to trigger compaction, default 1 hour"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["You can write the data using the SQL ",(0,s.jsx)(n.code,{children:"INSERT INTO"})," statements:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO hudi_table select ... from ...; \n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": INSERT OVERWRITE is not supported yet but already on the roadmap."]}),"\n",(0,s.jsx)(n.h3,{id:"non-blocking-concurrency-control-experimental",children:"Non-Blocking Concurrency Control (Experimental)"}),"\n",(0,s.jsxs)(n.p,{children:["Hudi Flink supports a new non-blocking concurrency control mode, where multiple writer tasks can be executed\nconcurrently without blocking each other. One can read more about this mode in\nthe ",(0,s.jsx)(n.a,{href:"/docs/next/concurrency_control#model-c-multi-writer",children:"concurrency control"})," docs. Let us see it in action here."]}),"\n",(0,s.jsx)(n.p,{children:"In the below example, we have two streaming ingestion pipelines that concurrently update the same table. One of the\npipeline is responsible for the compaction and cleaning table services, while the other pipeline is just for data\ningestion."}),"\n",(0,s.jsx)(n.p,{children:"In order to commit the dataset, the checkpoint needs to be enabled, here is an example configuration for a flink-conf.yaml:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"-- set the interval as 30 seconds\nexecution.checkpointing.interval: 30000\nstate.backend: rocksdb\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- This is a datagen source that can generate records continuously\nCREATE TABLE sourceT (\n    uuid varchar(20),\n    name varchar(10),\n    age int,\n    ts timestamp(3),\n    `partition` as 'par1'\n) WITH (\n    'connector' = 'datagen',\n    'rows-per-second' = '200'\n);\n\n-- pipeline1: by default enable the compaction and cleaning services\nCREATE TABLE t1(\n    uuid varchar(20),\n    name varchar(10),\n    age int,\n    ts timestamp(3),\n    `partition` varchar(20)\n) WITH (\n    'connector' = 'hudi',\n    'path' = '${work_path}/hudi-demo/t1',\n    'table.type' = 'MERGE_ON_READ',\n    'index.type' = 'BUCKET',\n    'hoodie.write.concurrency.mode' = 'NON_BLOCKING_CONCURRENCY_CONTROL',\n    'write.tasks' = '2'\n);\n\n-- pipeline2: disable the compaction and cleaning services manually\nCREATE TABLE t1_2(\n    uuid varchar(20),\n    name varchar(10),\n    age int,\n    ts timestamp(3),\n    `partition` varchar(20)\n) WITH (\n    'connector' = 'hudi',\n    'path' = '${work_path}/hudi-demo/t1',\n    'table.type' = 'MERGE_ON_READ',\n    'index.type' = 'BUCKET',\n    'hoodie.write.concurrency.mode' = 'NON_BLOCKING_CONCURRENCY_CONTROL',\n    'write.tasks' = '2',\n    'compaction.schedule.enabled' = 'false',\n    'compaction.async.enabled' = 'false',\n    'clean.async.enabled' = 'false'\n);\n\n-- submit the pipelines\ninsert into t1 select * from sourceT;\ninsert into t1_2 select * from sourceT;\n\nselect * from t1 limit 20;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see from the above example, we have two pipelines with multiple tasks that concurrently write to the\nsame table. To use the new concurrency mode, all you need to do is set the ",(0,s.jsx)(n.code,{children:"hoodie.write.concurrency.mode"}),"\nto ",(0,s.jsx)(n.code,{children:"NON_BLOCKING_CONCURRENCY_CONTROL"}),". The ",(0,s.jsx)(n.code,{children:"write.tasks"})," option is used to specify the number of write tasks that will\nbe used for writing to the table. The ",(0,s.jsx)(n.code,{children:"compaction.schedule.enabled"}),", ",(0,s.jsx)(n.code,{children:"compaction.async.enabled"}),"\nand ",(0,s.jsx)(n.code,{children:"clean.async.enabled"})," options are used to disable the compaction and cleaning services for the second pipeline.\nThis is done to ensure that the compaction and cleaning services are not executed twice for the same table."]}),"\n",(0,s.jsx)(n.h3,{id:"consistent-hashing-index-experimental",children:"Consistent hashing index (Experimental)"}),"\n",(0,s.jsxs)(n.p,{children:["We have introduced the Consistent Hashing Index since ",(0,s.jsx)(n.a,{href:"/releases/release-0.13.0#consistent-hashing-index",children:"0.13.0 release"}),". In comparison to the static hashing index (",(0,s.jsx)(n.a,{href:"/releases/release-0.11.0#bucket-index",children:"Bucket Index"}),"), the consistent hashing index offers dynamic scalability of data buckets for the writer.\nYou can find the ",(0,s.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-42/rfc-42.md",children:"RFC"})," for the design of this feature.\nIn the 0.13.X release, the Consistent Hashing Index is supported only for Spark engine. And since ",(0,s.jsx)(n.a,{href:"/releases/release-0.14.0#consistent-hashing-index-support",children:"release 0.14.0"}),", the index is supported for Flink engine."]}),"\n",(0,s.jsxs)(n.p,{children:["To utilize this feature, configure the option ",(0,s.jsx)(n.code,{children:"index.type"})," as ",(0,s.jsx)(n.code,{children:"BUCKET"})," and set ",(0,s.jsx)(n.code,{children:"hoodie.index.bucket.engine"})," to ",(0,s.jsx)(n.code,{children:"CONSISTENT_HASHING"}),".\nWhen enabling the consistent hashing index, it's important to enable clustering scheduling within the writer. During this process, the writer will perform dual writes for both the old and new data buckets while the clustering is pending. Although the dual write does not impact correctness, it is strongly recommended to execute clustering as quickly as possible."]}),"\n",(0,s.jsx)(n.p,{children:"In the below example, we will create a datagen source and do streaming ingestion into Hudi table with consistent bucket index. In order to commit the dataset, the checkpoint needs to be enabled, here is an example configuration for a flink-conf.yaml:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"-- set the interval as 30 seconds\nexecution.checkpointing.interval: 30000\nstate.backend: rocksdb\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- This is a datagen source that can generate records continuously\nCREATE TABLE sourceT (\n    uuid varchar(20),\n    name varchar(10),\n    age int,\n    ts timestamp(3),\n    `partition` as 'par1'\n) WITH (\n    'connector' = 'datagen',\n    'rows-per-second' = '200'\n);\n\n-- Create the hudi table with consistent bucket index\nCREATE TABLE t1(\n    uuid VARCHAR(20) PRIMARY KEY NOT ENFORCED,\n    name VARCHAR(10),\n    age INT,\n    ts TIMESTAMP(3),\n    `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n    'connector'='hudi',\n    'path' = '${work_path}/hudi-demo/hudiT',\n    'table.type' = 'MERGE_ON_READ',\n    'index.type' = 'BUCKET',\n    'clustering.schedule.enabled'='true',\n    'hoodie.index.bucket.engine'='CONSISTENT_HASHING',\n    'hoodie.clustering.plan.strategy.class'='org.apache.hudi.client.clustering.plan.strategy.FlinkConsistentBucketClusteringPlanStrategy',\n    'hoodie.clustering.execution.strategy.class'='org.apache.hudi.client.clustering.run.strategy.SparkConsistentBucketClusteringExecutionStrategy',\n    'hoodie.bucket.index.num.buckets'='8',\n    'hoodie.bucket.index.max.num.buckets'='128',\n    'hoodie.bucket.index.min.num.buckets'='8',\n    'hoodie.bucket.index.split.threshold'='1.5',\n    'write.tasks'='2'\n);\n\n-- submit the pipelines\ninsert into t1 select * from sourceT;\n\nselect * from t1 limit 20;\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["Consistent Hashing Index is supported for Flink engine since ",(0,s.jsx)(n.a,{href:"/releases/release-0.14.0#consistent-hashing-index-support",children:"release 0.14.0"})," and currently there are some limitations to use it as of 0.14.0:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This index is supported only for MOR table. This limitation also exists even if using Spark engine."}),"\n",(0,s.jsx)(n.li,{children:"It does not work with metadata table enabled. This limitation also exists even if using Spark engine."}),"\n",(0,s.jsx)(n.li,{children:"Consistent hashing index does not work with bulk-insert using Flink engine yet, please use simple bucket index or Spark engine for bulk-insert pipelines."}),"\n",(0,s.jsx)(n.li,{children:"The resize plan which generated by Flink engine only supports merging small file groups, the file splitting is not supported yet."}),"\n",(0,s.jsx)(n.li,{children:"The resize plan should be executed through an offline Spark job. Flink engine does not support execute resize plan yet."}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var i=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(96540),s=t(34164),r=t(23104),a=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(70679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[d,h]=m({queryString:t,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),b=(()=>{const e=d??x;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function f(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==i&&(d(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...r,className:(0,s.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function E(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function T(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(E,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,j.jsx)(T,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);