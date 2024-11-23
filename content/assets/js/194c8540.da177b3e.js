"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[55955],{67899:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>h,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var i=n(79556),t=n(74848),r=n(28453),s=n(82915);const o={title:"Apache Hudi 2023: A Year In Review",excerpt:"Reflect on and celebrate the myriad of exciting developments and accomplishments that have defined the year 2023 for the Hudi community.",author:"Shiyan Xu",category:"blog",image:"/assets/images/blog/2023-12-28-a-year-in-review-2023/00.cover.png",tags:["apache hudi","community"]},h=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Development Highlights",id:"development-highlights",level:2},{value:"Indexing has elevated to a whole new level",id:"indexing-has-elevated-to-a-whole-new-level",level:3},{value:"Write throughput achieves remarkable advancement",id:"write-throughput-achieves-remarkable-advancement",level:3},{value:"Programming APIs have a brand-new look",id:"programming-apis-have-a-brand-new-look",level:3},{value:"Usability receives significant attention",id:"usability-receives-significant-attention",level:3},{value:"Platform capabilities are substantially enhanced",id:"platform-capabilities-are-substantially-enhanced",level:3},{value:"Ecosystem integrations undergo notable expansions",id:"ecosystem-integrations-undergo-notable-expansions",level:3},{value:"Interoperability is the key",id:"interoperability-is-the-key",level:3},{value:"Stay tuned for 2024",id:"stay-tuned-for-2024",level:3},{value:"Content Spotlight",id:"content-spotlight",level:2},{value:"Engage with the Community",id:"engage-with-the-community",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:"/assets/images/blog/2023-12-28-a-year-in-review-2023/00.cover.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,t.jsx)(a.p,{children:"In the warm glow of the holiday season, I am delighted to convey a message of deep appreciation on behalf of the\nHudi Project Management Committee (PMC) to all the contributors and users in the community who made 2023 an\nextraordinary year for Hudi."}),"\n",(0,t.jsxs)(a.p,{children:["In 2023, the Hudi community continued strong engagement and activities, evident in the\n",(0,t.jsx)(a.a,{href:"https://ossinsight.io/analyze/apache/hudi#pull-requests",children:"1,832 pull requests created"}),",\nwith a significant 1,363 of these being merged. We proudly welcomed 2 new PMC members and 3 new Committers.\nOur community ",(0,t.jsx)(a.a,{href:"https://apache-hudi.slack.com/join/shared_invite/zt-20r833rxh-627NWYDUyR8jRtMa2mZ~gg#/",children:"Slack channel"}),"\nwitnessed a remarkable 44% increase in users, with numbers exceeding 3,800.\nOur presence on social media platforms has grown impressively, with our ",(0,t.jsx)(a.a,{href:"https://x.com/apachehudi",children:"X (Twitter) account"}),"\ngarnering 2,274 followers, and our newly established ",(0,t.jsx)(a.a,{href:"https://www.linkedin.com/company/apache-hudi/",children:"LinkedIn page"}),"\nrapidly gaining 2,245 followers in just three months. Let\u2019s take a moment to reflect on and celebrate the myriad of\nexciting developments and accomplishments that have defined the year 2023 for the Hudi community."]}),"\n",(0,t.jsx)("img",{src:"/assets/images/blog/2023-12-28-a-year-in-review-2023/01.PR_histogram.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,t.jsx)(a.h2,{id:"development-highlights",children:"Development Highlights"}),"\n",(0,t.jsxs)(a.p,{children:["The year 2023 has been exceptionally productive for Hudi, marked by significant advancements and innovations.\nThere have been three major releases: ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.13.0",children:"0.13.0"}),",\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.14.0",children:"0.14.0"}),", and the trailblazing\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-1.0.0-beta1",children:"1.0.0-beta1"})," that have collectively reshaped the\ndatabase experience for Hudi data lakehouses. Here are some brief summaries highlighting key features introduced:"]}),"\n",(0,t.jsx)(a.h3,{id:"indexing-has-elevated-to-a-whole-new-level",children:"Indexing has elevated to a whole new level"}),"\n",(0,t.jsxs)(a.p,{children:["Hudi's new ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.14.0#record-level-index",children:"Record Level Index"}),"\nis a game-changing feature that boosts write performance for large tables. It achieves this by efficiently\nstoring per-record locations, enabling rapid retrieval during index look-ups. Benchmarks indicate a 72%\nimprovement in write latency compared to the Global Simple Index, alongside notable reductions in query latency\nfor equality-matching queries. The new ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.14.0#consistent-hashing-index-support",children:"Consistent Hash Index"}),"\ndynamically scales the buckets for hash-based indexing schemes. By addressing data skew issues inherent in bucket\nindex, it can achieve blazing fast look-up similar to the Record Level Index during the write process.\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-1.0.0-beta1#functional-index",children:"Functional Index"}),"\nenables the creation and deletion of indexes on specific columns, providing users with additional means to\nspeed up queries and adjust partitioning."]}),"\n",(0,t.jsx)(a.h3,{id:"write-throughput-achieves-remarkable-advancement",children:"Write throughput achieves remarkable advancement"}),"\n",(0,t.jsxs)(a.p,{children:["A common reason why developers choose Apache Hudi is for its ",(0,t.jsx)(a.a,{href:"https://medium.com/@kywe665/delta-hudi-iceberg-a-benchmark-compilation-a5630c69cffc",children:"industry leading write throughput and performance"}),".\nThe community has continued innovations on write performance including\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.13.0#early-conflict-detection-for-multi-writer",children:"Early-conflict detection for OCC"}),"\nwhich proactively validates concurrent writes before they are written to disk, avoiding significant resource wastage\nand enhancing throughput. Up-leveling this, the\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-1.0.0-beta1#concurrency-control",children:"Non-Blocking Concurrency Control"}),"\nintroduced in 1.0 further optimizes multi-writer throughput by allowing conflicts to be resolved later in query\nor via compaction. Responding to popular community requests,\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.13.0#support-for-partial-payload-update",children:"partial update capability"}),"\nwas implemented to allow updates to be applied only to changed fields, particularly benefiting the dimension\ntables that are usually super wide."]}),"\n",(0,t.jsx)(a.h3,{id:"programming-apis-have-a-brand-new-look",children:"Programming APIs have a brand-new look"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.13.0#optimizing-record-payload-handling",children:"HoodieRecordMerger"}),"\nis a new abstraction that unifies the merging semantics and makes use of the engine-native representation for\nrecords in the process. Benchmark shows a ballpark of 10-20% boost for upsert performance.\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-1.0.0-beta1#new-filegroup-reader",children:"File Group Reader"}),"\nis another API that standardizes File Group access, reducing MoR tables' read latencies by approximately 20%.\nEnabling position-based merging and page-skipping can further accelerate snapshot queries by 5.7 times."]}),"\n",(0,t.jsx)(a.h3,{id:"usability-receives-significant-attention",children:"Usability receives significant attention"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsxs)(a.a,{href:"https://hudi.apache.org/releases/release-0.14.0#table-valued-function-named-hudi_table_changes-designed-for-incremental-reading-through-spark-sql",children:["Table-valued function ",(0,t.jsx)(a.code,{children:"hudi_table_changes"})]}),"\nsimplifies performing incremental queries via SQLs.\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.14.0#support-for-hudi-tables-with-autogenerated-keys",children:"Auto-generated keys"}),"\nallows users to omit providing a record key field, especially useful for append-only tables. Among many other\nuser-friendly updates, two more notable ones are the addition of a\n",(0,t.jsxs)(a.a,{href:"https://hudi.apache.org/releases/release-0.13.0#hudi-cli-bundle",children:[(0,t.jsx)(a.code,{children:"hudi-cli-bundle"})," jar"]}),"\nand a revamped ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/docs/basic_configurations",children:"configuration page"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"platform-capabilities-are-substantially-enhanced",children:"Platform capabilities are substantially enhanced"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.13.0#change-data-capture",children:"Changed Data Capture"}),"\nwas supported by logging additional information alongside writers. The changed data, including ",(0,t.jsx)(a.code,{children:"before"}),"\nand ",(0,t.jsx)(a.code,{children:"after"})," images, can be served through incremental queries, offering rich analytical insights.\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.13.0#metaserver",children:"Metaserver"}),"\noffers centralized management services for operating numerous tables in lakehouse projects, signifying a major\nstep in Hudi's platform features.\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.14.0#hoodiedeltastreamer-renamed-to-hoodiestreamer",children:(0,t.jsx)(a.code,{children:"HoodieStreamer"})}),"\n(formerly ",(0,t.jsx)(a.code,{children:"HoodieDeltaStreamer"}),") remains a highly popular tool for data ingestion:\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/releases/release-0.13.0#new-source-support-in-deltastreamer",children:"new sources"}),"\nsuch as Protobuf Kafka source, GCS incremental source, and Pulsar source were added, further expanding\nthe integration capabilities."]}),"\n",(0,t.jsx)(a.h3,{id:"ecosystem-integrations-undergo-notable-expansions",children:"Ecosystem integrations undergo notable expansions"}),"\n",(0,t.jsxs)(a.p,{children:["On AWS,\n",(0,t.jsx)(a.a,{href:"https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-athena-apache-hudi/",children:"Athena supported Hudi 0.12.2 and Hudi's metadata table"}),",\nelevating query performance.\n",(0,t.jsx)(a.a,{href:"https://aws.amazon.com/blogs/big-data/introducing-apache-hudi-support-with-aws-glue-crawlers/",children:"AWS Glue crawlers added Hudi support"}),"\nwith Glue 4.0 working with Hudi 0.12.1, and AWS EMR extended the\n",(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-app-versions-6.x.html",children:"support matrix"}),"\nto cover Hudi 0.13 and 0.14. GCP improved\n",(0,t.jsx)(a.a,{href:"https://cloud.google.com/blog/products/data-analytics/bigquery-manifest-file-support-for-open-table-format-queries",children:"Hudi integration in BigQuery"}),"\nwith a new manifest file integration for improved performance.\n",(0,t.jsx)(a.a,{href:"https://docs.starburst.io/latest/connector/hudi.html",children:"Starburst also added a Hudi connector"}),".\nExecution engine support has also been extended to newer versions, including Spark 3.4 and 3.5,\nas well as Flink 1.16, 1.17, and 1.18."]}),"\n",(0,t.jsx)(a.h3,{id:"interoperability-is-the-key",children:"Interoperability is the key"}),"\n",(0,t.jsxs)(a.p,{children:["While Apache Hudi continues its strong growth momentum, some members of the community also decided it is time to\nstart building interoperability bridges across Lakehouse table formats with Delta Lake and Iceberg. The\n",(0,t.jsx)(a.a,{href:"https://www.onehouse.ai/blog/onetable-is-now-open-source",children:"recent announcement about OneTable becoming open source"}),"\nmarks a big leap forward for all developers looking to build a ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/blog/2024/07/11/what-is-a-data-lakehouse/",children:"data lakehouse"})," architecture. This development not\nonly emphasizes Hudi's commitment to openness but also enables a wider range of users to experience the\ntechnological advantages offered by Hudi."]}),"\n",(0,t.jsx)(a.h3,{id:"stay-tuned-for-2024",children:"Stay tuned for 2024"}),"\n",(0,t.jsxs)(a.p,{children:["The File Group Reader APIs are poised for widespread adoption, promising benefits for numerous query\nengines. We also anticipate broad adoption for Non-Blocking Concurrency Control. And there's more on\nthe horizon, including innovations like infinite timeline, secondary indexes, multi-table transactions,\nand the support for unstructured data. For the latest updates and detailed insights, I encourage you to\nvisit the ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/roadmap",children:"roadmap page"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"content-spotlight",children:"Content Spotlight"}),"\n",(0,t.jsx)("img",{src:"/assets/images/blog/2023-12-28-a-year-in-review-2023/02.contentspotlight.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,t.jsx)(a.p,{children:"Below is a curated list highlighting noteworthy pieces of content from the diverse Hudi community in 2023:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://aws.amazon.com/blogs/big-data/create-an-apache-hudi-based-near-real-time-transactional-data-lake-using-aws-dms-amazon-kinesis-aws-glue-streaming-etl-and-data-visualization-using-amazon-quicksight/",children:"Create Hudi-based near-real-time transactional data lake"})," - AWS"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://aws.amazon.com/blogs/big-data/automate-schema-evolution-at-scale-with-apache-hudi-in-aws-glue/",children:"Automate schema evolution at scale with Apache Hudi"})," - AWS"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://aws.amazon.com/blogs/big-data/how-zoom-implemented-streaming-log-ingestion-and-efficient-gdpr-deletes-using-apache-hudi-on-amazon-emr/",children:"Zoom implemented streaming log ingestion and efficient GDPR deletes using Hudi"})," - AWS"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://medium.com/walmartglobaltech/lakehouse-at-fortune-1-scale-480bcb10391b",children:"Lakehouse at Fortune 1 scale"})," - Walmart"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://www.uber.com/blog/ubers-lakehouse-architecture/",children:"Setting Uber\u2019s Transactional Data Lake in Motion"})," - Uber"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://youtu.be/dZbXC4mlNck",children:"Notion\u2019s journey: transition from Snowflake to Hudi"})," - Notion"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://opensourcedatasummit.com/robinhoods-data-lakehouse/",children:"Scaling and governing Robinhood's data lakehouse"})," - Robinhood"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://www.onehouse.ai/blog/apache-hudi-vs-delta-lake-vs-apache-iceberg-lakehouse-feature-comparison",children:"Feature comparison: Hudi vs Delta vs Iceberg"})," - Kyle Weller, Onehouse"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://opensourcedatasummit.com/apache-hudi-1-preview/",children:"Apache Hudi 1.0 preview: A database experience on the data lake"})," - Sagar Sumit & Bhavani Sudha Saktheeswaran, Hudi PMC"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://www.onehouse.ai/blog/hudi-metafields-demystified",children:"Hudi Metafields demystified"})," and ",(0,t.jsx)(a.a,{href:"https://www.onehouse.ai/blog/knowing-your-data-partitioning-vices-on-the-data-lakehouse",children:"Knowing your data partitioning vices"})," - Bhavani Sudha Saktheeswaran, Hudi PMC"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://hudi.apache.org/blog/2023/11/01/record-level-index/",children:"Record Level Index: blazing fast indexing for large-scale datasets"})," - Shiyan Xu & Sivabalan Narayanan, Hudi PMC"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://blog.datumagic.com/p/apache-hudi-from-zero-to-one-110",children:"Apache Hudi from zero to one: a 10-post blog series"})," - Shiyan Xu, Hudi PMC"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://youtu.be/YgmOASLum7g",children:"Hudi Workshop: Build a ride-share lakehouse platform on AWS"})," - Soumil Shah, Jaganath Achari, Nadine Farah"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Additionally, the official Hudi website is a treasure trove of valuable learning materials. Begin your\njourney on ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/docs/overview",children:"the documentation page"}),", and then explore a wealth of\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/talks",children:"talks"}),", ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/videos",children:"videos"}),",\nand ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/blog",children:"blogs"})," to deepen your understanding and knowledge of Hudi."]}),"\n",(0,t.jsx)(a.h2,{id:"engage-with-the-community",children:"Engage with the Community"}),"\n",(0,t.jsxs)(a.p,{children:["Throughout 2023, the Hudi community played an important role in the data industry altogether, gathering and\nfeaturing in many virtual syncs, live events, meet-ups, and conference presentations. We marked our presence\nat a variety of events, listed here in no particular order: Re",":Invent",", PrestoCon, Trino Fest, Current,\nthe Data & AI Summit, Flink Forward, the Open-source Data Summit, ApacheCon, AI.dev, QCon, OSA Con, DEWCon,\nand Data Council."]}),"\n",(0,t.jsx)("img",{src:"/assets/images/blog/2023-12-28-a-year-in-review-2023/03.events.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,t.jsxs)(a.p,{children:["As we reflect on an eventful 2023, the Hudi community continues to thrive and welcomes diverse forms\nof engagement. For those looking to connect, our ",(0,t.jsx)(s.A,{title:"Slack group"}),"\nis an excellent place for general inquiries, being watched out by Hudi experts and an LLM-backed\nquestion bot. You can also participate in our\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/community/office_hours",children:"weekly office hours"}),"\nand ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/community/syncs",children:"monthly community syncs"}),"\nto stay updated and involved. To keep abreast of the latest developments, follow Hudi's\n",(0,t.jsx)(a.a,{href:"https://www.linkedin.com/company/apache-hudi/",children:"LinkedIn page"}),",\n",(0,t.jsx)(a.a,{href:"https://twitter.com/apachehudi",children:"X (Twitter) account"}),",\nand ",(0,t.jsx)(a.a,{href:"https://www.youtube.com/@apachehudi",children:"YouTube channel"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["If you encounter any issues or have feature requests, we encourage you to file them through\n",(0,t.jsx)(a.a,{href:"https://github.com/apache/hudi/issues",children:"GitHub issues"})," or\n",(0,t.jsx)(a.a,{href:"https://issues.apache.org/jira/projects/HUDI/summary",children:"JIRA tickets"}),".\nFor more in-depth discussions and contributions to the ongoing development of Hudi,\nsubscribing (by sending an empty email) to\n",(0,t.jsx)(a.a,{href:"mailto:dev-subscribe@hudi.apache.org",children:"our dev mailing list"})," is a great option."]}),"\n",(0,t.jsxs)(a.p,{children:["And for those inspired to contribute directly to the project,\n",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/contribute/how-to-contribute",children:"our contribution guide"})," is your\nstarting point. Your involvement, whether it's by contributing code, sharing ideas, or simply giving\n",(0,t.jsx)(a.a,{href:"https://github.com/apache/hudi/",children:"our GitHub repository"})," a star, is greatly valued. Together,\nlet's continue to shape Hudi's future and drive innovation in the open-source community.\nHere's to an even more vibrant and successful 2024 ahead!"]})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},82915:(e,a,n)=>{n.d(a,{A:()=>r});var i=n(44586),t=n(74848);const r=e=>{let{title:a,isItalic:n}=e;const{siteConfig:r}=(0,i.A)(),{slackUrl:s}=r.customFields;return(0,t.jsx)("a",{href:s,style:{fontStyle:n?"italic":"normal"},target:"_blank",rel:"noopener noreferrer",children:a})}},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>o});var i=n(96540);const t={},r=i.createContext(t);function s(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:a},e.children)}},79556:e=>{e.exports=JSON.parse('{"permalink":"/blog/2023/12/28/apache-hudi-2023-a-year-in-review","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-12-28-apache-hudi-2023-a-year-in-review.mdx","source":"@site/blog/2023-12-28-apache-hudi-2023-a-year-in-review.mdx","title":"Apache Hudi 2023: A Year In Review","description":"In the warm glow of the holiday season, I am delighted to convey a message of deep appreciation on behalf of the","date":"2023-12-28T00:00:00.000Z","tags":[{"inline":true,"label":"apache hudi","permalink":"/blog/tags/apache-hudi"},{"inline":true,"label":"community","permalink":"/blog/tags/community"}],"readingTime":7.095,"hasTruncateMarker":false,"authors":[{"name":"Shiyan Xu","key":null,"page":null}],"frontMatter":{"title":"Apache Hudi 2023: A Year In Review","excerpt":"Reflect on and celebrate the myriad of exciting developments and accomplishments that have defined the year 2023 for the Hudi community.","author":"Shiyan Xu","category":"blog","image":"/assets/images/blog/2023-12-28-a-year-in-review-2023/00.cover.png","tags":["apache hudi","community"]},"unlisted":false,"prevItem":{"title":"From Data lake to Microservices: Unleashing the Power of Apache Hudi\'s Record Level Index with FastAPI and Spark Connect","permalink":"/blog/2024/01/01/From-Data-lake-to-Microservices-Unleashing-the-Power-of-Apache-Hudi-Record-Level-Index-with-FastAPI-and-Spark-Connect"},"nextItem":{"title":"What is Apache Hudi","permalink":"/blog/2023/12/13/what-is-apache-hudi"}}')}}]);