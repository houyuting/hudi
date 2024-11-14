"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[44062],{22176:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"cos_hoodie","title":"COS Filesystem","description":"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Tencent Cloud COS\u5b58\u50a8\u3002","source":"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.6.0/cos_hoodie.md","sourceDirName":".","slug":"/cos_hoodie","permalink":"/cn/docs/0.6.0/cos_hoodie","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.6.0/cos_hoodie.md","tags":[],"version":"0.6.0","frontMatter":{"version":"0.6.0","title":"COS Filesystem","keywords":["hudi","hive","tencent","cos","spark","presto"],"summary":"In this page, we go over how to configure Hudi with COS filesystem.","last_modified_at":"2020-04-21T22:50:50.000Z","language":"cn"},"sidebar":"docs","previous":{"title":"Azure Filesystem","permalink":"/cn/docs/0.6.0/azure_hoodie"},"next":{"title":"Docker Demo","permalink":"/cn/docs/0.6.0/docker_demo"}}');var s=o(74848),c=o(28453);const i={version:"0.6.0",title:"COS Filesystem",keywords:["hudi","hive","tencent","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with COS filesystem.",last_modified_at:new Date("2020-04-21T22:50:50.000Z"),language:"cn"},r=void 0,d={},l=[{value:"Tencent Cloud COS \u90e8\u7f72",id:"tencent-cloud-cos-\u90e8\u7f72",level:2},{value:"Tencent Cloud COS \u76f8\u5173\u7684\u914d\u7f6e",id:"tencent-cloud-cos-\u76f8\u5173\u7684\u914d\u7f6e",level:3},{value:"Tencent Cloud COS Libs",id:"tencent-cloud-cos-libs",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Tencent Cloud COS\u5b58\u50a8\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"tencent-cloud-cos-\u90e8\u7f72",children:"Tencent Cloud COS \u90e8\u7f72"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u8ba9Hudi\u4f7f\u7528COS\uff0c\u9700\u8981\u589e\u52a0\u4e24\u90e8\u5206\u7684\u914d\u7f6e:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e3aHidi\u589e\u52a0Tencent Cloud COS\u7684\u76f8\u5173\u914d\u7f6e"}),"\n",(0,s.jsx)(n.li,{children:"\u589e\u52a0Jar\u5305\u7684MVN\u4f9d\u8d56"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tencent-cloud-cos-\u76f8\u5173\u7684\u914d\u7f6e",children:"Tencent Cloud COS \u76f8\u5173\u7684\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.p,{children:["\u65b0\u589e\u4e0b\u9762\u7684\u914d\u7f6e\u5230\u4f60\u7684Hudi\u80fd\u8bbf\u95ee\u7684core-site.xml\u6587\u4ef6\u3002\u4f7f\u7528\u4f60\u7684COS bucket name\u66ff\u6362\u6389",(0,s.jsx)(n.code,{children:"fs.defaultFS"}),"\uff0c\u4f7f\u7528COS\u7684key\u548csecret\u5206\u522b\u66ff\u6362",(0,s.jsx)(n.code,{children:"fs.cosn.userinfo.secretKey"}),"\u548c",(0,s.jsx)(n.code,{children:"fs.cosn.userinfo.secretId"}),"\u3002\u4e3b\u8981Hudi\u5c31\u80fd\u8bfb\u5199\u76f8\u5e94\u7684bucket\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"    <property>\n        <name>fs.defaultFS</name>\n        <value>cosn://bucketname</value>\n        <description>COS bucket name</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretId</name>\n        <value>cos-secretId</value>\n        <description>Tencent Cloud Secret Id</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretKey</name>\n        <value>cos-secretkey</value>\n        <description>Tencent Cloud Secret Key</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.region</name>\n        <value>ap-region</value>\n        <description>The region where the bucket is located.</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.endpoint_suffix</name>\n        <value>cos.endpoint.suffix</value>\n        <description>\n          COS endpoint to connect to.\n          For public cloud users, it is recommended not to set this option, and only the correct area field is required.\n        </description>\n    </property>\n\n    <property>\n        <name>fs.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosFileSystem</value>\n        <description>The implementation class of the CosN Filesystem.</description>\n    </property>\n\n    <property>\n        <name>fs.AbstractFileSystem.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosN</value>\n        <description>The implementation class of the CosN AbstractFileSystem.</description>\n    </property>\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tencent-cloud-cos-libs",children:"Tencent Cloud COS Libs"}),"\n",(0,s.jsx)(n.p,{children:"\u6dfb\u52a0COS\u4f9d\u8d56jar\u5305\u5230classpath"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"org.apache.hadoop:hadoop-cos:2.8.5"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(96540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);