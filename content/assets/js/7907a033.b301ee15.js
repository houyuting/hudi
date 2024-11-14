"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[91621],{82294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"quick-start-guide","title":"Quick-Start Guide","description":"This guide provides a quick peek at Hudi\'s capabilities using spark-shell. Using Spark datasources, we will walk through","source":"@site/versioned_docs/version-0.5.2/quick-start-guide.md","sourceDirName":".","slug":"/quick-start-guide","permalink":"/docs/0.5.2/quick-start-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.2/quick-start-guide.md","tags":[],"version":"0.5.2","frontMatter":{"version":"0.5.2","title":"Quick-Start Guide","toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","next":{"title":"Use Cases","permalink":"/docs/0.5.2/use_cases"}}');var n=a(74848),r=a(28453);const s={version:"0.5.2",title:"Quick-Start Guide",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,d={},l=[{value:"Setup spark-shell",id:"setup-spark-shell",level:2},{value:"Insert data",id:"insert-data",level:2},{value:"Query data",id:"query-data",level:2},{value:"Update data",id:"update-data",level:2},{value:"Incremental query",id:"incremental-query",level:2},{value:"Point in time query",id:"point-in-time-query",level:2},{value:"Delete data",id:"deletes",level:2},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This guide provides a quick peek at Hudi's capabilities using spark-shell. Using Spark datasources, we will walk through\ncode snippets that allows you to insert and update a Hudi table of default table type:\n",(0,n.jsx)(t.a,{href:"/docs/concepts#copy-on-write-table",children:"Copy on Write"}),".\nAfter each write operation we will also show how to read the data both snapshot and incrementally."]}),"\n",(0,n.jsx)(t.h2,{id:"setup-spark-shell",children:"Setup spark-shell"}),"\n",(0,n.jsxs)(t.p,{children:["Hudi works with Spark-2.x versions. You can follow instructions ",(0,n.jsx)(t.a,{href:"https://spark.apache.org/downloads",children:"here"})," for setting up spark.\nFrom the extracted directory run spark-shell with Hudi as:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:"spark-2.4.4-bin-hadoop2.7/bin/spark-shell \\\n  --packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.2-incubating,org.apache.spark:spark-avro_2.11:2.4.4 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n"})}),"\n",(0,n.jsxs)("div",{className:"notice--info",children:[(0,n.jsx)("h4",{children:"Please note the following: "}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"spark-avro module needs to be specified in --packages as it is not included with spark-shell by default"}),(0,n.jsx)("li",{children:"spark-avro and spark versions must match (we have used 2.4.4 for both above)"}),(0,n.jsx)("li",{children:"we have used hudi-spark-bundle built for scala 2.11 since the spark-avro module used also depends on 2.11.\nIf spark-avro_2.12 is used, correspondingly hudi-spark-bundle_2.12 needs to be used. "})]})]}),"\n",(0,n.jsx)(t.p,{children:"Setup table name, base path and a data generator to generate records for this guide."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nval tableName = "hudi_trips_cow"\nval basePath = "file:///tmp/hudi_trips_cow"\nval dataGen = new DataGenerator\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L50",children:"DataGenerator"}),"\ncan generate sample inserts and updates based on the the sample trip schema ",(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L57",children:"here"}),"\n{: .notice--info}"]}),"\n",(0,n.jsx)(t.h2,{id:"insert-data",children:"Insert data"}),"\n",(0,n.jsx)(t.p,{children:"Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi table as below."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'val inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Overwrite).\n  save(basePath)\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"mode(Overwrite)"})," overwrites and recreates the table if it already exists.\nYou can check the data generated under ",(0,n.jsx)(t.code,{children:"/tmp/hudi_trips_cow/<region>/<country>/<city>/"}),". We provided a record key\n(",(0,n.jsx)(t.code,{children:"uuid"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58",children:"schema"}),"), partition field (",(0,n.jsx)(t.code,{children:"region/county/city"}),") and combine logic (",(0,n.jsx)(t.code,{children:"ts"})," in\n",(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58",children:"schema"}),") to ensure trip records are unique within each partition. For more info, refer to\n",(0,n.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=113709185#FAQ-HowdoImodelthedatastoredinHudi",children:"Modeling data stored in Hudi"}),"\nand for info on ways to ingest data into Hudi, refer to ",(0,n.jsx)(t.a,{href:"/docs/writing_data",children:"Writing Hudi Tables"}),".\nHere we are using the default write operation : ",(0,n.jsx)(t.code,{children:"upsert"}),". If you have a workload without updates, you can also issue\n",(0,n.jsx)(t.code,{children:"insert"})," or ",(0,n.jsx)(t.code,{children:"bulk_insert"})," operations which could be faster. To know more, refer to ",(0,n.jsx)(t.a,{href:"/docs/writing_data#write-operations",children:"Write operations"}),"\n{: .notice--info}"]}),"\n",(0,n.jsx)(t.h2,{id:"query-data",children:"Query data"}),"\n",(0,n.jsx)(t.p,{children:"Load the data files into a DataFrame."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'val tripsSnapshotDF = spark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*")\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select fare, begin_lon, begin_lat, ts from  hudi_trips_snapshot where fare > 20.0").show()\nspark.sql("select _hoodie_commit_time, _hoodie_record_key, _hoodie_partition_path, rider, driver, fare from  hudi_trips_snapshot").show()\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This query provides snapshot querying of the ingested data. Since our partition path (",(0,n.jsx)(t.code,{children:"region/country/city"}),") is 3 levels nested\nfrom base path we ve used ",(0,n.jsx)(t.code,{children:'load(basePath + "/*/*/*/*")'}),".\nRefer to ",(0,n.jsx)(t.a,{href:"/docs/concepts#table-types--queries",children:"Table types and queries"})," for more info on all table types and query types supported.\n{: .notice--info}"]}),"\n",(0,n.jsx)(t.h2,{id:"update-data",children:"Update data"}),"\n",(0,n.jsx)(t.p,{children:"This is similar to inserting new data. Generate updates to existing trips using the data generator, load into a DataFrame\nand write DataFrame into the hudi table."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'val updates = convertToStringList(dataGen.generateUpdates(10))\nval df = spark.read.json(spark.sparkContext.parallelize(updates, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Notice that the save mode is now ",(0,n.jsx)(t.code,{children:"Append"}),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,n.jsx)(t.a,{href:"#query-data",children:"Querying"})," the data again will now show updated trips. Each write operation generates a new ",(0,n.jsx)(t.a,{href:"http://hudi.incubator.apache.org/docs/concepts",children:"commit"}),"\ndenoted by the timestamp. Look for changes in ",(0,n.jsx)(t.code,{children:"_hoodie_commit_time"}),", ",(0,n.jsx)(t.code,{children:"rider"}),", ",(0,n.jsx)(t.code,{children:"driver"})," fields for the same ",(0,n.jsx)(t.code,{children:"_hoodie_record_key"}),"s in previous commit.\n{: .notice--info}"]}),"\n",(0,n.jsx)(t.h2,{id:"incremental-query",children:"Incremental query"}),"\n",(0,n.jsx)(t.p,{children:"Hudi also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's incremental querying and providing a begin time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case)."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'// reload data\nspark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*").\n  createOrReplaceTempView("hudi_trips_snapshot")\n\nval commits = spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_trips_snapshot order by commitTime").map(k => k.getString(0)).take(50)\nval beginTime = commits(commits.length - 2) // commit time we are interested in\n\n// incrementally query data\nval tripsIncrementalDF = spark.read.format("hudi").\n  option(QUERY_TYPE_OPT_KEY, QUERY_TYPE_INCREMENTAL_OPT_VAL).\n  option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n  load(basePath)\ntripsIncrementalDF.createOrReplaceTempView("hudi_trips_incremental")\n\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n'})}),"\n",(0,n.jsx)(t.p,{children:"This will give all changes that happened after the beginTime commit with the filter of fare > 20.0. The unique thing about this\nfeature is that it now lets you author streaming pipelines on batch data.\n{: .notice--info}"}),"\n",(0,n.jsx)(t.h2,{id:"point-in-time-query",children:"Point in time query"}),"\n",(0,n.jsx)(t.p,{children:'Lets look at how to query data as of a specific time. The specific time can be represented by pointing endTime to a\nspecific commit time and beginTime to "000" (denoting earliest possible commit time).'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'val beginTime = "000" // Represents all commits > this time.\nval endTime = commits(commits.length - 2) // commit time we are interested in\n\n//incrementally query data\nval tripsPointInTimeDF = spark.read.format("hudi").\n  option(QUERY_TYPE_OPT_KEY, QUERY_TYPE_INCREMENTAL_OPT_VAL).\n  option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n  option(END_INSTANTTIME_OPT_KEY, endTime).\n  load(basePath)\ntripsPointInTimeDF.createOrReplaceTempView("hudi_trips_point_in_time")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_point_in_time where fare > 20.0").show()\n'})}),"\n",(0,n.jsx)(t.h2,{id:"deletes",children:"Delete data"}),"\n",(0,n.jsx)(t.p,{children:"Delete records for the HoodieKeys passed in."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'// fetch total records count\nspark.sql("select uuid, partitionPath from hudi_trips_snapshot").count()\n// fetch two records to be deleted\nval ds = spark.sql("select uuid, partitionPath from hudi_trips_snapshot").limit(2)\n\n// issue deletes\nval deletes = dataGen.generateDeletes(ds.collectAsList())\nval df = spark.read.json(spark.sparkContext.parallelize(deletes, 2));\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"delete").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// run the same read query as above.\nval roAfterDeleteViewDF = spark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*")\nroAfterDeleteViewDF.registerTempTable("hudi_trips_snapshot")\n// fetch should return (total - 2) records\nspark.sql("select uuid, partitionPath from hudi_trips_snapshot").count()\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Note: Only ",(0,n.jsx)(t.code,{children:"Append"})," mode is supported for delete operation."]}),"\n",(0,n.jsx)(t.h2,{id:"where-to-go-from-here",children:"Where to go from here?"}),"\n",(0,n.jsxs)(t.p,{children:["You can also do the quickstart by ",(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi#building-apache-hudi-from-source",children:"building hudi yourself"}),",\nand using ",(0,n.jsx)(t.code,{children:"--jars <path to hudi_code>/packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-*.*.*-SNAPSHOT.jar"})," in the spark-shell command above\ninstead of ",(0,n.jsx)(t.code,{children:"--packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.2-incubating"}),". Hudi also supports scala 2.12. Refer ",(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi#build-with-scala-212",children:"build with scala 2.12"}),"\nfor more info."]}),"\n",(0,n.jsxs)(t.p,{children:["Also, we used Spark here to show case the capabilities of Hudi. However, Hudi can support multiple table types/query types and\nHudi tables can be queried from query engines like Hive, Spark, Presto and much more. We have put together a\n",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=VhNgUsxdrD0",children:"demo video"})," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,n.jsx)(t.a,{href:"/docs/docker_demo",children:"here"})," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,n.jsx)(t.a,{href:"/docs/migration_guide",children:"migration guide"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var i=a(96540);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);