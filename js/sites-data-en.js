/**
 * English Website Data File
 * This file contains all website card data in English
 * Can be modified as needed
 */



const sitesData = {
    // E-commerce Platforms
    ecommerce: [
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
            title: 'JD.com',
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
        },
        {
            title: 'Walmart',
            description: 'Global retail and e-commerce platform with strong omnichannel operations, especially in the US market',
            tags: ['US marketplace', 'omnichannel', 'e-commerce platform'],
            url: 'https://www.walmart.com/',
            subcategory: 'other'
        },
        {
            title: 'Temu',
            description: 'Fast-growing global marketplace by PDD, known for value pricing and managed cross-border supply',
            tags: ['global marketplace', 'value pricing', 'cross-border'],
            url: 'https://www.temu.com/',
            subcategory: 'temu'
        },
        {
            title: 'TikTok Shop',
            description: 'Commerce platform inside TikTok that converts short-video and livestream traffic into sales',
            tags: ['social commerce', 'short video', 'livestream selling'],
            url: 'https://seller-us.tiktok.com/',
            subcategory: 'tiktok-shop'
        },
        {
            title: 'SHEIN',
            description: 'Global fast-fashion commerce platform expanding into broader consumer categories',
            tags: ['fast fashion', 'global retail', 'cross-border'],
            url: 'https://www.shein.com/',
            subcategory: 'other'
        },
        {
            title: 'Mercado Libre',
            description: 'Leading Latin America marketplace with integrated commerce, payments and logistics ecosystem',
            tags: ['Latin America', 'marketplace', 'cross-border sales'],
            url: 'https://www.mercadolibre.com/',
            subcategory: 'mercado-libre'
        },
        {
            title: 'Noon',
            description: 'Major local e-commerce platform in the Middle East, strong in UAE and Saudi Arabia',
            tags: ['Middle East', 'local marketplace', 'regional commerce'],
            url: 'https://www.noon.com/',
            subcategory: 'other'
        },
        {
            title: 'Coupang',
            description: 'Leading Korean e-commerce platform known for high-speed fulfillment and delivery',
            tags: ['Korea', 'fast delivery', 'e-commerce platform'],
            url: 'https://www.coupang.com/',
            subcategory: 'other'
        },
        {
            title: 'Shopify',
            description: 'Mainstream SaaS storefront platform for building independent branded online stores',
            tags: ['independent store', 'SaaS', 'brand commerce'],
            url: 'https://www.shopify.com/',
            subcategory: 'shopify'
        },
        {
            title: 'WooCommerce',
            description: 'Open-source WordPress e-commerce plugin for highly customizable independent stores',
            tags: ['open-source', 'WordPress', 'independent store'],
            url: 'https://woocommerce.com/',
            subcategory: 'other'
        },
        {
            title: 'BigCommerce',
            description: 'Commerce platform for scaling brands with strong enterprise and multi-channel capabilities',
            tags: ['SaaS', 'enterprise commerce', 'multi-channel'],
            url: 'https://www.bigcommerce.com/',
            subcategory: 'other'
        },
        {
            title: 'Alibaba.com',
            description: 'Alibaba international B2B trade platform connecting global buyers with suppliers',
            tags: ['B2B', 'global trade', 'wholesale sourcing'],
            url: 'https://www.alibaba.com/',
            subcategory: 'other'
        },
        {
            title: 'Made-in-China',
            description: 'B2B platform focused on Chinese manufacturers, industrial products and export sourcing',
            tags: ['B2B', 'manufacturing', 'industrial sourcing'],
            url: 'https://www.made-in-china.com/',
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
            title: 'Screaming Frog SEO Spider',
            description: 'Desktop crawler for technical SEO audits, useful for indexing, redirects, and site structure diagnostics',
            tags: ['Technical SEO', 'Site Crawling', 'SEO Audit'],
            url: 'https://www.screamingfrog.co.uk/seo-spider/',
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
            title: 'Plausible Analytics',
            description: 'Lightweight privacy-first web analytics platform with simple dashboards and no cookie-banner burden',
            tags: ['Web Analytics', 'Privacy-First', 'Lightweight'],
            url: 'https://plausible.io/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'Microsoft Clarity',
            description: 'Free user behavior analytics with heatmaps, session replay, and conversion path insights',
            tags: ['Heatmaps', 'Session Replay', 'Behavior Analytics'],
            url: 'https://clarity.microsoft.com/',
            subcategory: 'analytics',
            needsMagic: true
        },
        {
            title: 'SimilarWeb',
            description: 'Similarweb corporate entry page, from which users can navigate to its traffic intelligence products',
            tags: ['Competitor Analysis', 'Traffic Analysis', 'User Behavior'],
            url: 'https://www.similarweb.com/corp/',
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
            title: 'Oracle Advertising (Moat)',
            description: 'Moat has been integrated into Oracle Advertising for ad visibility and media quality analysis',
            tags: ['Advertising Analysis', 'Viewability', 'Media Quality'],
            url: 'https://www.oracle.com/advertising/',
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
            title: 'Koala Inspector',
            description: 'Shopify-focused store intelligence tool to inspect themes, apps, and product signals',
            tags: ['Shopify Analysis', 'Store Intelligence', 'Product Research'],
            url: 'https://koala-apps.io/',
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
            title: '22.cn',
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
            title: 'Juming',
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
            title: 'Vercel',
            description: 'Popular deployment platform for frontend and full-stack apps, especially strong for Next.js workflows',
            tags: ['Frontend Deployment', 'Hosting', 'Full-Stack Platform'],
            url: 'https://vercel.com/',
            subcategory: 'server',
            needsMagic: true
        },
        {
            title: 'Netlify',
            description: 'Mainstream static/Jamstack hosting with CI builds, CDN delivery, and edge capabilities',
            tags: ['Static Hosting', 'Jamstack', 'Auto Deploy'],
            url: 'https://www.netlify.com/',
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
            title: 'Checkout.com',
            description: 'Enterprise payment platform for global processing, local acquiring, and advanced risk controls',
            tags: ['Enterprise Payments', 'Global Acquiring', 'Risk Control'],
            url: 'https://www.checkout.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Paddle',
            description: 'Merchant-of-record platform for SaaS and digital products with subscriptions, billing, and tax compliance',
            tags: ['SaaS Payments', 'Subscription Billing', 'Tax Compliance'],
            url: 'https://www.paddle.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'XTransfer',
            description: 'Cross-border trade payment platform supporting multi-currency collections and enterprise risk control',
            tags: ['Cross-Border Payments', 'Multi-Currency', 'Enterprise Finance'],
            url: 'https://www.xtransfer.com/',
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
            title: 'Airwallex',
            description: 'Multi-currency accounts supporting global collections and batch payments, transparent fees (0.3%-1%), ideal for B2B/high-frequency trading',
            tags: ['Multi-Currency Accounts', 'Batch Payments', 'B2B Payments'],
            url: 'https://www.airwallex.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'LianLian Pay',
            description: 'Wide platform integration (Wish/Shopee etc.), supports direct CNY withdrawals with ~0.7% fees',
            tags: ['Cross-Border Payments', 'Direct Withdrawals', 'Platform Settlements'],
            url: 'https://www.lianlianpay.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Payoneer',
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
            title: 'Alipay Global',
            description: 'Ideal for Chinese/SEA markets, provides localized payment experience',
            tags: ['Alipay', 'Chinese Market', 'Localized Payments'],
            url: 'https://global.alipay.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Wise',
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
            title: 'Dianxiaomi ERP',
            description: 'Multi-platform support (Amazon/eBay/Shopify etc.) with order/inventory/purchase features for SMB sellers',
            tags: ['SMB Sellers', 'Multi-Platform', 'Cross-Border E-Commerce'],
            url: 'https://www.dianxiaomi.com/',
            subcategory: 'erp'
        },
        {
            title: 'Mabang ERP',
            description: 'Cross-border e-commerce focused ERP with supply chain, finance and multi-warehouse coordination',
            tags: ['Cross-Border E-Commerce', 'Supply Chain', 'Multi-Warehouse'],
            url: 'https://www.mabangerp.com/',
            subcategory: 'erp'
        },
        {
            title: 'Tongtool ERP',
            description: 'Covers order processing, logistics tracking and profit calculation, integrated with major platforms',
            tags: ['Cross-Border E-Commerce', 'Logistics Tracking', 'Profit Analysis'],
            url: 'https://www.tongtool.com/',
            subcategory: 'erp'
        },
        {
            title: 'Lingxing ERP',
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
            title: 'Eccang ERP',
            description: 'Cross-border supply chain specialist supporting overseas warehouses and FBA management',
            tags: ['Supply Chain', 'Overseas Warehouses', 'FBA Management'],
            url: 'https://www.eccang.com/',
            subcategory: 'erp'
        },
        {
            title: 'CaptainBI',
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
            title: 'Zoho Inventory',
            description: 'Inventory and order management solution by Zoho, suitable for SMBs running multi-channel commerce',
            tags: ['Inventory Management', 'Order Management', 'SMB'],
            url: 'https://www.zoho.com/inventory/',
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
            title: 'Google Keyword Planner',
            description: 'Official Google Ads keyword planning tool for search volume ranges and campaign research',
            tags: ['Keyword Planning', 'Google Ads', 'Search Volume'],
            url: 'https://ads.google.com/home/tools/keyword-planner/',
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
            title: 'YOPmail',
            description: 'French provider with email format xxx@yopmail.com, long-term valid (requires periodic login)',
            tags: ['Long-Term Valid', 'Temporary Email', 'No Registration'],
            url: 'https://yopmail.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: 'Mail.tm',
            description: 'Reliable temporary mailbox service with multilingual support and API-friendly workflows',
            tags: ['Temporary Email', 'Multi-Language', 'API'],
            url: 'https://mail.tm/en/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: '24mail',
            description: 'Stable access in China, temporary email service with 24-hour auto-deletion',
            tags: ['China Accessible', '24-Hour', 'Temporary Email'],
            url: 'http://24mail.chacuo.net/',
            subcategory: 'temp-mail'
        },
        {
            title: 'Linshiyouxiang',
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
            title: 'GoLogin',
            description: 'Widely used anti-detect browser with cloud profiles, team collaboration, and multi-account isolation',
            tags: ['Fingerprint Browser', 'Multi-Account', 'Team Collaboration'],
            url: 'https://gologin.com/',
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
            title: 'Proton Mail',
            description: 'Privacy-first email service with end-to-end encryption and secure multi-device access',
            tags: ['Privacy Email', 'End-to-End Encryption', 'Account Resources'],
            url: 'https://proton.me/mail',
            subcategory: 'account',
            needsMagic: true
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
            title: 'Majestic',
            description: 'Veteran backlink intelligence platform with Trust Flow and Citation Flow link quality metrics',
            tags: ['Backlink Analysis', 'Link Quality', 'SEO Intelligence'],
            url: 'https://majestic.com/',
            subcategory: 'backlink',
            needsMagic: true
        }
    ],
    
    // AI Writing
    ai_writing: [
        // Writing & Reasoning Models
        {
            title: 'Claude 4',
            description: 'Widely seen in 2026 as the most human-sounding and structurally reliable writing model, with Artifacts excelling at long-form editing.',
            tags: ['Long-Form Writing', 'Structured Editing', 'Natural Prose'],
            url: 'https://claude.ai/',
            subcategory: 'model_reasoning',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'DeepSeek V3 / R1',
            description: 'High value and especially strong in Chinese context, with chain-of-thought performance that stands out for technical docs and complex analysis.',
            tags: ['Chinese Writing', 'Technical Docs', 'Reasoning'],
            url: 'https://chat.deepseek.com/',
            subcategory: 'model_reasoning',
            needsMagic: false,
            isRecommended: true
        },
        {
            title: 'ChatGPT - GPT-5.4',
            description: 'OpenAI\'s latest reasoning model for academic writing, scientific reporting, and work that depends on high factual precision.',
            tags: ['Academic Writing', 'Scientific Reports', 'Fact Accuracy'],
            url: 'https://chat.openai.com/',
            subcategory: 'model_reasoning',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Gemini',
            description: 'Google\'s multimodal model for research synthesis, web-assisted drafting, and multi-format content generation.',
            tags: ['Multimodal', 'Research Synthesis', 'Web-Assisted Writing'],
            url: 'https://gemini.google.com/',
            subcategory: 'model_reasoning',
            needsMagic: true
        },

        // Productivity & Long-Form Tools
        {
            title: 'Jasper.ai',
            description: 'Still a category leader in marketing writing, now deeply integrated with enterprise SEO data for Google-aligned blog generation.',
            tags: ['SEO Writing', 'Marketing Copy', 'Blog Generation'],
            url: 'https://www.jasper.ai/',
            subcategory: 'productivity_longform',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Writesonic',
            description: 'Focused on fast generation and one-click publishing, with Article Writer support for real-time search-informed writing.',
            tags: ['Real-Time Search', 'One-Click Publishing', 'Article Writer'],
            url: 'https://writesonic.com/',
            subcategory: 'productivity_longform',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Copy.ai Workflows',
            description: 'Now positioned around writing automation, turning product inputs into multi-platform promotional scripts and copy at scale.',
            tags: ['Workflow Automation', 'Batch Output', 'Marketing Ops'],
            url: 'https://www.copy.ai/',
            subcategory: 'productivity_longform',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Rytr',
            description: 'A cost-effective general writing assistant for drafts, emails, blog posts, and day-to-day writing productivity.',
            tags: ['General Writing', 'Drafting', 'Cost-Effective'],
            url: 'https://rytr.me/',
            subcategory: 'productivity_longform',
            needsMagic: true
        },
        {
            title: 'Otter.ai',
            description: 'Real-time speech-to-text and meeting notes assistant for turning interviews and meetings into long-form source material.',
            tags: ['Meeting Notes', 'Speech-to-Text', 'Source Material'],
            url: 'https://otter.ai/',
            subcategory: 'productivity_longform',
            needsMagic: true
        },
        {
            title: 'Descript',
            description: 'Combines transcription, subtitles, and editing, useful for podcasts, scripts, and long-form content repurposing.',
            tags: ['Transcription', 'Subtitles', 'Content Editing'],
            url: 'https://www.descript.com/',
            subcategory: 'productivity_longform',
            needsMagic: true
        },
        {
            title: 'DeepL',
            description: 'High-quality translation and expression refinement for multilingual research collation and long-form writing support.',
            tags: ['Translation', 'Multilingual', 'Expression Refinement'],
            url: 'https://www.deepl.com/',
            subcategory: 'productivity_longform',
            needsMagic: true
        },
        
        // Content Safety & AI Humanization
        {
            title: 'QuillBot',
            description: 'A top-tier rewriting and polishing tool with tone modes for academic, creative, and concise humanization workflows.',
            tags: ['Paraphrasing', 'Polishing', 'Tone Modes'],
            url: 'https://quillbot.com/',
            subcategory: 'content_safety',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Originality.ai',
            description: 'A leading platform for AI content detection and fact review, including hallucination-oriented risk checks before publishing.',
            tags: ['AI Detection', 'Fact Review', 'Hallucination Check'],
            url: 'https://originality.ai/',
            subcategory: 'content_safety',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'DeepL Write',
            description: 'Focused on English polishing and wording improvements for business emails, papers, and formal writing.',
            tags: ['English Polishing', 'Wording', 'Formal Writing'],
            url: 'https://www.deepl.com/write',
            subcategory: 'content_safety',
            needsMagic: true
        },
        {
            title: 'Youdao Translate · AI Writing',
            description: 'Supports translation, polishing, and grammar fixes for bilingual review and safer publishing workflows.',
            tags: ['Chinese-English', 'Polishing', 'Grammar Fixes'],
            url: 'https://ai.youdao.com/',
            subcategory: 'content_safety',
            needsMagic: false
        },
        
        // Vertical Specialists
        {
            title: 'Notion AI',
            description: 'If you already live inside Notion, its embedded writing flow is still one of the best productivity-native writing experiences available.',
            tags: ['Knowledge Base', 'Embedded Writing', 'Workflows'],
            url: 'https://www.notion.so/product/ai',
            subcategory: 'vertical_specialized',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Lex.page',
            description: 'Purpose-built for writers and bloggers, with a minimal editor that can continue drafts like a copilot when you get stuck.',
            tags: ['Writers', 'Blogging', 'Minimal Editor'],
            url: 'https://lex.page/',
            subcategory: 'vertical_specialized',
            needsMagic: true,
            isRecommended: true
        },
        {
            title: 'Huiwa AI Copywriting',
            description: 'An AI copywriting tool focused on the e-commerce and marketing fields, generating advertising copy, product descriptions, etc.',
            tags: ['e-commerce copywriting', 'product descriptions', 'marketing text'],
            url: 'https://huiwa.com/',
            subcategory: 'vertical_specialized',
            needsMagic: false
        },
        {
            title: 'Songguo AI Writing',
            description: 'A Chinese AI writing tool focused on new media content creation, suitable for content generation on official accounts and self-media.',
            tags: ['new media', 'official accounts', 'content creation'],
            url: 'https://songguo.ai/',
            subcategory: 'vertical_specialized',
            needsMagic: false
        },
        {
            title: 'Chengpian',
            description: 'An AI writing assistant for self-media creators, supporting hot articles and more professional content generation.',
            tags: ['self-media', 'hot content', 'original articles'],
            url: 'https://chengpian.com/',
            subcategory: 'vertical_specialized',
            needsMagic: false
        },
        {
            title: 'Xiaoyu AI Writing',
            description: 'An AI assistant focused on new media creation, providing various writing styles and templates',
            tags: ['self-media', 'writing styles', 'content creation'],
            url: 'https://xiaoyu.ai/',
            subcategory: 'vertical_specialized',
            needsMagic: false
        },
        {
            title: 'AI New Media Articles (Quark)',
            description: 'A new media article creation tool launched by Quark Search, supporting one-click generation of complete articles.',
            tags: ['new media', 'one-click generation', 'content creation'],
            url: 'https://www.myquark.cn/',
            subcategory: 'vertical_specialized',
            needsMagic: false
        },
        {
            title: 'Chuangyi AI',
            description: 'An AI tool focused on video script and creative content generation, suitable for short-video creators',
            tags: ['video scripts', 'short videos', 'creative content'],
            url: 'https://chuangyi.ai/',
            subcategory: 'vertical_specialized',
            needsMagic: false
        },
        {
            title: 'iFlytek Huiwen',
            description: 'A creative content generation tool launched by iFlytek, good at scripts, short dramas, and creative stories',
            tags: ['creative scripts', 'short-drama content', 'story generation'],
            url: 'https://www.xfyun.cn/services/huiwen',
            subcategory: 'vertical_specialized',
            needsMagic: false
        },
        {
            title: 'Wanneng Xiaoin',
            description: 'An AI assistant for creative content production, supporting scripts, outlines, dialogues, and other specialized writing tasks.',
            tags: ['creative production', 'content creation', 'script generation'],
            url: 'https://wannengxiaoin.com/',
            subcategory: 'vertical_specialized',
            needsMagic: false
        },
        {
            title: 'CaptionBot.ai',
            description: 'An AI tool that automatically generates captions and descriptive text for pictures and videos.',
            tags: ['picture captions', 'video descriptions', 'AI subtitles'],
            url: 'https://captionbot.ai/',
            subcategory: 'vertical_specialized',
            needsMagic: true
        },
        {
            title: 'Canva Text Generator',
            description: 'An AI text generation tool built into Canva for titles, descriptions, and short-form supporting copy.',
            tags: ['design text', 'title generation', 'visual copy'],
            url: 'https://www.canva.com/features/ai-text-generator/',
            subcategory: 'vertical_specialized',
            needsMagic: true
        },
        
       
    
    ],
    // AI图像
    ai_image: [
        // 通用AI图片生成
        {
            title: 'Midjourney',
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
            title: 'Jimeng AI',
            description: 'CapCut\'s Chinese image and video generation platform for posters, product creatives and social-ready visual assets',
            tags: ['Chinese generation', 'visual assets', 'e-commerce creatives'],
            url: 'https://jimeng.jianying.com/ai-tool/home/',
            subcategory: 'general_image',
            needsMagic: false
        },
        {
            title: 'Ideogram',
            description: 'AI image platform known for strong text rendering and branded visual generation for posters and marketing assets',
            tags: ['text rendering', 'brand visuals', 'poster design'],
            url: 'https://ideogram.ai/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'FLUX.1',
            description: 'High-quality image model family by Black Forest Labs, strong at photorealism and fine text details',
            tags: ['image models', 'photorealism', 'text details'],
            url: 'https://bfl.ai/',
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
            title: 'Chushou AI',
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
        // General AI Assistants
        {
            title: 'ChatGPT',
            description: 'OpenAI assistant for general chat, writing, brainstorming, and problem solving',
            tags: ['general chat', 'Q&A assistant', 'content creation'],
            url: 'https://chat.openai.com/',
            subcategory: 'general_assistant',
            isRecommended: true,
            needsMagic: true
        },
        {
            title: 'Claude',
            description: 'Anthropic assistant known for strong long-context understanding and reasoning',
            tags: ['long context', 'reasoning', 'analysis'],
            url: 'https://claude.ai/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: 'Gemini',
            description: 'Google assistant with multimodal capabilities and ecosystem integration',
            tags: ['Google AI', 'multimodal', 'productivity'],
            url: 'https://gemini.google.com/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: 'Grok',
            description: 'xAI assistant focused on real-time conversations and technical topics',
            tags: ['real-time info', 'technical Q&A', 'global platform'],
            url: 'https://grok.com/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: 'Microsoft Copilot',
            description: 'Microsoft AI assistant integrated with search and productivity workflows',
            tags: ['Microsoft AI', 'productivity', 'search integration'],
            url: 'https://copilot.microsoft.com/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: 'Doubao',
            description: 'ByteDance AI assistant for daily chat, writing, and office tasks',
            tags: ['domestic AI', 'office assistant', 'daily usage'],
            url: 'https://www.doubao.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'DeepSeek',
            description: 'High-performance assistant with strong reasoning and coding capabilities',
            tags: ['reasoning', 'coding', 'LLM assistant'],
            url: 'https://www.deepseek.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Tongyi Qianwen',
            description: 'Alibaba\'s latest assistant for chat, writing, reasoning and workflow-style task execution',
            tags: ['Alibaba AI', 'multi-turn chat', 'workflow execution'],
            url: 'https://www.qianwen.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'MiniMax',
            description: 'Fast-rising Chinese AI agent platform for chat, task decomposition and multi-step execution workflows',
            tags: ['AI agent', 'task execution', 'domestic model'],
            url: 'https://www.minimaxi.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Kimi',
            description: 'Moonshot AI assistant specialized in long document understanding',
            tags: ['long documents', 'knowledge Q&A', 'productivity'],
            url: 'https://kimi.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Tencent Yuanbao',
            description: 'Tencent assistant for Chinese dialogue, writing, and office scenarios',
            tags: ['Tencent AI', 'Chinese dialogue', 'office support'],
            url: 'https://hunyuan.tencent.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'ERNIE Bot',
            description: 'Baidu assistant for Chinese Q&A and knowledge-enhanced conversation',
            tags: ['Baidu AI', 'Chinese Q&A', 'knowledge assistant'],
            url: 'https://yiyan.baidu.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Spark',
            description: 'iFlytek assistant with strong Chinese language understanding and generation',
            tags: ['iFlytek AI', 'Chinese NLP', 'assistant'],
            url: 'https://xinghuo.xfyun.cn/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'ChatGLM',
            description: 'Zhipu AI assistant used in learning, work, and daily productivity tasks',
            tags: ['ChatGLM', 'domestic model', 'productivity'],
            url: 'https://chatglm.cn/',
            subcategory: 'general_assistant',
            needsMagic: false
        },

        // Multimodal and Multi-model Platforms
        {
            title: 'Poe',
            description: 'Quora platform for chatting with multiple AI models in one place',
            tags: ['multi-model', 'model comparison', 'chat platform'],
            url: 'https://poe.com/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'Meta AI',
            description: 'Meta assistant with multimodal interactions across text and images',
            tags: ['Meta AI', 'multimodal', 'ecosystem'],
            url: 'https://www.meta.ai/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'Monica',
            description: 'Browser AI assistant for reading, writing, translation, and multi-model chat',
            tags: ['browser assistant', 'multi-model', 'workflow'],
            url: 'https://monica.im/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'Cici',
            description: 'Global AI assistant for multilingual conversation and content generation',
            tags: ['multilingual', 'global product', 'chat assistant'],
            url: 'https://www.cici.ai/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'NotebookLM',
            description: 'Google AI notebook assistant focused on source-grounded document Q&A',
            tags: ['document Q&A', 'research', 'source grounding'],
            url: 'https://notebooklm.google.com/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },

        // Professional AI
        {
            title: 'GitHub Copilot',
            description: 'Mainstream AI coding assistant for completion, explanation, and refactoring support',
            tags: ['coding assistant', 'completion', 'developer productivity'],
            url: 'https://github.com/features/copilot',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'Cursor',
            description: 'AI-native coding environment for pair-programming and codebase-level editing',
            tags: ['AI IDE', 'pair programming', 'engineering workflow'],
            url: 'https://cursor.com/',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'CodeGeeX',
            description: 'AI coding assistant supporting multi-language code generation and completion',
            tags: ['code generation', 'multi-language', 'developer tool'],
            url: 'https://codegeex.cn/',
            subcategory: 'professional_ai',
            needsMagic: false
        },
        {
            title: 'Perplexity',
            description: 'Research-focused AI answer engine with source citations',
            tags: ['research assistant', 'citations', 'answer engine'],
            url: 'https://www.perplexity.ai/',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'ChatPDF',
            description: 'Document AI assistant for chatting with PDFs, summaries, and extraction',
            tags: ['PDF chat', 'summarization', 'document analysis'],
            url: 'https://www.chatpdf.com/',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'Manus',
            description: 'Agentic AI for research and workflow execution in complex tasks',
            tags: ['AI agent', 'workflow execution', 'research automation'],
            url: 'https://manus.im/',
            subcategory: 'professional_ai',
            needsMagic: true
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
            "title": "Kling AI",
            "description": "Kuaishou's next-generation AI video platform with multimodal prompting, camera control and high-consistency generation",
            "tags": ["text-to-video", "camera control", "high consistency"],
            "url": "https://kling.ai/",
            "subcategory": "text_to_video",
            "needsMagic": false
        },
        {
            "title": "Jimeng AI",
            "description": "CapCut's Chinese AI video platform for text-to-video, image-to-video and fast short-form production workflows",
            "tags": ["text-to-video", "image-to-video", "short-form creation"],
            "url": "https://jimeng.jianying.com/ai-tool/home/",
            "subcategory": "text_to_video",
            "needsMagic": false
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
            "title": "Morph Studio",
            "description": "An AI platform focusing on converting static images into smooth animations, supporting multiple animation styles",
            "tags": ["image animation", "diverse styles", "creative tool"],
            "url": "https://www.morphstudio.io/",
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
            "title": "Moonvalley",
            "description": "Converts static pictures into immersive dynamic scenes, suitable for artistic creation",
            "tags": ["scene animation", "artistic creation", "immersive experience"],
            "url": "https://www.moonvalley.com/",
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
            url: 'https://www.opus.pro/',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'Vimeo AI Tools',
            description: 'Professional video platform provides AI editing and enhancement tools to improve creation efficiency',
            tags: ['professional platform', 'AI editing', 'creation assistance'],
            url: 'https://vimeo.com/features/ai-video-tools',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'Supercreator',
            description: 'All-in-one short-video creation platform that helps generate scripts and streamline editing',
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
            title: 'Autodesk Flow Studio',
            description: 'Formerly Wonder Dynamics, now Autodesk\'s AI character animation and VFX toolset',
            tags: ['character replacement', 'VFX production', 'Autodesk'],
            url: 'https://www.autodesk.com/products/flow-studio/overview',
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
            title: 'Super Duck',
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
            title: 'TTSMaker',
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
            title: 'FAKEYOU',
            description: 'Deepfake text-to-speech platform focused on highly realistic voice cloning and character voices',
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
            "url": "https://podcast.adobe.com/",
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
            "url": "https://www.gaoding.art/creation",
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
            "url": "https://www.designkit.cn/",
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
    {
        "title": "Gamma",
        "description": "AI-native platform for turning ideas into presentations, documents and shareable web pages",
        "tags": ["presentations", "document generation", "web publishing"],
        "url": "https://gamma.app/",
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
            title: 'Motiff',
            description: 'Yuanfudao-backed UI tool offering low-code design and developer handoff workflows',
            tags: ['Yuanfudao', 'UI tools', 'low-code'],
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
        "title": "ChatGPT",
        "description": "OpenAI's general AI assistant for code generation, debugging help, refactoring, and scripting tasks",
        "tags": ["OpenAI", "code generation", "debugging assistant"],
        "url": "https://chatgpt.com/",
        "subcategory": "code_generation",
        "needsMagic": true
    },
    {
        "title": "Claude",
        "description": "Anthropic's coding and reasoning assistant with strong long-context code understanding and refactoring support",
        "tags": ["Anthropic", "long context", "code understanding"],
        "url": "https://claude.ai/",
        "subcategory": "code_generation",
        "needsMagic": true
    },
    {
        "title": "Gemini",
        "description": "Google's multimodal AI assistant for code generation, troubleshooting, and API example drafting",
        "tags": ["Google", "code generation", "multimodal assistant"],
        "url": "https://gemini.google.com/",
        "subcategory": "code_generation",
        "needsMagic": true
    },
    {
        "title": "GitHub Copilot",
        "description": "GitHub's AI programming assistant offering code completion and generation",
        "tags": ["GitHub", "code completion", "AI assistant"],
        "url": "https://github.com/features/copilot",
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
        "title": "Amazon Q Developer",
        "description": "Amazon's AI coding assistant for code completion, developer Q&A and workflow help across AWS environments",
        "tags": ["Amazon", "code generation", "developer AI"],
        "url": "https://aws.amazon.com/q/developer/",
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
        "title": "v0",
        "description": "Vercel's AI full-stack app builder for creating, editing and publishing working apps from prompts",
        "tags": ["Vercel", "full-stack generation", "prompt-driven development"],
        "url": "https://v0.app/",
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
        "title": "Qodo",
        "description": "AI code review and governance platform for complex repositories with rule-based review workflows",
        "tags": ["code review", "code governance", "AI analysis"],
        "url": "https://www.qodo.ai/",
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
        "title": "Cline",
        "description": "AI coding agent that lives in your editor and terminal, reading files, writing code and running commands with approval",
        "tags": ["AI agent", "editor extension", "terminal workflows"],
        "url": "https://cline.bot/",
        "subcategory": "natural_language_dev",
        "needsMagic": true
    },
    {
        "title": "Aider",
        "description": "Terminal AI pair programming tool with repo mapping, git integration and automated lint/test workflows",
        "tags": ["terminal coding", "git integration", "pair programming"],
        "url": "https://aider.chat/",
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

    // Automation workflows
    {
        "title": "Make",
        "description": "Visual automation workflow platform for connecting crawlers, spreadsheets, databases and third-party APIs into data pipelines",
        "tags": ["automation workflow", "data processing", "no-code integration"],
        "url": "https://www.make.com/",
        "subcategory": "automation_workflow",
        "needsMagic": true
    },
    {
        "title": "n8n",
        "description": "Open-source workflow orchestration platform for self-hosted crawling, data cleaning, webhooks and cross-system sync",
        "tags": ["open-source automation", "workflow orchestration", "webhooks"],
        "url": "https://n8n.io/",
        "subcategory": "automation_workflow",
        "needsMagic": true
    },
    {
        "title": "OpenClaw",
        "description": "AI-agent workflow platform for browser actions, automated crawling, task routing and structured data collection",
        "tags": ["AI agent", "web automation", "workflow automation"],
        "url": "https://openclaw.ai/",
        "subcategory": "automation_workflow",
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
        "url": "https://cursor.com/",
        "subcategory": "cloud_ide",
        "needsMagic": true
    },
        {
            title: 'Codex',
            description: 'OpenAI coding agent workspace for executing tasks, generating patches, and assisting end-to-end development flows',
            tags: ['OpenAI', 'coding agent', 'workspace'],
            url: 'https://chatgpt.com/codex',
            subcategory: 'cloud_ide',
            needsMagic: true
        },
        {
            title: 'Claude Code',
            description: 'Anthropic agentic coding tool for understanding repositories, applying edits, and supporting terminal-based development tasks',
            tags: ['Anthropic', 'agentic coding', 'repository understanding'],
            url: 'https://claude.ai/code',
            subcategory: 'cloud_ide',
            needsMagic: true
        },
    {
        "title": "Windsurf",
        "description": "Codeium's AI-native coding editor built for agentic code changes, repo understanding and automated dev workflows",
        "tags": ["AI editor", "agentic coding", "repo understanding"],
        "url": "https://windsurf.com/",
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
        "description": "Prompt library focused on AI-generated content, especially suitable for Stable Diffusion and Midjourney users.",
        "tags": ["AI-generated content", "Stable Diffusion", "Midjourney"],
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
        "description": "Midjourney-specific prompt generator with style, lighting, and other parameter adjustments.",
        "tags": ["Midjourney", "prompt generator", "parameter adjustments"],
        "url": "https://mjprompttool.com",
        "subcategory": "sd_tools",
        "needsMagic": true
    },
    
    // ChatGPT prompt optimization
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
    
    // Visual prompt tools
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
        "url": "https://generrated.com/",
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
        {
            title: 'Genspark',
            description: 'All-in-one AI workspace and search agent for deep research, page summarization and task execution',
            descriptionEn: 'All-in-one AI workspace and search agent for deep research, page summarization and task execution',
            tags: ['AI Search', 'Deep Research', 'Task Agent'],
            url: 'https://www.genspark.ai/',
            subcategory: 'general_search',
            isRecommended: true
        },
        {
            title: 'NotebookLM',
            description: 'Google source-grounded research assistant for summaries, cited answers and audio overviews from uploaded materials',
            descriptionEn: 'Google source-grounded research assistant for summaries, cited answers and audio overviews from uploaded materials',
            tags: ['Research Assistant', 'Cited Answers', 'Audio Overview'],
            url: 'https://notebooklm.google/',
            subcategory: 'academic_search',
            isRecommended: true
        }
    ],
    resources: [
        {
            title: 'Hugging Face',
            description: 'Leading open AI community for models, datasets and Spaces, ideal for discovering reusable resources and examples.',
            tags: ['AI Resources', 'Models', 'Datasets'],
            url: 'https://huggingface.co/',
            isRecommended: true
        },
        {
            title: 'Futurepedia',
            description: 'Large AI tools directory covering automation products and use cases for discovery and competitor research.',
            tags: ['AI Directory', 'Discovery', 'Tool Database'],
            url: 'https://www.futurepedia.io/',
            isRecommended: true
        },
        {
            title: 'There’s An AI For That',
            description: 'Task-based AI tool finder that helps users discover products by specific use cases and workflows.',
            tags: ['Use Cases', 'AI Search', 'Tool Finder'],
            url: 'https://theresanaiforthat.com/',
            isRecommended: true
        },
        {
            title: 'Product Hunt',
            description: 'Product discovery platform for tracking new tools, launches and startup trends across fast-moving categories.',
            tags: ['Launches', 'Trends', 'Product Discovery'],
            url: 'https://www.producthunt.com/',
            isRecommended: true
        }
    ],
    tech_blog: [
        {
            title: 'MDN Web Docs',
            description: 'Core reference for web standards, frontend APIs and implementation details used in practical development.',
            tags: ['Frontend', 'Web Docs', 'Reference'],
            url: 'https://developer.mozilla.org/',
            subcategory: 'tech_official_docs',
            isRecommended: true
        },
        {
            title: 'freeCodeCamp',
            description: 'Offers structured coding tutorials, project-based practice and engineering articles from beginner to advanced.',
            tags: ['Coding Tutorials', 'Projects', 'Learning Path'],
            url: 'https://www.freecodecamp.org/',
            subcategory: 'tech_tutorials',
            isRecommended: true
        },
        {
            title: 'roadmap.sh',
            description: 'Developer roadmaps and skill trees for frontend, backend, DevOps and adjacent engineering tracks.',
            tags: ['Roadmaps', 'Skills', 'Developer Growth'],
            url: 'https://roadmap.sh/',
            subcategory: 'tech_tutorials',
            isRecommended: true
        },
        {
            title: 'Vercel Docs',
            description: 'Documentation hub for frontend deployment, edge rendering and performance optimization in production workflows.',
            tags: ['Deployment', 'Frontend Engineering', 'Performance'],
            url: 'https://vercel.com/docs',
            subcategory: 'tech_deploy_ops',
            isRecommended: true
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
        name: "Genspark",
        description: "All-in-one AI workspace and search agent for deep research, page summarization and automated task execution",
        url: "https://www.genspark.ai/",
        tags: ["Deep Research", "AI Agent"],
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
        url: "https://elicit.com/",
        tags: ["Research Tool", "Paper Analysis"],
        subcategory: "academic_search"
    },
    {
        name: "NotebookLM",
        description: "Google's source-grounded research assistant for uploaded materials, cited answers and audio overviews",
        url: "https://notebooklm.google/",
        tags: ["Research Assistant", "Cited Answers"],
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
        "name": "AMiner",
        "logo": "https://www.aminer.cn/favicon.ico",
        "description": "Zhipu AI academic platform, providing scholar portraits, paper recommendations and trend analysis based on large models",
        "url": "https://www.aminer.cn",
        "tags": ["Academic Graph", "Research Analysis"],
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
        "logo": "https://www.alpha-sense.com/favicon.ico",
        "description": "AI platform exclusively for financial professionals, integrating financial statements, news and industry analysis data",
        "url": "https://www.alpha-sense.com/",
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