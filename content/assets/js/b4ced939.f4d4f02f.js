"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[4040],{50811:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"bos_hoodie","title":"Baidu Cloud","description":"In this page, we explain how to get your Hudi job to store into Baidu BOS.","source":"@site/versioned_docs/version-0.12.2/bos_hoodie.md","sourceDirName":".","slug":"/bos_hoodie","permalink":"/docs/0.12.2/bos_hoodie","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/bos_hoodie.md","tags":[],"version":"0.12.2","frontMatter":{"title":"Baidu Cloud","keywords":["hudi","hive","baidu","bos","spark","presto"],"summary":"In this page, we go over how to configure Hudi with bos filesystem.","last_modified_at":"2021-06-09T21:38:24.000Z"},"sidebar":"docs","previous":{"title":"IBM Cloud","permalink":"/docs/0.12.2/ibm_cos_hoodie"},"next":{"title":"JuiceFS","permalink":"/docs/0.12.2/jfs_hoodie"}}');var n=s(74848),t=s(28453);const d={title:"Baidu Cloud",keywords:["hudi","hive","baidu","bos","spark","presto"],summary:"In this page, we go over how to configure Hudi with bos filesystem.",last_modified_at:new Date("2021-06-09T21:38:24.000Z")},r=void 0,a={},c=[{value:"Baidu BOS configs",id:"baidu-bos-configs",level:2},{value:"Baidu BOS Credentials",id:"baidu-bos-credentials",level:3},{value:"Baidu bos Libs",id:"baidu-bos-libs",level:3}];function u(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"In this page, we explain how to get your Hudi job to store into Baidu BOS."}),"\n",(0,n.jsx)(o.h2,{id:"baidu-bos-configs",children:"Baidu BOS configs"}),"\n",(0,n.jsx)(o.p,{children:"There are two configurations required for Hudi-BOS compatibility:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Adding Baidu BOS Credentials for Hudi"}),"\n",(0,n.jsx)(o.li,{children:"Adding required Jars to classpath"}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"baidu-bos-credentials",children:"Baidu BOS Credentials"}),"\n",(0,n.jsxs)(o.p,{children:["Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,n.jsx)(o.code,{children:"fs.defaultFS"})," with your BOS bucket name, replace ",(0,n.jsx)(o.code,{children:"fs.bos.endpoint"})," with your bos endpoint, replace ",(0,n.jsx)(o.code,{children:"fs.bos.access.key"})," with your bos key, replace ",(0,n.jsx)(o.code,{children:"fs.bos.secret.access.key"})," with your bos secret key. Hudi should be able to read/write from the bucket."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-xml",children:"<property>\n  <name>fs.defaultFS</name>\n  <value>bos://bucketname/</value>\n</property>\n\n<property>\n  <name>fs.bos.endpoint</name>\n  <value>bos-endpoint-address</value>\n  <description>Baidu bos endpoint to connect to,for example : http://bj.bcebos.com</description>\n</property>\n\n<property>\n  <name>fs.bos.access.key</name>\n  <value>bos-key</value>\n  <description>Baidu access key</description>\n</property>\n\n<property>\n  <name>fs.bos.secret.access.key</name>\n  <value>bos-secret-key</value>\n  <description>Baidu secret key.</description>\n</property>\n\n<property>\n  <name>fs.bos.impl</name>\n  <value>org.apache.hadoop.fs.bos.BaiduBosFileSystem</value>\n</property>\n"})}),"\n",(0,n.jsx)(o.h3,{id:"baidu-bos-libs",children:"Baidu bos Libs"}),"\n",(0,n.jsx)(o.p,{children:"Baidu hadoop libraries jars to add to our classpath"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"com.baidubce:bce-java-sdk:0.10.165"}),"\n",(0,n.jsx)(o.li,{children:"bos-hdfs-sdk-1.0.2-community.jar"}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["You can  download the bos-hdfs-sdk jar from ",(0,n.jsx)(o.a,{href:"https://sdk.bce.baidu.com/console-sdk/bos-hdfs-sdk-1.0.2-community.jar.zip",children:"here"})," , and then unzip it."]})]})}function l(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>d,x:()=>r});var i=s(96540);const n={},t=i.createContext(n);function d(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);