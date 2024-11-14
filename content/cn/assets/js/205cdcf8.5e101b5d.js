"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[97296],{14552:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"syncing_metastore","title":"Hive Metastore","description":"Hive Sync Tool","source":"@site/versioned_docs/version-0.11.0/syncing_metastore.md","sourceDirName":".","slug":"/syncing_metastore","permalink":"/cn/docs/0.11.0/syncing_metastore","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.0/syncing_metastore.md","tags":[],"version":"0.11.0","frontMatter":{"title":"Hive Metastore","keywords":["hudi","hive","sync"]},"sidebar":"docs","previous":{"title":"DataHub","permalink":"/cn/docs/0.11.0/syncing_datahub"},"next":{"title":"Google BigQuery","permalink":"/cn/docs/0.11.0/gcp_bigquery"}}');var o=i(74848),s=i(28453);const r={title:"Hive Metastore",keywords:["hudi","hive","sync"]},a=void 0,d={},c=[{value:"Hive Sync Tool",id:"hive-sync-tool",level:2},{value:"Hive Sync Configuration",id:"hive-sync-configuration",level:3},{value:"Sync modes",id:"sync-modes",level:3},{value:"HMS",id:"hms",level:4},{value:"HIVEQL",id:"hiveql",level:4},{value:"JDBC",id:"jdbc",level:4},{value:"Flink Setup",id:"flink-setup",level:3},{value:"Install",id:"install",level:4},{value:"Hive Environment",id:"hive-environment",level:4},{value:"Sync Template",id:"sync-template",level:4},{value:"Query",id:"query",level:4},{value:"Spark datasource example",id:"spark-datasource-example",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"hive-sync-tool",children:"Hive Sync Tool"}),"\n",(0,o.jsxs)(n.p,{children:["Writing data with ",(0,o.jsx)(n.a,{href:"/docs/writing_data",children:"DataSource"})," writer or ",(0,o.jsx)(n.a,{href:"/docs/0.11.0/hoodie_deltastreamer",children:"HoodieDeltaStreamer"})," supports syncing of the table's latest schema to Hive metastore, such that queries can pick up new columns and partitions.\nIn case, it's preferable to run this from commandline or in an independent jvm, Hudi provides a ",(0,o.jsx)(n.code,{children:"HiveSyncTool"}),", which can be invoked as below,\nonce you have built the hudi-hive module. Following is how we sync the above Datasource Writer written table to Hive metastore."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"cd hudi-hive\n./run_sync_tool.sh  --jdbc-url jdbc:hive2:\\/\\/hiveserver:10000 --user hive --pass hive --partitioned-by partition --base-path <basePath> --database default --table <tableName>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Starting with Hudi 0.5.1 version read optimized version of merge-on-read tables are suffixed '_ro' by default. For backwards compatibility with older Hudi versions, an optional HiveSyncConfig - ",(0,o.jsx)(n.code,{children:"--skip-ro-suffix"}),", has been provided to turn off '_ro' suffixing if desired. Explore other hive sync options using the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"cd hudi-hive\n./run_sync_tool.sh\n [hudi-hive]$ ./run_sync_tool.sh --help\n"})}),"\n",(0,o.jsx)(n.h3,{id:"hive-sync-configuration",children:"Hive Sync Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Please take a look at the arguments that can be passed to ",(0,o.jsx)(n.code,{children:"run_sync_tool"})," in ",(0,o.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/hudi-sync/hudi-hive-sync/src/main/java/org/apache/hudi/hive/HiveSyncConfig.java",children:"HiveSyncConfig"}),".\nAmong them, following are the required arguments:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Parameter(names = {"--database"}, description = "name of the target database in Hive", required = true);\n@Parameter(names = {"--table"}, description = "name of the target table in Hive", required = true);\n@Parameter(names = {"--base-path"}, description = "Basepath of hoodie table to sync", required = true);## Sync modes\n'})}),"\n",(0,o.jsx)(n.p,{children:"Corresponding datasource options for the most commonly used hive sync configs are as follows:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"HiveSyncConfig"}),(0,o.jsx)(n.th,{children:"DataSourceWriteOption"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--database"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.database"}),(0,o.jsx)(n.td,{children:"name of the target database in Hive"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--table"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.table"}),(0,o.jsx)(n.td,{children:"name of the target table in Hive"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--user"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.username"}),(0,o.jsx)(n.td,{children:"username for hive metastore"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--pass"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.password"}),(0,o.jsx)(n.td,{children:"password for hive metastore"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--use-jdbc"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.use_jdbc"}),(0,o.jsx)(n.td,{children:"use JDBC to connect to metastore"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--jdbc-url"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.jdbcurl"}),(0,o.jsx)(n.td,{children:"Hive metastore url"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--sync-mode"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.mode"}),(0,o.jsx)(n.td,{children:"Mode to choose for Hive ops. Valid values are hms, jdbc and hiveql."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--partitioned-by"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.partition_fields"}),(0,o.jsx)(n.td,{children:"Comma-separated column names in the table to use for determining hive partition."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--partition-value-extractor"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.partition_extractor_class"}),(0,o.jsxs)(n.td,{children:["Class which implements PartitionValueExtractor to extract the partition values. ",(0,o.jsx)(n.code,{children:"SlashEncodedDayPartitionValueExtractor"})," by default."]})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"sync-modes",children:"Sync modes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"HiveSyncTool"})," supports three modes, namely ",(0,o.jsx)(n.code,{children:"HMS"}),", ",(0,o.jsx)(n.code,{children:"HIVEQL"}),", ",(0,o.jsx)(n.code,{children:"JDBC"}),", to connect to Hive metastore server.\nThese modes are just three different ways of executing DDL against Hive. Among these modes, JDBC or HMS is preferable over\nHIVEQL, which is mostly used for running DML rather than DDL."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: All these modes assume that hive metastore has been configured and the corresponding properties set in\nhive-site.xml configuration file. Additionally, if you're using spark-shell/spark-sql to sync Hudi table to Hive then\nthe hive-site.xml file also needs to be placed under ",(0,o.jsx)(n.code,{children:"<SPARK_HOME>/conf"})," directory."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"hms",children:"HMS"}),"\n",(0,o.jsxs)(n.p,{children:["HMS mode uses the hive metastore client to sync Hudi table using thrift APIs directly.\nTo use this mode, pass ",(0,o.jsx)(n.code,{children:"--sync-mode=hms"})," to ",(0,o.jsx)(n.code,{children:"run_sync_tool"})," and set ",(0,o.jsx)(n.code,{children:"--use-jdbc=false"}),".\nAdditionally, if you are using remote metastore, then ",(0,o.jsx)(n.code,{children:"hive.metastore.uris"})," need to be set in hive-site.xml configuration file.\nOtherwise, the tool assumes that metastore is running locally on port 9083 by default.\nSupport for HMS mode with Spark datasource will be ",(0,o.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-2491",children:"enabled soon"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"hiveql",children:"HIVEQL"}),"\n",(0,o.jsxs)(n.p,{children:["HQL is Hive's own SQL dialect.\nThis mode simply uses the Hive QL's ",(0,o.jsx)(n.a,{href:"https://github.com/apache/hive/blob/master/ql/src/java/org/apache/hadoop/hive/ql/Driver.java",children:"driver"})," to execute DDL as HQL command.\nTo use this mode, pass ",(0,o.jsx)(n.code,{children:"--sync-mode=hiveql"})," to ",(0,o.jsx)(n.code,{children:"run_sync_tool"})," and set ",(0,o.jsx)(n.code,{children:"--use-jdbc=false"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"jdbc",children:"JDBC"}),"\n",(0,o.jsxs)(n.p,{children:["This mode uses the JDBC specification to connect to the hive metastore.\nTo use this mode, just pass the jdbc url to the hive server (",(0,o.jsx)(n.code,{children:"--use-jdbc"})," is true by default)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Parameter(names = {"--jdbc-url"}, description = "Hive jdbc connect url");\n'})}),"\n",(0,o.jsx)(n.h3,{id:"flink-setup",children:"Flink Setup"}),"\n",(0,o.jsx)(n.h4,{id:"install",children:"Install"}),"\n",(0,o.jsxs)(n.p,{children:["Now you can git clone Hudi master branch to test Flink hive sync. The first step is to install Hudi to get ",(0,o.jsx)(n.code,{children:"hudi-flink-bundle_2.11-0.x.jar"}),".\n",(0,o.jsx)(n.code,{children:"hudi-flink-bundle"})," module pom.xml sets the scope related to hive as ",(0,o.jsx)(n.code,{children:"provided"})," by default. If you want to use hive sync, you need to use the\nprofile ",(0,o.jsx)(n.code,{children:"flink-bundle-shade-hive"})," during packaging. Executing command below to install:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Maven install command\nmvn install -DskipTests -Drat.skip=true -Pflink-bundle-shade-hive2\n\n# For hive1, you need to use profile -Pflink-bundle-shade-hive1\n# For hive3, you need to use profile -Pflink-bundle-shade-hive3 \n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Hive1.x can only synchronize metadata to hive, but cannot use hive query now. If you need to query, you can use spark to query hive table."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If using hive profile, you need to modify the hive version in the profile to your hive cluster version (Only need to modify the hive version in this profile).\nThe location of this ",(0,o.jsx)(n.code,{children:"pom.xml"})," is ",(0,o.jsx)(n.code,{children:"packaging/hudi-flink-bundle/pom.xml"}),", and the corresponding profile is at the bottom of this file."]})}),"\n",(0,o.jsx)(n.h4,{id:"hive-environment",children:"Hive Environment"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Import ",(0,o.jsx)(n.code,{children:"hudi-hadoop-mr-bundle"})," into hive. Creating ",(0,o.jsx)(n.code,{children:"auxlib/"})," folder under the root directory of hive, and moving ",(0,o.jsx)(n.code,{children:"hudi-hadoop-mr-bundle-0.x.x-SNAPSHOT.jar"})," into ",(0,o.jsx)(n.code,{children:"auxlib"}),".\n",(0,o.jsx)(n.code,{children:"hudi-hadoop-mr-bundle-0.x.x-SNAPSHOT.jar"})," is at ",(0,o.jsx)(n.code,{children:"packaging/hudi-hadoop-mr-bundle/target"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When Flink sql client connects hive metastore remotely, ",(0,o.jsx)(n.code,{children:"hive metastore"})," and ",(0,o.jsx)(n.code,{children:"hiveserver2"})," services need to be enabled, and the port number need to\nbe set correctly. Command to turn on the services:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Enable hive metastore and hiveserver2\nnohup ./bin/hive --service metastore &\nnohup ./bin/hive --service hiveserver2 &\n\n# While modifying the jar package under auxlib, you need to restart the service.\n"})}),"\n",(0,o.jsx)(n.h4,{id:"sync-template",children:"Sync Template"}),"\n",(0,o.jsxs)(n.p,{children:["Flink hive sync now supports two hive sync mode, ",(0,o.jsx)(n.code,{children:"hms"})," and ",(0,o.jsx)(n.code,{children:"jdbc"}),". ",(0,o.jsx)(n.code,{children:"hms"})," mode only needs to configure metastore uris. For\nthe ",(0,o.jsx)(n.code,{children:"jdbc"})," mode, the JDBC attributes and metastore uris both need to be configured. The options template is as below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"-- hms mode template\nCREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${db_path}/t1',\n  'table.type' = 'COPY_ON_WRITE',  -- If MERGE_ON_READ, hive query will not have output until the parquet file is generated\n  'hive_sync.enable' = 'true',     -- Required. To enable hive synchronization\n  'hive_sync.mode' = 'hms',        -- Required. Setting hive sync mode to hms, default jdbc\n  'hive_sync.metastore.uris' = 'thrift://${ip}:9083' -- Required. The port need set on hive-site.xml\n);\n\n\n-- jdbc mode template\nCREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${db_path}/t1',\n  'table.type' = 'COPY_ON_WRITE',  --If MERGE_ON_READ, hive query will not have output until the parquet file is generated\n  'hive_sync.enable' = 'true',     -- Required. To enable hive synchronization\n  'hive_sync.mode' = 'jdbc',       -- Required. Setting hive sync mode to hms, default jdbc\n  'hive_sync.metastore.uris' = 'thrift://${ip}:9083', -- Required. The port need set on hive-site.xml\n  'hive_sync.jdbc_url'='jdbc:hive2://${ip}:10000',    -- required, hiveServer port\n  'hive_sync.table'='${table_name}',                  -- required, hive table name\n  'hive_sync.db'='${db_name}',                        -- required, hive database name\n  'hive_sync.username'='${user_name}',                -- required, JDBC username\n  'hive_sync.password'='${password}'                  -- required, JDBC password\n);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"query",children:"Query"}),"\n",(0,o.jsx)(n.p,{children:"While using hive beeline query, you need to enter settings:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"set hive.input.format = org.apache.hudi.hadoop.hive.HoodieCombineHiveInputFormat;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"spark-datasource-example",children:"Spark datasource example"}),"\n",(0,o.jsx)(n.p,{children:"Assuming the metastore is configured properly, then start the spark-shell."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"$SPARK_INSTALL/bin/spark-shell   --jars $HUDI_SPARK_BUNDLE \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n"})}),"\n",(0,o.jsx)(n.p,{children:"We can run the following script to create a sample hudi table and sync it to hive."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:'// spark-shell\nimport org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.spark.sql.types._\nimport org.apache.spark.sql.Row\n\n\nval tableName = "hudi_cow"\nval basePath = "/user/hive/warehouse/hudi_cow"\n\nval schema = StructType(Array(\nStructField("rowId", StringType,true),\nStructField("partitionId", StringType,true),\nStructField("preComb", LongType,true),\nStructField("name", StringType,true),\nStructField("versionId", StringType,true),\nStructField("toBeDeletedStr", StringType,true),\nStructField("intToLong", IntegerType,true),\nStructField("longToInt", LongType,true)\n))\n\nval data0 = Seq(Row("row_1", "2021/01/01",0L,"bob","v_0","toBeDel0",0,1000000L), \n               Row("row_2", "2021/01/01",0L,"john","v_0","toBeDel0",0,1000000L), \n               Row("row_3", "2021/01/02",0L,"tom","v_0","toBeDel0",0,1000000L))\n\nvar dfFromData0 = spark.createDataFrame(data0,schema)\n\ndfFromData0.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "preComb").\n  option(RECORDKEY_FIELD_OPT_KEY, "rowId").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionId").\n  option(TABLE_NAME, tableName).\n  option(TABLE_TYPE.key, COW_TABLE_TYPE_OPT_VAL).\n  option(OPERATION_OPT_KEY, "upsert").\n  option("hoodie.index.type","SIMPLE").\n  option("hoodie.datasource.write.hive_style_partitioning","true").\n  option("hoodie.datasource.hive_sync.jdbcurl","jdbc:hive2://hiveserver:10000/").\n  option("hoodie.datasource.hive_sync.database","default").\n  option("hoodie.datasource.hive_sync.table","hudi_cow").\n  option("hoodie.datasource.hive_sync.partition_fields","partitionId").\n  option("hoodie.datasource.hive_sync.enable","true").\n  mode(Overwrite).\n  save(basePath)\n'})}),"\n",(0,o.jsx)(n.p,{children:"To query, connect to the hive server."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"beeline -u jdbc:hive2://hiveserver:10000 \\\n  --hiveconf hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat \\\n  --hiveconf hive.stats.autogather=false\n  \nBeeline version 1.2.1.spark2 by Apache Hive\n0: jdbc:hive2://hiveserver:10000> show tables;\n+-----------+--+\n| tab_name  |\n+-----------+--+\n| hudi_cow  |\n+-----------+--+\n1 row selected (0.531 seconds)\n0: jdbc:hive2://hiveserver:10000> select * from hudi_cow limit 1;\n+-------------------------------+--------------------------------+------------------------------+----------------------------------+----------------------------------------------------------------------------+-----------------+-------------------+----------------+---------------------+--------------------------+---------------------+---------------------+-----------------------+--+\n| hudi_cow._hoodie_commit_time  | hudi_cow._hoodie_commit_seqno  | hudi_cow._hoodie_record_key  | hudi_cow._hoodie_partition_path  |                         hudi_cow._hoodie_file_name                         | hudi_cow.rowid  | hudi_cow.precomb  | hudi_cow.name  | hudi_cow.versionid  | hudi_cow.tobedeletedstr  | hudi_cow.inttolong  | hudi_cow.longtoint  | hudi_cow.partitionid  |\n+-------------------------------+--------------------------------+------------------------------+----------------------------------+----------------------------------------------------------------------------+-----------------+-------------------+----------------+---------------------+--------------------------+---------------------+---------------------+-----------------------+--+\n| 20220120090023631             | 20220120090023631_1_2          | row_1                        | partitionId=2021/01/01           | 0bf9b822-928f-4a57-950a-6a5450319c83-0_1-24-314_20220120090023631.parquet  | row_1           | 0                 | bob            | v_0                 | toBeDel0                 | 0                   | 1000000             | 2021/01/01            |\n+-------------------------------+--------------------------------+------------------------------+----------------------------------+----------------------------------------------------------------------------+-----------------+-------------------+----------------+---------------------+--------------------------+---------------------+---------------------+-----------------------+--+\n1 row selected (5.475 seconds)\n0: jdbc:hive2://hiveserver:10000>\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);