"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[36144],{79295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"schema_evolution","title":"Schema Evolution","description":"Schema evolution allows users to easily change the current schema of a Hudi table to adapt to the data that is changing over time.","source":"@site/versioned_docs/version-0.13.1/schema_evolution.md","sourceDirName":".","slug":"/schema_evolution","permalink":"/docs/0.13.1/schema_evolution","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/schema_evolution.md","tags":[],"version":"0.13.1","frontMatter":{"title":"Schema Evolution","keywords":["hudi","incremental","batch","stream","processing","schema","evolution"],"summary":"In this page, we will discuss schema evolution support in Hudi.","toc":true,"last_modified_at":"2022-04-27T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Write Operations","permalink":"/docs/0.13.1/write_operations"},"next":{"title":"Key Generation","permalink":"/docs/0.13.1/key_generation"}}');var s=t(74848),i=t(28453);const r={title:"Schema Evolution",keywords:["hudi","incremental","batch","stream","processing","schema","evolution"],summary:"In this page, we will discuss schema evolution support in Hudi.",toc:!0,last_modified_at:new Date("2022-04-27T19:59:57.000Z")},a=void 0,o={},d=[{value:"Scenarios",id:"scenarios",level:3},{value:"SparkSQL Schema Evolution and Syntax Description",id:"sparksql-schema-evolution-and-syntax-description",level:2},{value:"Adding Columns",id:"adding-columns",level:3},{value:"Altering Columns",id:"altering-columns",level:3},{value:"Deleting Columns",id:"deleting-columns",level:3},{value:"Changing Column Name",id:"changing-column-name",level:3},{value:"Modifying Table Properties",id:"modifying-table-properties",level:3},{value:"Changing a Table Name",id:"changing-a-table-name",level:3},{value:"Out-of-the-box Schema Evolution",id:"out-of-the-box-schema-evolution",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Schema evolution allows users to easily change the current schema of a Hudi table to adapt to the data that is changing over time.\nAs of 0.11.0 release, Spark SQL (Spark 3.1.x, 3.2.1 and above) DDL support for Schema evolution has been added and is experimental."}),"\n",(0,s.jsx)(n.h3,{id:"scenarios",children:"Scenarios"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Columns (including nested columns) can be added, deleted, modified, and moved."}),"\n",(0,s.jsx)(n.li,{children:"Partition columns cannot be evolved."}),"\n",(0,s.jsx)(n.li,{children:"You cannot add, delete, or perform operations on nested columns of the Array type."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sparksql-schema-evolution-and-syntax-description",children:"SparkSQL Schema Evolution and Syntax Description"}),"\n",(0,s.jsxs)(n.p,{children:["Before using schema evolution, pls set ",(0,s.jsx)(n.code,{children:"spark.sql.extensions"}),". For Spark 3.2.1 and above,\n",(0,s.jsx)(n.code,{children:"spark.sql.catalog.spark_catalog"})," also need to be set."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Spark SQL for spark 3.1.x\nspark-sql --packages org.apache.hudi:hudi-spark3.1.2-bundle_2.12:0.11.1 \\\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n--conf 'spark.sql.extensions=org.apache.spark.sql.hudi.HoodieSparkSessionExtension'\n\n# Spark SQL for spark 3.2.1 and above\nspark-sql --packages org.apache.hudi:hudi-spark3-bundle_2.12:0.11.1 \\\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n--conf 'spark.sql.extensions=org.apache.spark.sql.hudi.HoodieSparkSessionExtension' \\\n--conf 'spark.sql.catalog.spark_catalog=org.apache.spark.sql.hudi.catalog.HoodieCatalog'\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After start spark-app,  pls exec ",(0,s.jsx)(n.code,{children:"set hoodie.schema.on.read.enable=true"})," to enable schema evolution."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Currently, Schema evolution cannot disabled once being enabled."})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["When use hive metastore, may encounter a problem: ",(0,s.jsx)(n.code,{children:"org.apache.hadoop.hive.ql.metadata.HiveException"}),": Unable to alter table. The following columns have types incompatible with the existing columns in their respective positions."]}),(0,s.jsxs)(n.p,{children:["Make sure disable ",(0,s.jsx)(n.code,{children:"hive.metastore.disallow.incompatible.col.type.changes"})," in hive side."]})]}),"\n",(0,s.jsx)(n.h3,{id:"adding-columns",children:"Adding Columns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- add columns\nALTER TABLE tableName ADD COLUMNS(col_spec[, col_spec ...])\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameter Description"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"tableName"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Table name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"col_spec"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Column specifications, consisting of five fields, ",(0,s.jsx)(n.em,{children:"col_name"}),", ",(0,s.jsx)(n.em,{children:"col_type"}),", ",(0,s.jsx)(n.em,{children:"nullable"}),", ",(0,s.jsx)(n.em,{children:"comment"}),", and ",(0,s.jsx)(n.em,{children:"col_position"}),"."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"col_name"})," : name of the new column. It is mandatory.To add a sub-column to a nested column, specify the full name of the sub-column in this field."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To add sub-column col1 to a nested struct type column column users struct<name: string, age: int>, set this field to users.col1."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To add sub-column col1 to a nested map type column memeber map<string, struct<n: string, a: int>>, set this field to member.value.col1."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"col_type"})," : type of the new column."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"nullable"})," : whether the new column can be null. The value can be left empty. Now this field is not used in Hudi."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"comment"})," : comment of the new column. The value can be left empty."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"col_position"})," : position where the new column is added. The value can be ",(0,s.jsx)(n.em,{children:"FIRST"})," or ",(0,s.jsx)(n.em,{children:"AFTER"})," origin_col."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If it is set to ",(0,s.jsx)(n.em,{children:"FIRST"}),", the new column will be added to the first column of the table."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If it is set to ",(0,s.jsx)(n.em,{children:"AFTER"})," origin_col, the new column will be added after original column origin_col."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The value can be left empty. ",(0,s.jsx)(n.em,{children:"FIRST"})," can be used only when new sub-columns are added to nested columns. Do not use ",(0,s.jsx)(n.em,{children:"FIRST"})," in top-level columns. There are no restrictions about the usage of ",(0,s.jsx)(n.em,{children:"AFTER"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE h0 ADD COLUMNS(ext0 string);\nALTER TABLE h0 ADD COLUMNS(new_col int not null comment 'add new column' AFTER col1);\nALTER TABLE complex_table ADD COLUMNS(col_struct.col_name string comment 'add new column to a struct col' AFTER col_from_col_struct);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"altering-columns",children:"Altering Columns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- alter table ... alter column\nALTER TABLE tableName ALTER [COLUMN] col_old_name TYPE column_type [COMMENT] col_comment[FIRST|AFTER] column_name\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameter Description"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"tableName"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Table name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"col_old_name"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Name of the column to be altered."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"column_type"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Type of the target column."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"col_comment"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"col_comment."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"column_name"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["New position to place the target column. For example, ",(0,s.jsx)(n.em,{children:"AFTER"})," ",(0,s.jsx)(n.strong,{children:"column_name"})," indicates that the target column is placed after ",(0,s.jsx)(n.strong,{children:"column_name"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"--- Changing the column type\nALTER TABLE table1 ALTER COLUMN a.b.c TYPE bigint\n\n--- Altering other attributes\nALTER TABLE table1 ALTER COLUMN a.b.c COMMENT 'new comment'\nALTER TABLE table1 ALTER COLUMN a.b.c FIRST\nALTER TABLE table1 ALTER COLUMN a.b.c AFTER x\nALTER TABLE table1 ALTER COLUMN a.b.c DROP NOT NULL\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"column type change"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Source\\Target"}),(0,s.jsx)(n.th,{children:"long"}),(0,s.jsx)(n.th,{children:"float"}),(0,s.jsx)(n.th,{children:"double"}),(0,s.jsx)(n.th,{children:"string"}),(0,s.jsx)(n.th,{children:"decimal"}),(0,s.jsx)(n.th,{children:"date"}),(0,s.jsx)(n.th,{children:"int"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"double"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"decimal"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"N"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"date"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"N"}),(0,s.jsx)(n.td,{children:"Y"}),(0,s.jsx)(n.td,{children:"N"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"deleting-columns",children:"Deleting Columns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- alter table ... drop columns\nALTER TABLE tableName DROP COLUMN|COLUMNS cols\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table1 DROP COLUMN a.b.c\nALTER TABLE table1 DROP COLUMNS a.b.c, x, y\n"})}),"\n",(0,s.jsx)(n.h3,{id:"changing-column-name",children:"Changing Column Name"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- alter table ... rename column\nALTER TABLE tableName RENAME COLUMN old_columnName TO new_columnName\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table1 RENAME COLUMN a.b.c TO x\n"})}),"\n",(0,s.jsx)(n.h3,{id:"modifying-table-properties",children:"Modifying Table Properties"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- alter table ... set|unset\nALTER TABLE tableName SET|UNSET tblproperties\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table SET TBLPROPERTIES ('table_property' = 'property_value')\nALTER TABLE table UNSET TBLPROPERTIES [IF EXISTS] ('comment', 'key')\n"})}),"\n",(0,s.jsx)(n.h3,{id:"changing-a-table-name",children:"Changing a Table Name"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- alter table ... rename\nALTER TABLE tableName RENAME TO newTableName\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table1 RENAME TO table2\n"})}),"\n",(0,s.jsx)(n.h2,{id:"out-of-the-box-schema-evolution",children:"Out-of-the-box Schema Evolution"}),"\n",(0,s.jsx)(n.p,{children:"Schema evolution is a very important aspect of data management.\nHudi supports common schema evolution scenarios, such as adding a nullable field or promoting a datatype of a field, out-of-the-box.\nFurthermore, the evolved schema is queryable across engines, such as Presto, Hive and Spark SQL.\nThe following table presents a summary of the types of schema changes compatible with different Hudi table types."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Schema Change"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"COW"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"MOR"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Add a new nullable column at root level at the end"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"Yes"})," means that a write with evolved schema succeeds and a read following the write succeeds to read entire dataset."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Add a new nullable column to inner struct (at the end)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Add a new complex type field with default (map and array)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Add a new nullable column and change the ordering of fields"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Write succeeds but read fails if the write with evolved schema updated only some of the base files but not all. Currently, Hudi does not maintain a schema registry with history of changes across base files. Nevertheless, if the upsert touched all base files then the read will succeed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Add a custom nullable Hudi meta column, e.g. ",(0,s.jsx)(n.code,{children:"_hoodie_meta_col"})]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Promote datatype from ",(0,s.jsx)(n.code,{children:"int"})," to ",(0,s.jsx)(n.code,{children:"long"})," for a field at root level"]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["For other types, Hudi supports promotion as specified in ",(0,s.jsx)(n.a,{href:"http://avro.apache.org/docs/current/spec#Schema+Resolution",children:"Avro schema resolution"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Promote datatype from ",(0,s.jsx)(n.code,{children:"int"})," to ",(0,s.jsx)(n.code,{children:"long"})," for a nested field"]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Promote datatype from ",(0,s.jsx)(n.code,{children:"int"})," to ",(0,s.jsx)(n.code,{children:"long"})," for a complex type (value of map or array)"]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Add a new non-nullable column at root level at the end"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["In case of MOR table with Spark data source, write succeeds but read fails. As a ",(0,s.jsx)(n.strong,{children:"workaround"}),", you can make the field nullable."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Add a new non-nullable column to inner struct (at the end)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Change datatype from ",(0,s.jsx)(n.code,{children:"long"})," to ",(0,s.jsx)(n.code,{children:"int"})," for a nested field"]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Change datatype from ",(0,s.jsx)(n.code,{children:"long"})," to ",(0,s.jsx)(n.code,{children:"int"})," for a complex type (value of map or array)"]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Let us walk through an example to demonstrate the schema evolution support in Hudi.\nIn the below example, we are going to add a new string field and change the datatype of a field from int to long."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'Welcome to\n    ____              __\n    / __/__  ___ _____/ /__\n    _\\ \\/ _ \\/ _ `/ __/  \'_/\n    /___/ .__/\\_,_/_/ /_/\\_\\   version 3.1.2\n    /_/\n\n    Using Scala version 2.12.10 (OpenJDK 64-Bit Server VM, Java 1.8.0_292)\n    Type in expressions to have them evaluated.\n    Type :help for more information.\n\nscala> import org.apache.hudi.QuickstartUtils._\nimport org.apache.hudi.QuickstartUtils._\n\nscala> import scala.collection.JavaConversions._\nimport scala.collection.JavaConversions._\n\nscala> import org.apache.spark.sql.SaveMode._\nimport org.apache.spark.sql.SaveMode._\n\nscala> import org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceReadOptions._\n\nscala> import org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\n\nscala> import org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nscala> import org.apache.spark.sql.types._\nimport org.apache.spark.sql.types._\n\nscala> import org.apache.spark.sql.Row\nimport org.apache.spark.sql.Row\n\nscala> val tableName = "hudi_trips_cow"\n    tableName: String = hudi_trips_cow\nscala> val basePath = "file:///tmp/hudi_trips_cow"\n    basePath: String = file:///tmp/hudi_trips_cow\nscala> val schema = StructType( Array(\n    | StructField("rowId", StringType,true),\n    | StructField("partitionId", StringType,true),\n    | StructField("preComb", LongType,true),\n    | StructField("name", StringType,true),\n    | StructField("versionId", StringType,true),\n    | StructField("intToLong", IntegerType,true)\n    | ))\n    schema: org.apache.spark.sql.types.StructType = StructType(StructField(rowId,StringType,true), StructField(partitionId,StringType,true), StructField(preComb,LongType,true), StructField(name,StringType,true), StructField(versionId,StringType,true), StructField(intToLong,IntegerType,true))\n    \nscala> val data1 = Seq(Row("row_1", "part_0", 0L, "bob", "v_0", 0),\n    |                Row("row_2", "part_0", 0L, "john", "v_0", 0),\n    |                Row("row_3", "part_0", 0L, "tom", "v_0", 0))\n    data1: Seq[org.apache.spark.sql.Row] = List([row_1,part_0,0,bob,v_0,0], [row_2,part_0,0,john,v_0,0], [row_3,part_0,0,tom,v_0,0])\n\nscala> var dfFromData1 = spark.createDataFrame(data1, schema)\nscala> dfFromData1.write.format("hudi").\n    |   options(getQuickstartWriteConfigs).\n    |   option(PRECOMBINE_FIELD.key, "preComb").\n    |   option(RECORDKEY_FIELD.key, "rowId").\n    |   option(PARTITIONPATH_FIELD.key, "partitionId").\n    |   option("hoodie.index.type","SIMPLE").\n    |   option(TBL_NAME.key, tableName).\n    |   mode(Overwrite).\n    |   save(basePath)\n\nscala> var tripsSnapshotDF1 = spark.read.format("hudi").load(basePath + "/*/*")\n    tripsSnapshotDF1: org.apache.spark.sql.DataFrame = [_hoodie_commit_time: string, _hoodie_commit_seqno: string ... 9 more fields]\n\nscala> tripsSnapshotDF1.createOrReplaceTempView("hudi_trips_snapshot")\n\nscala> spark.sql("desc hudi_trips_snapshot").show()\n    +--------------------+---------+-------+\n    |            col_name|data_type|comment|\n    +--------------------+---------+-------+\n    | _hoodie_commit_time|   string|   null|\n    |_hoodie_commit_seqno|   string|   null|\n    |  _hoodie_record_key|   string|   null|\n    |_hoodie_partition...|   string|   null|\n    |   _hoodie_file_name|   string|   null|\n    |               rowId|   string|   null|\n    |         partitionId|   string|   null|\n    |             preComb|   bigint|   null|\n    |                name|   string|   null|\n    |           versionId|   string|   null|\n    |           intToLong|      int|   null|\n    +--------------------+---------+-------+\n    \nscala> spark.sql("select rowId, partitionId, preComb, name, versionId, intToLong from hudi_trips_snapshot").show()\n    +-----+-----------+-------+----+---------+---------+\n    |rowId|partitionId|preComb|name|versionId|intToLong|\n    +-----+-----------+-------+----+---------+---------+\n    |row_3|     part_0|      0| tom|      v_0|        0|\n    |row_2|     part_0|      0|john|      v_0|        0|\n    |row_1|     part_0|      0| bob|      v_0|        0|\n    +-----+-----------+-------+----+---------+---------+\n\n// In the new schema, we are going to add a String field and \n// change the datatype `intToLong` field from  int to long.\nscala> val newSchema = StructType( Array(\n    | StructField("rowId", StringType,true),\n    | StructField("partitionId", StringType,true),\n    | StructField("preComb", LongType,true),\n    | StructField("name", StringType,true),\n    | StructField("versionId", StringType,true),\n    | StructField("intToLong", LongType,true),\n    | StructField("newField", StringType,true)\n    | ))\n    newSchema: org.apache.spark.sql.types.StructType = StructType(StructField(rowId,StringType,true), StructField(partitionId,StringType,true), StructField(preComb,LongType,true), StructField(name,StringType,true), StructField(versionId,StringType,true), StructField(intToLong,LongType,true), StructField(newField,StringType,true))\n\nscala> val data2 = Seq(Row("row_2", "part_0", 5L, "john", "v_3", 3L, "newField_1"),\n    |                Row("row_5", "part_0", 5L, "maroon", "v_2", 2L, "newField_1"),\n    |                Row("row_9", "part_0", 5L, "michael", "v_2", 2L, "newField_1"))\n    data2: Seq[org.apache.spark.sql.Row] = List([row_2,part_0,5,john,v_3,3,newField_1], [row_5,part_0,5,maroon,v_2,2,newField_1], [row_9,part_0,5,michael,v_2,2,newField_1])\n\nscala> var dfFromData2 = spark.createDataFrame(data2, newSchema)\nscala> dfFromData2.write.format("hudi").\n    |   options(getQuickstartWriteConfigs).\n    |   option(PRECOMBINE_FIELD.key, "preComb").\n    |   option(RECORDKEY_FIELD.key, "rowId").\n    |   option(PARTITIONPATH_FIELD.key, "partitionId").\n    |   option("hoodie.index.type","SIMPLE").\n    |   option(TBL_NAME.key, tableName).\n    |   mode(Append).\n    |   save(basePath)\n\nscala> var tripsSnapshotDF2 = spark.read.format("hudi").load(basePath + "/*/*")\n    tripsSnapshotDF2: org.apache.spark.sql.DataFrame = [_hoodie_commit_time: string, _hoodie_commit_seqno: string ... 10 more fields]\n\nscala> tripsSnapshotDF2.createOrReplaceTempView("hudi_trips_snapshot")\n\nscala> spark.sql("desc hudi_trips_snapshot").show()\n    +--------------------+---------+-------+\n    |            col_name|data_type|comment|\n    +--------------------+---------+-------+\n    | _hoodie_commit_time|   string|   null|\n    |_hoodie_commit_seqno|   string|   null|\n    |  _hoodie_record_key|   string|   null|\n    |_hoodie_partition...|   string|   null|\n    |   _hoodie_file_name|   string|   null|\n    |               rowId|   string|   null|\n    |         partitionId|   string|   null|\n    |             preComb|   bigint|   null|\n    |                name|   string|   null|\n    |           versionId|   string|   null|\n    |           intToLong|   bigint|   null|\n    |            newField|   string|   null|\n    +--------------------+---------+-------+\n\n\nscala> spark.sql("select rowId, partitionId, preComb, name, versionId, intToLong, newField from hudi_trips_snapshot").show()\n    +-----+-----------+-------+-------+---------+---------+----------+\n    |rowId|partitionId|preComb|   name|versionId|intToLong|  newField|\n    +-----+-----------+-------+-------+---------+---------+----------+\n    |row_3|     part_0|      0|    tom|      v_0|        0|      null|\n    |row_2|     part_0|      5|   john|      v_3|        3|newField_1|\n    |row_1|     part_0|      0|    bob|      v_0|        0|      null|\n    |row_5|     part_0|      5| maroon|      v_2|        2|newField_1|\n    |row_9|     part_0|      5|michael|      v_2|        2|newField_1|\n    +-----+-----------+-------+-------+---------+---------+----------+\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var l=t(96540);const s={},i=l.createContext(s);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);