"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[68470],{30838:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"ibm_cos_hoodie","title":"IBM Cloud","description":"In this page, we explain how to get your Hudi spark job to store into IBM Cloud Object Storage.","source":"@site/versioned_docs/version-0.15.0/ibm_cos_hoodie.md","sourceDirName":".","slug":"/ibm_cos_hoodie","permalink":"/docs/ibm_cos_hoodie","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/ibm_cos_hoodie.md","tags":[],"version":"0.15.0","frontMatter":{"title":"IBM Cloud","keywords":["hudi","hive","ibm","cos","spark","presto"],"summary":"In this page, we go over how to configure Hudi with IBM Cloud Object Storage filesystem.","last_modified_at":"2020-10-01T21:38:24.000Z"},"sidebar":"docs","previous":{"title":"Tencent Cloud","permalink":"/docs/cos_hoodie"},"next":{"title":"Baidu Cloud","permalink":"/docs/bos_hoodie"}}');var s=t(74848),r=t(28453);const i={title:"IBM Cloud",keywords:["hudi","hive","ibm","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with IBM Cloud Object Storage filesystem.",last_modified_at:new Date("2020-10-01T21:38:24.000Z")},a=void 0,c={},l=[{value:"IBM COS configs",id:"ibm-cos-configs",level:2},{value:"IBM Cloud Object Storage Credentials",id:"ibm-cloud-object-storage-credentials",level:3},{value:"IBM Cloud Object Storage Libs",id:"ibm-cloud-object-storage-libs",level:3}];function d(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"In this page, we explain how to get your Hudi spark job to store into IBM Cloud Object Storage."}),"\n",(0,s.jsx)(o.h2,{id:"ibm-cos-configs",children:"IBM COS configs"}),"\n",(0,s.jsx)(o.p,{children:"There are two configurations required for Hudi-IBM Cloud Object Storage compatibility:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Adding IBM COS Credentials for Hudi"}),"\n",(0,s.jsx)(o.li,{children:"Adding required Jars to classpath"}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"ibm-cloud-object-storage-credentials",children:"IBM Cloud Object Storage Credentials"}),"\n",(0,s.jsxs)(o.p,{children:["Simplest way to use Hudi with IBM Cloud Object Storage, is to configure your ",(0,s.jsx)(o.code,{children:"SparkSession"})," or ",(0,s.jsx)(o.code,{children:"SparkContext"})," with IBM Cloud Object Storage credentials using ",(0,s.jsx)(o.a,{href:"https://github.com/CODAIT/stocator",children:"Stocator"})," storage connector for Spark. Hudi will automatically pick this up and talk to IBM Cloud Object Storage."]}),"\n",(0,s.jsxs)(o.p,{children:["Alternatively, add the required configs in your ",(0,s.jsx)(o.code,{children:"core-site.xml"})," from where Hudi can fetch them. Replace the ",(0,s.jsx)(o.code,{children:"fs.defaultFS"})," with your IBM Cloud Object Storage bucket name and Hudi should be able to read/write from the bucket."]}),"\n",(0,s.jsxs)(o.p,{children:["For example, using HMAC keys and service name ",(0,s.jsx)(o.code,{children:"myCOS"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-xml",children:"  <property>\n      <name>fs.defaultFS</name>\n      <value>cos://myBucket.myCOS</value>\n  </property>\n\n  <property>\n      <name>fs.cos.flat.list</name>\n      <value>true</value>\n  </property>\n\n  <property>\n      <name>fs.stocator.scheme.list</name>\n      <value>cos</value>\n  </property>\n\n  <property>\n      <name>fs.cos.impl</name>\n      <value>com.ibm.stocator.fs.ObjectStoreFileSystem</value>\n  </property>\n\n  <property>\n      <name>fs.stocator.cos.impl</name>\n      <value>com.ibm.stocator.fs.cos.COSAPIClient</value>\n  </property>\n\n  <property>\n      <name>fs.stocator.cos.scheme</name>\n      <value>cos</value>\n  </property>\n\n  <property>\n      <name>fs.cos.myCos.access.key</name>\n      <value>ACCESS KEY</value>\n  </property>\n\n  <property>\n      <name>fs.cos.myCos.endpoint</name>\n      <value>http://s3-api.us-geo.objectstorage.softlayer.net</value>\n  </property>\n\n  <property>\n      <name>fs.cos.myCos.secret.key</name>\n      <value>SECRET KEY</value>\n  </property>\n\n"})}),"\n",(0,s.jsxs)(o.p,{children:["For more options see Stocator ",(0,s.jsx)(o.a,{href:"https://github.com/CODAIT/stocator/blob/master/README.md",children:"documentation"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"ibm-cloud-object-storage-libs",children:"IBM Cloud Object Storage Libs"}),"\n",(0,s.jsx)(o.p,{children:"IBM Cloud Object Storage hadoop libraries to add to our classpath"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"com.ibm.stocator:stocator:1.1.3"}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>a});var n=t(96540);const s={},r=n.createContext(s);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);