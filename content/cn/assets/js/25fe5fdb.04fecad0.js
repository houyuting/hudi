"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[4368],{97445:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"troubleshooting","title":"Troubleshooting","description":"For performance related issues, please refer to the tuning guide","source":"@site/versioned_docs/version-0.15.0/troubleshooting.md","sourceDirName":".","slug":"/troubleshooting","permalink":"/cn/docs/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/troubleshooting.md","tags":[],"version":"0.15.0","frontMatter":{"title":"Troubleshooting","keywords":["hudi","troubleshooting"],"toc_min_heading_level":2,"toc_max_heading_level":5,"last_modified_at":"2021-08-18T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Encryption","permalink":"/cn/docs/encryption"},"next":{"title":"Spark Tuning Guide","permalink":"/cn/docs/tuning-guide"}}');var o=t(74848),n=t(28453);const s={title:"Troubleshooting",keywords:["hudi","troubleshooting"],toc_min_heading_level:2,toc_max_heading_level:5,last_modified_at:new Date("2021-08-18T19:59:57.000Z")},r=void 0,l={},c=[{value:"Writing Tables",id:"writing-tables",level:3},{value:"org.apache.parquet.io.InvalidRecordException: Parquet/Avro schema mismatch: Avro field &#39;col1&#39; not found",id:"orgapacheparquetioinvalidrecordexception-parquetavro-schema-mismatch-avro-field-col1-not-found",level:4},{value:"java.lang.UnsupportedOperationException: org.apache.parquet.avro.AvroConverters$FieldIntegerConverter",id:"javalangunsupportedoperationexception-orgapacheparquetavroavroconvertersfieldintegerconverter",level:4},{value:"SchemaCompatabilityException: Unable to validate the rewritten record",id:"schemacompatabilityexception-unable-to-validate-the-rewritten-record",level:4},{value:"INT96, INT64 and timestamp compatibility",id:"int96-int64-and-timestamp-compatibility",level:4},{value:"I am seeing lot of archive files. How do I control the number of archive commit files generated?",id:"i-am-seeing-lot-of-archive-files-how-do-i-control-the-number-of-archive-commit-files-generated",level:4},{value:"How can I resolve the NoSuchMethodError from HBase when using Hudi with metadata table on HDFS?",id:"how-can-i-resolve-the-nosuchmethoderror-from-hbase-when-using-hudi-with-metadata-table-on-hdfs",level:4},{value:"How can I resolve the RuntimeException saying <code>hbase-default.xml file seems to be for an older version of HBase</code>?",id:"how-can-i-resolve-the-runtimeexception-saying-hbase-defaultxml-file-seems-to-be-for-an-older-version-of-hbase",level:4},{value:"I see two different records for the same record key value, each record key with a different timestamp format. How is this possible?",id:"i-see-two-different-records-for-the-same-record-key-value-each-record-key-with-a-different-timestamp-format-how-is-this-possible",level:4},{value:"Querying Tables",id:"querying-tables",level:3},{value:"How can I now query the Hudi dataset I just wrote?",id:"how-can-i-now-query-the-hudi-dataset-i-just-wrote",level:4},{value:"Data Quality Issues",id:"data-quality-issues",level:3},{value:"Missing records",id:"missing-records",level:4},{value:"Duplicates",id:"duplicates",level:4},{value:"Ingestion",id:"ingestion",level:3},{value:"java.io.EOFException: Received -1 when reading from channel, socket has likely been closed. at kafka.utils.Utils$.read(Utils.scala:381) at kafka.network.BoundedByteBufferReceive.readFrom(BoundedByteBufferReceive.scala:54)",id:"javaioeofexception-received--1-when-reading-from-channel-socket-has-likely-been-closed-at-kafkautilsutilsreadutilsscala381-at-kafkanetworkboundedbytebufferreceivereadfromboundedbytebufferreceivescala54",level:4},{value:"java.lang.IllegalArgumentException: Could not find a &#39;KafkaClient&#39; entry in the JAAS configuration. System property &#39;java.security.auth.login.config&#39; is not set",id:"javalangillegalargumentexception-could-not-find-a-kafkaclient-entry-in-the-jaas-configuration-system-property-javasecurityauthloginconfig-is-not-set",level:4},{value:"IOException: Write end dead or CIRCULAR REFERENCE while writing to GCS",id:"ioexception-write-end-dead-or-circular-reference-while-writing-to-gcs",level:4},{value:"Hudi upserts with RLI fails with ClassCastException",id:"hudi-upserts-with-rli-fails-with-classcastexception",level:4},{value:"Hive Sync",id:"hive-sync",level:3},{value:"SQLException: following columns have types incompatible",id:"sqlexception-following-columns-have-types-incompatible",level:4},{value:"HoodieHiveSyncException: Could not convert field Type from <code>&lt;type1&gt;</code> to <code>&lt;type2&gt;</code> for field col1",id:"hoodiehivesyncexception-could-not-convert-field-type-from-type1-to-type2-for-field-col1",level:4},{value:"org.apache.hadoop.hive.ql.parse.SemanticException: Database does not exist: test_db",id:"orgapachehadoophiveqlparsesemanticexception-database-does-not-exist-test_db",level:4},{value:"org.apache.thrift.TApplicationException: Invalid method name: &#39;get_table_req&#39;",id:"orgapachethrifttapplicationexception-invalid-method-name-get_table_req",level:4},{value:"java.lang.UnsupportedOperationException: Table rename is not supported",id:"javalangunsupportedoperationexception-table-rename-is-not-supported",level:4},{value:"How can I resolve the IllegalArgumentException saying <code>Partitions must be in the same table</code> when attempting to sync to a metastore?",id:"how-can-i-resolve-the-illegalargumentexception-saying-partitions-must-be-in-the-same-table-when-attempting-to-sync-to-a-metastore",level:4}];function d(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:["For performance related issues, please refer to the ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/tuning-guide",children:"tuning guide"})]}),"\n",(0,o.jsx)(a.h3,{id:"writing-tables",children:"Writing Tables"}),"\n",(0,o.jsx)(a.h4,{id:"orgapacheparquetioinvalidrecordexception-parquetavro-schema-mismatch-avro-field-col1-not-found",children:"org.apache.parquet.io.InvalidRecordException: Parquet/Avro schema mismatch: Avro field 'col1' not found"}),"\n",(0,o.jsxs)(a.p,{children:["It is recommended that schema should evolve in ",(0,o.jsx)(a.a,{href:"https://docs.confluent.io/platform/current/schema-registry/avro.html",children:"backwards compatible way"})," while using Hudi. Please refer here for more information on avro schema resolution - ",(0,o.jsx)(a.a,{href:"https://avro.apache.org/docs/1.8.2/spec.html",children:"https://avro.apache.org/docs/1.8.2/spec.html"}),". This error generally occurs when the schema has evolved in backwards ",(0,o.jsx)(a.strong,{children:"incompatible"})," way by deleting some column 'col1' and we are trying to update some record in parquet file which has ay been written with previous schema (which had 'col1'). In such cases, parquet tries to find all the present fields in the incoming record and when it finds 'col1' is not present, the mentioned exception is thrown."]}),"\n",(0,o.jsx)(a.p,{children:"The fix for this is to try and create uber schema using all the schema versions evolved so far for the concerned event and use this uber schema as the target schema. One of the good approaches can be fetching schema from hive metastore and merging it with the current schema."}),"\n",(0,o.jsxs)(a.p,{children:['Sample stacktrace where a field named "toBeDeletedStr" was omitted from new batch of updates : ',(0,o.jsx)(a.a,{href:"https://gist.github.com/nsivabalan/cafc53fc9a8681923e4e2fa4eb2133fe",children:"https://gist.github.com/nsivabalan/cafc53fc9a8681923e4e2fa4eb2133fe"})]}),"\n",(0,o.jsx)(a.h4,{id:"javalangunsupportedoperationexception-orgapacheparquetavroavroconvertersfieldintegerconverter",children:"java.lang.UnsupportedOperationException: org.apache.parquet.avro.AvroConverters$FieldIntegerConverter"}),"\n",(0,o.jsx)(a.p,{children:"This error will again occur due to schema evolutions in non-backwards compatible way. Basically there is some incoming update U for a record R which is already written to your Hudi dataset in the concerned parquet file. R contains field F which is having certain data type, let us say long. U has the same field F with updated data type of int type. Such incompatible data type conversions are not supported by Parquet FS."}),"\n",(0,o.jsx)(a.p,{children:"For such errors, please try to ensure only valid data type conversions are happening in your primary data source from where you are trying to ingest."}),"\n",(0,o.jsxs)(a.p,{children:["Sample stacktrace when trying to evolve a field from Long type to Integer type with Hudi : ",(0,o.jsx)(a.a,{href:"https://gist.github.com/nsivabalan/0d81cd60a3e7a0501e6a0cb50bfaacea",children:"https://gist.github.com/nsivabalan/0d81cd60a3e7a0501e6a0cb50bfaacea"})]}),"\n",(0,o.jsx)(a.h4,{id:"schemacompatabilityexception-unable-to-validate-the-rewritten-record",children:"SchemaCompatabilityException: Unable to validate the rewritten record"}),"\n",(0,o.jsxs)(a.p,{children:["This can possibly occur if your schema has some non-nullable field whose value is not present or is null. It is recommended to evolve schema in backwards compatible ways. In essence, this means either have every newly added field as nullable or define default values for every new field. See ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/schema_evolution",children:"Schema Evolution"})," docs for more."]}),"\n",(0,o.jsx)(a.h4,{id:"int96-int64-and-timestamp-compatibility",children:"INT96, INT64 and timestamp compatibility"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/configurations#hoodiedatasourcehive_syncsupport_timestamp",children:"https://hudi.apache.org/docs/configurations#hoodiedatasourcehive_syncsupport_timestamp"})}),"\n",(0,o.jsx)(a.h4,{id:"i-am-seeing-lot-of-archive-files-how-do-i-control-the-number-of-archive-commit-files-generated",children:"I am seeing lot of archive files. How do I control the number of archive commit files generated?"}),"\n",(0,o.jsxs)(a.p,{children:["Please note that in cloud stores that do not support log append operations, Hudi is forced to create new archive files to archive old metadata operations.\nYou can increase ",(0,o.jsx)(a.code,{children:"hoodie.commits.archival.batch"})," moving forward to increase the number of commits archived per archive file.\nIn addition, you can increase the difference between the 2 watermark configurations : ",(0,o.jsx)(a.code,{children:"hoodie.keep.max.commits"})," (default : 30)\nand ",(0,o.jsx)(a.code,{children:"hoodie.keep.min.commits"})," (default : 20). This way, you can reduce the number of archive files created and also\nat the same time increase the number of metadata archived per archive file. Note that post 0.7.0 release where we are\nadding consolidated Hudi metadata (",(0,o.jsx)(a.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+15%3A+HUDI+File+Listing+Improvements",children:"RFC-15"}),"),\nthe follow up work would involve re-organizing archival metadata so that we can do periodic compactions to control\nfile-sizing of these archive files."]}),"\n",(0,o.jsx)(a.h4,{id:"how-can-i-resolve-the-nosuchmethoderror-from-hbase-when-using-hudi-with-metadata-table-on-hdfs",children:"How can I resolve the NoSuchMethodError from HBase when using Hudi with metadata table on HDFS?"}),"\n",(0,o.jsx)(a.p,{children:"From 0.11.0 release, we have upgraded the HBase version to 2.4.9, which is released based on Hadoop 2.x. Hudi's metadata"}),"\n",(0,o.jsx)(a.p,{children:"table uses HFile as the base file format, relying on the HBase library. When enabling metadata table in a Hudi table on"}),"\n",(0,o.jsx)(a.p,{children:"HDFS using Hadoop 3.x, NoSuchMethodError can be thrown due to compatibility issues between Hadoop 2.x and 3.x."}),"\n",(0,o.jsx)(a.p,{children:"To address this, here's the workaround:"}),"\n",(0,o.jsxs)(a.p,{children:["(1) Download HBase source code from ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hbase",children:(0,o.jsx)(a.code,{children:"https://github.com/apache/hbase"})}),";"]}),"\n",(0,o.jsxs)(a.p,{children:["(2) Switch to the source code of 2.4.9 release with the tag ",(0,o.jsx)(a.code,{children:"rel/2.4.9"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"git checkout rel/2.4.9\n"})}),"\n",(0,o.jsx)(a.p,{children:"(3) Package a new version of HBase 2.4.9 with Hadoop 3 version:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"mvn clean install -Denforcer.skip -DskipTests -Dhadoop.profile=3.0 -Psite-install-step\n"})}),"\n",(0,o.jsx)(a.p,{children:"(4) Package Hudi again."}),"\n",(0,o.jsxs)(a.h4,{id:"how-can-i-resolve-the-runtimeexception-saying-hbase-defaultxml-file-seems-to-be-for-an-older-version-of-hbase",children:["How can I resolve the RuntimeException saying ",(0,o.jsx)(a.code,{children:"hbase-default.xml file seems to be for an older version of HBase"}),"?"]}),"\n",(0,o.jsx)(a.p,{children:"This usually happens when there are other HBase libs provided by the runtime environment in the classpath, such as"}),"\n",(0,o.jsx)(a.p,{children:"Cloudera CDP stack, causing the conflict. To get around the RuntimeException, you can set the"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"hbase.defaults.for.version.skip"})," to ",(0,o.jsx)(a.code,{children:"true"})," in the ",(0,o.jsx)(a.code,{children:"hbase-site.xml"})," configuration file, e.g., overwriting the config"]}),"\n",(0,o.jsx)(a.p,{children:"within the Cloudera manager."}),"\n",(0,o.jsx)(a.h4,{id:"i-see-two-different-records-for-the-same-record-key-value-each-record-key-with-a-different-timestamp-format-how-is-this-possible",children:"I see two different records for the same record key value, each record key with a different timestamp format. How is this possible?"}),"\n",(0,o.jsxs)(a.p,{children:["This is a known issue with enabling row-writer for bulk_insert operation. When you do a bulk_insert followed by another\nwrite operation such as upsert/insert this might be observed for timestamp fields specifically. For example, bulk_insert might produce\ntimestamp ",(0,o.jsx)(a.code,{children:"2016-12-29 09:54:00.0"})," for record key whereas non bulk_insert write operation might produce a long value like\n",(0,o.jsx)(a.code,{children:"1483023240000000"})," for the record key thus creating two different records. To fix this, starting 0.10.1 a new config ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/configurations/#hoodiedatasourcewritekeygeneratorconsistentlogicaltimestampenabled",children:"hoodie.datasource.write.keygenerator.consistent.logical.timestamp.enabled"}),"\nis introduced to bring consistency irrespective of whether row writing is enabled on not. However, for the sake of\nbackwards compatibility and not breaking existing pipelines, this config is set to false by default and will have to be enabled explicitly."]}),"\n",(0,o.jsx)(a.h3,{id:"querying-tables",children:"Querying Tables"}),"\n",(0,o.jsx)(a.h4,{id:"how-can-i-now-query-the-hudi-dataset-i-just-wrote",children:"How can I now query the Hudi dataset I just wrote?"}),"\n",(0,o.jsx)(a.p,{children:"Unless Hive sync is enabled, the dataset written by Hudi using one of the methods above can simply be queries via the Spark datasource like any other source."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-scala",children:'val hudiSnapshotQueryDF = spark\n     .read()\n     .format("hudi")\n     .option("hoodie.datasource.query.type", "snapshot")\n     .load(basePath) \nval hudiIncQueryDF = spark.read().format("hudi")\n     .option("hoodie.datasource.query.type", "incremental")\n     .option("hoodie.datasource.read.begin.instanttime", <beginInstantTime>)\n     .load(basePath);\n'})}),"\n",(0,o.jsxs)(a.p,{children:["if Hive Sync is enabled in the ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/d3edac4612bde2fa9deca9536801dbc48961fb95/docker/demo/sparksql-incremental.commands#L50",children:"deltastreamer"})," tool or ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/configurations#hoodiedatasourcehive_syncenable",children:"datasource"}),", the dataset is available in Hive as a couple of tables, that can now be read using HiveQL, Presto or SparkSQL. See ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/querying_data/",children:"here"})," for more."]}),"\n",(0,o.jsx)(a.h3,{id:"data-quality-issues",children:"Data Quality Issues"}),"\n",(0,o.jsx)(a.p,{children:"Section below generally aids in debugging Hudi failures. Off the bat, the following metadata is added to every record to help triage issues easily using standard Hadoop SQL engines (Hive/PrestoDB/Spark)"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"_hoodie_record_key"})," - Treated as a primary key within each DFS partition, basis of all updates/inserts"]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"_hoodie_commit_time"})," - Last commit that touched this record"]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"_hoodie_commit_seqno"})," - This field contains a unique sequence number for each record within each transaction."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"_hoodie_file_name"})," - Actual file name containing the record (super useful to triage duplicates)"]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"_hoodie_partition_path"})," - Path from basePath that identifies the partition containing this record"]}),"\n"]}),"\n",(0,o.jsx)(a.h4,{id:"missing-records",children:"Missing records"}),"\n",(0,o.jsx)(a.p,{children:"Please check if there were any write errors using the admin commands, during the window at which the record could have been written."}),"\n",(0,o.jsx)(a.p,{children:"If you do find errors, then the record was not actually written by Hudi, but handed back to the application to decide what to do with it."}),"\n",(0,o.jsx)(a.h4,{id:"duplicates",children:"Duplicates"}),"\n",(0,o.jsxs)(a.p,{children:["First of all, please confirm if you do indeed have duplicates ",(0,o.jsx)(a.strong,{children:"AFTER"})," ensuring the query is accessing the Hudi table ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/querying_data/",children:"properly"})," ."]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"If confirmed, please use the metadata fields above, to identify the physical files & partition files containing the records ."}),"\n",(0,o.jsx)(a.li,{children:"If duplicates span files across partitionpath, then this means your application is generating different partitionPaths for same recordKey, Please fix your app"}),"\n",(0,o.jsxs)(a.li,{children:["if duplicates span multiple files within the same partitionpath, please engage with mailing list. This should not happen. You can use the ",(0,o.jsx)(a.code,{children:"records deduplicate"})," command to fix your data."]}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"ingestion",children:"Ingestion"}),"\n",(0,o.jsxs)(a.h4,{id:"javaioeofexception-received--1-when-reading-from-channel-socket-has-likely-been-closed-at-kafkautilsutilsreadutilsscala381-at-kafkanetworkboundedbytebufferreceivereadfromboundedbytebufferreceivescala54",children:["java.io.EOFException: Received -1 when reading from channel, socket has likely been closed. at ",(0,o.jsx)(a.a,{href:"http://kafka.utils.Utils$.read",children:"kafka.utils.Utils$.read"}),"(Utils.scala:381) at kafka.network.BoundedByteBufferReceive.readFrom(BoundedByteBufferReceive.scala:54)"]}),"\n",(0,o.jsx)(a.p,{children:"This might happen if you are ingesting from Kafka source, your cluster is ssl enabled by default and you are using some version of Hudi older than 0.5.1. Previous versions of Hudi were using spark-streaming-kafka-0-8 library. With the release of 0.5.1 version of Hudi, spark was upgraded to 2.4.4 and spark-streaming-kafka library was upgraded to spark-streaming-kafka-0-10. SSL support was introduced from spark-streaming-kafka-0-10. Please see here for reference."}),"\n",(0,o.jsx)(a.p,{children:"The workaround can be either use Kafka cluster which is not ssl enabled, else upgrade Hudi version to at least 0.5.1 or spark-streaming-kafka library to spark-streaming-kafka-0-10."}),"\n",(0,o.jsx)(a.h4,{id:"javalangillegalargumentexception-could-not-find-a-kafkaclient-entry-in-the-jaas-configuration-system-property-javasecurityauthloginconfig-is-not-set",children:"java.lang.IllegalArgumentException: Could not find a 'KafkaClient' entry in the JAAS configuration. System property 'java.security.auth.login.config' is not set"}),"\n",(0,o.jsx)(a.p,{children:"This might happen when you are trying to ingest from ssl enabled kafka source and your setup is not able to read jars.conf file and its properties. To fix this, you need to pass the required property as part of your spark-submit command something like"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-plain",children:"--files jaas.conf,failed_tables.json --conf 'spark.driver.extraJavaOptions=-Djava.security.auth.login.config=jaas.conf' --conf 'spark.executor.extraJavaOptions=-Djava.security.auth.login.config=jaas.conf'\n"})}),"\n",(0,o.jsx)(a.h4,{id:"ioexception-write-end-dead-or-circular-reference-while-writing-to-gcs",children:"IOException: Write end dead or CIRCULAR REFERENCE while writing to GCS"}),"\n",(0,o.jsx)(a.p,{children:"If you encounter below stacktrace, please set the spark config as suggested below."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-plain",children:"--conf 'spark.hadoop.fs.gs.outputstream.pipe.type=NIO_CHANNEL_PIPE'\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-plain",children:" at org.apache.hudi.io.storage.HoodieAvroParquetWriter.close(HoodieAvroParquetWriter.java:84)\n\tSuppressed: java.io.IOException: Upload failed for 'gs://bucket/b0ee4274-5193-4a26-bcff-d60654fd7b24-0_0-42-671_20230228055305900.parquet'\n\t\tat...\n\t\t... 44 more\n\tCaused by: java.io.IOException: Write end dead\n\t\tat java.base/java.io.PipedInputStream.read(PipedInputStream.java:310)\n\t\tat java.base/java.io.PipedInputStream.read(PipedInputStream.java:377)\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.api.client.util.ByteStreams.read(ByteStreams.java:172)\n\t\tat ...\n\t\t... 3 more\nCaused by: [CIRCULAR REFERENCE: java.io.IOException: Write end dead]\n"})}),"\n",(0,o.jsxs)(a.p,{children:["We have an active patch(",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/pull/7245",children:"https://github.com/apache/hudi/pull/7245"}),") on fixing the issue. Until we land this, you can use above config to bypass the issue."]}),"\n",(0,o.jsx)(a.h4,{id:"hudi-upserts-with-rli-fails-with-classcastexception",children:"Hudi upserts with RLI fails with ClassCastException"}),"\n",(0,o.jsxs)(a.p,{children:["In certain environments, RLI Hudi upserts may fail with the error: ",(0,o.jsx)(a.code,{children:"Caused by: java.lang.ClassCastException: class org.apache.avro.generic.GenericData$Record cannot be cast to class org.apache.hudi.avro.model.HoodieDeleteRecordList"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["To resolve this issue, we should add the hudi bundle JAR to both ",(0,o.jsx)(a.code,{children:"spark.driver.extraClassPath"})," and ",(0,o.jsx)(a.code,{children:"spark.executor.extraClassPath"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"hive-sync",children:"Hive Sync"}),"\n",(0,o.jsx)(a.h4,{id:"sqlexception-following-columns-have-types-incompatible",children:"SQLException: following columns have types incompatible"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-plain",children:"Error while processing statement: FAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.DDLTask. Unable to alter table. The following columns have types incompatible with the existing columns in their respective positions : col1,col2\n"})}),"\n",(0,o.jsxs)(a.p,{children:["This will usually happen when you are trying to add a new column to existing hive table using our ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/be4dfccbb24794dfac3714818971229870d24a2c/hudi-sync/hudi-hive-sync/src/main/java/org/apache/hudi/hive/HiveSyncTool.java",children:"HiveSyncTool.java"})," class. Databases usually will not allow to modify a column datatype from a higher order to lower order or cases where the datatypes may clash with the data that is already stored/will be stored in the table. To fix the same, try setting the following property -"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-plain",children:"set hive.metastore.disallow.incompatible.col.type.changes=false;\n"})}),"\n",(0,o.jsxs)(a.h4,{id:"hoodiehivesyncexception-could-not-convert-field-type-from-type1-to-type2-for-field-col1",children:["HoodieHiveSyncException: Could not convert field Type from ",(0,o.jsx)(a.code,{children:"<type1>"})," to ",(0,o.jsx)(a.code,{children:"<type2>"})," for field col1"]}),"\n",(0,o.jsx)(a.p,{children:"This occurs because HiveSyncTool currently supports only few compatible data type conversions. Doing any other incompatible change will throw this exception. Please check the data type evolution for the concerned field and verify if it indeed can be considered as a valid data type conversion as per Hudi code base."}),"\n",(0,o.jsx)(a.h4,{id:"orgapachehadoophiveqlparsesemanticexception-database-does-not-exist-test_db",children:"org.apache.hadoop.hive.ql.parse.SemanticException: Database does not exist: test_db"}),"\n",(0,o.jsx)(a.p,{children:"This generally occurs if you are trying to do Hive sync for your Hudi dataset and the configured hive_sync database does not exist. Please create the corresponding database on your Hive cluster and try again."}),"\n",(0,o.jsx)(a.h4,{id:"orgapachethrifttapplicationexception-invalid-method-name-get_table_req",children:"org.apache.thrift.TApplicationException: Invalid method name: 'get_table_req'"}),"\n",(0,o.jsx)(a.p,{children:"This issue is caused by hive version conflicts, hudi built with hive-2.3.x version, so if still want hudi work with older hive version"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-plain",children:"Steps: (build with hive-2.1.0)\n1. git clone git@github.com:apache/incubator-hudi.git\n2. rm hudi-hadoop-mr/src/main/java/org/apache/hudi/hadoop/hive/HoodieCombineHiveInputFormat.java\n3. mvn clean package -DskipTests -DskipITs -Dhive.version=2.1.0\n"})}),"\n",(0,o.jsx)(a.h4,{id:"javalangunsupportedoperationexception-table-rename-is-not-supported",children:"java.lang.UnsupportedOperationException: Table rename is not supported"}),"\n",(0,o.jsxs)(a.p,{children:["This issue could occur when syncing to hive. Possible reason is that, hive does not play well if your table name has upper and lower case letter. Try to have all lower case letters for your table name and it should likely get fixed. Related issue: ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/issues/2409",children:"https://github.com/apache/hudi/issues/2409"})]}),"\n",(0,o.jsxs)(a.h4,{id:"how-can-i-resolve-the-illegalargumentexception-saying-partitions-must-be-in-the-same-table-when-attempting-to-sync-to-a-metastore",children:["How can I resolve the IllegalArgumentException saying ",(0,o.jsx)(a.code,{children:"Partitions must be in the same table"})," when attempting to sync to a metastore?"]}),"\n",(0,o.jsx)(a.p,{children:"This will occur when capital letters are used in the table name. Metastores such as Hive automatically convert table names"}),"\n",(0,o.jsx)(a.p,{children:"to lowercase. While we allow capitalization on Hudi tables, if you would like to use a metastore you may be required to"}),"\n",(0,o.jsxs)(a.p,{children:["use all lowercase letters. More details on how this issue presents can be found ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/issues/6832",children:"here"}),"."]}),"\n",(0,o.jsx)(a.h4,{id:""})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>r});var i=t(96540);const o={},n=i.createContext(o);function s(e){const a=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(n.Provider,{value:a},e.children)}}}]);