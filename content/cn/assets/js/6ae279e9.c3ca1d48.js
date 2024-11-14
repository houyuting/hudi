"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[64659],{89494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"table_management","title":"SQL DDL","description":"The following are SparkSQL table management actions available:","source":"@site/versioned_docs/version-0.11.1/table_management.md","sourceDirName":".","slug":"/table_management","permalink":"/cn/docs/0.11.1/table_management","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.1/table_management.md","tags":[],"version":"0.11.1","frontMatter":{"title":"SQL DDL","summary":"In this page, we introduce how to create tables with Hudi.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"Concurrency Control","permalink":"/cn/docs/0.11.1/concurrency_control"},"next":{"title":"Procedures","permalink":"/cn/docs/0.11.1/procedures"}}');var r=t(74848),l=t(28453);t(11470),t(19365);const i={title:"SQL DDL",summary:"In this page, we introduce how to create tables with Hudi.",toc:!0,last_modified_at:null},s=void 0,d={},o=[{value:"Spark Create Table",id:"spark-create-table",level:2},{value:"Options",id:"options",level:3},{value:"Table Type",id:"table-type",level:3},{value:"Primary Key",id:"primary-key",level:3},{value:"PreCombineField",id:"precombinefield",level:3},{value:"Partitioned Table",id:"partitioned-table",level:3},{value:"Create Table for an External Hudi Table",id:"create-table-for-an-external-hudi-table",level:3},{value:"Create Table AS SELECT",id:"create-table-as-select",level:3},{value:"Set hoodie config options",id:"set-hoodie-config-options",level:3},{value:"Spark Alter Table",id:"spark-alter-table",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples",level:3},{value:"Alter hoodie config options",id:"alter-hoodie-config-options",level:3},{value:"Use set command",id:"use-set-command",level:3},{value:"Flink",id:"flink",level:2},{value:"Create Table",id:"create-table",level:3},{value:"Alter Table",id:"alter-table",level:3},{value:"Supported Types",id:"supported-types",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The following are SparkSQL table management actions available:"}),"\n",(0,r.jsx)(n.h2,{id:"spark-create-table",children:"Spark Create Table"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Only SparkSQL needs an explicit Create Table command. No Create Table command is required in Spark when using Scala or Python. The first batch of a ",(0,r.jsx)(n.a,{href:"/docs/writing_data",children:"Write"})," to a table will create the table if it does not exist."]})}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.p,{children:"Users can set table options while creating a hudi table."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"(Optional/Required) : Default Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"primaryKey"}),(0,r.jsx)(n.td,{children:"The primary key names of the table, multiple fields separated by commas."}),(0,r.jsxs)(n.td,{children:["(Optional) : ",(0,r.jsx)(n.code,{children:"id"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsxs)(n.td,{children:["The type of table to create (",(0,r.jsx)(n.a,{href:"/docs/table_types",children:"read more"}),"). ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"cow"})," = COPY-ON-WRITE, ",(0,r.jsx)(n.code,{children:"mor"})," = MERGE-ON-READ."]}),(0,r.jsxs)(n.td,{children:["(Optional) : ",(0,r.jsx)(n.code,{children:"cow"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"preCombineField"}),(0,r.jsx)(n.td,{children:"The Pre-Combine field of the table."}),(0,r.jsxs)(n.td,{children:["(Optional) : ",(0,r.jsx)(n.code,{children:"ts"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:'To set any custom hudi config(like index type, max parquet size, etc), see the  "Set hudi config section" .'}),"\n",(0,r.jsx)(n.h3,{id:"table-type",children:"Table Type"}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of creating a COW table."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- create a non-primary key table\ncreate table if not exists hudi_table2(\n  id int, \n  name string, \n  price double\n) using hudi\noptions (\n  type = 'cow'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"primary-key",children:"Primary Key"}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of creating COW table with a primary key 'id'."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- create a managed cow table\ncreate table if not exists hudi_table0 (\n  id int, \n  name string, \n  price double\n) using hudi\noptions (\n  type = 'cow',\n  primaryKey = 'id'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"precombinefield",children:"PreCombineField"}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example of creating an MOR external table. The ",(0,r.jsx)(n.strong,{children:"preCombineField"})," option\nis used to specify the preCombine field for merge."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- create an external mor table\ncreate table if not exists hudi_table1 (\n  id int, \n  name string, \n  price double,\n  ts bigint\n) using hudi\noptions (\n  type = 'mor',\n  primaryKey = 'id,name',\n  preCombineField = 'ts' \n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"partitioned-table",children:"Partitioned Table"}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of creating a COW partitioned table."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create table if not exists hudi_table_p0 (\nid bigint,\nname string,\ndt string,\nhh string  \n) using hudi\noptions (\n  type = 'cow',\n  primaryKey = 'id'\n ) \npartitioned by (dt, hh);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-table-for-an-external-hudi-table",children:"Create Table for an External Hudi Table"}),"\n",(0,r.jsxs)(n.p,{children:["You can create an External table using the ",(0,r.jsx)(n.code,{children:"location"})," statement. If an external location is not specified it is considered a managed table. You can read more about external vs managed tables ",(0,r.jsx)(n.a,{href:"https://sparkbyexamples.com/apache-hive/difference-between-hive-internal-tables-and-external-tables/",children:"here"}),".\nAn external table is useful if you need to read/write to/from a pre-existing hudi table."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" create table h_p1 using hudi\n location '/path/to/hudi';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-table-as-select",children:"Create Table AS SELECT"}),"\n",(0,r.jsxs)(n.p,{children:["Hudi supports CTAS(Create table as select) on spark sql. ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Note:"})," For better performance to load data to hudi table, CTAS uses ",(0,r.jsx)(n.strong,{children:"bulk insert"})," as the write operation."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example CTAS command to create a non-partitioned COW table."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create table h3 using hudi\nas\nselect 1 as id, 'a1' as name, 10 as price;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example CTAS command to create a partitioned, primary key COW table."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create table h2 using hudi\noptions (type = 'cow', primaryKey = 'id')\npartitioned by (dt)\nas\nselect 1 as id, 'a1' as name, 10 as price, 1000 as dt;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example CTAS command to load data from another table."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"# create managed parquet table \ncreate table parquet_mngd using parquet location 'file:///tmp/parquet_dataset/*.parquet';\n\n# CTAS by loading data into hudi table\ncreate table hudi_tbl using hudi location 'file:/tmp/hudi/hudi_tbl/' options ( \n  type = 'cow', \n  primaryKey = 'id', \n  preCombineField = 'ts' \n ) \npartitioned by (datestr) as select * from parquet_mngd;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"set-hoodie-config-options",children:"Set hoodie config options"}),"\n",(0,r.jsx)(n.p,{children:"You can also set the config with table options when creating table which will work for\nthe table scope only and override the config set by the SET command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create table if not exists h3(\n  id bigint, \n  name string, \n  price double\n) using hudi\noptions (\n  primaryKey = 'id',\n  type = 'mor',\n  ${hoodie.config.key1} = '${hoodie.config.value2}',\n  ${hoodie.config.key2} = '${hoodie.config.value2}',\n  ....\n);\n\ne.g.\ncreate table if not exists h3(\n  id bigint, \n  name string, \n  price double\n) using hudi\noptions (\n  primaryKey = 'id',\n  type = 'mor',\n  hoodie.cleaner.fileversions.retained = '20',\n  hoodie.keep.max.commits = '20'\n);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"spark-alter-table",children:"Spark Alter Table"}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- Alter table name\nALTER TABLE oldTableName RENAME TO newTableName\n\n-- Alter table add columns\nALTER TABLE tableIdentifier ADD COLUMNS(colAndType (,colAndType)*)\n\n-- Alter table column type\nALTER TABLE tableIdentifier CHANGE COLUMN colName colName colType\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ALTER TABLE ... RENAME TO ..."})," is not supported when using AWS Glue Data Catalog as hive metastore as Glue itself does\nnot support table renames."]})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"alter table h0 rename to h0_1;\n\nalter table h0_1 add columns(ext0 string);\n\nalter table h0_1 change column id id bigint;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"alter-hoodie-config-options",children:"Alter hoodie config options"}),"\n",(0,r.jsxs)(n.p,{children:["You can also alter the write config for a table by the ",(0,r.jsx)(n.strong,{children:"ALTER SERDEPROPERTIES"})]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" alter table h3 set serdeproperties (hoodie.keep.max.commits = '10') \n"})}),"\n",(0,r.jsx)(n.h3,{id:"use-set-command",children:"Use set command"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.strong,{children:"set"})," command to set any custom hudi's config, which will work for the\nwhole spark session scope."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"set hoodie.insert.shuffle.parallelism = 100;\nset hoodie.upsert.shuffle.parallelism = 100;\nset hoodie.delete.shuffle.parallelism = 100;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"flink",children:"Flink"}),"\n",(0,r.jsx)(n.h3,{id:"create-table",children:"Create Table"}),"\n",(0,r.jsxs)(n.p,{children:["The following is a Flink example to create a table. ",(0,r.jsx)(n.a,{href:"/docs/flink-quick-start-guide",children:"Read the Flink Quick Start"})," guide for more examples."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE hudi_table2(\n  id int, \n  name string, \n  price double\n)\nWITH (\n'connector' = 'hudi',\n'path' = 's3://bucket-name/hudi/',\n'table.type' = 'MERGE_ON_READ' -- this creates a MERGE_ON_READ table, by default is COPY_ON_WRITE\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"alter-table",children:"Alter Table"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"alter table h0 rename to h0_1;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"supported-types",children:"Supported Types"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Spark"}),(0,r.jsx)(n.th,{children:"Hudi"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"byte"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"short"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"date"}),(0,r.jsx)(n.td,{children:"date"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"decimal"}),(0,r.jsx)(n.td,{children:"decimal"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"binary"}),(0,r.jsx)(n.td,{children:"bytes"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"array"}),(0,r.jsx)(n.td,{children:"array"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"map"}),(0,r.jsx)(n.td,{children:"map"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"struct"}),(0,r.jsx)(n.td,{children:"struct"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"char"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"not supported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"varchar"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"not supported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numeric"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"not supported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"not supported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"not supported"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var l=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>T});var a=t(96540),r=t(34164),l=t(23104),i=t(56347),s=t(205),d=t(57485),o=t(31682),c=t(70679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=u(e),[i,d]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,h]=x({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),j=(()=>{const e=o??m;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{j&&d(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),b(e)}),[h,b,l]),tabValues:l}}var b=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),r=s[t].value;r!==a&&(o(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function T(e){const n=(0,b.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const r={},l=a.createContext(r);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);