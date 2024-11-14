"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[66524],{93616:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"hoodie_cleaner","title":"Cleaning","description":"Background","source":"@site/versioned_docs/version-0.15.0/hoodie_cleaner.md","sourceDirName":".","slug":"/hoodie_cleaner","permalink":"/cn/docs/hoodie_cleaner","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/hoodie_cleaner.md","tags":[],"version":"0.15.0","frontMatter":{"title":"Cleaning","toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"Metadata Indexing","permalink":"/cn/docs/metadata_indexing"},"next":{"title":"Rollback Mechanism","permalink":"/cn/docs/rollbacks"}}');var a=i(74848),s=i(28453);const t={title:"Cleaning",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},r=void 0,l={},c=[{value:"Background",id:"background",level:2},{value:"Cleaning Retention Policies",id:"cleaning-retention-policies",level:3},{value:"Configs",id:"configs",level:3},{value:"Ways to trigger Cleaning",id:"ways-to-trigger-cleaning",level:3},{value:"Inline",id:"inline",level:4},{value:"Async",id:"async",level:4},{value:"Run independently",id:"run-independently",level:4},{value:"CLI",id:"cli",level:4},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,a.jsxs)(n.p,{children:["Cleaning is a table service employed by Hudi to reclaim space occupied by older versions of data and keep storage costs\nin check. Apache Hudi provides snapshot isolation between writers and readers by managing multiple versioned files with ",(0,a.jsx)(n.strong,{children:"MVCC"}),"\nconcurrency. These file versions provide history and enable time travel and rollbacks, but it is important to manage\nhow much history you keep to balance your costs. Cleaning service plays a crucial role in manging the tradeoff between\nretaining long history of data and the associated storage costs."]}),"\n",(0,a.jsxs)(n.p,{children:["Hudi enables ",(0,a.jsx)(n.a,{href:"/docs/configurations/#hoodiecleanautomatic",children:"Automatic Hudi cleaning"})," by default. Cleaning is invoked\nimmediately after each commit, to delete older file slices. It's recommended to leave this enabled to ensure metadata\nand data storage growth is bounded. Cleaner can also be scheduled after every few commits instead of after every commit by\nconfiguring ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations#hoodiecleanmaxcommits",children:"hoodie.clean.max.commits"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"cleaning-retention-policies",children:"Cleaning Retention Policies"}),"\n",(0,a.jsx)(n.p,{children:"When cleaning old files, you should be careful not to remove files that are being actively used by long running queries."}),"\n",(0,a.jsx)(n.p,{children:"For spark based:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Config Name"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"hoodie.cleaner.policy"}),(0,a.jsx)(n.td,{children:"KEEP_LATEST_COMMITS (Optional)"}),(0,a.jsxs)(n.td,{children:["org.apache.hudi.common.model.HoodieCleaningPolicy: Cleaning policy to be used. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"Config Param: CLEANER_POLICY"})]})]})})]}),"\n",(0,a.jsxs)(n.p,{children:["The corresponding config for Flink based engine is ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations/#cleanpolicy",children:(0,a.jsx)(n.code,{children:"clean.policy"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Hudi cleaner currently supports the below cleaning policies to keep a certain number of commits or file versions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"KEEP_LATEST_COMMITS"}),": This is the default policy. This is a temporal cleaning policy that ensures the effect of\nhaving lookback into all the changes that happened in the last X commits. Suppose a writer is ingesting data\ninto a Hudi dataset every 30 minutes and the longest running query can take 5 hours to finish, then the user should\nretain atleast the last 10 commits. With such a configuration, we ensure that the oldest version of a file is kept on\ndisk for at least 5 hours, thereby preventing the longest running query from failing at any point in time. Incremental\ncleaning is also possible using this policy.\nNumber of commits to retain can be configured by ",(0,a.jsx)(n.a,{href:"https://analytics.google.com/analytics/web/#/p300324801/reports/intelligenthome",children:(0,a.jsx)(n.code,{children:"hoodie.cleaner.commits.retained"})}),".\nThe corresponding Flink related config is ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations/#cleanretain_commits",children:(0,a.jsx)(n.code,{children:"clean.retain_commits"})}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"KEEP_LATEST_FILE_VERSIONS"}),": This policy has the effect of keeping N number of file versions irrespective of time.\nThis policy is useful when it is known how many MAX versions of the file does one want to keep at any given time.\nTo achieve the same behaviour as before of preventing long running queries from failing, one should do their calculations\nbased on data patterns. Alternatively, this policy is also useful if a user just wants to maintain 1 latest version of the file.\nNumber of file versions to retain can be configured by ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations/#hoodiecleanerfileversionsretained",children:(0,a.jsx)(n.code,{children:"hoodie.cleaner.fileversions.retained"})}),".\nThe corresponding Flink related config is ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations/#cleanretain_file_versions",children:(0,a.jsx)(n.code,{children:"clean.retain_file_versions"})}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"KEEP_LATEST_BY_HOURS"}),": This policy clean up based on hours.It is simple and useful when knowing that you want to\nkeep files at any given time. Corresponding to commits with commit times older than the configured number of hours to\nbe retained are cleaned. Currently you can configure by parameter ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations/#hoodiecleanerhoursretained",children:(0,a.jsx)(n.code,{children:"hoodie.cleaner.hours.retained"})}),".\nThe corresponding Flink related config is ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations/#cleanretain_hours",children:(0,a.jsx)(n.code,{children:"clean.retain_hours"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"configs",children:"Configs"}),"\n",(0,a.jsxs)(n.p,{children:["For details about all possible configurations and their default values see the ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/configurations/#Clean-Configs",children:"configuration docs"}),".\nFor Flink related configs refer ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/configurations/#FLINK_SQL",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"ways-to-trigger-cleaning",children:"Ways to trigger Cleaning"}),"\n",(0,a.jsx)(n.h4,{id:"inline",children:"Inline"}),"\n",(0,a.jsxs)(n.p,{children:["By default, in Spark based writing, cleaning is run inline after every commit using the default policy of ",(0,a.jsx)(n.code,{children:"KEEP_LATEST_COMMITS"}),". It's recommended\nto keep this enabled, to ensure metadata and data storage growth is bounded. To enable this, users do not have to set any configs. Following are the relevant basic configs."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Config Name"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"hoodie.clean.automatic"}),(0,a.jsx)(n.td,{children:"true (Optional)"}),(0,a.jsxs)(n.td,{children:["When enabled, the cleaner table service is invoked immediately after each commit, to delete older file slices. It's recommended to enable this, to ensure metadata and data storage growth is bounded.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"Config Param: AUTO_CLEAN"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"hoodie.cleaner.commits.retained"}),(0,a.jsx)(n.td,{children:"10 (Optional)"}),(0,a.jsxs)(n.td,{children:["Number of commits to retain, without cleaning. This will be retained for num_of_commits * time_between_commits (scheduled). This also directly translates into how much data retention the table supports for incremental queries.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"Config Param: CLEANER_COMMITS_RETAINED"})]})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"async",children:"Async"}),"\n",(0,a.jsxs)(n.p,{children:["In case you wish to run the cleaner service asynchronously along with writing, please enable the ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations#hoodiecleanasync",children:(0,a.jsx)(n.code,{children:"hoodie.clean.async"})})," as shown below:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"hoodie.clean.automatic=true\nhoodie.clean.async=true\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For Flink based writing, this is the default mode of cleaning. Please refer to ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations/#cleanasyncenabled",children:(0,a.jsx)(n.code,{children:"clean.async.enabled"})})," for details."]}),"\n",(0,a.jsx)(n.h4,{id:"run-independently",children:"Run independently"}),"\n",(0,a.jsx)(n.p,{children:"Hoodie Cleaner can also be run as a separate process. Following is the command for running the cleaner independently:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` --help\n        Usage: <main class> [options]\n        Options:\n        --help, -h\n\n        --hoodie-conf\n        Any configuration that can be set in the properties file (using the CLI\n        parameter "--props") can also be passed command line using this\n        parameter. This can be repeated\n        Default: []\n        --props\n        path to properties file on localfs or dfs, with configurations for\n        hoodie client for cleaning\n        --spark-master\n        spark master to use.\n        Default: local[2]\n        * --target-base-path\n        base path for the hoodie table to be cleaner.\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Some examples to run the cleaner.",(0,a.jsx)(n.br,{}),"\n","Keep the latest 10 commits"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_COMMITS \\\n  --hoodie-conf hoodie.cleaner.commits.retained=10 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n"})}),"\n",(0,a.jsx)(n.p,{children:"Keep the latest 3 file versions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_FILE_VERSIONS \\\n  --hoodie-conf hoodie.cleaner.fileversions.retained=3 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n"})}),"\n",(0,a.jsx)(n.p,{children:"Clean commits older than 24 hours"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_BY_HOURS \\\n  --hoodie-conf hoodie.cleaner.hours.retained=24 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note: The parallelism takes the min value of number of partitions to clean and ",(0,a.jsx)(n.code,{children:"hoodie.cleaner.parallelism"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"cli",children:"CLI"}),"\n",(0,a.jsxs)(n.p,{children:["You can also use ",(0,a.jsx)(n.a,{href:"/docs/cli",children:"Hudi CLI"})," to run Hoodie Cleaner."]}),"\n",(0,a.jsx)(n.p,{children:"CLI provides the below commands for cleaner service:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"cleans show"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"clean showpartitions"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"cleans run"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example of cleaner keeping the latest 10 commits"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cleans run --sparkMaster local --hoodieConfigs hoodie.cleaner.policy=KEEP_LATEST_COMMITS hoodie.cleaner.commits.retained=3 hoodie.cleaner.parallelism=200\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can find more details and the relevant code for these commands in ",(0,a.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/hudi-cli/src/main/java/org/apache/hudi/cli/commands/CleansCommand.java",children:(0,a.jsx)(n.code,{children:"org.apache.hudi.cli.commands.CleansCommand"})})," class."]}),"\n",(0,a.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsx)("h3",{children:"Videos"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://youtu.be/mUvRhJDoO3w",children:"Cleaner Service: Save up to 40% on data lake storage costs | Hudi Labs"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=CEzgFtmVjx4",children:"Efficient Data Lake Management with Apache Hudi Cleaner: Benefits of Scheduling Data Cleaning #1"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=RbBF9Ys2GqM",children:"Efficient Data Lake Management with Apache Hudi Cleaner: Benefits of Scheduling Data Cleaning #2"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var o=i(96540);const a={},s=o.createContext(a);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);