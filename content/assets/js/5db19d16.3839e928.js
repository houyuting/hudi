"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[48673],{67506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"reading_tables_streaming_reads","title":"Streaming Reads","description":"Spark Streaming","source":"@site/docs/reading_tables_streaming_reads.md","sourceDirName":".","slug":"/reading_tables_streaming_reads","permalink":"/docs/next/reading_tables_streaming_reads","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/reading_tables_streaming_reads.md","tags":[],"version":"current","frontMatter":{"title":"Streaming Reads","keywords":["hudi","spark","flink","streaming","processing"]},"sidebar":"docs","previous":{"title":"Batch Reads","permalink":"/docs/next/reading_tables_batch_reads"},"next":{"title":"Bootstrapping","permalink":"/docs/next/migration_guide"}}');var n=a(74848),s=a(28453),o=a(11470),i=a(19365);const l={title:"Streaming Reads",keywords:["hudi","spark","flink","streaming","processing"]},u=void 0,d={},c=[{value:"Spark Streaming",id:"spark-streaming",level:2}];function p(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"spark-streaming",children:"Spark Streaming"}),"\n",(0,n.jsx)(t.p,{children:"Structured Streaming reads are based on Hudi's Incremental Query feature, therefore streaming read can return data for which\ncommits and base files were not yet removed by the cleaner. You can control commits retention time."}),"\n",(0,n.jsxs)(o.A,{groupId:"programming-language",defaultValue:"python",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,n.jsx)(i.A,{value:"scala",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'// spark-shell\n// reload data\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option("hoodie.datasource.write.precombine.field", "ts").\n  option("hoodie.datasource.write.recordkey.field", "uuid").\n  option("hoodie.datasource.write.partitionpath.field", "partitionpath").\n  option("hoodie.table.name", tableName).\n  mode(Overwrite).\n  save(basePath)\n\n// read stream and output results to console\nspark.readStream.\n  format("hudi").\n  load(basePath).\n  writeStream.\n  format("console").\n  start()\n\n// read stream to streaming df\nval df = spark.readStream.\n        format("hudi").\n        load(basePath)\n\n'})})}),(0,n.jsx)(i.A,{value:"python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# pyspark\n# reload data\ninserts = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(\n    dataGen.generateInserts(10))\ndf = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n\nhudi_options = {\n    'hoodie.table.name': tableName,\n    'hoodie.datasource.write.recordkey.field': 'uuid',\n    'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n    'hoodie.datasource.write.table.name': tableName,\n    'hoodie.datasource.write.operation': 'upsert',\n    'hoodie.datasource.write.precombine.field': 'ts',\n    'hoodie.upsert.shuffle.parallelism': 2,\n    'hoodie.insert.shuffle.parallelism': 2\n}\n\ndf.write.format(\"hudi\"). \\\n    options(**hudi_options). \\\n    mode(\"overwrite\"). \\\n    save(basePath)\n\n# read stream to streaming df\ndf = spark.readStream \\\n    .format(\"hudi\") \\\n    .load(basePath)\n\n# ead stream and output results to console\nspark.readStream \\\n    .format(\"hudi\") \\\n    .load(basePath) \\\n    .writeStream \\\n    .format(\"console\") \\\n    .start()\n\n"})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Spark SQL can be used within ForeachBatch sink to do INSERT, UPDATE, DELETE and MERGE INTO.\nTarget table must exist before write."})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var r=a(34164);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,o),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>x});var r=a(96540),n=a(34164),s=a(23104),o=a(56347),i=a(205),l=a(57485),u=a(31682),d=a(70679);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,c]=h({queryString:a,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,s]),tabValues:s}}var b=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function k(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),n=i[a].value;n!==r&&(u(t),o(n))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:s}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(k,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function x(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var r=a(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);