"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[17530],{20014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"syncing_aws_glue_data_catalog","title":"AWS Glue Data Catalog","description":"Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on HiveSyncTool","source":"@site/versioned_docs/version-0.11.0/syncing_aws_glue_data_catalog.md","sourceDirName":".","slug":"/syncing_aws_glue_data_catalog","permalink":"/cn/docs/0.11.0/syncing_aws_glue_data_catalog","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.0/syncing_aws_glue_data_catalog.md","tags":[],"version":"0.11.0","frontMatter":{"title":"AWS Glue Data Catalog","keywords":["hudi","aws","glue","sync"]},"sidebar":"docs","previous":{"title":"Flink Setup","permalink":"/cn/docs/0.11.0/flink_configuration"},"next":{"title":"DataHub","permalink":"/cn/docs/0.11.0/syncing_datahub"}}');var o=t(74848),s=t(28453);const c={title:"AWS Glue Data Catalog",keywords:["hudi","aws","glue","sync"]},i=void 0,l={},r=[{value:"Configurations",id:"configurations",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on ",(0,o.jsx)(n.code,{children:"HiveSyncTool"}),"\n, ",(0,o.jsx)(n.code,{children:"org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool"})," makes use of all the configurations that are taken by ",(0,o.jsx)(n.code,{children:"HiveSyncTool"}),"\nand send them to AWS Glue."]}),"\n",(0,o.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,o.jsxs)(n.p,{children:["There is no additional configuration for using ",(0,o.jsx)(n.code,{children:"AwsGlueCatalogSyncTool"}),"; you just need to set it as one of the sync tool\nclasses for ",(0,o.jsx)(n.code,{children:"HoodieDeltaStreamer"})," and everything configured as shown in ",(0,o.jsx)(n.a,{href:"syncing_metastore",children:"Sync to Hive Metastore"})," will\nbe passed along."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"--sync-tool-classes org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var a=t(96540);const o={},s=a.createContext(o);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);