"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[90562],{30204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var n=a(32877),r=a(74848),i=a(28453);const s={title:"Delete support in Hudi",excerpt:"Deletes are supported at a record level in Hudi with 0.5.1 release. This blog is a \u201chow to\u201d blog on how to delete records in hudi.",author:"shivnarayan",category:"blog",tags:["how-to","deletes","apache hudi"]},o=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Delete using RDD Level APIs",id:"delete-using-rdd-level-apis",level:3},{value:"Deletion with Datasource",id:"deletion-with-datasource",level:3},{value:"Deletion with HoodieDeltaStreamer",id:"deletion-with-hoodiedeltastreamer",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:'Deletes are supported at a record level in Hudi with 0.5.1 release. This blog is a "how to" blog on how to delete records in hudi. Deletes can be done with 3 flavors: Hudi RDD APIs, with Spark data source and with DeltaStreamer.'}),"\n",(0,r.jsx)(t.h3,{id:"delete-using-rdd-level-apis",children:"Delete using RDD Level APIs"}),"\n",(0,r.jsxs)(t.p,{children:["If you have embedded  ",(0,r.jsx)(t.em,{children:"HoodieWriteClient"})," , then deletion is as simple as passing in a  ",(0,r.jsx)(t.em,{children:"JavaRDD<HoodieKey>"})," to the delete api."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// Fetch list of HoodieKeys from elsewhere that needs to be deleted\n// convert to JavaRDD if required. JavaRDD<HoodieKey> toBeDeletedKeys\nList<WriteStatus> statuses = writeClient.delete(toBeDeletedKeys, commitTime);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"deletion-with-datasource",children:"Deletion with Datasource"}),"\n",(0,r.jsx)(t.p,{children:"Now we will walk through an example of how to perform deletes on a sample dataset using the Datasource API. Quick Start has the same example as below. Feel free to check it out."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 1"})," : Launch spark shell"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"bin/spark-shell --packages org.apache.hudi:hudi-spark-bundle:0.5.1-incubating \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 2"})," : Import as required and set up table name, etc for sample dataset"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scala",children:'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n     \nval tableName = "hudi_cow_table"\nval basePath = "file:///tmp/hudi_cow_table"\nval dataGen = new DataGenerator\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 3"})," : Insert data. Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi dataset as below."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scala",children:'val inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("org.apache.hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Overwrite).\n  save(basePath);\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," For non-partitioned table, set"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'option(KEYGENERATOR_CLASS_PROP, "org.apache.hudi.keygen.NonpartitionedKeyGenerator")\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Checkout ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators",children:"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators"})," for more options"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 4"})," : Query data. Load the data files into a DataFrame."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scala",children:'val roViewDF = spark.read.\n  format("org.apache.hudi").\n  load(basePath + "/*/*/*/*")\nroViewDF.createOrReplaceTempView("hudi_ro_table")\nspark.sql("select count(*) from hudi_ro_table").show() // should return 10 (number of records inserted above)\nval riderValue = spark.sql("select distinct rider from hudi_ro_table").show()\n// copy the value displayed to be used in next step\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 5"}),' : Fetch records that needs to be deleted, with the above rider value. This example is just to illustrate how to delete. In real world, use a select query using spark sql to fetch records that needs to be deleted and from the result we could invoke deletes as given below. Example rider value used is "rider-213".']}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scala",children:"val df = spark.sql(\"select uuid, partitionPath from hudi_ro_table where rider = 'rider-213'\")\n"})}),"\n",(0,r.jsx)(t.p,{children:"// Replace the above query with any other query that will fetch records to be deleted."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 6"})," : Issue deletes"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scala",children:'val deletes = dataGen.generateDeletes(df.collectAsList())\nval df = spark.read.json(spark.sparkContext.parallelize(deletes, 2));\ndf.write.format("org.apache.hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"delete").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath);\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," For non-partitioned table, set"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'option(KEYGENERATOR_CLASS_PROP, "org.apache.hudi.keygen.NonpartitionedKeyGenerator")\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Checkout ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators",children:"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators"})," for more options"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 7"})," : Reload the table and verify that the records are deleted"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scala",children:'val roViewDFAfterDelete = spark.\n  read.\n  format("org.apache.hudi").\n  load(basePath + "/*/*/*/*")\nroViewDFAfterDelete.createOrReplaceTempView("hudi_ro_table")\nspark.sql("select uuid, partitionPath from hudi_ro_table where rider = \'rider-213\'").show() // should not return any rows\n'})}),"\n",(0,r.jsx)(t.h2,{id:"deletion-with-hoodiedeltastreamer",children:"Deletion with HoodieDeltaStreamer"}),"\n",(0,r.jsxs)(t.p,{children:["Deletion with ",(0,r.jsx)(t.code,{children:"HoodieDeltaStreamer"}),' takes the same path as upsert and so it relies on a specific field called  "',(0,r.jsx)(t.em,{children:"_hoodie_is_deleted"}),'" of type boolean in each record.']}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If a record has the field value set to  ",(0,r.jsx)(t.em,{children:"false"})," or it's not present, then it is considered a regular upsert"]}),"\n",(0,r.jsxs)(t.li,{children:["if not (if the value is set to  ",(0,r.jsx)(t.em,{children:"true"})," ), then its considered to be deleted record."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This essentially means that the schema has to be changed for the source, to add this field and all incoming records are expected to have this field set. We will be working to relax this in future releases."}),"\n",(0,r.jsx)(t.p,{children:"Lets say the original schema is:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "type":"record",\n  "name":"example_tbl",\n  "fields":[{\n     "name": "uuid",\n     "type": "String"\n  }, {\n     "name": "ts",\n     "type": "string"\n  },  {\n     "name": "partitionPath",\n     "type": "string"\n  }, {\n     "name": "rank",\n     "type": "long"\n  }\n]}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["To leverage deletion capabilities of ",(0,r.jsx)(t.code,{children:"DeltaStreamer"}),", you have to change the schema as below."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "type":"record",\n  "name":"example_tbl",\n  "fields":[{\n     "name": "uuid",\n     "type": "String"\n  }, {\n     "name": "ts",\n     "type": "string"\n  },  {\n     "name": "partitionPath",\n     "type": "string"\n  }, {\n     "name": "rank",\n     "type": "long"\n  }, {\n    "name" : "_hoodie_is_deleted",\n    "type" : "boolean",\n    "default" : false\n  }\n]}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Example incoming record for upsert"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "ts": 0.0,\n  "uuid":"69cdb048-c93e-4532-adf9-f61ce6afe605",\n  "rank": 1034,\n  "partitionpath":"americas/brazil/sao_paulo",\n  "_hoodie_is_deleted":false\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Example incoming record that needs to be deleted"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "ts": 0.0,\n  "uuid": "19tdb048-c93e-4532-adf9-f61ce6afe10",\n  "rank": 1045,\n  "partitionpath":"americas/brazil/sao_paulo",\n  "_hoodie_is_deleted":true\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"These are one time changes. Once these are in, then the DeltaStreamer pipeline will handle both upserts and deletions within every batch. Each batch could contain a mix of upserts and deletes and no additional step or changes are required after this. Note that this is to perform hard deletion instead of soft deletion."})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}},32877:e=>{e.exports=JSON.parse('{"permalink":"/cn/blog/2020/01/15/delete-support-in-hudi","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-01-15-delete-support-in-hudi.md","source":"@site/blog/2020-01-15-delete-support-in-hudi.md","title":"Delete support in Hudi","description":"Deletes are supported at a record level in Hudi with 0.5.1 release. This blog is a \\"how to\\" blog on how to delete records in hudi. Deletes can be done with 3 flavors: Hudi RDD APIs, with Spark data source and with DeltaStreamer.","date":"2020-01-15T00:00:00.000Z","tags":[{"inline":true,"label":"how-to","permalink":"/cn/blog/tags/how-to"},{"inline":true,"label":"deletes","permalink":"/cn/blog/tags/deletes"},{"inline":true,"label":"apache hudi","permalink":"/cn/blog/tags/apache-hudi"}],"readingTime":3.835,"hasTruncateMarker":true,"authors":[{"name":"shivnarayan","key":null,"page":null}],"frontMatter":{"title":"Delete support in Hudi","excerpt":"Deletes are supported at a record level in Hudi with 0.5.1 release. This blog is a \u201chow to\u201d blog on how to delete records in hudi.","author":"shivnarayan","category":"blog","tags":["how-to","deletes","apache hudi"]},"unlisted":false,"prevItem":{"title":"Change Capture Using AWS Database Migration Service and Hudi","permalink":"/cn/blog/2020/01/20/change-capture-using-aws"},"nextItem":{"title":"New \u2013 Insert, Update, Delete Data on S3 with Amazon EMR and Apache Hudi","permalink":"/cn/blog/2019/11/15/New-Insert-Update-Delete-Data-on-S3-with-Amazon-EMR-and-Apache-Hudi"}}')}}]);