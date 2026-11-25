/**
 * 网站数据文件
 * 此文件包含所有网站卡片的数据
 * 可以根据需要添加更多网站
 */

const sitesData = {
    video_downloads: [
        {
            title: '下载狗',
            description: '粘贴视频链接即可在线解析。官网列出的平台包括抖音、小红书、哔哩哔哩和 YouTube。',
            titleEn: 'Download Dogs',
            descriptionEn: 'Paste a video link to parse it online. The site lists Douyin, Xiaohongshu, Bilibili, and YouTube among its supported platforms.',
            tags: ['在线工具', '抖音', '小红书', '哔哩哔哩', 'YouTube'],
            tagsEn: ['Online tool', 'Douyin', 'Rednote', 'Bilibili', 'YouTube'],
            url: 'https://www.xiazaitool.com/'
        },
        {
            title: '微信视频号下载器',
            description: '视频号下载工具，项目页提供使用文档和各系统安装包。',
            tags: ['微信', '视频号', '桌面工具'],
            titleEn: 'WeChat Channels Downloader',
            descriptionEn: 'Download videos from WeChat Channels. The project site links to documentation and installers.',
            tagsEn: ['WeChat', 'Channels', 'Desktop'],
            url: 'https://ltaoo.github.io/wx_channels_download/'
        },
        {
            title: '抖音 / TikTok 下载器',
            description: 'TikTokDownloader 支持下载抖音和 TikTok 视频及图文作品。',
            tags: ['抖音', 'TikTok', '短视频'],
            titleEn: 'Douyin / TikTok Downloader',
            descriptionEn: 'TikTokDownloader saves video and photo posts from Douyin and TikTok.',
            tagsEn: ['Douyin', 'TikTok', 'Short video'],
            url: 'https://github.com/JoeanAmier/TikTokDownloader'
        },
        {
            title: 'YouTube 下载器 · yt-dlp',
            description: '开源命令行工具，支持下载 YouTube 及其他受支持平台的视频、音频和字幕。',
            tags: ['YouTube', '命令行', '字幕'],
            titleEn: 'YouTube Downloader · yt-dlp',
            descriptionEn: 'Open-source command-line downloader for videos, audio, and subtitles from YouTube and other supported sites.',
            tagsEn: ['YouTube', 'Command line', 'Subtitles'],
            url: 'https://github.com/yt-dlp/yt-dlp'
        },
        {
            title: '哔哩哔哩下载器 · BBDown',
            description: '开源命令行下载工具，支持哔哩哔哩视频和分 P 下载。',
            tags: ['哔哩哔哩', 'Bilibili', '命令行'],
            titleEn: 'Bilibili Downloader · BBDown',
            descriptionEn: 'Open-source command-line downloader for Bilibili videos and multi-part uploads.',
            tagsEn: ['Bilibili', 'Command line'],
            url: 'https://github.com/nilaoda/BBDown'
        },
    ],

    github_repos: [
        {
            title: 'find-skills',
            description: '从技能目录按任务搜索可安装的 Skills，适合给 Agent 补充新能力。',
            descriptionEn: 'Find installable agent skills by task or capability.',
            tags: ['GitHub', 'Agent Skills', '通用工作流'],
            tagsEn: ['GitHub', 'Agent Skills', 'General Workflows'],
            url: 'https://github.com/vercel-labs/skills/tree/main/skills/find-skills',
            subcategory: 'github_skills/workflow'
        },
        {
            title: 'agent-browser',
            description: '让 Agent 打开网页、读取页面结构，并执行点击、输入和截图等操作。',
            descriptionEn: 'Open pages, inspect their accessibility structure, and interact with browser controls.',
            tags: ['GitHub', 'Agent Skills', '网页自动化'],
            tagsEn: ['GitHub', 'Agent Skills', 'Web Automation'],
            url: 'https://github.com/vercel-labs/agent-browser',
            subcategory: 'github_skills/automation'
        },
        {
            title: 'hyperframes',
            description: '把 HTML 动画和时间线渲染成视频，适合制作解说、片头和产品演示。',
            descriptionEn: 'Render HTML animations and timelines into videos for explainers, intros, and demos.',
            tags: ['GitHub', 'Agent Skills', '设计与视频'],
            tagsEn: ['GitHub', 'Agent Skills', 'Design & Video'],
            url: 'https://github.com/heygen-com/hyperframes/tree/main/skills/hyperframes',
            subcategory: 'github_skills/design'
        },
        {
            title: 'grill-me',
            description: '通过连续追问澄清方案中的假设、取舍和待定事项，适合实施前评审。',
            descriptionEn: 'Pressure-test a plan through follow-up questions about assumptions, tradeoffs, and open decisions.',
            tags: ['GitHub', 'Agent Skills', '通用工作流'],
            tagsEn: ['GitHub', 'Agent Skills', 'General Workflows'],
            url: 'https://github.com/mattpocock/skills',
            subcategory: 'github_skills/workflow'
        },
        {
            title: 'design-mobile-apps',
            description: '用 Sleek 设计移动端页面，再落实为 React Native 或 HTML 界面。',
            descriptionEn: 'Design mobile screens in Sleek and implement them in React Native or HTML.',
            tags: ['GitHub', 'Agent Skills', '设计与视频'],
            tagsEn: ['GitHub', 'Agent Skills', 'Design & Video'],
            url: 'https://github.com/designed-by-ai/skills/tree/main/skills/design-mobile-apps',
            subcategory: 'github_skills/design'
        },
        {
            title: 'frontend-design',
            description: '指导前端界面的视觉方向、排版和交互细节，适合新页面和现有界面改版。',
            descriptionEn: 'Guide visual direction, typography, and interaction details for new or existing frontends.',
            tags: ['GitHub', 'Agent Skills', '设计与视频'],
            tagsEn: ['GitHub', 'Agent Skills', 'Design & Video'],
            url: 'https://github.com/anthropics/skills/tree/main/skills/frontend-design',
            subcategory: 'github_skills/design'
        },
        {
            title: 'vercel-react-best-practices',
            description: 'Vercel 的 React 和 Next.js 性能指南，涵盖数据获取、打包体积和重复渲染。',
            descriptionEn: 'Vercel guidance for React and Next.js performance, covering data fetching, bundles, and re-renders.',
            tags: ['GitHub', 'Agent Skills', '开发与测试'],
            tagsEn: ['GitHub', 'Agent Skills', 'Development & Testing'],
            url: 'https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices',
            subcategory: 'github_skills/development'
        },
        {
            title: 'paper-context-resolver',
            description: '当复现说明缺失时，从原论文核对数据集、预处理和评估设置。',
            descriptionEn: 'Verify missing reproduction details such as dataset splits and evaluation settings against the original paper.',
            tags: ['GitHub', 'Agent Skills', '研究与知识'],
            tagsEn: ['GitHub', 'Agent Skills', 'Research & Knowledge'],
            url: 'https://github.com/lllllllama/RigorPilot-Skills/tree/main/skills/paper-context-resolver',
            subcategory: 'github_skills/research'
        },
        {
            title: 'lark-doc',
            description: '通过飞书 CLI 读取、创建和编辑云文档与知识库页面。',
            descriptionEn: 'Read, create, and update Feishu cloud documents and wiki pages with the Lark CLI.',
            tags: ['GitHub', 'Agent Skills', '办公与文档'],
            tagsEn: ['GitHub', 'Agent Skills', 'Office & Documents'],
            url: 'https://github.com/larksuite/cli/tree/main/skills/lark-doc',
            subcategory: 'github_skills/office'
        },
        {
            title: 'supabase-postgres-best-practices',
            description: '用 Supabase 的 Postgres 指南检查索引、查询、表结构和访问策略。',
            descriptionEn: 'Review PostgreSQL indexes, queries, schemas, and access policies with Supabase guidance.',
            tags: ['GitHub', 'Agent Skills', '开发与测试'],
            tagsEn: ['GitHub', 'Agent Skills', 'Development & Testing'],
            url: 'https://github.com/supabase/agent-skills/tree/main/skills/supabase-postgres-best-practices',
            subcategory: 'github_skills/development'
        },
        {
            title: 'systematic-debugging',
            description: '按复现、定位根因、验证假设的顺序排查故障与测试失败。',
            descriptionEn: 'Reproduce failures, trace their root cause, and test hypotheses before making a fix.',
            tags: ['GitHub', 'Agent Skills', '开发与测试'],
            tagsEn: ['GitHub', 'Agent Skills', 'Development & Testing'],
            url: 'https://github.com/obra/superpowers/tree/main/skills/systematic-debugging',
            subcategory: 'github_skills/development'
        },
        {
            title: 'copywriting',
            description: '根据受众和转化目标起草或修改首页、落地页和定价页文案。',
            descriptionEn: 'Draft or revise homepage, landing-page, and pricing copy for a specific audience and conversion goal.',
            tags: ['GitHub', 'Agent Skills', '写作与营销'],
            tagsEn: ['GitHub', 'Agent Skills', 'Writing & Marketing'],
            url: 'https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting',
            subcategory: 'github_skills/writing'
        },
        {
            title: 'seo-audit',
            description: '检查网站索引、页面结构和技术 SEO，定位可能影响搜索可见性的问题。',
            descriptionEn: 'Check indexing, page structure, and technical SEO for issues affecting search visibility.',
            tags: ['GitHub', 'Agent Skills', '写作与营销'],
            tagsEn: ['GitHub', 'Agent Skills', 'Writing & Marketing'],
            url: 'https://github.com/coreyhaines31/marketingskills/tree/main/skills/seo-audit',
            subcategory: 'github_skills/writing'
        },
        {
            title: 'pdf',
            description: '提取 PDF 文字与表格，处理扫描件，也支持合并、拆分和创建 PDF。',
            descriptionEn: 'Extract text and tables, process scans, and create, merge, or split PDF files.',
            tags: ['GitHub', 'Agent Skills', '办公与文档'],
            tagsEn: ['GitHub', 'Agent Skills', 'Office & Documents'],
            url: 'https://github.com/anthropics/skills/tree/main/skills/pdf',
            subcategory: 'github_skills/office'
        },
        {
            title: 'webapp-testing',
            description: '用 Playwright 检查本地网页交互、捕获截图，并查看浏览器日志。',
            descriptionEn: 'Use Playwright to test local web interactions, capture screenshots, and inspect browser logs.',
            tags: ['GitHub', 'Agent Skills', '网页自动化'],
            tagsEn: ['GitHub', 'Agent Skills', 'Web Automation'],
            url: 'https://github.com/anthropics/skills/tree/main/skills/webapp-testing',
            subcategory: 'github_skills/automation'
        },
        {
            title: 'xlsx',
            description: '创建或修改 Excel 表格，处理公式、数据清理和格式。',
            descriptionEn: 'Create or edit Excel workbooks with formulas, data cleanup, and formatting.',
            tags: ['GitHub', 'Agent Skills', '办公与文档'],
            tagsEn: ['GitHub', 'Agent Skills', 'Office & Documents'],
            url: 'https://github.com/anthropics/skills/tree/main/skills/xlsx',
            subcategory: 'github_skills/office'
        },
        {
            title: 'content-strategy',
            description: '按受众需求和搜索意图规划选题集群、内容优先级与发布日历。',
            descriptionEn: 'Plan topic clusters, content priorities, and an editorial calendar around audience needs and search intent.',
            tags: ['GitHub', 'Agent Skills', '写作与营销'],
            tagsEn: ['GitHub', 'Agent Skills', 'Writing & Marketing'],
            url: 'https://github.com/coreyhaines31/marketingskills/tree/main/skills/content-strategy',
            subcategory: 'github_skills/writing'
        },
        {
            title: 'last30days',
            description: '从近期网页和社区讨论中汇总一个主题的进展，适合追踪热点。',
            descriptionEn: 'Review recent web sources and community discussions to track a topic over the past month.',
            tags: ['GitHub', 'Agent Skills', '研究与知识'],
            tagsEn: ['GitHub', 'Agent Skills', 'Research & Knowledge'],
            url: 'https://github.com/mvanhorn/last30days-skill',
            subcategory: 'github_skills/research'
        },
        {
            title: 'stop-slop',
            description: '找出空洞转折、模板句和过度总结，帮助作者删掉生硬表达，保留自己的语气。',
            descriptionEn: 'Spot formulaic transitions, stock phrases, and redundant summaries while keeping the author\'s voice.',
            tags: ['GitHub', 'Agent Skills', '编辑润色'],
            tagsEn: ['GitHub', 'Agent Skills', 'Editing'],
            url: 'https://github.com/hardikpandya/stop-slop',
            subcategory: 'github_skills/writing',
            isRecommended: true
        },
        {
            title: 'dbskill',
            description: '面向中文创作者的技能工具箱，可评估选题、拆解热门内容，并优化标题和开头。',
            descriptionEn: 'A Chinese-language toolkit for evaluating topics, analyzing popular content, and improving titles and hooks.',
            tags: ['GitHub', 'Agent Skills', '选题与开头'],
            tagsEn: ['GitHub', 'Agent Skills', 'Topics & Hooks'],
            url: 'https://github.com/dontbesilent2025/dbskill',
            subcategory: 'github_skills/writing',
            isRecommended: true
        },
        {
            title: 'content-research-writer',
            description: '把资料搜集、引用、提纲和逐段反馈串起来，适合写长文、案例分析和行业解读。',
            descriptionEn: 'Combine research, citations, outlining, and section-by-section feedback for articles and case studies.',
            tags: ['GitHub', 'Agent Skills', '调研写作'],
            tagsEn: ['GitHub', 'Agent Skills', 'Research & Writing'],
            url: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/content-research-writer',
            subcategory: 'github_skills/research'
        },
        {
            title: 'NotebookLM Skill',
            description: '围绕 NotebookLM 中的课程、访谈或会议资料做问答和写作。仓库已归档。',
            descriptionEn: 'Use NotebookLM sources such as course notes, interviews, or transcripts to support writing. The repository is archived.',
            tags: ['GitHub', 'Agent Skills', '知识库写作'],
            tagsEn: ['GitHub', 'Agent Skills', 'Source-grounded Writing'],
            url: 'https://github.com/PleasePrompto/notebooklm-skill',
            subcategory: 'github_skills/research'
        },
        {
            title: 'khazix-skills',
            description: '辅助整理研究线索和 AI 热点素材，适合准备行业分析与长文。',
            descriptionEn: 'Organize research leads and AI news material for industry analysis and long-form writing.',
            tags: ['GitHub', 'Agent Skills', '深度研究'],
            tagsEn: ['GitHub', 'Agent Skills', 'Deep Research'],
            url: 'https://github.com/KKKKhazix/khazix-skills',
            subcategory: 'github_skills/research'
        },
        {
            title: 'Punk-Skill',
            description: '为小红书、公众号和 X 生成封面，也支持头像创作。现为 Punk-Posters，商用需授权。',
            descriptionEn: 'Create covers for Rednote, WeChat, and X, plus avatars. The repo is now Punk-Posters. Commercial use requires a license.',
            tags: ['GitHub', 'Agent Skills', '封面与头像'],
            tagsEn: ['GitHub', 'Agent Skills', 'Covers & Avatars'],
            url: 'https://github.com/adrianpunk/Punk-Posters',
            subcategory: 'github_skills/design',
            isRecommended: true
        },
        {
            title: 'guizang-social-card-skill',
            description: '把长文拆成小红书图文卡片，也可制作公众号成对封面和 Live Photo 动态卡。',
            descriptionEn: 'Turn articles into Rednote carousels, paired WeChat covers, or animated Live Photo cards.',
            tags: ['GitHub', 'Agent Skills', '社交卡片'],
            tagsEn: ['GitHub', 'Agent Skills', 'Social Cards'],
            url: 'https://github.com/op7418/guizang-social-card-skill',
            subcategory: 'github_skills/design'
        },
        {
            title: 'baoyu-skills',
            description: '把框架、流程和对比内容转换成信息图、结构图或文章配图。',
            descriptionEn: 'Turn frameworks, processes, and comparisons into infographics, diagrams, or article illustrations.',
            tags: ['GitHub', 'Agent Skills', '信息图与结构图'],
            tagsEn: ['GitHub', 'Agent Skills', 'Infographics & Diagrams'],
            url: 'https://github.com/JimLiu/baoyu-skills',
            subcategory: 'github_skills/design'
        },
        {
            title: 'ian-xiaohei-illustrations',
            description: '把中文文章里的判断、流程或隐喻变成「小黑」风格的横版手绘解释图。',
            descriptionEn: 'Turn ideas, processes, and metaphors in Chinese articles into landscape illustrations in the Xiaohei hand-drawn style.',
            tags: ['GitHub', 'Agent Skills', '手绘正文配图'],
            tagsEn: ['GitHub', 'Agent Skills', 'Hand-drawn Illustrations'],
            url: 'https://github.com/helloianneo/ian-xiaohei-illustrations',
            subcategory: 'github_skills/design'
        },
        {
            title: 'html-anything',
            description: '将 Markdown 或笔记做成可发布的 HTML 文章、卡片或海报。原版保留在 legacy 分支。',
            descriptionEn: 'Turn Markdown or notes into publishable HTML articles, cards, and posters. The original app is kept on the legacy branch.',
            tags: ['GitHub', 'Agent Skills', 'HTML 排版发布'],
            tagsEn: ['GitHub', 'Agent Skills', 'HTML Publishing'],
            url: 'https://github.com/nexu-io/openmotion/tree/legacy',
            subcategory: 'github_skills/design'
        },
        {
            title: 'anthropics/skills',
            description: 'Anthropic 官方 Skills 示例，涵盖文档处理、设计与日常工作流。',
            descriptionEn: 'Official Anthropic skill examples for document processing, design, and everyday workflows.',
            tags: ['GitHub', 'Agent Skills'],
            url: 'https://github.com/anthropics/skills',
            subcategory: 'github_skills/workflow'
        },
        {
            title: 'openai/plugins',
            description: 'OpenAI 官方 Codex 插件示例，可参考如何组织 Skills 及其配套资源。',
            descriptionEn: 'Official Codex plugin examples showing how to package skills and supporting resources.',
            tags: ['GitHub', 'Agent Skills'],
            url: 'https://github.com/openai/plugins',
            subcategory: 'github_skills/workflow'
        },
        {
            title: 'openai/openai-cookbook',
            description: 'OpenAI API 的示例代码与实战指南，适合查找可复用的实现。',
            descriptionEn: 'OpenAI API code samples and practical guides with reusable implementations.',
            tags: ['GitHub', '案例库'],
            tagsEn: ['GitHub', 'Examples'],
            url: 'https://github.com/openai/openai-cookbook',
            subcategory: 'github_examples'
        },
        {
            title: 'microsoft/generative-ai-for-beginners',
            description: '微软的生成式 AI 入门课程，配有动手练习和应用示例。',
            descriptionEn: 'Microsoft\'s introductory generative AI course with hands-on exercises and sample applications.',
            tags: ['GitHub', '案例库'],
            tagsEn: ['GitHub', 'Examples'],
            url: 'https://github.com/microsoft/generative-ai-for-beginners',
            subcategory: 'github_examples'
        }
    ],

    // 电商平台
    ecommerce: [
        {
            title: 'Amazon Brand Analytics',
            description: '亚马逊品牌分析工具，提供关键词搜索、购物行为、商品比较等数据',
            descriptionEn: 'Amazon Brand Analytics tool, providing keyword search, shopping behavior, product comparison data',
            tags: ['亚马逊', '数据分析', '品牌'],
            url: 'https://sellercentral.amazon.com/analytics/dashboard/',
            subcategory: 'amazon'
        },
        {
            title: '美国前台',
            description: '亚马逊美国站购物网站，面向消费者的电子商务平台',
            descriptionEn: 'Amazon US shopping website, a consumer-facing e-commerce platform',
            tags: ['亚马逊', '美国站', '消费者平台'],
            url: 'https://www.amazon.com/',
            subcategory: 'amazon'
        },
        {
            title: '美国站后台',
            description: '亚马逊美国站卖家平台，管理产品、订单和销售数据',
            titleEn: 'Amazon US Seller Central',
            descriptionEn: 'Amazon US seller platform for managing products, orders and sales data',
            tags: ['亚马逊', '美国站', '卖家后台'],
            url: 'https://sellercentral.amazon.com/',
            subcategory: 'amazon'
        },
        {
            title: '亚马逊卖家论坛',
            description: '亚马逊 Seller Forums 官方社区，适合查看平台政策讨论、运营问题反馈和卖家经验交流',
            titleEn: 'Amazon Seller Forums',
            descriptionEn: 'Official Amazon Seller Forums for policy discussions, operational troubleshooting and seller knowledge sharing',
            tags: ['亚马逊', '卖家社区', '运营交流'],
            url: 'https://sellercentral.amazon.com/seller-forums',
            subcategory: 'amazon'
        },
        {
            title: '英国站前台',
            description: '亚马逊英国站购物网站，面向英国消费者的电子商务平台',
            titleEn: 'Amazon UK Store',
            descriptionEn: 'Amazon UK shopping website, an e-commerce platform for UK consumers',
            tags: ['亚马逊', '英国站', '消费者平台'],
            url: 'https://www.amazon.co.uk/',
            subcategory: 'amazon'
        },
        {
            title: '英国站后台',
            description: '亚马逊英国站卖家平台，管理英国站产品、订单和销售数据',
            titleEn: 'Amazon UK Seller Central',
            descriptionEn: 'Amazon UK seller platform for managing products, orders and sales data',
            tags: ['亚马逊', '英国站', '卖家后台'],
            url: 'https://sellercentral.amazon.co.uk/',
            subcategory: 'amazon'
        },
        {
            title: '日本站后台',
            description: '亚马逊日本站卖家平台，管理日本站产品、订单和销售数据',
            titleEn: 'Amazon Japan Seller Central',
            descriptionEn: 'Amazon Japan seller platform for managing products, orders and sales data',
            tags: ['亚马逊', '日本站', '卖家后台'],
            url: 'https://sellercentral-japan.amazon.com/',
            subcategory: 'amazon'
        },
        {
            title: '德国站后台',
            description: '亚马逊德国站卖家平台，管理德国站产品、订单和销售数据',
            titleEn: 'Amazon Germany Seller Central',
            descriptionEn: 'Amazon Germany seller platform for managing products, orders and sales data',
            tags: ['亚马逊', '德国站', '卖家后台'],
            url: 'https://sellercentral.amazon.de/',
            subcategory: 'amazon'
        },
        {
            title: '法国站前台',
            description: '亚马逊法国站购物网站，面向法国消费者的电子商务平台',
            titleEn: 'Amazon France Store',
            descriptionEn: 'Amazon France shopping website, an e-commerce platform for French consumers',
            tags: ['亚马逊', '法国站', '消费者平台'],
            url: 'https://www.amazon.fr/',
            subcategory: 'amazon'
        },
        {
            title: '法国站后台',
            description: '亚马逊法国站卖家平台，管理法国站产品、订单和销售数据',
            titleEn: 'Amazon France Seller Central',
            descriptionEn: 'Amazon France seller platform for managing products, orders and sales data',
            tags: ['亚马逊', '法国站', '卖家后台'],
            url: 'https://sellercentral.amazon.fr/',
            subcategory: 'amazon'
        },
        {
            title: '意大利站前台',
            description: '亚马逊意大利站购物网站，面向意大利消费者的电子商务平台',
            titleEn: 'Amazon Italy Store',
            descriptionEn: 'Amazon Italy shopping website, an e-commerce platform for Italian consumers',
            tags: ['亚马逊', '意大利站', '消费者平台'],
            url: 'https://www.amazon.it/',
            subcategory: 'amazon'
        },
        {
            title: '意大利站后台',
            description: '亚马逊意大利站卖家平台，管理意大利站产品、订单和销售数据',
            titleEn: 'Amazon Italy Seller Central',
            descriptionEn: 'Amazon Italy seller platform for managing products, orders and sales data',
            tags: ['亚马逊', '意大利站', '卖家后台'],
            tagsEn: ['Amazon', 'Italy Store', 'Seller Backend'],
            url: 'https://sellercentral.amazon.it/',
            subcategory: 'amazon'
        },
        {
            title: '加拿大站后台',
            description: '亚马逊加拿大站卖家平台，管理加拿大站产品、订单和销售数据',
            titleEn: 'Amazon Canada Seller Central',
            descriptionEn: 'Amazon Canada seller platform for managing products, orders and sales data',
            tags: ['亚马逊', '加拿大站', '卖家后台'],
            url: 'https://sellercentral.amazon.ca/',
            subcategory: 'amazon'
        },
        {
            title: '澳洲前台',
            description: '亚马逊澳大利亚站购物网站，面向澳洲消费者的电子商务平台',
            titleEn: 'Amazon Australia Store',
            descriptionEn: 'Amazon Australia shopping website, an e-commerce platform for Australian consumers',
            tags: ['亚马逊', '澳洲站', '消费者平台'],
            url: 'https://www.amazon.com.au/',
            subcategory: 'amazon'
        },
        {
            title: '澳洲站后台',
            description: '亚马逊澳大利亚站卖家平台，管理澳洲站产品、订单和销售数据',
            titleEn: 'Amazon Australia Seller Central',
            descriptionEn: 'Amazon Australia seller platform for managing products, orders and sales data',
            tags: ['亚马逊', '澳洲站', '卖家后台'],
            url: 'https://sellercentral.amazon.com.au/',
            subcategory: 'amazon'
        },
        {
            title: '西班牙站后台',
            description: '亚马逊西班牙站卖家平台，管理西班牙站产品、订单和销售数据',
            titleEn: 'Amazon Spain Seller Central',
            descriptionEn: 'Amazon Spain seller platform for managing products, orders and sales data',
            tags: ['亚马逊', '西班牙站', '卖家后台'],
            url: 'https://sellercentral.amazon.es/',
            subcategory: 'amazon'
        },
        {
            title: '墨西哥站后台',
            description: '亚马逊墨西哥站卖家平台，管理墨西哥站产品、订单和销售数据',
            titleEn: 'Amazon Mexico Seller Central',
            descriptionEn: 'Amazon Mexico seller platform for managing products, orders and sales data',
            tags: ['亚马逊', '墨西哥站', '卖家后台'],
            url: 'https://sellercentral.amazon.com.mx/',
            subcategory: 'amazon'
        },
        {
            title: '美亚新品榜',
            description: '亚马逊美国站新品发布排行榜，查看不同品类的新品趋势',
            titleEn: 'Amazon US New Releases',
            descriptionEn: 'Amazon US new product release rankings, view new product trends across different categories',
            tags: ['亚马逊', '美国站', '排行榜', '新品'],
            url: 'https://www.amazon.com/gp/new-releases',
            subcategory: 'amazon'
        },
        {
            title: '美亚销售榜',
            description: '亚马逊美国站销售排行榜，查看各品类最畅销的商品',
            titleEn: 'Amazon US Best Sellers',
            descriptionEn: 'Amazon US sales rankings, view best-selling products across all categories',
            tags: ['亚马逊', '美国站', '排行榜', '销量'],
            url: 'https://www.amazon.com/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '美亚飙升榜',
            description: '亚马逊美国站销量飙升榜，展示销量增长最快的商品',
            titleEn: 'Amazon US Movers & Shakers',
            descriptionEn: 'Amazon US trending products list, showing products with the fastest-growing sales',
            tags: ['亚马逊', '美国站', '排行榜', '飙升'],
            url: 'https://www.amazon.com/gp/movers-and-shakers',
            subcategory: 'amazon'
        },
        {
            title: '英国排行榜',
            description: '亚马逊英国站销售排行榜，查看英国市场最畅销商品',
            titleEn: 'Amazon UK Best Sellers',
            descriptionEn: 'Amazon UK sales rankings, view best-selling products in the UK market',
            tags: ['亚马逊', '英国站', '排行榜', '销量'],
            url: 'https://www.amazon.co.uk/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '法国排行榜',
            description: '亚马逊法国站销售排行榜，查看法国市场最畅销商品',
            titleEn: 'Amazon France Best Sellers',
            descriptionEn: 'Amazon France sales rankings, view best-selling products in the French market',
            tags: ['亚马逊', '法国站', '排行榜', '销量'],
            url: 'https://www.amazon.fr/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '日本排行榜',
            description: '亚马逊日本站销售排行榜，查看日本市场最畅销商品',
            titleEn: 'Amazon Japan Best Sellers',
            descriptionEn: 'Amazon Japan sales rankings, view best-selling products in the Japanese market',
            tags: ['亚马逊', '日本站', '排行榜', '销量'],
            url: 'https://www.amazon.co.jp/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '德国排行榜',
            description: '亚马逊德国站销售排行榜，查看德国市场最畅销商品',
            titleEn: 'Amazon Germany Best Sellers',
            descriptionEn: 'Amazon Germany sales rankings, view best-selling products in the German market',
            tags: ['亚马逊', '德国站', '排行榜', '销量'],
            url: 'https://www.amazon.de/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '意大利排行榜',
            description: '亚马逊意大利站销售排行榜，查看意大利市场最畅销商品',
            titleEn: 'Amazon Italy Best Sellers',
            descriptionEn: 'Amazon Italy sales rankings, view best-selling products in the Italian market',
            tags: ['亚马逊', '意大利站', '排行榜', '销量'],
            url: 'https://www.amazon.it/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '澳洲排行榜',
            description: '亚马逊澳大利亚站销售排行榜，查看澳洲市场最畅销商品',
            titleEn: 'Amazon Australia Best Sellers',
            descriptionEn: 'Amazon Australia sales rankings, view best-selling products in the Australian market',
            tags: ['亚马逊', '澳洲站', '排行榜', '销量'],
            url: 'https://www.amazon.com.au/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '加拿大排行榜',
            description: '亚马逊加拿大站销售排行榜，查看加拿大市场最畅销商品',
            titleEn: 'Amazon Canada Best Sellers',
            descriptionEn: 'Amazon Canada sales rankings, view best-selling products in the Canadian market',
            tags: ['亚马逊', '加拿大站', '排行榜', '销量'],
            url: 'https://www.amazon.ca/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '速卖通卖家平台',
            description: '阿里巴巴旗下速卖通卖家中心，提供店铺管理、订单处理、营销推广等服务',
            tags: ['速卖通', '卖家平台', '阿里巴巴'],
            url: 'https://seller.aliexpress.com/',
            subcategory: 'aliexpress'
        },
        {
            title: '速卖通卖家登录后台',
            description: '速卖通卖家中心登录入口，访问商家管理系统和订单处理平台',
            tags: ['速卖通', '卖家平台', '登录入口', '阿里巴巴'],
            url: 'https://login.aliexpress.com/user/seller/login',
            subcategory: 'aliexpress'
        },
        {
            title: '新加坡站',
            description: 'Lazada新加坡站购物网站，面向新加坡消费者的电子商务平台',
            tags: ['Lazada', '新加坡站', '东南亚电商'],
            url: 'https://www.lazada.sg',
            subcategory: 'lazada'
        },
        {
            title: '马来西亚站',
            description: 'Lazada马来西亚站购物网站，面向马来西亚消费者的电子商务平台',
            tags: ['Lazada', '马来西亚站', '东南亚电商'],
            url: 'https://www.lazada.com.my',
            subcategory: 'lazada'
        },
        {
            title: '印尼站',
            description: 'Lazada印尼站购物网站，面向印尼消费者的电子商务平台',
            tags: ['Lazada', '印尼站', '东南亚电商'],
            url: 'https://www.lazada.co.id',
            subcategory: 'lazada'
        },
        {
            title: '泰国站',
            description: 'Lazada泰国站购物网站，面向泰国消费者的电子商务平台',
            tags: ['Lazada', '泰国站', '东南亚电商'],
            url: 'https://www.lazada.co.th',
            subcategory: 'lazada'
        },
        {
            title: '菲律宾站',
            description: 'Lazada菲律宾站购物网站，面向菲律宾消费者的电子商务平台',
            tags: ['Lazada', '菲律宾站', '东南亚电商'],
            url: 'https://www.lazada.com.ph',
            subcategory: 'lazada'
        },
        {
            title: '马来西亚站卖家中心',
            description: 'Lazada马来西亚站卖家平台，管理商品、订单和销售数据',
            tags: ['Lazada', '马来西亚站', '卖家平台', '东南亚电商'],
            url: 'https://sellercenter.lazada.com.my',
            subcategory: 'lazada'
        },
        {
            title: '新加坡站卖家中心',
            description: 'Lazada新加坡站卖家平台，管理商品、订单和销售数据',
            tags: ['Lazada', '新加坡站', '卖家平台', '东南亚电商'],
            url: 'https://sellercenter.lazada.sg',
            subcategory: 'lazada'
        },
        {
            title: '越南站卖家中心',
            description: 'Lazada越南站卖家平台，管理商品、订单和销售数据',
            tags: ['Lazada', '越南站', '卖家平台', '东南亚电商'],
            url: 'https://sellercenter.lazada.vn',
            subcategory: 'lazada'
        },
        {
            title: '印尼站卖家中心',
            description: 'Lazada印尼站卖家平台，管理商品、订单和销售数据',
            tags: ['Lazada', '印尼站', '卖家平台', '东南亚电商'],
            url: 'https://sellercenter.lazada.co.id',
            subcategory: 'lazada'
        },
        {
            title: '泰国站卖家中心',
            description: 'Lazada泰国站卖家平台，管理商品、订单和销售数据',
            tags: ['Lazada', '泰国站', '卖家平台', '东南亚电商'],
            url: 'https://sellercenter.lazada.co.th',
            subcategory: 'lazada'
        },
        {
            title: '菲律宾站卖家中心',
            description: 'Lazada菲律宾站卖家平台，管理商品、订单和销售数据',
            tags: ['Lazada', '菲律宾站', '卖家平台', '东南亚电商'],
            url: 'https://sellercenter.lazada.com.ph',
            subcategory: 'lazada'
        },
        {
            title: 'Wish商户平台',
            description: 'Wish跨境电商平台的商家管理系统',
            tags: ['Wish', '跨境电商', '移动电商'],
            url: 'https://merchant.wish.com/',
            subcategory: 'other'
        },
        {
            title: 'Wayfair Partner Home',
            description: '美国家居电商Wayfair的供应商平台',
            tags: ['Wayfair', '家居电商', '美国市场'],
            url: 'https://partners.wayfair.com/',
            subcategory: 'other'
        },
        {
            title: '淘宝',
            description: '中国领先的C2C电商平台，提供海量商品和个性化购物体验',
            tags: ['淘宝', '阿里巴巴', '国内电商'],
            url: 'https://www.taobao.com/',
            subcategory: 'other'
        },
        {
            title: '天猫',
            description: '阿里巴巴旗下B2C电商平台，聚集众多品牌和优质商家',
            tags: ['天猫', '阿里巴巴', '品牌电商'],
            url: 'https://www.tmall.com/',
            subcategory: 'other'
        },
        {
            title: '京东',
            description: '中国自营式B2C电商平台，以品质保障和快速物流著称',
            tags: ['京东', '自营电商', '快速物流'],
            url: 'https://www.jd.com/',
            subcategory: 'other'
        },
        {
            title: '唯品会',
            description: '专注于特卖的B2C电商平台，提供品牌折扣商品',
            tags: ['唯品会', '特卖', '品牌折扣'],
            url: 'https://www.vip.com/',
            subcategory: 'other'
        },
        {
            title: '1688',
            description: '阿里巴巴旗下B2B批发平台，连接生产商和批发商',
            tags: ['1688', '阿里巴巴', '批发', 'B2B'],
            url: 'https://www.1688.com/',
            subcategory: 'other'
        },
        {
            title: 'Walmart',
            description: '沃尔玛全球电商平台，依托全渠道零售能力在美国市场增长迅速',
            tags: ['美国电商', '全渠道', '平台入驻'],
            url: 'https://www.walmart.com/',
            subcategory: 'other'
        },
        {
            title: 'Temu',
            description: '拼多多旗下全球化电商平台，以高性价比和全托管模式快速扩张',
            tags: ['出海四小龙', '全托管', '跨境电商'],
            url: 'https://www.temu.com/',
            subcategory: 'temu'
        },
        {
            title: 'TikTok Shop',
            description: 'TikTok生态内的兴趣电商平台，结合短视频与直播进行商品转化',
            tags: ['兴趣电商', '短视频', '直播带货'],
            url: 'https://seller-us.tiktok.com/',
            subcategory: 'tiktok-shop'
        },
        {
            title: 'SHEIN',
            description: '全球化快时尚电商平台，已从服饰延展至更多消费品类',
            tags: ['快时尚', '全球化', '跨境零售'],
            url: 'https://www.shein.com/',
            subcategory: 'other'
        },
        {
            title: 'Mercado Libre',
            description: '拉美领先电商平台，覆盖交易、支付与物流等多环节服务',
            tags: ['拉美电商', '区域平台', '跨境销售'],
            url: 'https://www.mercadolibre.com/',
            subcategory: 'mercado-libre'
        },
        {
            title: 'Shopify',
            description: '全球主流SaaS独立站平台，支持品牌商家快速搭建电商网站',
            tags: ['独立站', 'SaaS建站', '品牌出海'],
            url: 'https://www.shopify.com/',
            subcategory: 'shopify'
        },
        {
            title: 'WooCommerce',
            description: '基于WordPress的开源电商插件，适合可定制化独立站场景',
            tags: ['开源', '独立站', 'WordPress'],
            url: 'https://woocommerce.com/',
            subcategory: 'other'
        },
        {
            title: 'BigCommerce',
            description: '面向成长型品牌的电商建站平台，提供较强的企业级扩展能力',
            tags: ['独立站', '企业级', 'SaaS建站'],
            url: 'https://www.bigcommerce.com/',
            subcategory: 'other'
        },
        {
            title: 'Alibaba.com',
            description: '阿里巴巴国际站，全球B2B贸易平台，连接海外采购商与工厂',
            tags: ['B2B', '外贸', '国际站'],
            url: 'https://www.alibaba.com/',
            subcategory: 'other'
        },
        {
            title: 'Made-in-China',
            description: '中国制造网，面向工业品和制造业的B2B跨境贸易平台',
            tags: ['B2B', '工业品', '跨境贸易'],
            url: 'https://www.made-in-china.com/',
            subcategory: 'other'
        }
    ],
    
    // 社交平台
    social: [
        {
            title: 'Facebook',
            description: '全球最大的社交网络平台之一，拥有数十亿用户，可用于社交营销和广告投放',
            descriptionEn: 'One of the largest social networks globally with billions of users, useful for social marketing and advertising',
            tags: ['社交媒体', '广告平台', '全球性'],
            url: 'https://www.facebook.com/',
            subcategory: 'social-global',
            isRecommended: true
        },
        {
            title: 'Instagram',
            description: '图片和短视频分享平台，适合视觉营销和产品展示，特别适合时尚、美食、旅游等领域',
            descriptionEn: 'Image and short video sharing platform, ideal for visual marketing and product showcase, especially for fashion, food, travel, etc.',
            tags: ['社交媒体', '图片分享', '短视频'],
            url: 'https://www.instagram.com/',
            subcategory: 'social-global',
            isRecommended: true
        },
        {
            title: 'Twitter/X',
            description: '实时信息网络，用户可以发布短消息（推文）并与他人互动',
            tags: ['社交媒体', '短消息', '实时信息'],
            url: 'https://twitter.com/',
            subcategory: 'social-global'
        },
        {
            title: 'YouTube',
            description: '全球最大的视频分享平台，提供海量视频内容和直播服务',
            tags: ['视频平台', '内容创作', '直播'],
            url: 'https://www.youtube.com/',
            subcategory: 'social-global',
            isRecommended: true
        },
        {
            title: 'TikTok',
            description: '专注于短视频创作与分享的社交平台，以算法推荐和创意内容著称',
            tags: ['短视频', '社交媒体', '内容创作'],
            url: 'https://www.tiktok.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Pinterest',
            description: '视觉发现工具，用户可以收集创意、创建灵感板并分享发现',
            tags: ['图片分享', '创意收集', '灵感发现'],
            url: 'https://www.pinterest.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Reddit',
            description: '社交新闻聚合平台，用户可以发布、投票、讨论各种主题内容',
            tags: ['社区论坛', '社交新闻', '兴趣小组'],
            url: 'https://www.reddit.com/',
            subcategory: 'social-global'
        },
        {
            title: '微信',
            description: '中国领先的多功能社交媒体和通讯平台，支持消息、支付、小程序等功能',
            tags: ['即时通讯', '社交媒体', '支付平台'],
            url: 'https://weixin.qq.com/',
            subcategory: 'social-china'
        },
        {
            title: '微博',
            description: '中国领先的社交媒体平台，类似Twitter的微博客服务',
            tags: ['社交媒体', '微博客', '热门话题'],
            url: 'https://weibo.com/',
            subcategory: 'social-china'
        },
        {
            title: 'QQ',
            description: '腾讯旗下即时通讯软件和社交平台，提供聊天、社区、游戏等服务',
            tags: ['即时通讯', '社交平台', '腾讯'],
            url: 'https://im.qq.com/',
            subcategory: 'social-china'
        },
        {
            title: '抖音',
            description: '中国领先的短视频平台，提供创意视频内容创作与分享',
            tags: ['短视频', '内容创作', '社交媒体'],
            url: 'https://www.douyin.com/',
            subcategory: 'social-china'
        },
        {
            title: '快手',
            description: '中国知名短视频分享平台，聚焦普通人的生活记录和分享',
            tags: ['短视频', '直播', '社交媒体'],
            url: 'https://www.kuaishou.com/',
            subcategory: 'social-china'
        },
        {
            title: '小红书',
            description: '生活方式分享社区，聚焦美妆、时尚、旅行等生活方式内容',
            tags: ['生活方式', '种草社区', '购物分享'],
            url: 'https://www.xiaohongshu.com/',
            subcategory: 'social-china'
        },
        {
            title: '微信公众号',
            description: '微信平台的内容发布系统，提供图文消息、音频、视频等内容服务',
            tags: ['内容平台', '自媒体', '营销渠道'],
            url: 'https://mp.weixin.qq.com/',
            subcategory: 'social-china'
        },
        {
            title: '微信视频号',
            description: '微信生态内的短视频内容平台，支持短视频和直播功能',
            tags: ['短视频', '直播', '微信生态'],
            url: 'https://channels.weixin.qq.com/',
            subcategory: 'social-china'
        },
        {
            title: 'Snapchat',
            description: '注重隐私的社交媒体应用，以短暂内容和增强现实功能著称',
            tags: ['短暂内容', '社交媒体', '增强现实'],
            url: 'https://www.snapchat.com/',
            subcategory: 'social-global'
        },
        {
            title: 'WhatsApp',
            description: '全球流行的即时通讯应用，提供加密消息、语音通话和视频通话功能',
            tags: ['即时通讯', '加密消息', 'Meta'],
            url: 'https://www.whatsapp.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Telegram',
            description: '注重安全和隐私的即时通讯应用，支持大型群组和频道功能',
            tags: ['即时通讯', '加密', '群组频道'],
            url: 'https://telegram.org/',
            subcategory: 'social-global'
        }
    ],
    
    // 建站工具
    website: [
        {
            title: 'SEMrush',
            description: '深度SEO分析：竞品关键词排名、自然搜索流量、付费广告词、反向链接分析和内容营销洞察',
            tags: ['SEO分析', '关键词分析', '竞品分析'],
            url: 'https://www.semrush.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Ahrefs',
            description: '强大的外链数据库、关键词排名追踪和内容分析工具，专注于链接和关键词分析',
            tags: ['外链分析', '关键词排名', 'SEO工具'],
            url: 'https://ahrefs.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Google Analytics',
            description: '谷歌官方网站分析工具，提供全面的网站流量和用户行为数据，支持自定义报告和目标跟踪',
            tags: ['网站分析', '流量统计', '用户行为'],
            url: 'https://analytics.google.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Moz Pro',
            description: '专业SEO软件工具，帮助提升排名、增加流量并提高可见性',
            tags: ['SEO', '网站优化', '链接分析'],
            url: 'https://moz.com/products/pro',
            subcategory: 'seo'
        },
        {
            title: 'Moz Link Explorer',
            description: 'Moz 的外链分析工具，适合查看域名权重、反向链接分布和链接建设机会',
            titleEn: 'Moz Link Explorer',
            descriptionEn: 'Moz backlink analysis tool for checking domain authority, backlink profiles and link-building opportunities',
            tags: ['外链分析', '域名权重', 'SEO工具'],
            url: 'https://moz.com/link-explorer',
            subcategory: 'seo'
        },
        {
            title: 'Screaming Frog SEO Spider',
            description: '桌面端网站爬取与技术SEO审计工具，适合排查索引、重定向和页面结构问题',
            tags: ['技术SEO', '网站爬取', '站内审计'],
            url: 'https://www.screamingfrog.co.uk/seo-spider/',
            subcategory: 'seo'
        },
        {
            title: 'W3School 中文网',
            description: '中文 Web 开发学习站，覆盖 HTML、CSS、JavaScript、SQL 等基础教程与参考手册',
            titleEn: 'W3School China',
            descriptionEn: 'Chinese web development learning site covering HTML, CSS, JavaScript, SQL and reference tutorials',
            tags: ['编程教程', '前端学习', '中文文档'],
            url: 'https://www.w3school.com.cn/',
            subcategory: 'learning'
        },
        {
            title: 'Grammarly',
            description: '专业的英文写作和内容优化工具，提供语法、拼写和风格建议',
            tags: ['内容优化', '英文校对', '写作助手'],
            url: 'https://www.grammarly.com/',
            subcategory: 'content',
            needsMagic: true
        },
        {
            title: 'Jasper AI',
            description: 'AI驱动的内容创作平台，帮助创建高质量的博客文章、产品描述和营销文案',
            tags: ['AI写作', '内容创作', '营销文案'],
            url: 'https://www.jasper.ai/',
            subcategory: 'content',
            needsMagic: true
        },
        {
            title: 'ChatGPT',
            description: 'OpenAI开发的大型语言模型，能够进行自然对话和信息检索',
            tags: ['对话AI', '自然语言处理', '信息检索'],
            url: 'https://chatgpt.com/',
            subcategory: 'content',
            isRecommended: true,
            needsMagic: true
        },
        {
            title: 'Matomo Analytics',
            description: '开源的网站分析平台，注重隐私保护，是Google Analytics的替代品',
            tags: ['网站分析', '隐私保护', '开源'],
            url: 'https://matomo.org/',
            subcategory: 'analytics'
        },
        {
            title: 'Plausible Analytics',
            description: '轻量级隐私优先的网站统计工具，无Cookie弹窗负担，适合独立站和内容站',
            tags: ['网站分析', '隐私优先', '轻量统计'],
            url: 'https://plausible.io/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Microsoft Clarity',
            description: '微软免费行为分析工具，提供热力图、会话回放和转化路径观察',
            tags: ['热力图', '会话回放', '行为分析'],
            url: 'https://clarity.microsoft.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'SimilarWeb',
            description: 'SimilarWeb 企业官网入口，可进一步进入其流量分析与市场情报产品页面',
            tags: ['竞品分析', '流量分析', '用户行为'],
            url: 'https://www.similarweb.com/corp/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Meta Ads Library',
            description: '免费查看竞品在Facebook/Instagram的广告素材、投放时长、文案，分析其受众定位和促销策略',
            tags: ['广告分析', '营销策略', 'Facebook'],
            url: 'https://www.facebook.com/ads/library/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'AdSpy',
            description: '跨境广告素材库，抓取Facebook/Google广告历史数据，支持按行业、国家筛选，适合分析爆款广告套路',
            tags: ['广告分析', '素材库', '营销策略'],
            url: 'https://adspy.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'SpyFu',
            description: '竞品Google Ads关键词挖掘，分析其付费广告投入和ROI',
            tags: ['广告分析', '关键词', 'Google Ads'],
            url: 'https://www.spyfu.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Koala Inspector',
            description: '面向Shopify店铺的竞品侦查工具，可查看应用栈、主题与商品等线索',
            tags: ['Shopify分析', '店铺侦查', '产品研究'],
            url: 'https://koala-apps.io/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Wappalyzer',
            description: '浏览器插件，一键检测竞站技术栈（CMS、支付工具、服务器、追踪代码等）',
            tags: ['技术分析', '浏览器插件', '网站技术'],
            url: 'https://www.wappalyzer.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'BuiltWith',
            description: '全面的技术分析，包括主题模板、CDN、第三方脚本等网站使用的技术',
            tags: ['技术分析', '网站技术', '第三方服务'],
            url: 'https://builtwith.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Jungle Scout',
            description: '针对电商独立站，估算竞品销量、收入，分析产品评论趋势',
            tags: ['电商分析', '销量估算', '产品评论'],
            url: 'https://www.junglescout.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Keepa',
            description: '主要针对亚马逊，但也可监控独立站价格历史变化',
            tags: ['价格监控', '亚马逊', '历史价格'],
            url: 'https://keepa.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Price2Spy',
            description: '跟踪竞品价格变动、促销频率，支持设置价格警报',
            tags: ['价格监控', '促销跟踪', '价格警报'],
            url: 'https://www.price2spy.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Octoparse',
            description: '自定义抓取竞品产品目录、价格、库存数据的爬虫工具，需一定技术基础',
            tags: ['爬虫工具', '数据抓取', '价格监控'],
            url: 'https://www.octoparse.com/',
            subcategory: 'analytics'
        },
        {
            title: 'BuzzSumo',
            description: '分析竞品社交媒体的热门内容（转发量、互动率），挖掘爆款话题',
            tags: ['社交分析', '内容分析', '互动率'],
            url: 'https://buzzsumo.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Wayback Machine',
            description: '互联网档案馆，查看竞品历史页面改版记录，分析其策略调整',
            tags: ['历史记录', '页面改版', '策略分析'],
            url: 'https://archive.org/web/',
            subcategory: 'analytics'
        },
        {
            title: 'Hotjar',
            description: '用户体验分析工具，通过热图、会话录制和用户调查分析网站访客行为',
            tags: ['用户体验', '热图分析', '行为跟踪'],
            url: 'https://www.hotjar.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'GoDaddy',
            description: '全球最大的域名注册商之一，提供域名注册、网站托管和建站服务',
            tags: ['域名注册', '网站托管', '建站服务'],
            url: 'https://www.godaddy.com/',
            subcategory: 'domain'
        },
        {
            title: 'Squarespace Domains',
            description: '收购Google Domains后提供集成建站服务的域名注册商',
            tags: ['域名注册', '建站服务', '一站式'],
            url: 'https://www.squarespace.com/domains',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Name.com',
            description: '支持小众域名后缀，适合创意域名注册的域名服务商',
            tags: ['创意域名', '小众后缀', '域名注册'],
            url: 'https://www.name.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Hostinger',
            description: '提供低价域名+主机套餐，适合新手用户的服务商',
            tags: ['低价套餐', '新手友好', '域名主机'],
            url: 'https://www.hostinger.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Cloudflare Domains',
            description: '仅支持域名注册（无主机服务），成本价销售，续费透明的域名服务',
            tags: ['成本价', '透明续费', '域名注册'],
            url: 'https://www.cloudflare.com/products/registrar/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: '阿里云（万网）',
            description: '国内市场份额最大的域名注册商，支持备案，新用户首年优惠多',
            tags: ['国内域名', '备案服务', '云服务'],
            url: 'https://wanwang.aliyun.com/',
            subcategory: 'domain'
        },
        {
            title: '腾讯云（DNSPod）',
            description: '腾讯旗下域名服务商，提供域名+解析+SSL证书一站式服务',
            tags: ['域名解析', 'SSL证书', '腾讯服务'],
            url: 'https://www.dnspod.cn/',
            subcategory: 'domain'
        },
        {
            title: '华为云',
            description: '企业级域名服务，合规性强，适合政企用户的域名注册服务',
            tags: ['企业级', '合规域名', '政企服务'],
            url: 'https://www.huaweicloud.com/product/domain.html',
            subcategory: 'domain'
        },
        {
            title: '西部数码',
            description: '老牌域名服务商，提供丰富的域名后缀，价格中等',
            tags: ['域名后缀', '老牌服务', '国内域名'],
            url: 'https://www.west.cn/',
            subcategory: 'domain'
        },
        {
            title: '新网',
            description: '国内早期域名商，代理体系完善的域名注册服务商',
            tags: ['域名注册', '老牌商家', '代理体系'],
            url: 'https://www.xinnet.com/',
            subcategory: 'domain'
        },
        {
            title: '爱名网',
            description: '主打域名交易，提供专业的域名抢注和竞价服务',
            tags: ['域名交易', '域名抢注', '域名竞价'],
            url: 'https://www.22.cn/',
            subcategory: 'domain'
        },
        {
            title: 'Gandi',
            description: '欧洲老牌域名注册商，强调隐私和环保，适合技术极客',
            tags: ['隐私保护', '环保理念', '技术极客'],
            url: 'https://www.gandi.net/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Porkbun',
            description: '幽默风格的域名注册商，低价促销多，提供免费Whois保护',
            tags: ['低价促销', 'Whois保护', '特色服务'],
            url: 'https://porkbun.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Hover',
            description: '简洁易用的域名注册商，专注域名注册，无附加销售',
            tags: ['简洁界面', '专注域名', '无附加销售'],
            url: 'https://www.hover.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Sedo',
            description: '全球最大域名交易市场，支持中介担保交易的域名交易平台',
            tags: ['域名交易', '担保服务', '全球市场'],
            url: 'https://sedo.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: '金名网',
            description: '国内专业域名拍卖平台，提供本地化的域名交易流程',
            tags: ['域名拍卖', '国内交易', '本地化服务'],
            url: 'https://www.juming.com/',
            subcategory: 'domain'
        },
        {
            title: 'AWS',
            description: '亚马逊云服务，提供全球最全面和广泛采用的云平台',
            tags: ['云服务', '服务器', '存储'],
            url: 'https://aws.amazon.com/',
            subcategory: 'server',
            needsMagic: true
        },
        {
            title: 'Vercel',
            description: '前端与全栈应用部署平台，适合静态站点和Next.js项目的快速上线',
            tags: ['前端部署', '静态托管', '全栈平台'],
            url: 'https://vercel.com/',
            subcategory: 'server',
            needsMagic: true
        },
        {
            title: 'Netlify',
            description: '主流静态站与Jamstack托管平台，支持自动构建、CDN分发与表单功能',
            tags: ['静态托管', 'Jamstack', '自动部署'],
            url: 'https://www.netlify.com/',
            subcategory: 'server',
            needsMagic: true
        },
        {
            title: 'Cloudflare',
            description: '网络安全与性能服务，提供CDN、DNS管理和DDoS防护',
            tags: ['CDN', '网络安全', 'DNS'],
            url: 'https://www.cloudflare.com/',
            subcategory: 'network'
        },
        {
            title: 'Stripe',
            description: '为互联网业务提供的支付基础设施，支持多种支付方式和货币',
            tags: ['支付处理', 'API', '订阅支付'],
            url: 'https://stripe.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: '2Checkout',
            description: '支持全球支付方式（包括本地化支付），适合数字商品和服务',
            tags: ['全球支付', '数字商品', '本地化支付'],
            url: 'https://www.2checkout.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Adyen',
            description: '欧洲主流支付平台，支持多渠道支付（线上、线下），适合大型企业',
            tags: ['多渠道支付', '欧洲支付', '企业支付'],
            url: 'https://www.adyen.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Checkout.com',
            description: '面向全球化企业的支付平台，支持高并发交易、风控和本地化收单',
            tags: ['企业支付', '全球收单', '风控'],
            url: 'https://www.checkout.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Paddle',
            description: '面向SaaS和数字产品的支付与税务一体化平台，支持订阅计费与代缴税',
            tags: ['SaaS支付', '订阅计费', '税务合规'],
            url: 'https://www.paddle.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'XTransfer',
            description: '跨境贸易收款与风控平台，支持多币种收付和企业级跨境资金管理',
            tags: ['跨境收款', '多币种账户', '企业支付'],
            url: 'https://www.xtransfer.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'PingPong',
            description: '专注中国卖家，支持亚马逊、Shopify等，提现费率约1%，提供VISA卡、供应商付款等增值服务',
            tags: ['跨境收款', '中国卖家', 'VISA卡'],
            url: 'https://www.pingpongx.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Airwallex',
            description: '多币种账户，支持全球收款、批量付款，费率透明（0.3%-1%），适合高频交易或B2B业务',
            tags: ['多币种账户', '批量付款', 'B2B收款'],
            url: 'https://www.airwallex.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: '连连支付',
            description: '合作平台覆盖广（Wish、Shopee等），支持人民币直接提现，费率约0.7%',
            tags: ['跨境支付', '直接提现', '平台收款'],
            url: 'https://www.lianlianpay.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Payoneer',
            description: '提供虚拟银行账户（USD/GBP/EUR等），适合平台佣金、自由职业者收款，提现费率1.2%左右',
            tags: ['虚拟账户', '跨境收款', '平台佣金'],
            url: 'https://www.payoneer.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Amazon Pay',
            description: '亚马逊官方支付，买家信任度高，适用于亚马逊生态系统内',
            tags: ['亚马逊支付', '官方支付', '信任度高'],
            url: 'https://pay.amazon.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Shopify Payments',
            description: 'Shopify内置支付，直接关联Stripe，费率取决于套餐（2.4%-2.9%）',
            tags: ['Shopify内置', '独立站支付', '信用卡支付'],
            url: 'https://www.shopify.com/payments',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Alipay Global',
            description: '适合面向华人或东南亚市场的独立站，提供本地化支付体验',
            tags: ['支付宝', '华人市场', '本地化支付'],
            url: 'https://global.alipay.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Wise',
            description: '多币种虚拟账户，国际转账费率低，适合B2B收款和个人海外汇款',
            tags: ['多币种账户', '低费率', '国际转账'],
            url: 'https://wise.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Authorize.Net',
            description: '专业信用卡收单服务，提供网关和支付处理，适合美国和加拿大市场',
            tags: ['信用卡收单', '支付网关', '北美市场'],
            url: 'https://www.authorize.net/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Odoo',
            description: '开源全功能ERP系统，模块化设计适合各种规模企业',
            tags: ['开源ERP', '业务管理', '电商集成'],
            url: 'https://www.odoo.com/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'Microsoft Dynamics 365',
            description: '与微软生态无缝衔接，支持多渠道销售和供应链管理，适合中大型企业',
            tags: ['微软生态', '多渠道', '供应链'],
            url: 'https://dynamics.microsoft.com/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: '店小秘',
            description: '支持多平台（亚马逊、eBay、Shopify等），功能涵盖订单、库存、采购，适合中小卖家',
            tags: ['中小卖家', '多平台', '跨境电商'],
            url: 'https://www.dianxiaomi.com/',
            subcategory: 'erp'
        },
        {
            title: '马帮ERP',
            description: '专注跨境电商，提供供应链、财务、数据分析等功能，支持多仓库协同',
            tags: ['跨境电商', '供应链', '多仓库'],
            url: 'https://www.mabangerp.com/',
            subcategory: 'erp'
        },
        {
            title: '通途ERP',
            description: '覆盖订单处理、物流跟踪、利润核算，对接主流电商平台，适合成长型卖家',
            tags: ['跨境电商', '物流跟踪', '利润核算'],
            url: 'https://www.tongtool.com/',
            subcategory: 'erp'
        },
        {
            title: '领星 ERP',
            description: '聚焦亚马逊卖家，提供精细化运营、财务核算、广告管理服务',
            tags: ['亚马逊', '精细运营', '广告管理'],
            url: 'https://www.lingxing.com/',
            subcategory: 'erp'
        },
        {
            title: '旺店通',
            description: '尤其适合东南亚（如Shopee、Lazada）卖家，支持多平台订单同步',
            tags: ['东南亚电商', '多平台', '订单同步'],
            url: 'https://www.wangdian.cn/',
            subcategory: 'erp'
        },
        {
            title: '易仓ERP',
            description: '专注跨境供应链，支持海外仓、FBA头程管理，物流优化',
            tags: ['供应链', '海外仓', 'FBA管理'],
            url: 'https://www.eccang.com/',
            subcategory: 'erp'
        },
        {
            title: '船长 BI',
            description: '侧重亚马逊数据分析和运营优化，提供深度市场洞察',
            tags: ['亚马逊', '数据分析', '市场洞察'],
            url: 'https://www.captainbi.com/',
            subcategory: 'erp'
        },
        {
            title: 'ERPNext',
            description: '开源ERP，适合技术团队二次开发，支持跨境电商模块',
            tags: ['开源', '二次开发', '跨境电商'],
            url: 'https://frappe.io/erpnext',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'Zoho Inventory',
            description: 'Zoho旗下库存与订单管理系统，适合中小商家多渠道销售协同',
            tags: ['库存管理', '订单管理', '中小商家'],
            url: 'https://www.zoho.com/inventory/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'Brightpearl',
            description: '专为零售与批发业务设计的ERP，集成BigCommerce等电商平台',
            tags: ['零售批发', 'BigCommerce', '业务管理'],
            url: 'https://www.brightpearl.com/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'Ranktank',
            description: '专业SEO工具集，提供关键词研究、竞争分析和网站审计',
            tags: ['SEO工具', '关键词研究', '网站审计'],
            url: 'https://www.ranktank.org/',
            subcategory: 'seo',
            needsMagic: true
        },
        {
            title: 'KeywordTool.io',
            description: '专业关键词研究工具，帮助发现长尾关键词和搜索趋势',
            tags: ['关键词研究', '长尾关键词', 'SEO'],
            url: 'https://keywordtool.io/',
            subcategory: 'keyword',
            needsMagic: true
        },
        {
            title: 'Ubersuggest',
            description: '综合性SEO工具，提供关键词建议、内容创意和竞争分析',
            tags: ['关键词工具', 'SEO分析', '内容创意'],
            url: 'https://neilpatel.com/ubersuggest/',
            subcategory: 'keyword',
            needsMagic: true
        },
        {
            title: 'Google Trends',
            description: 'Google 官方搜索趋势工具，适合查看关键词热度变化、地区分布和季节性趋势',
            titleEn: 'Google Trends',
            descriptionEn: 'Official Google search trends tool for topic interest over time, regional demand and seasonal patterns',
            tags: ['搜索趋势', '关键词热度', '市场趋势'],
            url: 'https://trends.google.com/trends/?geo=US',
            subcategory: 'keyword',
            needsMagic: true
        },
        {
            title: 'Google Ads',
            description: 'Google Ads 官方投放入口，适合创建搜索广告、购物广告和品牌获客投放计划',
            titleEn: 'Google Ads',
            descriptionEn: 'Official Google Ads campaign entry for search, shopping and customer acquisition advertising',
            tags: ['Google Ads', '广告投放', '付费搜索'],
            url: 'https://business.google.com/en-all/google-ads/',
            subcategory: 'keyword',
            needsMagic: true
        },
        {
            title: 'Google Keyword Planner',
            description: 'Google Ads官方关键词规划工具，适合获取搜索量区间和投放参考',
            tags: ['关键词规划', 'Google Ads', '搜索量'],
            url: 'https://ads.google.com/home/tools/keyword-planner/',
            subcategory: 'keyword',
            needsMagic: true
        },
        {
            title: 'Guerrilla Mail',
            description: '提供永久邮箱地址（需手动刷新页面），支持附件查看的临时邮箱',
            tags: ['临时邮箱', '附件查看', '永久地址'],
            url: 'https://www.guerrillamail.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: 'Mailinator',
            description: '无需注册，公开邮箱池（如xxx@mailinator.com），适合测试环境',
            tags: ['公开邮箱', '测试环境', '无需注册'],
            url: 'https://www.mailinator.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: 'YOPmail',
            description: '法国服务商，邮箱地址格式xxx@yopmail.com，长期有效（需定期登录）',
            tags: ['长期有效', '临时邮箱', '无需注册'],
            url: 'https://yopmail.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: '24mail',
            description: '国内访问稳定，邮箱24小时后自动删除的临时邮箱服务',
            tags: ['国内访问', '24小时', '临时邮箱'],
            url: 'http://24mail.chacuo.net/',
            subcategory: 'temp-mail'
        },
        {
            title: '临时邮箱网',
            description: '中文界面，支持自定义前缀，邮件保留12小时的临时邮箱服务',
            tags: ['中文界面', '自定义前缀', '12小时'],
            url: 'https://linshiyouxiang.net/',
            subcategory: 'temp-mail'
        },
        {
            title: 'Proxyscrape',
            description: '代理IP服务，提供HTTP、SOCKS5代理，支持地区选择',
            tags: ['代理IP', 'HTTP代理', 'SOCKS5'],
            url: 'https://proxyscrape.com/',
            subcategory: 'ip-proxy',
            needsMagic: true
        },
        {
            title: 'Multilogin',
            description: '行业标杆，支持高度自定义的浏览器指纹（User-Agent、Canvas、WebGL、时区等），可模拟不同设备和操作系统',
            tags: ['指纹浏览器', '多账号管理', '跨境电商'],
            url: 'https://multilogin.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'AdsPower',
            description: '性价比高，支持团队协作和自动化脚本（RPA），提供免费版和付费版，适合社交媒体多账号管理',
            tags: ['指纹浏览器', '中文界面', '自动化脚本'],
            url: 'https://www.adspower.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Dolphin{anty}',
            description: '开源免费，支持Chromium内核，可自定义指纹参数，适合个人开发者或小团队',
            tags: ['开源免费', '指纹浏览器', '低成本方案'],
            url: 'https://anty.dolphin.ru.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Kameleo',
            description: '专注于指纹欺骗和隐私保护，支持动态指纹切换，指纹模拟真实度高，支持移动端模拟',
            tags: ['高匿名性', '动态指纹', '移动端模拟'],
            url: 'https://kameleo.io/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Linken Sphere',
            description: '老牌反检测浏览器，支持高级指纹修改和自动化工具，功能强大，支持Tor网络',
            tags: ['高级反检测', '自动化工具', 'Tor网络'],
            url: 'https://linkensphere.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Ghost Browser',
            description: '轻量级多账号管理，基于Chromium，支持同一浏览器内多会话隔离，适合社交媒体运营',
            tags: ['轻量级', '多会话隔离', '简单操作'],
            url: 'https://ghostbrowser.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Incogniton',
            description: '价格亲民，基础指纹修改功能齐全，按需付费，支持团队协作，适合中小团队或个人用户',
            tags: ['价格亲民', '指纹浏览器', '团队协作'],
            url: 'https://incogniton.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'VMLogin',
            description: '国产软件，支持多开浏览器和API对接，中文支持好，价格较低，适合跨境电商和爬虫开发',
            tags: ['国产软件', 'API对接', '价格较低'],
            url: 'https://vmlogin.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'GoLogin',
            description: '主流指纹浏览器之一，支持云端配置、多账号隔离和团队协作',
            tags: ['指纹浏览器', '多账号管理', '团队协作'],
            url: 'https://gologin.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Coursera',
            description: '在线学习平台，提供来自顶尖大学和公司的电子商务和数字营销课程',
            tags: ['在线教育', '数字营销', '电商课程'],
            url: 'https://www.coursera.org/',
            subcategory: 'learning',
            needsMagic: true
        },
        {
            title: 'Majestic',
            description: '老牌外链分析平台，提供Trust Flow与Citation Flow等链接质量指标',
            tags: ['反向外链', '链接质量', 'SEO分析'],
            url: 'https://majestic.com/',
            subcategory: 'backlink',
            needsMagic: true
        }
    ],
    
    // AI写作
    ai_writing: [
        // 综合写作与逻辑之王（大模型类）
        {
            title: 'DeepSeek V4 系列',
            description: 'DeepSeek 的对话入口，可用于中文写作、技术文档与推理。V4.1 Flash 也已在 API 发布。',
            tags: ['中文写作', '技术文档', '复杂推理'],
            url: 'https://chat.deepseek.com/',
            subcategory: 'model_reasoning',
            needsMagic: false,
            isRecommended: true
        },
        {
            title: 'ChatGPT · GPT-6',
            description: '适合资料整合、长文写作和多步骤推理。可用模型随套餐和使用场景变化。',
            tags: ['学术写作', '科学报告', '事实准确'],
            url: 'https://chatgpt.com/',
            subcategory: 'model_reasoning',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Gemini 4 Neon',
            description: 'Google 的多模态模型，适合资料综合与复杂知识工作。Gemini 应用向 AI Pro 和 Ultra 用户逐步开放该模型。',
            tags: ['多模态', '资料整合', '联网写作'],
            url: 'https://gemini.google.com/',
            subcategory: 'model_reasoning',
            needsMagic: true
        },

        // 生产力与长文辅助（工具类）
        {
            title: 'Jasper.ai',
            description: '依旧是营销文案领域的强势平台，已深度整合企业级 SEO 数据，可直接生成更符合 Google 逻辑的博客文章。',
            tags: ['SEO写作', '营销文案', '博客生成'],
            url: 'https://www.jasper.ai/',
            subcategory: 'productivity_longform',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Writesonic',
            description: '侧重快速生成和一键发布，Article Writer 能结合实时搜索结果写作，适合时效性内容。',
            tags: ['实时搜索', '一键发布', '长文生成'],
            url: 'https://writesonic.com/',
            subcategory: 'productivity_longform',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Copy.ai Workflows',
            description: '主打写作自动化，可自动抓取产品信息并批量生成多个平台的推广脚本和营销内容。',
            tags: ['写作自动化', '批量生成', '营销流程'],
            url: 'https://www.copy.ai/',
            subcategory: 'productivity_longform',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Rytr',
            description: '性价比高的通用写作助手，适合草稿生成、邮件、博客和日常生产力写作。',
            tags: ['通用写作', '草稿生成', '性价比高'],
            url: 'https://rytr.me/',
            subcategory: 'productivity_longform',
            needsMagic: true
        },
        {
            title: 'Otter.ai',
            description: '实时语音转文字与会议纪要助手，适合把访谈、会议内容整理成长文素材。',
            tags: ['会议纪要', '语音转文字', '素材整理'],
            url: 'https://otter.ai/',
            subcategory: 'productivity_longform',
            needsMagic: true
        },
        {
            title: 'Descript',
            description: '集转录、字幕和编辑于一体，适合播客、视频脚本和长内容再加工。',
            tags: ['转录', '字幕生成', '内容编辑'],
            url: 'https://www.descript.com/',
            subcategory: 'productivity_longform',
            needsMagic: true
        },
        {
            title: 'DeepL',
            description: '高质量翻译与表达优化工具，适合跨语言资料整理和多语种长文辅助。',
            tags: ['翻译工具', '多语言', '表达优化'],
            url: 'https://www.deepl.com/',
            subcategory: 'productivity_longform',
            needsMagic: true
        },

        // 内容安全与 AI 伪装（润色/查重类）
        {
            title: 'Originality.ai',
            description: '较权威的 AI 内容检测与事实核查网站，不仅查 AI 比例，还能识别事实错误和幻觉风险。',
            tags: ['AI检测', '事实核查', '幻觉检测'],
            url: 'https://originality.ai/',
            subcategory: 'content_safety',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'DeepL Write',
            description: '专注英文润色与措辞优化，适合商务邮件、论文和正式文本打磨。',
            tags: ['英文润色', '措辞优化', '正式写作'],
            url: 'https://www.deepl.com/write',
            subcategory: 'content_safety',
            needsMagic: true
        },
        {
            title: '有道翻译·AI写作',
            description: '支持翻译、润色与语法修正，适合中英双语内容校对和安全发布前检查。',
            tags: ['中英翻译', '写作润色', '语法修正'],
            url: 'https://ai.youdao.com/',
            subcategory: 'content_safety',
            needsMagic: false
        },

        // 垂直领域专精（推荐收录）
        {
            title: 'Notion AI',
            description: '如果用户长期在 Notion 里办公，它的文档内嵌写作、整理与协作体验依旧是最顺手的一档。',
            tags: ['知识管理', '文档协作', '办公写作'],
            url: 'https://www.notion.com/product/ai',
            subcategory: 'vertical_specialized',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Lex.page',
            description: '专门为作家和博主设计的 AI 写作编辑器，界面极简，卡壳时能像副驾驶一样自然接龙。',
            tags: ['作家工具', '博客写作', '极简编辑器'],
            url: 'https://lex.page/',
            subcategory: 'vertical_specialized',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'AI新媒体文章（夸克）',
            description: '夸克搜索推出的新媒体文章创作工具，支持一键生成完整文章',
            tags: ['新媒体', '一键生成', '内容创作'],
            url: 'https://www.quark.cn/',
            subcategory: 'vertical_specialized',
            needsMagic: false
        },
        {
            title: 'Canva文本生成器',
            description: 'Canva设计平台内置的AI文本生成工具，可创建标题、说明和短文',
            tags: ['设计文本', '标题生成', '图文结合'],
            url: 'https://www.canva.com/features/ai-text-generator/',
            subcategory: 'vertical_specialized',
            needsMagic: true
        }
    ],
    
    // AI对话
    ai_chat: [
        // 通用AI助手
        {
            title: 'ChatGPT',
            description: 'OpenAI开发的大型语言模型，可进行自然对话、问答和内容创作',
            tags: ['通用对话', '问答助手', '内容创作'],
            url: 'https://chatgpt.com/',
            subcategory: 'general_assistant',
            isRecommended: true,
            needsMagic: true
        },
        {
            title: 'Gemini',
            description: 'Google推出的AI助手，支持多轮对话与多模态输入',
            tags: ['Google AI', '多轮对话', '多模态'],
            url: 'https://gemini.google.com/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: '豆包',
            description: '字节跳动推出的AI助手，适合日常问答、写作和办公',
            tags: ['国产AI', '办公助手', '创作支持'],
            url: 'https://www.doubao.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'DeepSeek',
            description: '深度求索推出的大模型助手，推理和代码能力突出',
            tags: ['推理能力', '代码辅助', '国产模型'],
            url: 'https://www.deepseek.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: '通义千问',
            description: '阿里最新一代通用AI助手，适合问答、写作、推理和工作流执行',
            tags: ['阿里AI', '多轮对话', '工作流执行'],
            url: 'https://www.qianwen.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'MiniMax',
            description: '国内正在快速增长的 AI 智能体平台，兼顾对话、任务拆解与多步骤执行场景',
            tags: ['AI智能体', '任务执行', '国产模型'],
            url: 'https://www.minimax.cn/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Kimi',
            description: '月之暗面推出的助手，擅长长文本理解和资料整理',
            tags: ['长文处理', '知识问答', '中文场景'],
            url: 'https://kimi.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: '腾讯元宝',
            description: '腾讯推出的AI对话助手，擅长中文语境的交流和创作',
            tags: ['腾讯AI', '中文对话', '混元大模型'],
            url: 'https://hunyuan.tencent.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: '天工AI',
            description: '昆仑万维推出的中文大语言模型，具有较强的指令理解能力',
            tags: ['中文AI', '指令理解', '国产模型'],
            url: 'https://tiangong.kunlun.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        // 游戏与娱乐AI
        {
            title: '通义星尘',
            description: '阿里推出的虚拟数字人助手，提供情感化的对话体验',
            tags: ['数字人', '情感对话', '虚拟形象'],
            url: 'https://tongyi.aliyun.com/xingchen',
            subcategory: 'role_play',
            needsMagic: false
        },
        
        // 多模态AI助手
        {
            title: '华为小艺',
            description: '华为推出的多模态AI助手，支持语音、图像和文本交互',
            tags: ['华为AI', '多模态', '语音交互'],
            url: 'https://xiaoyi.huawei.com/',
            subcategory: 'multimodal_ai',
            needsMagic: false
        },
        {
            title: 'Muse',
            description: 'Meta推出的多模态AI，支持图像、语音和文本的综合理解',
            tags: ['Meta AI', '多模态', '社交平台'],
            url: 'https://ai.meta.com/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'Stable Diffusion',
            description: '开源的AI图像生成模型，可通过文字描述生成高质量图像',
            tags: ['开源AI', '图像生成', '模型定制'],
            url: 'https://stability.ai/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: '天工图像',
            description: '昆仑万维推出的多模态AI，支持图像识别和生成功能',
            tags: ['图像处理', '多模态', '中文优化'],
            url: 'https://tiangong.kunlun.com/image',
            subcategory: 'multimodal_ai',
            needsMagic: false
        },
        
        // 专业领域AI
        {
            title: 'GitHub Copilot',
            description: 'AI代码助手，可以自动补全代码、提供建议和解释代码',
            tags: ['代码补全', '开发助手', '编程辅助'],
            url: 'https://github.com/features/copilot',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'Qwen Chat',
            description: '阿里开发者友好的AI助手，专为编程和技术开发设计',
            tags: ['开发助手', '代码生成', '技术支持'],
            url: 'https://www.qianwen.com/',
            subcategory: 'professional_ai',
            needsMagic: false
        },
        {
            title: 'J1 Assistant',
            description: '面向商务和专业人士的AI助手，擅长处理商业场景问题',
            tags: ['商务AI', '专业助手', '企业应用'],
            url: 'https://j1.ai/',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'Cursor',
            description: '集成AI的代码编辑器，可以理解、解释和生成代码',
            tags: ['AI编辑器', '代码理解', '快速开发'],
            url: 'https://cursor.com/',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'Tabnine',
            description: '基于AI的代码补全工具，支持多种IDE和编程语言',
            tags: ['代码补全', 'IDE插件', '多平台'],
            url: 'https://www.tabnine.com/',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'ChatPDF',
            description: '上传PDF文件并与之对话，可提取信息、总结内容或解答相关问题',
            tags: ['PDF助手', '文档问答', '内容提取'],
            url: 'https://www.chatpdf.com/',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'Perplexity AI',
            description: '基于AI的搜索引擎，提供实时信息和参考来源',
            tags: ['AI搜索', '信息汇总', '实时资讯'],
            url: 'https://www.perplexity.ai/',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'CodeGeeX',
            description: '清华大学开源的AI编程助手，支持多种编程语言的代码生成',
            tags: ['国产AI', '代码生成', '开源项目'],
            url: 'https://codegeex.cn/',
            subcategory: 'professional_ai',
            needsMagic: false
        },
        
        // 国际化AI助手
        {
            title: 'Writesonic',
            description: '面向营销内容创作的AI助手，提供多种语言支持',
            tags: ['多语言', '营销内容', '国际化'],
            url: 'https://writesonic.com/',
            subcategory: 'international_ai',
            needsMagic: true
        },
        {
            title: 'Jasper',
            description: '专业的AI内容创作平台，面向全球企业和营销团队',
            tags: ['全球化', '企业级AI', '多语言'],
            url: 'https://www.jasper.ai/',
            subcategory: 'international_ai',
            needsMagic: true
        }
    ],
    
    // AI绘画
    ai_image: [
        // 通用AI图片生成
        {
            title: '即梦AI',
            description: '剪映旗下的中文图像与视频生成平台，擅长海报、电商物料和短视频视觉内容一体化创作',
            tags: ['中文生成', '图生视频', '电商物料'],
            url: 'https://jimeng.jianying.com/ai-tool/home/',
            subcategory: 'painting_creation',
            needsMagic: false
        },
        {
            title: 'Stable Diffusion',
            description: '开源的文本生成图像AI模型，支持本地部署和自定义微调',
            tags: ['开源模型', '自定义部署', '社区支持'],
            url: 'https://stability.ai/',
            subcategory: 'painting_creation',
            needsMagic: true
        },
        {
            title: 'DreamStudio',
            description: 'Stability AI官方平台，提供Stable Diffusion模型的云端应用',
            tags: ['Stability AI', '云端生成', '专业工具'],
            url: 'https://dreamstudio.ai/',
            subcategory: 'painting_creation',
            needsMagic: true
        },
        {
            title: 'Firefly',
            description: 'Adobe推出的AI图像生成工具，与创意云产品无缝集成',
            tags: ['Adobe', '设计集成', '商业授权'],
            url: 'https://firefly.adobe.com/',
            subcategory: 'painting_creation',
            needsMagic: true
        },
        {
            title: 'Bing Image Creator',
            description: '微软推出的免费AI图像生成工具，基于DALL-E模型',
            tags: ['微软', '免费工具', '简易操作'],
            url: 'https://www.bing.com/images/create/ai-image-generator',
            subcategory: 'painting_creation',
            needsMagic: true
        },
        {
            title: 'Playground AI',
            description: '免费在线AI图像生成平台，用户友好的界面设计',
            tags: ['免费工具', '用户友好', '在线生成'],
            url: 'https://playgroundai.com/',
            subcategory: 'painting_creation',
            needsMagic: true
        },
        
        // 人像与头像生成
        {
            title: 'Lensa AI',
            description: '爆款魔法头像生成应用，创建各种风格的艺术化个人头像',
            tags: ['魔法头像', '风格多样', '个人定制'],
            url: 'https://prisma-ai.com/lensa',
            subcategory: 'portrait_custom',
            needsMagic: true
        },
        {
            title: 'Generated Photos',
            description: '人工智能生成的虚拟人像库，提供多样化的人物形象',
            tags: ['虚拟人像', '多样化', '商业授权'],
            url: 'https://generated.photos/',
            subcategory: 'portrait_custom',
            needsMagic: true
        },
        {
            title: 'This Person Does Not Exist',
            description: '利用GAN技术生成逼真但不存在的人脸照片',
            tags: ['GAN技术', '虚拟人脸', '逼真效果'],
            url: 'https://thispersondoesnotexist.com/',
            subcategory: 'portrait_custom',
            needsMagic: true
        },
        {
            title: 'PortraitAI',
            description: '将个人照片转换为各种艺术风格的肖像画',
            tags: ['艺术肖像', '风格转换', '个人定制'],
            url: 'https://portraitai.com/',
            subcategory: 'portrait_custom',
            needsMagic: true
        },
        {
            title: 'AvatarAI',
            description: '定制专业数字人形象，适用于各种商业和个人场景',
            tags: ['数字人像', '商业应用', '专业形象'],
            url: 'https://avatarai.me/',
            subcategory: 'portrait_custom',
            needsMagic: true
        },
        {
            title: 'Dawn AI',
            description: '移动端AI头像生成应用，支持多种创意风格和效果',
            tags: ['移动应用', '创意风格', '快速生成'],
            url: 'https://dawn-ai.com/',
            subcategory: 'portrait_custom',
            needsMagic: true
        },
        
        // 背景与设计素材
        {
            title: 'Remove.bg',
            description: '智能去除图像背景的AI工具，一键实现透明背景',
            tags: ['去背景', '透明背景', '一键操作'],
            url: 'https://www.remove.bg/',
            subcategory: 'image_postprocess',
            needsMagic: true
        },
        {
            title: 'Magic Studio',
            description: 'Canva旗下的AI图像编辑工具，提供背景替换和增强功能',
            tags: ['背景替换', 'Canva', '图像编辑'],
            url: 'https://magicstudio.com/',
            subcategory: 'image_postprocess',
            needsMagic: true
        },
        {
            title: 'Patterned AI',
            description: '利用AI生成无缝纹理和图案的设计工具',
            tags: ['无缝纹理', '图案设计', '设计素材'],
            url: 'https://patterned.ai/',
            subcategory: 'image_postprocess',
            needsMagic: true
        },
        {
            title: 'Wallpaper Engine',
            description: '支持AI生成的动态壁纸创作平台，实现个性化桌面体验',
            tags: ['动态壁纸', '个性化', '创意设计'],
            url: 'https://www.wallpaperengine.io/',
            subcategory: 'image_postprocess',
            needsMagic: true
        },
        
        // 品牌与商业设计
        {
            title: 'Brandmark.io',
            description: '专业的AI品牌套装生成工具，包含Logo、配色和品牌资产',
            tags: ['品牌套装', 'Logo设计', '配色方案'],
            url: 'https://brandmark.io/',
            subcategory: 'commercial_design',
            needsMagic: true
        },
        {
            title: 'Canva AI',
            description: '集成AI功能的全能设计平台，支持多种商业设计需求',
            tags: ['全能设计', '商业模板', 'AI辅助'],
            url: 'https://www.canva.com/ai-image-generator/',
            subcategory: 'commercial_design',
            needsMagic: true
        },
        {
            title: 'VanceAI',
            description: '专注于商品图生成和优化的AI工具，适合电商场景',
            tags: ['商品图', '电商优化', '图像增强'],
            url: 'https://vanceai.com/',
            subcategory: 'commercial_design',
            needsMagic: true
        },
        
        // 照片修复与增强
        {
            title: 'MyHeritage InColor',
            description: '专业的老照片上色和修复工具，保留历史细节',
            tags: ['老照片修复', '照片上色', '历史保存'],
            url: 'https://www.myheritage.com/incolor',
            subcategory: 'image_postprocess',
            needsMagic: true
        },
        {
            title: 'Topaz Photo AI',
            description: '专业级照片增强工具，提供降噪、锐化和放大等功能',
            tags: ['照片增强', '专业处理', '画质提升'],
            url: 'https://www.topazlabs.com/topaz-photo-ai',
            subcategory: 'image_postprocess',
            needsMagic: true
        },
        {
            title: 'GFP-GAN',
            description: '腾讯开源的人脸照片修复技术，专注于细节还原',
            tags: ['开源技术', '人脸修复', '细节还原'],
            url: 'https://github.com/TencentARC/GFPGAN',
            subcategory: 'image_postprocess',
            needsMagic: false
        },
        {
            title: 'Remini',
            description: '手机端AI照片修复应用，轻松提升模糊照片质量',
            tags: ['移动应用', '快速修复', '用户友好'],
            url: 'https://remini.ai/',
            subcategory: 'image_postprocess',
            needsMagic: true
        },
        {
            title: 'Bigjpg',
            description: '基于神经网络的图片无损放大工具，保持清晰度',
            tags: ['无损放大', '神经网络', '细节保留'],
            url: 'https://bigjpg.com/',
            subcategory: 'image_postprocess',
            needsMagic: false
        },
        
        // 动漫与二次元创作
        {
            title: 'Waifu Labs',
            description: '个性化动漫头像生成器，可定制角色特征',
            tags: ['动漫头像', '角色定制', '二次元风格'],
            url: 'https://waifulabs.com/',
            subcategory: 'painting_creation',
            needsMagic: true
        },
        {
            title: 'NovelAI',
            description: '专为小说配图和创意写作设计的AI绘图工具',
            tags: ['小说配图', '创意写作', '定制插画'],
            url: 'https://novelai.net/',
            subcategory: 'painting_creation',
            needsMagic: true
        },
        {
            title: 'PixAI.art',
            description: '专注于亚洲风格动漫和插画创作的AI平台',
            tags: ['亚洲风格', '插画创作', '二次元艺术'],
            url: 'https://pixai.art/',
            subcategory: 'painting_creation',
            needsMagic: true
        },
        // 娱乐与趣味工具
        {
            title: 'Reface',
            description: '有趣的AI换脸应用，将自己的脸换到各种场景中',
            tags: ['AI换脸', '娱乐应用', '社交分享'],
            url: 'https://reface.app/',
            subcategory: 'portrait_custom',
            needsMagic: true
        },
        {
            title: 'Imgflip',
            description: 'AI驱动的表情包制作工具，支持自定义文字和模板',
            tags: ['表情包', '梗图制作', '社交媒体'],
            url: 'https://imgflip.com/',
            subcategory: 'portrait_custom',
            needsMagic: true
        },
        {
            title: 'Voilà AI',
            description: '将照片转换为迪士尼风格卡通头像的有趣工具',
            tags: ['卡通头像', '风格转换', '有趣效果'],
            url: 'https://voila-ai.com/',
            subcategory: 'portrait_custom',
            needsMagic: true
        },
        {
            title: 'ToonMe',
            description: '将自拍照转换为卡通化或艺术化效果的应用',
            tags: ['卡通化', '自拍美化', '艺术风格'],
            url: 'https://toonme.com/',
            subcategory: 'portrait_custom',
            needsMagic: true
        },
        
        // 服装与时尚设计
        {
            title: 'TattooAI',
            description: 'AI驱动的纹身设计工具，创建个性化纹身图案',
            tags: ['纹身设计', '个性化图案', '创意工具'],
            url: 'https://tattooai.com/',
            subcategory: 'commercial_design',
            needsMagic: true
        },
        
        // 图像编辑与处理
        {
            title: 'Picsart',
            description: '移动端全能图像编辑应用，集成AI编辑和创意工具',
            tags: ['移动编辑', '全能工具', 'AI创意'],
            url: 'https://picsart.com/',
            subcategory: 'image_postprocess',
            needsMagic: true
        },
        {
            title: 'ClipDrop',
            description: '实景捕捉和AI编辑工具，支持物体提取和场景编辑',
            tags: ['实景捕捉', '物体提取', 'AI编辑'],
            url: 'https://clipdrop.co/',
            subcategory: 'image_postprocess',
            needsMagic: true
        },
        {
            title: 'Fotor',
            description: '在线图像编辑器，集成AI美化和设计功能',
            tags: ['在线编辑', 'AI美化', '简易操作'],
            url: 'https://www.fotor.com/',
            subcategory: 'image_postprocess',
            needsMagic: true
        },
        
        // 专业场景生成
        {
            title: 'Diagram.codes',
            description: 'AI驱动的图表和流程图生成工具，适用于专业展示',
            tags: ['图表生成', '流程图', '专业展示'],
            url: 'https://diagram.codes/',
            subcategory: 'commercial_design',
            needsMagic: true
        },
        {
            title: 'Architechtures',
            description: '专业建筑渲染AI工具，生成逼真的建筑和景观效果图',
            tags: ['建筑渲染', '景观设计', '效果图'],
            url: 'https://architechtures.com/',
            subcategory: 'commercial_design',
            needsMagic: true
        },
        {
            title: 'InteriorAI',
            description: 'AI驱动的室内设计可视化工具，生成逼真的装修效果',
            tags: ['室内设计', '装修效果', '空间可视化'],
            url: 'https://interiorai.com/',
            subcategory: 'commercial_design',
            needsMagic: true
        },
        {
            title: 'NVIDIA Canvas',
            description: 'NVIDIA推出的实时场景绘制工具，将简单草图转换为实景图像',
            tags: ['实时绘制', 'NVIDIA', '场景转换'],
            url: 'https://www.nvidia.com/en-us/studio/canvas/',
            subcategory: 'commercial_design',
            needsMagic: true
        }
    ],

    // 电商专区
    ecommerce_zone: [
        // AI选品
        {
            title: '卖家精灵 SellerSprite',
            description: '亚马逊和 TikTok 卖家的老牌数据工具，支持 AI 选品决策、竞品评论痛点挖掘以及 Listing 生成与诊断。',
            tags: ['对话式选品', '评论挖掘', 'Listing诊断'],
            url: 'https://www.sellersprite.com/cn/',
            subcategory: 'ai_selection',
            needsMagic: false,
            isRecommended: true
        },
        {
            title: 'Jungle Scout',
            description: '面向亚马逊资深卖家的市场研究工具，擅长机会发现、低竞争细分扫描和未来销量趋势预测。',
            tags: ['机会发掘', '细分市场', '销量预测'],
            url: 'https://www.junglescout.com/',
            subcategory: 'ai_selection',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Sorftime',
            description: '适合寻找黑马产品的跨境数据平台，通过“隐赚指数”筛出上新时间短、评论少但销量飙升的潜力款。',
            tags: ['隐赚指数', '黑马选品', '蓝海机会'],
            url: 'https://www.sorftime.com/',
            subcategory: 'ai_selection',
            needsMagic: false,
            isRecommended: true
        },
        {
            title: 'Temu 选品助手',
            description: '围绕 Temu 平台规则的选品工具，结合实时销量、社媒热度和利润测算，帮助新手快速筛出高潜商品。',
            tags: ['Temu选品', '利润测算', '平台规则'],
            url: 'https://seller.temu.com/',
            subcategory: 'ai_selection',
            needsMagic: false
        },

        // AI模特
        // 商品摄影
        {
            title: 'Photoroom',
            description: '专业AI商品抠图与背景合成平台，支持批量处理，一键生成白底/场景图',
            tags: ['商品抠图', '白底图', '批量处理'],
            url: 'https://www.photoroom.com/',
            subcategory: 'product_photo',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Mokker AI',
            description: 'AI商品场景图生成工具，上传产品图自动匹配高质量场景背景，无需摄影棚',
            tags: ['场景图生成', '商品摄影', '免摄影棚'],
            url: 'https://mokker.ai/',
            subcategory: 'product_photo',
            needsMagic: true
        },
        {
            title: 'Flair.ai',
            description: '时尚和美妆品牌首选的AI商品场景创作工具，支持品牌场景模板定制',
            tags: ['品牌场景', '美妆电商', '模板定制'],
            url: 'https://flair.ai/',
            subcategory: 'product_photo',
            needsMagic: true
        },
        {
            title: 'Pebblely',
            description: '一键AI商品背景替换工具，40+ 内置场景主题，快速输出电商主图',
            tags: ['背景替换', '电商主图', '快速出图'],
            url: 'https://pebblely.com/',
            subcategory: 'product_photo',
            needsMagic: true
        },
        // Listing写作
        {
            title: 'Helium 10 Listing Builder',
            description: '亚马逊卖家必备工具，AI辅助Listing标题/五点/描述写作，集成关键词数据库',
            tags: ['亚马逊Listing', '五点描述', '关键词库'],
            url: 'https://www.helium10.com/tools/listing-builder/',
            subcategory: 'listing_writing',
            needsMagic: true,
            isRecommended: true
        },
        // 投放助手
        {
            title: 'AdCreative.ai',
            description: 'AI广告素材批量生成平台，输入品牌信息自动产出高点击率图文广告创意',
            tags: ['广告素材', '批量生成', '点击率优化'],
            url: 'https://www.adcreative.ai/',
            subcategory: 'ad_assistant',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: '巨量创意',
            description: '字节跳动推出的投放创意工具，支持爆款素材分析、AI文案生成和落地页优化',
            tags: ['抖音投放', '素材分析', 'AI文案'],
            url: 'https://cc.oceanengine.com/',
            subcategory: 'ad_assistant',
            needsMagic: false,
            isRecommended: true
        },
        {
            title: 'Madgicx',
            description: '专为Facebook/Meta广告优化的AI平台，自动调整受众定向、预算分配和素材轮换',
            tags: ['Meta广告', '受众定向', '预算优化'],
            url: 'https://madgicx.com/',
            subcategory: 'ad_assistant',
            needsMagic: true
        },
        {
            title: 'Pencil',
            description: 'AI预测广告素材表现的创意平台，基于历史数据生成高胜率广告变体',
            tags: ['创意预测', '广告变体', '素材测试'],
            url: 'https://www.trypencil.com/',
            subcategory: 'ad_assistant',
            needsMagic: true
        }
    ],
    
    // AI视频
    ai_video: [
        // 文本生成视频
        {
            title: 'Runway Gen-4.5',
            description: '通过文本或参考图片生成短视频，可用自然语言描述镜头与动作。',
            tags: ['文本生成视频', '创意合成', 'AI特效'],
            url: 'https://app.runwayml.com/',
            subcategory: 'text_to_video',
            needsMagic: true
        },
        {
            title: 'Pika Labs',
            description: '快速文本到视频生成平台，支持多种风格和场景，适合创作短视频',
            tags: ['文本生成视频', '风格化', '创意内容'],
            url: 'https://pika.art/',
            subcategory: 'text_to_video',
            needsMagic: true
        },
        {
            title: 'Kling AI',
            description: '快手推出的新一代AI视频生成平台，支持多模态提示、镜头控制和高一致性视频创作',
            tags: ['文本生成视频', '镜头控制', '高一致性'],
            url: 'https://kling.ai/',
            subcategory: 'text_to_video',
            needsMagic: false
        },
        {
            title: '即梦AI',
            description: '剪映推出的中文 AI 视频创作平台，支持文生视频、图生视频和短视频素材快速成片',
            tags: ['文生视频', '图生视频', '短视频创作'],
            url: 'https://jimeng.jianying.com/ai-tool/home/',
            subcategory: 'text_to_video',
            needsMagic: false
        },
        {
            title: 'InVideo AI',
            description: '在线视频制作平台，集成AI功能快速将文本脚本转化为专业视频',
            tags: ['在线编辑', '模板视频', '商业用途'],
            url: 'https://invideo.io/',
            subcategory: 'text_to_video',
            needsMagic: true
        },
        {
            title: 'Lumen5',
            description: '专注于将文章、博客等文本内容快速转换为社交媒体视频',
            tags: ['博客转视频', '社交媒体', '内容营销'],
            url: 'https://lumen5.com/',
            subcategory: 'text_to_video',
            needsMagic: true
        },
        {
            title: 'Elai.io',
            description: '只需输入文本即可生成AI数字人讲解视频，无需摄影设备',
            tags: ['数字人', '文本转视频', '教学视频'],
            url: 'https://elai.io/',
            subcategory: 'text_to_video',
            needsMagic: true
        },
        {
            title: 'DeepBrain AI',
            description: '创建逼真的AI虚拟人进行视频演讲和讲解，适合企业和教育用途',
            tags: ['虚拟人', '企业演示', '教育培训'],
            url: 'https://www.aistudios.com/',
            subcategory: 'text_to_video',
            needsMagic: true
        },
        
        // 图片生成视频
        {
            title: 'Morph Studio',
            description: '专注于将静态图像转换为流畅动画的AI平台，支持多种动画风格',
            tags: ['图像动画', '风格多样', '创意工具'],
            url: 'https://www.morphstudio.io/',
            subcategory: 'image_to_video',
            needsMagic: true
        },
        {
            title: 'LeiaPix',
            description: '将2D图像转换为沉浸式3D动画，适用于社交媒体和创意展示',
            tags: ['2D转3D', '深度效果', '动态效果'],
            url: 'https://www.leiapix.com/',
            subcategory: 'image_to_video',
            needsMagic: true
        },
        {
            title: 'Moonvalley',
            description: '将静态图片转换为沉浸式动态场景，适合艺术创作',
            tags: ['场景动画', '艺术创作', '沉浸体验'],
            url: 'https://www.moonvalley.com/',
            subcategory: 'image_to_video',
            needsMagic: true
        },
        
        // 视频编辑与增强
        {
            title: 'CapCut',
            description: '字节跳动旗下的智能视频编辑工具，支持AI剪辑、特效和一键生成',
            tags: ['智能剪辑', '一键特效', '社交媒体'],
            url: 'https://www.capcut.com/',
            subcategory: 'video_editing',
            needsMagic: true
        },
        {
            title: 'Descript',
            description: '基于文字编辑视频的平台，支持AI语音克隆和智能剪辑',
            tags: ['文字编辑', '语音克隆', '智能剪辑'],
            url: 'https://www.descript.com/',
            subcategory: 'video_editing',
            needsMagic: true
        },
        {
            title: 'HitPaw视频修复',
            description: 'AI视频修复和增强工具，可提升老旧视频画质和补帧',
            tags: ['视频修复', '画质增强', '老旧视频'],
            url: 'https://www.hitpaw.com/vikpea-video-enhancer.html',
            subcategory: 'video_editing',
            needsMagic: true
        },
        {
            title: 'Topaz Video AI',
            description: '专业级视频增强工具，支持超分辨率、降噪和慢动作优化',
            tags: ['超分辨率', '专业增强', '视频优化'],
            url: 'https://www.topazlabs.com/topaz-video-ai',
            subcategory: 'video_editing',
            needsMagic: true
        },
        {
            title: 'Runway ML',
            description: 'AI视频编辑平台，提供绿幕抠图、物体移除等高级功能',
            tags: ['绿幕抠图', '物体移除', '高级编辑'],
            url: 'https://runway.com/',
            subcategory: 'video_editing',
            needsMagic: true
        },
        {
            title: 'Vrew',
            description: '智能视频编辑工具，自动识别语音内容并生成字幕',
            tags: ['自动剪辑', '语音识别', '字幕生成'],
            url: 'https://vrew.ai/en/',
            subcategory: 'video_editing',
            needsMagic: true
        },
        {
            title: 'Pictory',
            description: '自动为视频生成字幕和摘要，适合内容创作者',
            tags: ['自动字幕', '视频摘要', '内容创作'],
            url: 'https://pictory.ai/',
            subcategory: 'video_editing',
            needsMagic: true
        },
        {
            title: 'Fliki',
            description: '将文本脚本转换为带真人旁白的视频，支持多种语言',
            tags: ['脚本转视频', '真人旁白', '多语言'],
            url: 'https://fliki.ai/',
            subcategory: 'video_editing',
            needsMagic: true
        },
        
        // AI数字人与虚拟主播
        {
            title: 'Synthesia',
            description: '生成高质量数字人视频，只需输入文本即可创建专业播报内容',
            tags: ['数字人', '专业播报', '企业视频'],
            url: 'https://www.synthesia.io/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'HeyGen',
            description: '先进的数字人视频平台，支持多语言、多形象的真人讲解视频',
            tags: ['数字分身', '营销视频', '培训内容'],
            url: 'https://www.heygen.com/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'D-ID',
            description: '将静态照片转换为会说话的数字人，适合个性化消息和营销',
            tags: ['照片动画', '数字人', '个性化视频'],
            url: 'https://www.d-id.com/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'Rephrase.ai',
            description: '企业级数字人视频生成平台，支持定制化形象和内容',
            tags: ['企业数字人', '定制化', '营销视频'],
            url: 'https://www.rephrase.ai/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'DeepBrain AI Studios',
            description: '创建超逼真AI虚拟人，可用于新闻播报、教育和营销',
            tags: ['超逼真', '多场景', '企业应用'],
            url: 'https://www.aistudios.com/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'Colossyan',
            description: '专业企业培训视频制作平台，使用AI演员创建多语言培训内容',
            tags: ['培训视频', '多语言', '企业学习'],
            url: 'https://www.colossyan.com/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'Simulai',
            description: '创建定制化数字人，适合客户服务和品牌代言',
            tags: ['定制数字人', '品牌代言', '客户服务'],
            url: 'https://www.simulai.co/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        
        // 动画与卡通生成
        {
            title: 'Animaker',
            description: '在线动画视频制作平台，支持拖拽操作和AI辅助创作',
            tags: ['动画制作', '拖拽操作', '营销视频'],
            url: 'https://www.animaker.com/',
            subcategory: 'animation',
            needsMagic: true
        },
        {
            title: 'Vyond',
            description: '专业的企业动画视频制作平台，前身为GoAnimate',
            tags: ['企业动画', '专业制作', '讲解视频'],
            url: 'https://www.vyond.com/',
            subcategory: 'animation',
            needsMagic: true
        },
        {
            title: 'Cascadeur',
            description: '基于AI物理引擎的动画制作软件，适合制作自然流畅的动作',
            tags: ['物理动画', '3D角色', '专业工具'],
            url: 'https://cascadeur.com/',
            subcategory: 'animation',
            needsMagic: true
        },
        {
            title: 'Kaiber',
            description: '艺术风格的动画生成工具，可将静态图像转为流动艺术作品',
            tags: ['艺术动画', '风格化', '创意表达'],
            url: 'https://kaiber.ai/',
            subcategory: 'animation',
            needsMagic: true
        },
        {
            title: 'Steve AI',
            description: '智能分镜和动画生成工具，适合快速创建解说和营销视频',
            tags: ['分镜生成', '快速动画', '解说视频'],
            url: 'https://www.steve.ai/',
            subcategory: 'animation',
            needsMagic: true
        },
        {
            title: 'Animated Drawings',
            description: 'Meta开发的技术，将手绘草图转换为可爱的动画角色',
            tags: ['草图动画', '角色生成', 'Meta工具'],
            url: 'https://sketch.metademolab.com/',
            subcategory: 'animation',
            needsMagic: true
        },
        
        // 短视频与社交媒体工具
        {
            title: 'Canva Video',
            description: '简易的模板化视频制作工具，集成AI功能辅助创作',
            tags: ['模板视频', '简易操作', '社交媒体'],
            url: 'https://www.canva.com/video-editor/',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'InShot AI',
            description: '移动端AI视频编辑应用，一键生成创意短视频内容',
            tags: ['移动编辑', '短视频', '一键创作'],
            url: 'https://inshot.com/',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'Vizard.ai',
            description: '自动识别视频精彩片段，生成高光剪辑，适合游戏和活动视频',
            tags: ['高光剪辑', '自动识别', '游戏视频'],
            url: 'https://www.vizard.ai/',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'OpusClip',
            description: '智能将长视频自动拆分为短视频内容，适合跨平台发布',
            tags: ['长视频拆条', '自动剪辑', '内容复用'],
            url: 'https://www.opus.pro/',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'Vimeo AI Tools',
            description: '专业视频平台提供的AI编辑和增强工具，提升创作效率',
            tags: ['专业平台', 'AI编辑', '创作辅助'],
            url: 'https://help.vimeo.com/hc/en-us/articles/22089057744657-About-Vimeo-AI',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'Supercreator',
            description: '一站式短视频创作平台，自动生成脚本并辅助剪辑',
            tags: ['脚本生成', '辅助剪辑', '短视频'],
            url: 'https://www.supercreator.com/',
            subcategory: 'short_video',
            needsMagic: true
        },
        
        // 语音驱动视频
        {
            title: 'Wav2Lip',
            description: '开源的语音驱动唇形同步模型，可让静态人像跟随音频说话',
            tags: ['开源模型', '唇形同步', '研究项目'],
            url: 'https://github.com/Rudrabha/Wav2Lip',
            subcategory: 'speech_driven',
            needsMagic: true
        },
        {
            title: 'SadTalker',
            description: '仅需一张图像和音频文件，生成说话的头像视频',
            tags: ['单图驱动', '头像生成', '开源项目'],
            url: 'https://github.com/OpenTalker/SadTalker',
            subcategory: 'speech_driven',
            needsMagic: true
        },
        {
            title: 'Synclabs',
            description: '专业的AI语音驱动视频合成平台，提供高质量的唇形同步',
            tags: ['专业平台', '高质量', '商业应用'],
            url: 'https://sync.so/',
            subcategory: 'speech_driven',
            needsMagic: true
        },
        {
            title: 'Lipdub',
            description: '自动将任何音频与视频唇形同步，支持多语言',
            tags: ['唇形同步', '多语言', '后期制作'],
            url: 'https://www.lipdub.ai/',
            subcategory: 'speech_driven',
            needsMagic: true
        },
        
        // 专业级视频生成
        {
            title: 'Luma AI',
            description: '3D场景生成和视频创作平台，支持逼真的环境和角色',
            tags: ['3D场景', '环境生成', '逼真效果'],
            url: 'https://lumalabs.ai/',
            subcategory: 'professional_video',
            needsMagic: true
        },
        {
            title: 'Lightricks',
            description: '专业创意工具套件，包含视频特效和编辑应用',
            tags: ['专业特效', '创意工具', '高端编辑'],
            url: 'https://www.lightricks.com/',
            subcategory: 'professional_video',
            needsMagic: true
        },
        
        // 开源与开发者工具
        {
            title: 'Stable Video Diffusion',
            description: 'Stability AI开发的开源视频生成模型，支持本地部署',
            tags: ['开源模型', '本地部署', '开发工具'],
            url: 'https://github.com/Stability-AI/generative-models',
            subcategory: 'opensource_tools',
            needsMagic: true
        },
        {
            title: 'Zeroscope',
            description: '开源的文本到视频生成模型，可以集成到现有应用中',
            tags: ['开源视频', '应用集成', '开发框架'],
            url: 'https://huggingface.co/cerspense/zeroscope_v2_576w',
            subcategory: 'opensource_tools',
            needsMagic: true
        },
        {
            title: 'AnimateDiff',
            description: 'Stable Diffusion扩展，将静态图像转换为动态视频',
            tags: ['SD扩展', '图像动画', '开发者工具'],
            url: 'https://github.com/guoyww/AnimateDiff',
            subcategory: 'opensource_tools',
            needsMagic: true
        },
        {
            title: 'ModelScope',
            description: '阿里巴巴开发的AI模型平台，提供视频生成和编辑能力',
            tags: ['国产平台', '阿里巴巴', '开发者工具'],
            url: 'https://modelscope.cn/models/damo/text-to-video-synthesis/summary',
            subcategory: 'opensource_tools',
            needsMagic: false
        }
    ],
    
    // AI音频
    ai_audio: [
        // AI配音/文本转语音（TTS）
        
        {
            title: 'Coqui TTS（Idiap）',
            description: 'Idiap 维护的 Coqui 开源文字转语音工具，可本地运行多语种语音合成模型。',
            tags: ["开源语音合成", "本地运行", "多语言"],
            url: 'https://github.com/idiap/coqui-ai-TTS',
            subcategory: 'tts',
            needsMagic: true
        },
        {
            title: '超级鸭',
            description: '开源AI语音生成社区，拥有5000+种声音选择',
            tags: ['开源社区', '多样声音', '语音生成'],
            url: 'https://github.com/babysor/MockingBird',
            subcategory: 'tts',
            needsMagic: true
        },
        {
            title: 'ElevenLabs',
            description: '支持28种语言(含中文)的高质量AI语音合成平台',
            tags: ['多语言支持', '高质量', '专业合成'],
            url: 'https://elevenlabs.io/',
            subcategory: 'tts',
            needsMagic: true
        },
        {
            title: '刺鸟配音',
            description: '专业AI配音工具，满足各类商业配音需求',
            tags: ['商业配音', '专业服务', '多场景'],
            url: 'https://ttsmaker.cn/',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: 'IBM Watson文字转语音',
            description: 'IBM企业级TTS服务，提供高质量语音合成解决方案',
            tags: ['企业级', 'IBM', '专业服务'],
            url: 'https://www.ibm.com/products/text-to-speech',
            subcategory: 'tts',
            needsMagic: true
        },
        {
            title: '假你',
            description: 'Deep Fake文本转语音技术，实现高度拟真的声音复制',
            tags: ['Deep Fake', '声音复制', '高度拟真'],
            url: 'https://fakeyou.com/',
            subcategory: 'tts',
            needsMagic: true
        },
        {
            title: '悦音配音',
            description: '在线语音合成工具，简单易用的配音服务',
            tags: ['在线配音', '简易操作', '快速合成'],
            url: 'https://yuyin.baidu.com/',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: '墨菲人工智能',
            description: '文本转语音工具，支持多种语言和声音风格',
            tags: ['多语言', '声音风格', 'AI合成'],
            url: 'https://www.murf.ai/',
            subcategory: 'tts',
            needsMagic: true
        },
        
        // AI音乐生成与创作
        {
            title: '太阳',
            description: '高质量AI音乐创作平台，生成专业水准的音乐作品',
            tags: ['高质量', '音乐创作', 'AI作曲'],
            url: 'https://suno.com/',
            subcategory: 'music_generation',
            needsMagic: true
        },
        {
            title: '分享',
            description: '免费AI音乐工具，每月可生成1200首原创音乐',
            tags: ['免费工具', '高额配额', '原创音乐'],
            url: 'https://soundraw.io/',
            subcategory: 'music_generation',
            needsMagic: true
        },
        {
            title: '网易天音',
            description: '网易一站式音乐创作平台，提供专业音乐制作服务',
            tags: ['网易', '一站式', '音乐创作'],
            url: 'https://tianyin.music.163.com/',
            subcategory: 'music_generation',
            needsMagic: false
        },
        {
            title: 'TME工作室',
            description: '腾讯音乐智能创作助手，赋能音乐人的AI工具',
            tags: ['腾讯音乐', '创作助手', '音乐人工具'],
            title: '稳定的音频',
            description: 'Stability AI音乐生成工具，创建高质量音乐内容',
            tags: ['Stability AI', '音乐生成', '高质量'],
            url: 'https://stability.ai/stable-audio',
            subcategory: 'music_generation',
            needsMagic: true
        },
        
        // 语音转文字（ASR）& 录音助手
        {
            title: '听脑AI',
            description: '语音录音记录助手，智能转录和分析语音内容',
            tags: ['录音助手', '智能转录', '语音分析'],
            url: 'https://www.tingnao.ai/',
            subcategory: 'speech_to_text',
            needsMagic: false
        },
        {
            title: '简单听记',
            description: '百度网盘语音转文字工具，便捷的录音转文本服务',
            tags: ['百度网盘', '语音转文字', '便捷服务'],
            url: 'https://tingji.baidu.com/embed/listennote',
            subcategory: 'speech_to_text',
            needsMagic: false
        },
        {
            title: '讯飞听见',
            description: '科大讯飞在线语音转写平台，专业的语音识别服务',
            tags: ['科大讯飞', '语音转写', '专业识别'],
            url: 'https://www.iflyrec.com/',
            subcategory: 'speech_to_text',
            needsMagic: false
        },
        {
            title: 'Deepgram',
            description: '低成本语音文本互转API，适用于开发者集成',
            tags: ['开发API', '低成本', '语音识别'],
            url: 'https://deepgram.com/',
            subcategory: 'speech_to_text',
            needsMagic: true
        },
        {
            title: '通义听悟',
            description: '阿里语音转录与分析工具，提供专业的音频内容理解',
            tags: ['阿里', '语音分析', '内容理解'],
            url: 'https://tingwu.aliyun.com/',
            subcategory: 'speech_to_text',
            needsMagic: false
        },
        
        // AI变声 & 语音处理
        {
            title: '超音变调',
            description: 'AI驱动实时语音变换工具，专业声音处理服务',
            tags: ['AI驱动', '实时变声', '专业处理'],
            url: 'https://uberduck.ai/',
            subcategory: 'voice_conversion',
            needsMagic: true
        },
        {
            title: '语音模式',
            description: '变声工具，实现多样化的声音效果处理',
            tags: ['变声效果', '多样化', '声音处理'],
            url: 'https://www.voicemod.net/',
            subcategory: 'voice_conversion',
            needsMagic: true
        },
        
        // 音频编辑 & 增强工具
        {
            title: '音剪',
            description: '喜马拉雅一站式AI音频创作平台，专业音频处理工具',
            tags: ['喜马拉雅', '音频创作', 'AI编辑'],
            url: 'https://www.ximalaya.com/yinjian',
            subcategory: 'audio_editing',
            needsMagic: false
        },
        {
            title: 'Adobe Podcast',
            description: 'AI音频录制和编辑工具，专业播客制作平台',
            tags: ['Adobe', '播客制作', 'AI编辑'],
            url: 'https://podcast.adobe.com/',
            subcategory: 'audio_editing',
            needsMagic: true
        },
        {
            title: '奥多工作室',
            description: '噪音消除与声音平衡工具，提升音频质量',
            tags: ['噪音消除', '声音平衡', '音频处理'],
            url: 'https://www.audacityteam.org/',
            subcategory: 'audio_editing',
            needsMagic: false
        },
        {
            title: '脆',
            description: 'AI噪音消除工具，提供高效的音频降噪处理',
            tags: ['噪音消除', 'AI处理', '音频清晰'],
            url: 'https://krisp.ai/',
            subcategory: 'audio_editing',
            needsMagic: true
        },
        {
            title: '拉拉尔',
            description: '人声与乐器分离工具，精准提取音频各个元素',
            tags: ['声音分离', '人声提取', '乐器分离'],
            url: 'https://www.lalal.ai/',
            subcategory: 'audio_editing',
            needsMagic: true
        },
        
        // 其他工具
        {
            title: '神奇工艺',
            description: '生成播客、有声书等多样化音频内容',
            tags: ['播客生成', '有声书', '内容创作'],
            url: 'https://www.wondercraft.ai/',
            subcategory: 'other_audio_tools',
            needsMagic: true
        },
        {
            title: '优化器AI',
            description: 'AI声音效果生成工具，创建专业音效',
            tags: ['声音效果', 'AI生成', '专业音效'],
            url: 'https://enhancer.ai/',
            subcategory: 'other_audio_tools',
            needsMagic: true
        },
        {
            title: '蓝藻AI',
            description: '云知声配音/声音克隆服务，专业语音定制',
            tags: ['云知声', '声音克隆', '专业配音'],
            url: 'https://www.unisound.com/',
            subcategory: 'other_audio_tools',
            needsMagic: false
        },
        {
            title: 'Meta Audiobox',
            description: 'Meta 的语音和音效生成研究演示，提供音频示例和体验入口。',
            tags: ["Meta", "语音生成", "音效实验"],
            url: 'https://audiobox.metademolab.com/',
            subcategory: 'other_audio_tools',
            needsMagic: true
        }
    ],
    
    // AI设计
    ai_design: [
        // 平面与电商设计
        // 电商营销工具
        
        // 海报/宣传图设计
        {
            title: '美间AI',
            description: '智能海报和提案生成工具，为营销活动提供创意设计方案',
            tags: ['智能海报', '提案生成', '营销设计'],
            url: 'https://www.meijian.com/',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: '稿定AI',
            description: '一站式设计平台，提供海报、宣传图等多种设计服务',
            tags: ['一站式', '海报设计', '宣传图'],
            url: 'https://www.gaoding.art/creation',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: '美图设计室',
            description: 'AI图像创作平台，提供智能海报设计和图片美化功能',
            tags: ['美图', 'AI创作', '图片美化'],
            url: 'https://www.designkit.cn/',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: 'Microsoft Designer',
            description: '微软推出的智能海报设计工具，支持多种风格和模板',
            tags: ['微软', '海报设计', '智能生成'],
            url: 'https://designer.microsoft.com/',
            subcategory: 'commerce_design',
            needsMagic: true
        },
        {
            title: '千图设计室AI海报',
            description: '批量生成AI海报平台，提供丰富的模板和设计元素',
            tags: ['批量生成', 'AI海报', '设计模板'],
            url: 'https://www.58pic.com/ai/poster',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        
        // LOGO与品牌设计
        {
            title: 'Logoai',
            description: '智能品牌LOGO设计工具，自动生成专业标志',
            tags: ['品牌LOGO', '智能设计', '自动生成'],
            url: 'https://www.logoai.com/',
            subcategory: 'commerce_design',
            needsMagic: true
        },
        {
            title: 'LogoliveryAI',
            description: '免费LOGO生成工具，提供多种风格和自定义选项',
            tags: ['免费', 'LOGO生成', '自定义'],
            url: 'https://logolivery.ai/',
            subcategory: 'commerce_design',
            needsMagic: true
        },
        {
            title: 'Logo Diffusion',
            description: '基于AI扩散模型的标志生成工具，创建独特的品牌标识',
            tags: ['扩散模型', '标志生成', '独特设计'],
            url: 'https://logodiffusion.com/',
            subcategory: 'commerce_design',
            needsMagic: true
        },
        
        // UI/UX与原型设计
        // 界面设计工具
        {
            title: 'Figma AI',
            description: 'Figma原生AI功能，提升界面设计效率和创意表达',
            tags: ['Figma', '原生AI', 'UI设计'],
            url: 'https://www.figma.com/ai',
            subcategory: 'ui_ux',
            needsMagic: true
        },
        {
            title: 'MasterGo AI',
            description: '国产UI设计助手，帮助设计师快速创建用户界面',
            tags: ['国产', 'UI设计', '设计助手'],
            url: 'https://mastergo.com/ai',
            subcategory: 'ui_ux',
            needsMagic: false
        },
        {
            title: 'Uizard',
            description: '网页和App原型快速生成工具，支持草图转原型',
            tags: ['原型生成', '草图转换', '快速设计'],
            url: 'https://uizard.io/',
            subcategory: 'ui_ux',
            needsMagic: true
        },
        {
            title: 'Kite',
            description: 'AI 智能体（Claude、ChatGPT、Cursor、Codex）通过 MCP 直接绘制可编辑图层的协作设计工具，可导出 HTML / React / Tailwind',
            tags: ['UI设计', 'MCP', '团队协作'],
            url: 'https://kite.new/',
            subcategory: 'ui_ux',
            needsMagic: true
        },
        {
            title: 'Google Stitch',
            description: 'Google 的界面设计工具，可从文字或参考图片生成和迭代 UI。',
            tags: ['高保真', '原型设计', '文本生成'],
            url: 'https://stitch.google.com/',
            subcategory: 'ui_ux',
            needsMagic: true
        },
        
        // 原型与协作
        {
            title: '墨刀AI',
            description: '产品原型设计工具，支持团队协作和快速迭代',
            tags: ['产品原型', '团队协作', '快速迭代'],
            url: 'https://modao.cc/ai',
            subcategory: 'ui_ux',
            needsMagic: false
        },
        {
            title: 'FigJam AI',
            description: 'Figma白板协作工具，集成AI功能提升团队创意效率',
            tags: ['白板协作', 'Figma', '团队创意'],
            url: 'https://www.figma.com/figjam/',
            subcategory: 'ui_ux',
            needsMagic: true
        },
        {
            title: '即时AI',
            description: '文本生成可编辑原型的工具，支持快速原型设计',
            tags: ['文本生成', '可编辑原型', '快速设计'],
            url: 'https://js.design/ai',
            subcategory: 'ui_ux',
            needsMagic: false
        },
        {
            title: 'Fabrie AI',
            description: '白板协作工具，集成AI助手提升团队设计效率',
            tags: ['白板协作', 'AI助手', '团队设计'],
            url: 'https://www.fabrie.cn/',
            subcategory: 'ui_ux',
            needsMagic: false
        },
        
        // 插画与矢量设计
        // 插画生成
        {
            title: 'Recraft AI',
            description: '生成矢量、3D和图标的智能设计工具，提供多样化创意素材',
            tags: ['矢量生成', '3D设计', '图标创作'],
            url: 'https://www.recraft.ai/',
            subcategory: 'illustration',
            needsMagic: true
        },
        {
            title: 'Ilus AI',
            description: '风格化插画生成工具，创建独特艺术风格的插图',
            tags: ['风格化', '插画生成', '艺术风格'],
            url: 'https://ilus.ai/',
            subcategory: 'illustration',
            needsMagic: true
        },
        {
            title: 'Pictographic',
            description: 'AI插图资源库，提供多样化的插画和图形素材',
            tags: ['资源库', '插画素材', '多样化'],
            url: 'https://pictographic.ai/',
            subcategory: 'illustration',
            needsMagic: true
        },
        {
            title: 'Illustroke',
            description: 'SVG矢量插画生成工具，创建可缩放的矢量图形',
            tags: ['SVG', '矢量插画', '可缩放'],
            url: 'https://illustroke.com/',
            subcategory: 'illustration',
            needsMagic: true
        },
        {
            title: 'illostrationAI',
            description: '多风格插画生成平台，支持各种艺术风格的创作',
            tags: ['多风格', '插画生成', '艺术创作'],
            url: 'https://illostration.com/',
            subcategory: 'illustration',
            needsMagic: true
        },
        
        // 矢量与图标
        {
            title: 'Vectorizer.AI',
            description: '位图转矢量工具，将像素图像转换为可缩放的矢量格式',
            tags: ['位图转矢量', '图像转换', '可缩放'],
            url: 'https://vectorizer.ai/',
            subcategory: 'illustration',
            needsMagic: true
        },
        {
            title: 'Appicons AI',
            description: '精美图标设计工具，为应用和网站创建专业图标',
            tags: ['精美图标', '应用设计', '专业图标'],
            url: 'https://appicons.ai/',
            subcategory: 'illustration',
            needsMagic: true
        },
        
        // 3D与模型设计
        // 3D建模与渲染
        {
            title: 'Spline AI',
            description: '3D物体和动画生成工具，创建交互式3D内容',
            tags: ['3D物体', '动画生成', '交互式'],
            url: 'https://spline.design/',
            subcategory: 'model_design',
            needsMagic: true
        },
        {
            title: 'Realibox AI',
            description: '草图转3D渲染图工具，快速将2D设计转为3D展示',
            tags: ['草图转3D', '渲染图', '快速转换'],
            url: 'https://www.realibox.com/',
            subcategory: 'model_design',
            needsMagic: false
        },
        {
            title: 'Luma AI',
            description: '3D捕捉与建模平台，将现实物体转化为数字模型',
            tags: ['3D捕捉', '建模', '数字模型'],
            url: 'https://lumalabs.ai/',
            subcategory: 'model_design',
            needsMagic: true
        },
        
        // 建筑与家居设计
        {
            title: '酷家乐AI',
            description: '智能家居设计平台，提供一站式室内设计解决方案',
            tags: ['家居设计', '室内设计', '一站式'],
            url: 'https://www.kujiale.com/festatic/IntelligentDesign?from=webnav',
            subcategory: 'model_design',
            needsMagic: false
        },
        {
            title: '模袋云AI',
            description: '建筑和景观设计平台，提供专业的设计辅助工具',
            tags: ['建筑设计', '景观设计', '专业工具'],
            url: 'https://www.modaiyun.com/',
            subcategory: 'model_design',
            needsMagic: false
        },
        {
            title: 'Collov AI',
            description: '室内家居设计生成工具，创建个性化家居空间',
            tags: ['室内设计', '家居生成', '个性化'],
            url: 'https://collov.com/',
            subcategory: 'model_design',
            needsMagic: true
        },
        {
            title: 'Vizcom',
            description: '手绘图转产品设计图工具，将概念草图转为精细渲染',
            tags: ['手绘转换', '产品设计', '精细渲染'],
            url: 'https://vizcom.com/',
            subcategory: 'model_design',
            needsMagic: true
        },
        
        // 辅助设计工具
        // 图片编辑优化
        {
            title: '笔魂AI',
            description: '智能抠图和无损放大工具，提升图片编辑效率',
            tags: ['抠图', '无损放大', '图片编辑'],
            url: 'https://bishen.ink/',
            subcategory: 'assistant_tools',
            needsMagic: false
        },
        {
            title: '笔格设计',
            description: '智能消除和文生图工具，简化图像编辑流程',
            tags: ['智能消除', '文生图', '编辑流程'],
            url: 'https://bigesj.com/',
            subcategory: 'assistant_tools',
            needsMagic: false
        },
        
        // 色彩与排版
        {
            title: 'Eva Design System',
            description: '智能色彩生成系统，为设计提供和谐的色彩方案',
            tags: ['色彩生成', '设计系统', '和谐方案'],
            url: 'https://colors.eva.design/',
            subcategory: 'assistant_tools',
            needsMagic: false
        },
        {
            title: 'Khroma',
            description: 'AI调色盘工具，学习用户偏好生成个性化配色',
            tags: ['AI调色', '个性化', '用户偏好'],
            url: 'https://www.khroma.co/',
            subcategory: 'assistant_tools',
            needsMagic: true
        },
        {
            title: 'ColorMagic',
            description: '调色板生成工具，创建协调一致的色彩组合',
            tags: ['调色板', '色彩组合', '协调一致'],
            url: 'https://colormagic.app/',
            subcategory: 'assistant_tools',
            needsMagic: true
        },
        {
            title: '135 AI排版',
            description: '公众号图文排版工具，提供智能化的内容布局服务',
            tags: ['公众号', '图文排版', '内容布局'],
            url: 'https://www.135editor.com/ai_editor',
            subcategory: 'assistant_tools',
            needsMagic: false
        },
        
        // 素材与资源库
        {
            title: '千图网',
            description: '设计素材平台，提供丰富的AI生成和设计资源',
            tags: ['设计素材', '资源平台', 'AI生成'],
            url: 'https://www.58pic.com/',
            subcategory: 'assistant_tools',
            needsMagic: false
        },
        {
            title: '包图网AI素材库',
            description: 'AI生成素材库，提供多样化的设计元素和模板',
            tags: ['AI素材', '设计元素', '模板库'],
            url: 'https://ibaotu.com/',
            subcategory: 'assistant_tools',
            needsMagic: false
        },
        
        // 其他专项工具
        // 动效设计
        {
            title: 'Framer AI',
            description: '基于AI的网站设计和动效创作平台，支持快速原型开发',
            tags: ['网站设计', '动效创作', '原型开发'],
            url: 'https://www.framer.com/ai',
            subcategory: 'special_tools',
            needsMagic: true
        },
        
        // 网站开发
        {
            title: 'Wegic',
            description: 'AI建站平台，通过文本描述快速创建专业网站',
            tags: ['AI建站', '文本描述', '快速创建'],
            url: 'https://wegic.com/',
            subcategory: 'special_tools',
            needsMagic: false
        },
        
        // 设计灵感
        
        // Low-Code设计
    ],
    
    // AI编程
    ai_coding: [
        // 代码生成与补全
        {
            title: 'ChatGPT',
            description: 'OpenAI 的通用 AI 助手，适合代码生成、报错解释、重构建议与脚本编写',
            tags: ['OpenAI', '代码生成', '调试助手'],
            url: 'https://chatgpt.com/',
            subcategory: 'code_generation',
            needsMagic: true
        },
        {
            title: 'Gemini',
            description: 'Google 的多模态 AI 助手，可用于代码生成、问题排查与 API 调用示例编写',
            tags: ['Google', '代码生成', '多模态助手'],
            url: 'https://gemini.google.com/',
            subcategory: 'code_generation',
            needsMagic: true
        },
        {
            title: 'GitHub Copilot',
            description: 'GitHub推出的AI编程助手，提供代码补全和生成功能',
            tags: ['GitHub', '代码补全', 'AI助手'],
            url: 'https://github.com/features/copilot',
            subcategory: 'code_generation',
            needsMagic: true
        },
        {
            title: 'Tabnine',
            description: '基于AI的代码智能补全工具，提高编程效率',
            tags: ['代码补全', '智能提示', '编程效率'],
            url: 'https://www.tabnine.com/',
            subcategory: 'code_generation',
            needsMagic: true
        },
        {
            title: 'Amazon Q Developer',
            description: '亚马逊面向开发者的AI编程助手，整合代码补全、问答和工作流辅助能力',
            tags: ['亚马逊', '代码生成', '开发者AI'],
            url: 'https://aws.amazon.com/q/developer/',
            subcategory: 'code_generation',
            needsMagic: true
        },
        {
            title: 'aiXcoder',
            description: '自然语言到代码生成工具，支持多种编程语言',
            tags: ['代码生成', '自然语言', '多语言支持'],
            url: 'https://www.aixcoder.com/',
            subcategory: 'code_generation',
            needsMagic: false
        },
        {
            title: '通义灵码',
            description: '阿里推出的智能编程助手，支持代码生成与补全',
            tags: ['阿里', '代码生成', '智能编程'],
            url: 'https://lingma.aliyun.com/lingma',
            subcategory: 'code_generation',
            needsMagic: false
        },
        {
            title: '豆包MarsCode',
            description: '字节跳动推出的AI编程助手，提供代码生成与补全功能',
            tags: ['字节跳动', '代码生成', 'AI编程'],
            url: 'https://www.doubao.com/marscode',
            subcategory: 'code_generation',
            needsMagic: false
        },
        
        // 全栈/端到端开发
        {
            title: 'Devin',
            description: '首个全自主AI工程师，能独立完成软件开发项目',
            tags: ['AI工程师', '全栈开发', '自主编程'],
            url: 'https://devin.ai/',
            subcategory: 'fullstack_dev',
            needsMagic: true
        },
        {
            title: 'Bolt.new',
            description: 'StackBlitz推出的全栈开发工具，简化Web应用创建过程',
            tags: ['全栈工具', 'Web开发', 'StackBlitz'],
            url: 'https://bolt.new/',
            subcategory: 'fullstack_dev',
            needsMagic: true
        },
        {
            title: 'v0',
            description: 'Vercel推出的AI全栈应用生成平台，可通过提示词快速创建、编辑并发布应用',
            tags: ['Vercel', '全栈生成', '提示式开发'],
            url: 'https://v0.app/',
            subcategory: 'fullstack_dev',
            needsMagic: true
        },
        {
            title: 'CodeBuddy',
            description: '面向企业与服务行业的软件构建平台，结合 AI 工作室、专家交付与 StarterKit 快速搭建业务系统',
            tags: ['业务系统', '全栈开发', 'AI工作室'],
            url: 'https://www.codebuddy.com/',
            subcategory: 'fullstack_dev',
            needsMagic: true
        },
        {
            title: 'MarsX',
            description: '无代码开发平台，通过AI快速构建应用',
            tags: ['无代码开发', '应用构建', 'AI辅助'],
            url: 'https://marsx.dev/',
            subcategory: 'fullstack_dev',
            needsMagic: false
        },
        
        // 设计转代码
        {
            title: 'Sketch2Code',
            description: '微软开发的工具，将手绘草图转换为HTML代码',
            tags: ['微软', '草图转HTML', '设计转代码'],
            url: 'https://learn.microsoft.com/en-us/shows/ai-show/sketch2code',
            subcategory: 'design_to_code',
            needsMagic: true
        },
        {
            title: 'Imgcook',
            description: '阿里开发的设计稿转前端代码工具，提高开发效率',
            tags: ['阿里', '设计转代码', '前端开发'],
            url: 'https://www.imgcook.com/',
            subcategory: 'design_to_code',
            needsMagic: false
        },
        {
            title: 'Locofy',
            description: '将Figma或Sketch设计稿转换为代码的平台',
            tags: ['Figma', 'Sketch', '代码转换'],
            url: 'https://www.locofy.ai/',
            subcategory: 'design_to_code',
            needsMagic: true
        },
        
        // 代码审查与测试
        {
            title: 'CodeRabbit',
            description: 'AI驱动的代码审查工具，提高代码质量',
            tags: ['代码审查', 'AI分析', '质量控制'],
            url: 'https://coderabbit.ai/',
            subcategory: 'code_review',
            needsMagic: true
        },
        {
            title: 'Qodo',
            description: '面向复杂代码库的AI代码审查与治理平台，支持规则驱动审查和问题修复',
            tags: ['代码审查', '代码治理', 'AI分析'],
            url: 'https://www.qodo.ai/',
            subcategory: 'code_review',
            needsMagic: true
        },
        {
            title: 'Codiga',
            description: '实时代码分析工具，提供即时的代码质量反馈',
            tags: ['实时分析', '代码质量', '即时反馈'],
            url: 'https://www.codiga.io/',
            subcategory: 'code_review',
            needsMagic: true
        },
        
        // 自然语言交互开发
        {
            title: 'Cline',
            description: '驻留在编辑器和终端中的AI编程代理，可读写文件、运行命令并在批准后执行复杂开发任务',
            tags: ['AI代理', '编辑器插件', '终端协作'],
            url: 'https://cline.bot/',
            subcategory: 'natural_language_dev',
            needsMagic: true
        },
        {
            title: 'Aider',
            description: '终端中的AI结对编程工具，支持代码库映射、Git集成和自动测试修复',
            tags: ['终端编程', 'Git集成', '结对开发'],
            url: 'https://aider.chat/',
            subcategory: 'natural_language_dev',
            needsMagic: true
        },
        {
            title: 'Plandex',
            description: '终端AI编程引擎，通过自然语言执行开发任务',
            tags: ['终端编程', 'AI引擎', '自然语言'],
            url: 'https://www.plandex.dev/',
            subcategory: 'natural_language_dev',
            needsMagic: true
        },
        {
            title: 'HeyCLI',
            description: '将自然语言转换为命令行指令的AI工具',
            tags: ['命令行', '自然语言', 'AI转换'],
            url: 'https://www.heycli.com/',
            subcategory: 'natural_language_dev',
            needsMagic: true
        },

        // 自动化工作流
        {
            title: 'Make',
            description: '可视化自动化工作流平台，适合串联爬虫、表格、数据库和第三方 API 做批量数据处理',
            tags: ['自动化工作流', '数据处理', '无代码集成'],
            url: 'https://www.make.com/',
            subcategory: 'automation_workflow',
            needsMagic: true
        },
        {
            title: 'n8n',
            description: '开源自动化编排平台，适合自托管爬虫流程、数据清洗、Webhook 触发和多系统同步',
            tags: ['开源自动化', '工作流编排', 'Webhook'],
            url: 'https://n8n.io/',
            subcategory: 'automation_workflow',
            needsMagic: true
        },
        {
            title: 'OpenClaw',
            description: '面向 AI Agent 的自动化工作流平台，适合做网页操作、自动爬虫、任务流转与结构化数据采集',
            tags: ['AI Agent', '自动爬虫', '工作流自动化'],
            url: 'https://openclaw.ai/',
            subcategory: 'automation_workflow',
            needsMagic: true
        },
        
        // 低代码/无代码平台
        {
            title: 'Hocoos',
            description: 'AI驱动的网站构建平台，快速创建专业网站',
            tags: ['AI建站', '网站构建', '专业设计'],
            url: 'https://www.hocoos.com/',
            subcategory: 'low_code',
            needsMagic: true
        },
        {
            title: 'Meoo',
            description: 'AI 应用创建平台，可将 Excel、PPT、简历等内容快速生成 H5、网页应用和可交互演示页面',
            tags: ['AI应用生成', 'H5创建', '可视化演示'],
            url: 'https://meoo.com/',
            subcategory: 'low_code',
            needsMagic: false
        },
        
        // 云端IDE与编辑器
        {
            title: 'Cursor',
            description: 'AI驱动的代码编辑器，提供智能编码辅助',
            tags: ['AI编辑器', '代码智能', '编程辅助'],
            url: 'https://cursor.com/',
            subcategory: 'cloud_ide',
            needsMagic: true
        },
        {
            title: 'Codex',
            description: 'OpenAI 推出的云端代码代理与编程工作区，可执行任务、生成补丁并协助开发流程',
            tags: ['OpenAI', '代码代理', '云端工作区'],
            url: 'https://chatgpt.com/codex',
            subcategory: 'cloud_ide',
            needsMagic: true
        },
        {
            title: 'Devin Desktop',
            description: '用于管理本地和云端编程代理、跟踪任务与审查改动的桌面应用。',
            tags: ['AI编辑器', '代理式编程', '代码库理解'],
            url: 'https://devin.ai/desktop',
            subcategory: 'cloud_ide',
            needsMagic: true
        },
        {
            title: 'Google AI Studio',
            description: 'Google 推荐的网页原型开发入口，可使用 Gemini 构建和迭代应用。',
            tags: ['谷歌', '云端IDE', '多语言支持'],
            url: 'https://aistudio.google.com/',
            subcategory: 'cloud_ide',
            needsMagic: true
        },
        {
            title: 'Replit Agent',
            description: 'Replit推出的AI编程助手，帮助开发者快速编码',
            tags: ['Replit', 'AI助手', '快速编码'],
            url: 'https://replit.com/ai',
            subcategory: 'cloud_ide',
            needsMagic: true
        },
        {
            title: 'Qoder',
            description: '面向真实软件开发的 Agentic IDE，提供智能体协作编码、Repo Wiki、CLI 与 JetBrains 插件能力',
            tags: ['Agentic IDE', '代码库理解', '智能体编程'],
            url: 'https://qoder.com/',
            subcategory: 'cloud_ide',
            needsMagic: true
        }
    ],
    
    // AI提示词
    ai_prompts: [
        // 综合提示词平台
        {
            title: 'PromptPerfect',
            description: '专业提示词优化工具，支持多模型（如GPT、Stable Diffusion等），可自动优化提示结构。',
            tags: ['提示词优化', '多模型支持', '自动优化'],
            url: 'https://promptperfect.jina.ai',
            subcategory: 'prompt_platforms',
            needsMagic: true
        },
        {
            title: 'PromptHero',
            description: '专注于AI生成内容的提示词库，尤其适合Stable Diffusion和Midjourney用户。',
            tags: ['AI生成内容', 'Stable Diffusion', 'Midjourney'],
            url: 'https://prompthero.com',
            subcategory: 'prompt_platforms',
            needsMagic: true
        },
        
        // Stable Diffusion专属工具
        {
            title: 'Stable Diffusion Prompt Book',
            description: '官方提示词手册，包含风格模板和参数详解。',
            tags: ['提示词手册', '风格模板', '参数详解'],
            url: 'https://github.com/search?q=Stable-Diffusion-Prompt-Book',
            subcategory: 'sd_tools',
            needsMagic: true
        },
        {
            title: 'PublicPrompts',
            description: '开源提示词库，适合艺术创作和设计灵感。',
            tags: ['开源提示词', '艺术创作', '设计灵感'],
            url: 'https://publicprompts.art',
            subcategory: 'sd_tools',
            needsMagic: true
        },
        
        // ChatGPT提示优化
        {
            title: 'Awesome ChatGPT Prompts',
            description: 'GitHub开源项目，提供可直接复用的对话模板（如模拟Linux终端、编剧助手）。',
            tags: ['开源项目', '对话模板', 'ChatGPT'],
            url: 'https://github.com/search?q=awesome-chatgpt-prompts',
            subcategory: 'chatgpt_prompts',
            needsMagic: true
        },
        {
            title: 'AIPRM',
            description: 'ChatGPT浏览器插件，内置数百个预设提示词（SEO、数据分析等）。',
            tags: ['浏览器插件', '预设提示词', 'SEO'],
            url: 'https://aiprm.com',
            subcategory: 'chatgpt_prompts',
            needsMagic: true
        },
        
        // 可视化提示工具
        {
            title: 'Generrated',
            description: 'DALL·E 2提示词设计指南，附案例解析。',
            tags: ['DALL·E 2', '提示词设计', '案例解析'],
            url: 'https://generrated.com/',
            subcategory: 'visual_tools',
            needsMagic: true
        },
        
        // 中文特色资源
        {
            title: 'AI Short（ChatGPT Shortcut）',
            description: '按写作、营销、编程等场景查找和复制提示词的双语资源库。',
            tags: ["提示词库", "中文资源", "快捷复制"],
            url: 'https://www.aishort.top/',
            subcategory: 'chinese_resources',
            needsMagic: false
        },
        {
            title: 'LangGPT',
            description: '针对中文大模型的提示工程技术指南，含角色设定模板。',
            tags: ['中文大模型', '提示工程', '角色设定'],
            url: 'https://github.com/search?q=LangGPT',
            subcategory: 'chinese_resources',
            needsMagic: true
        },
        
        // 其他实用工具
        {
            title: 'Snack Prompt',
            description: '极简提示词生成器，适合快速实验。',
            tags: ['极简生成器', '快速实验', '提示词'],
            url: 'https://snackprompt.com',
            subcategory: 'other_tools',
            needsMagic: true
        },
        {
            title: 'PromptVine',
            description: '用户共享的提示词库，含评分系统。',
            tags: ['用户共享', '提示词库', '评分系统'],
            url: 'https://promptvine.com',
            subcategory: 'other_tools',
            needsMagic: true
        }
    ],
    
    // AI搜索
    ai_search: [
        {
            title: 'Perplexity AI',
            description: '提供具有引用来源的AI搜索结果，能针对复杂问题给出详细解释',
            descriptionEn: 'Provides AI search results with cited sources, offering detailed explanations for complex questions',
            tags: ['AI搜索', '智能问答', '引用溯源'],
            url: 'https://www.perplexity.ai/',
            subcategory: 'general_search',
            isRecommended: true
        },
        {
            title: 'NotebookLM',
            description: 'Google推出的来源驱动研究助手，可基于上传资料生成摘要、引用回答和音频概览',
            descriptionEn: 'Google source-grounded research assistant for summaries, cited answers and audio overviews from uploaded materials',
            tags: ['研究助手', '引用回答', '音频概览'],
            url: 'https://notebooklm.google/',
            subcategory: 'academic_search',
            isRecommended: true
        }
    ],
    resources: [
        {
            title: 'Hugging Face',
            titleEn: 'Hugging Face',
            description: '全球主流的开源 AI 模型、数据集与 Spaces 社区，适合查找模型资源、案例和工具集合。',
            descriptionEn: 'Leading open AI community for models, datasets and Spaces, ideal for discovering reusable resources and examples.',
            tags: ['模型社区', '数据集库', 'Spaces应用'],
            tagsEn: ['Model Hub', 'Datasets', 'Spaces Apps'],
            url: 'https://huggingface.co/',
            subcategory: 'resource_model_community',
            isRecommended: true
        },
        {
            title: 'ModelScope 魔搭社区',
            titleEn: 'ModelScope',
            description: '国内头部开源模型社区，2026 年持续更新模型库、数据集、创空间与 MCP 广场，适合进入中文模型生态。',
            descriptionEn: 'Major open model community with active 2026 updates across models, datasets, studios, and MCP marketplace for the Chinese AI ecosystem.',
            tags: ['模型社区', '数据集', '创空间'],
            tagsEn: ['Model Community', 'Datasets', 'Studios'],
            url: 'https://modelscope.cn/',
            subcategory: 'resource_model_community',
            isRecommended: true
        },
        {
            title: 'Civitai',
            titleEn: 'Civitai',
            description: '面向生成式视觉创作者的模型与作品社区，2026 年仍有活跃榜单、模型页和创作者生态，适合跟踪图像模型趋势。',
            descriptionEn: 'Active generative visual model community with 2026 leaderboards, model pages, and creator ecosystem for tracking image-model trends.',
            tags: ['模型社区', '热门模型榜', 'LoRA模型'],
            tagsEn: ['Model Community', 'Top Models', 'LoRA Models'],
            url: 'https://civitai.com/',
            subcategory: 'resource_model_community',
            isRecommended: true
        },
        {
            title: 'Hugging Face Open LLM Leaderboard',
            titleEn: 'Hugging Face Open LLM Leaderboard',
            description: '开源大模型最核心的公开排行榜入口之一，适合跟踪 Qwen、DeepSeek、GLM 等开源模型的评测结果与提交动态。',
            descriptionEn: 'One of the central public ranking hubs for open LLMs, useful for tracking evaluation results and submission activity for Qwen, DeepSeek, GLM, and more.',
            tags: ['开源模型榜', '评测提交', '模型对比'],
            tagsEn: ['Open LLM Rankings', 'Eval Submissions', 'Model Comparison'],
            url: 'https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard',
            subcategory: 'resource_model_community',
            isRecommended: true
        },
        {
            title: 'OpenCompass 司南评测',
            titleEn: 'OpenCompass',
            description: '国内最权威的大模型评测入口之一，2026 年覆盖通用大模型、科学智能、安全、具身和金融医疗等垂类榜单。',
            descriptionEn: 'One of the most authoritative Chinese evaluation hubs, covering 2026 leaderboards for general LLMs, science, safety, embodied AI, and vertical domains.',
            tags: ['中文评测', '科学评测', '大模型榜'],
            tagsEn: ['Chinese Evaluations', 'Science Benchmarks', 'Model Rankings'],
            url: 'https://opencompass.org.cn/home',
            subcategory: 'resource_model_community',
            isRecommended: true
        },
        {
            title: 'Kaggle Benchmarks',
            titleEn: 'Kaggle Benchmarks',
            description: '全球最大数据科学社区之一，2026 年已形成公开 Benchmarks、竞赛和长帖讨论三位一体的 AI 评测生态。',
            descriptionEn: 'One of the largest data science communities, with a 2026 AI evaluation ecosystem built around public benchmarks, competitions, and long-form discussions.',
            tags: ['公开基准', '数据竞赛', '长帖讨论'],
            tagsEn: ['Public Benchmarks', 'Data Competitions', 'Long-form Discussions'],
            url: 'https://www.kaggle.com/benchmarks',
            subcategory: 'resource_model_community',
            isRecommended: true
        },
        {
            title: 'V2EX OpenAI 节点',
            titleEn: 'V2EX OpenAI Node',
            description: '国内活跃极客社区中的 AI 讨论入口，持续有模型 API 对比、Codex 自动化、出海业务和实战工具经验帖。',
            descriptionEn: 'Active Chinese geek-community entry for AI discussions, with ongoing threads on model APIs, Codex automation, global products, and practical tooling.',
            tags: ['中文论坛', '模型API', '实战讨论'],
            tagsEn: ['Chinese Forum', 'Model APIs', 'Practical Discussions'],
            url: 'https://www.v2ex.com/go/openai',
            subcategory: 'resource_model_community',
            isRecommended: true
        },
        {
            title: 'Reddit AI Subreddits',
            titleEn: 'Reddit AI Subreddits',
            description: '适合跟踪本地模型、ChatGPT 应用、AGI 讨论和提示词优化的社区入口，代表性版块包括 r/LocalLLaMA、r/ChatGPT、r/Singularity 和 r/PromptEngineering。',
            descriptionEn: 'Community entry point for local models, ChatGPT usage, AGI discussion, and prompt optimization, with key hubs like r/LocalLLaMA, r/ChatGPT, r/Singularity, and r/PromptEngineering.',
            tags: ['Subreddit社区', '本地模型', '提示词讨论'],
            tagsEn: ['Subreddit Hubs', 'Local Models', 'Prompt Discussions'],
            url: 'https://www.reddit.com/r/LocalLLaMA/',
            subcategory: 'resource_model_community',
            isRecommended: true
        },
        {
            title: 'Discord AI Communities',
            titleEn: 'Discord AI Communities',
            description: '许多主流 AI 项目的实时讨论都在 Discord 上进行，适合进入 Midjourney、Anthropic 或 Vibe Coding 等项目的即时答疑与反馈社群。',
            descriptionEn: 'Many major AI projects run real-time discussion on Discord, making it a practical entry for live support and feedback communities around tools like Midjourney, Anthropic, and vibe-coding projects.',
            tags: ['Discord群组', '实时答疑', '项目社群'],
            tagsEn: ['Discord Servers', 'Live Support', 'Project Communities'],
            url: 'https://discord.com/community',
            subcategory: 'resource_model_community',
            isRecommended: true
        },
        {
            title: 'Exploding Topics',
            titleEn: 'Exploding Topics',
            description: '面向 2026 趋势研究的产品与赛道发现平台，可提前捕捉需求增长、竞品方向和电商机会。',
            descriptionEn: 'Trend discovery platform useful in 2026 for spotting emerging demand, product directions, competitor moves, and ecommerce opportunities.',
            tags: ['需求增长', '新兴赛道', '市场情报'],
            tagsEn: ['Demand Growth', 'Emerging Niches', 'Market Intelligence'],
            url: 'https://explodingtopics.com/',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'Similarweb',
            titleEn: 'Similarweb',
            description: '2026 年强化了 AI Search 与 AEO 能力的市场情报平台，适合做流量、竞品、需求与渠道研究。',
            descriptionEn: 'Market intelligence platform with expanded 2026 AI Search and AEO capabilities for traffic, competitor, demand, and channel research.',
            tags: ['流量分析', '竞品网站', '需求趋势'],
            tagsEn: ['Traffic Analysis', 'Competitor Sites', 'Demand Trends'],
            url: 'https://www.similarweb.com/',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'Crunchbase',
            titleEn: 'Crunchbase',
            description: '适合追踪 2026 年创业公司、融资、增长预测和产品动向的公司情报数据库，可用于赛道扫描与竞品研究。',
            descriptionEn: 'Company intelligence database for tracking 2026 startups, funding, growth predictions, and product moves across sectors.',
            tags: ['融资数据库', '创业公司', '公司情报'],
            tagsEn: ['Funding Database', 'Startups', 'Company Intelligence'],
            url: 'https://www.crunchbase.com/',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'LiveCodeBench',
            titleEn: 'LiveCodeBench',
            description: '持续收集 LeetCode、AtCoder、Codeforces 新题的无污染代码评测榜，适合检验模型真实编程能力。',
            descriptionEn: 'Contamination-resistant coding benchmark that continuously collects fresh problems from LeetCode, AtCoder, and Codeforces.',
            tags: ['代码评测榜', '新题测试', '无污染'],
            tagsEn: ['Coding Rankings', 'Fresh Problems', 'Contamination-Free'],
            url: 'https://livecodebench.github.io/leaderboard.html',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'SWE-bench Verified',
            titleEn: 'SWE-bench Verified',
            description: '软件工程能力的核心公开榜单之一，2026 年持续更新真实 GitHub Issue 修复结果，可直接比较模型解决率与成本。',
            descriptionEn: 'Core public benchmark for software engineering agents, with continuously updated 2026 results on resolving real GitHub issues.',
            tags: ['代码', '真实任务', 'Agent'],
            tagsEn: ['Coding', 'Real Tasks', 'Agents'],
            url: 'https://www.swebench.com/verified.html',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'GPQA Benchmark',
            titleEn: 'GPQA Benchmark',
            description: '博士级物理、化学、生物推理 benchmark 的官方公开入口，适合判断模型在高难科学问答上的上限。',
            descriptionEn: 'Canonical public entry for the PhD-level physics, chemistry, and biology reasoning benchmark used to judge top-end scientific reasoning.',
            tags: ['科学', '推理', '高难问答'],
            tagsEn: ['Science', 'Reasoning', 'Hard QA'],
            url: 'https://github.com/idavidrein/gpqa',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'Vellum AI Leaderboard',
            titleEn: 'Vellum AI Leaderboard',
            description: '商业部署视角很强的模型榜单，2026 年同时比较 GPQA、SWE Bench、价格、延迟、速度和上下文窗口。',
            descriptionEn: 'Deployment-oriented model leaderboard that compares 2026 benchmark scores alongside price, latency, speed, and context windows.',
            tags: ['商业部署', '成本', '延迟'],
            tagsEn: ['Deployment', 'Cost', 'Latency'],
            url: 'https://www.vellum.ai/llm-leaderboard',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'ARC Prize',
            titleEn: 'ARC Prize',
            description: 'ARC-AGI 系列与 ARC Prize 2026 的官方入口，主打低噪声、高信号的通用智能与流体推理评测。',
            descriptionEn: 'Official home for ARC-AGI and ARC Prize 2026, focused on low-noise, high-signal evaluation of general intelligence and fluid reasoning.',
            tags: ['科学', '推理', 'AGI'],
            tagsEn: ['Science', 'Reasoning', 'AGI'],
            url: 'https://arcprize.org/leaderboard',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'Humanity\'s Last Exam',
            titleEn: 'Humanity\'s Last Exam',
            description: '前沿学术能力 benchmark 的官方入口，2026 年已发布 Nature 论文并持续滚动展示顶级模型在 HLE 上的进展。',
            descriptionEn: 'Official home for the frontier academic benchmark, with a 2026 Nature publication and rolling progress tracking for top models on HLE.',
            tags: ['学术评测', 'Nature论文', '前沿基准'],
            tagsEn: ['Academic Benchmark', 'Nature Paper', 'Frontier Benchmark'],
            url: 'https://lastexam.ai/',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'EvalPlus Leaderboard',
            titleEn: 'EvalPlus Leaderboard',
            description: '面向 AI Coder 的严格代码榜单，围绕 HumanEval+、MBPP+ 等测试集比较正确率与效率。',
            descriptionEn: 'Rigorous coding leaderboard for AI coders, comparing correctness and efficiency on HumanEval+, MBPP+, and related tests.',
            tags: ['代码评测榜', 'HumanEval+', '效率对比'],
            tagsEn: ['Coding Rankings', 'HumanEval+', 'Efficiency'],
            url: 'https://evalplus.github.io/leaderboard.html',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'Aider Polyglot Leaderboard',
            titleEn: 'Aider Polyglot Leaderboard',
            description: 'Aider 官方多语言代码编辑榜，测试模型在 225 道 Exercism 练习中的跨语言写码与改码能力。',
            descriptionEn: 'Official multilingual code-editing leaderboard from Aider, testing cross-language coding and editing on 225 Exercism exercises.',
            tags: ['代码', '代码编辑', '多语言'],
            tagsEn: ['Coding', 'Code Editing', 'Multilingual'],
            url: 'https://aider.chat/docs/leaderboards/',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'Scale Labs Leaderboards',
            titleEn: 'Scale Labs Leaderboards',
            description: '覆盖 frontier、agentic、safety 等 20+ 基准的前沿评测入口，可查看 HLE、SWE Atlas、MCP Atlas 等最新模型排名。',
            descriptionEn: 'Frontier evaluation hub spanning 20+ benchmarks across frontier, agentic, and safety categories, including HLE, SWE Atlas, and MCP Atlas.',
            tags: ['前沿评测', 'Agent基准', '安全基准'],
            tagsEn: ['Frontier Evals', 'Agent Benchmarks', 'Safety Benchmarks'],
            url: 'https://labs.scale.com/leaderboard',
            subcategory: 'resource_product_research',
            isRecommended: true
        },
        {
            title: 'The Rundown AI',
            titleEn: 'The Rundown AI',
            description: '2026 年持续更新的 AI 新闻与应用简报，覆盖最新模型、企业落地、工具指南和课程资源。',
            descriptionEn: 'Continuously updated AI briefing in 2026 covering new models, enterprise adoption, tool guides, and learning resources.',
            tags: ['AI资讯', '邮件简报', '工具速递'],
            tagsEn: ['AI News', 'Email Briefings', 'Tool Roundups'],
            url: 'https://www.therundown.ai/',
            subcategory: 'resource_learning_news',
            isRecommended: true
        },
        {
            title: 'State of AI Report',
            titleEn: 'State of AI Report',
            description: '长期高质量 AI 年度观察入口，当前可直达 2025 报告并延续到 2026 调研周期，适合做行业全局判断。',
            descriptionEn: 'High-signal annual AI analysis hub with the latest 2025 report and ongoing 2026 survey cycle, useful for macro industry understanding.',
            tags: ['年度报告', '行业洞察', '宏观趋势'],
            tagsEn: ['Annual Report', 'Industry Insights', 'Macro Trends'],
            url: 'https://www.stateof.ai/',
            subcategory: 'resource_learning_news',
            isRecommended: true
        },
        {
            title: 'TikHub',
            description: '社媒数据 API，覆盖抖音、小红书、B 站和常见海外平台。',
            tags: ['数据 API'],
            titleEn: 'TikHub',
            descriptionEn: 'Social media data APIs for Douyin, Rednote, Bilibili, and international platforms.',
            tagsEn: ['Data API'],
            url: 'https://tikhub.io/',
            subcategory: 'resource_social_data'
        },
        {
            title: 'JustOneAPI',
            description: '社媒与电商数据接口，适合同时做内容分析和选品。',
            tags: ['数据 API'],
            titleEn: 'JustOneAPI',
            descriptionEn: 'Social and ecommerce data APIs for content analysis and product research.',
            tagsEn: ['Data API'],
            url: 'https://docs.justoneapi.com/zh/api/',
            subcategory: 'resource_social_data'
        },
        {
            title: 'SocialDataX',
            description: '面向中文社媒的数据服务，提供 HTTP API 与 MCP 接入。',
            tags: ['API 与 MCP'],
            titleEn: 'SocialDataX',
            descriptionEn: 'HTTP API and MCP access for Chinese social media data.',
            tagsEn: ['API and MCP'],
            url: 'https://socialdatax.com/api-docs/',
            subcategory: 'resource_social_data'
        },
        {
            title: 'ScrapeCreators',
            description: '提供海外社媒的帖子、评论、账号资料与广告数据接口。',
            tags: ['数据 API'],
            titleEn: 'ScrapeCreators',
            descriptionEn: 'APIs for posts, comments, profiles, and ad data across international platforms.',
            tagsEn: ['Data API'],
            url: 'https://scrapecreators.com/',
            subcategory: 'resource_social_data'
        },
        {
            title: 'EnsembleData',
            description: '提供 TikTok、Instagram、YouTube 等平台的社媒数据接口。',
            tags: ['数据 API'],
            titleEn: 'EnsembleData',
            descriptionEn: 'Social media APIs for platforms such as TikTok, Instagram, and YouTube.',
            tagsEn: ['Data API'],
            url: 'https://ensembledata.com/',
            subcategory: 'resource_social_data'
        },
        {
            title: 'Apify',
            description: '社媒采集器目录，可通过网页或 API 使用现成工具。',
            tags: ['工具目录'],
            titleEn: 'Apify',
            descriptionEn: 'A directory of social media data tools that run through the web interface or API.',
            tagsEn: ['Tool Directory'],
            url: 'https://apify.com/store/categories/social-media',
            subcategory: 'resource_social_data'
        },
        {
            title: 'Bright Data',
            description: '提供社媒数据 API 和预采集数据集。',
            tags: ['API 与数据集'],
            titleEn: 'Bright Data',
            descriptionEn: 'Social media data APIs and pre-collected datasets.',
            tagsEn: ['API and Datasets'],
            url: 'https://brightdata.com/products/web-scraper/social-media-scrape',
            subcategory: 'resource_social_data'
        },
        {
            title: '千瓜数据',
            description: '小红书内容、达人与种草营销分析平台。',
            tags: ['运营分析'],
            titleEn: 'QianGua',
            descriptionEn: 'Analytics for Rednote content, creators, and influencer marketing.',
            tagsEn: ['Analytics'],
            url: 'https://www.qian-gua.com/',
            subcategory: 'resource_social_data'
        },
        {
            title: '飞瓜数据',
            description: '面向短视频运营和选品的内容、达人及电商数据分析平台。',
            tags: ['运营分析'],
            titleEn: 'Feigua',
            descriptionEn: 'Short-video, creator, and ecommerce analytics for content operations and product research.',
            tagsEn: ['Analytics'],
            url: 'https://www.feigua.cn/',
            subcategory: 'resource_social_data'
        },
    ],
    tech_blog: [
        {
            title: 'MDN Web Docs',
            titleEn: 'MDN Web Docs',
            description: '前端开发与 Web 标准的核心文档站，适合查语法、API 和工程实践细节。',
            descriptionEn: 'Core reference for web standards, frontend APIs and implementation details used in practical development.',
            tags: ['前端开发', 'Web文档', '标准参考'],
            tagsEn: ['Frontend', 'Web Docs', 'Reference'],
            url: 'https://developer.mozilla.org/',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'React Docs',
            titleEn: 'React Docs',
            description: 'React 官方文档，覆盖组件、状态、Hooks 与现代 React 开发模式。',
            descriptionEn: 'Official React documentation covering components, state, hooks and modern React patterns.',
            tags: ['React', '官方文档', '前端框架'],
            tagsEn: ['React', 'Official Docs', 'Frontend Framework'],
            url: 'https://react.dev/',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'Next.js Docs',
            titleEn: 'Next.js Docs',
            description: 'Next.js 官方文档，覆盖 App Router、数据获取、渲染与部署实践。',
            descriptionEn: 'Official Next.js documentation covering App Router, data fetching, rendering and deployment practices.',
            tags: ['Next.js', '全栈开发', '官方文档'],
            tagsEn: ['Next.js', 'Full-stack', 'Official Docs'],
            url: 'https://nextjs.org/docs',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'Node.js Docs',
            titleEn: 'Node.js Docs',
            description: 'Node.js 官方文档入口，集中提供运行时 API、模块系统、CLI 与服务端能力说明。',
            descriptionEn: 'Official Node.js documentation for runtime APIs, modules, CLI and server-side capabilities.',
            tags: ['Node.js', '后端开发', '运行时文档'],
            tagsEn: ['Node.js', 'Backend', 'Runtime Docs'],
            url: 'https://nodejs.org/en/docs',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'Next.js Learn',
            titleEn: 'Next.js Learn',
            description: 'Next.js 官方课程，通过完整示例项目带你学习路由、数据、认证与部署流程。',
            descriptionEn: 'Official Next.js course that teaches routing, data, auth and deployment through a full demo app.',
            tags: ['Next.js课程', '实战教程', '全栈应用'],
            tagsEn: ['Next.js Course', 'Hands-on', 'Full-stack App'],
            url: 'https://nextjs.org/learn',
            subcategory: 'tech_tutorials',
            isRecommended: true
        },
        {
            title: 'freeCodeCamp',
            titleEn: 'freeCodeCamp',
            description: '提供系统化编程教程、项目练习与实战文章，适合从入门到进阶持续训练。',
            descriptionEn: 'Offers structured coding tutorials, project-based practice and engineering articles from beginner to advanced.',
            tags: ['编程教程', '项目实战', '学习路径'],
            tagsEn: ['Coding Tutorials', 'Projects', 'Learning Path'],
            url: 'https://www.freecodecamp.org/',
            subcategory: 'tech_tutorials',
            isRecommended: true
        },
        {
            title: 'roadmap.sh',
            titleEn: 'roadmap.sh',
            description: '开发者学习路线与技能树平台，适合规划前端、后端、DevOps 和 AI 工程成长路径。',
            descriptionEn: 'Developer roadmaps and skill trees for frontend, backend, DevOps and adjacent engineering tracks.',
            tags: ['成长路线', '开发者地图', '技术进阶'],
            tagsEn: ['Roadmaps', 'Skills', 'Developer Growth'],
            url: 'https://roadmap.sh/',
            subcategory: 'tech_tutorials',
            isRecommended: true
        },
        {
            title: 'web.dev',
            titleEn: 'web.dev',
            description: 'Google 的现代 Web 开发实践站，聚焦性能、PWA、可访问性与前端体验优化。',
            descriptionEn: 'Google’s practical web development resource focused on performance, PWAs, accessibility and frontend UX.',
            tags: ['Web性能', 'PWA', '前端实践'],
            tagsEn: ['Web Performance', 'PWA', 'Frontend Practices'],
            url: 'https://web.dev/',
            subcategory: 'tech_tutorials',
            isRecommended: true
        },
        {
            title: 'CSS-Tricks',
            titleEn: 'CSS-Tricks',
            description: '长期更新的前端技巧站，覆盖 CSS、JavaScript、布局、动画与工程化实践。',
            descriptionEn: 'A long-running frontend publication covering CSS, JavaScript, layout, animation and implementation techniques.',
            tags: ['CSS', '前端技巧', 'Web开发'],
            tagsEn: ['CSS', 'Frontend Tips', 'Web Development'],
            url: 'https://css-tricks.com/',
            subcategory: 'tech_tutorials',
            isRecommended: true
        },
        {
            title: 'Smashing Magazine',
            titleEn: 'Smashing Magazine',
            description: '面向前端、设计与 UX 的深度内容站，适合补充组件、性能与交互层面的工程思路。',
            descriptionEn: 'In-depth publication for frontend, design and UX with practical articles on components, performance and interaction design.',
            tags: ['前端', 'UX', '设计工程'],
            tagsEn: ['Frontend', 'UX', 'Design Engineering'],
            url: 'https://www.smashingmagazine.com/',
            subcategory: 'tech_tutorials',
            isRecommended: true
        },
        {
            title: 'OpenAI Docs',
            titleEn: 'OpenAI Docs',
            description: 'OpenAI 平台文档，包含 API 接入、参考说明与开发者资源入口。',
            descriptionEn: 'OpenAI platform docs with API onboarding, references and developer resources.',
            tags: ['OpenAI', 'API文档', 'AI开发'],
            tagsEn: ['OpenAI', 'API Docs', 'AI Development'],
            url: 'https://developers.openai.com/api/docs',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'OpenAI Cookbook',
            titleEn: 'OpenAI Cookbook',
            description: 'OpenAI 官方示例与最佳实践集合，适合查 API 用法、样例代码与提示工程实现。',
            descriptionEn: 'Official OpenAI examples and best practices for API usage, sample code and prompt engineering patterns.',
            tags: ['OpenAI', '示例代码', '最佳实践'],
            tagsEn: ['OpenAI', 'Code Examples', 'Best Practices'],
            url: 'https://developers.openai.com/cookbook',
            subcategory: 'tech_tutorials',
            isRecommended: true
        },
        {
            title: 'Anthropic Docs',
            titleEn: 'Anthropic Docs',
            description: 'Anthropic 官方开发文档，覆盖 Claude 使用方式、提示工程与平台能力。',
            descriptionEn: 'Official Anthropic developer docs covering Claude usage, prompting and platform capabilities.',
            tags: ['Anthropic', 'Claude', '官方文档'],
            tagsEn: ['Anthropic', 'Claude', 'Official Docs'],
            url: 'https://platform.claude.com/docs/en/docs/intro-to-claude',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'LangChain Overview',
            titleEn: 'LangChain Overview',
            description: 'LangChain 官方文档总览，适合快速上手自定义 Agents、工具调用与 LLM 应用集成。',
            descriptionEn: 'Official LangChain overview for quickly building custom agents, tool calling and LLM-powered applications.',
            tags: ['LangChain', 'Agents', 'LLM应用'],
            tagsEn: ['LangChain', 'Agents', 'LLM Apps'],
            url: 'https://docs.langchain.com/oss/python/langchain/overview',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'LlamaIndex Framework',
            titleEn: 'LlamaIndex Framework',
            description: 'LlamaIndex 框架文档，覆盖 RAG、Agents、工作流与数据接入，是做私有知识应用的核心入口。',
            descriptionEn: 'LlamaIndex framework docs covering RAG, agents, workflows and data ingestion for context-augmented applications.',
            tags: ['LlamaIndex', 'RAG', '数据接入'],
            tagsEn: ['LlamaIndex', 'RAG', 'Data Connectors'],
            url: 'https://developers.llamaindex.ai/python/framework/',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'Model Context Protocol',
            titleEn: 'Model Context Protocol',
            description: 'MCP 官方介绍文档，解释如何用统一协议把 AI 应用连接到数据源、工具与工作流。',
            descriptionEn: 'Official MCP introduction explaining how a standard protocol connects AI applications to data sources, tools and workflows.',
            tags: ['MCP', '协议标准', '工具连接'],
            tagsEn: ['MCP', 'Protocol', 'Tool Connectivity'],
            url: 'https://modelcontextprotocol.io/introduction',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'AutoGen',
            titleEn: 'AutoGen',
            description: 'Microsoft AutoGen 框架文档，适合搭建 Python 多智能体对话、事件驱动与代码执行系统。',
            descriptionEn: 'Microsoft AutoGen framework docs for Python multi-agent conversations, event-driven systems and code execution.',
            tags: ['AutoGen', 'Multi-Agent', 'Python'],
            tagsEn: ['AutoGen', 'Multi-Agent', 'Python'],
            url: 'https://microsoft.github.io/autogen/stable/',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'CrewAI Documentation',
            titleEn: 'CrewAI Documentation',
            description: 'CrewAI 文档聚焦协作式 Agents、Crews 与 Flows，适合快速落地生产级多智能体流程。',
            descriptionEn: 'CrewAI docs focus on collaborative agents, crews and flows for production-ready multi-agent systems.',
            tags: ['CrewAI', 'Multi-Agent', 'Flows'],
            tagsEn: ['CrewAI', 'Multi-Agent', 'Flows'],
            url: 'https://docs.crewai.com/',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'OpenClaw 官方文档',
            titleEn: 'OpenClaw Official Docs',
            description: '完整的 API 参考、配置指南和架构说明。',
            descriptionEn: 'Complete API references, configuration guides and architecture documentation for OpenClaw.',
            tags: ['OpenClaw', 'API文档', '架构说明'],
            tagsEn: ['OpenClaw', 'API Docs', 'Architecture'],
            url: 'https://docs.openclaw.ai/',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'GitHub — openclaw/openclaw',
            titleEn: 'GitHub — openclaw/openclaw',
            description: '源代码、Issue 跟踪和社区贡献指南。',
            descriptionEn: 'Source code, issue tracking and community contribution guidelines for the OpenClaw project.',
            tags: ['OpenClaw', 'GitHub', '开源项目'],
            tagsEn: ['OpenClaw', 'GitHub', 'Open Source'],
            url: 'https://github.com/openclaw/openclaw',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'ClawHub 技能市场',
            titleEn: 'ClawHub Skill Marketplace',
            description: '发现、安装和分享 AI 技能插件。',
            descriptionEn: 'Discover, install and share AI skill plugins in the OpenClaw ecosystem.',
            tags: ['ClawHub', '技能市场', '插件生态'],
            tagsEn: ['ClawHub', 'Skill Marketplace', 'Plugin Ecosystem'],
            url: 'https://clawhub.ai/',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'Getting Started — 官方入门指南',
            titleEn: 'Getting Started — Official Guide',
            description: '从零到第一次对话的最快路径。',
            descriptionEn: 'The fastest path from zero setup to your first OpenClaw conversation.',
            tags: ['OpenClaw', '入门指南', '快速开始'],
            tagsEn: ['OpenClaw', 'Getting Started', 'Quickstart'],
            url: 'https://docs.openclaw.ai/start/getting-started',
            subcategory: 'tech_official_docs',
            isRecommended: false
        },
        {
            title: 'Discord 社区',
            titleEn: 'Discord Community',
            description: '与数万开发者和用户实时交流。',
            descriptionEn: 'Join the OpenClaw Discord community for real-time discussion with developers and users.',
            tags: ['OpenClaw', 'Discord', '社区交流'],
            tagsEn: ['OpenClaw', 'Discord', 'Community'],
            url: 'https://discord.com/invite/clawd',
            subcategory: 'tech_official_docs',
            isRecommended: false
        },
        {
            title: 'OpenClaw — Wikipedia',
            titleEn: 'OpenClaw — Wikipedia',
            description: '维基百科词条，了解 OpenClaw 的历史和影响。',
            descriptionEn: 'Wikipedia entry covering the background, history and broader impact of OpenClaw.',
            tags: ['OpenClaw', 'Wikipedia', '背景资料'],
            tagsEn: ['OpenClaw', 'Wikipedia', 'Background'],
            url: 'https://en.wikipedia.org/wiki/OpenClaw',
            subcategory: 'tech_official_docs',
            isRecommended: false
        },
        {
            title: 'ClawHub 官方文档',
            titleEn: 'ClawHub Documentation',
            description: 'OpenClaw 的 ClawHub 官方指南，介绍如何查找、安装和发布技能。',
            descriptionEn: 'Official OpenClaw guide to finding, installing, and publishing ClawHub skills.',
            tags: ["ClawHub", "OpenClaw", "官方文档"],
            tagsEn: ["ClawHub", "OpenClaw", "Documentation"],
            url: 'https://docs.openclaw.ai/clawhub',
            subcategory: 'tech_official_docs',
            isRecommended: false
        },
        {
            title: 'Hugging Face Learn',
            titleEn: 'Hugging Face Learn',
            description: 'Hugging Face 学习中心，提供 LLM、Agents、MCP、Diffusion 等课程与 Cookbook。',
            descriptionEn: 'Hugging Face learning hub with courses on LLMs, agents, MCP, diffusion and an open-source cookbook.',
            tags: ['AI课程', 'Agents', '开源模型'],
            tagsEn: ['AI Courses', 'Agents', 'Open-source Models'],
            url: 'https://huggingface.co/learn',
            subcategory: 'tech_tutorials',
            isRecommended: true
        },
        {
            title: 'GitHub Actions Docs',
            titleEn: 'GitHub Actions Docs',
            description: 'GitHub Actions 官方文档，适合查 CI/CD 工作流编排、Runner 与自动化实践。',
            descriptionEn: 'Official GitHub Actions docs for CI/CD workflow orchestration, runners and automation practices.',
            tags: ['CI/CD', 'GitHub Actions', '自动化'],
            tagsEn: ['CI/CD', 'GitHub Actions', 'Automation'],
            url: 'https://docs.github.com/en/actions',
            subcategory: 'tech_workflows',
            isRecommended: true
        },
        {
            title: 'n8n Docs',
            titleEn: 'n8n Docs',
            description: 'n8n 官方文档，覆盖工作流搭建、节点连接、AI 功能与自托管配置。',
            descriptionEn: 'Official n8n docs covering workflow building, integrations, AI features and self-hosting setup.',
            tags: ['n8n', '自动化工作流', '自托管'],
            tagsEn: ['n8n', 'Automation', 'Self-hosting'],
            url: 'https://docs.n8n.io/',
            subcategory: 'tech_workflows',
            isRecommended: true
        },
        {
            title: 'Make Help Center',
            titleEn: 'Make Help Center',
            description: 'Make 官方帮助中心，适合查场景搭建、错误处理、模板与平台更新。',
            descriptionEn: 'Official Make help center for scenarios, error handling, templates and platform updates.',
            tags: ['Make', '场景搭建', '自动化平台'],
            tagsEn: ['Make', 'Scenarios', 'Automation Platform'],
            url: 'https://help.make.com/',
            subcategory: 'tech_workflows',
            isRecommended: true
        },
        {
            title: 'Zapier Blog',
            titleEn: 'Zapier Blog',
            description: 'Zapier 的自动化内容中心，提供场景案例、应用连接方法与流程优化文章。',
            descriptionEn: 'Zapier’s automation content hub with workflow examples, app connection guides and process optimization articles.',
            tags: ['Zapier', '自动化案例', '流程优化'],
            tagsEn: ['Zapier', 'Automation Examples', 'Process Improvement'],
            url: 'https://zapier.com/blog/',
            subcategory: 'tech_workflows',
            isRecommended: false
        },
        {
            title: 'Temporal Docs',
            titleEn: 'Temporal Docs',
            description: 'Temporal 官方文档，聚焦可靠工作流执行、持久化状态与长任务编排。',
            descriptionEn: 'Official Temporal docs focused on reliable workflow execution, durable state and long-running orchestration.',
            tags: ['Temporal', '持久化执行', '工作流引擎'],
            tagsEn: ['Temporal', 'Durable Execution', 'Workflow Engine'],
            url: 'https://docs.temporal.io/',
            subcategory: 'tech_workflows',
            isRecommended: true
        },
        {
            title: 'Apache Airflow Docs',
            titleEn: 'Apache Airflow Docs',
            description: 'Apache Airflow 文档入口，适合查 DAG 编排、调度器、Provider 与部署方式。',
            descriptionEn: 'Apache Airflow documentation for DAG orchestration, schedulers, providers and deployment options.',
            tags: ['Airflow', '数据工作流', '编排调度'],
            tagsEn: ['Airflow', 'Data Workflows', 'Orchestration'],
            url: 'https://airflow.apache.org/docs/',
            subcategory: 'tech_workflows',
            isRecommended: true
        },
        {
            title: 'Cloudflare Workflows',
            titleEn: 'Cloudflare Workflows',
            description: 'Cloudflare 的多步骤持久执行文档，适合构建带重试、等待事件和审批流的后台任务。',
            descriptionEn: 'Cloudflare’s durable multi-step workflow docs for retries, event waits and approval-driven background jobs.',
            tags: ['Cloudflare', 'Durable Workflow', '后台任务'],
            tagsEn: ['Cloudflare', 'Durable Workflow', 'Background Jobs'],
            url: 'https://developers.cloudflare.com/workflows/',
            subcategory: 'tech_workflows',
            isRecommended: true
        },
        {
            title: 'Vercel Docs',
            titleEn: 'Vercel Docs',
            description: '现代前端部署、边缘渲染和性能优化的重要文档库，适合构建与上线实战参考。',
            descriptionEn: 'Documentation hub for frontend deployment, edge rendering and performance optimization in production workflows.',
            tags: ['部署文档', '前端工程', '性能优化'],
            tagsEn: ['Deployment', 'Frontend Engineering', 'Performance'],
            url: 'https://vercel.com/docs',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'Docker Docs',
            titleEn: 'Docker Docs',
            description: 'Docker 官方文档，集中覆盖容器基础、Dockerfile、Compose 与构建流程。',
            descriptionEn: 'Official Docker docs covering containers, Dockerfiles, Compose and image build workflows.',
            tags: ['Docker', '容器化', '构建部署'],
            tagsEn: ['Docker', 'Containers', 'Build & Deploy'],
            url: 'https://docs.docker.com/',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'Kubernetes Documentation',
            titleEn: 'Kubernetes Documentation',
            description: 'Kubernetes 官方文档，覆盖集群、工作负载、观测、日志与生产环境部署。',
            descriptionEn: 'Official Kubernetes documentation covering clusters, workloads, observability, logs and production deployment.',
            tags: ['Kubernetes', '容器编排', '运维'],
            tagsEn: ['Kubernetes', 'Orchestration', 'Ops'],
            url: 'https://kubernetes.io/docs/home/',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'Cloudflare Docs',
            titleEn: 'Cloudflare Docs',
            description: 'Cloudflare 开发者文档总入口，覆盖 Workers、Pages、AI Gateway、Tunnel 与边缘平台能力。',
            descriptionEn: 'Cloudflare developer docs covering Workers, Pages, AI Gateway, Tunnel and the edge platform.',
            tags: ['Cloudflare', '边缘计算', '平台文档'],
            tagsEn: ['Cloudflare', 'Edge Computing', 'Platform Docs'],
            url: 'https://developers.cloudflare.com/',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'Netlify Docs',
            titleEn: 'Netlify Docs',
            description: 'Netlify 官方文档，适合查静态站点部署、表单、边缘函数与前端托管能力。',
            descriptionEn: 'Official Netlify docs for static site deployment, forms, edge functions and frontend hosting.',
            tags: ['Netlify', '静态部署', '前端托管'],
            tagsEn: ['Netlify', 'Static Deployment', 'Frontend Hosting'],
            url: 'https://docs.netlify.com/',
            subcategory: 'tech_deploy_ops',
            isRecommended: false
        },
        {
            title: 'Render Docs',
            titleEn: 'Render Docs',
            description: 'Render 官方文档，覆盖 Web Service、数据库、后台任务与应用上线配置。',
            descriptionEn: 'Official Render docs covering web services, databases, background jobs and deployment configuration.',
            tags: ['Render', '应用托管', '部署配置'],
            tagsEn: ['Render', 'App Hosting', 'Deployment Config'],
            url: 'https://render.com/docs',
            subcategory: 'tech_deploy_ops',
            isRecommended: false
        },
        {
            title: 'Fly.io Docs',
            titleEn: 'Fly.io Docs',
            description: 'Fly.io 官方文档，适合查全球部署、容器运行、卷存储与应用发布。',
            descriptionEn: 'Official Fly.io docs for global deployment, containers, volumes and application delivery.',
            tags: ['Fly.io', '全球部署', '容器运行'],
            tagsEn: ['Fly.io', 'Global Deployments', 'Containers'],
            url: 'https://docs.fly.io/',
            subcategory: 'tech_deploy_ops',
            isRecommended: false
        },
        {
            title: '阿里云 — 部署 OpenClaw 构建钉钉 AI 助理',
            titleEn: 'Alibaba Cloud — Deploy OpenClaw for DingTalk AI Assistant',
            description: '轻量应用服务器一键部署 OpenClaw，并通过可视化配置面板接入钉钉。',
            descriptionEn: 'One-click deployment on Alibaba Cloud Simple Application Server with a visual panel for DingTalk integration.',
            tags: ['阿里云', '钉钉', '一键部署'],
            tagsEn: ['Alibaba Cloud', 'DingTalk', 'One-Click Deploy'],
            url: 'https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: '阿里云 — AppFlow 集成企业微信',
            titleEn: 'Alibaba Cloud — AppFlow Integration with WeCom',
            description: '通过应用连接器将 OpenClaw 与企业微信集成，群聊内直接交互。',
            descriptionEn: 'Integrate OpenClaw with WeCom via AppFlow connectors so teams can interact directly in group chats.',
            tags: ['阿里云', '企业微信', 'AppFlow'],
            tagsEn: ['Alibaba Cloud', 'WeCom', 'AppFlow'],
            url: 'https://help.aliyun.com/zh/simple-application-server/use-cases/openclaw-enterprise-wechat-integration',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: '腾讯云 — OpenClaw 接入飞书保姆级教程',
            titleEn: 'Tencent Cloud — OpenClaw Feishu Integration Guide',
            description: '基于 Lighthouse 一键部署，覆盖飞书机器人从创建到接入的完整流程。',
            descriptionEn: 'Lighthouse-based one-click deployment guide covering the full Feishu bot setup and integration flow.',
            tags: ['腾讯云', '飞书', 'Lighthouse'],
            tagsEn: ['Tencent Cloud', 'Feishu', 'Lighthouse'],
            url: 'https://cloud.tencent.com/developer/article/2625073',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: '腾讯云 — OpenClaw 接入企业微信完全指南',
            titleEn: 'Tencent Cloud — OpenClaw WeCom Integration Guide',
            description: '可视化配置面板，几步完成企业微信接入与消息交互配置。',
            descriptionEn: 'Step-by-step Tencent Cloud guide for connecting OpenClaw to WeCom with a visual configuration panel.',
            tags: ['腾讯云', '企业微信', '可视化配置'],
            tagsEn: ['Tencent Cloud', 'WeCom', 'Visual Config'],
            url: 'https://cloud.tencent.com/developer/article/2625147',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'DigitalOcean — One-Click Deploy OpenClaw',
            titleEn: 'DigitalOcean — One-Click Deploy OpenClaw',
            description: 'DigitalOcean 的 1-Click 方案部署教程，适合快速启动 OpenClaw 实例。',
            descriptionEn: 'Guide for deploying OpenClaw using DigitalOcean\'s 1-Click solution for fast setup.',
            tags: ['DigitalOcean', '一键部署', 'VPS'],
            tagsEn: ['DigitalOcean', 'One-Click Deploy', 'VPS'],
            url: 'https://www.digitalocean.com/community/tutorials/how-to-run-openclaw',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'Hostinger — How to Set Up OpenClaw on a Private Server',
            titleEn: 'Hostinger — How to Set Up OpenClaw on a Private Server',
            description: 'Hostinger VPS 私有服务器部署 OpenClaw 的分步教程。',
            descriptionEn: 'Step-by-step Hostinger VPS guide for setting up OpenClaw on a private server.',
            tags: ['Hostinger', 'VPS部署', '私有服务器'],
            tagsEn: ['Hostinger', 'VPS Deploy', 'Private Server'],
            url: 'https://www.hostinger.com/tutorials/how-to-set-up-openclaw',
            subcategory: 'tech_deploy_ops',
            isRecommended: false
        },
        {
            title: 'AWS 中国博客 — 基于 Mac 实例部署 OpenClaw',
            titleEn: 'AWS China Blog — Deploy OpenClaw on Mac Instances',
            description: '亚马逊云科技 Mac 实例部署指南，适合苹果生态自动化与桌面场景。',
            descriptionEn: 'AWS China guide for deploying OpenClaw on Mac instances, useful for Apple ecosystem automation workflows.',
            tags: ['AWS', 'Mac实例', '苹果生态'],
            tagsEn: ['AWS', 'Mac Instances', 'Apple Ecosystem'],
            url: 'https://aws.amazon.com/cn/blogs/china/openclaw-deployment-aws-mac/',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: '阿里云 — 2026年 OpenClaw 极速部署教程（更新版）',
            titleEn: 'Alibaba Cloud — 2026 OpenClaw Fast Deployment Guide',
            description: '预置镜像一键部署全流程、多渠道集成方法与最新版问题排查。',
            descriptionEn: 'Updated Alibaba Cloud guide covering image-based one-click deployment, multi-channel integrations and troubleshooting.',
            tags: ['阿里云', '快速部署', '更新版'],
            tagsEn: ['Alibaba Cloud', 'Fast Deployment', 'Updated Guide'],
            url: 'https://developer.aliyun.com/article/1710373',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: '阿里云 — OpenClaw 一键秒级部署全攻略指南',
            titleEn: 'Alibaba Cloud — OpenClaw One-Click Deployment Guide',
            description: '轻量应用服务器专属页面直接部署，含实例配置和服务协议说明。',
            descriptionEn: 'Direct deployment guide for Alibaba Cloud Simple Application Server with instance sizing and service terms.',
            tags: ['阿里云', '轻量应用服务器', '部署指南'],
            tagsEn: ['Alibaba Cloud', 'Simple Application Server', 'Deployment Guide'],
            url: 'https://developer.aliyun.com/article/1710471',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: '阿里云 — OpenClaw 部署保姆级教程：接入微信/飞书/钉钉/QQ',
            titleEn: 'Alibaba Cloud — OpenClaw Messaging Platform Integration Guide',
            description: '覆盖微信、飞书、钉钉、QQ 四大通讯平台的 App Key 与 Token 获取和配置流程。',
            descriptionEn: 'Detailed Alibaba Cloud guide for connecting OpenClaw to WeChat, Feishu, DingTalk and QQ with token setup steps.',
            tags: ['阿里云', '微信', '飞书'],
            tagsEn: ['Alibaba Cloud', 'WeChat', 'Feishu'],
            url: 'https://developer.aliyun.com/article/1710679',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'Vercel — OpenClaw 官方集成指南',
            titleEn: 'Vercel — OpenClaw Official Integration Guide',
            description: 'Vercel AI Gateway 集成 OpenClaw 的官方指南，覆盖 API 密钥创建、安装向导和监控排查。',
            descriptionEn: 'Official Vercel AI Gateway guide for OpenClaw, covering API key creation, setup flow and monitoring.',
            tags: ['Vercel', 'AI Gateway', '官方集成'],
            tagsEn: ['Vercel', 'AI Gateway', 'Official Integration'],
            url: 'https://vercel.com/docs/ai-gateway/chat-platforms/openclaw',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: '阿里云百炼 — OpenClaw 接入指南',
            titleEn: 'Alibaba Cloud Bailian — OpenClaw Integration Guide',
            description: '阿里云官方文档：通过百炼 OpenAI 兼容接口接入 OpenClaw，涵盖 Qwen、DeepSeek、Kimi 等模型配置。',
            descriptionEn: 'Official Alibaba Cloud Bailian guide for connecting OpenClaw via an OpenAI-compatible endpoint with Qwen, DeepSeek and Kimi models.',
            tags: ['阿里云百炼', 'OpenAI兼容接口', '模型接入'],
            tagsEn: ['Alibaba Cloud Bailian', 'OpenAI-Compatible API', 'Model Integration'],
            url: 'https://help.aliyun.com/zh/model-studio/openclaw',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: '保姆级飞书对接教程 — 手把手搭建 AI 助手',
            titleEn: 'Step-by-Step Feishu Integration Guide for OpenClaw',
            description: 'Linux 下安装 OpenClaw 并对接飞书机器人，打造专属智能助理。',
            descriptionEn: 'Chinese step-by-step guide for installing OpenClaw on Linux and connecting it to a Feishu bot.',
            tags: ['OpenClaw', '飞书', 'Linux部署'],
            tagsEn: ['OpenClaw', 'Feishu', 'Linux Deployment'],
            url: 'https://www.cnblogs.com/catchadmin/p/19556552',
            subcategory: 'tech_deploy_ops',
            isRecommended: false
        },
        {
            title: 'Bright Data — Build a WhatsApp AI Assistant with OpenClaw',
            titleEn: 'Bright Data — Build a WhatsApp AI Assistant with OpenClaw',
            description: 'OpenClaw 与 Bright Data 集成指南，构建具备网页抓取能力的 WhatsApp AI 助手。',
            descriptionEn: 'Integration guide for combining OpenClaw with Bright Data to build a web-scraping-enabled WhatsApp AI assistant.',
            tags: ['Bright Data', 'WhatsApp', '网页抓取'],
            tagsEn: ['Bright Data', 'WhatsApp', 'Web Scraping'],
            url: 'https://brightdata.com/blog/ai/openclaw-with-bright-data',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: '部署 OpenClaw：开源 AI 个人助手从安装到 QQ 机器人接入',
            titleEn: 'Deploy OpenClaw: From Install to QQ Bot Integration',
            description: '中文图文教程：从 npm 安装、onboard 初始化到 QQ 机器人接入的完整流程。',
            descriptionEn: 'Chinese illustrated guide covering npm install, onboarding and full QQ bot integration for OpenClaw.',
            tags: ['OpenClaw', 'QQ机器人', 'npm安装'],
            tagsEn: ['OpenClaw', 'QQ Bot', 'npm Install'],
            url: 'https://catcat.blog/2026/03/deploy-openclaw-ai-assistant',
            subcategory: 'tech_deploy_ops',
            isRecommended: false
        },
        {
            title: '微信养龙虾：OpenClaw 微信插件 Clawbot 发布',
            titleEn: 'OpenClaw WeChat Plugin Clawbot Tutorial',
            description: '视频教程：一条命令完成安装，演示 OpenClaw 微信接入与移动办公实战。',
            descriptionEn: 'Video tutorial showing one-command install and a complete WeChat integration workflow for OpenClaw.',
            tags: ['OpenClaw', '微信插件', '视频教程'],
            tagsEn: ['OpenClaw', 'WeChat Plugin', 'Video Tutorial'],
            url: 'https://www.youtube.com/watch?v=KZKT27Gk9lA',
            subcategory: 'tech_deploy_ops',
            isRecommended: false
        },
        {
            title: 'Langfuse Docs',
            titleEn: 'Langfuse Docs',
            description: 'Langfuse 是开源 LLM 工程平台，提供 Tracing、Prompt 管理、Evals 与生产级可观测性。',
            descriptionEn: 'Langfuse is an open-source LLM engineering platform for tracing, prompt management, evaluations and production observability.',
            tags: ['Langfuse', 'Observability', 'Evals'],
            tagsEn: ['Langfuse', 'Observability', 'Evals'],
            url: 'https://langfuse.com/docs/',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'Helicone Docs',
            titleEn: 'Helicone Docs',
            description: 'Helicone 提供 OpenAI 兼容 AI Gateway，集成请求日志、可观测性与模型回退能力。',
            descriptionEn: 'Helicone provides an OpenAI-compatible AI Gateway with request logging, observability and model fallbacks.',
            tags: ['Helicone', 'AI Gateway', 'Observability'],
            tagsEn: ['Helicone', 'AI Gateway', 'Observability'],
            url: 'https://docs.helicone.ai/',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'OpenLIT',
            titleEn: 'OpenLIT',
            description: 'OpenLIT 是开源 AI 工程平台，基于 OpenTelemetry 提供 Agents、向量库、MCP 与 GPU 的可观测性。',
            descriptionEn: 'OpenLIT is an open-source AI engineering platform with OpenTelemetry-native observability for agents, vector DBs, MCP and GPUs.',
            tags: ['OpenLIT', 'OpenTelemetry', 'AI Observability'],
            tagsEn: ['OpenLIT', 'OpenTelemetry', 'AI Observability'],
            url: 'https://docs.openlit.io/latest/',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'Arize AX',
            titleEn: 'Arize AX',
            description: 'Arize AX 聚焦 AI 应用与 Agents 的评测、Tracing 与观测，适合做线上质量分析。',
            descriptionEn: 'Arize AX focuses on evaluation, tracing and observability for AI applications and agents in production.',
            tags: ['Arize', 'Tracing', 'AI Observability'],
            tagsEn: ['Arize', 'Tracing', 'AI Observability'],
            url: 'https://www.arize.com/docs/ax',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
        },
        {
            title: 'Vercel Blog',
            titleEn: 'Vercel Blog',
            description: 'Vercel 官方博客，持续发布前端基础设施、AI 工作流、性能与客户案例文章。',
            descriptionEn: 'Vercel’s official blog with articles on frontend infrastructure, AI workflows, performance and customer case studies.',
            tags: ['Vercel', '前端基础设施', 'AI工作流'],
            tagsEn: ['Vercel', 'Frontend Infrastructure', 'AI Workflows'],
            url: 'https://vercel.com/blog',
            subcategory: 'tech_case_studies',
            isRecommended: true
        },
        {
            title: 'GitHub Engineering',
            titleEn: 'GitHub Engineering',
            description: 'GitHub 官方工程博客，长期发布平台架构、性能优化、可访问性与运维实践。',
            descriptionEn: 'GitHub’s engineering blog covering platform architecture, performance, accessibility and operations.',
            tags: ['工程博客', '架构优化', '平台实践'],
            tagsEn: ['Engineering Blog', 'Architecture', 'Platform Practices'],
            url: 'https://github.blog/engineering/',
            subcategory: 'tech_case_studies',
            isRecommended: true
        },
        {
            title: 'Cloudflare Blog',
            titleEn: 'Cloudflare Blog',
            description: 'Cloudflare 官方博客，常见边缘平台、AI 基础设施、网络安全与产品架构拆解。',
            descriptionEn: 'Cloudflare’s official blog with engineering breakdowns on edge infrastructure, AI platforms and security systems.',
            tags: ['边缘平台', 'AI基础设施', '架构拆解'],
            tagsEn: ['Edge Platform', 'AI Infrastructure', 'Case Studies'],
            url: 'https://blog.cloudflare.com/',
            subcategory: 'tech_case_studies',
            isRecommended: true
        },
        {
            title: 'Stripe Engineering',
            titleEn: 'Stripe Engineering',
            description: 'Stripe 工程博客，分享支付 API、文档平台、数据库与高可用系统的构建经验。',
            descriptionEn: 'Stripe’s engineering blog sharing lessons from payment APIs, docs platforms, databases and high-availability systems.',
            tags: ['支付系统', '高可用', '工程博客'],
            tagsEn: ['Payments', 'High Availability', 'Engineering Blog'],
            url: 'https://stripe.com/blog/engineering',
            subcategory: 'tech_case_studies',
            isRecommended: true
        },
        {
            title: 'Shopify Engineering',
            titleEn: 'Shopify Engineering',
            description: 'Shopify 官方工程站，覆盖电商基础设施、AI 应用、GraphQL 与平台扩展实践。',
            descriptionEn: 'Shopify’s engineering site covering commerce infrastructure, AI applications, GraphQL and platform scaling practices.',
            tags: ['Shopify', '电商工程', '平台扩展'],
            tagsEn: ['Shopify', 'Commerce Engineering', 'Platform Scale'],
            url: 'https://shopify.engineering/',
            subcategory: 'tech_case_studies',
            isRecommended: true
        },
    ],
    // Craft 开源创作软件：20 款免费开源工具 / 8 个分类 / 73 个官方下载入口
    // 整理来源：https://www.scys.ai/insights/craft-apps-chinese-directory/
    craft_apps: [
        {
            title: 'ArtCraft Studio',
            titleEn: 'ArtCraft Studio',
            description: 'AI 图像与视频生成工作室｜在画布上编辑图像、搭建 3D 场景，用最新模型在电脑上直接渲染。免费、开源。 v0.41.1',
            descriptionEn: 'AI Image & Video Generation Studio | Edit images on a canvas, build 3D scenes and render locally with the latest models. Free and open source. v0.41.1',
            tags: ['免费开源', 'AI 生成式', '跨平台'],
            tagsEn: ['Free & Open Source', 'Generative AI', 'Cross-platform'],
            url: 'https://github.com/storytold/artcraft/releases/latest',
            subcategory: 'craft_ai',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.41.1',
            downloads: [
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/artcraft/releases/download/artcraft-v0.41.1/ArtCraft_0.41.1_x64-setup.exe' },
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/artcraft/releases/download/artcraft-v0.41.1/ArtCraft_0.41.1_universal.dmg' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/artcraft/releases/download/artcraft-v0.41.1/artcraft-0.41.1-linux-x86_64.flatpak' },
            ],
            docs: 'https://craft.wiki/apps/artcraft-studio/overview/',
            install: 'https://craft.wiki/apps/artcraft-studio/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'PhotoCraft',
            titleEn: 'PhotoCraft',
            description: '图像编辑工具｜你早就上手的开源图像编辑器，熟悉的界面，打开就能用。 v0.23.1',
            descriptionEn: 'Image Editor | A familiar open-source image editor you already know how to use, ready to go from the first launch. v0.23.1 - Free & open source',
            tags: ['免费开源', '图形设计', '跨平台'],
            tagsEn: ['Free & Open Source', 'Graphics', 'Cross-platform'],
            url: 'https://github.com/storytold/photocraft/releases/latest',
            subcategory: 'craft_design',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.23.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/photocraft/releases/download/v0.23.1/photocraft-0.23.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/photocraft/releases/download/v0.23.1/photocraft-0.23.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/photocraft/releases/download/v0.23.1/photocraft-0.23.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/photocraft/releases/download/v0.23.1/photocraft-0.23.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/photocraft/overview/',
            install: 'https://craft.wiki/apps/photocraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'VectorCraft',
            titleEn: 'VectorCraft',
            description: '矢量图形设计工具｜纯 Rust 打造的快速矢量插画软件，钢笔、布尔运算、实时效果一应俱全。 v0.24.1 · 免费开源',
            descriptionEn: 'Vector Graphics Editor | A fast vector illustration app built entirely in Rust, with pen tools, boolean operations and live effects. v0.24.1 - Free & open source',
            tags: ['免费开源', '图形设计', '跨平台'],
            tagsEn: ['Free & Open Source', 'Graphics', 'Cross-platform'],
            url: 'https://github.com/storytold/vectorcraft/releases/latest',
            subcategory: 'craft_design',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.24.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/vectorcraft/releases/download/v0.24.1/vectorcraft-0.24.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/vectorcraft/releases/download/v0.24.1/vectorcraft-0.24.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/vectorcraft/releases/download/v0.24.1/vectorcraft-0.24.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/vectorcraft/releases/download/v0.24.1/vectorcraft-0.24.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/vectorcraft/overview/',
            install: 'https://craft.wiki/apps/vectorcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'LightCraft',
            titleEn: 'LightCraft',
            description: '照片管理与 RAW 修图工具｜在自家电脑上运行的开源照片库与 RAW 显影工具。 v0.21.1',
            descriptionEn: 'Photo Manager & RAW Editor | An open-source photo library and RAW developer that runs on your own computer. v0.21.1 - Free & open source',
            tags: ['免费开源', '图形设计', '跨平台'],
            tagsEn: ['Free & Open Source', 'Graphics', 'Cross-platform'],
            url: 'https://github.com/storytold/lightcraft/releases/latest',
            subcategory: 'craft_design',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.21.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/lightcraft/releases/download/v0.21.1/lightcraft-0.21.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/lightcraft/releases/download/v0.21.1/lightcraft-0.21.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/lightcraft/releases/download/v0.21.1/lightcraft-0.21.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/lightcraft/releases/download/v0.21.1/lightcraft-0.21.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/lightcraft/overview/',
            install: 'https://craft.wiki/apps/lightcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'DesignCraft',
            titleEn: 'DesignCraft',
            description: '页面排版与出版工具｜开源页面排版与出版软件，用 Rust 重新构建。 v0.20.1',
            descriptionEn: 'Page Layout & Publishing | Open-source page layout and publishing software, rebuilt in Rust. v0.20.1 - Free & open source',
            tags: ['免费开源', '图形设计', '跨平台'],
            tagsEn: ['Free & Open Source', 'Graphics', 'Cross-platform'],
            url: 'https://github.com/storytold/designcraft/releases/latest',
            subcategory: 'craft_design',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.20.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/designcraft/releases/download/v0.20.1/designcraft-0.20.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/designcraft/releases/download/v0.20.1/designcraft-0.20.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/designcraft/releases/download/v0.20.1/designcraft-0.20.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/designcraft/releases/download/v0.20.1/designcraft-0.20.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/designcraft/overview/',
            install: 'https://craft.wiki/apps/designcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'FigCraft',
            titleEn: 'FigCraft',
            description: '界面设计与原型工具｜开源界面设计与原型制作工具，支持实时协作会话。 v0.18.1',
            descriptionEn: 'UI Design & Prototyping | Open-source UI design and prototyping tool with live collaboration sessions. v0.18.1 - Free & open source',
            tags: ['免费开源', '图形设计', '跨平台'],
            tagsEn: ['Free & Open Source', 'Graphics', 'Cross-platform'],
            url: 'https://github.com/storytold/figcraft/releases/latest',
            subcategory: 'craft_design',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.18.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/figcraft/releases/download/v0.18.1/figcraft-0.18.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/figcraft/releases/download/v0.18.1/figcraft-0.18.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/figcraft/releases/download/v0.18.1/figcraft-0.18.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/figcraft/releases/download/v0.18.1/figcraft-0.18.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/figcraft/overview/',
            install: 'https://craft.wiki/apps/figcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'TextureCraft',
            titleEn: 'TextureCraft',
            description: '3D 纹理绘制工具｜开源 3D 纹理绘制软件，直接在模型上绘制贴图。 v0.6.1',
            descriptionEn: '3D Texture Painting | Open-source 3D texture painting software - paint directly on the model. v0.6.1 - Free & open source',
            tags: ['免费开源', '图形设计', '跨平台'],
            tagsEn: ['Free & Open Source', 'Graphics', 'Cross-platform'],
            url: 'https://github.com/storytold/texturecraft/releases/latest',
            subcategory: 'craft_design',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.6.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/texturecraft/releases/download/v0.6.1/texturecraft-0.6.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/texturecraft/releases/download/v0.6.1/texturecraft-0.6.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/texturecraft/releases/download/v0.6.1/texturecraft-0.6.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/texturecraft/releases/download/v0.6.1/texturecraft-0.6.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/texturecraft/overview/',
            install: 'https://craft.wiki/apps/texturecraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'MaterialCraft',
            titleEn: 'MaterialCraft',
            description: '程序化材质制作工具｜基于节点的开源程序化材质编辑器。 v0.4.1',
            descriptionEn: 'Procedural Material Editor | A node-based, open-source procedural material editor. v0.4.1 - Free & open source',
            tags: ['免费开源', '图形设计', '跨平台'],
            tagsEn: ['Free & Open Source', 'Graphics', 'Cross-platform'],
            url: 'https://github.com/storytold/materialcraft/releases/latest',
            subcategory: 'craft_design',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.4.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/materialcraft/releases/download/v0.4.1/materialcraft-0.4.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/materialcraft/releases/download/v0.4.1/materialcraft-0.4.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/materialcraft/releases/download/v0.4.1/materialcraft-0.4.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/materialcraft/releases/download/v0.4.1/materialcraft-0.4.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/materialcraft/overview/',
            install: 'https://craft.wiki/apps/materialcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'FilmCraft',
            titleEn: 'FilmCraft',
            description: '视频剪辑工具｜专业级开源视频剪辑软件，从零用 Rust 重写。 v0.20.1',
            descriptionEn: 'Video Editor | A professional-grade open-source video editor rewritten from scratch in Rust. v0.20.1 - Free & open source',
            tags: ['免费开源', '视频剪辑', '跨平台'],
            tagsEn: ['Free & Open Source', 'Video', 'Cross-platform'],
            url: 'https://github.com/storytold/filmcraft/releases/latest',
            subcategory: 'craft_video',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.20.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/filmcraft/releases/download/v0.20.1/filmcraft-0.20.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/filmcraft/releases/download/v0.20.1/filmcraft-0.20.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/filmcraft/releases/download/v0.20.1/filmcraft-0.20.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/filmcraft/releases/download/v0.20.1/filmcraft-0.20.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/filmcraft/overview/',
            install: 'https://craft.wiki/apps/filmcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'EffectCraft',
            titleEn: 'EffectCraft',
            description: '动态图形与视觉特效工具｜开源动态图形与视觉特效制作软件。 v0.24.1',
            descriptionEn: 'Motion Graphics & VFX | Open-source motion graphics and visual effects software. v0.24.1 - Free & open source',
            tags: ['免费开源', '视频剪辑', '跨平台'],
            tagsEn: ['Free & Open Source', 'Video', 'Cross-platform'],
            url: 'https://github.com/storytold/effectcraft/releases/latest',
            subcategory: 'craft_video',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.24.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/effectcraft/releases/download/v0.24.1/effectcraft-0.24.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/effectcraft/releases/download/v0.24.1/effectcraft-0.24.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/effectcraft/releases/download/v0.24.1/effectcraft-0.24.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/effectcraft/releases/download/v0.24.1/effectcraft-0.24.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/effectcraft/overview/',
            install: 'https://craft.wiki/apps/effectcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'AniCraft',
            titleEn: 'AniCraft',
            description: '2D 矢量动画制作工具｜纯 Rust 打造的开源 2D 矢量动画软件。 v0.2.1',
            descriptionEn: '2D Vector Animation | An open-source 2D vector animation tool built in pure Rust. v0.2.1 - Free & open source',
            tags: ['免费开源', '视频剪辑', '跨平台'],
            tagsEn: ['Free & Open Source', 'Video', 'Cross-platform'],
            url: 'https://github.com/storytold/anicraft/releases/latest',
            subcategory: 'craft_video',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.2.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/anicraft/releases/download/v0.2.1/anicraft-0.2.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/anicraft/releases/download/v0.2.1/anicraft-0.2.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/anicraft/releases/download/v0.2.1/anicraft-0.2.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/anicraft/releases/download/v0.2.1/anicraft-0.2.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/anicraft/overview/',
            install: 'https://craft.wiki/apps/anicraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'SoundCraft',
            titleEn: 'SoundCraft',
            description: '数字音频工作站｜专业录音、剪辑与混音，纯 Rust 实现。 v0.20.1 · 免费开源',
            descriptionEn: 'Digital Audio Workstation | Professional recording, editing and mixing, implemented in pure Rust. v0.20.1 - Free & open source',
            tags: ['免费开源', '音频', '跨平台'],
            tagsEn: ['Free & Open Source', 'Audio', 'Cross-platform'],
            url: 'https://github.com/storytold/soundcraft/releases/latest',
            subcategory: 'craft_audio',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.20.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/soundcraft/releases/download/v0.20.1/soundcraft-0.20.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/soundcraft/releases/download/v0.20.1/soundcraft-0.20.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/soundcraft/releases/download/v0.20.1/soundcraft-0.20.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/soundcraft/releases/download/v0.20.1/soundcraft-0.20.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/soundcraft/overview/',
            install: 'https://craft.wiki/apps/soundcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'CADCraft',
            titleEn: 'CADCraft',
            description: '计算机辅助设计与制图工具｜快速、开源的计算机辅助设计与工程制图软件。 v0.20.1',
            descriptionEn: 'CAD & Drafting | A fast, open-source computer-aided design and engineering drafting tool. v0.20.1 - Free & open source',
            tags: ['免费开源', 'CAD', '跨平台'],
            tagsEn: ['Free & Open Source', 'CAD', 'Cross-platform'],
            url: 'https://github.com/storytold/cadcraft/releases/latest',
            subcategory: 'craft_cad',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.20.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/cadcraft/releases/download/v0.20.1/cadcraft-0.20.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/cadcraft/releases/download/v0.20.1/cadcraft-0.20.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/cadcraft/releases/download/v0.20.1/cadcraft-0.20.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/cadcraft/releases/download/v0.20.1/cadcraft-0.20.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/cadcraft/overview/',
            install: 'https://craft.wiki/apps/cadcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'WordCraft',
            titleEn: 'WordCraft',
            description: '文字处理工具｜快速、开源的文档写作与排版软件。 v0.18.1',
            descriptionEn: 'Word Processor | A fast, open-source document writing and layout tool. v0.18.1 - Free & open source',
            tags: ['免费开源', '办公', '跨平台'],
            tagsEn: ['Free & Open Source', 'Office', 'Cross-platform'],
            url: 'https://github.com/storytold/wordcraft/releases/latest',
            subcategory: 'craft_office',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.18.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/wordcraft/releases/download/v0.18.1/wordcraft-0.18.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/wordcraft/releases/download/v0.18.1/wordcraft-0.18.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/wordcraft/releases/download/v0.18.1/wordcraft-0.18.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/wordcraft/releases/download/v0.18.1/wordcraft-0.18.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/wordcraft/overview/',
            install: 'https://craft.wiki/apps/wordcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'GridCraft',
            titleEn: 'GridCraft',
            description: '电子表格与数据分析工具｜开源电子表格与数据分析工具。 v0.19.1',
            descriptionEn: 'Spreadsheet & Data Analysis | An open-source spreadsheet and data analysis tool. v0.19.1 - Free & open source',
            tags: ['免费开源', '办公', '跨平台'],
            tagsEn: ['Free & Open Source', 'Office', 'Cross-platform'],
            url: 'https://github.com/storytold/gridcraft/releases/latest',
            subcategory: 'craft_office',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.19.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/gridcraft/releases/download/v0.19.1/gridcraft-0.19.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/gridcraft/releases/download/v0.19.1/gridcraft-0.19.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/gridcraft/releases/download/v0.19.1/gridcraft-0.19.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/gridcraft/releases/download/v0.19.1/gridcraft-0.19.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/gridcraft/overview/',
            install: 'https://craft.wiki/apps/gridcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'DeckCraft',
            titleEn: 'DeckCraft',
            description: '演示文稿与幻灯片工具｜制作并演示动态幻灯片演示文稿。 v0.18.1 · 免费开源',
            descriptionEn: 'Presentations & Slides | Create and present dynamic slide decks. v0.18.1 - Free & open source',
            tags: ['免费开源', '办公', '跨平台'],
            tagsEn: ['Free & Open Source', 'Office', 'Cross-platform'],
            url: 'https://github.com/storytold/deckcraft/releases/latest',
            subcategory: 'craft_office',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.18.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/deckcraft/releases/download/v0.18.1/deckcraft-0.18.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/deckcraft/releases/download/v0.18.1/deckcraft-0.18.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/deckcraft/releases/download/v0.18.1/deckcraft-0.18.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/deckcraft/releases/download/v0.18.1/deckcraft-0.18.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/deckcraft/overview/',
            install: 'https://craft.wiki/apps/deckcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'PdfCraft',
            titleEn: 'PdfCraft',
            description: 'PDF 工作台｜阅读、整理、合并、拆分与加密 PDF 的开源工作台。 v0.21.1',
            descriptionEn: 'PDF Workbench | An open-source workbench to read, organize, merge, split and encrypt PDFs. v0.21.1 - Free & open source',
            tags: ['免费开源', '办公', '跨平台'],
            tagsEn: ['Free & Open Source', 'Office', 'Cross-platform'],
            url: 'https://github.com/storytold/pdfcraft/releases/latest',
            subcategory: 'craft_office',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.21.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/pdfcraft/releases/download/v0.21.1/pdfcraft-0.21.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/pdfcraft/releases/download/v0.21.1/pdfcraft-0.21.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/pdfcraft/releases/download/v0.21.1/pdfcraft-0.21.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/pdfcraft/releases/download/v0.21.1/pdfcraft-0.21.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/pdfcraft/overview/',
            install: 'https://craft.wiki/apps/pdfcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'Craft Anything',
            titleEn: 'Craft Anything',
            description: '软件探索与创作工具｜探索软件是怎么运作的，并动手做出属于自己的版本。 v0.6.1 · 免费开源',
            descriptionEn: 'Software Exploration & Creation | See how software works, then build your own version. v0.6.1 - Free & open source',
            tags: ['免费开源', '开发工具', '跨平台'],
            tagsEn: ['Free & Open Source', 'Developer', 'Cross-platform'],
            url: 'https://github.com/storytold/craft-anything/releases/latest',
            subcategory: 'craft_dev',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: 'v0.6.1',
            downloads: [
                { label: 'macOS', labelEn: 'macOS', url: 'https://github.com/storytold/craft-anything/releases/download/v0.6.1/craft-anything-0.6.1-macos-universal.dmg' },
                { label: 'Windows', labelEn: 'Windows', url: 'https://github.com/storytold/craft-anything/releases/download/v0.6.1/craft-anything-0.6.1-windows-x64.msi' },
                { label: 'Linux', labelEn: 'Linux', url: 'https://github.com/storytold/craft-anything/releases/download/v0.6.1/craft-anything-0.6.1-linux-x86_64.flatpak' },
                { label: 'FreeBSD', labelEn: 'FreeBSD', url: 'https://github.com/storytold/craft-anything/releases/download/v0.6.1/craft-anything-0.6.1-freebsd-x86_64.tar.gz' },
            ],
            docs: 'https://craft.wiki/apps/craft-anything/overview/',
            install: 'https://craft.wiki/apps/craft-anything/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'SolidCraft',
            titleEn: 'SolidCraft',
            description: '独立参数化 3D CAD 工具｜由第三方开发者独立维护的参数化 3D CAD 应用。 社区维护 · 免费开源',
            descriptionEn: 'Standalone Parametric 3D CAD | A parametric 3D CAD app independently maintained by a third-party developer. Community-maintained - Free & open source',
            tags: ['免费开源', '社区维护', '社区维护'],
            tagsEn: ['Free & Open Source', 'Community', 'Community'],
            url: 'https://github.com/tangency-labs/solidcraft/releases/latest',
            subcategory: 'craft_third',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: '社区维护',
            downloads: [
                { label: '前往下载页', labelEn: 'Releases', url: 'https://github.com/tangency-labs/solidcraft/releases/latest' },
            ],
            docs: 'https://craft.wiki/apps/solidcraft/overview/',
            install: 'https://craft.wiki/apps/solidcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        },
        {
            title: 'MailCraft',
            titleEn: 'MailCraft',
            description: '邮件、日历、联系人与任务管理工具｜由第三方开发者独立维护的邮件与日程管理应用。 社区维护 · 免费开源',
            descriptionEn: 'Mail, Calendar, Contacts & Tasks | A mail and scheduling app independently maintained by a third-party developer. Community-maintained - Free & open source',
            tags: ['免费开源', '社区维护', '社区维护'],
            tagsEn: ['Free & Open Source', 'Community', 'Community'],
            url: 'https://github.com/UCS-Care-Group/mailcraft/releases/latest',
            subcategory: 'craft_third',
            visitLabel: '查看发布页',
            visitLabelEn: 'View Releases',
            version: '社区维护',
            downloads: [
                { label: '前往下载页', labelEn: 'Releases', url: 'https://github.com/UCS-Care-Group/mailcraft/releases/latest' },
            ],
            docs: 'https://craft.wiki/apps/mailcraft/overview/',
            install: 'https://craft.wiki/apps/mailcraft/install-update/',
            source: 'https://www.scys.ai/insights/craft-apps-chinese-directory/'
        }
    ]
}; 

// AI提示词工具数据
const aiPromptsData = [
    // 数据将通过JavaScript动态添加
];

// AI搜索工具数据
// AI搜索工具数据
// AI搜索工具数据
const aiSearchData = [
    // 综合类AI搜索引擎
    {
        name: "夸克AI",
        description: "阿里旗下，集成AI搜索、网盘、文档编辑、内容创作的一体化应用",
        url: "https://quark.cn",
        tags: ["阿里", "一体化应用"],
        subcategory: "general_search"
    },
    {
        name: "Perplexity AI",
        description: "强交互的对话式AI搜索引擎，支持溯源和实时网络检索",
        url: "https://www.perplexity.ai/",
        tags: ["对话式搜索", "溯源"],
        subcategory: "general_search"
    },
    {
        name: "百度文心一言",
        description: "百度推出的AI搜索服务，提供中文内容理解和生成能力",
        url: "https://yiyan.baidu.com/",
        tags: ["百度", "中文搜索"],
        subcategory: "general_search"
    },
    
    // 学术科研类
    {
        name: "Consensus",
        description: "专注学术研究的AI搜索引擎，搜索和总结科学论文",
        url: "https://consensus.app/",
        tags: ["学术研究", "论文搜索"],
        subcategory: "academic_search"
    },
    {
        name: "Elicit",
        description: "AI研究助手，帮助查找相关论文并总结研究发现",
        url: "https://elicit.com/",
        tags: ["研究工具", "论文分析"],
        subcategory: "academic_search"
    },
    {
        name: "NotebookLM",
        description: "Google推出的来源驱动研究助手，可基于上传资料生成摘要、引用回答和音频概览",
        url: "https://notebooklm.google/",
        tags: ["研究助手", "引用回答"],
        subcategory: "academic_search"
    },
    {
        name: "ResearchRabbit",
        description: "学术文献发现工具，可视化引用关系和相关研究",
        url: "https://www.researchrabbit.ai/",
        tags: ["文献发现", "引用分析"],
        subcategory: "academic_search"
    },
    {
        "name": "AMiner",
        "logo": "https://www.aminer.cn/favicon.ico",
        "description": "智谱AI推出的学术平台，基于大模型提供学者画像、论文推荐和趋势分析",
        "url": "https://www.aminer.cn",
        "tags": ["学术图谱", "科研分析"],
        "subcategory": "academic_search"
    },
    
    {
        "name": "Devv",
        "logo": "https://devv.ai/favicon.ico",
        "description": "专为程序员设计的新一代搜索引擎，支持代码片段搜索和API文档直达",
        "url": "https://devv.ai",
        "tags": ["代码搜索", "开发者工具"],
        "subcategory": "programming_search"
    },
    
    {
        "name": "AlphaSense",
        "logo": "https://www.alpha-sense.com/favicon.ico",
        "description": "金融专业人士专用的AI平台，整合财报、新闻和行业分析数据",
        "url": "https://www.alpha-sense.com/",
        "tags": ["金融数据", "行业分析"],
        "subcategory": "finance_search"
    },
    
    {
        "name": "点点（小红书）",
        "logo": "https://www.xiaohongshu.com/favicon.ico",
        "description": "小红书推出的生活场景AI搜索，涵盖美食、旅行、购物等实用推荐",
        "url": "https://www.xiaohongshu.com",
        "tags": ["生活推荐", "场景搜索"],
        "subcategory": "life_search"
    },
    
    {
        "name": "Flowith",
        "logo": "https://flowith.com/favicon.ico",
        "description": "节点式交互AI工具，通过可视化图谱连接搜索与对话内容",
        "url": "https://flowith.com",
        "tags": ["可视化搜索", "知识图谱"],
        "subcategory": "innovative_search"
    },
    
    {
        "name": "Exa AI",
        "logo": "https://exa.ai/favicon.ico",
        "description": "专为AI模型设计的搜索引擎，优化了RAG（检索增强生成）效果",
        "url": "https://exa.ai",
        "tags": ["AI开发", "模型训练"],
        "subcategory": "tech_search"
    },
    
    {
        "name": "纳米搜索（360）",
        "logo": "https://ai.360.cn/favicon.ico",
        "description": "360推出的AI搜索，可将文本结果自动生成短视频摘要",
        "url": "https://ai.360.cn",
        "tags": ["视频生成", "多媒体搜索"],
        "subcategory": "special_search"
    },
    
    // 编程开发类
    {
        name: "AskCodi",
        description: "编程问答助手，提供即时代码建议和解决方案",
        url: "https://www.askcodi.com/",
        tags: ["编程问答", "代码建议"],
        subcategory: "programming_search"
    },
    
    // 金融/商业类
    
    // 生活娱乐类
    {
        name: "Copilot.travel",
        description: "AI旅行规划助手，帮助规划旅程、寻找景点和制定行程",
        url: "https://www.copilot.travel/",
        tags: ["旅行规划", "行程助手"],
        subcategory: "life_search"
    },
    {
        name: "MovieGPT",
        description: "AI电影推荐搜索，根据观影偏好推荐电影",
        url: "https://www.moviegpt.com/",
        tags: ["电影推荐", "娱乐"],
        subcategory: "life_search"
    },
    
    // 产品/公司类
    {
        name: "SimilarWeb AI",
        description: "AI驱动的公司和网站流量分析工具",
        url: "https://www.similarweb.com/",
        tags: ["网站分析", "竞争情报"],
        subcategory: "product_search"
    },
    {
        name: "Crunchbase",
        description: "公司信息和投资数据搜索平台，集成AI搜索功能",
        url: "https://www.crunchbase.com/",
        tags: ["公司信息", "投资数据"],
        subcategory: "product_search"
    },
]
// 加载所有站点数据
function loadAllSitesData() {
    const legacyLoaderNames = [
        'loadEcommerceSites',
        'loadSocialSites',
        'loadWebsiteTools',
        'loadAiChatTools',
        'loadAiWritingTools',
        'loadAiImageTools',
        'loadAiVideoTools',
        'loadAiAudioTools',
        'loadAiDesignTools',
        'loadAiCodingTools',
        'loadAiPromptsTools',
        'loadAiSearchTools'
    ];

    legacyLoaderNames.forEach(loaderName => {
        if (typeof window[loaderName] === 'function') {
            window[loaderName]();
        }
    });
}

// ... existing code ...

// 加载AI提示词工具
function loadAiPromptsTools() {
    loadSitesByCategory(aiPromptsData, 'ai-prompts-grid');
}

// 加载AI搜索工具
function loadAiSearchTools() {
    loadSitesByCategory(aiSearchData, 'ai-search-grid');
}

// ... existing code ...

// 执行所有站点数据加载
document.addEventListener('DOMContentLoaded', function() {
    if (typeof window.loadSites !== 'function') {
        loadAllSitesData();
    }
});

// 通用加载分类网站数据的函数
function loadSitesByCategory(siteData, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (Array.isArray(siteData)) {
        siteData.forEach(site => {
            const siteInfo = {
                title: site.name || site.title,
                description: site.description,
                url: site.url,
                tags: site.tags || [],
                subcategory: site.subcategory || '',
                needsMagic: site.needsMagic || false,
                isRecommended: site.isRecommended || site.isPopular || false
            };
            
            // 添加英文字段（如果存在）
            if (site.nameEn) siteInfo.titleEn = site.nameEn;
            if (site.titleEn) siteInfo.titleEn = site.titleEn;
            if (site.descriptionEn) siteInfo.descriptionEn = site.descriptionEn;
            if (site.tagsEn) siteInfo.tagsEn = site.tagsEn;
            
            grid.innerHTML += createSiteCard(siteInfo);
        });
    }
}