/**
 * English Website Data File
 * This file contains all website card data in English
 * Can be modified as needed
 */



const sitesData = {
    // E-commerce Platforms
    ecommerce: [
        {
            title: 'Amazon Seller Central',
            description: 'Amazon Seller Platform, providing product upload, order management, advertising, and more',
            tags: ['Amazon', 'Seller Platform', 'Cross-border E-commerce'],
            url: 'https://sellercentral.amazon.com/',
            subcategory: 'amazon',
            isRecommended: true
        },
        {
            title: 'Amazon Brand Analytics',
            description: 'Amazon Brand Analytics tool, providing keyword search, shopping behavior, product comparison data',
            tags: ['Amazon', 'Analytics', 'Brand'],
            url: 'https://sellercentral.amazon.com/analytics/dashboard/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon US Store',
            description: 'Amazon US shopping website, a consumer-facing e-commerce platform',
            tags: ['Amazon', 'US Store', 'Consumer'],
            url: 'https://www.amazon.com/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon US Seller Central',
            description: 'Amazon US seller platform for managing products, orders and sales data',
            tags: ['Amazon', 'US Store', 'Seller Backend'],
            url: 'https://sellercentral.amazon.com/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon UK Store',
            description: 'Amazon UK shopping website, an e-commerce platform for UK consumers',
            tags: ['Amazon', 'UK Store', 'Consumer'],
            url: 'https://www.amazon.co.uk/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon UK Seller Central',
            description: 'Amazon UK seller platform for managing products, orders and sales data',
            tags: ['Amazon', 'UK Store', 'Seller Backend'],
            url: 'https://sellercentral.amazon.co.uk/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Japan Store',
            description: 'Amazon Japan shopping website, an e-commerce platform for Japanese consumers',
            tags: ['Amazon', 'Japan Store', 'Consumer'],
            url: 'https://www.amazon.co.jp/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Japan Seller Central',
            description: 'Amazon Japan seller platform for managing products, orders and sales data',
            tags: ['Amazon', 'Japan Store', 'Seller Backend'],
            url: 'https://sellercentral-japan.amazon.com/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Germany Store',
            description: 'Amazon Germany shopping website, an e-commerce platform for German consumers',
            tags: ['Amazon', 'Germany Store', 'Consumer'],
            url: 'https://www.amazon.de/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Germany Seller Central',
            description: 'Amazon Germany seller platform for managing products, orders and sales data',
            tags: ['Amazon', 'Germany Store', 'Seller Backend'],
            url: 'https://sellercentral.amazon.de/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon France Store',
            description: 'Amazon France shopping website, an e-commerce platform for French consumers',
            tags: ['Amazon', 'France Store', 'Consumer'],
            url: 'https://www.amazon.fr/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon France Seller Central',
            description: 'Amazon France seller platform for managing products, orders and sales data',
            tags: ['Amazon', 'France Store', 'Seller Backend'],
            url: 'https://sellercentral.amazon.fr/',
            subcategory: 'amazon'
        },
        {
            title: '意大利站前台',
            description: 'Amazon Italy shopping website, an e-commerce platform for Italian consumers',
            tags: ['Amazon', 'Italy Store', 'Consumer'],
            url: 'https://www.amazon.it/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Italy Seller Central',
            description: 'Amazon Italy seller platform for managing products, orders and sales data',
            tags: ['Amazon', 'Italy Store', 'Seller Backend'],
            url: 'https://sellercentral.amazon.it/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Canada Store',
            description: 'Amazon Canada shopping website, an e-commerce platform for Canadian consumers',
            tags: ['Amazon', 'Canada Store', 'Consumer'],
            url: 'https://www.amazon.ca/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Canada Seller Central',
            description: 'Amazon Canada seller platform for managing products, orders and sales data',
            tags: ['Amazon', 'Canada Store', 'Seller Backend'],
            url: 'https://sellercentral.amazon.ca/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Australia Store',
            description: 'Amazon Australia shopping website, an e-commerce platform for Australian consumers',
            tags: ['Amazon', 'Australia Store', 'Consumer'],
            url: 'https://www.amazon.com.au/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Australia Seller Central',
            description: 'Amazon Australia seller platform for managing products, orders and sales data',
            tags: ['Amazon', 'Australia Store', 'Seller Backend'],
            url: 'https://sellercentral.amazon.com.au/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Spain Store',
            description: 'Amazon Spain shopping website, an e-commerce platform for Spanish consumers',
            tags: ['Amazon', 'Spain Store', 'Consumer'],
            url: 'https://www.amazon.es/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Spain Seller Central',
            description: 'Amazon Spain seller platform for managing products, orders and sales data',
            tags: ['Amazon', 'Spain Store', 'Seller Backend'],
            url: 'https://sellercentral.amazon.es/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Mexico Store',
            description: 'Amazon Mexico shopping website, an e-commerce platform for Mexican consumers',
            tags: ['Amazon', 'Mexico Store', 'Consumer'],
            url: 'https://www.amazon.com.mx/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Mexico Seller Central',
            description: 'Amazon Mexico seller platform for managing products, orders and sales data',
            tags: ['Amazon', 'Mexico Store', 'Seller Backend'],
            url: 'https://sellercentral.amazon.com.mx/',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon US New Releases',
            description: 'Amazon US new product release rankings, view new product trends across different categories',
            tags: ['Amazon', 'US Store', 'New Releases'],
            url: 'https://www.amazon.com/gp/new-releases',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon US Best Sellers',
            description: 'Amazon US sales rankings, view best-selling products across all categories',
            tags: ['Amazon', 'US Store', 'Best Sellers'],
            url: 'https://www.amazon.com/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon US Movers & Shakers',
            description: 'Amazon US trending products list, showing products with the fastest-growing sales',
            tags: ['Amazon', 'US Store', 'Movers & Shakers'],
            url: 'https://www.amazon.com/gp/movers-and-shakers',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon UK Best Sellers',
            description: 'Amazon UK sales rankings, view best-selling products in the UK market',
            tags: ['Amazon', 'UK Store', 'Best Sellers'],
            url: 'https://www.amazon.co.uk/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon France Best Sellers',
            description: 'Amazon France sales rankings, view best-selling products in the French market',
            tags: ['Amazon', 'France Store', 'Best Sellers'],
            url: 'https://www.amazon.fr/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Japan Best Sellers',
            description: 'Amazon Japan sales rankings, view best-selling products in the Japanese market',
            tags: ['Amazon', 'Japan Store', 'Best Sellers'],
            url: 'https://www.amazon.co.jp/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Germany Best Sellers',
            description: 'Amazon Germany sales rankings, view best-selling products in the German market',
            tags: ['Amazon', 'Germany Store', 'Best Sellers'],
            url: 'https://www.amazon.de/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Italy Best Sellers',
            description: 'Amazon Italy sales rankings, view best-selling products in the Italian market',
            tags: ['Amazon', 'Italy Store', 'Best Sellers'],
            url: 'https://www.amazon.it/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Australia Best Sellers',
            description: 'Amazon Australia sales rankings, view best-selling products in the Australian market',
            tags: ['Amazon', 'Australia Store', 'Best Sellers'],
            url: 'https://www.amazon.com.au/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: 'Amazon Canada Best Sellers',
            description: 'Amazon Canada sales rankings, view best-selling products in the Canadian market',
            tags: ['Amazon', 'Canada Store', 'Best Sellers'],
            url: 'https://www.amazon.ca/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: 'AliExpress Seller Center',
            description: 'Alibaba-owned AliExpress seller center, providing store management, order processing, marketing promotion services',
            tags: ['AliExpress', 'Seller Center', 'Alibaba'],
            url: 'https://seller.aliexpress.com/',
            subcategory: 'aliexpress'
        },
        {
            title: 'AliExpress Seller Login',
            description: 'AliExpress seller center login entry, access merchant management system and order processing platform',
            tags: ['AliExpress', 'Seller Center', 'Login'],
            url: 'https://login.aliexpress.com/user/seller/login',
            subcategory: 'aliexpress'
        },
        {
            title: 'eBay Seller Center',
            description: 'eBay seller platform, managing product listings, orders, inventory and performance analysis',
            tags: ['eBay', 'Seller Center', 'Cross-border E-commerce'],
            url: 'https://www.ebay.com/sh/ovw',
            subcategory: 'ebay'
        },
        {
            title: 'Lazada Seller Center',
            description: 'Lazada seller center, providing store management, order processing, marketing promotion services',
            tags: ['Lazada', 'Seller Center', 'Cross-border E-commerce'],
            url: 'https://sellercenter.lazada.com/',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Vietnam Store',
            description: 'Lazada Vietnam shopping website, an e-commerce platform for Vietnamese consumers',
            tags: ['Lazada', 'Vietnam Store', 'Consumer'],
            url: 'https://www.lazada.com.vn',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Singapore Store',
            description: 'Lazada Singapore shopping website, an e-commerce platform for Singapore consumers',
            tags: ['Lazada', 'Singapore Store', 'Consumer'],
            url: 'https://www.lazada.sg',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Malaysia Store',
            description: 'Lazada Malaysia shopping website, an e-commerce platform for Malaysian consumers',
            tags: ['Lazada', 'Malaysia Store', 'Consumer'],
            url: 'https://www.lazada.com.my',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Indonesia Store',
            description: 'Lazada Indonesia shopping website, an e-commerce platform for Indonesian consumers',
            tags: ['Lazada', 'Indonesia Store', 'Consumer'],
            url: 'https://www.lazada.co.id',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Thailand Store',
            description: 'Lazada Thailand shopping website, an e-commerce platform for Thai consumers',
            tags: ['Lazada', 'Thailand Store', 'Consumer'],
            url: 'https://www.lazada.co.th',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Philippines Store',
            description: 'Lazada Philippines shopping website, an e-commerce platform for Filipino consumers',
            tags: ['Lazada', 'Philippines Store', 'Consumer'],
            url: 'https://www.lazada.com.ph',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Malaysia Seller Center',
            description: 'Lazada Malaysia seller platform for managing products, orders and sales data',
            tags: ['Lazada', 'Malaysia Store', 'Seller Backend'],
            url: 'https://sellercenter.lazada.com.my',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Singapore Seller Center',
            description: 'Lazada Singapore seller platform for managing products, orders and sales data',
            tags: ['Lazada', 'Singapore Store', 'Seller Backend'],
            url: 'https://sellercenter.lazada.sg',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Vietnam Seller Center',
            description: 'Lazada Vietnam seller platform for managing products, orders and sales data',
            tags: ['Lazada', 'Vietnam Store', 'Seller Backend'],
            url: 'https://sellercenter.lazada.vn',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Indonesia Seller Center',
            description: 'Lazada Indonesia seller platform for managing products, orders and sales data',
            tags: ['Lazada', 'Indonesia Store', 'Seller Backend'],
            url: 'https://sellercenter.lazada.co.id',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Thailand Seller Center',
            description: 'Lazada Thailand seller platform for managing products, orders and sales data',
            tags: ['Lazada', 'Thailand Store', 'Seller Backend'],
            url: 'https://sellercenter.lazada.co.th',
            subcategory: 'lazada'
        },
        {
            title: 'Lazada Philippines Seller Center',
            description: 'Lazada Philippines seller platform for managing products, orders and sales data',
            tags: ['Lazada', 'Philippines Store', 'Seller Backend'],
            url: 'https://sellercenter.lazada.com.ph',
            subcategory: 'lazada'
        },
        {
            title: 'Shopee Seller Center',
            description: 'Shopee seller platform, providing store management, order processing, marketing promotion services',
            tags: ['Shopee', 'Seller Center', 'Cross-border E-commerce'],
            url: 'https://seller.shopee.com/',
            subcategory: 'shopee'
        },
        {
            title: 'Wish Merchant Platform',
            description: 'Wish cross-border e-commerce platform merchant management system',
            tags: ['Wish', 'Cross-border E-commerce', 'Mobile E-commerce'],
            url: 'https://merchant.wish.com/',
            subcategory: 'other'
        },
        {
            title: 'Wayfair Partner Home',
            description: 'Wayfair US home furnishing e-commerce platform, providing supplier management and product listing services',
            tags: ['Wayfair', 'Home Furnishing', 'US Market'],
            url: 'https://partners.wayfair.com/',
            subcategory: 'other'
        },
        {
            title: 'Taobao',
            description: 'China-leading C2C e-commerce platform, offering a vast range of products and personalized shopping experiences',
            tags: ['Taobao', 'Alibaba', 'Domestic E-commerce'],
            url: 'https://www.taobao.com/',
            subcategory: 'other'
        },
        {
            title: 'Tmall',
            description: 'Alibaba-owned B2C e-commerce platform, featuring a wide range of brands and high-quality merchants',
            tags: ['Tmall', 'Alibaba', 'Brand E-commerce'],
            url: 'https://www.tmall.com/',
            subcategory: 'other'
        },
        {
            title: '京东',
            description: 'China-owned B2C e-commerce platform, known for its quality assurance and fast logistics',
            tags: ['JD', 'Self-operated E-commerce', 'Fast Logistics'],
            url: 'https://www.jd.com/',
            subcategory: 'other'
        },
        {
            title: 'Vip',
            description: 'B2C e-commerce platform focused on discounted brand products',
            tags: ['Vip', 'Discount', 'Brand Products'],
            url: 'https://www.vip.com/',
            subcategory: 'other'
        },
        {
            title: '1688',
            description: 'Alibaba-owned B2B wholesale platform, connecting manufacturers and wholesalers',
            tags: ['1688', 'Alibaba', 'Wholesale', 'B2B'],
            url: 'https://www.1688.com/',
            subcategory: 'other'
        }
    ],
    
    // Social Media Platforms
    social: [
        {
            title: 'Facebook',
            description: 'One of the largest social networks globally with billions of users, useful for social marketing and advertising',
            tags: ['Social Media', 'Advertising Platform', 'Global'],
            url: 'https://www.facebook.com/',
            subcategory: 'social-global',
            isRecommended: true
        },
        {
            title: 'Instagram',
            description: 'Image and short video sharing platform, ideal for visual marketing and product showcase, especially for fashion, food, travel, etc.',
            tags: ['Social Media', 'Image Sharing', 'Short Video'],
            url: 'https://www.instagram.com/',
            subcategory: 'social-global',
            isRecommended: true
        },
        {
            title: 'Twitter/X',
            description: 'Real-time information network where users can post short messages (tweets) and interact with others',
            tags: ['Social Media', 'Short Messages', 'Real-time Information'],
            url: 'https://twitter.com/',
            subcategory: 'social-global'
        },
        {
            title: 'LinkedIn',
            description: 'Professional social networking platform connecting global professionals, offering recruitment and career development opportunities',
            tags: ['Professional Network', 'Career Social', 'Recruitment'],
            url: 'https://www.linkedin.com/',
            subcategory: 'social-global'
        },
        {
            title: 'YouTube',
            description: "World's largest video sharing platform offering vast video content and live streaming services",
            tags: ['Video Platform', 'Content Creation', 'Live Streaming'],
            url: 'https://www.youtube.com/',
            subcategory: 'social-global',
            isRecommended: true
        },
        {
            title: 'TikTok',
            description: 'Social platform focused on short video creation and sharing, known for its algorithm recommendations and creative content',
            tags: ['Short Video', 'Social Media', 'Content Creation'],
            url: 'https://www.tiktok.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Pinterest',
            description: 'Visual discovery tool where users can collect ideas, create inspiration boards, and share discoveries',
            tags: ['Image Sharing', 'Idea Collection', 'Inspiration'],
            url: 'https://www.pinterest.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Reddit',
            description: 'Social news aggregation platform where users can post, vote, and discuss content on various topics',
            tags: ['Community Forum', 'Social News', 'Interest Groups'],
            url: 'https://www.reddit.com/',
            subcategory: 'social-global'
        },
        {
            title: 'WeChat',
            description: "China's leading multi-functional social media and communication platform supporting messaging, payments, mini-programs, and more",
            tags: ['Instant Messaging', 'Social Media', 'Payment Platform'],
            url: 'https://weixin.qq.com/',
            subcategory: 'social-china'
        },
        {
            title: 'Weibo',
            description: "China's leading social media platform, similar to Twitter's microblogging service",
            tags: ['Social Media', 'Microblogging', 'Trending Topics'],
            url: 'https://weibo.com/',
            subcategory: 'social-china'
        },
        {
            title: 'QQ',
            description: "Instant messaging software and social platform under Tencent, providing chat, community, gaming, and other services",
            tags: ['Instant Messaging', 'Social Platform', 'Tencent'],
            url: 'https://im.qq.com/',
            subcategory: 'social-china'
        },
        {
            title: 'Douyin',
            description: "China's leading short video platform, offering creative video content creation and sharing",
            tags: ['Short Video', 'Content Creation', 'Social Media'],
            url: 'https://www.douyin.com/',
            subcategory: 'social-china'
        },
        {
            title: 'Kuaishou',
            description: "China's well-known short video sharing platform, focusing on recording and sharing everyday life of ordinary people",
            tags: ['Short Video', 'Live Streaming', 'Social Media'],
            url: 'https://www.kuaishou.com/',
            subcategory: 'social-china'
        },
        {
            title: 'Xiaohongshu (RED)',
            description: 'Lifestyle sharing community focusing on beauty, fashion, travel, and other lifestyle content',
            tags: ['Lifestyle', 'Product Reviews', 'Shopping Sharing'],
            url: 'https://www.xiaohongshu.com/',
            subcategory: 'social-china'
        },
        {
            title: 'WeChat Official Accounts',
            description: "Content publishing system on WeChat platform, providing text, image, audio, video and other content services",
            tags: ['Content Platform', 'Self-media', 'Marketing Channel'],
            url: 'https://mp.weixin.qq.com/',
            subcategory: 'social-china'
        },
        {
            title: 'WeChat Channels',
            description: 'Short video content platform within WeChat ecosystem, supporting short videos and live streaming',
            tags: ['Short Video', 'Live Streaming', 'WeChat Ecosystem'],
            url: 'https://channels.weixin.qq.com/',
            subcategory: 'social-china'
        },
        {
            title: 'Snapchat',
            description: 'Privacy-focused social media application known for ephemeral content and augmented reality features',
            tags: ['Ephemeral Content', 'Social Media', 'Augmented Reality'],
            url: 'https://www.snapchat.com/',
            subcategory: 'social-global'
        },
        {
            title: 'WhatsApp',
            description: 'Globally popular instant messaging application offering encrypted messaging, voice calls, and video calls',
            tags: ['Instant Messaging', 'Encrypted Messages', 'Meta'],
            url: 'https://www.whatsapp.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Telegram',
            description: 'Security and privacy-focused instant messaging application supporting large groups and channel functionality',
            tags: ['Instant Messaging', 'Encryption', 'Group Channels'],
            url: 'https://telegram.org/',
            subcategory: 'social-global'
        }
    ],
    
    // Website Tools
    website: [
        {
            title: 'SEMrush',
            description: 'Comprehensive SEO analysis: competitor keyword rankings, natural search traffic, paid ad keywords, backlink analysis, and content marketing insights',
            tags: ['SEO Analysis', 'Keyword Analysis', 'Competitor Analysis'],
            url: 'https://www.semrush.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Ahrefs',
            description: 'Powerful link database, keyword ranking tracking, and content analysis tool, focusing on link and keyword analysis',
            tags: ['Link Analysis', 'Keyword Ranking', 'SEO Tools'],
            url: 'https://ahrefs.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Google Analytics',
            description: 'Google official website analysis tool, providing comprehensive website traffic and user behavior data, supporting custom reports and goal tracking',
            tags: ['Website Analysis', 'Traffic Statistics', 'User Behavior'],
            url: 'https://analytics.google.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Moz Pro',
            description: 'Professional SEO software tool, helping to improve rankings, increase traffic, and improve visibility',
            tags: ['SEO', 'Website Optimization', 'Link Analysis'],
            url: 'https://moz.com/products/pro',
            subcategory: 'seo'
        },
        {
            title: 'Udemy',
            description: 'One of the largest online learning platforms in the world, offering thousands of courses on website building, marketing, and e-commerce',
            tags: ['Online Learning', 'Website Building', 'E-commerce Skills'],
            url: 'https://www.udemy.com/',
            subcategory: 'learning'
        },
        {
            title: 'Grammarly',
            description: 'Professional English writing and content optimization tool, providing grammar, spelling, and style suggestions',
            tags: ['Content Optimization', 'English Proofreading', 'Writing Assistant'],
            url: 'https://www.grammarly.com/',
            subcategory: 'content',
            needsMagic: true
        },
        {
            title: 'Jasper AI',
            description: 'AI-driven content creation platform, helping to create high-quality blog articles, product descriptions, and marketing copy',
            tags: ['AI Writing', 'Content Creation', 'Marketing Copy'],
            url: 'https://www.jasper.ai/',
            subcategory: 'content',
            needsMagic: true
        },
        {
            title: 'ChatGPT',
            description: 'OpenAI开发的大型语言模型，能够进行自然对话和信息检索',
            tags: ['Dialogue AI', 'Natural Language Processing', 'Information Retrieval'],
            url: 'https://chat.openai.com/',
            subcategory: 'content',
            isRecommended: true,
            needsMagic: true
        },
        {
            title: 'Matomo Analytics',
            description: 'Open-source website analysis platform, focusing on privacy protection, is an alternative to Google Analytics',
            tags: ['Website Analysis', 'Privacy Protection', 'Open Source'],
            url: 'https://matomo.org/',
            subcategory: 'analytics'
        },
        {
            title: 'SimilarWeb',
            description: 'Analyze competitor overall traffic (visits, country distribution, traffic sources), user behavior (bounce rate,停留时间) and keywords',
            tags: ['Competitor Analysis', 'Traffic Analysis', 'User Behavior'],
            url: 'https://www.similarweb.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Meta Ads Library',
            description: 'Free view competitor ads materials,投放时长、文案，分析其受众定位和促销策略',
            tags: ['Advertising Analysis', 'Marketing Strategy', 'Facebook'],
            url: 'https://www.facebook.com/ads/library/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'AdSpy',
            description: 'Cross-border advertising material library,抓取Facebook/Google广告历史数据，支持按行业、国家筛选，适合分析爆款广告套路',
            tags: ['Advertising Analysis', 'Material Library', 'Marketing Strategy'],
            url: 'https://adspy.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Moat',
            description: '追踪竞品展示广告（Banner、视频广告），适合分析视觉营销策略',
            tags: ['Advertising Analysis', 'Visual Marketing', 'Display Advertising'],
            url: 'https://www.moat.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'SpyFu',
            description: 'Competitor Google Ads keyword mining, analyze their paid advertising投入和ROI',
            tags: ['Advertising Analysis', 'Keyword Analysis', 'Google Ads'],
            url: 'https://www.spyfu.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Commerce Inspector',
            description: '专攻Shopify独立站，分析竞品热销产品、价格变化、折扣策略，查看其使用的App',
            tags: ['Shopify Analysis', 'Product Analysis', 'Price Strategy'],
            url: 'https://www.commerceinspector.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Wappalyzer',
            description: 'Browser extension, one-click detect competitor technology stack (CMS, payment tools, servers, tracking codes, etc.)',
            tags: ['Technical Analysis', 'Browser Extension', 'Website Technology'],
            url: 'https://www.wappalyzer.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'BuiltWith',
            description: 'Comprehensive technical analysis, including theme templates, CDN, third-party scripts, etc.',
            tags: ['Technical Analysis', 'Website Technology', 'Third-Party Services'],
            url: 'https://builtwith.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Jungle Scout',
            description: '针对电商独立站，估算竞品销量、收入，分析产品评论趋势',
            tags: ['E-commerce Analysis', 'Sales Estimation', 'Product Reviews'],
            url: 'https://www.junglescout.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Keepa',
            description: '主要针对亚马逊，但也可监控独立站价格历史变化',
            tags: ['Price Monitoring', 'Amazon', 'Historical Price'],
            url: 'https://keepa.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Price2Spy',
            description: '跟踪竞品价格变动、促销频率，支持设置价格警报',
            tags: ['Price Monitoring', 'Promotion Tracking', 'Price Alert'],
            url: 'https://www.price2spy.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Octoparse',
            description: 'Custom crawler tool for extracting competitor product catalogs, prices, and inventory data, requires some technical background',
            tags: ['Web Scraping', 'Data Extraction', 'Price Monitoring'],
            url: 'https://www.octoparse.com/',
            subcategory: 'analytics'
        },
        {   
            title: 'BuzzSumo',
            description: 'Analyze competitor social media popular content (forwarding volume, interaction rate), discover trending topics',
            tags: ['Social Analysis', 'Content Analysis', 'Interaction Rate'],
            url: 'https://buzzsumo.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Social Blade',
            description: 'Track competitor YouTube/Twitter follower growth, video performance, and analyze social media trends',
            tags: ['Social Analysis', 'YouTube Analysis', 'Fans Growth'],
            url: 'https://socialblade.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Wayback Machine',
            description: 'View historical page versions of competitors to analyze their strategy adjustments',
            tags: ['Historical Records', 'Page Changes', 'Strategy Analysis'],
            url: 'https://archive.org/web/',
            subcategory: 'analytics'
        },
        {
            title: 'Hotjar',
            description: 'User experience analysis tool that analyzes website visitor behavior through heatmaps, session recordings, and user surveys',
            tags: ['User Experience', 'Heatmap Analysis', 'Behavior Tracking'],
            url: 'https://www.hotjar.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Namecheap',
            description: 'Domain registrar and hosting provider',
            tags: ['Domain Registration', 'Hosting Services', 'Internet Services'],
            url: 'https://www.namecheap.com/',
            subcategory: 'domain'
        },
        {
            title: 'GoDaddy',
            description: 'One of the largest domain registrars globally, offering domain registration, website hosting, and website building services',
            tags: ['Domain Registration', 'Website Hosting', 'Website Building'],
            url: 'https://www.godaddy.com/',
            subcategory: 'domain'
        },
        {
            title: 'Google Domains',
            description: 'Google-owned domain registration service, simple and stable, gradually migrating to Squarespace',
            tags: ['Domain Registration', 'Google Services', 'Reliable'],
            url: 'https://domains.google/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Squarespace Domains',
            description: '收购Google Domains后提供集成建站服务的域名注册商',
            tags: ['Domain Registration', 'Website Building', '一站式'],
            url: 'https://www.squarespace.com/domains',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Name.com',
            description: 'Supports niche domain extensions, suitable for creative domain registrations',
            tags: ['Creative Domains', 'Niche Extensions', 'Domain Registration'],
            url: 'https://www.name.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Bluehost',
            description: 'Hosting provider with domain registration service, suitable for一站式建站用户',
            tags: ['Domain Hosting', '一站式', 'Website Building'],
            url: 'https://www.bluehost.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Hostinger',
            description: 'Provides low-cost domain + hosting packages, suitable for beginner users',
            tags: ['Low-cost Packages', 'Beginner-friendly', 'Domain Hosting'],
            url: 'https://www.hostinger.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Cloudflare Domains',
            description: 'Only supports domain registration (no hosting service), cost-effective sales, transparent renewal',
            tags: ['Cost-effective', 'Transparent Renewal', 'Domain Registration'],
            url: 'https://www.cloudflare.com/products/registrar/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Aliyun (Wanwang)',
            description: 'The largest domain registrar in the domestic market, supports备案, new user first-year discounts',
            tags: ['Domestic Domains', 'Cloud Services'],
            url: 'https://wanwang.aliyun.com/',
            subcategory: 'domain'
        },
        {
            title: 'Tencent Cloud (DNSPod)',
            description: 'Tencent-owned domain service provider, offering domain name + DNS + SSL certificate一站式服务',
            tags: ['Domain Name', 'DNS', 'SSL Certificate'],
            url: 'https://www.dnspod.cn/',
            subcategory: 'domain'
        },
        {
            title: 'Huawei Cloud',
            description: 'Enterprise-level domain service provider, strong compliance, suitable for domain registration services for government and enterprise users',
            tags: ['Enterprise-level', 'Compliance', 'Government and Enterprise Services'],
            url: 'https://www.huaweicloud.com/product/domain.html',
            subcategory: 'domain'
        },
        {
            title: 'West.cn',
            description: 'Established domain service provider, offering a variety of domain extensions, medium price',
            tags: ['Domain Extensions', 'Established Service Provider', 'Domestic Domains'],
            url: 'https://www.west.cn/',
            subcategory: 'domain'
        },
        {
            title: 'Xinnet',
            description: 'Domestic early domain name provider, with a well-established agent system',
            tags: ['Domain Registration', 'Established Service Provider', 'Agent System'],
            url: 'https://www.xinnet.com/',
            subcategory: 'domain'
        },
        {
            title: '爱名网',
            description: 'Specializes in domain trading, offering professional domain backordering and auction services',
            tags: ['Domain Trading', 'Domain Name Registration', 'Domain Name Auction'],
            url: 'https://www.22.cn/',
            subcategory: 'domain'
        },
        {
            title: 'NameSilo',
            description: 'International domain registrar supporting Alipay, with free privacy protection and stable renewal pricing',
            tags: ['Alipay', 'Privacy Protection', 'Stable Renewal'],
            url: 'https://www.namesilo.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Gandi',
            description: 'Veteran European domain registrar emphasizing privacy and environmental protection, ideal for tech enthusiasts',
            tags: ['Privacy Protection', 'Eco-Friendly Philosophy', 'Tech Enthusiasts'],
            url: 'https://www.gandi.net/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Porkbun',
            description: 'Humorous-styled domain registrar with frequent low-price promotions and free Whois protection',
            tags: ['Discount Promotions', 'Whois Protection', 'Specialized Services'],
            url: 'https://porkbun.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Hover',
            description: 'Simple and user-friendly domain registrar focused exclusively on domain registration without upselling',
            tags: ['Clean Interface', 'Domain Focused', 'No Upselling'],
            url: 'https://www.hover.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Dynadot',
            description: 'Supports bulk domain management, offering professional services for domain investors',
            tags: ['Bulk Management', 'Domain Investment', 'Professional Services'],
            url: 'https://www.dynadot.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Sedo',
            description: 'World\'s largest domain marketplace with escrow-protected transactions',
            tags: ['Domain Trading', 'Escrow Service', 'Global Market'],
            url: 'https://sedo.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Flippa',
            description: 'Domain + website marketplace for investors and traders',
            tags: ['Website Trading', 'Domain Trading', 'Investment Platform'],
            url: 'https://flippa.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'DropCatch',
            description: 'Specializes in expired domain catching with high success rate',
            tags: ['Expired Domains', 'Domain Snatching', 'High Success Rate'],
            url: 'https://www.dropcatch.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: '金名网',
            description: 'Chinese professional domain auction platform with localized transaction process',
            tags: ['Domain Auction', 'Domestic Trading', 'Localized Services'],
            url: 'https://www.juming.com/',
            subcategory: 'domain'
        },
        {
            title: 'AWS',
            description: 'Amazon Web Services - The world\'s most comprehensive and broadly adopted cloud platform',
            tags: ['Cloud Services', 'Servers', 'Storage'],
            url: 'https://aws.amazon.com/',
            subcategory: 'server',
            needsMagic: true
        },
        {
            title: 'Cloudflare',
            description: 'Network security and performance services including CDN, DNS management, and DDoS protection',
            tags: ['CDN', 'Network Security', 'DNS'],
            url: 'https://www.cloudflare.com/',
            subcategory: 'network'
        },
        {
            title: 'PayPal',
            description: 'Global leader in online payments supporting cross-border e-commerce transactions',
            tags: ['Payment System', 'Cross-Border Payments', 'E-Commerce Payments'],
            url: 'https://www.paypal.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Stripe',
            description: 'Payment infrastructure for internet businesses supporting multiple payment methods and currencies',
            tags: ['Payment Processing', 'API', 'Subscription Payments'],
            url: 'https://stripe.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: '2Checkout(Verifone)',
            description: 'Supports global payment methods (including localized options), ideal for digital goods and services',
            tags: ['Global Payments', 'Digital Goods', 'Localized Payments'],
            url: 'https://www.2checkout.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Adyen',
            description: 'Leading European payment platform supporting omnichannel payments (online/offline), suitable for enterprises',
            tags: ['Omnichannel Payments', 'European Payments', 'Enterprise Solutions'],
            url: 'https://www.adyen.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: '万里汇(WorldFirst)',
            description: 'Alibaba-affiliated platform supporting Amazon/eBay settlements with low CNY withdrawal fees (0.3% cap) and multi-currency accounts',
            tags: ['Cross-Border Settlements', 'Low Fees', 'Platform Payments'],
            url: 'https://www.worldfirst.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'PingPong',
            description: 'Focuses on Chinese sellers, supports Amazon/Shopify with ~1% fees, offers VISA cards and supplier payments',
            tags: ['Cross-Border Payments', 'Chinese Sellers', 'VISA Cards'],
            url: 'https://www.pingpongx.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Airwallex(空中云汇)',
            description: 'Multi-currency accounts supporting global collections and batch payments, transparent fees (0.3%-1%), ideal for B2B/high-frequency trading',
            tags: ['Multi-Currency Accounts', 'Batch Payments', 'B2B Payments'],
            url: 'https://www.airwallex.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: '连连支付(LianLian Pay)',
            description: 'Wide platform integration (Wish/Shopee etc.), supports direct CNY withdrawals with ~0.7% fees',
            tags: ['Cross-Border Payments', 'Direct Withdrawals', 'Platform Settlements'],
            url: 'https://www.lianlianpay.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Payoneer(派安盈)',
            description: 'Provides virtual bank accounts (USD/GBP/EUR etc.), suitable for platform commissions and freelancer payments, with ~1.2% withdrawal fees',
            tags: ['Virtual Accounts', 'Cross-Border Payments', 'Platform Commissions'],
            url: 'https://www.payoneer.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Amazon Pay',
            description: 'Official Amazon payment solution with high buyer trust, ideal for Amazon ecosystem',
            tags: ['Amazon Payments', 'Official Payment', 'High Trust'],
            url: 'https://pay.amazon.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Shopify Payments',
            description: 'Built-in Shopify payment (powered by Stripe), fees vary by plan (2.4%-2.9%)',
            tags: ['Shopify Built-in', 'E-Commerce Payments', 'Credit Card Processing'],
            url: 'https://www.shopify.com/payments',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Alipay Global(支付宝国际版)',
            description: 'Ideal for Chinese/SEA markets, provides localized payment experience',
            tags: ['Alipay', 'Chinese Market', 'Localized Payments'],
            url: 'https://global.alipay.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Wise(原TransferWise)',
            description: 'Multi-currency virtual accounts with low international transfer fees, suitable for B2B payments and overseas remittance',
            tags: ['Multi-Currency Accounts', 'Low Fees', 'International Transfers'],
            url: 'https://wise.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Authorize.Net',
            description: 'Professional credit card processing with payment gateway, optimized for US/Canada markets',
            tags: ['Credit Card Processing', 'Payment Gateway', 'North America'],
            url: 'https://www.authorize.net/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Shopify ERP',
            description: 'Shopify-integrated ERP system for inventory, order and financial management',
            tags: ['ERP', 'Inventory Management', 'Order Processing'],
            url: 'https://www.shopify.com/enterprise/erp',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'Odoo',
            description: 'Open-source modular ERP system suitable for businesses of all sizes',
            tags: ['Open-Source ERP', 'Business Management', 'E-Commerce Integration'],
            url: 'https://www.odoo.com/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'SAP Business One',
            description: 'Comprehensive features (finance, supply chain, production) for global enterprises with multi-language/currency support',
            tags: ['Enterprise ERP', 'Globalization', 'Cross-Border Business'],
            url: 'https://www.sap.com/products/business-one.html',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'Oracle NetSuite',
            description: 'Cloud ERP covering finance, inventory and order management, ideal for global operations',
            tags: ['Cloud ERP', 'Global Business', 'Financial Management'],
            url: 'https://www.netsuite.com/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'Microsoft Dynamics 365',
            description: 'Seamless Microsoft ecosystem integration with omnichannel sales and supply chain management',
            tags: ['Microsoft Ecosystem', 'Omnichannel', 'Supply Chain'],
            url: 'https://dynamics.microsoft.com/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: '店小秘',
            description: 'Multi-platform support (Amazon/eBay/Shopify etc.) with order/inventory/purchase features for SMB sellers',
            tags: ['SMB Sellers', 'Multi-Platform', 'Cross-Border E-Commerce'],
            url: 'https://www.dianxiaomi.com/',
            subcategory: 'erp'
        },
        {
            title: '马帮ERP',
            description: 'Cross-border e-commerce focused ERP with supply chain, finance and multi-warehouse coordination',
            tags: ['Cross-Border E-Commerce', 'Supply Chain', 'Multi-Warehouse'],
            url: 'https://www.mabangerp.com/',
            subcategory: 'erp'
        },
        {
            title: '通途ERP',
            description: 'Covers order processing, logistics tracking and profit calculation, integrated with major platforms',
            tags: ['Cross-Border E-Commerce', 'Logistics Tracking', 'Profit Analysis'],
            url: 'https://www.tongtool.com/',
            subcategory: 'erp'
        },
        {
            title: '赛盒ERP',
            description: 'AI-powered operations tool for Amazon/independent stores with data analysis automation',
            tags: ['Smart Operations', 'Amazon', 'Data Analytics'],
            url: 'https://www.saihesoft.com/',
            subcategory: 'erp'
        },
        {
            title: '领星ERP(原积加)',
            description: 'Amazon-focused solution for refined operations, financial accounting and ad management',
            tags: ['Amazon', 'Precision Operations', 'Ad Management'],
            url: 'https://www.lingxing.com/',
            subcategory: 'erp'
        },
        {
            title: '旺店通',
            description: 'Specialized for SEA markets (Shopee/Lazada) with multi-platform order synchronization',
            tags: ['SEA E-Commerce', 'Multi-Platform', 'Order Sync'],
            url: 'https://www.wangdian.cn/',
            subcategory: 'erp'
        },
        {
            title: '易仓ERP',
            description: 'Cross-border supply chain specialist supporting overseas warehouses and FBA management',
            tags: ['Supply Chain', 'Overseas Warehouses', 'FBA Management'],
            url: 'https://www.eccang.com/',
            subcategory: 'erp'
        },
        {
            title: '船长BI(CaptainBI)',
            description: 'Amazon-focused data analysis tool providing deep market insights',
            tags: ['Amazon', 'Data Analytics', 'Market Intelligence'],
            url: 'https://www.captainbi.com/',
            subcategory: 'erp'
        },
        {
            title: 'ERPNext',
            description: 'Open-source ERP for technical teams with cross-border e-commerce modules',
            tags: ['Open-Source', 'Custom Development', 'Cross-Border E-Commerce'],
            url: 'https://erpnext.com/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'QuickBooks Commerce(原TradeGecko)',
            description: 'Shopify ecosystem ERP specializing in inventory/order management for independent stores',
            tags: ['Shopify Ecosystem', 'Inventory Control', 'Independent Stores'],
            url: 'https://quickbooks.intuit.com/global/commerce/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'Brightpearl',
            description: 'Retail/wholesale focused ERP integrated with BigCommerce and other platforms',
            tags: ['Retail Wholesale', 'BigCommerce', 'Business Management'],
            url: 'https://www.brightpearl.com/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'Dolphin ERP',
            description: 'Budget-friendly solution for startups with multi-platform order collection',
            tags: ['Startup-Friendly', 'Low Cost', 'Order Collection'],
            url: 'https://www.dolphin-erp.com/',
            subcategory: 'erp'
        },
        {
            title: 'Ranktank',
            description: 'Professional SEO toolkit for keyword research, competitor analysis and site audits',
            tags: ['SEO Tools', 'Keyword Research', 'Site Audit'],
            url: 'https://www.ranktank.org/',
            subcategory: 'seo',
            needsMagic: true
        },
        {
            title: 'KeywordTool.io',
            description: 'Professional keyword research tool for discovering long-tail keywords and search trends',
            tags: ['Keyword Research', 'Long-Tail Keywords', 'SEO'],
            url: 'https://keywordtool.io/',
            subcategory: 'keyword',
            needsMagic: true
        },
        {
            title: 'Ubersuggest',
            description: 'Comprehensive SEO tool for keyword suggestions, content ideas and competitor analysis',
            tags: ['Keyword Tool', 'SEO Analysis', 'Content Ideas'],
            url: 'https://neilpatel.com/ubersuggest/',
            subcategory: 'keyword',
            needsMagic: true
        },
        {
            title: 'Temp Mail',
            description: 'Temporary email service providing disposable addresses for privacy protection',
            tags: ['Temporary Email', 'Privacy Protection', 'Disposable Mail'],
            url: 'https://temp-mail.org/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: '10 Minute Mail',
            description: '10-minute lifespan (extendable), ad-free temporary email service',
            tags: ['Temporary Email', '10-Minute', 'No Ads'],
            url: 'https://10minutemail.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: 'Guerrilla Mail',
            description: 'Permanent email address (requires manual refresh) with attachment viewing support',
            tags: ['Temporary Email', 'Attachment Viewing', 'Permanent Address'],
            url: 'https://www.guerrillamail.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: 'Mailinator',
            description: 'Public disposable email service with instant inbox access, no registration required',
            tags: ['Disposable Email', 'Instant Inbox', 'No Registration'],
            url: 'https://www.mailinator.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        }  ,
        {   
            title: 'Mailinator',
            description: 'No registration required, public email pool (e.g. xxx@mailinator.com), ideal for testing environments',
            tags: ['Public Email', 'Testing Environment', 'No Registration'],
            url: 'https://www.mailinator.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: 'YOPmail',
            description: 'French provider with email format xxx@yopmail.com, long-term valid (requires periodic login)',
            tags: ['Long-Term Valid', 'Temporary Email', 'No Registration'],
            url: 'https://yopmail.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: 'ThrowAwayMail',
            description: 'Multi-language support with configurable auto-destruct timer (1 hour to 1 month)',
            tags: ['Custom Expiration', 'Multi-Language', 'Temporary Email'],
            url: 'https://www.throwawaymail.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: '24mail',
            description: 'Stable access in China, temporary email service with 24-hour auto-deletion',
            tags: ['China Accessible', '24-Hour', 'Temporary Email'],
            url: 'https://24mail.chacuo.net/',
            subcategory: 'temp-mail'
        },
        {
            title: '临时邮箱网(Linshi Youxiang)',
            description: 'Chinese interface with customizable prefix, 12-hour email retention',
            tags: ['Chinese Interface', 'Custom Prefix', '12-Hour'],
            url: 'https://linshiyouxiang.net/',
            subcategory: 'temp-mail'
        },
        {
            title: 'Crazymailing',
            description: 'Temporary email + anonymous sending, suitable for short-term needs',
            tags: ['Anonymous Sending', 'Short-Term Email', 'Temporary Email'],
            url: 'https://www.crazymailing.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: 'Proxyscrape',
            description: 'Proxy IP service providing HTTP/SOCKS5 proxies with region selection',
            tags: ['Proxy IP', 'HTTP Proxy', 'SOCKS5'],
            url: 'https://proxyscrape.com/',
            subcategory: 'ip-proxy',
            needsMagic: true
        },
        {
            title: 'Multilogin',
            description: 'Industry leader in customizable browser fingerprints (User-Agent, Canvas, WebGL, timezone etc.), simulating different devices/OS',
            tags: ['Browser Fingerprinting', 'Multi-Account Management', 'Cross-Border E-Commerce'],
            url: 'https://multilogin.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'AdsPower',
            description: 'Cost-effective solution with team collaboration and RPA automation, suitable for social media multi-account management',
            tags: ['Browser Fingerprinting', 'Chinese Interface', 'Automation Scripts'],
            url: 'https://www.adspower.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Dolphin{anty}',
            description: 'Open-source free solution with Chromium support, customizable fingerprint parameters for developers/small teams',
            tags: ['Open-Source Free', 'Browser Fingerprinting', 'Low-Cost Solution'],
            url: 'https://anty.dolphin.ru.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Kameleo',
            description: 'Specializes in fingerprint spoofing and privacy protection with dynamic switching and mobile simulation',
            tags: ['High Anonymity', 'Dynamic Fingerprinting', 'Mobile Simulation'],
            url: 'https://kameleo.io/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Linken Sphere',
            description: 'Veteran anti-detection browser with advanced fingerprint modification and Tor network support',
            tags: ['Advanced Anti-Detection', 'Automation Tools', 'Tor Network'],
            url: 'https://linkensphere.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Ghost Browser',
            description: 'Lightweight multi-account management with Chromium-based session isolation',
            tags: ['Lightweight', 'Session Isolation', 'Simple Operation'],
            url: 'https://ghostbrowser.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'Incogniton',
            description: 'Affordable fingerprint browser with pay-as-you-go pricing and team collaboration',
            tags: ['Budget-Friendly', 'Browser Fingerprinting', 'Team Collaboration'],
            url: 'https://incogniton.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'VMLogin',
            description: 'Chinese software supporting multi-browser instances and API integration, optimized for e-commerce and crawlers',
            tags: ['Chinese Software', 'API Integration', 'Affordable Pricing'],
            url: 'https://vmlogin.com/',
            subcategory: 'browser',
            needsMagic: true
        },
        {
            title: 'GMX Mail',
            description: 'Free email service with large storage and multi-account management',
            tags: ['Email', 'Free Mailbox', 'Account Resources'],
            url: 'https://www.gmx.com/',
            subcategory: 'account'
        },
        {
            title: 'Coursera',
            description: 'Online learning platform offering e-commerce and digital marketing courses from top universities',
            tags: ['Online Education', 'Digital Marketing', 'E-Commerce Courses'],
            url: 'https://www.coursera.org/',
            subcategory: 'learning',
            needsMagic: true
        },
        {
            title: 'Link Building HQ',
            description: 'Professional backlink building service to improve domain authority',
            tags: ['Link Building', 'SEO', 'Domain Authority'],
            url: 'https://www.linkbuildinghq.com/',
            subcategory: 'backlink',
            needsMagic: true
        }
    ],
    
    // AI Writing
    ai_writing: [
        // Academic Paper Writing
        {
            title: 'Paperpal',
            description: 'AI writing assistant for academic researchers offering grammar checking and formatting',
            tags: ['Paper Polishing', 'Academic Writing', 'Grammar Check'],
            url: 'https://paperpal.com/',
            subcategory: 'academic_paper',
            needsMagic: true
        },
        {
            title: '稿易AI论文(Gaoyi AI)',
            description: 'Chinese academic paper writing tool with content generation and optimization',
            tags: ['Chinese Papers', 'Academic Writing', 'Paper Generation'],
            url: 'https://gaoyi.com/',
            subcategory: 'academic_paper',
            needsMagic: false
        },
        {
            title: '千笔AI论文(Qianbi AI)',
            description: 'AI paper writing tool tailored for Chinese academic requirements with structure optimization',
            tags: ['Paper Writing', 'Chinese Academic', 'Structure Optimization'],
            url: 'https://www.qianbi.com/',
            subcategory: 'academic_paper',
            needsMagic: false
        },
        {
            title: '66AI论文(66 AI)',
            description: 'Academic writing assistant for generating paragraphs and references',
            tags: ['Paper Tool', 'References', 'Content Generation'],
            url: 'https://66ai.com/',
            subcategory: 'academic_paper',
            needsMagic: false
        },
        {
            title: '茅茅虫(Maomaochong)',
            description: 'Chinese academic writing assistant with plagiarism check and rewriting features',
            tags: ['Plagiarism Check', 'Rewriting Tool', 'Academic Writing'],
            url: 'https://www.maomchong.com/',
            subcategory: 'academic_paper',
            needsMagic: false
        },
        {
            title: 'Grammarly Academic',
            description: 'Advanced grammar and style checker for academic writing improvement',
            tags: ['Grammar Check', 'Academic English', 'Writing Improvement'],
            url: 'https://www.grammarly.com/edu',
            subcategory: 'academic_paper',
            needsMagic: true
        },
        {
            title: 'Wordvice AI',
            description: 'Professional academic editing and proofreading for international journal submissions',
            tags: ['Paper Editing', 'Journal Submission', 'Academic English'],
            url: 'https://wordvice.ai/',
            subcategory: 'academic_paper',
            needsMagic: true
        },
        {
            title: 'Scholarcy',
            description: 'Academic literature summarizer extracting key information from research papers',
            tags: ['Academic Summary', 'Research Assistant', 'Literature Analysis'],
            url: 'https://www.scholarcy.com/',
            subcategory: 'academic_paper',
            needsMagic: true
        },
        {
            title: 'Essaybot',
            description: 'AI tool for academic papers and assignments with citation suggestions',
            tags: ['Paper Writing', 'Citation Management', 'Academic Assistant'],
            url: 'https://www.essaybot.com/',
            subcategory: 'academic_paper',
            needsMagic: true
        },
        
        // Official Document Writing
        {
            title: '新华妙笔(Xinhua Miaobi)',
            description: 'AI assistant for government documents including reports and summaries',
            tags: ['Government Documents', 'Official Writing', 'Party Documents'],
            url: 'https://miaobixinhua.com/',
            subcategory: 'official_document',
            needsMagic: false
        },
        {
            title: '讯飞文书(Xunfei Wenshu)',
            description: 'Smart document system for government and corporate document generation',
            tags: ['Official Writing', 'Document Generation', 'Government Files'],
            url: 'https://www.xfyun.cn/solution/wenxie',
            subcategory: 'official_document',
            needsMagic: false
        },
        {
            title: '文状元(Wenzhuangyuan)',
            description: 'Professional AI assistant for standardized government/application documents',
            tags: ['Document Templates', 'Standardized Writing', 'Corporate Documents'],
            url: 'https://wenzhuangyuan.com/',
            subcategory: 'official_document',
            needsMagic: false
        },
        {
            title: '深言达意(Shenyan Dayi)',
            description: 'Deep learning-based tool for government reports and work summaries',
            tags: ['Formal Documents', 'Work Summary', 'Report Generation'],
            url: 'https://shenyandayi.com/',
            subcategory: 'official_document',
            needsMagic: false
        },
        
        // Fiction and Literary Creation
        {
            title: '笔灵AI小说(Biling AI)',
            description: 'AI fiction writing assistant supporting plot development and character creation',
            tags: ['Novel Writing', 'Creative Writing', 'Character Development'],
            url: 'https://bilingai.com/',
            subcategory: 'fiction_writing',
            needsMagic: false
        },
        {
            title: '墨狐AI(Mohu AI)',
            description: 'Professional Chinese novel writing assistant for complete storylines',
            tags: ['Novel Creation', 'Plot Development', 'Chinese Writing'],
            url: 'https://mohu.com/',
            subcategory: 'fiction_writing',
            needsMagic: false
        },
    
        {
            title: 'Caiyun Xiaomeng',
            description: 'An interactive AI novel creation platform where readers can participate in decision-making about the story\'s direction',
            tags: ['interactive fiction', 'creative writing', 'story generation'],
            url: 'https://if.caiyunai.com/',
            subcategory: 'fiction_writing',
            needsMagic: false
        },
        {
            title: 'MidReal',
            description: 'An interactive AI novel creation tool that allows users to participate in plot development',
            tags: ['interactive narrative', 'novel writing', 'plot branches'],
            url: 'https://midreal.ai/',
            subcategory: 'fiction_writing',
            needsMagic: true
        },
        {
            title: 'Sudowrite',
            description: 'An AI tool designed for novelists and creative writers to help conceive stories and overcome writing bottlenecks',
            tags: ['novel writing', 'creative writing', 'story conception'],
            url: 'https://www.sudowrite.com/',
            subcategory: 'fiction_writing',
            needsMagic: true
        },
        {
            title: 'NovelAI',
            description: 'An AI platform focused on narrative and novel writing that can generate coherent storylines and dialogues',
            tags: ['novel generation', 'plot creation', 'character development'],
            url: 'https://novelai.net/',
            subcategory: 'fiction_writing',
            needsMagic: true
        },
        
        // Marketing and Commercial Copy
        {
            title: 'Huiwa AI Copywriting',
            description: 'An AI copywriting tool focused on the e-commerce and marketing fields, generating advertising copy, product descriptions, etc.',
            tags: ['e-commerce copywriting', 'product descriptions', 'marketing text'],
            url: 'https://huiwa.com/',
            subcategory: 'marketing_copy',
            needsMagic: false
        },
        {
            title: 'Copy.ai',
            description: 'An AI copywriting generation tool for marketing and business, providing various copywriting templates',
            tags: ['marketing copywriting', 'email writing', 'social media'],
            url: 'https://www.copy.ai/',
            subcategory: 'marketing_copy',
            needsMagic: true
        },
        {
            title: 'Jasper',
            description: 'A professional AI content creation platform that provides various templates and functions for marketing teams and content creators',
            tags: ['content marketing', 'blog writing', 'professional creation'],
            url: 'https://www.jasper.ai/',
            subcategory: 'marketing_copy',
            needsMagic: true
        },
        {
            title: 'Writesonic',
            description: 'An all - around AI writing platform that provides content creation services such as blogs, advertisements, and product descriptions for enterprises and individuals',
            tags: ['content creation', 'marketing copywriting', 'SEO optimization'],
            url: 'https://writesonic.com/',
            subcategory: 'marketing_copy',
            needsMagic: true
        },
        
        // Blog and Content Creation
        {
            title: 'Songguo AI Writing',
            description: 'A Chinese AI writing tool focused on new media content creation, suitable for content generation on official accounts, self - media, etc.',
            tags: ['new media', 'official accounts', 'content creation'],
            url: 'https://songguo.ai/',
            subcategory: 'blog_media',
            needsMagic: false
        },
        {
            title: 'Chengpian',
            description: 'An AI writing assistant for self - media creators, supporting the generation of hot articles, professional content, etc.',
            tags: ['self - media', 'hot content', 'original articles'],
            url: 'https://chengpian.com/',
            subcategory: 'blog_media',
            needsMagic: false
        },
        {
            title: 'Xiaoyu AI Writing',
            description: 'An AI assistant focused on new media creation, providing various writing styles and templates',
            tags: ['self - media', 'writing styles', 'content creation'],
            url: 'https://xiaoyu.ai/',
            subcategory: 'blog_media',
            needsMagic: false
        },
        {
            title: 'AI New Media Articles (Quark)',
            description: 'A new media article creation tool launched by Quark Search, supporting one - click generation of complete articles',
            tags: ['new media', 'one - click generation', 'content creation'],
            url: 'https://www.myquark.cn/',
            subcategory: 'blog_media',
            needsMagic: false
        },
        {
            title: 'Rytr',
            description: 'An affordable AI writing assistant suitable for blog, email, and social media content creation',
            tags: ['content creation', 'cost - effective', 'multilingual'],
            url: 'https://rytr.me/',
            subcategory: 'blog_media',
            needsMagic: true
        },
        
        // Multilingual Writing and Translation
        {
            title: 'QuillBot',
            description: 'An intelligent rewriting and polishing tool that provides paraphrasing, summarizing, and grammar checking functions',
            tags: ['text rewriting', 'summary tool', 'grammar checking'],
            url: 'https://quillbot.com/',
            subcategory: 'multilingual',
            needsMagic: true
        },
        {
            title: 'Youdao Translate · AI Writing',
            description: 'An AI writing assistant launched by NetEase Youdao, supporting multilingual translation and writing polishing',
            tags: ['Chinese - English translation', 'writing polishing', 'grammar correction'],
            url: 'https://ai.youdao.com/',
            subcategory: 'multilingual',
            needsMagic: false
        },
        {
            title: 'DeepL Write',
            description: 'An AI writing assistant launched by the top - level translation service DeepL, focused on multilingual writing optimization',
            tags: ['multilingual writing', 'advanced translation', 'content polishing'],
            url: 'https://www.deepl.com/write',
            subcategory: 'multilingual',
            needsMagic: true
        },
        {
            title: 'DeepL',
            description: 'A high - quality AI translation tool supporting accurate translation between multiple languages',
            tags: ['translation tool', 'multilingual', 'professional translation'],
            url: 'https://www.deepl.com/',
            subcategory: 'multilingual',
            needsMagic: true
        },
        {
            title: 'Descript',
            description: 'A video and audio editing platform providing advanced transcription and subtitle generation functions',
            tags: ['audio transcription', 'video subtitles', 'content editing'],
            url: 'https://www.descript.com/',
            subcategory: 'multilingual',
            needsMagic: true
        },
        {
            title: 'Otter.ai',
            description: 'A real - time speech - to - text tool suitable for meeting records and interview transcription',
            tags: ['meeting records', 'speech - to - text', 'real - time transcription'],
            url: 'https://otter.ai/',
            subcategory: 'multilingual',
            needsMagic: true
        },
        
        // Office and Comprehensive Writing
        {
            title: 'Huoshan Writing (Doubao)',
            description: 'An all - around AI writing tool launched by ByteDance, supporting various office scenarios and document types',
            tags: ['document writing', 'email generation', 'comprehensive office'],
            url: 'https://www.doubao.com/',
            subcategory: 'office_writing',
            needsMagic: false
        },
        {
            title: 'Notion AI',
            description: 'An AI writing assistant integrated into Notion, which can generate and edit content directly in notes and documents',
            tags: ['document writing', 'note assistant', 'content generation'],
            url: 'https://www.notion.so/product/ai',
            subcategory: 'office_writing',
            needsMagic: true
        },
        {
            title: 'iFlytek Writing',
            description: 'An AI writing assistant launched by iFlytek, suitable for various office documents and content creation',
            tags: ['office documents', 'intelligent writing', 'multi - scenario'],
            url: 'https://www.xfyun.cn/services/xiezuo',
            subcategory: 'office_writing',
            needsMagic: false
        },
        {
            title: 'FlowUs AI',
            description: 'An AI writing assistant integrated into the FlowUs collaboration platform, supporting the generation of various content such as documents, tables, and PPTs',
            tags: ['collaborative documents', 'team writing', 'multi - format support'],
            url: 'https://flowus.cn/product/ai',
            subcategory: 'office_writing',
            needsMagic: false
        },
        {
            title: 'Xunjie AI Writing',
            description: 'An AI writing tool focused on office application scenarios, supporting the generation of various documents, PPTs, etc.',
            tags: ['office writing', 'PPT generation', 'document creation'],
            url: 'https://xunjiepdf.com/ai',
            subcategory: 'office_writing',
            needsMagic: false
        },
        {
            title: 'Kubao AI Work Assistant',
            description: 'An office writing tool integrating online documents and AI technology to improve office efficiency',
            tags: ['document processing', 'collaborative office', 'AI assistance'],
            url: 'https://kubaopdf.com/ai',
            subcategory: 'office_writing',
            needsMagic: false
        },
        {
            title: 'ChatGPT',
            description: 'An intelligent AI dialogue system launched by OpenAI, which can be used for various text generation and writing tasks',
            tags: ['AI assistant', 'text generation', 'multi - purpose'],
            url: 'https://chat.openai.com/',
            subcategory: 'office_writing',
            isRecommended: true,
            needsMagic: true
        },
        {
            title: 'Claude',
            description: 'An AI assistant developed by Anthropic, good at long - text creation, analysis, and dialogue',
            tags: ['AI assistant', 'long - text', 'conversational AI'],
            url: 'https://claude.ai/',
            subcategory: 'office_writing',
            needsMagic: true
        },
        
        // Script and Creative Content
        {
            title: 'Chuangyi AI',
            description: 'An AI tool focused on video script and creative content generation, suitable for short - video creators',
            tags: ['video scripts', 'short videos', 'creative content'],
            url: 'https://chuangyi.ai/',
            subcategory: 'script_content',
            needsMagic: false
        },
        {
            title: 'iFlytek Huiwen',
            description: 'A creative content generation tool launched by iFlytek, good at scripts, short dramas, and creative stories',
            tags: ['creative scripts', 'short - drama content', 'story generation'],
            url: 'https://www.xfyun.cn/services/huiwen',
            subcategory: 'script_content',
            needsMagic: false
        },
        {
            title: 'Wanneng Xiaoin',
            description: 'An AI assistant for creative content production, supporting the generation of various creative texts such as scripts, outlines, and dialogues',
            tags: ['creative production', 'content creation', 'script generation'],
            url: 'https://wannengxiaoin.com/',
            subcategory: 'script_content',
            needsMagic: false
        },
        {
            title: 'CaptionBot.ai',
            description: 'An AI tool that automatically generates subtitles and descriptive text for pictures and videos',
            tags: ['picture subtitles', 'video descriptions', 'AI subtitles'],
            url: 'https://captionbot.ai/',
            subcategory: 'script_content',
            needsMagic: true
        },
        {
            title: 'Canva Text Generator',
            description: 'An AI text generation tool built into the Canva design platform, which can create titles, descriptions, and short articles',
            tags: ['design text', 'title generation', 'combination of pictures and text'],
            url: 'https://www.canva.com/features/ai - text - generator/',
            subcategory: 'script_content',
            needsMagic: true
        },
        
        // Speed Reading and Summarization
        {
            title: 'ReadPo',
            description: 'A professional AI text summarization and speed - reading tool that can quickly extract the core ideas and key points of articles',
            tags: ['article summarization', 'speed - reading tool', 'content extraction'],
            url: 'https://readpo.com/',
            subcategory: 'summary_tools',
            needsMagic: true
        },
        {
            title: 'Xiaoyutai',
            description: 'A Chinese long - text summarization and key - point extraction tool to help users quickly understand article content',
            tags: ['Chinese summarization', 'content extraction', 'fast reading'],
            url: 'https://xiaoyutai.com/',
            subcategory: 'summary_tools',
            needsMagic: false
        },
        {
            title: 'Hemingway Editor',
            description: 'A text - editing tool to help improve writing clarity and readability',
            tags: ['text clarity', 'writing improvement', 'readability'],
            url: 'https://hemingwayapp.com/',
            subcategory: 'summary_tools',
            needsMagic: true
        },
        
        // Interactive Writing
        {
            title: 'MidReal',
            description: 'An interactive AI novel creation tool that allows users to participate in plot development',
            tags: ['interactive narrative', 'novel writing', 'plot branches'],
            url: 'https://midreal.ai/',
            subcategory: 'interactive_writing',
            needsMagic: true
        },
        {
            title: 'Caiyun Xiaomeng',
            description: 'An interactive AI novel creation platform where readers can participate in decision - making about the story\'s direction',
            tags: ['interactive fiction', 'creative writing', 'story generation'],
            url: 'https://if.caiyunai.com/',
            subcategory: 'interactive_writing',
            needsMagic: false
        }
    ],
    // AI图像
    ai_image: [
        // 通用AI图片生成
        {
            title: 'MidJourney',
            description: 'A powerful AI art generation tool that creates high - quality art through text prompts',
            tags: ['AI art', 'image generation', 'creative design'],
            url: 'https://www.midjourney.com/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'DALL·E 3',
            description: 'OpenAI\'s advanced AI image generation system, supporting the conversion of complex text descriptions into precise images',
            tags: ['OpenAI', 'text-to-image', 'high-quality images'],
            url: 'https://openai.com/dall-e-3',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'Stable Diffusion',
            description: 'An open - source text - to - image AI model that supports local deployment and custom fine - tuning',
            tags: ['open - source model', 'custom deployment', 'community support'],
            url: 'https://stability.ai/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'DreamStudio',
            description: 'Stability AI\'s official platform, providing cloud - based applications for the Stable Diffusion model',
            tags: ['Stability AI', 'cloud generation', 'professional tool'],
            url: 'https://dreamstudio.ai/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'Firefly',
            description: 'Adobe\'s AI image generation tool, seamlessly integrated with Adobe Creative Cloud products',
            tags: ['Adobe', 'design integration', 'commercial license'],
            url: 'https://firefly.adobe.com/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'Leonardo.AI',
            description: 'A high - precision and diverse - style AI image generation platform',
            tags: ['high precision', 'diverse style', 'creative tool'],
            url: 'https://leonardo.ai/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'Bing Image Creator',
            description: 'Microsoft\'s free AI image generation tool, based on the DALL-E model',
            tags: ['Microsoft', 'free tool', 'easy operation'],
            url: 'https://www.bing.com/create',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'DeepFloyd IF',
            description: 'A multi - modal generative model that supports high - quality image generation and precise text understanding',
            tags: ['multi - modal', 'high - quality', 'precise text understanding'],
            url: 'https://deepfloyd.ai/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'Playground AI',
            description: 'A free online AI image generation platform with user - friendly interface design',
            tags: ['free tool', 'user - friendly', 'online generation'],
            url: 'https://playgroundai.com/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'NightCafe',
            description: 'A creative AI art community that supports multiple algorithms and styles of creation',
            tags: ['creative community', 'multiple algorithms', 'diverse styles'],
            url: 'https://nightcafe.studio/',
            subcategory: 'general_image',
            needsMagic: true
        },
        
        // 人像与头像生成
        {
            title: 'Lensa AI',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://prisma-ai.com/lensa',
            subcategory: 'portrait',
            needsMagic: true
        },
        {
            title: 'Generated Photos',
            description: 'An AI - generated virtual human image library that provides a variety of human images',
            tags: ['virtual human image', 'diverse', 'commercial license'],
            url: 'https://generated.photos/',
            subcategory: 'portrait',
            needsMagic: true
        },
        {
            title: 'This Person Does Not Exist',
            description: 'An AI - generated virtual human image library that provides a variety of human images',
            tags: ['GAN technology', 'virtual human face', 'realistic effect'],
            url: 'https://thispersondoesnotexist.com/',
            subcategory: 'portrait',
            needsMagic: true
        },
        {
            title: 'PortraitAI',
            description: 'An AI - generated virtual human image library that provides a variety of human images',
            tags: ['artistic portrait', 'style conversion', 'personal customization'],
            url: 'https://portraitai.com/',
            subcategory: 'portrait',
            needsMagic: true
        },
        {
            title: 'AvatarAI',
            description: 'An AI - generated virtual human image library that provides a variety of human images',
            tags: ['digital human image', 'commercial application', 'professional image'],
            url: 'https://avatarai.me/',
            subcategory: 'portrait',
            needsMagic: true
        },
        {
            title: 'Dawn AI',
            description: 'An AI - generated virtual human image library that provides a variety of human images',
            tags: ['mobile application', 'creative style', 'quick generation'],
            url: 'https://dawn-ai.com/',
            subcategory: 'portrait',
            needsMagic: true
        },
        
        // 背景与设计素材
        {
            title: 'Remove.bg',
            description: 'An AI tool that smartly removes the background of images, providing a transparent background in one click',
            tags: ['background removal', 'transparent background', 'one - click operation'],
            url: 'https://www.remove.bg/',
            subcategory: 'background',
            needsMagic: true
        },
        {
            title: 'Magic Studio',
            description: 'An AI image editing tool that provides background replacement and enhancement features, belonging to Canva',
            tags: ['background replacement', 'Canva', 'image editing'],
            url: 'https://magicstudio.com/',
            subcategory: 'background',
            needsMagic: true
        },
        {
            title: 'Patterned AI',
            description: 'An AI design tool that generates seamless textures and patterns',
            tags: ['seamless texture', 'pattern design', 'design素材'],
            url: 'https://patterned.ai/',
            subcategory: 'background',
            needsMagic: true
        },
        {
            title: 'Wallpaper Engine',
            description: 'An AI - generated dynamic wallpaper creation platform that provides a personalized desktop experience',
            tags: ['dynamic wallpaper', 'personalization', 'creative design'],
            url: 'https://www.wallpaperengine.io/',
            subcategory: 'background',
            needsMagic: true
        },
        
        // 品牌与商业设计
        {
            title: 'Looka',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['logo design', 'brand identity', 'AI design'],
            url: 'https://looka.com/',
            subcategory: 'brand_design',
            needsMagic: true
        },
        {
            title: 'Brandmark.io',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://brandmark.io/',
            subcategory: 'brand_design',
            needsMagic: true
        },
        {
            title: 'Canva AI',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://www.canva.com/ai-image-generator/',
            subcategory: 'brand_design',
            needsMagic: true
        },
        {
            title: 'VanceAI',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://vanceai.com/',
            subcategory: 'brand_design',
            needsMagic: true
        },
        
        // 照片修复与增强
        {
            title: 'MyHeritage InColor',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://www.myheritage.com/incolor',
            subcategory: 'photo_enhancement',
            needsMagic: true
        },
        {
            title: 'Topaz Photo AI',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://www.topazlabs.com/topaz-photo-ai',
            subcategory: 'photo_enhancement',
            needsMagic: true
        },
        {
            title: 'GFP-GAN',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://github.com/TencentARC/GFPGAN',
            subcategory: 'photo_enhancement',
            needsMagic: false
        },
        {
            title: 'Remini',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://remini.ai/',
            subcategory: 'photo_enhancement',
            needsMagic: true
        },
        {
            title: 'Bigjpg',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://bigjpg.com/',
            subcategory: 'photo_enhancement',
            needsMagic: false
        },
        
        // 动漫与二次元创作
        {
            title: 'Niji Journey',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://nijijourney.com/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: 'Waifu Labs',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://waifulabs.com/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: 'NovelAI',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://novelai.net/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: 'PixAI.art',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://pixai.art/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: '触手（Chushou)AI',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://chusu.cc/',
            subcategory: 'anime',
            needsMagic: false
        },
        
        // 娱乐与趣味工具
        {
            title: 'Reface',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://reface.app/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        {
            title: 'Imgflip',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://imgflip.com/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        {
            title: 'Voilà AI',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://voila-ai.com/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        {
            title: 'ToonMe',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://toonme.com/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        
        // 服装与时尚设计
        {
            title: 'ZMO.ai',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://zmo.ai/',
            subcategory: 'fashion',
            needsMagic: true
        },
        {
            title: 'TattooAI',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://tattooai.com/',
            subcategory: 'fashion',
            needsMagic: true
        },
        {
            title: 'Vmake',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://www.v-make.ai/',
            subcategory: 'fashion',
            needsMagic: true
        },
        
        // 图像编辑与处理
        {
            title: 'Photoshop AI',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://www.adobe.com/products/photoshop/generative-fill.html',
            subcategory: 'image_editing',
            needsMagic: true
        },
        {
            title: 'Picsart',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://picsart.com/',
            subcategory: 'image_editing',
            needsMagic: true
        },
        {
            title: 'ClipDrop',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://clipdrop.co/',
            subcategory: 'image_editing',
            needsMagic: true
        },
        {
            title: 'Fotor',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://www.fotor.com/',
            subcategory: 'image_editing',
            needsMagic: true
        },
        
        // 专业场景生成
        {
            title: 'Diagram.codes',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://diagram.codes/',
            subcategory: 'professional_scene',
            needsMagic: true
        },
        {
            title: 'Architechtures',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://architechtures.com/',
            subcategory: 'professional_scene',
            needsMagic: true
        },
        {
            title: 'InteriorAI',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://interiorai.com/',
            subcategory: 'professional_scene',
            needsMagic: true
        },
        {
            title: 'NVIDIA Canvas',
            description: 'An AI - driven logo design tool that helps create professional brand identities',
            tags: ['brand suite', 'logo design', 'color scheme'],
            url: 'https://www.nvidia.com/en-us/studio/canvas/',
            subcategory: 'professional_scene',
            needsMagic: true
        }
    ],
    // AI Chat
    ai_chat: [
        // General AI Assistant
        {
            title: 'ChatGPT',
            description: 'A large - language model developed by OpenAI, capable of natural conversations, answering questions, creating content, etc.',
            tags: ['general conversation', 'Q&A assistant', 'content creation'],
            url: 'https://chat.openai.com/',
            subcategory: 'general_assistant',
            isRecommended: true,
            needsMagic: true
        },
        {
            title: 'Claude',
            description: 'A conversational AI assistant developed by Anthropic, good at understanding context and long conversations',
            tags: ['intelligent conversation', 'long - text processing', 'context understanding'],
            url: 'https://claude.ai/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: 'ERNIE Bot',
            description: 'An artificial - intelligence language model launched by Baidu, capable of multi - round dialogue communication with people',
            tags: ['Chinese conversation', 'domestic model', 'Baidu AI'],
            url: 'https://yiyan.baidu.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Tongyi Qianwen',
            description: 'A large - language model developed by Alibaba, supporting multi - round dialogue and complex task processing',
            tags: ['Alibaba AI', 'multi - round dialogue', 'Chinese optimization'],
            url: 'https://qianwen.aliyun.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'iFlytek Xinghuo',
            description: 'A cognitive large - model launched by iFlytek, with strong Chinese understanding ability',
            tags: ['domestic AI', 'cognitive model', 'Chinese optimization'],
            url: 'https://xinghuo.xfyun.cn/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Zhipu Qingyan',
            description: 'A large - language model jointly developed by Zhipu AI and Tsinghua University, performing excellently in Chinese and general abilities',
            tags: ['ChatGLM', 'Tsinghua AI', 'academic support'],
            url: 'https://chatglm.cn/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Gemini',
            description: 'A multimodal AI model launched by Google, supporting various inputs such as text and images',
            tags: ['Google AI', 'multimodal', 'advanced reasoning'],
            url: 'https://gemini.google.com/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: 'Copilot',
            description: 'An AI assistant launched by Microsoft, integrated into Windows and Office products',
            tags: ['Microsoft AI', 'productivity tool', 'system integration'],
            url: 'https://copilot.microsoft.com/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: 'Doubao',
            description: 'An AI assistant launched by ByteDance, supporting various creation and office scenarios',
            tags: ['domestic AI', 'multi - scenario', 'creation assistant'],
            url: 'https://www.doubao.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'DeepSeek',
            description: 'A large - language model launched by DeepSeek AI, with a rich knowledge base and reasoning ability',
            tags: ['general AI', 'code ability', 'innovative model'],
            url: 'https://www.deepseek.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Kimi',
            description: 'An AI assistant launched by Moonshot, with strong long - text understanding and memory ability',
            tags: ['long - text understanding', 'knowledge Q&A', 'Chinese optimization'],
            url: 'https://kimi.moonshot.cn/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Tencent Yuanbao',
            description: 'An AI conversational assistant launched by Tencent, good at communication and creation in Chinese context',
            tags: ['Tencent AI', 'Chinese conversation', 'Hunyuan large - model'],
            url: 'https://hunyuan.tencent.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Baidu Xiaoying',
            description: 'A knowledge - enhanced AI assistant by Baidu, with up - to - date Internet information',
            tags: ['Baidu search', 'real - time information', 'knowledge Q&A'],
            url: 'https://info.baidu.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Tiangong AI',
            description: 'A Chinese large - language model launched by Kunlun Wanwei, with strong instruction - understanding ability',
            tags: ['Chinese AI', 'instruction understanding', 'domestic model'],
            url: 'https://tiangong.kunlun.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Bing New Bing',
            description: 'A conversational search experience combining the capabilities of Microsoft\'s search engine and AI',
            tags: ['AI search', 'Internet information', 'Microsoft AI'],
            url: 'https://www.bing.com/new',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: 'SenseChat',
            description: 'An AI assistant launched by SenseTime, with multi - round dialogue and knowledge reasoning abilities',
            tags: ['SenseTime AI', 'domestic model', 'multi - round dialogue'],
            url: 'https://chat.sensetime.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Xiaowukong',
            description: 'An AI assistant launched by Singularity AI, with good Chinese understanding and creation abilities',
            tags: ['Chinese AI', 'knowledge Q&A', 'Singularity AI'],
            url: 'https://openxlab.org.cn/apps/detail/singularity - ai/wukong',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Zidong Taichu',
            description: 'An AI assistant launched by the Institute of Automation, Chinese Academy of Sciences, with strong knowledge reasoning ability',
            tags: ['academic support', 'knowledge reasoning', 'CAS AI'],
            url: 'https://chatbot.automata - ai.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        
        // Game and Entertainment AI
        {
            title: 'Character.AI',
            description: 'A platform for creating and chatting with various AI characters, supporting custom character settings',
            tags: ['role - playing', 'personality customization', 'entertainment dialogue'],
            url: 'https://character.ai/',
            subcategory: 'entertainment_ai',
            needsMagic: true
        },
        {
            title: 'Doudou',
            description: 'An AI assistant focused on entertainment interaction, supporting various fun dialogue scenarios',
            tags: ['entertainment chat', 'leisure interaction', 'fun dialogue'],
            url: 'https://doudou.ai/',
            subcategory: 'entertainment_ai',
            needsMagic: false
        },
        {
            title: 'Koko AI',
            description: 'A platform providing interesting AI interaction experiences, supporting social and entertainment functions',
            tags: ['social AI', 'fun interaction', 'leisure chat'],
            url: 'https://www.koko.ai/',
            subcategory: 'entertainment_ai',
            needsMagic: true
        },
        {
            title: 'Zaomeng Ciyuan',
            description: 'A well - known domestic AI entertainment interaction platform, providing diverse AI experiences',
            tags: ['AI interaction', 'entertainment platform', 'leisure entertainment'],
            url: 'https://www.zaomeng.space/',
            subcategory: 'entertainment_ai',
            needsMagic: false
        },
        {
            title: 'Museland',
            description: 'An AI interaction platform focused on music and entertainment, providing creative music experiences',
            tags: ['music interaction', 'AI creativity', 'entertainment experience'],
            url: 'https://www.museland.com/',
            subcategory: 'entertainment_ai',
            needsMagic: true
        },
        
        
        {
            title: 'Xiaohuangjiao',
            description: 'A fun AI chat assistant skilled in humorous dialogue and entertainment interaction',
            tags: ['humorous dialogue', 'casual chat', 'leisure interaction'],
            url: 'https://www.xiaohuangjiao.com/',
            subcategory: 'entertainment_ai',
            needsMagic: false
        },
        {
            title: 'Maopaoya',
            description: 'A relaxing and fun AI dialogue assistant providing casual companionship and interactive experiences',
            tags: ['casual chat', 'entertainment interaction', 'relaxed companionship'],
            url: 'https://maopaoya.com/',
            subcategory: 'entertainment_ai',
            needsMagic: false
        },
        {
            title: 'Cici',
            description: 'An entertainment AI assistant for young users, providing rich interactive experiences',
            tags: ['youth style', 'interactive entertainment', 'fun dialogue'],
            url: 'https://www.cici.ai/',
            subcategory: 'entertainment_ai',
            needsMagic: true
        },
        
        // Role-playing and Virtual Companionship
        {
            title: 'Ohai',
            description: 'A platform providing AI virtual companion experiences, supporting deep emotional interaction',
            tags: ['virtual companion', 'emotional interaction', 'deep dialogue'],
            url: 'https://ohai.com/',
            subcategory: 'role_play',
            needsMagic: true
        },
        {
            title: 'Me.bot',
            description: 'A platform for creating personalized AI avatars, allowing customization based on personal style',
            tags: ['AI avatar', 'personality customization', 'image replication'],
            url: 'https://me.bot/',
            subcategory: 'role_play',
            needsMagic: true
        },
        {
            title: 'Saylo',
            description: 'A platform offering AI character dialogue and emotional companionship, supporting rich character customization',
            tags: ['character customization', 'emotional communication', 'virtual companionship'],
            url: 'https://www.saylo.ai/',
            subcategory: 'role_play',
            needsMagic: true
        },
        {
            title: 'Tongyi Xingchen',
            description: 'A virtual digital human assistant launched by Alibaba, providing emotional dialogue experiences',
            tags: ['digital human', 'emotional dialogue', 'virtual avatar'],
            url: 'https://tongyi.aliyun.com/xingchen',
            subcategory: 'role_play',
            needsMagic: false
        },
        {
            title: 'CueMe',
            description: 'An AI platform providing personalized virtual companions and role-playing',
            tags: ['virtual companion', 'role-playing', 'emotional interaction'],
            url: 'https://www.cueme.com/',
            subcategory: 'role_play',
            needsMagic: true
        },
        {
            title: 'Chai',
            description: 'A social platform providing AI character dialogues, supporting various roles and interactive scenarios',
            tags: ['character dialogue', 'AI social', 'interactive scenarios'],
            url: 'https://chai.ml/',
            subcategory: 'role_play',
            needsMagic: true
        },
        
        // Multimodal AI Assistant
        {
            title: 'Yuewen',
            description: 'An AI assistant supporting image recognition and multimodal interaction, capable of understanding image content',
            tags: ['multimodal', 'image recognition', 'visual understanding'],
            url: 'https://www.yuewen.ai/',
            subcategory: 'multimodal_ai',
            needsMagic: false
        },
        {
            title: 'Huawei Xiaoyi',
            description: 'A multimodal AI assistant by Huawei, supporting voice, image, and text interaction',
            tags: ['Huawei AI', 'multimodal', 'voice interaction'],
            url: 'https://xiaoyi.huawei.com/',
            subcategory: 'multimodal_ai',
            needsMagic: false
        },
        {
            title: 'Meta AI Assistant',
            description: 'A multimodal AI by Meta, supporting comprehensive understanding of images, voice, and text',
            tags: ['Meta AI', 'multimodal', 'social platform'],
            url: 'https://ai.meta.com/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'Midjourney AI',
            description: 'A dialogue tool focused on AI art creation, generating high-quality images from text',
            tags: ['AI painting', 'image generation', 'creative design'],
            url: 'https://www.midjourney.com/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'DALL-E',
            description: 'An AI image generation system developed by OpenAI, creating images from text descriptions',
            tags: ['image generation', 'AI art', 'creative tool'],
            url: 'https://openai.com/dall-e-3',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'Xifan AI',
            description: 'An AI dialogue assistant focused on Chinese scenarios, supporting text-to-image, image-to-image, and other creative modes',
            tags: ['AI creation', 'image-text combination', 'Chinese optimization'],
            url: 'https://xfan.ai/',
            subcategory: 'multimodal_ai',
            needsMagic: false
        },
        {
            title: 'Stable Diffusion',
            description: 'An open-source AI image generation model capable of generating high-quality images from text descriptions',
            tags: ['open-source AI', 'image generation', 'model customization'],
            url: 'https://stability.ai/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'Tiangong Image',
            description: 'A multimodal AI launched by Kunlun Wanwei, supporting image recognition and generation functions',
            tags: ['image processing', 'multimodal', 'Chinese optimization'],
            url: 'https://tiangong.kunlun.com/image',
            subcategory: 'multimodal_ai',
            needsMagic: false
        },
        // Photo Enhancement and Enhancement
        {
            title: 'MyHeritage InColor',
            description: 'Professional old photo colorization and restoration tool, preserving historical details',
            tags: ['photo restoration', 'photo colorization', 'historical preservation'],
            url: 'https://www.myheritage.com/incolor',
            subcategory: 'photo_enhancement',
            needsMagic: true
        },
        {
            title: 'Topaz Photo AI',
            description: 'Professional photo enhancement tool offering noise reduction, sharpening and upscaling features',
            tags: ['photo enhancement', 'professional processing', 'image quality improvement'],
            url: 'https://www.topazlabs.com/topaz-photo-ai',
            subcategory: 'photo_enhancement',
            needsMagic: true
        },
        {
            title: 'GFP-GAN',
            description: 'Tencent open-source facial photo restoration technology focusing on detail restoration',
            tags: ['open-source technology', 'face restoration', 'detail preservation'],
            url: 'https://github.com/TencentARC/GFPGAN',
            subcategory: 'photo_enhancement',
            needsMagic: false
        },
        {
            title: 'Remini',
            description: 'Mobile AI photo restoration app for easily enhancing blurry photos',
            tags: ['mobile app', 'quick restoration', 'user-friendly'],
            url: 'https://remini.ai/',
            subcategory: 'photo_enhancement',
            needsMagic: true
        },
        {
            title: 'Bigjpg',
            description: 'Neural network-based lossless image upscaling tool maintaining clarity',
            tags: ['lossless upscaling', 'neural network', 'detail preservation'],
            url: 'https://bigjpg.com/',
            subcategory: 'photo_enhancement',
            needsMagic: false
        },
        
        // Anime and Manga Creation
        {
            title: 'Niji Journey',
            description: 'AI image generation tool focused on anime and er ci yuan styles',
            tags: ['er ci yuan', 'anime style', 'stylized creation'],
            url: 'https://nijijourney.com/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: 'Waifu Labs',
            description: 'Personalized anime avatar generator with customizable character features',
            tags: ['anime avatar', 'character customization', 'er ci yuan style'],
            url: 'https://waifulabs.com/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: 'NovelAI',
            description: 'AI drawing tool designed for novel illustrations and creative writing',
            tags: ['novel illustrations', 'creative writing', 'custom illustrations'],
            url: 'https://novelai.net/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: 'PixAI.art',
            description: 'AI platform focused on Asian-style anime and illustration creation',
            tags: ['Asian style', 'illustration creation', 'er ci yuan art'],
            url: 'https://pixai.art/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: 'Chushou AI',
            description: 'Leading domestic AI anime creation platform supporting multiple er ci yuan styles',
            tags: ['domestic platform', 'er ci yuan', 'multi-style support'],
            url: 'https://chusu.cc/',
            subcategory: 'anime',
            needsMagic: false
        },
        
        // Entertainment and Fun Tools
        {
            title: 'Reface',
            description: 'Fun AI face swap app for placing your face in various scenes',
            tags: ['AI face swap', 'entertainment app', 'social sharing'],
            url: 'https://reface.app/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        {
            title: 'Imgflip',
            description: 'AI-powered meme creation tool supporting custom text and templates',
            tags: ['meme creation', 'meme templates', 'social media'],
            url: 'https://imgflip.com/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        {
            title: 'Voilà AI',
            description: 'Fun tool that converts photos into Disney-style cartoon avatars',
            tags: ['cartoon avatar', 'style conversion', 'fun effects'],
            url: 'https://voila-ai.com/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        {
            title: 'ToonMe',
            description: 'App that converts selfies into cartoon or artistic effects',
            tags: ['cartoonization', 'selfie enhancement', 'artistic style'],
            url: 'https://toonme.com/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        // Fashion and Fashion Design
        {
            "title": "ZMO.ai",
            "description": "An AI virtual clothing design and model fitting platform suitable for e-commerce display",
            "tags": ["virtual clothing", "model fitting", "e-commerce display"],
            "url": "https://zmo.ai/",
            "subcategory": "fashion",
            "needsMagic": true
        },
        {
            "title": "TattooAI",
            "description": "An AI-driven tattoo design tool for creating personalized tattoo patterns",
            "tags": ["tattoo design", "personalized patterns", "creative tool"],
            "url": "https://tattooai.com/",
            "subcategory": "fashion",
            "needsMagic": true
        },
        {
            "title": "Vmake",
            "description": "An AI tool for e-commerce clothing changing, which can quickly generate display effects of different clothing",
            "tags": ["e-commerce clothing changing", "product display", "virtual fitting"],
            "url": "https://www.v-make.ai/",
            "subcategory": "fashion",
            "needsMagic": true
        },
    
        // Image Editing and Processing
        {
            "title": "Photoshop AI",
            "description": "AI features integrated into Adobe Photoshop, including intelligent tools such as generative fill",
            "tags": ["professional editing", "Adobe", "generative fill"],
            "url": "https://www.adobe.com/products/photoshop/generative-fill.html",
            "subcategory": "image_editing",
            "needsMagic": true
        },
        {
            "title": "Picsart",
            "description": "An all-round mobile image editing application integrating AI editing and creative tools",
            "tags": ["mobile editing", "all-round tool", "AI creativity"],
            "url": "https://picsart.com/",
            "subcategory": "image_editing",
            "needsMagic": true
        },
        {
            "title": "ClipDrop",
            "description": "A real-scene capture and AI editing tool supporting object extraction and scene editing",
            "tags": ["real-scene capture", "object extraction", "AI editing"],
            "url": "https://clipdrop.co/",
            "subcategory": "image_editing",
            "needsMagic": true
        },
        {
            "title": "Fotor",
            "description": "An online image editor integrating AI beautification and design functions",
            "tags": ["online editing", "AI beautification", "easy operation"],
            "url": "https://www.fotor.com/",
            "subcategory": "image_editing",
            "needsMagic": true
        },
    
        // Professional Scene Generation
        {
            "title": "Diagram.codes",
            "description": "An AI-driven chart and flowchart generation tool suitable for professional display",
            "tags": ["chart generation", "flowchart", "professional display"],
            "url": "https://diagram.codes/",
            "subcategory": "professional_scene",
            "needsMagic": true
        },
        {
            "title": "Architechtures",
            "description": "A professional AI tool for architectural rendering, generating realistic architectural and landscape renderings",
            "tags": ["architectural rendering", "landscape design", "rendering"],
            "url": "https://architechtures.com/",
            "subcategory": "professional_scene",
            "needsMagic": true
        },
        {
            "title": "InteriorAI",
            "description": "An AI-driven interior design visualization tool for generating realistic decoration effects",
            "tags": ["interior design", "decoration effect", "space visualization"],
            "url": "https://interiorai.com/",
            "subcategory": "professional_scene",
            "needsMagic": true
        },
        {
            "title": "NVIDIA Canvas",
            "description": "A real-time scene drawing tool launched by NVIDIA, which can convert simple sketches into real-scene images",
            "tags": ["real-time drawing", "NVIDIA", "scene conversion"],
            "url": "https://www.nvidia.com/en-us/studio/canvas/",
            "subcategory": "professional_scene",
            "needsMagic": true
        }
    ],
    
    // AI Video
    "ai_video": [
        // Text-to-Video Generation
        {
            "title": "Runway Gen-2",
            "description": "An advanced text-to-video AI system that can generate high-quality short video content through text descriptions",
            "tags": ["text-to-video generation", "creative synthesis", "AI special effects"],
            "url": "https://runway.com/gen-2",
            "subcategory": "text_to_video",
            "needsMagic": true
        },
        {
            "title": "Pika Labs",
            "description": "A fast text-to-video generation platform supporting multiple styles and scenarios, suitable for creating short videos",
            "tags": ["text-to-video generation", "stylization", "creative content"],
            "url": "https://pika.art/",
            "subcategory": "text_to_video",
            "needsMagic": true
        },
        {
            "title": "Kaiber",
            "description": "An artificial intelligence video creation platform that generates artistically styled videos, which can be used for music visualization",
            "tags": ["artistic video", "music visualization", "creative generation"],
            "url": "https://kaiber.ai/",
            "subcategory": "text_to_video",
            "needsMagic": true
        },
        {
            "title": "Synthesia",
            "description": "A professional AI digital human video generation platform that can create real-person news broadcast videos by simply inputting text",
            "tags": ["digital human", "real-person news broadcast", "corporate promotion"],
            "url": "https://www.synthesia.io/",
            "subcategory": "text_to_video",
            "needsMagic": true
        },
        {
            "title": "InVideo AI",
            "description": "An online video production platform integrating AI functions to quickly convert text scripts into professional videos",
            "tags": ["online editing", "template video", "commercial use"],
            "url": "https://invideo.io/",
            "subcategory": "text_to_video",
            "needsMagic": true
        },
        {
            "title": "Lumen5",
            "description": "Focuses on quickly converting text content such as articles and blogs into social media videos",
            "tags": ["blog-to-video conversion", "social media", "content marketing"],
            "url": "https://lumen5.com/",
            "subcategory": "text_to_video",
            "needsMagic": true
        },
        {
            "title": "Pictory",
            "description": "Automatically converts long text content into short videos, suitable for content creators and marketers",
            "tags": ["long-text-to-video conversion", "automatic extraction", "marketing content"],
            "url": "https://pictory.ai/",
            "subcategory": "text_to_video",
            "needsMagic": true
        },
        {
            "title": "HeyGen",
            "description": "A high-quality AI digital human video generation platform providing multi-language and multi-scenario video production",
            "tags": ["digital human news broadcast", "multi-language", "corporate video"],
            "url": "https://www.heygen.com/",
            "subcategory": "text_to_video",
            "needsMagic": true
        },
        {
            "title": "Elai.io",
            "description": "Can generate AI digital human explanation videos by simply inputting text, without the need for photography equipment",
            "tags": ["digital human", "text-to-video conversion", "teaching video"],
            "url": "https://elai.io/",
            "subcategory": "text_to_video",
            "needsMagic": true
        },
        {
            "title": "DeepBrain AI",
            "description": "Creates realistic AI virtual humans for video speeches and explanations, suitable for corporate and educational use",
            "tags": ["virtual human", "corporate presentation", "education and training"],
            "url": "https://www.deepbrain.io/",
            "subcategory": "text_to_video",
            "needsMagic": true
        },
    
        // Image-to-Video Generation
        {
            "title": "AnimateDiff",
            "description": "A Stable Diffusion plugin that can convert static images into dynamic short videos or animations",
            "tags": ["image animation", "SD plugin", "open-source tool"],
            "url": "https://huggingface.co/guoyww/animatediff",
            "subcategory": "image_to_video",
            "needsMagic": true
        },
        {
            "title": "Morph Studio",
            "description": "An AI platform focusing on converting static images into smooth animations, supporting multiple animation styles",
            "tags": ["image animation", "diverse styles", "creative tool"],
            "url": "https://www.morphstudio.io/",
            "subcategory": "image_to_video",
            "needsMagic": true
        },
        {
            "title": "Stable Video Diffusion",
            "description": "An image-to-video conversion model developed by Stability AI, which can generate smooth short videos",
            "tags": ["image animation", "open-source model", "professional effect"],
            "url": "https://stability.ai/stable-video",
            "subcategory": "image_to_video",
            "needsMagic": true
        },
        {
            "title": "LeiaPix",
            "description": "Converts 2D images into immersive 3D animations, suitable for social media and creative display",
            "tags": ["2D to 3D conversion", "depth effect", "dynamic effect"],
            "url": "https://www.leiapix.com/",
            "subcategory": "image_to_video",
            "needsMagic": true
        },
        {
            "title": "Pika 1.0",
            "description": "Extends a single image into a coherent video while maintaining the original image's style and details",
            "tags": ["image extension", "coherent video", "style preservation"],
            "url": "https://pika.art/",
            "subcategory": "image_to_video",
            "needsMagic": true
        },
        {
            "title": "Moonvalley",
            "description": "Converts static pictures into immersive dynamic scenes, suitable for artistic creation",
            "tags": ["scene animation", "artistic creation", "immersive experience"],
            "url": "https://moonvalley.ai/",
            "subcategory": "image_to_video",
            "needsMagic": true
        },
        {
            "title": "Zeroscope",
            "description": "An open-source image-to-video conversion model that can be deployed locally, suitable for developers",
            "tags": ["open-source model", "local deployment", "development tool"],
            "url": "https://huggingface.co/cerspense/zeroscope_v2_576w",
            "subcategory": "image_to_video",
            "needsMagic": true
        },
        {
            "title": "Adobe Premiere Pro AI",
            "description": "Professional video editing software with integrated Firefly AI features, supporting intelligent editing and enhancement",
            "tags": ["professional editing", "Adobe", "Firefly integration"],
            "url": "https://www.adobe.com/products/premiere.html",
            "subcategory": "video_editing",
            "needsMagic": true
        },
        {
            "title": "CapCut",
            "description": "Intelligent video editing tool by ByteDance, supporting AI editing, effects and one-click generation",
            "tags": ["smart editing", "one-click effects", "social media"],
            "url": "https://www.capcut.com/",
            "subcategory": "video_editing",
            "needsMagic": true
        },
        {
            "title": "Descript",
            "description": "Text-based video editing platform supporting AI voice cloning and intelligent editing",
            "tags": ["text editing", "voice cloning", "smart editing"],
            "url": "https://www.descript.com/",
            "subcategory": "video_editing",
            "needsMagic": true
        },
        {
            "title": "HitPaw Video Enhancer",
            "description": "AI video restoration and enhancement tool that can improve old video quality and add frames",
            "tags": ["video restoration", "quality enhancement", "old videos"],
            "url": "https://www.hitpaw.com/video-enhancer.html",
            "subcategory": "video_editing",
            "needsMagic": true
        },
        {
            "title": "Topaz Video AI",
            "description": "Professional video enhancement tool supporting super-resolution, noise reduction and slow motion optimization",
            "tags": ["super resolution", "professional enhancement", "video optimization"],
            "url": "https://www.topazlabs.com/topaz-video-ai",
            "subcategory": "video_editing",
            "needsMagic": true
        },
        {
            "title": "Runway ML",
            "description": "AI video editing platform offering advanced features like green screen keying and object removal",
            "tags": ["green screen", "object removal", "advanced editing"],
            "url": "https://runway.com/",
            "subcategory": "video_editing",
            "needsMagic": true
        },
        {
            "title": "Vrew",
            "description": "Smart video editing tool that automatically recognizes speech content and generates subtitles",
            "tags": ["auto editing", "speech recognition", "subtitle generation"],
            "url": "https://vrew.voyagerx.com/",
            "subcategory": "video_editing",
            "needsMagic": true
        },
        {
            "title": "Pictory",
            "description": "Automatically generates subtitles and summaries for videos, ideal for content creators",
            "tags": ["auto subtitles", "video summary", "content creation"],
            "url": "https://pictory.ai/",
            "subcategory": "video_editing",
            "needsMagic": true
        },
        {
            "title": "Fliki",
            "description": "Converts text scripts into videos with human voiceovers, supporting multiple languages",
            "tags": ["script to video", "human voiceover", "multilingual"],
            "url": "https://fliki.ai/",
            "subcategory": "video_editing",
            "needsMagic": true
        },
        
        // AI数字人与虚拟主播
        {
            title: 'Synthesia',
            description: 'Generate high-quality digital human videos, create professional broadcast content with just text input',
            tags: ['digital human', 'professional broadcast', 'corporate video'],
            url: 'https://www.synthesia.io/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'HeyGen',
            description: 'Advanced digital human video platform supporting multilingual, multi-avatar human explanation videos',
            tags: ['digital avatar', 'marketing video', 'training content'],
            url: 'https://www.heygen.com/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'D-ID',
            description: 'Convert static photos into talking digital humans, suitable for personalized messages and marketing',
            tags: ['photo animation', 'digital human', 'personalized video'],
            url: 'https://www.d-id.com/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'Rephrase.ai',
            description: 'Enterprise-level digital human video generation platform supporting customized avatars and content',
            tags: ['enterprise digital human', 'customization', 'marketing video'],
            url: 'https://www.rephrase.ai/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'DeepBrain AI Studios',
            description: 'Create ultra-realistic AI virtual humans for news broadcasting, education and marketing',
            tags: ['ultra-realistic', 'multi-scenario', 'enterprise applications'],
            url: 'https://www.deepbrain.io/solutions/studios',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'Colossyan',
            description: 'Professional enterprise training video production platform using AI actors to create multilingual training content',
            tags: ['training video', 'multilingual', 'enterprise learning'],
            url: 'https://www.colossyan.com/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'Simulai',
            description: 'Create customized digital humans suitable for customer service and brand endorsements',
            tags: ['custom digital human', 'brand endorsement', 'customer service'],
            url: 'https://www.simulai.co/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        {
            title: 'Vidnami',
            description: 'Automatically generate digital human video content suitable for social media and marketing',
            tags: ['digital human', 'social video', 'auto generation'],
            url: 'https://vidnami.com/',
            subcategory: 'digital_human',
            needsMagic: true
        },
        // 动画与卡通生成
        {
            title: 'Animaker',
            description: 'Online animation video creation platform, supports drag-and-drop operations and AI-assisted creation',
            tags: ['animation creation', 'drag-and-drop', 'marketing video'],
            url: 'https://www.animaker.com/',
            subcategory: 'animation',
            needsMagic: true
        },
        {
            title: 'Vyond',
            description: 'Professional enterprise animation video production platform, formerly known as GoAnimate',
            tags: ['enterprise animation', 'professional production', 'explainer video'],
            url: 'https://www.vyond.com/',
            subcategory: 'animation',
            needsMagic: true
        },
        {
            title: 'Cascadeur',
            description: 'Animation software with AI-based physics engine, suitable for creating natural and smooth movements',
            tags: ['physics animation', '3D character', 'professional tool'],
            url: 'https://cascadeur.com/',
            subcategory: 'animation',
            needsMagic: true
        },
        {
            title: 'Kaiber',
            description: 'Artistic animation generation tool, converts static images into flowing artistic works',
            tags: ['artistic animation', 'style', 'creative expression'],
            url: 'https://kaiber.ai/',
            subcategory: 'animation',
            needsMagic: true
        },
        {
            title: 'Steve AI',
            description: 'Smart script and animation generation tool, suitable for quickly creating解说 and marketing videos',
            tags: ['script generation', 'quick animation', 'explainer video'],
            url: 'https://www.steve.ai/',
            subcategory: 'animation',
            needsMagic: true
        },
        {
            title: 'Animated Drawings',
            description: 'Meta-developed technology, converts hand-drawn sketches into cute animated characters',
            tags: ['sketch animation', 'character generation', 'Meta tool'],
            url: 'https://sketch.metademolab.com/',
            subcategory: 'animation',
            needsMagic: true
        },
        
        // 短视频与社交媒体工具
        {
            title: 'Canva Video',
            description: 'Easy template video creation tool, integrated AI features to assist creation',
            tags: ['template video', 'easy operation', 'social media'],
            url: 'https://www.canva.com/video-editor/',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'InShot AI',
            description: 'Mobile AI video editing application,一键生成创意短视频内容',
            tags: ['mobile editing', 'short video', 'one-click creation'],
            url: 'https://inshot.com/',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'Vizard.ai',
            description: 'Automatically identify video highlights, generate high-light clips, suitable for game and event videos',
            tags: ['high-light clip', 'automatic recognition', 'game video'],
            url: 'https://www.vizard.ai/',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'OpusClip',
            description: 'Smartly split long videos into short video content, suitable for cross-platform publishing',
            tags: ['long video split', 'automatic editing', 'content reuse'],
            url: 'https://www.opus.pro/opusclip',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'Vimeo AI工具',
            description: 'Professional video platform provides AI editing and enhancement tools to improve creation efficiency',
            tags: ['professional platform', 'AI editing', 'creation assistance'],
            url: 'https://vimeo.com/features/ai-video-tools',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'Supercreator',
            description: '一站式短视频创作平台，自动生成脚本并辅助剪辑',
            tags: ['script generation', 'editing assistance', 'short video'],
            url: 'https://www.supercreator.com/',
            subcategory: 'short_video',
            needsMagic: true
        },
        
        // 语音驱动视频
        {
            title: 'Wav2Lip',
            description: 'Open source speech-driven lip-sync model, allows static images to follow audio',
            tags: ['open source model', 'lip sync', 'research project'],
            url: 'https://github.com/Rudrabha/Wav2Lip',
            subcategory: 'speech_driven',
            needsMagic: true
        },
        {
            title: 'SadTalker',
            description: 'Generate talking avatar videos with just a single image and audio file',
            tags: ['single image', 'avatar generation', 'open source project'],
            url: 'https://github.com/OpenTalker/SadTalker',
            subcategory: 'speech_driven',
            needsMagic: true
        },
        {
            title: 'Synclabs',
            description: 'Professional AI speech-driven video synthesis platform offering high-quality lip synchronization',
            tags: ['professional platform', 'high quality', 'commercial use'],
            url: 'https://www.synclabs.so/',
            subcategory: 'speech_driven', 
            needsMagic: true
        },
        {
            title: 'Lipdub',
            description: 'Automatically synchronizes any audio with video lip movements, supports multiple languages',
            tags: ['lip sync', 'multilingual', 'post-production'],
            url: 'https://www.lipdub.ai/',
            subcategory: 'speech_driven',
            needsMagic: true
        },
        {
            title: 'Sora',
            description: 'Text-to-video generation model by OpenAI, capable of creating movie-quality videos up to 60 seconds',
            tags: ['movie quality', 'OpenAI', 'high quality'],
            url: 'https://openai.com/sora',
            subcategory: 'professional_video',
            needsMagic: true
        },
        {
            title: 'Luma AI',
            description: 'AI-driven 3D scene and video creation platform, supporting realistic environments and characters',
            tags: ['3D scenes', 'environment generation', 'realistic effects'],
            url: 'https://lumalabs.ai/',
            subcategory: 'professional_video',
            needsMagic: true
        },
        {
            title: 'Wonder Dynamics',
            description: 'AI-powered character animation and VFX tools for professional film production',
            tags: ['character replacement', 'VFX production', 'professional tools'],
            url: 'https://wonderdynamics.com/',
            subcategory: 'professional_video',
            needsMagic: true
        },
        {
            title: 'Lightricks',
            description: 'Professional creative tools suite including video effects and editing applications',
            tags: ['professional effects', 'creative tools', 'advanced editing'],
            url: 'https://www.lightricks.com/',
            subcategory: 'professional_video',
            needsMagic: true
        },
        {
            title: 'Stable Video Diffusion',
            description: 'Open-source video generation model by Stability AI, supports local deployment',
            tags: ['open source model', 'local deployment', 'developer tools'],
            url: 'https://github.com/Stability-AI/generative-models',
            subcategory: 'opensource_tools',
            needsMagic: true
        },
        {
            title: 'Zeroscope',
            description: 'Open-source text-to-video generation model that can be integrated into existing applications',
            tags: ['open source video', 'application integration', 'development framework'],
            url: 'https://huggingface.co/cerspense/zeroscope_v2_576w',
            subcategory: 'opensource_tools',
            needsMagic: true
        },
        {
            title: 'AnimateDiff',
            description: 'Stable Diffusion extension for converting static images into animated videos',
            tags: ['SD extension', 'image animation', 'developer tools'],
            url: 'https://github.com/guoyww/AnimateDiff',
            subcategory: 'opensource_tools',
            needsMagic: true
        },
        {
            title: 'ModelScope',
            description: 'AI model platform developed by Alibaba, providing video generation and editing capabilities',
            tags: ['Chinese platform', 'Alibaba', 'developer tools'],
            url: 'https://modelscope.cn/models/damo/text-to-video-synthesis/summary',
            subcategory: 'opensource_tools',
            needsMagic: false
        }
    ],
    // AI音频
    ai_audio: [
        // AI配音/文本转语音（TTS）
        {
                title: 'Moyin Studio',
                description: 'Realistic human voice dubbing tool providing high-quality AI voice synthesis services',
                tags: ['AI Dubbing', 'Human-like', 'Voice Synthesis'],
                url: 'https://moyinai.com/',
                subcategory: 'tts',
                needsMagic: false
            },
            {
                title: 'iFlytek Smart Creation',
                description: 'AI text-to-speech and dubbing tool from iFlytek with natural and fluent voice effects',
                tags: ['iFlytek', 'Professional Dubbing', 'Chinese Voice'],
                url: 'https://zhizuo.iflytek.com/',
                subcategory: 'tts',
                needsMagic: false
            },
            {
                title: 'LangLang Voice',
                description: 'Intelligent text-to-speech platform supporting multi-scene and multi-voice dubbing needs',
                tags: ['Multiple Voices', 'Scene Dubbing', 'Smart Synthesis'],
                url: 'https://www.langlangvoice.com/',
                subcategory: 'tts',
                needsMagic: false
            },
            {
                title: 'MiniMax Audio',
                description: 'Voice synthesis service supporting voice cloning, enabling personalized voice customization',
                tags: ['Voice Cloning', 'Personalization', 'Voice Synthesis'],
                url: 'https://api.minimax.chat/voice-demo',
                subcategory: 'tts',
                needsMagic: false
            },
            {
                title: 'Reecho',
                description: 'Ultra-realistic Chinese and English voice cloning/generation tool providing high-quality voice replication services',
                tags: ['Chinese-English Bilingual', 'Ultra-realistic', 'Voice Cloning'],
                url: 'https://www.reecho.cn/',
                subcategory: 'tts',
                needsMagic: false
            },
            {
                title: 'Text to Speech',
                description: 'Completely free TTS tool supporting multi-language text-to-speech conversion',
                tags: ['Free Tool', 'Multi-language', 'Easy Operation'],
                url: 'https://www.wenzihuale.com/',
                subcategory: 'tts',
                needsMagic: false
            },
            {
                title: 'Voice Synthesis Maker',
                description: 'Free TTS tool from TTSMaker, simple and easy-to-use text-to-speech service',
                tags: ['Free Service', 'Easy to Use', 'Multi-language Support'],
                url: 'https://ttsmaker.com/',
                subcategory: 'tts',
                needsMagic: false
            },
            {
                title: 'Coqui AI',
                description: 'AI voice synthesis platform supporting 500+ voices and 100 languages',
                tags: ['Multi-language', 'Rich Voice Options', 'Wide Support'],
                url: 'https://coqui.ai/',
                subcategory: 'tts',
                needsMagic: true
        },
        {
            title: '超级鸭 Super Duck',
            description: 'Open-source AI voice generation community with 5000+ voice options',
            tags: ['Open-source Community', 'Diverse Voices', 'Voice Generation'],
            url: 'https://github.com/babysor/MockingBird',
            subcategory: 'tts',
            needsMagic: true
        },
        {
            title: 'ElevenLabs',
            description: 'High-quality AI voice synthesis platform supporting 28 languages (including Chinese)',
            tags: ['Multi-language Support', 'High Quality', 'Professional Synthesis'],
            url: 'https://elevenlabs.io/',
            subcategory: 'tts',
            needsMagic: true
        },
        {
            title: '刺鸟配音',
            description: 'Professional AI dubbing tool meeting various commercial dubbing needs',
            tags: ['Commercial Dubbing', 'Professional Service', 'Multi-scenario'],
            url: 'https://ttsmaker.cn/',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: 'IBM Watson TTS',
            description: 'IBM enterprise-level TTS service providing high-quality voice synthesis solutions',
            tags: ['Enterprise-level', 'IBM', 'Professional Service'],
            url: 'https://www.ibm.com/products/text-to-speech',
            subcategory: 'tts',
            needsMagic: true
        },
        {
            title: '假你FAKEYOU',
            description: 'Deep Fake text-to-speech technology,实现高度拟真的声音复制',
            tags: ['Deep Fake', 'Voice Replication', 'High Fidelity'],
            url: 'https://fakeyou.com/',
            subcategory: 'tts',
            needsMagic: true
        },
        {
            title: 'Yueyin Dubbing',
            description: 'Online voice synthesis tool, simple and easy-to-use dubbing service',
            tags: ['Online Dubbing', 'Easy Operation', 'Quick Synthesis'],
            url: 'https://yuyin.baidu.com/',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: 'Play.ht',
            description: 'Ultra-realistic AI voice generation tool providing natural and fluent voice synthesis',
            tags: ['Ultra-realistic', 'AI Voice', 'Natural Fluency'],
            url: 'https://play.ht/',
            subcategory: 'tts',
            needsMagic: true
        },
        {
            title: 'Murf AI',
            description: 'Text-to-speech tool supporting multiple languages and voice styles',
            tags: ['Multi-language', 'Voice Styles', 'AI Synthesis'],
            url: 'https://www.murf.ai/',
            subcategory: 'tts',
            needsMagic: true
        },
        
        // AI音乐生成与创作
        {
            title: 'Suno',
            description: 'High-quality AI music creation platform, generating professional-grade musical works',
            tags: ['High Quality', 'Music Creation', 'AI Composition'],
            url: 'https://www.suno.ai/',
            subcategory: 'music_generation',
            needsMagic: true
        },
        {
            title: 'Sponge Music',
            description: 'ByteDance free AI music platform for easy original music creation',
            tags: ['ByteDance', 'Free Music', 'Original Creation'],
            url: 'https://sponge.bytedance.com/',
            subcategory: 'music_generation',
            needsMagic: false
        },
        {
            title: 'Yinfun',
            description: 'Kunlun Wanwei one-click original song generation tool, simple and efficient music creation',
            tags: ['One-Click Generation', 'Original Songs', 'Simple Operation'],
            url: 'https://yinfun.ai/',
            subcategory: 'music_generation',
            needsMagic: false
        },
        {
            "title": "Musicfy",
            "description": "A commercial music creation platform by Kunlun Wanwei, a professional AI music production tool",
            "tags": ["commercial music", "professional production", "AI creation"],
            "url": "https://www.musicfy.ai/",
            "subcategory": "music_generation",
            "needsMagic": false
        },
        {
            "title": "Tianpule",
            "description": "A multimodal music generation large model providing comprehensive music creation solutions",
            "tags": ["multimodal", "music large model", "creation solutions"],
            "url": "https://tianpule.com/",
            "subcategory": "music_generation",
            "needsMagic": false
        },
        {
            "title": "Soundraw",
            "description": "A free AI music tool that can generate 1,200 original tracks per month",
            "tags": ["free tool", "high quota", "original music"],
            "url": "https://soundraw.io/",
            "subcategory": "music_generation",
            "needsMagic": true
        },
        {
            "title": "NetEase Tianyin",
            "description": "NetEase's one-stop music creation platform offering professional music production services",
            "tags": ["NetEase", "one-stop", "music creation"],
            "url": "https://tianyin.music.163.com/",
            "subcategory": "music_generation",
            "needsMagic": false
        },
        {
            "title": "TME Studio",
            "description": "Tencent Music's intelligent creation assistant, an AI tool empowering musicians",
            "tags": ["Tencent Music", "creation assistant", "musician tools"],
            "url": "https://y.qq.com/tme",
            "subcategory": "music_generation",
            "needsMagic": false
        },
        {
            "title": "Stable Audio",
            "description": "A music generation tool by Stability AI for creating high-quality music content",
            "tags": ["Stability AI", "music generation", "high quality"],
            "url": "https://stability.ai/stable-audio",
            "subcategory": "music_generation",
            "needsMagic": true
        },
        {
            "title": "Sonoptic",
            "description": "A free AI music generation platform, a simple and easy-to-use music creation tool",
            "tags": ["free platform", "easy operation", "AI music"],
            "url": "https://sonoptic.com/",
            "subcategory": "music_generation",
            "needsMagic": true
        },
        {
            "title": "Tiangong SkyMusic",
            "description": "Kunlun Wanwei's AI music large model, a professional music creation platform",
            "tags": ["Kunlun Wanwei", "AI music", "large model"],
            "url": "https://skymusic.kuaishou.com/",
            "subcategory": "music_generation",
            "needsMagic": false
        },
        
        // Speech-to-Text (ASR) & Recording Assistants
        {
            "title": "Tingnao AI",
            "description": "A voice recording assistant that intelligently transcribes and analyzes voice content",
            "tags": ["recording assistant", "intelligent transcription", "voice analysis"],
            "url": "https://www.tingnao.ai/",
            "subcategory": "speech_to_text",
            "needsMagic": false
        },
        {
            "title": "Jiandan Tingji",
            "description": "Baidu Netdisk's speech-to-text tool, a convenient recording-to-text service",
            "tags": ["Baidu Netdisk", "speech-to-text", "convenient service"],
            "url": "https://pan.baidu.com/tingji",
            "subcategory": "speech_to_text",
            "needsMagic": false
        },
        {
            "title": "iFlytek Hearing",
            "description": "iFlytek's online speech-to-text platform, a professional speech recognition service",
            "tags": ["iFlytek", "speech transcription", "professional recognition"],
            "url": "https://www.iflyrec.com/",
            "subcategory": "speech_to_text",
            "needsMagic": false
        },
        {
            "title": "Beiwanglu",
            "description": "A free speech-to-text tool for convenient recording and organizing of voice content",
            "tags": ["free tool", "voice recording", "text organization"],
            "url": "https://beiwanglu.com/",
            "subcategory": "speech_to_text",
            "needsMagic": false
        },
        {
            "title": "Deepgram",
            "description": "A low-cost speech-text conversion API suitable for developer integration",
            "tags": ["development API", "low cost", "speech recognition"],
            "url": "https://deepgram.com/",
            "subcategory": "speech_to_text",
            "needsMagic": true
        },
        {
            "title": "Kuaizhuan Zimu",
            "description": "A video/voice-to-text and subtitle tool, a one-stop content processing service",
            "tags": ["subtitle tool", "video-to-text", "content processing"],
            "url": "https://www.zhuanzi.ai/",
            "subcategory": "speech_to_text",
            "needsMagic": false
        },
        {
            "title": "Tongyi Tingwu",
            "description": "Alibaba's speech transcription and analysis tool providing professional audio content understanding",
            "tags": ["Alibaba", "speech analysis", "content understanding"],
            "url": "https://tingwu.aliyun.com/",
            "subcategory": "speech_to_text",
            "needsMagic": false
        },
        
        // AI Voice Changer & Speech Processing
        {
            "title": "Dabing AI Voice Changer",
            "description": "A real-time voice changing software with multiple sound effect conversions",
            "tags": ["real-time voice change", "multiple effects", "speech processing"],
            "url": "https://www.dabing.ai/",
            "subcategory": "voice_conversion",
            "needsMagic": false
        },
        {
            "title": "Uberduck.ai",
            "description": "An AI-driven real-time voice transformation tool with professional sound processing services",
            "tags": ["AI-driven", "real-time voice change", "professional processing"],
            "url": "https://uberduck.ai/",
            "subcategory": "voice_conversion",
            "needsMagic": true
        },
        {
            "title": "Meta Voice",
            "description": "A real-time voice changer supporting multiple sound style conversions",
            "tags": ["real-time voice change", "style conversion", "Meta tools"],
            "url": "https://voice.meta.com/",
            "subcategory": "voice_conversion",
            "needsMagic": true
        },
        {
            "title": "Voicemod",
            "description": "A voice changing tool for diversified sound effect processing",
            "tags": ["voice change effects", "diversification", "sound processing"],
            "url": "https://www.voicemod.net/",
            "subcategory": "voice_conversion",
            "needsMagic": true
        },
        
        // Audio Editing & Enhancement Tools
        {
            "title": "Ximalaya Yinjian",
            "description": "Himalaya's one-stop AI audio creation platform, a professional audio processing tool",
            "tags": ["Himalaya", "audio creation", "AI editing"],
            "url": "https://www.ximalaya.com/yinjian",
            "subcategory": "audio_editing",
            "needsMagic": false
        },
        {
            "title": "Adobe Podcast",
            "description": "An AI audio recording and editing tool, a professional podcast production platform",
            "tags": ["Adobe", "podcast production", "AI editing"],
            "url": "https://www.adobe.com/products/podcasts.html",
            "subcategory": "audio_editing",
            "needsMagic": true
        },
        {
            "title": "Audacity",
            "description": "A noise cancellation and sound balancing tool to improve audio quality",
            "tags": ["noise cancellation", "sound balancing", "audio processing"],
            "url": "https://www.audacityteam.org/",
            "subcategory": "audio_editing",
            "needsMagic": false
        },
        {
            "title": "Krisp",
            "description": "An AI noise cancellation tool providing efficient audio noise reduction processing",
            "tags": ["noise cancellation", "AI processing", "audio clarity"],
            "url": "https://krisp.ai/",
            "subcategory": "audio_editing",
            "needsMagic": true
        },
        {
            "title": "LALAL.ai",
            "description": "A vocal and instrument separation tool for precise extraction of audio elements",
            "tags": ["sound separation", "vocal extraction", "instrument separation"],
            "url": "https://www.lalal.ai/",
            "subcategory": "audio_editing",
            "needsMagic": true
        },
        
        // Other Tools
        {
            "title": "Wondercraft",
            "description": "Generates diverse audio content such as podcasts and audiobooks",
            "tags": ["podcast generation", "audiobooks", "content creation"],
            "url": "https://www.wondercraft.ai/",
            "subcategory": "other_audio_tools",
            "needsMagic": true
        },
        {
            "title": "Enhancer AI",
            "description": "An AI sound effect generation tool for creating professional sound effects",
            "tags": ["sound effects", "AI generation", "professional sound effects"],
            "url": "https://enhancer.ai/",
            "subcategory": "other_audio_tools",
            "needsMagic": true
        },
        {
            "title": "ACE Studio",
            "description": "An AI singing voice synthesis tool that generates songs from lyrics",
            "tags": ["singing synthesis", "lyrics-to-song", "AI vocals"],
            "url": "https://studio.ace.world/",
            "subcategory": "other_audio_tools",
            "needsMagic": true
        },
        {
            "title": "Lanzao AI",
            "description": "Unisound's voiceover/voice cloning service for professional voice customization",
            "tags": ["Unisound", "voice cloning", "professional voiceover"],
            "url": "https://www.unisound.com/",
            "subcategory": "other_audio_tools",
            "needsMagic": false
        },
        {
            "title": "Audiobox",
            "description": "Meta's open-source speech generation model, an innovative audio technology platform",
            "tags": ["Meta", "open-source model", "speech generation"],
            "url": "https://github.com/facebookresearch/audiobox",
            "subcategory": "other_audio_tools",
            "needsMagic": true
        }
    ],
    
    // AI设计
    "ai_design": [
        // 平面与电商设计
        // 电商营销工具
        {
            "title": "Huiwa",
            "description": "A product image/copy generation tool helping e-commerce sellers quickly create promotional materials",
            "tags": ["product images", "copy generation", "e-commerce marketing"],
            "url": "https://huiwa.com/",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "Luban",
            "description": "Alibaba's intelligent design platform providing smart creative design services for e-commerce sellers",
            "tags": ["Alibaba", "intelligent design", "e-commerce images"],
            "url": "https://luban.aliyun.com/",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "Pic Copilot",
            "description": "Alibaba's international e-commerce design tool automatically generating images suitable for cross-border e-commerce",
            "tags": ["Alibaba", "cross-border e-commerce", "intelligent design"],
            "url": "https://www.alibabacloud.com/products/pic-copilot",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "Linglong",
            "description": "JD.com's product image design platform offering intelligent design solutions for e-commerce merchants",
            "tags": ["JD.com", "product images", "intelligent design"],
            "url": "https://linglong.jd.com/",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "Lingdong AI",
            "description": "An intelligent product image generation tool for one-click creation of e-commerce main images and detail pages",
            "tags": ["product images", "main image generation", "detail pages"],
            "url": "https://lingdongai.com/",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "PhotoMagic",
            "description": "A commercial photography image generation platform where AI intelligently creates product promotional photos",
            "tags": ["product photography", "promotional photos", "AI generation"],
            "url": "https://photomagic.ai/",
            "subcategory": "commerce_design",
            "needsMagic": true
        },
        
        // 海报/宣传图设计
        {
            "title": "Meijian AI",
            "description": "An intelligent poster and proposal generation tool providing creative design solutions for marketing campaigns",
            "tags": ["intelligent posters", "proposal generation", "marketing design"],
            "url": "https://www.meijian.com/",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "Gaoding AI",
            "description": "A one-stop design platform offering various design services including posters and promotional images",
            "tags": ["one-stop", "poster design", "promotional images"],
            "url": "https://www.gaoding.com/ai",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "Chuangkit AI",
            "description": "An online intelligent design platform supporting various design needs such as posters, business cards, and promotional pages",
            "tags": ["intelligent design", "online platform", "multiple templates"],
            "url": "https://www.chuangkit.com/ai",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "Meitu Design Studio",
            "description": "An AI image creation platform providing intelligent poster design and image beautification functions",
            "tags": ["Meitu", "AI creation", "image beautification"],
            "url": "https://design.meitu.com/",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "Microsoft Designer",
            "description": "Microsoft's intelligent poster design tool supporting multiple styles and templates",
            "tags": ["Microsoft", "poster design", "intelligent generation"],
            "url": "https://designer.microsoft.com/",
            "subcategory": "commerce_design",
            "needsMagic": true
        },
        {
            "title": "58pic AI Poster",
            "description": "A platform for batch generating AI posters with rich templates and design elements",
            "tags": ["batch generation", "AI posters", "design templates"],
            "url": "https://www.58pic.com/ai/poster",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "Yiketool",
            "description": "A free poster editing tool supporting quick creation and customized design",
            "tags": ["free", "poster editing", "quick design"],
            "url": "https://www.yiketool.com/",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        
        // LOGO与品牌设计
        {
            "title": "Looka",
            "description": "An AI-generated LOGO design platform providing brand identities and visual designs",
            "tags": ["AI generation", "LOGO design", "brand identity"],
            "url": "https://looka.com/",
            "subcategory": "commerce_design",
            "needsMagic": true
        },
        {
            "title": "Logoai",
            "description": "An intelligent brand LOGO design tool automatically generating professional logos",
            "tags": ["brand LOGO", "intelligent design", "automatic generation"],
            "url": "https://www.logoai.com/",
            "subcategory": "commerce_design",
            "needsMagic": true
        },
        {
            "title": "Alibaba Cloud Intelligent LOGO Design",
            "description": "Alibaba Cloud's intelligent LOGO design service helping enterprises quickly establish brand images",
            "tags": ["Alibaba Cloud", "LOGO design", "brand image"],
            "url": "https://www.aliyun.com/activity/creation/intelligent-logo",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "AIDesign",
            "description": "Tencent's free LOGO design tool supporting multiple industries and styles",
            "tags": ["Tencent", "free LOGO", "multiple styles"],
            "url": "https://ailogo.qq.com/",
            "subcategory": "commerce_design",
            "needsMagic": false
        },
        {
            "title": "LogoliveryAI",
            "description": "A free LOGO generation tool offering multiple styles and customization options",
            "tags": ["free", "LOGO generation", "customization"],
            "url": "https://logolivery.ai/",
            "subcategory": "commerce_design",
            "needsMagic": true
        },
        {
            "title": "Logo Diffusion",
            "description": "A logo generation tool based on AI diffusion models for creating unique brand identities",
            "tags": ["diffusion model", "logo generation", "unique design"],
            "url": "https://logodiffusion.com/",
            "subcategory": "commerce_design",
            "needsMagic": true
        },
        
        // UI/UX与原型设计
        // 界面设计工具
        {
            "title": "Figma AI",
            "description": "Figma's native AI features enhancing UI design efficiency and creative expression",
            "tags": ["Figma", "native AI", "UI design"],
            "url": "https://www.figma.com/ai",
            "subcategory": "ui_ux",
            "needsMagic": true
        },
        {
            "title": "MasterGo AI",
            "description": "A domestic UI design assistant helping designers quickly create user interfaces",
            "tags": ["domestic", "UI design", "design assistant"],
            "url": "https://mastergo.com/ai",
            "subcategory": "ui_ux",
            "needsMagic": false
        },
        {
            "title": "Creatie",
            "description": "An AI-driven UI/UX design tool providing intelligent design suggestions and automatic generation",
            "tags": ["AI-driven", "UI/UX", "intelligent design"],
            "url": "https://www.creatie.ai/",
            "subcategory": "ui_ux",
            "needsMagic": true
        },
        {
            "title": "Uizard",
            "description": "A rapid web and App prototype generation tool supporting sketch-to-prototype conversion",
            "tags": ["prototype generation", "sketch conversion", "rapid design"],
            "url": "https://uizard.io/",
            "subcategory": "ui_ux",
            "needsMagic": true
        },
        {
            "title": "Galileo AI",
            "description": "A high-fidelity UI prototyping tool generating detailed interfaces from text descriptions",
            "tags": ["high-fidelity", "prototyping", "text generation"],
            "url": "https://www.usegalileo.ai/",
            "subcategory": "ui_ux",
            "needsMagic": true
        },
       // 原型与协作
    {
        "title": "MockingBot AI",
        "description": "Product prototyping tool supporting team collaboration and rapid iteration",
        "tags": ["product prototyping", "team collaboration", "rapid iteration"],
        "url": "https://modao.cc/ai",
        "subcategory": "ui_ux",
        "needsMagic": false
    },
    {
        "title": "FigJam AI",
        "description": "Figma whiteboard collaboration tool with integrated AI features to boost team creativity",
        "tags": ["whiteboard collaboration", "Figma", "team creativity"],
        "url": "https://www.figma.com/figjam/",
        "subcategory": "ui_ux",
        "needsMagic": true
    },
    {
        "title": "Jishi AI",
        "description": "Text-to-editable-prototype tool supporting rapid prototyping",
        "tags": ["text generation", "editable prototype", "rapid design"],
        "url": "https://js.design/ai",
        "subcategory": "ui_ux",
        "needsMagic": false
    },
    {
        "title": "Fabrie AI",
        "description": "Whiteboard collaboration tool with an AI assistant to enhance team design efficiency",
        "tags": ["whiteboard collaboration", "AI assistant", "team design"],
        "url": "https://www.fabrie.cn/",
        "subcategory": "ui_ux",
        "needsMagic": false
    },
    
    // 插画与矢量设计
    // 插画生成
    {
        "title": "Recraft AI",
        "description": "Intelligent design tool for generating vectors, 3D models, and icons, offering diverse creative materials",
        "tags": ["vector generation", "3D design", "icon creation"],
        "url": "https://www.recraft.ai/",
        "subcategory": "illustration",
        "needsMagic": true
    },
    {
        "title": "Ilus AI",
        "description": "Stylized illustration generator for creating unique artistic-style illustrations",
        "tags": ["stylization", "illustration generation", "artistic style"],
        "url": "https://ilus.ai/",
        "subcategory": "illustration",
        "needsMagic": true
    },
    {
        "title": "Pictographic",
        "description": "AI illustration resource library providing diverse illustration and graphic materials",
        "tags": ["resource library", "illustration materials", "diversity"],
        "url": "https://pictographic.ai/",
        "subcategory": "illustration",
        "needsMagic": true
    },
    {
        "title": "Illustroke",
        "description": "SVG vector illustration generator for creating scalable vector graphics",
        "tags": ["SVG", "vector illustration", "scalability"],
        "url": "https://illustroke.com/",
        "subcategory": "illustration",
        "needsMagic": true
    },
    {
        "title": "illostrationAI",
        "description": "Multi-style illustration generation platform supporting various artistic styles",
        "tags": ["multi-style", "illustration generation", "artistic creation"],
        "url": "https://illostration.com/",
        "subcategory": "illustration",
        "needsMagic": true
    },
    
    // 矢量与图标
    {
        "title": "Vectorizer.AI",
        "description": "Bitmap-to-vector tool converting pixel images to scalable vector formats",
        "tags": ["bitmap to vector", "image conversion", "scalability"],
        "url": "https://vectorizer.ai/",
        "subcategory": "illustration",
        "needsMagic": true
    },
    {
        "title": "IconifyAI",
        "description": "App icon generator for creating consistent-style app icon sets",
        "tags": ["App icons", "style consistency", "icon sets"],
        "url": "https://iconify.ai/",
        "subcategory": "illustration",
        "needsMagic": true
    },
    {
        "title": "Appicons AI",
        "description": "Exquisite icon design tool for creating professional icons for apps and websites",
        "tags": ["exquisite icons", "app design", "professional icons"],
        "url": "https://appicons.ai/",
        "subcategory": "illustration",
        "needsMagic": true
    },
    {
        "title": "Magician",
        "description": "Figma icon plugin automatically generating icons compliant with design systems",
        "tags": ["Figma plugin", "icon generation", "design system"],
        "url": "https://magician.design/",
        "subcategory": "illustration",
        "needsMagic": true
    },
    
    // 3D与模型设计
    // 3D建模与渲染
    {
        "title": "VoxCraft",
        "description": "AI 3D model generator creating 3D objects from text descriptions",
        "tags": ["3D generation", "text description", "3D objects"],
        "url": "https://voxcraft.ai/",
        "subcategory": "model_design",
        "needsMagic": true
    },
    {
        "title": "Spline AI",
        "description": "3D object and animation generator for creating interactive 3D content",
        "tags": ["3D objects", "animation generation", "interactivity"],
        "url": "https://spline.design/",
        "subcategory": "model_design",
        "needsMagic": true
    },
    {
        "title": "Realibox AI",
        "description": "Sketch-to-3D rendering tool quickly converting 2D designs to 3D displays",
        "tags": ["sketch to 3D", "rendering", "quick conversion"],
        "url": "https://www.realibox.com/",
        "subcategory": "model_design",
        "needsMagic": false
    },
    {
        "title": "Luma AI",
        "description": "3D scanning and modeling platform converting real-world objects into digital models",
        "tags": ["3D scanning", "modeling", "digital models"],
        "url": "https://lumalabs.ai/",
        "subcategory": "model_design",
        "needsMagic": true
    },
    {
        "title": "Meshy",
        "description": "Text/image-to-3D model tool for gaming and design",
        "tags": ["text generation", "3D models", "game design"],
        "url": "https://www.meshy.ai/",
        "subcategory": "model_design",
        "needsMagic": true
    },
    {
        "title": "Dora AI",
        "description": "3D animation generation platform creating immersive experiences and interactive content",
        "tags": ["3D animation", "immersion", "interactive content"],
        "url": "https://www.dora.run/",
        "subcategory": "model_design",
        "needsMagic": true
    },
    
    // 建筑与家居设计
    {
        "title": "Kujiale AI",
        "description": "Smart home design platform offering one-stop interior design solutions",
        "tags": ["home design", "interior design", "one-stop"],
        "url": "https://www.kujiale.com/ai",
        "subcategory": "model_design",
        "needsMagic": false
    },
    {
        "title": "Modaiyun AI",
        "description": "Architecture and landscape design platform providing professional design aids",
        "tags": ["architecture design", "landscape design", "professional tools"],
        "url": "https://www.modaiyun.com/",
        "subcategory": "model_design",
        "needsMagic": false
    },
    {
        "title": "Collov AI",
        "description": "Interior home design generator creating personalized home spaces",
        "tags": ["interior design", "home generation", "personalization"],
        "url": "https://collov.com/",
        "subcategory": "model_design",
        "needsMagic": true
    },
    {
        "title": "Vizcom",
        "description": "Hand-drawn-to-product-design tool converting concept sketches to detailed renderings",
        "tags": ["hand-drawn conversion", "product design", "detailed rendering"],
        "url": "https://www.vizcom.ai/",
        "subcategory": "model_design",
        "needsMagic": true
    },
    
    // 辅助设计工具
    // 图片编辑优化
    {
        "title": "Bihun AI",
        "description": "Intelligent background removal and lossless enlargement tool enhancing image editing efficiency",
        "tags": ["background removal", "lossless enlargement", "image editing"],
        "url": "https://bishen.ink/",
        "subcategory": "assistant_tools",
        "needsMagic": false
    },
    {
        "title": "Jiandan Design",
        "description": "Online image processing tool offering multiple image editing and optimization functions",
        "tags": ["online processing", "image editing", "multifunction"],
        "url": "https://www.ijiantu.com/",
        "subcategory": "assistant_tools",
        "needsMagic": false
    },
    {
        "title": "Bige Design",
        "description": "Intelligent erasure and text-to-image tool simplifying image editing workflows",
        "tags": ["intelligent erasure", "text-to-image", "editing workflow"],
        "url": "https://bigesj.com/",
        "subcategory": "assistant_tools",
        "needsMagic": false
    },
    
    // 色彩与排版
    {
        "title": "Eva Design System",
        "description": "Intelligent color generation system providing harmonious color schemes for design",
        "tags": ["color generation", "design system", "harmonious schemes"],
        "url": "https://colors.eva.design/",
        "subcategory": "assistant_tools",
        "needsMagic": false
    },
    {
        "title": "Khroma",
        "description": "AI color palette tool learning user preferences to generate personalized color schemes",
        "tags": ["AI color matching", "personalization", "user preferences"],
        "url": "https://www.khroma.co/",
        "subcategory": "assistant_tools",
        "needsMagic": true
    },
    {
        "title": "ColorMagic",
        "description": "Color palette generator creating coordinated color combinations",
        "tags": ["color palettes", "color combinations", "coordination"],
        "url": "https://colormagic.app/",
        "subcategory": "assistant_tools",
        "needsMagic": true
    },
    {
        "title": "135 AI Typesetting",
        "description": "WeChat official account graphic typesetting tool providing intelligent content layout services",
        "tags": ["WeChat official account", "graphic typesetting", "content layout"],
        "url": "https://www.135editor.com/ai_editor",
        "subcategory": "assistant_tools",
        "needsMagic": false
    },
    
    // 素材与资源库
    {
        "title": "58pic",
        "description": "Design resource platform offering rich AI-generated and designed materials",
        "tags": ["design materials", "resource platform", "AI generation"],
        "url": "https://www.58pic.com/",
        "subcategory": "assistant_tools",
        "needsMagic": false
    },
    {
        "title": "ibaotu AI Resource Library",
        "description": "AI-generated resource library providing diverse design elements and templates",
        "tags": ["AI resources", "design elements", "template library"],
        "url": "https://ibaotu.com/",
        "subcategory": "assistant_tools",
        "needsMagic": false
    },
    
    // 其他专项工具
    // 动效设计
    {
        "title": "Fable Prism",
        "description": "AI-driven motion design tool simplifying animation creation workflows",
        "tags": ["motion design", "AI-driven", "animation creation"],
        "url": "https://fable.app/prism",
        "subcategory": "special_tools",
        "needsMagic": true
    },
    {
        "title": "Framer AI",
        "description": "AI-based website design and motion creation platform supporting rapid prototyping",
        "tags": ["website design", "motion creation", "prototyping"],
        "url": "https://www.framer.com/ai",
        "subcategory": "special_tools",
        "needsMagic": true
    },
    
    // 网站开发
    {
        "title": "Wegic",
        "description": "AI website builder creating professional websites from text descriptions",
        "tags": ["AI website building", "text description", "rapid creation"],
        "url": "https://wegic.com/",
        "subcategory": "special_tools",
        "needsMagic": false
    },
        
        // 设计灵感
        {
            title: 'Pimento',
            description: '创意参考平台，提供设计灵感和创意源泉',
            tags: ['创意参考', '设计灵感', '创意源泉'],
            url: 'https://pimento.ai/',
            subcategory: 'special_tools',
            needsMagic: true
        },
        
        // Low-Code设计
        {
            title: 'Motiff 妙多',
            description: '猿辅导UI工具，提供低代码设计和开发解决方案',
            tags: ['猿辅导', 'UI工具', '低代码'],
            url: 'https://motiff.yuanfudao.com/',
            subcategory: 'special_tools',
            needsMagic: false
        },
        {
            title: 'AfterNIC',
            description: 'Aftermarket domain platform focused on premium domains and specialized domain extensions',
            tags: ['Premium Domains', 'Specialized Extensions', 'Domain Aftermarket'],
            url: 'https://www.afternic.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Dan.com',
            description: 'Domain transaction platform providing secure payment processing and ownership transfer services',
            tags: ['Secure Transactions', 'Domain Sales', 'Escrow Services'],
            url: 'https://dan.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Whois',
            description: 'Domain information lookup tool providing owner and contact details for domain name research',
            tags: ['Domain Research', 'Owner Information', 'Lookup Tool'],
            url: 'https://who.is/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'ICANN Lookup',
            description: 'Official domain information database provided by the Internet Corporation for Assigned Names and Numbers',
            tags: ['Official Database', 'Domain Information', 'Regulatory Body'],
            url: 'https://lookup.icann.org/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Domainr',
            description: 'Creative domain name search tool for finding available and memorable domain names',
            tags: ['Domain Availability', 'Creative Naming', 'Search Tool'],
            url: 'https://domainr.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'DomCop',
            description: 'Expired domain finder with traffic and SEO data for domain investors',
            tags: ['Expired Domains', 'SEO Analysis', 'Domain Investment'],
            url: 'https://www.domcop.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'NameJet',
            description: 'Backorder and auction service for expired and deleted domains with competitive bidding',
            tags: ['Domain Backorders', 'Domain Auctions', 'Expired Domains'],
            url: 'https://www.namejet.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Park.io',
            description: 'Service specializing in catching recently expired premium domains with high value',
            tags: ['Premium Domains', 'Expired Catching', 'Domain Acquisition'],
            url: 'https://park.io/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Domain.com',
            description: 'Established domain registrar offering a wide range of domain services and website hosting',
            tags: ['Domain Registration', 'Hosting Services', 'Established Brand'],
            url: 'https://www.domain.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Namecheap',
            description: 'Cost-effective domain registrar offering free WhoisGuard protection and competitive pricing',
            tags: ['Privacy Protection', 'Cost-effective', 'Domain Management'],
            url: 'https://www.namecheap.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'INRegistry',
            description: 'Official registry for .IN domains managed by the National Internet Exchange of India',
            tags: ['Indian Domains', 'Official Registry', '.IN Extension'],
            url: 'https://www.registry.in/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'CNNIC',
            description: 'China Internet Network Information Center, official registry for .CN domains',
            tags: ['Chinese Domains', 'Official Registry', '.CN Extension'],
            url: 'http://www.cnnic.cn/',
            subcategory: 'domain'
        },
        {
            title: 'JPRS',
            description: 'Japan Registry Services, the official registry for .JP domains',
            tags: ['Japanese Domains', 'Official Registry', '.JP Extension'],
            url: 'https://jprs.jp/en/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'EURid',
            description: 'Official registry for .EU domains serving European businesses and residents',
            tags: ['European Domains', 'Official Registry', '.EU Extension'],
            url: 'https://eurid.eu/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Verisign',
            description: 'Registry operator for .COM and .NET domains, providing DNS infrastructure services',
            tags: ['.COM Registry', '.NET Registry', 'DNS Infrastructure'],
            url: 'https://www.verisign.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Public Interest Registry',
            description: 'Non-profit organization managing .ORG domains for non-profit and community organizations',
            tags: ['.ORG Registry', 'Non-profit', 'Community Domains'],
            url: 'https://thenew.org/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Afilias',
            description: 'Global registry operator managing multiple TLDs including .INFO and .MOBI',
            tags: ['Multiple TLDs', 'Registry Operator', 'Global Services'],
            url: 'https://afilias.info/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'Donuts Inc',
            description: 'Large domain registry operator managing hundreds of new generic top-level domains',
            tags: ['New gTLDs', 'Registry Operator', 'Domain Portfolio'],
            url: 'https://donuts.domains/',
            subcategory: 'domain',
            needsMagic: true
        }
    ],
    
    // AI编程
    ai_coding: [
       // 代码生成与补全
    {
        "title": "GitHub Copilot",
        "description": "GitHub's AI programming assistant offering code completion and generation",
        "tags": ["GitHub", "code completion", "AI assistant"],
        "url": "https://github.com/features/copilot",
        "subcategory": "code_generation",
        "needsMagic": true
    },
    {
        "title": "Codeium",
        "description": "AI-driven code completion tool supporting multiple programming languages and IDEs",
        "tags": ["code completion", "multi-language support", "intelligent programming"],
        "url": "https://codeium.com/",
        "subcategory": "code_generation",
        "needsMagic": true
    },
    {
        "title": "Tabnine",
        "description": "AI-based intelligent code completion tool enhancing programming efficiency",
        "tags": ["code completion", "intelligent suggestions", "programming efficiency"],
        "url": "https://www.tabnine.com/",
        "subcategory": "code_generation",
        "needsMagic": true
    },
    {
        "title": "CodeWhisperer",
        "description": "Amazon's AI code generation tool providing intelligent code completion",
        "tags": ["Amazon", "code generation", "AWS"],
        "url": "https://aws.amazon.com/codewhisperer/",
        "subcategory": "code_generation",
        "needsMagic": true
    },
    {
        "title": "aiXcoder",
        "description": "Natural language to code generation tool supporting multiple programming languages",
        "tags": ["code generation", "natural language", "multi-language support"],
        "url": "https://www.aixcoder.com/",
        "subcategory": "code_generation",
        "needsMagic": false
    },
    {
        "title": "Tongyi Lingma",
        "description": "Alibaba's intelligent programming assistant supporting code generation and completion",
        "tags": ["Alibaba", "code generation", "intelligent programming"],
        "url": "https://tongyi.aliyun.com/lingma",
        "subcategory": "code_generation",
        "needsMagic": false
    },
    {
        "title": "Doubao MarsCode",
        "description": "ByteDance's AI programming assistant providing code generation and completion",
        "tags": ["ByteDance", "code generation", "AI programming"],
        "url": "https://www.doubao.com/marscode",
        "subcategory": "code_generation",
        "needsMagic": false
    },
    
    // 全栈/端到端开发
    {
        "title": "Devin",
        "description": "The first fully autonomous AI engineer capable of independent software development projects",
        "tags": ["AI engineer", "full-stack development", "autonomous programming"],
        "url": "https://www.cognition.ai/devin",
        "subcategory": "fullstack_dev",
        "needsMagic": true
    },
    {
        "title": "Bolt.new",
        "description": "StackBlitz full-stack development tool simplifying web application creation",
        "tags": ["full-stack tool", "web development", "StackBlitz"],
        "url": "https://bolt.new/",
        "subcategory": "fullstack_dev",
        "needsMagic": true
    },
    {
        "title": "Mashangfei",
        "description": "AI-driven automatic application generation platform improving development efficiency",
        "tags": ["application generation", "development efficiency", "AI programming"],
        "url": "https://www.mashangfei.com/",
        "subcategory": "fullstack_dev",
        "needsMagic": false
    },
    {
        "title": "MarsX",
        "description": "No-code development platform for rapid application building via AI",
        "tags": ["no-code development", "application building", "AI assistance"],
        "url": "https://marsx.dev/",
        "subcategory": "fullstack_dev",
        "needsMagic": false
    },
    
    // 设计转代码
    {
        "title": "Sketch2Code",
        "description": "Microsoft tool converting hand-drawn sketches to HTML code",
        "tags": ["Microsoft", "sketch to HTML", "design to code"],
        "url": "https://www.microsoft.com/en-us/ai/ai-lab-sketch2code",
        "subcategory": "design_to_code",
        "needsMagic": true
    },
    {
        "title": "Imgcook",
        "description": "Alibaba's design-to-frontend-code tool improving development efficiency",
        "tags": ["Alibaba", "design to code", "frontend development"],
        "url": "https://www.imgcook.com/",
        "subcategory": "design_to_code",
        "needsMagic": false
    },
    {
        "title": "Deco",
        "description": "JD.com's design-to-multi-terminal-code tool supporting multiple platforms",
        "tags": ["JD.com", "design to code", "multi-terminal development"],
        "url": "https://deco-preview.jd.com/",
        "subcategory": "design_to_code",
        "needsMagic": false
    },
    {
        "title": "Quest AI",
        "description": "AI tool automatically converting design files to React code",
        "tags": ["design to code", "React", "AI conversion"],
        "url": "https://www.quest.ai/",
        "subcategory": "design_to_code",
        "needsMagic": true
    },
    {
        "title": "Locofy",
        "description": "Platform converting Figma/Sketch designs to code",
        "tags": ["Figma", "Sketch", "code conversion"],
        "url": "https://www.locofy.ai/",
        "subcategory": "design_to_code",
        "needsMagic": true
    },

        
    {
        "title": "CodeRabbit",
        "description": "AI-driven code review tool to improve code quality",
        "tags": ["code review", "AI analysis", "quality control"],
        "url": "https://coderabbit.ai/",
        "subcategory": "code_review",
        "needsMagic": true
    },
    {
        "title": "CodiumAI",
        "description": "Code test analysis tool that automatically generates test cases",
        "tags": ["code testing", "test generation", "AI analysis"],
        "url": "https://www.codium.ai/",
        "subcategory": "code_review",
        "needsMagic": true
    },
    {
        "title": "Codiga",
        "description": "Real-time code analysis tool providing instant code quality feedback",
        "tags": ["real-time analysis", "code quality", "instant feedback"],
        "url": "https://www.codiga.io/",
        "subcategory": "code_review",
        "needsMagic": true
    },
    
    // 自然语言交互开发
    {
        "title": "Lovable",
        "description": "Conversational web development tool to create websites via natural language",
        "tags": ["conversational development", "web development", "natural language"],
        "url": "https://www.lovable.ai/",
        "subcategory": "natural_language_dev",
        "needsMagic": true
    },
    {
        "title": "Plandex",
        "description": "Terminal AI programming engine to execute development tasks via natural language",
        "tags": ["terminal programming", "AI engine", "natural language"],
        "url": "https://www.plandex.dev/",
        "subcategory": "natural_language_dev",
        "needsMagic": true
    },
    {
        "title": "HeyCLI",
        "description": "AI tool to convert natural language to command-line instructions",
        "tags": ["command line", "natural language", "AI conversion"],
        "url": "https://www.heycli.com/",
        "subcategory": "natural_language_dev",
        "needsMagic": true
    },
    
    // 低代码/无代码平台
    {
        "title": "Solo",
        "description": "Mozilla's no-code website builder to simplify website creation",
        "tags": ["Mozilla", "no-code", "website builder"],
        "url": "https://solo.build/",
        "subcategory": "low_code",
        "needsMagic": true
    },
    {
        "title": "Hocoos",
        "description": "AI-driven website building platform to quickly create professional websites",
        "tags": ["AI website building", "website construction", "professional design"],
        "url": "https://www.hocoos.com/",
        "subcategory": "low_code",
        "needsMagic": true
    },
    {
        "title": "Debuild",
        "description": "Low-code web development platform to simplify web application creation",
        "tags": ["low-code", "web development", "web applications"],
        "url": "https://debuild.co/",
        "subcategory": "low_code",
        "needsMagic": true
    },
    
    // 云端IDE与编辑器
    {
        "title": "Cursor",
        "description": "AI-driven code editor providing intelligent coding assistance",
        "tags": ["AI editor", "code intelligence", "programming assistance"],
        "url": "https://cursor.sh/",
        "subcategory": "cloud_ide",
        "needsMagic": true
    },
    {
        "title": "Project IDX",
        "description": "Google-developed cloud IDE supporting multiple programming languages and frameworks",
        "tags": ["Google", "cloud IDE", "multi-language support"],
        "url": "https://developers.google.com/idx",
        "subcategory": "cloud_ide",
        "needsMagic": true
    },
    {
        "title": "Replit Agent",
        "description": "Replit's AI programming assistant to help developers code faster",
        "tags": ["Replit", "AI assistant", "rapid coding"],
        "url": "https://replit.com/ai",
        "subcategory": "cloud_ide",
        "needsMagic": true
    }
],

// AI提示词
"ai_prompts": [
    // 综合提示词平台
    {
        "title": "PromptPerfect",
        "description": "Professional prompt optimization tool supporting multiple models (e.g., GPT, Stable Diffusion) with automatic prompt structure optimization.",
        "tags": ["prompt optimization", "multi-model support", "automatic optimization"],
        "url": "https://promptperfect.jina.ai",
        "subcategory": "prompt_platforms",
        "needsMagic": true
    },
    {
        "title": "FlowGPT",
        "description": "Community-driven prompt sharing platform with numerous practical cases (e.g., writing, programming, design).",
        "tags": ["prompt sharing", "community-driven", "practical cases"],
        "url": "https://flowgpt.com",
        "subcategory": "prompt_platforms",
        "needsMagic": true
    },
    {
        "title": "PromptHero",
        "description": "Prompt library focused on AI-generated content, especially suitable for Stable Diffusion and MidJourney users.",
        "tags": ["AI-generated content", "Stable Diffusion", "MidJourney"],
        "url": "https://prompthero.com",
        "subcategory": "prompt_platforms",
        "needsMagic": true
    },
    {
        "title": "PromptBase",
        "description": "Prompt marketplace for buying/selling high-quality prompts, covering DALL·E, ChatGPT, etc.",
        "tags": ["prompt marketplace", "high-quality prompts", "DALL·E"],
        "url": "https://promptbase.com",
        "subcategory": "prompt_platforms",
        "needsMagic": true
    },
    
    // Stable Diffusion专属工具
    {
        "title": "Stable Diffusion Prompt Book",
        "description": "Official prompt book including style templates and parameter details.",
        "tags": ["prompt book", "style templates", "parameter details"],
        "url": "https://github.com/search?q=Stable-Diffusion-Prompt-Book",
        "subcategory": "sd_tools",
        "needsMagic": true
    },
    {
        "title": "PublicPrompts",
        "description": "Open-source prompt library suitable for artistic creation and design inspiration.",
        "tags": ["open-source prompts", "artistic creation", "design inspiration"],
        "url": "https://publicprompts.art",
        "subcategory": "sd_tools",
        "needsMagic": true
    },
    {
        "title": "MJ Prompt Tool",
        "description": "MidJourney-specific prompt generator with style, lighting, and other parameter adjustments.",
        "tags": ["MidJourney", "prompt generator", "parameter adjustments"],
        "url": "https://mjprompttool.com",
        "subcategory": "sd_tools",
        "needsMagic": true
    },
    
    // ChatGPT提示优化
    {
        "title": "Awesome ChatGPT Prompts",
        "description": "GitHub open-source project providing reusable conversation templates (e.g., simulated Linux terminal, screenwriting assistant).",
        "tags": ["open-source project", "conversation templates", "ChatGPT"],
        "url": "https://github.com/search?q=awesome-chatgpt-prompts",
        "subcategory": "chatgpt_prompts",
        "needsMagic": true
    },
    {
        "title": "ChatGPT Shortcut",
        "description": "Chinese shortcut command library with clear categorization (writing, marketing, programming, etc.) for one-click invocation.",
        "tags": ["Chinese command library", "shortcut invocation", "clear categorization"],
        "url": "https://newzone.top/chatgpt-shortcuts",
        "subcategory": "chatgpt_prompts",
        "needsMagic": false
    },
    {
        "title": "AIPRM",
        "description": "ChatGPT browser plugin with hundreds of preset prompts (SEO, data analysis, etc.).",
        "tags": ["browser plugin", "preset prompts", "SEO"],
        "url": "https://aiprm.com",
        "subcategory": "chatgpt_prompts",
        "needsMagic": true
    },
    
    // 可视化提示工具
    {
        "title": "Visual Prompt Builder",
        "description": "Drag-and-drop tool for generating complex prompts, suitable for image generation models.",
        "tags": ["drag-and-drop generation", "complex prompts", "image generation"],
        "url": "https://viaualpromptbuilder.com",
        "subcategory": "visual_tools",
        "needsMagic": true
    },
    {
        "title": "Generrated",
        "description": "DALL·E 2 prompt design guide with case analyses.",
        "tags": ["DALL·E 2", "prompt design", "case analysis"],
        "url": "https://generrated.com/guides",
        "subcategory": "visual_tools",
        "needsMagic": true
    },
    
    // 中文特色资源
    {
        "title": "词魂",
        "description": "Chinese AIGC prompt library focusing on localized scenarios (e.g., e-commerce copy, short video scripts).",
        "tags": ["Chinese prompts", "localized scenarios", "e-commerce copy"],
        "url": "https://cihun.com",
        "subcategory": "chinese_resources",
        "needsMagic": false
    },
    {
        "title": "AI Short",
        "description": "Chinese concise prompt generator that quickly outputs optimized commands from keywords.",
        "tags": ["Chinese generator", "concise prompts", "keyword optimization"],
        "url": "https://aishort.top",
        "subcategory": "chinese_resources",
        "needsMagic": false
    },
    {
        "title": "LangGPT",
        "description": "Prompt engineering guide for Chinese large language models, including role-setting templates.",
        "tags": ["Chinese large models", "prompt engineering", "role-setting templates"],
        "url": "https://github.com/search?q=LangGPT",
        "subcategory": "chinese_resources",
        "needsMagic": true
    },
    
    // 其他实用工具
    {
        "title": "ClickPrompt",
        "description": "Visual prompt workflow tool supporting team collaboration.",
        "tags": ["workflow tool", "team collaboration", "visualization"],
        "url": "https://clickprompt.org",
        "subcategory": "other_tools",
        "needsMagic": true
    },
    {
        "title": "Snack Prompt",
        "description": "Minimalist prompt generator suitable for quick experiments.",
        "tags": ["minimalist generator", "quick experiments", "prompts"],
        "url": "https://snackprompt.com",
        "subcategory": "other_tools",
        "needsMagic": true
    },
    {
        "title": "PromptVine",
        "description": "User-shared prompt library with a rating system.",
        "tags": ["user-shared", "prompt library", "rating system"],
        "url": "https://promptvine.com",
        "subcategory": "other_tools",
        "needsMagic": true
    }
],

    // AI搜索
    ai_search: [
        {
            title: 'Perplexity AI',
            description: 'Provides AI search results with cited sources, offering detailed explanations for complex questions',
            descriptionEn: 'Provides AI search results with cited sources, offering detailed explanations for complex questions',
            tags: ['AI Search', 'Smart Q&A', 'Source Citation'],
            url: 'https://www.perplexity.ai/',
            subcategory: 'general_search',
            isRecommended: true
        },
        {
            title: 'Claude',
            description: 'AI assistant by Anthropic, providing rich information and insights with real-time web browsing',
            descriptionEn: 'AI assistant by Anthropic, providing rich information and insights with real-time web browsing',
            tags: ['AI Search', 'Smart Q&A', 'Information Retrieval'],
            url: 'https://claude.ai/',
            subcategory: 'general_search',
            isRecommended: true
        },
        // ... 其他站点保持不变 ...
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
        description: "An integrated application by Alibaba featuring AI search, cloud storage, document editing and content creation",
        url: "https://quark.cn",
        tags: ["Alibaba", "Integrated App"],
        subcategory: "general_search"
    },
    {
        name: "Perplexity AI", 
        description: "Highly interactive conversational AI search engine with source tracing and real-time web search",
        url: "https://www.perplexity.ai/",
        tags: ["Conversational Search", "Source Tracing"],
        subcategory: "general_search"
    },
    {
        name: "ERNIE Bot",
        description: "AI search service by Baidu offering Chinese content understanding and generation capabilities",
        url: "https://yiyan.baidu.com/",
        tags: ["Baidu", "Chinese Search"],
        subcategory: "general_search"
    },
    
    // 学术科研类
    {
        name: "Consensus",
        description: "AI search engine focused on academic research, searching and summarizing scientific papers",
        url: "https://consensus.app/",
        tags: ["Academic Research", "Paper Search"],
        subcategory: "academic_search"
    },
    {
        name: "Elicit",
        description: "AI research assistant that helps find relevant papers and summarize research findings",
        url: "https://elicit.org/",
        tags: ["Research Tool", "Paper Analysis"],
        subcategory: "academic_search"
    },
    {
        name: "Scholar Chat", 
        description: "AI chat tool based on academic papers, providing scientifically-backed answers",
        url: "https://scholarchat.io/",
        tags: ["Academic Q&A", "Research Assistant"],
        subcategory: "academic_search"
    },
    {
            name: "ResearchRabbit",
            description: "Academic literature discovery tool, visualizing citation relationships and related research",
            url: "https://www.researchrabbit.ai/",
            tags: ["Literature Discovery", "Citation Analysis"],
            subcategory: "academic_search"
        },
        {
            "name": "Lumina", 
            "logo": "https://lumina.com/favicon.ico",
            "description": "Completely free AI academic search engine covering papers, journals and other resources, supporting one-click literature review generation",
            "url": "https://lumina.com",
            "tags": ["Academic Search", "Paper Retrieval"],
            "subcategory": "academic_search"
    },
    {
        "name": "AMiner",
        "logo": "https://www.aminer.cn/favicon.ico",
        "description": "Zhipu AI academic platform, providing scholar portraits, paper recommendations and trend analysis based on large models",
        "url": "https://www.aminer.cn",
        "tags": ["Academic Graph", "Research Analysis"],
        "subcategory": "academic_search"
    },
    
    {
        "name": "Consensus",
        "logo": "https://consensus.app/favicon.ico",
        "description": "AI tool directly linking to research paper conclusions, providing reliable research answers through question-and-answer format",
        "url": "https://consensus.app",
        "tags": ["Academic Q&A", "Paper Summary"],
        "subcategory": "academic_search"
    },
    
    {
        "name": "Devv",
        "logo": "https://devv.ai/favicon.ico",
        "description": "New-generation search engine designed specifically for programmers, supporting code snippet search and API document direct access",
        "url": "https://devv.ai",
        "tags": ["Code Search", "Developer Tools"],
        "subcategory": "programming_search"
    },
    
    {
        "name": "AlphaSense",
        "logo": "https://www.alphasese.com/favicon.ico",
        "description": "AI platform exclusively for financial professionals, integrating financial statements, news and industry analysis data",
        "url": "https://www.alphasese.com",
        "tags": ["Financial Data", "Industry Analysis"],
        "subcategory": "finance_search"
    },
    
    {
        "name": "点点（小红书）",
        "logo": "https://www.xiaohongshu.com/favicon.ico",
        "description": "Xiaohongshu life scene AI search, covering practical recommendations for food, travel and shopping",
        "url": "https://www.xiaohongshu.com",
        "tags": ["Life Recommendations", "Scene Search"],
        "subcategory": "life_search"
    },
    
    {
        "name": "Flowith",
        "logo": "https://flowith.com/favicon.ico",
        "description": "Node-based interactive AI tool, connecting search and dialogue content through visual graph",
        "url": "https://flowith.com",
        "tags": ["Visual Search", "Knowledge Graph"],
        "subcategory": "innovative_search"
    },
    
    {
        "name": "Exa AI",
        "logo": "https://exa.ai/favicon.ico",
        "description": "Search engine designed specifically for AI models, optimizing RAG (retrieval-augmented generation) effects",
        "url": "https://exa.ai",
        "tags": ["AI Development", "Model Training"],
        "subcategory": "tech_search"
    },
    
    {
        "name": "纳米搜索（360）",
        "logo": "https://ai.360.cn/favicon.ico",
        "description": "360 launched AI search, automatically generating video summary from text results",
        "url": "https://ai.360.cn",
        "tags": ["Video Generation", "Multimedia Search"],
        "subcategory": "special_search"
    },
    
    // 编程开发类
    {
        name: "Phind",
        description: "AI search engine designed specifically for developers, solving complex programming problems",
        url: "https://www.phind.com/",
        tags: ["Programming", "Development Tools"],
        subcategory: "programming_search"
    },
    {
        name: "Bloop",
        description: "Code search engine, understanding semantics and providing context-related code results",
        url: "https://bloop.ai/",
        tags: ["Code Search", "Semantic Understanding"],
        subcategory: "programming_search"
    },
    {
        name: "Devv",
        description: "Developer-specific AI search, providing code examples and technical solutions",
        url: "https://devv.ai/",
        tags: ["Code Examples", "Technical Solutions"],
        subcategory: "programming_search"
    },
    {
        name: "AskCodi",
        description: "Programming question-and-answer assistant, providing timely code suggestions and solutions",
        url: "https://www.askcodi.com/",
        tags: ["Programming Q&A", "Code Suggestions"],
        subcategory: "programming_search"
    },
    
    // 金融/商业类
    {
        name: "Bloomberg AI",
        description: "Bloomberg's AI search, providing market analysis and data interpretation",
        url: "https://www.bloomberg.com/ai",
        tags: ["Financial Market", "Data Analysis"],
        subcategory: "finance_search"
    },
    {
        name: "Financial Chat",
        description: "AI tool focused on financial question-and-answer, providing investment advice and market analysis",
        url: "https://www.financialchat.ai/",
        tags: ["Investment Advice", "Financial Analysis"],
        subcategory: "finance_search"
    },
    {
        name: "Stockwise AI",
        description: "Stock market AI search, analyzing company financial statements and market trends",
        url: "https://www.stockwise.ai/",
        tags: ["Stock Analysis", "Market Trends"],
        subcategory: "finance_search"
    },
    {
        name: "Finology Ticker",
        logo: "favicon/Finology Ticker.svg", 
        description: "Indian market stock analysis tool, providing AI-driven market insights",
        url: "https://ticker.finology.in/",
        tags: ["Stock", "Market Insights"],
        subcategory: "finance_search"
    },
    
    // 生活娱乐类
    {
        name: "Copilot.travel",
        description: "AI travel planning assistant, helping plan trips, find attractions and create itineraries",
        url: "https://www.copilot.travel/",
        tags: ["Travel Planning", "Itinerary Assistant"],
        subcategory: "life_search"
    },
    {
        name: "RecipeGPT",
        description: "AI recipe search engine, recommending recipes based on ingredients and preferences",
        url: "https://www.recipegpt.com/",
        tags: ["Recipe", "Cooking"],
        subcategory: "life_search"
    },
    {
        name: "Tripnotes",
        description: "AI travel notes assistant, personalized travel suggestions and攻略",
        url: "https://tripnotes.ai/",
        tags: ["Travel Notes", "Personalized Guides"],
        subcategory: "life_search"
    },
    {
        name: "MovieGPT",
        description: "AI movie recommendation search, recommending movies based on viewing preferences",
        url: "https://www.moviegpt.com/",
        tags: ["Movie Recommendations", "Entertainment"],
        subcategory: "life_search"
    },
    
    // 产品/公司类
    {
        name: "Producthunt AI Tools",
        description: "Platform dedicated to discovering emerging AI products and tools",
        url: "https://www.producthunt.com/topics/artificial-intelligence",
        tags: ["Product Discovery", "AI Tools"],
        subcategory: "product_search"
    },
    {
        name: "SimilarWeb AI",
        description: "AI-driven company and website traffic analysis tool",
        url: "https://www.similarweb.com/",
        tags: ["Website Analysis", "Competitive Intelligence"],
        subcategory: "product_search"
    },
    {
        name: "Crunchbase",
        description: "Company information and investment data search platform, integrated AI search functionality",
        url: "https://www.crunchbase.com/",
        tags: ["Company Information", "Investment Data"],
        subcategory: "product_search"
    },
    {
        name: "G2 AI Tool Finder",
        description: "Professional AI tool evaluation and comparison platform, based on real user reviews",
        url: "https://www.g2.com/categories/ai-tools",
        tags: ["Tool Evaluation", "User Reviews"],
        subcategory: "product_search"
    }
]
// 加载所有站点数据
function loadAllSitesData() {
    // 加载电商平台数据
    loadEcommerceSites();
    
    // 加载社交平台数据
    loadSocialSites();
    
    // 加载建站工具数据
    loadWebsiteTools();
    
    // 加载AI对话工具数据
    loadAiChatTools();
    
    // 加载AI写作工具数据
    loadAiWritingTools();
    
    // 加载AI图像工具数据
    loadAiImageTools();
    
    // 加载AI视频工具数据
    loadAiVideoTools();
    
    // 加载AI音频工具数据
    loadAiAudioTools();
    
    // 加载AI设计工具数据
    loadAiDesignTools();
    
    // 加载AI编程工具数据
    loadAiCodingTools();
    
    // 加载AI提示词工具数据
    loadAiPromptsTools();
    
    // 加载AI搜索工具数据
    loadAiSearchTools();
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
    // 加载所有数据
    loadAllSitesData();
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