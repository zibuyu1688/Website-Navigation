
const sitesData = {
    // 电商平台
    ecommerce: [
        {
            title: '亚马逊全球开店',
            description: '亚马逊开店，提供产品上传、订单管理、广告投放等功能',
            tags: ['亚马逊', '开店', '跨境电商'],
            url: 'https://gs.amazon.cn/?utm_source=amz520.com',
            subcategory: ['amazon', 'shopify', 'tiktok'],
            isRecommended: true
        },
        {
            title: '亚马逊卖家中心',
            description: '亚马逊卖家平台，提供产品上传、订单管理、广告投放等功能',
            tags: ['亚马逊', '卖家平台', '跨境电商'],
            url: 'https://sellercentral.amazon.com/',
            subcategory: ['amazon', 'other-ecommerce'],
            isRecommended: true
        },
        {
            title: 'Amazon Brand Analytics',
            description: '亚马逊品牌分析工具，提供关键词搜索、购物行为、商品比较等数据',
            tags: ['亚马逊', '数据分析', '品牌'],
            url: 'https://sellercentral.amazon.com/analytics/dashboard/',
            subcategory: ['amazon', 'analytics']
        },
        {
            title: '亚马逊欧洲FBA费用计算器',
            description: '亚马逊欧洲FBA费用计算器，计算FBA费用',
            tags: ['亚马逊', 'FBA', '欧洲FBA费用计算器'],
            url: 'https://sellercentral.amazon.co.uk/fba/profitabilitycalculator/index',
            subcategory: ['amazon']
        },

        {
            title: '亚马逊日本FBA费用计算器',
            description: '亚马逊日本FBA费用计算器，计算FBA费用',
            tags: ['亚马逊', 'FBA', '日本FBA费用计算器'],
            url: 'https://sellercentral-japan.amazon.com/fba/profitabilitycalculator/index',
            subcategory: ['amazon']
        },
        {
            title: '亚马逊北美FBA费用计算器',
            description: '亚马逊北美FBA费用计算器，计算FBA费用',
            tags: ['亚马逊', 'FBA', '北美FBA费用计算器'],
            url: 'https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US',
            subcategory: ['amazon',]
        },
        {
            title: '美国前台',
            description: '亚马逊美国站购物网站，面向消费者的电子商务平台',
            tags: ['亚马逊', '美国站', '消费者平台'],
            url: 'https://www.amazon.com/',
            subcategory: ['amazon']
        },
        {
            title: '美国站后台',
            description: '亚马逊美国站卖家平台，管理产品、订单和销售数据',
            tags: ['亚马逊', '美国站', '卖家后台'],
            url: 'https://sellercentral.amazon.com/',
            subcategory: ['amazon', 'seller-platform']
        },
        {
            title: '英国站前台',
            description: '亚马逊英国站购物网站，面向英国消费者的电子商务平台',
            tags: ['亚马逊', '英国站', '消费者平台'],
            url: 'https://www.amazon.co.uk/',
            subcategory: ['amazon']
        },
        {
            title: '英国站后台',
            description: '亚马逊英国站卖家平台，管理英国站产品、订单和销售数据',
            tags: ['亚马逊', '英国站', '卖家后台'],
            url: 'https://sellercentral.amazon.co.uk/',
            subcategory: ['amazon', 'seller-platform']
        },
        {
            title: '日本站前台',
            description: '亚马逊日本站购物网站，面向日本消费者的电子商务平台',
            tags: ['亚马逊', '日本站', '消费者平台'],
            url: 'https://www.amazon.co.jp/',
            subcategory: ['amazon']
        },
        {
            title: '日本站后台',
            description: '亚马逊日本站卖家平台，管理日本站产品、订单和销售数据',
            tags: ['亚马逊', '日本站', '卖家后台'],
            url: 'https://sellercentral-japan.amazon.com/',
            subcategory: ['amazon', 'seller-platform']
        },
        {
            title: '德国站前台',
            description: '亚马逊德国站购物网站，面向德国消费者的电子商务平台',
            tags: ['亚马逊', '德国站', '消费者平台'],
            url: 'https://www.amazon.de/',
            subcategory: 'amazon'
        },
        {
            title: '德国站后台',
            description: '亚马逊德国站卖家平台，管理德国站产品、订单和销售数据',
            tags: ['亚马逊', '德国站', '卖家后台'],
            url: 'https://sellercentral.amazon.de/',
            subcategory: 'amazon'
        },
        {
            title: '法国站前台',
            description: '亚马逊法国站购物网站，面向法国消费者的电子商务平台',
            tags: ['亚马逊', '法国站', '消费者平台'],
            url: 'https://www.amazon.fr/',
            subcategory: 'amazon'
        },
        {
            title: '法国站后台',
            description: '亚马逊法国站卖家平台，管理法国站产品、订单和销售数据',
            tags: ['亚马逊', '法国站', '卖家后台'],
            url: 'https://sellercentral.amazon.fr/',
            subcategory: 'amazon'
        },
        {
            title: '意大利站前台',
            description: '亚马逊意大利站购物网站，面向意大利消费者的电子商务平台',
            tags: ['亚马逊', '意大利站', '消费者平台'],
            url: 'https://www.amazon.it/',
            subcategory: 'amazon'
        },
        {
            title: '意大利站后台',
            description: '亚马逊意大利站卖家平台，管理意大利站产品、订单和销售数据',
            tags: ['亚马逊', '意大利站', '卖家后台'],
            url: 'https://sellercentral.amazon.it/',
            subcategory: 'amazon'
        },
        {
            title: '加拿大前台',
            description: '亚马逊加拿大站购物网站，面向加拿大消费者的电子商务平台',
            tags: ['亚马逊', '加拿大站', '消费者平台'],
            url: 'https://www.amazon.ca/',
            subcategory: 'amazon'
        },
        {
            title: '加拿大站后台',
            description: '亚马逊加拿大站卖家平台，管理加拿大站产品、订单和销售数据',
            tags: ['亚马逊', '加拿大站', '卖家后台'],
            url: 'https://sellercentral.amazon.ca/',
            subcategory: 'amazon'
        },
        {
            title: '澳洲前台',
            description: '亚马逊澳大利亚站购物网站，面向澳洲消费者的电子商务平台',
            tags: ['亚马逊', '澳洲站', '消费者平台'],
            url: 'https://www.amazon.com.au/',
            subcategory: 'amazon'
        },
        {
            title: '澳洲站后台',
            description: '亚马逊澳大利亚站卖家平台，管理澳洲站产品、订单和销售数据',
            tags: ['亚马逊', '澳洲站', '卖家后台'],
            url: 'https://sellercentral.amazon.com.au/',
            subcategory: 'amazon'
        },
        {
            title: '西班牙前台',
            description: '亚马逊西班牙站购物网站，面向西班牙消费者的电子商务平台',
            tags: ['亚马逊', '西班牙站', '消费者平台'],
            url: 'https://www.amazon.es/',
            subcategory: 'amazon'
        },
        {
            title: '西班牙站后台',
            description: '亚马逊西班牙站卖家平台，管理西班牙站产品、订单和销售数据',
            tags: ['亚马逊', '西班牙站', '卖家后台'],
            url: 'https://sellercentral.amazon.es/',
            subcategory: 'amazon'
        },
        {
            title: '墨西哥前台',
            description: '亚马逊墨西哥站购物网站，面向墨西哥消费者的电子商务平台',
            tags: ['亚马逊', '墨西哥站', '消费者平台'],
            url: 'https://www.amazon.com.mx/',
            subcategory: 'amazon'
        },
        {
            title: '墨西哥站后台',
            description: '亚马逊墨西哥站卖家平台，管理墨西哥站产品、订单和销售数据',
            tags: ['亚马逊', '墨西哥站', '卖家后台'],
            url: 'https://sellercentral.amazon.com.mx/',
            subcategory: 'amazon'
        },
        {
            title: '美亚新品榜',
            description: '亚马逊美国站新品发布排行榜，查看不同品类的新品趋势',
            tags: ['亚马逊', '美国站', '排行榜', '新品'],
            url: 'https://www.amazon.com/gp/new-releases',
            subcategory: 'amazon'
        },
        {
            title: '美亚销售榜',
            description: '亚马逊美国站销售排行榜，查看各品类最畅销的商品',
            tags: ['亚马逊', '美国站', '排行榜', '销量'],
            url: 'https://www.amazon.com/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '美亚飙升榜',
            description: '亚马逊美国站销量飙升榜，展示销量增长最快的商品',
            tags: ['亚马逊', '美国站', '排行榜', '飙升'],
            url: 'https://www.amazon.com/gp/movers-and-shakers',
            subcategory: 'amazon'
        },
        {
            title: '英国排行榜',
            description: '亚马逊英国站销售排行榜，查看英国市场最畅销商品',
            tags: ['亚马逊', '英国站', '排行榜', '销量'],
            url: 'https://www.amazon.co.uk/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '法国排行榜',
            description: '亚马逊法国站销售排行榜，查看法国市场最畅销商品',
            tags: ['亚马逊', '法国站', '排行榜', '销量'],
            url: 'https://www.amazon.fr/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '日本排行榜',
            description: '亚马逊日本站销售排行榜，查看日本市场最畅销商品',
            tags: ['亚马逊', '日本站', '排行榜', '销量'],
            url: 'https://www.amazon.co.jp/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '德国排行榜',
            description: '亚马逊德国站销售排行榜，查看德国市场最畅销商品',
            tags: ['亚马逊', '德国站', '排行榜', '销量'],
            url: 'https://www.amazon.de/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '意大利排行榜',
            description: '亚马逊意大利站销售排行榜，查看意大利市场最畅销商品',
            tags: ['亚马逊', '意大利站', '排行榜', '销量'],
            url: 'https://www.amazon.it/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '澳洲排行榜',
            description: '亚马逊澳大利亚站销售排行榜，查看澳洲市场最畅销商品',
            tags: ['亚马逊', '澳洲站', '排行榜', '销量'],
            url: 'https://www.amazon.com.au/gp/bestsellers',
            subcategory: 'amazon'
        },
        {
            title: '加拿大排行榜',
            description: '亚马逊加拿大站销售排行榜，查看加拿大市场最畅销商品',
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
            title: 'eBay卖家中心',
            description: 'eBay卖家平台，管理产品刊登、订单、库存和业绩分析',
            tags: ['eBay', '卖家平台', '跨境电商'],
            url: 'https://www.ebay.com/sh/ovw',
            subcategory: 'ebay'
        },
        
        {
            title: 'eBay卖家中心',
            description: 'eBay卖家平台，管理产品刊登、订单、库存和业绩分析',
            tags: ['eBay', '卖家平台', '跨境电商'],
            url: 'https://www.ebay.com/sh/ovw',
            subcategory: 'ebay'
        },
        {
            title: 'eBay全球主站',
            description: 'eBay全球主站官网',
            tags: ['eBay', '全球主站', '跨境电商'],
            url: 'https://www.ebay.com/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay澳洲',
            description: 'eBay澳大利亚分站',
            tags: ['eBay', '澳洲分站', '跨境电商'],
            url: 'https://www.ebay.com.au/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay德国',
            description: 'eBay德国分站',
            tags: ['eBay', '德国分站', '跨境电商'],
            url: 'https://www.ebay.de/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay法国',
            description: 'eBay法国分站',
            tags: ['eBay', '法国分站', '跨境电商'],
            url: 'https://www.ebay.fr/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay西班牙',
            description: 'eBay西班牙分站',
            tags: ['eBay', '西班牙分站', '跨境电商'],
            url: 'https://www.ebay.es/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay意大利',
            description: 'eBay意大利分站',
            tags: ['eBay', '意大利分站', '跨境电商'],
            url: 'https://www.ebay.it/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay英国',
            description: 'eBay英国分站',
            tags: ['eBay', '英国分站', '跨境电商'],
            url: 'https://www.ebay.co.uk/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay日本',
            description: 'eBay日本分站',
            tags: ['eBay', '日本分站', '跨境电商'],
            url: 'https://www.ebay.co.jp/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay加拿大',
            description: 'eBay加拿大分站',
            tags: ['eBay', '加拿大分站', '跨境电商'],
            url: 'https://www.ebay.ca/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay墨西哥',
            description: 'eBay墨西哥分站',
            tags: ['eBay', '墨西哥分站', '跨境电商'],
            url: 'https://www.ebay.com.mx/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay新加坡',
            description: 'eBay新加坡分站',
            tags: ['eBay', '新加坡分站', '跨境电商'],
            url: 'https://www.ebay.com.sg/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay荷兰',
            description: 'eBay荷兰分站',
            tags: ['eBay', '荷兰分站', '跨境电商'],
            url: 'https://www.ebay.nl/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay印度',
            description: 'eBay印度分站（已关闭，现跳转至主站）',
            tags: ['eBay', '印度分站', '跨境电商'],
            url: 'https://www.ebay.in/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay爱尔兰',
            description: 'eBay爱尔兰分站',
            tags: ['eBay', '爱尔兰分站', '跨境电商'],
            url: 'https://www.ebay.ie/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay葡萄牙',
            description: 'eBay葡萄牙分站',
            tags: ['eBay', '葡萄牙分站', '跨境电商'],
            url: 'https://www.ebay.pt/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay比利时',
            description: 'eBay比利时分站',
            tags: ['eBay', '比利时分站', '跨境电商'],
            url: 'https://www.ebay.be/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay瑞士',
            description: 'eBay瑞士分站',
            tags: ['eBay', '瑞士分站', '跨境电商'],
            url: 'https://www.ebay.ch/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay波兰',
            description: 'eBay波兰分站',
            tags: ['eBay', '波兰分站', '跨境电商'],
            url: 'https://www.ebay.pl/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay奥地利',
            description: 'eBay奥地利分站',
            tags: ['eBay', '奥地利分站', '跨境电商'],
            url: 'https://www.ebay.at/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay菲律宾',
            description: 'eBay菲律宾分站',
            tags: ['eBay', '菲律宾分站', '跨境电商'],
            url: 'https://www.ebay.ph/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay香港',
            description: 'eBay中国香港分站',
            tags: ['eBay', '中国香港分站', '跨境电商'],
            url: 'https://www.ebay.com.hk/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay台湾',
            description: 'eBay中国台湾分站',
            tags: ['eBay', '中国台湾分站', '跨境电商'],
            url: 'https://www.ebay.com.tw/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay马来西亚',
            description: 'eBay马来西亚分站',
            tags: ['eBay', '马来西亚分站', '跨境电商'],
            url: 'https://www.ebay.com.my/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay越南',
            description: 'eBay越南分站（已关闭，现跳转至主站）',
            tags: ['eBay', '越南分站', '跨境电商'],
            url: 'https://www.ebay.vn/',
            subcategory: 'ebay'
        },
        {
            title: 'eBay大学（英文版）',
            description: 'eBay全球卖家学习中心',
            tags: ['eBay', '卖家学习中心', '跨境电商'],
            url: 'https://www.ebay.com/sellercenter',
            subcategory: 'ebay'
        },
        {
            title: 'eBay大学（中文版）',
            description: 'eBay中国卖家培训中心',
            tags: ['eBay', '卖家学习中心', '跨境电商'],
            url: 'https://university.ebay.cn/',
            subcategory: 'ebay'
        },
        {
            title: 'Lazada卖家中心',
            description: '东南亚领先的电商平台Lazada的卖家服务中心',
            tags: ['Lazada', '东南亚电商', '跨境电商'],
            url: 'https://sellercenter.lazada.com/',
            subcategory: 'lazada'
        },
        {
            title: '越南站',
            description: 'Lazada越南站购物网站，面向越南消费者的电子商务平台',
            tags: ['Lazada', '越南站', '东南亚电商'],
            url: 'https://www.lazada.com.vn',
            subcategory: 'lazada'
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
            title: 'Shopee卖家中心',
            description: '面向东南亚市场的Shopee卖家平台，提供一站式跨境电商解决方案',
            tags: ['Shopee', '东南亚电商', '跨境电商'],
            url: 'https://seller.shopee.com/',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Colombia',
            description: '哥伦比亚站Shopee平台，提供跨境电商服务',
            tags: ['Shopee', '哥伦比亚电商', '拉美电商'],
            url: 'https://shopee.com.co',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Chile',
            description: '智利站Shopee平台，提供跨境电商服务',
            tags: ['Shopee', '智利电商', '拉美电商'],
            url: 'https://shopee.cl',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Poland',
            description: '波兰站Shopee平台，提供跨境电商服务',
            tags: ['Shopee', '波兰电商', '欧洲电商'],
            url: 'https://shopee.pl',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Spain',
            description: '西班牙站Shopee平台，提供跨境电商服务',
            tags: ['Shopee', '西班牙电商', '欧洲电商'],
            url: 'https://shopee.es',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Malaysia',
            description: '马来西亚站Shopee平台，东南亚领先的电商平台',
            tags: ['Shopee', '马来西亚电商', '东南亚电商'],
            url: 'https://shopee.com.my',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Indonesia',
            description: '印尼站Shopee平台，东南亚最大的电商市场之一',
            tags: ['Shopee', '印尼电商', '东南亚电商'],
            url: 'https://shopee.co.id',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Thailand',
            description: '泰国站Shopee平台，东南亚主要电商市场',
            tags: ['Shopee', '泰国电商', '东南亚电商'],
            url: 'https://shopee.co.th',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Philippines',
            description: '菲律宾站Shopee平台，东南亚快速增长电商市场',
            tags: ['Shopee', '菲律宾电商', '东南亚电商'],
            url: 'https://shopee.ph',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Vietnam',
            description: '越南站Shopee平台，东南亚重要电商市场',
            tags: ['Shopee', '越南电商', '东南亚电商'],
            url: 'https://shopee.vn',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Singapore',
            description: '新加坡站Shopee平台，东南亚成熟电商市场',
            tags: ['Shopee', '新加坡电商', '东南亚电商'],
            url: 'https://shopee.sg',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Taiwan',
            description: '台湾站Shopee平台，提供本地化电商服务',
            tags: ['Shopee', '台湾电商', '跨境电商'],
            url: 'https://shopee.tw',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Brazil',
            description: '巴西站Shopee平台，拉美重要电商市场',
            tags: ['Shopee', '巴西电商', '拉美电商'],
            url: 'https://shopee.com.br',
            subcategory: 'shopee'
        },
        {
            title: 'Shopee Mexico',
            description: '墨西哥站Shopee平台，拉美新兴电商市场',
            tags: ['Shopee', '墨西哥电商', '拉美电商'],
            url: 'https://shopee.com.mx',
            subcategory: 'shopee'
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
        // Shopify电商平台
        {
            title: 'Shopify官网',
            description: 'Shopify电商平台官网，提供一站式电商建站与运营解决方案',
            tags: ['Shopify', '电商建站', '独立站'],
            url: 'https://www.shopify.com/',
            subcategory: 'shopify'
        },
        {
            "title": "Shopify免费工具",
            "description": "Shopify提供的免费电商工具，包括Logo生成器、域名生成器等实用功能",
            "tags": ["Shopify工具", "免费资源", "电商工具"],
            "url": "https://www.shopify.com/zh/tools",
            "subcategory": "shopify"
        },
        {
            "title": "Shopify中文社区",
            "description": "Shopify官方中文社区，卖家可交流经验、提问并获得官方支持",
            "tags": ["Shopify社区", "卖家交流", "官方支持"],
            "url": "https://community.shopify.com/c/shopify-community-zh-cn/ct-p/zh-cn",
            "subcategory": "shopify"
        },
        {
            "title": "Shopify主题市场",
            "description": "Shopify官方主题商店，提供付费和免费主题，适配不同行业风格",
            "tags": ["Shopify主题", "网站模板", "UI设计"],
            "url": "https://themes.shopify.com/",
            "subcategory": "shopify"
        },
        {
            "title": "Shopify官方博客（中文）",
            "description": "Shopify官方中文博客，分享电商趋势、运营技巧和成功案例",
            "tags": ["Shopify博客", "电商资讯", "运营指南"],
            "url": "https://www.shopify.com/zh/blog",
            "subcategory": "shopify"
        },
        {
            "title": "Shopify Academy",
            "description": "Shopify官方学习平台，提供电商课程、教程和认证",
            "tags": ["Shopify教程", "电商课程", "在线学习"],
            "url": "https://www.shopifyacademy.com/",
            "subcategory": "shopify"
        },
        {
            "title": "Shopify客服（中文）",
            "description": "Shopify官方中文客服支持，提供邮件、在线聊天等帮助",
            "tags": ["Shopify客服", "技术支持", "帮助中心"],
            "url": "https://help.shopify.com/zh-CN#/contact/email",
            "subcategory": "shopify"
        },
        {
            "title": "Shopify帮助中心（英文）",
            "description": "Shopify官方帮助文档，涵盖建站、支付、物流等全流程指南",
            "tags": ["Shopify文档", "操作指南", "常见问题"],
            "url": "https://help.shopify.com/en#/contact",
            "subcategory": "shopify"
        },
        {
            "title": "Shopify免费试用",
            "description": "Shopify官方免费试用入口，14天体验独立站搭建与功能",
            "tags": ["Shopify建站", "免费试用", "独立站"],
            "url": "https://www.shopify.com/zh/free-trial",
            "subcategory": "shopify"
        },
        
        // TikTok电商平台
        {
            title: 'TikTok US(美国站)',
            description: 'TikTok美国站官方网站',
            tags: ['TikTok', '美国站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop US(美国站)',
            description: 'TikTok美国站电商平台',
            tags: ['TikTok', '美国站', '短视频电商'],
            url: 'https://shop.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok UK(英国站)',
            description: 'TikTok英国站官方网站',
            tags: ['TikTok', '英国站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop UK(英国站)',
            description: 'TikTok英国站电商平台',
            tags: ['TikTok', '英国站', '短视频电商'],
            url: 'https://shop.tiktok.com/uk',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Singapore(新加坡站)',
            description: 'TikTok新加坡站官方网站',
            tags: ['TikTok', '新加坡站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop Singapore(新加坡站)',
            description: 'TikTok新加坡站电商平台',
            tags: ['TikTok', '新加坡站', '短视频电商'],
            url: 'https://shop.tiktok.com/sg',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Malaysia(马来西亚站)',
            description: 'TikTok马来西亚站官方网站',
            tags: ['TikTok', '马来西亚站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Thailand(泰国站)',
            description: 'TikTok泰国站官方网站',
            tags: ['TikTok', '泰国站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop Thailand(泰国站)',
            description: 'TikTok泰国站电商平台',
            tags: ['TikTok', '泰国站', '短视频电商'],
            url: 'https://shop.tiktok.com/th',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Vietnam(越南站)',
            description: 'TikTok越南站官方网站',
            tags: ['TikTok', '越南站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop Vietnam(越南站)',
            description: 'TikTok越南站电商平台',
            tags: ['TikTok', '越南站', '短视频电商'],
            url: 'https://shop.tiktok.com/vn',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Philippines(菲律宾站)',
            description: 'TikTok菲律宾站官方网站',
            tags: ['TikTok', '菲律宾站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop Philippines(菲律宾站)',
            description: 'TikTok菲律宾站电商平台',
            tags: ['TikTok', '菲律宾站', '短视频电商'],
            url: 'https://shop.tiktok.com/ph',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Indonesia(印尼站)',
            description: 'TikTok印尼站官方网站',
            tags: ['TikTok', '印尼站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop Indonesia(印尼站)',
            description: 'TikTok印尼站电商平台',
            tags: ['TikTok', '印尼站', '短视频电商'],
            url: 'https://shop.tiktok.com/id',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Germany(德国站)',
            description: 'TikTok德国站官方网站',
            tags: ['TikTok', '德国站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop Germany(德国站)',
            description: 'TikTok德国站电商平台',
            tags: ['TikTok', '德国站', '短视频电商'],
            url: 'https://shop.tiktok.com/de',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok France(法国站)',
            description: 'TikTok法国站官方网站',
            tags: ['TikTok', '法国站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop France(法国站)',
            description: 'TikTok法国站电商平台',
            tags: ['TikTok', '法国站', '短视频电商'],
            url: 'https://shop.tiktok.com/fr',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Italy(意大利站)',
            description: 'TikTok意大利站官方网站',
            tags: ['TikTok', '意大利站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop Italy(意大利站)',
            description: 'TikTok意大利站电商平台',
            tags: ['TikTok', '意大利站', '短视频电商'],
            url: 'https://shop.tiktok.com/it',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Spain(西班牙站)',
            description: 'TikTok西班牙站官方网站',
            tags: ['TikTok', '西班牙站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop Spain(西班牙站)',
            description: 'TikTok西班牙站电商平台',
            tags: ['TikTok', '西班牙站', '短视频电商'],
            url: 'https://shop.tiktok.com/es',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Brazil(巴西站)',
            description: 'TikTok巴西站官方网站',
            tags: ['TikTok', '巴西站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop Brazil(巴西站)',
            description: 'TikTok巴西站电商平台',
            tags: ['TikTok', '巴西站', '短视频电商'],
            url: 'https://shop.tiktok.com/br',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Japan(日本站)',
            description: 'TikTok日本站官方网站(无电商功能)',
            tags: ['TikTok', '日本站', '短视频'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Korea(韩国站)',
            description: 'TikTok韩国站官方网站(无电商功能)',
            tags: ['TikTok', '韩国站', '短视频'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Australia(澳大利亚站)',
            description: 'TikTok澳大利亚站官方网站',
            tags: ['TikTok', '澳大利亚站', '短视频电商'],
            url: 'https://www.tiktok.com/',
            subcategory: 'tiktok'
        },
        {
            title: 'TikTok Shop Australia(澳大利亚站)',
            description: 'TikTok澳大利亚站电商平台',
            tags: ['TikTok', '澳大利亚站', '短视频电商'],
            url: 'https://shop.tiktok.com/au',
            subcategory: 'tiktok'
        },
    ],
    
    // 社交平台
    social: [
        {
            title: 'Facebook',
            description: '全球最大的社交网络平台之一，提供个人资料、动态、照片分享等功能',
            tags: ['社交媒体', '社交网络', '全球平台'],
            url: 'https://www.facebook.com/',
            subcategory: 'social-global',
            isRecommended: true
        },
        {
            title: 'Instagram',
            description: '专注于照片和短视频分享的社交媒体平台，支持Stories和Reels功能',
            tags: ['社交媒体', '照片分享', '短视频'],
            url: 'https://www.instagram.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Twitter/X',
            description: '实时信息网络，用户可以发布短消息（推文）并与他人互动',
            tags: ['社交媒体', '短消息', '实时信息'],
            url: 'https://twitter.com/',
            subcategory: 'social-global'
        },
        {
            title: 'LinkedIn',
            description: '专业社交网络平台，连接全球专业人士，提供招聘与职业发展机会',
            tags: ['职业社交', '专业网络', '招聘'],
            url: 'https://www.linkedin.com/',
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
            title: 'Vkontakte',
            description: '俄罗斯及东欧地区流行的社交网络平台，用户可以进行社交互动、分享内容等。',
            tags: ['社交网络', '俄罗斯社交', '东欧社交'],
            url: 'https://vk.com/',
            subcategory: 'social-global'
        },
        
        {
            title: 'Linkedin',
            description: '全球最大的职业社交网站，用户可以建立职业人脉，分享工作经验、行业动态，寻找工作机会等。',
            tags: ['职业社交', '求职招聘', '职场人脉'],
            url: 'https://www.linkedin.com/',
            subcategory: 'social-global'
        },
     
        {
            title: 'Azar',
            description: '一款主打随机视频聊天的社交应用，用户可以与来自世界各地的人进行实时视频交流。',
            tags: ['视频社交', '随机聊天', '国际社交'],
            url: 'https://www.azar.com/',
            subcategory: 'social-global'
        },
        {
            title: 'LivU',
            description: '提供实时视频聊天的社交平台，用户可以与不同国家和地区的人进行互动，具有多种社交功能。',
            tags: ['视频社交', '实时互动', '国际交友'],
            url: 'https://livu.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Telegram',
            description: '一款跨平台的即时通讯软件，注重隐私保护，用户可以创建群组、频道进行交流和信息分享。',
            tags: ['即时通讯', '隐私保护', '群组交流'],
            url: 'https://telegram.org/',
            subcategory: 'social-global'
        },
        {
            title: 'WhatsApp',
            description: '全球广泛使用的即时通讯应用，支持多种语言，用户可以发送消息、语音通话、视频通话等。',
            tags: ['即时通讯', '国际通讯', '多媒体消息'],
            url: 'https://www.whatsapp.com/',
            subcategory: 'social-global'
        },
      
        {
            title: 'Myspace',
            description: '曾经流行的社交网络平台，用户可以创建个人主页，分享音乐、照片、博客等内容，具有社交和娱乐功能。',
            tags: ['社交网络', '音乐分享', '个人主页'],
            url: 'https://www.myspace.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Discord',
            description: '主要面向游戏玩家的即时通讯和社交平台，用户可以创建服务器，进行语音、文字聊天，分享游戏经验等。',
            tags: ['游戏社交', '即时通讯', '语音聊天'],
            url: 'https://discord.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Flickr',
            description: '知名的图片分享和存储平台，用户可以上传、存储、分享照片和视频，同时也有社交互动功能。',
            tags: ['图片分享', '照片存储', '社交摄影'],
            url: 'https://www.flickr.com/',
            subcategory: 'social-global'
        },
        {
            title: 'Quora',
            description: '一个知识问答社区，用户可以提出问题、回答问题，分享知识和经验，涵盖各种领域和话题。',
            tags: ['知识问答', '社区交流', '知识分享'],
            url: 'https://www.quora.com/',
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
        },
        {
            title: 'Upfluence',
            description: '全球性的网红营销平台，提供影响者搜索、管理和活动分析，帮助品牌与创作者建立合作关系',
            tags: ['网红营销', '红人', '创作者管理'],
            url: 'https://www.upfluence.com/',
            subcategory: 'social-influencer',
            isRecommended: true
        },
        {
            "title": "impact.com",
            "description": "全球合作伙伴营销管理平台，支持联盟营销、红人合作及自动化结算",
            "tags": ["联盟营销", "红人管理", "企业级"],
            "url": "https://impact.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "NoxInfluencer",
            "description": "海外网红营销一站式平台，提供YouTube/TikTok红人数据分析及合作",
            "tags": ["红人分析", "免费工具", "TikTok"],
            "url": "https://www.noxinfluencer.com/",
            "subcategory": "social-influencer",
            "needsMagic": false
        },
        {
            "title": "Upfluence",
            "description": "全功能红人营销平台，覆盖红人搜索、合作管理及效果追踪",
            "tags": ["红人CRM", "电商集成", "UGC收集"],
            "url": "https://www.upfluence.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "AspireIQ",
            "description": "专注电商品牌的红人营销SaaS，支持自动化合作与内容授权",
            "tags": ["DTC品牌", "内容库", "Shopify集成"],
            "url": "https://www.aspire.io/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "Grin",
            "description": "为电商企业设计的红人营销工具，强调关系管理与支付自动化",
            "tags": ["红人支付", "品牌社区", "ROI分析"],
            "url": "https://grin.co/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "Traackr",
            "description": "企业级红人关系管理平台，提供影响力评分与竞品对标",
            "tags": ["跨国管理", "行业基准", "API集成"],
            "url": "https://www.traackr.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "Klear",
            "description": "基于AI的红人发现平台，支持多维度筛选与虚假粉丝检测",
            "tags": ["AI匹配", "粉丝质量", "跨平台"],
            "url": "https://klear.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "CreatorIQ",
            "description": "面向大型品牌的红人营销操作系统，含合规审查功能",
            "tags": ["合规管理", "全球团队", "数据治理"],
            "url": "https://creatoriq.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "Tagger Media",
            "description": "结合社媒监听的红人平台，实时追踪活动效果",
            "tags": ["趋势预测", "实时数据", "Campaign管理"],
            "url": "https://www.taggermedia.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "InfluencerDB",
            "description": "德国红人数据分析平台，专注欧洲市场",
            "tags": ["欧洲市场", "Instagram", "合作报价"],
            "url": "https://influencerdb.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "HypeAuditor",
            "description": "红人真实性检测工具，分析粉丝质量与欺诈行为",
            "tags": ["打假检测", "受众画像", "Instagram"],
            "url": "https://hypeauditor.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "IZEA",
            "description": "老牌红人营销平台，支持内容交易市场",
            "tags": ["内容交易", "长尾红人", "UGC采购"],
            "url": "https://izea.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "Fohr",
            "description": "时尚美妆领域专属平台，提供风格匹配算法",
            "tags": ["时尚行业", "审美匹配", "内容审核"],
            "url": "https://fohr.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "Linqia",
            "description": "绩效驱动型红人营销平台，按效果付费",
            "tags": ["CPA模式", "转化追踪", "美妆个护"],
            "url": "https://www.linqia.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "NeoReach",
            "description": "红人Campaign全流程管理工具，含预算优化建议",
            "tags": ["预算规划", "跨平台", "案例库"],
            "url": "https://neoreach.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "Mavrck",
            "description": "侧重用户生成内容(UGC)收集与权利管理",
            "tags": ["UGC收集", "版权管理", "品牌倡导"],
            "url": "https://mavrck.co/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },
        {
            "title": "impact.com",
            "description": "合作伙伴营销管理平台，涵盖联盟营销、红人营销等",
            "tags": ["联盟营销", "红人营销", "付费工具"],
            "url": "https://impact.com/",
            "subcategory": "social-influencer",
            "needsMagic": true
        },

        // 社交媒体管理工具
        {
            title: 'Sendible',
            description: '一体化社交媒体管理平台，支持多账号调度和团队协作',
            tags: ['多平台管理', '内容排期', '团队协作'],
            url: 'https://www.sendible.com/',
            subcategory: 'social-marketing'
        },
        {
            title: 'Agorapulse',
            description: '社交媒体收件箱管理工具，提供自动化工作流和CRM功能',
            tags: ['社交收件箱', '自动化', '客户关系管理'],
            url: 'https://www.agorapulse.com/',
            subcategory: 'social-marketing'
        },
        {
            title: 'Hootsuite',
            description: '企业级社交媒体管理套件，支持深度数据分析和广告管理',
            tags: ['企业级', '社交监控', '广告管理'],
            url: 'https://hootsuite.com/',
            subcategory: 'social-marketing'
        },
        {
            title: 'Buffer',
            description: '轻量级社交媒体发布工具，适合初创团队和个人创作者',
            tags: ['内容排期', '基础分析', '性价比'],
            url: 'https://buffer.com/',
            subcategory: 'social-marketing'
        },

        // 社交媒体分析工具
        {
            title: 'SocialPeta',
            description: '全球广告创意分析平台，提供竞品广告策略洞察',
            tags: ['广告情报', '竞品分析', '素材库'],
            url: 'https://www.socialpeta.com/',
            subcategory: 'social-marketing'
        },
        {
            title: 'Quintly',
            description: '跨平台社交媒体数据分析工具，支持自定义报告',
            tags: ['绩效分析', '数据可视化', '跨平台'],
            url: 'https://www.quintly.com/',
            subcategory: 'social-marketing'
        },
        {
            title: 'Followerwonk',
            description: 'Twitter专属分析工具，优化粉丝增长和互动策略',
            tags: ['Twitter分析', '粉丝画像', '内容优化'],
            url: 'https://followerwonk.com/',
            subcategory: 'social-marketing'
        },

        // 社交媒体营销工具
        {
            title: 'Woobox',
            description: '社交媒体营销活动创建平台（抽奖/投票/优惠券等）',
            tags: ['互动营销', '活动模板', '用户参与'],
            url: 'https://woobox.com/',
            subcategory: 'social-marketing'
        },
        {
            title: 'Famebit',
            description: 'YouTube/Instagram创作者与品牌合作的撮合平台',
            tags: ['网红营销', '创作者合作', '内容赞助'],
            url: 'https://famebit.com/',
            subcategory: 'social-marketing'
        },
        {
            title: 'business.linkedin',
            description: 'LinkedIn官方营销解决方案，专注B2B领域',
            tags: ['B2B营销', '企业品牌', '人才招聘'],
            url: 'https://business.linkedin.com/',
            subcategory: 'social-marketing'
        },

        // 特色工具
        {
            title: 'Vidrocket',
            description: '视频内容社交媒体优化和发布管理工具',
            tags: ['视频营销', 'SEO优化', '多平台发布'],
            url: 'https://vidrocket.com/',
            subcategory: 'social-marketing'
        },
        {
            title: 'cyfe',
            description: '一体化营销数据仪表板，集成50+数据源',
            tags: ['数据看板', '跨平台', '实时监控'],
            url: 'https://www.cyfe.com/',
            subcategory: 'social-marketing'
        },
        // 社交媒体分析工具
        {
            title: 'Hypeauditor',
            description: 'Instagram/TikTok网红真实性检测和受众分析工具',
            tags: ['网红分析', '粉丝质量检测', '受众画像'],
            url: 'https://hypeauditor.com/',
            subcategory: 'social-analytics'
        },
        {
            title: 'Followerwonk',
            description: 'Twitter深度分析工具，提供粉丝构成分析和最佳发帖时间建议',
            tags: ['Twitter分析', '粉丝 demographics', '内容优化'],
            url: 'https://followerwonk.com/',
            subcategory: 'social-analytics'
        },
        {
            title: 'Google Analytics',
            description: '综合性网站和社交媒体流量分析平台',
            tags: ['流量分析', '用户行为', '转化追踪'],
            url: 'https://analytics.google.com/',
            subcategory: 'social-analytics'
        },
        {
            title: 'Discover.ly',
            description: '社交媒体联系人信息扩展和关系分析工具',
            tags: ['联系人分析', '社交关系图谱', 'CRM增强'],
            url: 'https://discover.ly/',
            subcategory: 'social-analytics'
        },
        {
            title: 'Sproutsocial',
            description: '社交媒体管理和分析一体化平台，提供详细报告',
            tags: ['社交聆听', '绩效报告', '竞争对手分析'],
            url: 'https://sproutsocial.com/',
            subcategory: 'social-analytics'
        },
        {
            title: 'Keyhole',
            description: '实时话题追踪和社交媒体影响力分析工具',
            tags: ['话题追踪', '影响力评分', '实时监控'],
            url: 'https://keyhole.co/',
            subcategory: 'social-analytics'
        },
        {
            title: 'Tailwindapp',
            description: 'Pinterest和Instagram专用分析和排期工具',
            tags: ['Pinterest分析', '视觉内容优化', '排期建议'],
            url: 'https://www.tailwindapp.com/',
            subcategory: 'social-analytics'
        },
        {
            title: 'iconosquare',
            description: 'Instagram和Facebook专业分析平台',
            tags: ['Instagram分析', '内容绩效', '增长追踪'],
            url: 'https://www.iconosquare.com/',
            subcategory: 'social-analytics'
        },
        {
            title: 'Findmyfbid',
            description: 'Facebook专页和用户ID查询工具',
            tags: ['Facebook工具', 'ID查询', '页面分析'],
            url: 'https://findmyfbid.com/',
            subcategory: 'social-analytics'
        },
        {
            title: 'Likealyzer',
            description: 'Facebook专页即时分析和优化建议工具',
            tags: ['Facebook分析', '页面评分', '优化建议'],
            url: 'https://likealyzer.com/',
            subcategory: 'social-analytics'
        },
        {
            title: 'Minter',
            description: '社交媒体内容表现预测和优化平台',
            tags: ['表现预测', '内容推荐', 'AI分析'],
            url: 'https://minter.io/',
            subcategory: 'social-analytics'
        }
        
    ],
    
    // SEO 工具
    website: [
        {
            title: 'Google Search Console',
            description: 'Google官方网站管理工具，提供网站索引状态、搜索流量、关键词排名等数据',
            tags: ['谷歌', '网站管理', 'SEO优化'],
            url: 'https://search.google.com/search-console',
            subcategory: 'google',
            isRecommended: true
        },
        {
            title: 'Google Analytics',
            description: '谷歌官方网站分析工具，提供全面的网站流量和用户行为数据，支持自定义报告和目标跟踪',
            tags: ['网站分析', '流量统计', '用户行为'],
            url: 'https://analytics.google.com/',
            subcategory: 'google',
            needsMagic: true
        },
        {
            title: 'Google My Business',
            description: '管理Google地图和搜索中的商家信息，提升本地SEO效果',
            tags: ['本地SEO', '商家信息', '地图优化'],
            url: 'https://business.google.com/',
            subcategory: 'google'
        },
        {
            title: 'Google PageSpeed Insights',
            description: '分析网页加载速度和性能，提供优化建议，有助于提升用户体验和搜索排名',
            tags: ['网页性能', '速度优化', '用户体验'],
            url: 'https://pagespeed.web.dev/',
            subcategory: 'google'
        },
        {
            title: 'Google Trends',
            description: '查看特定关键词在不同地区和时间段的搜索趋势变化',
            tags: ['关键词趋势', '市场分析', '搜索热度'],
            url: 'https://trends.google.com/',
            subcategory: 'google'
        },
        {
            title: 'Google Ads',
            description: '谷歌广告平台，用于创建和管理搜索、展示和视频广告系列',
            tags: ['在线广告', '竞价排名', 'PPC'],
            url: 'https://ads.google.com/',
            subcategory: 'google'
        },
        {
            title: 'Google Merchant Center',
            description: '商家中心平台，用于上传和管理产品信息，使其显示在Google购物和其他Google服务中',
            tags: ['电商', '产品目录', '谷歌购物'],
            url: 'https://merchants.google.com/',
            subcategory: 'google'
        },
        {
            title: 'Google Skillshop',
            description: '谷歌学院，提供Google产品和服务的免费在线培训和认证',
            tags: ['培训', '认证', '学习资源'],
            url: 'https://skillshop.exceedlms.com/',
            subcategory: 'google'
        },
        {
            title: 'Google Digital Garage',
            description: '提供数字营销和职业发展方面的免费课程和工具',
            tags: ['数字营销', '技能培训', '职业发展'],
            url: 'https://learndigital.withgoogle.com/digitalgarage/',
            subcategory: 'google'
        },
        {
            title: 'Google AdSense',
            description: '网站广告变现平台，允许网站发布者在自己的网站上投放Google广告并获得收入',
            tags: ['网站变现', '广告发布', '联盟计划'],
            url: 'https://www.google.com/adsense/',
            subcategory: 'google'
        },
        {
            title: 'Google 商品数据规范',
            description: '为商家提供的产品数据格式指南，帮助正确提交产品到Google购物',
            tags: ['电商', '产品数据', '数据规范'],
            url: 'https://support.google.com/merchants',
            subcategory: 'google'
        },
        {
            title: 'Chrome 网上应用店',
            description: 'Google Chrome浏览器的插件和扩展程序商店',
            tags: ['浏览器插件', 'Chrome扩展', '工具'],
            url: 'https://chrome.google.com/webstore/category/extensions',
            subcategory: 'google'
        },
        {
            title: 'Google 搜索',
            description: '全球最大的搜索引擎，提供网页、图片、视频和其他信息的搜索服务',
            tags: ['搜索引擎', '信息检索', '网络浏览'],
            url: 'https://www.google.com/',
            subcategory: 'google'
        },
        {
            title: 'Google Tag Manager',
            description: '标签管理系统，无需修改代码即可部署和更新营销标签',
            tags: ['网站标签', '代码管理', '跟踪代码'],
            url: 'https://tagmanager.google.com/',
            subcategory: 'google'
        },
        {
            title: 'Google 帮助中心',
            description: '提供Google各产品和服务的全面帮助文档和支持资源',
            tags: ['帮助文档', '技术支持', '问题解决'],
            url: 'https://support.google.com/',
            subcategory: 'google'
        },
        {
            title: 'Google Merchant Center 帮助',
            description: '专门针对商家中心的详细帮助文档和指南',
            tags: ['电商', 'GMC帮助', '商家支持'],
            url: 'https://support.google.com/merchants',
            subcategory: 'google'
        },
        {
            title: 'Google MCC 经理账号',
            description: '管理多个Google Ads账号的工具，适合代理商和大型广告主',
            tags: ['账号管理', '多账号', '广告代理'],
            url: 'https://ads.google.com/home/tools/manager-accounts/',
            subcategory: 'google'
        },
        {
            title: 'Google 移动适配性测试',
            description: '检测网站是否对移动设备友好，并提供优化建议',
            tags: ['移动优化', '响应式设计', '用户体验'],
            url: 'https://search.google.com/test/mobile-friendly',
            subcategory: 'google'
        },
        {
            title: 'Google Drive',
            description: '云存储服务，可存储、同步和共享文件',
            tags: ['云存储', '文件共享', '在线备份'],
            url: 'https://drive.google.com/',
            subcategory: 'google'
        },
        {
            title: 'Google Docs',
            description: '在线文档编辑工具，支持实时协作和自动保存',
            tags: ['在线文档', '协作工具', '办公软件'],
            url: 'https://docs.google.com/',
            subcategory: 'google'
        },
        {
            title: 'Google Search Central Blog',
            description: '谷歌搜索中心博客，提供搜索引擎优化和网站管理的官方最新资讯',
            tags: ['SEO资讯', '官方博客', '搜索动态'],
            url: 'https://developers.google.com/search/blog',
            subcategory: 'google'
        },
        {
            title: 'Google Sheets',
            description: '在线电子表格工具，支持多人协作编辑和自动保存',
            tags: ['电子表格', '数据分析', '协作工具'],
            url: 'https://sheets.google.com/',
            subcategory: 'google'
        },
        {
            title: 'Google Market Finder',
            description: '全球商机通工具，帮助企业发现和评估国际市场机会',
            tags: ['国际营销', '市场分析', '全球扩张'],
            url: 'https://marketfinder.thinkwithgoogle.com/',
            subcategory: 'google'
        },
        {
            title: 'Google Ads 帮助中心',
            description: '提供Google广告平台的详细使用指南、最佳实践和问题解决方案',
            tags: ['广告帮助', '营销指南', '技术支持'],
            url: 'https://support.google.com/google-ads/',
            subcategory: 'google'
        },
        
        {
            title: 'Ahrefs',
            description: '强大的外链数据库、关键词排名追踪和内容分析工具，专注于链接和关键词分析',
            tags: ['外链分析', '关键词排名', 'SEO工具'],
            url: 'https://ahrefs.com/',
            subcategory: ['analytics', 'seo'],
            needsMagic: true
        },
        {
            title: 'Moz Pro',
            description: '专业SEO软件工具，帮助提升排名、增加流量并提高可见性',
            tags: ['SEO', '网站优化', '链接分析'],
            url: 'https://moz.com/products/pro',
            subcategory: ['analytics', 'seo'],
        },
        {
            title: 'helium10',
            description: '亚马逊店铺分析工具',
            tags: ['亚马逊', '店铺分析', '数据分析'],
            url: 'https://www.helium10.com/',
            subcategory: ['analytics', 'amazon','seo'],
            needsMagic: true
        },
        {
            title: '美国专利商标局官网',
            description: '美国专利商标局官网',
            tags: ['美国专利', '商标查询', '专利查询'],
            url: 'https://tmsearch.uspto.gov/search/search-information.com/',
            subcategory: 'learning'
        },
        {
            title: 'DeepL',
            description: '专业的翻译工具，支持多种语言的翻译',
            tags: ['翻译', '语言工具', '翻译工具'],
            url: 'https://www.deepl.com/',
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
            title: 'Portent',
            description: 'P生成内容建议或者营销点子',
            tags: ['Portent', '内容创作', '营销点子'],
            url: 'https://portent.com/tools/title-maker',
            subcategory: 'content',
        },
        {
            title: 'Meltwater',
            description: '网络热门内容',
            tags: ['Meltwater', '内容创作', '网络热帖'],
            url: 'https://www.meltwater.com/',
            subcategory: 'content',
            isRecommended: true,
            needsMagic: true
        },
        {
            title: 'Answer the Public',
            description: '提供长尾词建议写文章',
            tags: ['Answer the Public', '内容创作', '营销点子'],
            url: 'https://answerthepublic.com/',
            subcategory: 'content',
            isRecommended: true,
            needsMagic: true
        },
        {
            title: 'ChatGPT',
            description: 'OpenAI开发的大型语言模型，能够进行自然对话和信息检索',
            tags: ['对话AI', '自然语言处理', '信息检索'],
            url: 'https://chat.openai.com/',
            subcategory: 'content',
        },
        {
            title: 'Quora',
            description: '国外版知乎',
            tags: ['Quora', '内容创作', '网络热帖'],
            url: 'https://www.quora.com/',
            subcategory: 'content',
        },  
        {
            title: 'Readable',
            description: '文章的可读性判断',
            tags: ['Readable', '内容创作', '写作'],
            url: 'https://readable.com/',
            subcategory: 'content',
        },
        {
            title: 'HubSpot',
            description: '提供博客话题生成器',
            tags: ['HubSpot', '内容创作', '写作'],
            url: 'https://www.hubspot.com/blog-topic-generator',
            subcategory: 'content',

        },
        {
            title: 'ChatGPT',
            description: 'OpenAI开发的大型语言模型，能够进行自然对话和信息检索',
            tags: ['对话AI', '自然语言处理', '信息检索'],
            url: 'https://chat.openai.com/',
            subcategory: 'content',
        },
        {
            title: 'Alltop',
            description: '汇聚全球热门话题',
            tags: ['Alltop', '内容创作', '写作'],
            url: 'https://alltop.com/',
            subcategory: 'content',
        },
        {
            title: 'Mashshare',
            description: '社交分享工具按钮',
            tags: ['Mashshare', '内容创作', '写作'],
            url: 'https://mashshare.net/',
            subcategory: 'content',
        },
        {
            title: 'Matomo Analytics',
            description: '开源的网站分析平台，注重隐私保护，是Google Analytics的替代品',
            tags: ['网站分析', '隐私保护', '开源'],
            url: 'https://matomo.org/',
            subcategory: 'analytics'
        },
        {
            title: 'SimilarWeb',
            description: '分析竞品整体流量（访问量、国家分布、流量来源）、用户行为（跳出率、停留时间）和关键词',
            tags: ['竞品分析', '流量分析', '用户行为'],
            url: 'https://www.similarweb.com/',
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
            title: 'Moat',
            description: '追踪竞品展示广告（Banner、视频广告），适合分析视觉营销策略',
            tags: ['广告分析', '视觉营销', '展示广告'],
            url: 'https://www.moat.com/',
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
            title: 'Commerce Inspector',
            description: '专攻Shopify独立站，分析竞品热销产品、价格变化、折扣策略，查看其使用的App',
            tags: ['Shopify分析', '产品分析', '价格策略'],
            url: 'https://www.commerceinspector.com/',
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
            subcategory: ['analytics', 'product-selection'],
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
            title: 'Social Blade',
            description: '追踪竞品YouTube/Twitter粉丝增长、视频表现，分析社交媒体趋势',
            tags: ['社交分析', 'YouTube分析', '粉丝增长'],
            url: 'https://socialblade.com/',
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
            title: 'Google Domains',
            description: '谷歌旗下的域名注册服务，简洁稳定，已逐步迁移至Squarespace',
            tags: ['域名注册', '谷歌服务', '稳定可靠'],
            url: 'https://domains.google/',
            subcategory: 'domain',
            needsMagic: true
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
            title: 'Bluehost',
            description: '主机商附带域名服务，适合一站式建站用户的综合服务商',
            tags: ['域名主机', '一站式', '建站服务'],
            url: 'https://www.bluehost.com/',
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
            title: 'NameSilo',
            description: '国外域名商但支持支付宝，免费隐私保护，续费价格稳定',
            tags: ['支付宝', '隐私保护', '稳定续费'],
            url: 'https://www.namesilo.com/',
            subcategory: 'domain',
            needsMagic: true
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
            title: 'Dynadot',
            description: '支持批量域名管理，适合域名投资者的专业域名服务',
            tags: ['批量管理', '域名投资', '专业服务'],
            url: 'https://www.dynadot.com/',
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
            title: 'Flippa',
            description: '域名+网站买卖平台，适合投资客的综合交易市场',
            tags: ['网站买卖', '域名交易', '投资平台'],
            url: 'https://flippa.com/',
            subcategory: 'domain',
            needsMagic: true
        },
        {
            title: 'DropCatch',
            description: '专注过期域名抢注服务，成功率较高的域名抢注平台',
            tags: ['过期域名', '域名抢注', '高成功率'],
            url: 'https://www.dropcatch.com/',
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
            title: 'Cloudflare',
            description: '网络安全与性能服务，提供CDN、DNS管理和DDoS防护',
            tags: ['CDN', '网络安全', 'DNS'],
            url: 'https://www.cloudflare.com/',
            subcategory: 'server'
        },
        {
            title: 'PayPal',
            description: '全球领先的在线支付系统，支持跨境电商收款',
            tags: ['支付系统', '跨境收款', '电商支付'],
            url: 'https://www.paypal.com/',
            subcategory: 'payment',
            needsMagic: true
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
            title: '2Checkout(Verifone)',
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
            title: '万里汇(WorldFirst)',
            description: '阿里旗下，支持亚马逊、eBay等平台收款，提现人民币费率低（0.3%封顶），提供多币种账户',
            tags: ['跨境收款', '低费率', '平台收款'],
            url: 'https://www.worldfirst.com/',
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
            title: 'Airwallex(空中云汇)',
            description: '多币种账户，支持全球收款、批量付款，费率透明（0.3%-1%），适合高频交易或B2B业务',
            tags: ['多币种账户', '批量付款', 'B2B收款'],
            url: 'https://www.airwallex.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: '连连支付(LianLian Pay)',
            description: '合作平台覆盖广（Wish、Shopee等），支持人民币直接提现，费率约0.7%',
            tags: ['跨境支付', '直接提现', '平台收款'],
            url: 'https://www.lianlianpay.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Payoneer(派安盈)',
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
            title: 'Alipay Global(支付宝国际版)',
            description: '适合面向华人或东南亚市场的独立站，提供本地化支付体验',
            tags: ['支付宝', '华人市场', '本地化支付'],
            url: 'https://global.alipay.com/',
            subcategory: 'payment',
            needsMagic: true
        },
        {
            title: 'Wise(原TransferWise)',
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
            title: 'Shopify ERP',
            description: 'Shopify集成的ERP系统，帮助管理库存、订单和财务',
            tags: ['ERP', '库存管理', '订单处理'],
            url: 'https://www.shopify.com/enterprise/erp',
            subcategory: 'erp',
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
            title: 'SAP Business One',
            description: '功能全面（财务、供应链、生产等），适合大型跨境企业，支持多语言、多币种',
            tags: ['企业级ERP', '全球化', '跨境企业'],
            url: 'https://www.sap.com/products/business-one.html',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'Oracle NetSuite',
            description: '云端ERP，覆盖财务、库存、订单管理，适合全球化业务，集成性强',
            tags: ['云ERP', '全球化', '财务管理'],
            url: 'https://www.netsuite.com/',
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
            title: '赛盒ERP',
            description: '智能化运营工具，支持亚马逊、独立站等，侧重数据分析和自动化',
            tags: ['智能运营', '亚马逊', '数据分析'],
            url: 'https://www.saihesoft.com/',
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
            title: '船长BI(CaptainBI)',
            description: '侧重亚马逊数据分析和运营优化，提供深度市场洞察',
            tags: ['亚马逊', '数据分析', '市场洞察'],
            url: 'https://www.captainbi.com/',
            subcategory: 'erp'
        },
        {
            title: 'ERPNext',
            description: '开源ERP，适合技术团队二次开发，支持跨境电商模块',
            tags: ['开源', '二次开发', '跨境电商'],
            url: 'https://erpnext.com/',
            subcategory: 'erp',
            needsMagic: true
        },
        {
            title: 'QuickBooks Commerce(原TradeGecko)',
            description: 'Shopify生态ERP，专注于库存与订单管理，适合独立站',
            tags: ['Shopify生态', '库存管理', '独立站'],
            url: 'https://quickbooks.intuit.com/global/commerce/',
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
            title: 'Dolphin ERP',
            description: '适合初创团队，支持多平台订单抓取，成本较低',
            tags: ['初创团队', '低成本', '订单抓取'],
            url: 'https://www.dolphin-erp.com/',
            subcategory: 'erp'
        },
        // 选品工具
        // 市场趋势分析类
      
    
        {
            title: 'Helium 10',
            description: '亚马逊全功能选品工具套件，含关键词研究、竞品追踪和利润计算',
            tags: ['亚马逊工具', '关键词分析', '产品追踪'],
            url: 'https://www.helium10.com/',
            subcategory: 'product-selection'
        },
        {
            title: 'Keepa',
            description: '亚马逊价格历史追踪工具，分析产品价格趋势和促销频率',
            tags: ['价格监控', '历史数据', '折扣分析'],
            url: 'https://keepa.com/',
            subcategory: 'product-selection'
        },

        // 多平台选品工具
        {
            title: 'EcomHunt',
            description: '每日推荐热销产品，提供AliExpress速卖通和Shopify选品数据',
            tags: ['热销产品', '速卖通选品', 'Dropshipping'],
            url: 'https://www.ecomhunt.com/',
            subcategory: 'product-selection'
        },
        {
            title: 'SaleSource',
            description: '多平台产品分析工具，支持亚马逊、eBay和独立站选品',
            tags: ['多平台', '产品验证', '供应商分析'],
            url: 'https://www.salesource.io/',
            subcategory: 'product-selection'
        },

        // 社交媒体选品工具
        {
            title: 'Pexgle',
            description: '通过Facebook广告数据挖掘热销产品',
            tags: ['FB广告', '热品挖掘', '社交趋势'],
            url: 'https://pexgle.com/',
            subcategory: 'product-selection'
        },
        {
            title: 'Niche Scraper',
            description: '抓取Shopify店铺热销产品，分析Dropshipping机会',
            tags: ['Shopify', 'Dropshipping', '竞品分析'],
            url: 'https://nichescraper.com/',
            subcategory: 'product-selection'
        },

        // 供应链与货源工具
        {
            title: 'Oberlo',
            description: 'Dropshipping选品工具，直接对接AliExpress供应商',
            tags: ['Dropshipping', '速卖通', '一键导入'],
            url: 'https://www.oberlo.com/',
            subcategory: 'product-selection'
        },
        {
            title: '1688选品工具',
            description: '阿里巴巴国内站选品助手，提供批发价分析和供应商评级',
            tags: ['1688', '批发选品', '供应链'],
            url: 'https://www.1688.com/',
            subcategory: 'product-selection'
        },

        // 新兴市场工具
        {
            title: 'Trendsi',
            description: '针对TikTok爆款产品的选品平台，含供应链支持',
            tags: ['TikTok', '短视频爆款', '美国仓配'],
            url: 'https://www.trendsi.com/',
            subcategory: 'product-selection'
        },
        {
            title: 'BigSpy',
            description: '跨境广告情报工具，通过广告数据反推热销产品',
            tags: ['广告监测', '爆品预测', '多平台'],
            url: 'https://bigspy.com/',
            subcategory: 'product-selection'
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
        title: 'Google Keyword Planner',
        description: 'Google官方免费工具，提供搜索量、竞争程度预测，适合Google Ads用户',
        tags: ['关键词研究', 'Google Ads', '免费工具'],
        url: 'https://ads.google.com/home/tools/keyword-planner/',
        subcategory: 'keyword',
        needsMagic: false
         },
        {
        title: 'Ahrefs Keywords Explorer',
        description: '强大的付费关键词工具，提供关键词难度、点击量分布和父话题分析',
        tags: ['SEO', '关键词研究', '付费工具'],
        url: 'https://ahrefs.com/keywords-explorer',
        subcategory: 'keyword',
        needsMagic: true
        },
        {
            title: 'SEMrush',
            description: '提供长尾关键词挖掘、竞争分析和搜索意图分类',
            tags: ['SEO', '关键词研究', '付费工具'],
            url: 'https://www.semrush.com/keyword-magic-tool/',
            subcategory: ['keyword', 'seo'],
            needsMagic: true
        },
        {
            title: 'Moz Keyword Explorer',
            description: '提供关键词优先级评分，适合SEO优化',
            tags: ['SEO', '关键词研究', '付费工具'],
            url: 'https://moz.com/explorer',
            subcategory: 'keyword',
            needsMagic: true
        },
        {
            title: 'Ubersuggest',
            description: 'Neil Patel开发的工具，提供搜索量、CPC和SEO建议',
            tags: ['关键词研究', 'SEO', '免费工具'],
            url: 'https://neilpatel.com/ubersuggest/',
            subcategory: 'keyword',
            needsMagic: false
        },
        {
            title: 'AnswerThePublic',
            description: '可视化展示用户搜索问题，适合内容创作',
            tags: ['长尾关键词', '内容灵感', '免费工具'],
            url: 'https://answerthepublic.com/',
            subcategory: 'keyword',
            needsMagic: false
        },
        {
            title: 'AlsoAsked',
            description: '挖掘"People Also Ask"数据，揭示相关搜索问题',
            tags: ['长尾关键词', 'SEO', '内容研究'],
            url: 'https://alsoasked.com/',
            subcategory: 'keyword',
            needsMagic: false
        },
        {
            title: 'Keywords Everywhere',
            description: '浏览器插件，在Google/Youtube等页面显示搜索量和CPC数据',
            tags: ['关键词研究', '浏览器插件', '付费工具'],
            url: 'https://keywordseverywhere.com/',
            subcategory: 'keyword',
            needsMagic: false
        },
        {
            title: 'Keyword Tool',
            description: '支持Google、YouTube、亚马逊等平台的关键词建议',
            tags: ['关键词研究', '电商SEO', '免费工具'],
            url: 'https://keywordtool.io/',
            subcategory: 'keyword',
            needsMagic: false
        },
        {
            title: 'MerchantWords',
            description: '专注亚马逊等电商平台，分析买家搜索习惯',
            tags: ['电商关键词', '亚马逊SEO', '付费工具'],
            url: 'https://www.merchantwords.com/',
            subcategory: 'keyword',
            needsMagic: true
        },
        {
            title: 'Local Falcon',
            description: '本地SEO工具，可视化分析关键词在特定地理位置的排名',
            tags: ['本地SEO', '关键词研究', '付费工具'],
            url: 'https://localfalcon.com/',
            subcategory: 'keyword',
            needsMagic: true
        },
        {
            title: 'Google Trends',
            description: '分析关键词热度趋势和地域分布',
            tags: ['关键词趋势', '免费工具', '市场研究'],
            url: 'https://trends.google.com/',
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
            title: 'Temp Mail',
            description: '临时邮箱服务，提供一次性电子邮件地址，保护隐私',
            tags: ['临时邮箱', '隐私保护', '一次性邮箱'],
            url: 'https://temp-mail.org/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: '10 Minute Mail',
            description: '邮箱存活10分钟，可延长时间，简洁无广告的临时邮箱服务',
            tags: ['临时邮箱', '10分钟', '无广告'],
            url: 'https://10minutemail.com/',
            subcategory: 'temp-mail',
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
            title: 'ThrowAwayMail',
            description: '多语言支持，自动销毁时间可设置（1小时至1个月）的临时邮箱',
            tags: ['自定义销毁', '多语言', '临时邮箱'],
            url: 'https://www.throwawaymail.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: '24mail',
            description: '国内访问稳定，邮箱24小时后自动删除的临时邮箱服务',
            tags: ['国内访问', '24小时', '临时邮箱'],
            url: 'https://24mail.chacuo.net/',
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
            title: 'Crazymailing',
            description: '临时邮箱+匿名发信功能，适合短期需求的服务',
            tags: ['匿名发信', '短期邮箱', '临时邮箱'],
            url: 'https://www.crazymailing.com/',
            subcategory: 'temp-mail',
            needsMagic: true
        },
        {
            title: 'Proxyscrape',
            description: '代理IP服务，提供HTTP、SOCKS5代理，支持地区选择',
            tags: ['代理IP', 'HTTP代理', 'SOCKS5'],
            url: 'https://proxyscrape.com/',
            subcategory: 'server',
            needsMagic: true
        },
        {
            title: 'Google AdSense',
            description: 'Google AdSense',
            tags: ['Google AdSense', '联盟营销', '联盟营销工具'],
            url: 'https://adsense.google.com/start/',
            subcategory: 'ip-proxy',
            needsMagic: true
        },
        {
            title: 'CJ联盟',
            description: 'CJ联盟',
            tags: ['CJ联盟', '联盟营销', '联盟营销工具'],
            url: 'https://www.cj.com/',
            subcategory: 'ip-proxy',
            needsMagic: true
        },
        {
            title: 'Markethealth',
            description: 'Markethealth',
            tags: ['Markethealth', '健康美容联盟', '联盟营销工具'],
            url: 'https://www.markethealth.com/',
            subcategory: 'ip-proxy',
            needsMagic: true
        },
        {
            title: 'ShareASale',
            description: 'ShareASale',
            tags: ['ShareASale', '联盟营销', '联盟营销工具'],
            url: 'https://www.shareasale.com/info//',
            subcategory: 'ip-proxy',
            needsMagic: true
        },
        {
            title: 'OfferVault联盟',
            description: 'OfferVault',
            tags: ['OfferVault', '联盟营销', '联盟营销工具'],
            url: 'https://www.offervault.com/',
            subcategory: 'ip-proxy',
            needsMagic: true
        },
        {
            title: 'AdCombo联盟',
            description: 'AdCombo',
            tags: ['AdCombo', '联盟营销', '联盟营销工具'],
            url: 'https://adcombo.com/',
            subcategory: 'ip-proxy',
            needsMagic: true
        },
        {
            title: 'Awin联盟',
            description: 'Awin',
            tags: ['Awin', '联盟营销', '联盟营销工具'],
            url: 'https://www.awin.com/kbank.com/',
            subcategory: 'ip-proxy',
            needsMagic: true
        },
        {
            title: 'Admitad联盟',
            description: 'Admitad',
            tags: ['Admitad', '联盟营销', '联盟营销工具'],
            url: 'https://www.admitad.com/om/',
            subcategory: 'ip-proxy',
            needsMagic: true
        },
        {
            title: 'Amazon联盟',
            description: 'Amazon',
            tags: ['Amazon', '联盟营销', '联盟营销工具'],
            url: 'https://affiliate-program.amazon.com/',
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
            title: 'GMX Mail',
            description: '免费电子邮件服务，提供大容量存储和多账户管理',
            tags: ['电子邮件', '免费邮箱', '账号资源'],
            url: 'https://www.gmx.com/',
            subcategory: 'account'
        },
        {
            title: 'Fiverr',
            description: '全球自由职业者平台，提供各种数字服务',
            tags: ['自由职业', '远程工作', '数字服务'],
            url: 'https://www.fiverr.com/',
            subcategory: 'account'
        },
        {
            title: 'Upwork',
            description: '专业自由职业者和客户连接平台',
            tags: ['自由职业', '远程工作', '专业服务'],
            url: 'https://www.upwork.com/',
            subcategory: 'account'
        },
        {
            title: 'Freelancer',
            description: '竞争性自由职业平台，适合各种项目',
            tags: ['自由职业', '项目竞标', '远程工作'],
            url: 'https://www.freelancer.com/',
            subcategory: 'account'
        },
        {
            title: 'Guru',
            description: '专注于创意和技术自由职业者的平台',
            tags: ['创意工作', '自由职业', '技术专家'],
            url: 'https://www.guru.com/',
            subcategory: 'account'
        },
        {
            title: 'Giggrabbers',
            description: '新兴的自由职业者服务平台',
            tags: ['自由职业', '新兴平台', '远程工作'],
            url: 'https://www.giggrabbers.com/',
            subcategory: 'account'
        },
        {
            title: '99designs',
            description: '专注于设计领域的自由职业平台',
            tags: ['设计服务', '创意工作', '自由职业'],
            url: 'https://99designs.com/',
            subcategory: 'account'
        },
        {
            title: 'Dribbble',
            description: '设计师展示作品和寻找工作的平台',
            tags: ['设计作品集', '设计师社区', '创意工作'],
            url: 'https://dribbble.com/',
            subcategory: 'account'
        },
        {
            title: 'Flexjobs',
            description: '专注于远程和灵活工作机会的平台',
            tags: ['远程工作', '灵活工作', '职业机会'],
            url: 'https://www.flexjobs.com/',
            subcategory: 'account'
        },
        {
            title: 'Vemploy',
            description: '自由职业者和企业连接的平台',
            tags: ['自由职业', '企业服务', '远程工作'],
            url: 'https://www.vemploy.com/',
            subcategory: 'account'
        },
        {
            title: 'Peopleperhour',
            description: '按小时雇佣自由职业者的平台',
            tags: ['自由职业', '按小时计费', '远程工作'],
            url: 'https://www.peopleperhour.com/',
            subcategory: 'account'
        },
        {
            title: 'Toptal',
            description: '高端自由职业者平台，只接受前3%的顶尖人才',
            tags: ['精英自由职业', '高端项目', '技术专家'],
            url: 'https://www.toptal.com/',
            subcategory: 'account'
        },
        {
            title: 'SolidGigs',
            description: '自由职业者工作机会聚合平台，附带资源工具',
            tags: ['工作聚合', '自由职业工具', '资源整合'],
            url: 'https://solidgigs.com/',
            subcategory: 'account'
        },
        {
            title: 'AngelList Talent',
            description: '连接初创公司与自由职业者的平台',
            tags: ['初创公司', '科技工作', '远程机会'],
            url: 'https://angel.co/talent',
            subcategory: 'account'
        },
        {
            title: 'Truelancer',
            description: '全球自由职业市场，适合各种技能水平',
            tags: ['全球市场', '多样化项目', '自由职业'],
            url: 'https://www.truelancer.com/',
            subcategory: 'account'
        },
        {
            title: 'DesignHill',
            description: '专注于设计竞赛和自由职业的平台',
            tags: ['设计竞赛', '创意工作', '自由职业'],
            url: 'https://www.designhill.com/',
            subcategory: 'account'
        },
        {
            title: 'Working Not Working',
            description: '创意行业自由职业者专属平台',
            tags: ['创意行业', '设计师网络', '自由职业'],
            url: 'https://workingnotworking.com/',
            subcategory: 'account'
        },
        {
            title: 'Gun.io',
            description: '专注于软件开发自由职业者的高端平台',
            tags: ['软件开发', '技术专家', '高端项目'],
            url: 'https://gun.io/',
            subcategory: 'account'
        },
        {
            title: 'YunoJuno',
            description: '英国为主的创意和技术自由职业平台',
            tags: ['英国市场', '创意工作', '技术自由职业'],
            url: 'https://www.yunojuno.com/',
            subcategory: 'account'
        },
        {
            title: 'Moonlight',
            description: '软件开发自由职业者平台，按项目付费',
            tags: ['软件开发', '项目制', '技术工作'],
            url: 'https://www.moonlightwork.com/',
            subcategory: 'account'
        },
        {
            title: 'Crossover',
            description: '长期远程工作机会平台，侧重全职自由职业',
            tags: ['长期项目', '远程工作', '全职自由职业'],
            url: 'https://www.crossover.com/',
            subcategory: 'account'
        },
        {
            title: 'We Work Remotely',
            description: '远程工作职位板，包含自由职业机会',
            tags: ['远程工作', '职位板', '自由职业'],
            url: 'https://weworkremotely.com/',
            subcategory: 'account'
        },
        {
            title: 'RemoteOK',
            description: '专注于远程工作的平台，含自由职业机会',
            tags: ['远程工作', '数字游民', '自由职业'],
            url: 'https://remoteok.com/',
            subcategory: 'account'
        },
        {
            title: 'Pangian',
            description: '全球远程工作和自由职业社区',
            tags: ['全球机会', '远程社区', '自由职业'],
            url: 'https://pangian.com/',
            subcategory: 'account'
        },
        {
            title: 'Outvise',
            description: '高端商业和技术自由职业者平台',
            tags: ['商业咨询', '技术专家', '高端自由职业'],
            url: 'https://www.outvise.com/',
            subcategory: 'account'
        },
        {
            title: 'Gigster',
            description: '按项目组建自由职业团队的平台',
            tags: ['团队项目', '软件开发', '自由职业网络'],
            url: 'https://gigster.com/',
            subcategory: 'account'
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
            title: 'Link Building HQ',
            description: '专业外链建设服务和策略，提高网站的域名权威性',
            tags: ['外链建设', 'SEO', '域名权威'],
            url: 'https://www.linkbuildinghq.com/',
            subcategory: 'backlink',
            needsMagic: true
        }
    ],
    
    // AI写作
    ai_writing: [
        // 学术论文写作
        {
            title: 'Paperpal',
            description: '专为学术研究人员设计的AI写作助手，提供语法校对和格式化服务',
            tags: ['论文润色', '学术写作', '语法校对'],
            url: 'https://paperpal.com/',
            subcategory: 'academic_paper',
            needsMagic: true
        },
        {
            title: '稿易AI论文',
            description: '中文学术论文智能写作工具，支持快速生成和优化学术内容',
            tags: ['中文论文', '学术写作', '论文生成'],
            url: 'https://gaoyi.com/',
            subcategory: 'academic_paper',
            needsMagic: false
        },
        {
            title: '千笔AI论文',
            description: '针对中国学术需求的AI论文写作工具，提供完整的论文结构和内容生成',
            tags: ['论文写作', '中文学术', '结构优化'],
            url: 'https://www.qianbi.com/',
            subcategory: 'academic_paper',
            needsMagic: false
        },
        {
            title: '66AI论文',
            description: '专注于学术论文写作的AI辅助工具，能快速生成学术段落和参考文献',
            tags: ['论文工具', '参考文献', '内容生成'],
            url: 'https://66ai.com/',
            subcategory: 'academic_paper',
            needsMagic: false
        },
        {
            title: '茅茅虫',
            description: '中文学术写作AI助手，支持论文查重和降重功能',
            tags: ['论文查重', '降重工具', '学术写作'],
            url: 'https://www.maomchong.com/',
            subcategory: 'academic_paper',
            needsMagic: false
        },
        {
            title: 'Grammarly Academic',
            description: '针对学术写作的高级语法和写作风格检查工具，提高论文质量',
            tags: ['语法检查', '学术英语', '写作改进'],
            url: 'https://www.grammarly.com/edu',
            subcategory: 'academic_paper',
            needsMagic: true
        },
        {
            title: 'Wordvice AI',
            description: '专业学术英语编辑和校对服务，面向国际期刊论文优化',
            tags: ['论文编辑', '期刊投稿', '学术英语'],
            url: 'https://wordvice.ai/',
            subcategory: 'academic_paper',
            needsMagic: true
        },
        {
            title: 'Scholarcy',
            description: '学术文献总结工具，自动提取研究论文的关键信息和亮点',
            tags: ['学术总结', '研究辅助', '文献分析'],
            url: 'https://www.scholarcy.com/',
            subcategory: 'academic_paper',
            needsMagic: true
        },
        {
            title: 'Essaybot',
            description: '辅助学术论文和作业写作的AI工具，提供相关资料和引用建议',
            tags: ['论文写作', '引用管理', '学术辅助'],
            url: 'https://www.essaybot.com/',
            subcategory: 'academic_paper',
            needsMagic: true
        },
        
        // 公文与政务写作
        {
            title: '新华妙笔',
            description: '专注于政务写作的AI助手，支持公文、报告、总结等多种政务文书生成',
            tags: ['政务公文', '公文写作', '党政文稿'],
            url: 'https://miaobixinhua.com/',
            subcategory: 'official_document',
            needsMagic: false
        },
        {
            title: '讯飞文书',
            description: '智能公文写作系统，支持各类政务和企业公文的智能生成和优化',
            tags: ['公文写作', '文书生成', '政务文件'],
            url: 'https://www.xfyun.cn/solution/wenxie',
            subcategory: 'official_document',
            needsMagic: false
        },
        {
            title: '文状元',
            description: '专业的公文写作AI助手，提供规范化的政府公函、申请文书等模板和内容生成',
            tags: ['公文模板', '规范写作', '企业文书'],
            url: 'https://wenzhuangyuan.com/',
            subcategory: 'official_document',
            needsMagic: false
        },
        {
            title: '深言达意',
            description: '基于深度学习的公文写作辅助工具，能生成政府报告、工作总结等正式文稿',
            tags: ['正式文稿', '工作总结', '报告生成'],
            url: 'https://shenyandayi.com/',
            subcategory: 'official_document',
            needsMagic: false
        },
        
        // 小说与文学创作
        {
            title: '笔灵AI小说',
            description: '专注小说创作的AI辅助工具，支持情节构思、角色塑造、对话生成等功能',
            tags: ['小说写作', '创意创作', '角色塑造'],
            url: 'https://bilingai.com/',
            subcategory: 'fiction_writing',
            needsMagic: false
        },
        {
            title: '墨狐AI',
            description: '专业的中文小说创作AI助手，擅长构建完整的故事线和角色发展',
            tags: ['小说创作', '情节发展', '中文写作'],
            url: 'https://mohu.com/',
            subcategory: 'fiction_writing',
            needsMagic: false
        },
        {
            title: '彩云小梦',
            description: '互动式AI小说创作平台，读者可以参与故事走向的决策',
            tags: ['互动小说', '创意写作', '故事生成'],
            url: 'https://if.caiyunai.com/',
            subcategory: 'fiction_writing',
            needsMagic: false
        },
        {
            title: 'MidReal',
            description: '支持用户参与情节发展的互动式AI小说创作工具',
            tags: ['互动叙事', '小说创作', '情节分支'],
            url: 'https://midreal.ai/',
            subcategory: 'fiction_writing',
            needsMagic: true
        },
        {
            title: 'Sudowrite',
            description: '专为小说家和创意写作者设计的AI工具，帮助构思故事和克服写作瓶颈',
            tags: ['小说创作', '创意写作', '故事构思'],
            url: 'https://www.sudowrite.com/',
            subcategory: 'fiction_writing',
            needsMagic: true
        },
        {
            title: 'NovelAI',
            description: '专注于叙事和小说创作的AI平台，可生成连贯的故事情节和对话',
            tags: ['小说生成', '情节创作', '角色发展'],
            url: 'https://novelai.net/',
            subcategory: 'fiction_writing',
            needsMagic: true
        },
        
        // 营销与商业文案
        {
            title: '绘蛙AI文案',
            description: '专注于电商和营销领域的AI文案工具，生成广告文案、产品描述等内容',
            tags: ['电商文案', '产品描述', '营销文本'],
            url: 'https://huiwa.com/',
            subcategory: 'marketing_copy',
            needsMagic: false
        },
        {
            title: 'Copy.ai',
            description: '面向营销和商业的AI文案生成工具，提供多种文案模板',
            tags: ['营销文案', '邮件写作', '社交媒体'],
            url: 'https://www.copy.ai/',
            subcategory: 'marketing_copy',
            needsMagic: true
        },
        {
            title: 'Jasper',
            description: '专业AI内容创作平台，为营销团队和内容创作者提供多种模板和功能',
            tags: ['内容营销', '博客写作', '专业创作'],
            url: 'https://www.jasper.ai/',
            subcategory: 'marketing_copy',
            needsMagic: true
        },
        {
            title: 'Writesonic',
            description: '全能AI写作平台，为企业和个人提供博客、广告和产品描述等内容创作',
            tags: ['内容创作', '营销文案', 'SEO优化'],
            url: 'https://writesonic.com/',
            subcategory: 'marketing_copy',
            needsMagic: true
        },
        
        // 新媒体与博客写作
        {
            title: '松果AI写作',
            description: '专注于新媒体内容创作的中文AI写作工具，适合公众号、自媒体等内容生成',
            tags: ['新媒体', '公众号', '内容创作'],
            url: 'https://songguo.ai/',
            subcategory: 'blog_media',
            needsMagic: false
        },
        {
            title: '橙篇',
            description: '面向自媒体创作者的AI写作助手，支持生成热点文章、专业内容等',
            tags: ['自媒体', '热点内容', '原创文章'],
            url: 'https://chengpian.com/',
            subcategory: 'blog_media',
            needsMagic: false
        },
        {
            title: '小鱼AI写作',
            description: '专注于新媒体创作的AI助手，提供多种写作风格和模板',
            tags: ['自媒体', '写作风格', '内容创作'],
            url: 'https://xiaoyu.ai/',
            subcategory: 'blog_media',
            needsMagic: false
        },
        {
            title: 'AI新媒体文章（夸克）',
            description: '夸克搜索推出的新媒体文章创作工具，支持一键生成完整文章',
            tags: ['新媒体', '一键生成', '内容创作'],
            url: 'https://www.myquark.cn/',
            subcategory: 'blog_media',
            needsMagic: false
        },
        {
            title: 'Rytr',
            description: '经济实惠的AI写作助手，适合博客、邮件和社交媒体内容创作',
            tags: ['内容创作', '性价比高', '多语言'],
            url: 'https://rytr.me/',
            subcategory: 'blog_media',
            needsMagic: true
        },
        
        // 多语言写作与翻译
        {
            title: 'QuillBot',
            description: '智能重写和润色工具，提供释义、摘要和语法检查功能',
            tags: ['文本改写', '摘要工具', '语法检查'],
            url: 'https://quillbot.com/',
            subcategory: 'multilingual',
            needsMagic: true
        },
        {
            title: '有道翻译·AI写作',
            description: '网易有道推出的AI写作助手，支持多语言翻译和写作润色',
            tags: ['中英翻译', '写作润色', '语法修正'],
            url: 'https://ai.youdao.com/',
            subcategory: 'multilingual',
            needsMagic: false
        },
        {
            title: 'DeepL Write',
            description: '由顶级翻译服务DeepL推出的AI写作助手，专注于多语言写作优化',
            tags: ['多语言写作', '高级翻译', '内容润色'],
            url: 'https://www.deepl.com/write',
            subcategory: 'multilingual',
            needsMagic: true
        },
        {
            title: 'DeepL',
            description: '高质量的AI翻译工具，支持多种语言之间的准确翻译',
            tags: ['翻译工具', '多语言', '专业翻译'],
            url: 'https://www.deepl.com/',
            subcategory: 'multilingual',
            needsMagic: true
        },
        {
            title: 'Descript',
            description: '视频和音频编辑平台，提供先进的转录和字幕生成功能',
            tags: ['音频转录', '视频字幕', '内容编辑'],
            url: 'https://www.descript.com/',
            subcategory: 'multilingual',
            needsMagic: true
        },
        {
            title: 'Otter.ai',
            description: '实时语音转文字工具，适用于会议记录和采访转录',
            tags: ['会议记录', '语音转文字', '实时转录'],
            url: 'https://otter.ai/',
            subcategory: 'multilingual',
            needsMagic: true
        },
        
        // 办公与综合写作
        {
            title: '火山写作（豆包）',
            description: '字节跳动推出的全能AI写作工具，支持多种办公场景和文档类型',
            tags: ['文档写作', '邮件生成', '综合办公'],
            url: 'https://www.doubao.com/',
            subcategory: 'office_writing',
            needsMagic: false
        },
        {
            title: 'Notion AI',
            description: 'Notion集成的AI写作助手，可直接在笔记和文档中生成和编辑内容',
            tags: ['文档写作', '笔记助手', '内容生成'],
            url: 'https://www.notion.so/product/ai',
            subcategory: 'office_writing',
            needsMagic: true
        },
        {
            title: '讯飞写作',
            description: '科大讯飞推出的AI写作助手，适用于各类办公文档和内容创作',
            tags: ['办公文档', '智能写作', '多场景'],
            url: 'https://www.xfyun.cn/services/xiezuo',
            subcategory: 'office_writing',
            needsMagic: false
        },
        {
            title: 'FlowUs AI',
            description: '集成在FlowUs协作平台的AI写作助手，支持文档、表格、PPT等多种内容生成',
            tags: ['协作文档', '团队写作', '多格式支持'],
            url: 'https://flowus.cn/product/ai',
            subcategory: 'office_writing',
            needsMagic: false
        },
        {
            title: '迅捷AI写作',
            description: '专注于办公应用场景的AI写作工具，支持各类文档、PPT等内容生成',
            tags: ['办公写作', 'PPT生成', '文档创建'],
            url: 'https://xunjiepdf.com/ai',
            subcategory: 'office_writing',
            needsMagic: false
        },
        {
            title: '库宝AI工作助手',
            description: '整合在线文档和AI技术的办公写作工具，提高办公效率',
            tags: ['文档处理', '协作办公', 'AI辅助'],
            url: 'https://kubaopdf.com/ai',
            subcategory: 'office_writing',
            needsMagic: false
        },
        {
            title: 'ChatGPT',
            description: 'OpenAI推出的智能AI对话系统，可用于多种文本生成和写作任务',
            tags: ['AI助手', '文本生成', '多用途'],
            url: 'https://chat.openai.com/',
            subcategory: 'office_writing',
            isRecommended: true,
            needsMagic: true
        },
        {
            title: 'Claude',
            description: 'Anthropic公司开发的AI助手，擅长长文本创作、分析和对话',
            tags: ['AI助手', '长文本', '对话式AI'],
            url: 'https://claude.ai/',
            subcategory: 'office_writing',
            needsMagic: true
        },
        
        // 脚本与创意内容
        {
            title: '创一AI',
            description: '专注于视频脚本和创意内容生成的AI工具，适合短视频创作者使用',
            tags: ['视频脚本', '短视频', '创意内容'],
            url: 'https://chuangyi.ai/',
            subcategory: 'script_content',
            needsMagic: false
        },
        {
            title: '讯飞绘文',
            description: '科大讯飞推出的创意内容生成工具，擅长脚本、短剧和创意故事',
            tags: ['创意脚本', '短剧内容', '故事生成'],
            url: 'https://www.xfyun.cn/services/huiwen',
            subcategory: 'script_content',
            needsMagic: false
        },
        {
            title: '万能小in',
            description: '面向创意内容制作的AI助手，支持脚本、梗概、对白等多种创意文本生成',
            tags: ['创意制作', '内容创作', '脚本生成'],
            url: 'https://wannengxiaoin.com/',
            subcategory: 'script_content',
            needsMagic: false
        },
        {
            title: 'CaptionBot.ai',
            description: '自动为图片和视频生成字幕和说明文字的AI工具',
            tags: ['图片字幕', '视频说明', 'AI字幕'],
            url: 'https://captionbot.ai/',
            subcategory: 'script_content',
            needsMagic: true
        },
        {
            title: 'Canva文本生成器',
            description: 'Canva设计平台内置的AI文本生成工具，可创建标题、说明和短文',
            tags: ['设计文本', '标题生成', '图文结合'],
            url: 'https://www.canva.com/features/ai-text-generator/',
            subcategory: 'script_content',
            needsMagic: true
        },
        
        // 速读与摘要工具
        {
            title: 'ReadPo',
            description: '专业的AI文本摘要和速读工具，能快速提取文章核心观点和要点',
            tags: ['文章摘要', '速读工具', '内容提炼'],
            url: 'https://readpo.com/',
            subcategory: 'summary_tools',
            needsMagic: true
        },
        {
            title: '晓语台',
            description: '中文长文本摘要和重点提取工具，帮助用户快速理解文章内容',
            tags: ['中文摘要', '内容提炼', '快速阅读'],
            url: 'https://xiaoyutai.com/',
            subcategory: 'summary_tools',
            needsMagic: false
        },
        {
            title: 'Hemingway Editor',
            description: '文本编辑工具，帮助提高写作清晰度和可读性',
            tags: ['文本清晰度', '写作改进', '可读性'],
            url: 'https://hemingwayapp.com/',
            subcategory: 'summary_tools',
            needsMagic: true
        },
        
        // 互动式写作
        {
            title: 'MidReal',
            description: '支持用户参与情节发展的互动式AI小说创作工具',
            tags: ['互动叙事', '小说创作', '情节分支'],
            url: 'https://midreal.ai/',
            subcategory: 'interactive_writing',
            needsMagic: true
        },
        {
            title: '彩云小梦',
            description: '互动式AI小说创作平台，读者可以参与故事走向的决策',
            tags: ['互动小说', '创意写作', '故事生成'],
            url: 'https://if.caiyunai.com/',
            subcategory: 'interactive_writing',
            needsMagic: false
        }
    ],
    
    // AI对话
    ai_chat: [
        // 通用AI助手
        {
            title: 'ChatGPT',
            description: 'OpenAI开发的大型语言模型，可进行自然对话、回答问题、创作内容等',
            tags: ['通用对话', '问答助手', '内容创作'],
            url: 'https://chat.openai.com/',
            subcategory: 'general_assistant',
            isRecommended: true,
            needsMagic: true
        },

        {
            title: 'Monica',
            description: 'Monica是一款基于AI的智能助手，能够进行多轮对话、信息检索、内容创作等',
            tags: ['智能对话', '信息检索', '内容创作'],
            url: 'https://www.monica.ai/',
            subcategory: ['general_assistant','office_writing'],
            needsMagic: true
        },
        {
            title: 'Claude',
            description: 'Anthropic打造的对话AI助手，擅长理解上下文和长对话',
            tags: ['智能对话', '长文处理', '上下文理解'],
            url: 'https://claude.ai/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: '文心一言',
            description: '百度推出的人工智能语言模型，能够与人进行多轮对话交流',
            tags: ['中文对话', '国产模型', '百度AI'],
            url: 'https://yiyan.baidu.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: '通义千问',
            description: '阿里开发的大语言模型，支持多轮对话和复杂任务处理',
            tags: ['阿里AI', '多轮对话', '中文优化'],
            url: 'https://qianwen.aliyun.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: '讯飞星火',
            description: '科大讯飞推出的认知大模型，具有强大的中文理解能力',
            tags: ['国产AI', '认知模型', '中文优化'],
            url: 'https://xinghuo.xfyun.cn/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: '智谱清言',
            description: '由智谱AI和清华大学共同开发的大语言模型，在中文和通用能力上表现优异',
            tags: ['ChatGLM', '清华AI', '学术支持'],
            url: 'https://chatglm.cn/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Gemini',
            description: 'Google推出的多模态AI模型，支持文本、图像等多种输入',
            tags: ['Google AI', '多模态', '高级推理'],
            url: 'https://gemini.google.com/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: 'Copilot',
            description: 'Microsoft推出的AI助手，集成于Windows和Office产品中',
            tags: ['微软AI', '生产力工具', '系统集成'],
            url: 'https://copilot.microsoft.com/',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: '豆包',
            description: '字节跳动推出的AI助手，支持多种创作和办公场景',
            tags: ['国产AI', '多场景', '创作助手'],
            url: 'https://www.doubao.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'DeepSeek',
            description: '深度求索AI推出的大语言模型，具有丰富的知识库和推理能力',
            tags: ['通用AI', '代码能力', '创新模型'],
            url: 'https://www.deepseek.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: 'Kimi',
            description: '月之暗面推出的AI助手，拥有强大的长文本理解和记忆能力',
            tags: ['长文理解', '知识问答', '中文优化'],
            url: 'https://kimi.moonshot.cn/',
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
            title: '百小应',
            description: '百度知识增强的AI助手，拥有及时更新的互联网信息',
            tags: ['百度搜索', '实时信息', '知识问答'],
            url: 'https://info.baidu.com/',
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
        {
            title: 'Bing新必应',
            description: '微软搜索引擎结合AI能力的对话式搜索体验',
            tags: ['AI搜索', '网络信息', '微软AI'],
            url: 'https://www.bing.com/new',
            subcategory: 'general_assistant',
            needsMagic: true
        },
        {
            title: '商量SenseChat',
            description: '商汤科技推出的AI助手，具有多轮对话和知识推理能力',
            tags: ['商汤AI', '国产模型', '多轮对话'],
            url: 'https://chat.sensetime.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: '小悟空',
            description: '奇点智源推出的AI助手，拥有良好的中文理解和创作能力',
            tags: ['中文AI', '知识问答', '奇点智源'],
            url: 'https://openxlab.org.cn/apps/detail/singularity-ai/wukong',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        {
            title: '紫东太初',
            description: '中科院自动化所推出的AI助手，具有强大的知识推理能力',
            tags: ['学术支持', '知识推理', '中科院AI'],
            url: 'https://chatbot.automata-ai.com/',
            subcategory: 'general_assistant',
            needsMagic: false
        },
        
        // 游戏与娱乐AI
        {
            title: 'Character.AI',
            description: '创建并与各种AI角色对话的平台，支持自定义角色设定',
            tags: ['角色扮演', '人格定制', '娱乐对话'],
            url: 'https://character.ai/',
            subcategory: 'entertainment_ai',
            needsMagic: true
        },
        {
            title: '逗逗',
            description: '专注于娱乐互动的AI助手，支持多种趣味对话场景',
            tags: ['娱乐聊天', '休闲互动', '趣味对话'],
            url: 'https://doudou.ai/',
            subcategory: 'entertainment_ai',
            needsMagic: false
        },
        {
            title: 'Koko AI',
            description: '提供有趣AI互动体验的平台，支持社交和娱乐功能',
            tags: ['社交AI', '趣味互动', '休闲聊天'],
            url: 'https://www.koko.ai/',
            subcategory: 'entertainment_ai',
            needsMagic: true
        },
        {
            title: '造梦次元',
            description: '国内知名的AI娱乐互动平台，提供多样化的AI体验',
            tags: ['AI互动', '娱乐平台', '休闲娱乐'],
            url: 'https://www.zaomeng.space/',
            subcategory: 'entertainment_ai',
            needsMagic: false
        },
        {
            title: 'Museland',
            description: '专注于音乐和娱乐的AI互动平台，提供创意音乐体验',
            tags: ['音乐互动', 'AI创意', '娱乐体验'],
            url: 'https://www.museland.com/',
            subcategory: 'entertainment_ai',
            needsMagic: true
        },
        {
            title: '小黄蕉',
            description: '趣味性AI聊天助手，擅长幽默对话和娱乐互动',
            tags: ['幽默对话', '轻松聊天', '休闲互动'],
            url: 'https://www.xiaohuangjiao.com/',
            subcategory: 'entertainment_ai',
            needsMagic: false
        },
        {
            title: '冒泡鸭',
            description: '轻松有趣的AI对话助手，提供休闲陪伴和互动体验',
            tags: ['休闲聊天', '娱乐互动', '轻松陪伴'],
            url: 'https://maopaoya.com/',
            subcategory: 'entertainment_ai',
            needsMagic: false
        },
        {
            title: 'Cici',
            description: '面向年轻用户的娱乐AI助手，提供丰富的互动体验',
            tags: ['年轻风格', '互动娱乐', '趣味对话'],
            url: 'https://www.cici.ai/',
            subcategory: 'entertainment_ai',
            needsMagic: true
        },
        
        // 角色扮演与虚拟陪伴
        {
            title: 'Ohai',
            description: '提供AI虚拟伴侣体验的平台，支持深度情感互动',
            tags: ['虚拟伴侣', '情感互动', '深度对话'],
            url: 'https://ohai.com/',
            subcategory: 'role_play',
            needsMagic: true
        },
        {
            title: 'Me.bot',
            description: '创建个性化AI分身的平台，可以基于自己的风格定制AI',
            tags: ['AI分身', '个性定制', '形象复制'],
            url: 'https://me.bot/',
            subcategory: 'role_play',
            needsMagic: true
        },
        {
            title: 'Saylo',
            description: '提供AI角色对话和情感陪伴的平台，支持丰富的角色定制',
            tags: ['角色定制', '情感交流', '虚拟陪伴'],
            url: 'https://www.saylo.ai/',
            subcategory: 'role_play',
            needsMagic: true
        },
        {
            title: '通义星尘',
            description: '阿里推出的虚拟数字人助手，提供情感化的对话体验',
            tags: ['数字人', '情感对话', '虚拟形象'],
            url: 'https://tongyi.aliyun.com/xingchen',
            subcategory: 'role_play',
            needsMagic: false
        },
        {
            title: 'CueMe',
            description: '提供个性化虚拟伴侣和角色扮演的AI平台',
            tags: ['虚拟伴侣', '角色扮演', '情感互动'],
            url: 'https://www.cueme.com/',
            subcategory: 'role_play',
            needsMagic: true
        },
        {
            title: 'Chai',
            description: '提供AI角色对话的社交平台，支持多种角色和互动场景',
            tags: ['角色对话', 'AI社交', '互动场景'],
            url: 'https://chai.ml/',
            subcategory: 'role_play',
            needsMagic: true
        },
        
        // 多模态AI助手
        {
            title: '跃问',
            description: '支持图像识别和多模态交互的AI助手，可以理解图片内容',
            tags: ['多模态', '图像识别', '视觉理解'],
            url: 'https://www.yuewen.ai/',
            subcategory: 'multimodal_ai',
            needsMagic: false
        },
        {
            title: '华为小艺',
            description: '华为推出的多模态AI助手，支持语音、图像和文本交互',
            tags: ['华为AI', '多模态', '语音交互'],
            url: 'https://xiaoyi.huawei.com/',
            subcategory: 'multimodal_ai',
            needsMagic: false
        },
        {
            title: 'Meta AI助手',
            description: 'Meta推出的多模态AI，支持图像、语音和文本的综合理解',
            tags: ['Meta AI', '多模态', '社交平台'],
            url: 'https://ai.meta.com/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'Midjourney AI',
            description: '专注于AI艺术创作的对话工具，通过文本生成高质量图像',
            tags: ['AI绘画', '图像生成', '创意设计'],
            url: 'https://www.midjourney.com/',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: 'DALL-E',
            description: 'OpenAI开发的AI图像生成系统，可根据文本描述创建图像',
            tags: ['图像生成', 'AI艺术', '创意工具'],
            url: 'https://openai.com/dall-e-3',
            subcategory: 'multimodal_ai',
            needsMagic: true
        },
        {
            title: '稀饭AI',
            description: '专注于中文场景的AI对话助手，支持文生图、图生图等多种创作模式',
            tags: ['AI创作', '图文结合', '中文优化'],
            url: 'https://xfan.ai/',
            subcategory: 'multimodal_ai',
            needsMagic: false
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
            url: 'https://qianwen.aliyun.com/',
            subcategory: 'professional_ai',
            needsMagic: false
        },
        {
            title: 'Grok',
            description: 'xAI推出的技术导向型AI助手，擅长科技和编程问题',
            tags: ['技术问答', '科学知识', '马斯克AI'],
            url: 'https://grok.x.ai/',
            subcategory: 'professional_ai',
            needsMagic: true
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
            title: 'Codeium',
            description: '免费的AI代码助手，提供智能代码补全和生成功能',
            tags: ['代码补全', '免费工具', '多语言支持'],
            url: 'https://codeium.com/',
            subcategory: 'professional_ai',
            needsMagic: true
        },
        {
            title: 'Cursor',
            description: '集成AI的代码编辑器，可以理解、解释和生成代码',
            tags: ['AI编辑器', '代码理解', '快速开发'],
            url: 'https://cursor.sh/',
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
            title: 'Poe',
            description: 'Quora开发的AI平台，集成多种AI模型，方便用户对比使用',
            tags: ['多模型集成', '快速切换', '比较体验'],
            url: 'https://poe.com/',
            subcategory: 'international_ai',
            needsMagic: true
        },
        {
            title: 'MiniMax',
            description: '面向全球市场的中国AI公司，提供多语言支持的AI服务',
            tags: ['全球化', '多语言', '中国技术'],
            url: 'https://api.minimax.chat/',
            subcategory: 'international_ai',
            needsMagic: false
        },
        {
            title: 'Cici',
            description: '豆包国际版，面向国际用户的中国AI技术展示',
            tags: ['国际版', '中国技术', '多语言'],
            url: 'https://www.cici.ai/',
            subcategory: 'international_ai',
            needsMagic: true
        },
        {
            title: '百川大模型',
            description: '提供多语言支持的中国大模型，面向国际市场',
            tags: ['多语言', '国际化', '中国AI'],
            url: 'https://www.baichuan-ai.com/',
            subcategory: 'international_ai',
            needsMagic: false
        },
        {
            title: 'Langchain AI',
            description: '开发者工具框架，用于构建基于大型语言模型的国际化应用程序',
            tags: ['开发框架', 'LLM应用', '国际标准'],
            url: 'https://www.langchain.com/',
            subcategory: 'international_ai',
            needsMagic: true
        },
        {
            title: 'FlowGPT',
            description: '预设各种专业场景的AI对话，包含众多工作流程和提示词',
            tags: ['提示词库', '场景模板', '国际化'],
            url: 'https://flowgpt.com/',
            subcategory: 'international_ai',
            needsMagic: true
        },
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
    
    // AI图像
    ai_image: [
        // 通用AI图片生成
        {
            title: 'MidJourney',
            description: '强大的AI艺术生成工具，通过文本提示创建高质量艺术作品',
            tags: ['AI艺术', '图像生成', '创意设计'],
            url: 'https://www.midjourney.com/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'DALL·E 3',
            description: 'OpenAI开发的先进AI图像生成系统，支持复杂文本描述转化为精确图像',
            tags: ['OpenAI', '文本生成图像', '高清图像'],
            url: 'https://openai.com/dall-e-3',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'Stable Diffusion',
            description: '开源的文本生成图像AI模型，支持本地部署和自定义微调',
            tags: ['开源模型', '自定义部署', '社区支持'],
            url: 'https://stability.ai/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'DreamStudio',
            description: 'Stability AI官方平台，提供Stable Diffusion模型的云端应用',
            tags: ['Stability AI', '云端生成', '专业工具'],
            url: 'https://dreamstudio.ai/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'Firefly',
            description: 'Adobe推出的AI图像生成工具，与创意云产品无缝集成',
            tags: ['Adobe', '设计集成', '商业授权'],
            url: 'https://firefly.adobe.com/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'Leonardo.AI',
            description: '专注于高精度和多样化风格的AI图像生成平台',
            tags: ['高精度', '风格多样', '创意工具'],
            url: 'https://leonardo.ai/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'Bing Image Creator',
            description: '微软推出的免费AI图像生成工具，基于DALL-E模型',
            tags: ['微软', '免费工具', '简易操作'],
            url: 'https://www.bing.com/create',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'DeepFloyd IF',
            description: '多模态生成模型，支持高质量图像和精确文本理解',
            tags: ['多模态', '高质量', '精确理解'],
            url: 'https://deepfloyd.ai/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'Playground AI',
            description: '免费在线AI图像生成平台，用户友好的界面设计',
            tags: ['免费工具', '用户友好', '在线生成'],
            url: 'https://playgroundai.com/',
            subcategory: 'general_image',
            needsMagic: true
        },
        {
            title: 'NightCafe',
            description: '创意AI艺术社区，支持多种算法和风格创作',
            tags: ['创意社区', '多算法', '风格多样'],
            url: 'https://nightcafe.studio/',
            subcategory: 'general_image',
            needsMagic: true
        },
        
        // 人像与头像生成
        {
            title: 'Lensa AI',
            description: '爆款魔法头像生成应用，创建各种风格的艺术化个人头像',
            tags: ['魔法头像', '风格多样', '个人定制'],
            url: 'https://prisma-ai.com/lensa',
            subcategory: 'portrait',
            needsMagic: true
        },
        {
            title: 'Generated Photos',
            description: '人工智能生成的虚拟人像库，提供多样化的人物形象',
            tags: ['虚拟人像', '多样化', '商业授权'],
            url: 'https://generated.photos/',
            subcategory: 'portrait',
            needsMagic: true
        },
        {
            title: 'This Person Does Not Exist',
            description: '利用GAN技术生成逼真但不存在的人脸照片',
            tags: ['GAN技术', '虚拟人脸', '逼真效果'],
            url: 'https://thispersondoesnotexist.com/',
            subcategory: 'portrait',
            needsMagic: true
        },
        {
            title: 'PortraitAI',
            description: '将个人照片转换为各种艺术风格的肖像画',
            tags: ['艺术肖像', '风格转换', '个人定制'],
            url: 'https://portraitai.com/',
            subcategory: 'portrait',
            needsMagic: true
        },
        {
            title: 'AvatarAI',
            description: '定制专业数字人形象，适用于各种商业和个人场景',
            tags: ['数字人像', '商业应用', '专业形象'],
            url: 'https://avatarai.me/',
            subcategory: 'portrait',
            needsMagic: true
        },
        {
            title: 'Dawn AI',
            description: '移动端AI头像生成应用，支持多种创意风格和效果',
            tags: ['移动应用', '创意风格', '快速生成'],
            url: 'https://dawn-ai.com/',
            subcategory: 'portrait',
            needsMagic: true
        },
        
        // 背景与设计素材
        {
            title: 'Remove.bg',
            description: '智能去除图像背景的AI工具，一键实现透明背景',
            tags: ['去背景', '透明背景', '一键操作'],
            url: 'https://www.remove.bg/',
            subcategory: 'background',
            needsMagic: true
        },
        {
            title: 'Magic Studio',
            description: 'Canva旗下的AI图像编辑工具，提供背景替换和增强功能',
            tags: ['背景替换', 'Canva', '图像编辑'],
            url: 'https://magicstudio.com/',
            subcategory: 'background',
            needsMagic: true
        },
        {
            title: 'Patterned AI',
            description: '利用AI生成无缝纹理和图案的设计工具',
            tags: ['无缝纹理', '图案设计', '设计素材'],
            url: 'https://patterned.ai/',
            subcategory: 'background',
            needsMagic: true
        },
        {
            title: 'Wallpaper Engine',
            description: '支持AI生成的动态壁纸创作平台，实现个性化桌面体验',
            tags: ['动态壁纸', '个性化', '创意设计'],
            url: 'https://www.wallpaperengine.io/',
            subcategory: 'background',
            needsMagic: true
        },
        
        // 品牌与商业设计
        {
            title: 'Looka',
            description: 'AI驱动的Logo设计工具，帮助创建专业品牌标识',
            tags: ['Logo设计', '品牌标识', 'AI设计'],
            url: 'https://looka.com/',
            subcategory: 'brand_design',
            needsMagic: true
        },
        {
            title: 'Brandmark.io',
            description: '专业的AI品牌套装生成工具，包含Logo、配色和品牌资产',
            tags: ['品牌套装', 'Logo设计', '配色方案'],
            url: 'https://brandmark.io/',
            subcategory: 'brand_design',
            needsMagic: true
        },
        {
            title: 'Canva AI',
            description: '集成AI功能的全能设计平台，支持多种商业设计需求',
            tags: ['全能设计', '商业模板', 'AI辅助'],
            url: 'https://www.canva.com/ai-image-generator/',
            subcategory: 'brand_design',
            needsMagic: true
        },
        {
            title: 'VanceAI',
            description: '专注于商品图生成和优化的AI工具，适合电商场景',
            tags: ['商品图', '电商优化', '图像增强'],
            url: 'https://vanceai.com/',
            subcategory: 'brand_design',
            needsMagic: true
        },
        
        // 照片修复与增强
        {
            title: 'MyHeritage InColor',
            description: '专业的老照片上色和修复工具，保留历史细节',
            tags: ['老照片修复', '照片上色', '历史保存'],
            url: 'https://www.myheritage.com/incolor',
            subcategory: 'photo_enhancement',
            needsMagic: true
        },
        {
            title: 'Topaz Photo AI',
            description: '专业级照片增强工具，提供降噪、锐化和放大等功能',
            tags: ['照片增强', '专业处理', '画质提升'],
            url: 'https://www.topazlabs.com/topaz-photo-ai',
            subcategory: 'photo_enhancement',
            needsMagic: true
        },
        {
            title: 'GFP-GAN',
            description: '腾讯开源的人脸照片修复技术，专注于细节还原',
            tags: ['开源技术', '人脸修复', '细节还原'],
            url: 'https://github.com/TencentARC/GFPGAN',
            subcategory: 'photo_enhancement',
            needsMagic: false
        },
        {
            title: 'Remini',
            description: '手机端AI照片修复应用，轻松提升模糊照片质量',
            tags: ['移动应用', '快速修复', '用户友好'],
            url: 'https://remini.ai/',
            subcategory: 'photo_enhancement',
            needsMagic: true
        },
        {
            title: 'Bigjpg',
            description: '基于神经网络的图片无损放大工具，保持清晰度',
            tags: ['无损放大', '神经网络', '细节保留'],
            url: 'https://bigjpg.com/',
            subcategory: 'photo_enhancement',
            needsMagic: false
        },
        
        // 动漫与二次元创作
        {
            title: 'Niji Journey',
            description: '专注于动漫和二次元风格的AI图像生成工具',
            tags: ['二次元', '动漫风格', '风格化创作'],
            url: 'https://nijijourney.com/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: 'Waifu Labs',
            description: '个性化动漫头像生成器，可定制角色特征',
            tags: ['动漫头像', '角色定制', '二次元风格'],
            url: 'https://waifulabs.com/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: 'NovelAI',
            description: '专为小说配图和创意写作设计的AI绘图工具',
            tags: ['小说配图', '创意写作', '定制插画'],
            url: 'https://novelai.net/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: 'PixAI.art',
            description: '专注于亚洲风格动漫和插画创作的AI平台',
            tags: ['亚洲风格', '插画创作', '二次元艺术'],
            url: 'https://pixai.art/',
            subcategory: 'anime',
            needsMagic: true
        },
        {
            title: '触手AI',
            description: '国内领先的AI动漫创作平台，支持多种二次元风格',
            tags: ['国内平台', '二次元', '多风格支持'],
            url: 'https://chusu.cc/',
            subcategory: 'anime',
            needsMagic: false
        },
        
        // 娱乐与趣味工具
        {
            title: 'Reface',
            description: '有趣的AI换脸应用，将自己的脸换到各种场景中',
            tags: ['AI换脸', '娱乐应用', '社交分享'],
            url: 'https://reface.app/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        {
            title: 'Imgflip',
            description: 'AI驱动的表情包制作工具，支持自定义文字和模板',
            tags: ['表情包', '梗图制作', '社交媒体'],
            url: 'https://imgflip.com/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        {
            title: 'Voilà AI',
            description: '将照片转换为迪士尼风格卡通头像的有趣工具',
            tags: ['卡通头像', '风格转换', '有趣效果'],
            url: 'https://voila-ai.com/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        {
            title: 'ToonMe',
            description: '将自拍照转换为卡通化或艺术化效果的应用',
            tags: ['卡通化', '自拍美化', '艺术风格'],
            url: 'https://toonme.com/',
            subcategory: 'fun_tools',
            needsMagic: true
        },
        
        // 服装与时尚设计
        {
            title: 'ZMO.ai',
            description: 'AI虚拟服装设计和模特试穿平台，适合电商展示',
            tags: ['虚拟服装', '模特试穿', '电商展示'],
            url: 'https://zmo.ai/',
            subcategory: 'fashion',
            needsMagic: true
        },
        {
            title: 'TattooAI',
            description: 'AI驱动的纹身设计工具，创建个性化纹身图案',
            tags: ['纹身设计', '个性化图案', '创意工具'],
            url: 'https://tattooai.com/',
            subcategory: 'fashion',
            needsMagic: true
        },
        {
            title: 'Vmake',
            description: '电商换装AI工具，快速生成不同服饰的展示效果',
            tags: ['电商换装', '产品展示', '虚拟试衣'],
            url: 'https://www.v-make.ai/',
            subcategory: 'fashion',
            needsMagic: true
        },
        
        // 图像编辑与处理
        {
            title: 'Photoshop AI',
            description: 'Adobe Photoshop集成的AI功能，包括生成式填充等智能工具',
            tags: ['专业编辑', 'Adobe', '生成式填充'],
            url: 'https://www.adobe.com/products/photoshop/generative-fill.html',
            subcategory: 'image_editing',
            needsMagic: true
        },
        {
            title: 'Picsart',
            description: '移动端全能图像编辑应用，集成AI编辑和创意工具',
            tags: ['移动编辑', '全能工具', 'AI创意'],
            url: 'https://picsart.com/',
            subcategory: 'image_editing',
            needsMagic: true
        },
        {
            title: 'ClipDrop',
            description: '实景捕捉和AI编辑工具，支持物体提取和场景编辑',
            tags: ['实景捕捉', '物体提取', 'AI编辑'],
            url: 'https://clipdrop.co/',
            subcategory: 'image_editing',
            needsMagic: true
        },
        {
            title: 'Fotor',
            description: '在线图像编辑器，集成AI美化和设计功能',
            tags: ['在线编辑', 'AI美化', '简易操作'],
            url: 'https://www.fotor.com/',
            subcategory: 'image_editing',
            needsMagic: true
        },
        
        // 专业场景生成
        {
            title: 'Diagram.codes',
            description: 'AI驱动的图表和流程图生成工具，适用于专业展示',
            tags: ['图表生成', '流程图', '专业展示'],
            url: 'https://diagram.codes/',
            subcategory: 'professional_scene',
            needsMagic: true
        },
        {
            title: 'Architechtures',
            description: '专业建筑渲染AI工具，生成逼真的建筑和景观效果图',
            tags: ['建筑渲染', '景观设计', '效果图'],
            url: 'https://architechtures.com/',
            subcategory: 'professional_scene',
            needsMagic: true
        },
        {
            title: 'InteriorAI',
            description: 'AI驱动的室内设计可视化工具，生成逼真的装修效果',
            tags: ['室内设计', '装修效果', '空间可视化'],
            url: 'https://interiorai.com/',
            subcategory: 'professional_scene',
            needsMagic: true
        },
        {
            title: 'NVIDIA Canvas',
            description: 'NVIDIA推出的实时场景绘制工具，将简单草图转换为实景图像',
            tags: ['实时绘制', 'NVIDIA', '场景转换'],
            url: 'https://www.nvidia.com/en-us/studio/canvas/',
            subcategory: 'professional_scene',
            needsMagic: true
        }
    ],
    
    // AI视频
    ai_video: [
        // 文本生成视频
        {
            title: 'Runway Gen-2',
            description: '先进的文本到视频AI系统，通过文字描述生成高质量的短视频内容',
            tags: ['文本生成视频', '创意合成', 'AI特效'],
            url: 'https://runway.com/gen-2',
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
            title: 'Kaiber',
            description: '人工智能视频创作平台，生成艺术化风格视频，可用于音乐视觉化',
            tags: ['艺术视频', '音乐可视化', '创意生成'],
            url: 'https://kaiber.ai/',
            subcategory: 'text_to_video',
            needsMagic: true
        },
        {
            title: 'Synthesia',
            description: '专业AI数字人视频生成平台，只需输入文本即可创建真人播报视频',
            tags: ['数字人', '真人播报', '企业宣传'],
            url: 'https://www.synthesia.io/',
            subcategory: 'text_to_video',
            needsMagic: true
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
            title: 'Pictory',
            description: '自动将长文本内容转换成短视频，适合内容创作者和营销人员',
            tags: ['长文转视频', '自动提取', '营销内容'],
            url: 'https://pictory.ai/',
            subcategory: 'text_to_video',
            needsMagic: true
        },
        {
            title: 'HeyGen',
            description: '高质量AI数字人视频生成平台，提供多语言和多场景的视频制作',
            tags: ['数字人播报', '多语言', '企业视频'],
            url: 'https://www.heygen.com/',
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
            url: 'https://www.deepbrain.io/',
            subcategory: 'text_to_video',
            needsMagic: true
        },
        
        // 图片生成视频
        {
            title: 'AnimateDiff',
            description: 'Stable Diffusion插件，可将静态图像转换为动态短视频或动画',
            tags: ['图片动画', 'SD插件', '开源工具'],
            url: 'https://huggingface.co/guoyww/animatediff',
            subcategory: 'image_to_video',
            needsMagic: true
        },
        {
            title: 'Morph Studio',
            description: '专注于将静态图像转换为流畅动画的AI平台，支持多种动画风格',
            tags: ['图像动画', '风格多样', '创意工具'],
            url: 'https://www.morphstudio.io/',
            subcategory: 'image_to_video',
            needsMagic: true
        },
        {
            title: 'Stable Video Diffusion',
            description: 'Stability AI开发的图像到视频转换模型，生成流畅短视频',
            tags: ['图像动画', '开源模型', '专业效果'],
            url: 'https://stability.ai/stable-video',
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
            title: 'Pika 1.0',
            description: '将单一图像延展为连贯视频，保持原图风格和细节',
            tags: ['图像延展', '连贯视频', '风格保持'],
            url: 'https://pika.art/',
            subcategory: 'image_to_video',
            needsMagic: true
        },
        {
            title: 'Moonvalley',
            description: '将静态图片转换为沉浸式动态场景，适合艺术创作',
            tags: ['场景动画', '艺术创作', '沉浸体验'],
            url: 'https://moonvalley.ai/',
            subcategory: 'image_to_video',
            needsMagic: true
        },
        {
            title: 'Zeroscope',
            description: '开源的图像到视频转换模型，可本地部署，适合开发者',
            tags: ['开源模型', '本地部署', '开发工具'],
            url: 'https://huggingface.co/cerspense/zeroscope_v2_576w',
            subcategory: 'image_to_video',
            needsMagic: true
        },
        
        // 视频编辑与增强
        {
            title: 'Adobe Premiere Pro AI',
            description: '专业视频编辑软件集成Firefly AI功能，支持智能剪辑和增强',
            tags: ['专业编辑', 'Adobe', 'Firefly集成'],
            url: 'https://www.adobe.com/products/premiere.html',
            subcategory: 'video_editing',
            needsMagic: true
        },
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
            url: 'https://www.hitpaw.com/video-enhancer.html',
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
            url: 'https://vrew.voyagerx.com/',
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
            url: 'https://www.deepbrain.io/solutions/studios',
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
        {
            title: 'Vidnami',
            description: '自动生成数字人视频内容，适合社交媒体和营销',
            tags: ['数字人', '社交视频', '自动生成'],
            url: 'https://vidnami.com/',
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
            url: 'https://www.opus.pro/opusclip',
            subcategory: 'short_video',
            needsMagic: true
        },
        {
            title: 'Vimeo AI工具',
            description: '专业视频平台提供的AI编辑和增强工具，提升创作效率',
            tags: ['专业平台', 'AI编辑', '创作辅助'],
            url: 'https://vimeo.com/features/ai-video-tools',
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
            url: 'https://www.synclabs.so/',
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
            title: 'Sora',
            description: 'OpenAI开发的文本到视频生成模型，可创建长达60秒的电影级视频',
            tags: ['电影级', 'OpenAI', '高质量'],
            url: 'https://openai.com/sora',
            subcategory: 'professional_video',
            needsMagic: true
        },
        {
            title: 'Luma AI',
            description: '3D场景生成和视频创作平台，支持逼真的环境和角色',
            tags: ['3D场景', '环境生成', '逼真效果'],
            url: 'https://lumalabs.ai/',
            subcategory: 'professional_video',
            needsMagic: true
        },
        {
            title: 'Wonder Dynamics',
            description: 'AI驱动的角色动画和特效工具，适合专业影视制作',
            tags: ['角色替换', '特效制作', '专业工具'],
            url: 'https://wonderdynamics.com/',
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
            title: '魔音工坊',
            description: '拟真人配音工具，提供高质量AI声音合成服务',
            tags: ['AI配音', '拟真人', '声音合成'],
            url: 'https://moyinai.com/',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: '讯飞智作',
            description: '科大讯飞的AI转语音和配音工具，拥有自然流畅的配音效果',
            tags: ['科大讯飞', '专业配音', '中文语音'],
            url: 'https://zhizuo.iflytek.com/',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: '琅琅配音',
            description: '智能文本转语音平台，支持多场景多音色配音需求',
            tags: ['多音色', '场景配音', '智能合成'],
            url: 'https://www.langlangvoice.com/',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: 'MiniMax 音频',
            description: '支持声音克隆的语音合成服务，可实现个性化声音定制',
            tags: ['声音克隆', '个性化', '语音合成'],
            url: 'https://api.minimax.chat/voice-demo',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: 'Reecho睿声',
            description: '超拟真中英文语音克隆/生成工具，提供高质量声音复制服务',
            tags: ['中英双语', '超拟真', '语音克隆'],
            url: 'https://www.reecho.cn/',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: '文字转语音',
            description: '完全免费的TTS工具，支持多种语言文本转语音',
            tags: ['免费工具', '多语言', '简易操作'],
            url: 'https://www.wenzihuale.com/',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: '语音合成制作器',
            description: '马克配音的免费TTS工具，简单易用的文本转语音服务',
            tags: ['免费服务', '简易使用', '多语言支持'],
            url: 'https://ttsmaker.com/',
            subcategory: 'tts',
            needsMagic: false
        },
        {
            title: '俄亥俄州洛沃',
            description: '支持500+声音和100种语言的AI语音合成平台',
            tags: ['多语言', '丰富音色', '广泛支持'],
            url: 'https://coqui.ai/',
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
            title: '播放.ht',
            description: '超真实AI语音生成工具，提供自然流畅的语音合成',
            tags: ['超真实', 'AI语音', '自然流畅'],
            url: 'https://play.ht/',
            subcategory: 'tts',
            needsMagic: true
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
            url: 'https://www.suno.ai/',
            subcategory: 'music_generation',
            needsMagic: true
        },
        {
            title: '海绵音乐',
            description: '字节跳动免费AI音乐平台，轻松创作原创音乐',
            tags: ['字节跳动', '免费音乐', '原创创作'],
            url: 'https://sponge.bytedance.com/',
            subcategory: 'music_generation',
            needsMagic: false
        },
        {
            title: '音疯',
            description: '昆仑万维一键生成原创歌曲工具，简单高效的音乐创作',
            tags: ['一键生成', '原创歌曲', '简单操作'],
            url: 'https://yinfun.ai/',
            subcategory: 'music_generation',
            needsMagic: false
        },
        {
            title: '穆雷克',
            description: '昆仑万维商用音乐创作平台，专业AI音乐制作工具',
            tags: ['商用音乐', '专业制作', 'AI创作'],
            url: 'https://www.musicfy.ai/',
            subcategory: 'music_generation',
            needsMagic: false
        },
        {
            title: '天谱乐',
            description: '多模态音乐生成大模型，提供全面的音乐创作解决方案',
            tags: ['多模态', '音乐大模型', '创作解决方案'],
            url: 'https://tianpule.com/',
            subcategory: 'music_generation',
            needsMagic: false
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
            url: 'https://y.qq.com/tme',
            subcategory: 'music_generation',
            needsMagic: false
        },
        {
            title: '稳定的音频',
            description: 'Stability AI音乐生成工具，创建高质量音乐内容',
            tags: ['Stability AI', '音乐生成', '高质量'],
            url: 'https://stability.ai/stable-audio',
            subcategory: 'music_generation',
            needsMagic: true
        },
        {
            title: '索诺托',
            description: '免费AI音乐生成平台，简单易用的音乐创作工具',
            tags: ['免费平台', '简易操作', 'AI音乐'],
            url: 'https://sonoptic.com/',
            subcategory: 'music_generation',
            needsMagic: true
        },
        {
            title: '天工SkyMusic',
            description: '昆仑万维AI音乐大模型，专业音乐创作平台',
            tags: ['昆仑万维', 'AI音乐', '大模型'],
            url: 'https://skymusic.kuaishou.com/',
            subcategory: 'music_generation',
            needsMagic: false
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
            url: 'https://pan.baidu.com/tingji',
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
            title: '备忘录',
            description: '免费语音转文字工具，方便记录和整理语音内容',
            tags: ['免费工具', '语音记录', '文字整理'],
            url: 'https://beiwanglu.com/',
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
            title: '快转字幕',
            description: '视频/语音转文字和字幕工具，一站式内容处理服务',
            tags: ['字幕工具', '视频转文字', '内容处理'],
            url: 'https://www.zhuanzi.ai/',
            subcategory: 'speech_to_text',
            needsMagic: false
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
            title: '大饼AI变声',
            description: '实时语音变声软件，多种声音效果转换',
            tags: ['实时变声', '多种效果', '语音处理'],
            url: 'https://www.dabing.ai/',
            subcategory: 'voice_conversion',
            needsMagic: false
        },
        {
            title: '超音变调',
            description: 'AI驱动实时语音变换工具，专业声音处理服务',
            tags: ['AI驱动', '实时变声', '专业处理'],
            url: 'https://uberduck.ai/',
            subcategory: 'voice_conversion',
            needsMagic: true
        },
        {
            title: '元语音',
            description: '实时变声工具，支持多种声音风格转换',
            tags: ['实时变声', '风格转换', 'Meta工具'],
            url: 'https://voice.meta.com/',
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
            title: 'Adobe 播客',
            description: 'AI音频录制和编辑工具，专业播客制作平台',
            tags: ['Adobe', '播客制作', 'AI编辑'],
            url: 'https://www.adobe.com/products/podcasts.html',
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
            title: 'ACE工作室',
            description: 'AI歌声合成工具，输入歌词生成歌曲',
            tags: ['歌声合成', '歌词转歌曲', 'AI演唱'],
            url: 'https://studio.ace.world/',
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
            title: '音响盒',
            description: 'Meta开源语音生成模型，创新音频技术平台',
            tags: ['Meta', '开源模型', '语音生成'],
            url: 'https://github.com/facebookresearch/audiobox',
            subcategory: 'other_audio_tools',
            needsMagic: true
        }
    ],
    
    // AI设计
    ai_design: [
        // 平面与电商设计
        // 电商营销工具
        {
            title: '绘蛙',
            description: '商品图/文案生成工具，帮助电商卖家快速创建产品宣传素材',
            tags: ['商品图', '文案生成', '电商营销'],
            url: 'https://huiwa.com/',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: '鹿班',
            description: '阿里智能设计平台，专为电商卖家提供智能创意设计服务',
            tags: ['阿里', '智能设计', '电商图片'],
            url: 'https://luban.aliyun.com/',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: 'Pic Copilot',
            description: '阿里国际电商设计工具，自动生成适合跨境电商的图片设计',
            tags: ['阿里', '跨境电商', '智能设计'],
            url: 'https://www.alibabacloud.com/products/pic-copilot',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: '羚珑',
            description: '京东商品图设计平台，为电商商家提供智能设计解决方案',
            tags: ['京东', '商品图', '智能设计'],
            url: 'https://linglong.jd.com/',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: '灵动AI',
            description: '智能商品图生成工具，一键创建电商主图和详情页',
            tags: ['商品图', '主图生成', '详情页'],
            url: 'https://lingdongai.com/',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: 'PhotoMagic',
            description: '商拍图片生成平台，AI智能生成产品宣传照片',
            tags: ['商品拍摄', '宣传照', 'AI生成'],
            url: 'https://photomagic.ai/',
            subcategory: 'commerce_design',
            needsMagic: true
        },
        
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
            url: 'https://www.gaoding.com/ai',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: '创客贴AI',
            description: '在线智能设计平台，支持海报、名片、宣传页等多种设计需求',
            tags: ['智能设计', '在线平台', '多样模板'],
            url: 'https://www.chuangkit.com/ai',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: '美图设计室',
            description: 'AI图像创作平台，提供智能海报设计和图片美化功能',
            tags: ['美图', 'AI创作', '图片美化'],
            url: 'https://design.meitu.com/',
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
        {
            title: '易可图',
            description: '免费海报编辑工具，支持快速创建和定制化设计',
            tags: ['免费', '海报编辑', '快速设计'],
            url: 'https://www.yiketool.com/',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        
        // LOGO与品牌设计
        {
            title: 'Looka',
            description: 'AI生成LOGO设计平台，提供品牌标识和视觉设计',
            tags: ['AI生成', 'LOGO设计', '品牌标识'],
            url: 'https://looka.com/',
            subcategory: 'commerce_design',
            needsMagic: true
        },
        {
            title: 'Logoai',
            description: '智能品牌LOGO设计工具，自动生成专业标志',
            tags: ['品牌LOGO', '智能设计', '自动生成'],
            url: 'https://www.logoai.com/',
            subcategory: 'commerce_design',
            needsMagic: true
        },
        {
            title: '阿里云智能LOGO设计',
            description: '阿里云提供的智能LOGO设计服务，帮助企业快速建立品牌形象',
            tags: ['阿里云', 'LOGO设计', '品牌形象'],
            url: 'https://www.aliyun.com/activity/creation/intelligent-logo',
            subcategory: 'commerce_design',
            needsMagic: false
        },
        {
            title: 'AIDesign',
            description: '腾讯推出的免费LOGO设计工具，支持多种行业和风格',
            tags: ['腾讯', '免费LOGO', '多风格'],
            url: 'https://ailogo.qq.com/',
            subcategory: 'commerce_design',
            needsMagic: false
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
            title: 'Creatie',
            description: 'AI驱动的UI/UX设计工具，提供智能设计建议和自动生成',
            tags: ['AI驱动', 'UI/UX', '智能设计'],
            url: 'https://www.creatie.ai/',
            subcategory: 'ui_ux',
            needsMagic: true
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
            title: 'Galileo AI',
            description: '高保真UI原型设计工具，通过文本描述生成精细界面',
            tags: ['高保真', '原型设计', '文本生成'],
            url: 'https://www.usegalileo.ai/',
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
            title: 'IconifyAI',
            description: 'App图标生成工具，创建一致风格的应用图标集',
            tags: ['App图标', '风格一致', '图标集'],
            url: 'https://iconify.ai/',
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
        {
            title: 'Magician',
            description: 'Figma图标插件，自动生成符合设计系统的图标',
            tags: ['Figma插件', '图标生成', '设计系统'],
            url: 'https://magician.design/',
            subcategory: 'illustration',
            needsMagic: true
        },
        
        // 3D与模型设计
        // 3D建模与渲染
        {
            title: 'VoxCraft',
            description: 'AI生成3D模型工具，通过文本描述创建三维物体',
            tags: ['生成3D', '文本描述', '三维物体'],
            url: 'https://voxcraft.ai/',
            subcategory: 'model_design',
            needsMagic: true
        },
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
        {
            title: 'Meshy',
            description: '文本或图像生成3D模型的工具，适用于游戏和设计',
            tags: ['文本生成', '3D模型', '游戏设计'],
            url: 'https://www.meshy.ai/',
            subcategory: 'model_design',
            needsMagic: true
        },
        {
            title: 'Dora AI',
            description: '3D动画生成平台，创建沉浸式体验和交互内容',
            tags: ['3D动画', '沉浸式', '交互内容'],
            url: 'https://www.dora.run/',
            subcategory: 'model_design',
            needsMagic: true
        },
        
        // 建筑与家居设计
        {
            title: '酷家乐AI',
            description: '智能家居设计平台，提供一站式室内设计解决方案',
            tags: ['家居设计', '室内设计', '一站式'],
            url: 'https://www.kujiale.com/ai',
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
            url: 'https://www.vizcom.ai/',
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
            title: '简单设计',
            description: '在线图片处理工具，提供多种图像编辑和优化功能',
            tags: ['在线处理', '图片编辑', '多功能'],
            url: 'https://www.ijiantu.com/',
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
        {
            title: 'ColorHunter',
            description: 'AI调色工具，学习用户偏好生成个性化配色',
            tags: ['AI调色', '个性化', '用户偏好'],
            url: 'https://colorhunter.ai/',
            subcategory: 'assistant_tools',
            needsMagic: true
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
            title: 'Fable Prism',
            description: 'AI驱动的动效设计工具，简化动画创作流程',
            tags: ['动效设计', 'AI驱动', '动画创作'],
            url: 'https://fable.app/prism',
            subcategory: 'special_tools',
            needsMagic: true
        },
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
        }
    ],
    
    // AI编程
    ai_coding: [
        // 代码生成与补全
        {
            title: 'GitHub Copilot',
            description: 'GitHub推出的AI编程助手，提供代码补全和生成功能',
            tags: ['GitHub', '代码补全', 'AI助手'],
            url: 'https://github.com/features/copilot',
            subcategory: 'code_generation',
            needsMagic: true
        },
        {
            title: 'Codeium',
            description: 'AI驱动的代码补全工具，支持多种编程语言和IDE',
            tags: ['代码补全', '多语言支持', '智能编程'],
            url: 'https://codeium.com/',
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
            title: 'CodeWhisperer',
            description: '亚马逊推出的AI代码生成工具，提供智能代码补全',
            tags: ['亚马逊', '代码生成', 'AWS'],
            url: 'https://aws.amazon.com/codewhisperer/',
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
            url: 'https://tongyi.aliyun.com/lingma',
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
            url: 'https://www.cognition.ai/devin',
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
            title: '码上飞',
            description: 'AI驱动的应用自动生成平台，提升开发效率',
            tags: ['应用生成', '开发效率', 'AI编程'],
            url: 'https://www.mashangfei.com/',
            subcategory: 'fullstack_dev',
            needsMagic: false
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
            url: 'https://www.microsoft.com/en-us/ai/ai-lab-sketch2code',
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
            title: 'Deco',
            description: '京东开发的设计稿转多端代码工具，支持多平台',
            tags: ['京东', '设计转代码', '多端开发'],
            url: 'https://deco-preview.jd.com/',
            subcategory: 'design_to_code',
            needsMagic: false
        },
        {
            title: 'Quest AI',
            description: '将设计稿自动转换为React代码的AI工具',
            tags: ['设计转代码', 'React', 'AI转换'],
            url: 'https://www.quest.ai/',
            subcategory: 'design_to_code',
            needsMagic: true
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
            title: 'CodiumAI',
            description: '代码测试分析工具，自动生成测试用例',
            tags: ['代码测试', '测试生成', 'AI分析'],
            url: 'https://www.codium.ai/',
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
            title: 'Lovable',
            description: '对话式Web开发工具，通过自然语言创建网站',
            tags: ['对话式开发', 'Web开发', '自然语言'],
            url: 'https://www.lovable.ai/',
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
        
        // 低代码/无代码平台
        {
            title: 'Solo',
            description: 'Mozilla开发的无代码建站平台，简化网站创建过程',
            tags: ['Mozilla', '无代码', '建站平台'],
            url: 'https://solo.build/',
            subcategory: 'low_code',
            needsMagic: true
        },
        {
            title: 'Hocoos',
            description: 'AI驱动的网站构建平台，快速创建专业网站',
            tags: ['AI建站', '网站构建', '专业设计'],
            url: 'https://www.hocoos.com/',
            subcategory: 'low_code',
            needsMagic: true
        },
        {
            title: 'Debuild',
            description: '低代码网页开发平台，简化Web应用创建',
            tags: ['低代码', '网页开发', 'Web应用'],
            url: 'https://debuild.co/',
            subcategory: 'low_code',
            needsMagic: true
        },
        
        // 云端IDE与编辑器
        {
            title: 'Cursor',
            description: 'AI驱动的代码编辑器，提供智能编码辅助',
            tags: ['AI编辑器', '代码智能', '编程辅助'],
            url: 'https://cursor.sh/',
            subcategory: 'cloud_ide',
            needsMagic: true
        },
        {
            title: 'Project IDX',
            description: '谷歌开发的云端IDE，支持多种编程语言和框架',
            tags: ['谷歌', '云端IDE', '多语言支持'],
            url: 'https://developers.google.com/idx',
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
            subcategory: ['prompt_platforms'],
            needsMagic: true
        },
        {
            title: 'FlowGPT',
            description: '社区驱动的提示词分享平台，含大量实战案例（如写作、编程、设计）。',
            tags: ['提示词分享', '社区驱动', '实战案例'],
            url: 'https://flowgpt.com',
            subcategory: ['prompt_platforms'],
            needsMagic: true
        },
        {
            title: 'PromptHero',
            description: '专注于AI生成内容的提示词库，尤其适合Stable Diffusion和MidJourney用户。',
            tags: ['AI生成内容', 'Stable Diffusion', 'MidJourney'],
            url: 'https://prompthero.com',
            subcategory: ['prompt_platforms'],
            needsMagic: true
        },
        {
            title: 'PromptBase',
            description: '提示词交易市场，可购买/出售高质量提示，涵盖DALL·E、ChatGPT等。',
            tags: ['提示词交易', '高质量提示', 'DALL·E'],
            url: 'https://promptbase.com',
            subcategory: ['prompt_platforms'],
            needsMagic: true
        },
        
        // Stable Diffusion专属工具
        {
            title: 'Stable Diffusion Prompt Book',
            description: '官方提示词手册，包含风格模板和参数详解。',
            tags: ['提示词手册', '风格模板', '参数详解'],
            url: 'https://github.com/search?q=Stable-Diffusion-Prompt-Book',
            subcategory: ['sd_tools'],
            needsMagic: true
        },
        {
            title: 'PublicPrompts',
            description: '开源提示词库，适合艺术创作和设计灵感。',
            tags: ['开源提示词', '艺术创作', '设计灵感'],
            url: 'https://publicprompts.art',
            subcategory: ['sd_tools'],
            needsMagic: true
        },
        {
            title: 'MJ Prompt Tool',
            description: 'MidJourney专用提示生成器，支持风格、灯光等参数调节。',
            tags: ['MidJourney', '提示生成器', '参数调节'],
            url: 'https://mjprompttool.com',
            subcategory: ['sd_tools'],
            needsMagic: true
        },
        
        // ChatGPT提示优化
        {
            title: 'Awesome ChatGPT Prompts',
            description: 'GitHub开源项目，提供可直接复用的对话模板（如模拟Linux终端、编剧助手）。',
            tags: ['开源项目', '对话模板', 'ChatGPT'],
            url: 'https://github.com/search?q=awesome-chatgpt-prompts',
            subcategory: ['chatgpt_prompts'],
            needsMagic: true
        },
        {
            title: 'ChatGPT Shortcut',
            description: '中文快捷指令库，分类明确（写作、营销、编程等），一键调用。',
            tags: ['中文指令库', '快捷调用', '分类明确'],
            url: 'https://newzone.top/chatgpt-shortcuts',
            subcategory: ['chatgpt_prompts'],
            needsMagic: false
        },
        {
            title: 'AIPRM',
            description: 'ChatGPT浏览器插件，内置数百个预设提示词（SEO、数据分析等）。',
            tags: ['浏览器插件', '预设提示词', 'SEO'],
            url: 'https://aiprm.com',
            subcategory: ['chatgpt_prompts'],
            needsMagic: true
        },
        
        // 可视化提示工具
        {
            title: 'Visual Prompt Builder',
            description: '通过拖拽生成复杂提示词，适合图像生成模型。',
            tags: ['拖拽生成', '复杂提示词', '图像生成'],
            url: 'https://viaualpromptbuilder.com',
            subcategory: ['visual_tools'],
            needsMagic: true
        },
        {
            title: 'Generrated',
            description: 'DALL·E 2提示词设计指南，附案例解析。',
            tags: ['DALL·E 2', '提示词设计', '案例解析'],
            url: 'https://generrated.com/guides',
            subcategory: ['visual_tools'],
            needsMagic: true
        },
        
        // 中文特色资源
        {
            title: '词魂',
            description: '中文AIGC提示词库，聚焦本土化场景（如电商文案、短视频脚本）。',
            tags: ['中文提示词', '本土化场景', '电商文案'],
            url: 'https://cihun.com',
            subcategory: ['chinese_resources'],
            needsMagic: false
        },
        {
            title: 'AI Short',
            description: '中文精简提示词生成器，输入关键词快速输出优化指令。',
            tags: ['中文生成器', '精简提示词', '关键词优化'],
            url: 'https://aishort.top',
            subcategory: ['chinese_resources'],
            needsMagic: false
        },
        {
            title: 'LangGPT',
            description: '针对中文大模型的提示工程技术指南，含角色设定模板。',
            tags: ['中文大模型', '提示工程', '角色设定'],
            url: 'https://github.com/search?q=LangGPT',
            subcategory: ['chinese_resources'],
            needsMagic: true
        },
        
        // 其他实用工具
        {
            title: 'ClickPrompt',
            description: '可视化提示词工作流工具，支持团队协作。',
            tags: ['工作流工具', '团队协作', '可视化'],
            url: 'https://clickprompt.org',
            subcategory: ['other_tools'],
            needsMagic: true
        },
        {
            title: 'Snack Prompt',
            description: '极简提示词生成器，适合快速实验。',
            tags: ['极简生成器', '快速实验', '提示词'],
            url: 'https://snackprompt.com',
            subcategory: ['other_tools'],
            needsMagic: true
        },
        {
            title: 'PromptVine',
            description: '用户共享的提示词库，含评分系统。',
            tags: ['用户共享', '提示词库', '评分系统'],
            url: 'https://promptvine.com',
            subcategory: ['other_tools'],
            needsMagic: true
        }
    ],
    
    // 合租平台
    rent: [
        {
            title: '银河录像局',
            description: 'AI账号共享平台，提供各类AI工具的账号共享服务',
            tags: ['AI账号', '共享平台', '账号合租'],
            url: 'https://nf.video/wKHLL',
            subcategory: ['ai-account'],
            isRecommended: true
        },
        {
            title: '海外客',
            description: 'AI账号共享平台，提供各类AI工具的账号共享服务',
            tags: ['AI账号', '共享平台', '账号合租'],
            url: 'https://www.haiwaike.com/',
            subcategory: ['ai-account'],
            isRecommended: true
        },
        {
            title: 'SEO工具团购-淘宝',
            description: 'SEO工具团购平台，提供各类SEO工具的团购服务',
            tags: ['SEO工具', '团购平台', '工具合租'],
            url: 'https://s.taobao.com/search?commend=all&ie=utf8&initiative_id=tbindexz_20170306&page=1&q=seo%E5%9B%A2%E8%B4%AD&search_type=item&sourceId=tb.index&spm=a21bo.jianhua%2Fa.search_manual.0&ssid=s5-e&tab=all/',
            subcategory: ['software-account'],
            isRecommended: true
        },
        
        {
            title: '银河录像局',
            description: '社交媒体账号共享平台，提供各类社交媒体账号的共享服务',
            tags: ['社交媒体', '账号共享', '合租平台'],
            url: 'https://nf.video/wKHLL',
            subcategory: ['social-account'],
            isRecommended: true
        },
        {
            title: '野火',
            description: '软件账号共享平台，提供各类软件工具的账号共享服务',
            tags: ['软件账号', '共享平台', '合租服务'],
            url: 'https://yeka.ai/',
            subcategory: ['software-account'],
            isRecommended: true
        },
        {
            title: '环球巴士',
            description: 'AI账号共享平台，提供各类AI工具的账号共享服务',
            tags: ['AI账号', '共享平台', '账号合租'],
            url: 'https://universalbus.cn/?s=X5U8JppXcf',
            subcategory: ['ai-account'],
            isRecommended: true
        }
    ],
    
    // 学习社区
    study: [
        {
            title: 'AI星河',
            description: 'AI爱好者的分享',
            tags: ['AI', 'CHATGPT'],
            url: 'https://www.ziroom.com/',
            subcategory: ['wechatblogger'],
            isRecommended: true
        },
        {
            title: '视频号博主',
            description: '视频AI',
            tags: ['视频', 'AI'],
            url: 'https://www.ke.com/',
            subcategory: ['wechatvideoblogger']
        },
        {
            title: '生财有术',
            description: '致富社群',
            tags: ['生财有书', 'AI学习'],
            url: 'https://scys.com/',
            subcategory: ['studygroup']
        },
        {
            title: '通往AGI之路',
            description: '通往AGI之路',
            tags: ['通往AGI之路', 'AI学习'],
            url: 'https://waytoagi.feishu.cn/wiki/QPe5w5g7UisbEkkow8XcDmOpn8e',
            subcategory: ['articlecollection']
        },
        {
            title: 'KA21工具导航',
            description: 'KA21工具导航',
            tags: ['KA21工具导航', 'AI学习'],
            url: 'https://ka21.voidcool.top/',
            subcategory: ['articlecollection']
        }
        
        
    ]
}; 

// AI提示词工具数据
const aiPromptsData = [
    // 数据将通过JavaScript动态添加
];

// AI搜索工具数据
const aiSearchData = [
    // 综合类AI搜索引擎
    {
        name: "夸克AI",
        description: "阿里旗下，集成AI搜索、网盘、文档编辑、内容创作的一体化应用",
        url: "https://quark.cn",
        tags: ["阿里", "一体化应用"],
        subcategory: ["general_search"]
    },
    {
        name: "Perplexity AI",
        description: "强交互的对话式AI搜索引擎，支持溯源和实时网络检索",
        url: "https://www.perplexity.ai/",
        tags: ["对话式搜索", "溯源"],
        subcategory: ["general_search"]
    },
    {
        name: "百度文心一言",
        description: "百度推出的AI搜索服务，提供中文内容理解和生成能力",
        url: "https://yiyan.baidu.com/",
        tags: ["百度", "中文搜索"],
        subcategory: ["general_search"]
    },
    
    // 学术科研类
    {
        name: "Consensus",
        description: "专注学术研究的AI搜索引擎，搜索和总结科学论文",
        url: "https://consensus.app/",
        tags: ["学术研究", "论文搜索"],
        subcategory: ["academic_search"]
    },
    {
        name: "Elicit",
        description: "AI研究助手，帮助查找相关论文并总结研究发现",
        url: "https://elicit.org/",
        tags: ["研究工具", "论文分析"],
        subcategory: ["academic_search"]
    },
    {
        name: "Scholar Chat",
        description: "基于学术论文的AI聊天工具，提供有科学依据的回答",
        url: "https://scholarchat.io/",
        tags: ["学术问答", "研究助手"],
        subcategory: ["academic_search"]
    },
    {
        name: "ResearchRabbit",
        description: "学术文献发现工具，可视化引用关系和相关研究",
        url: "https://www.researchrabbit.ai/",
        tags: ["文献发现", "引用分析"],
        subcategory: ["academic_search"]
    },
    {
        "name": "Lumina",
        "logo": "https://lumina.com/favicon.ico",
        "description": "完全免费的AI学术搜索引擎，覆盖论文、期刊等资源，支持一键生成文献综述",
        "url": "https://lumina.com",
        "tags": ["学术搜索", "论文检索"],
        "subcategory": ["academic_search"]
    },
    {
        "name": "AMiner",
        "logo": "https://www.aminer.cn/favicon.ico",
        "description": "智谱AI推出的学术平台，基于大模型提供学者画像、论文推荐和趋势分析",
        "url": "https://www.aminer.cn",
        "tags": ["学术图谱", "科研分析"],
        "subcategory": ["academic_search"]
    },
    
    {
        "name": "Consensus",
        "logo": "https://consensus.app/favicon.ico",
        "description": "直接链接科研论文结论的AI工具，用问答形式快速获取可信赖的研究答案",
        "url": "https://consensus.app",
        "tags": ["科研问答", "论文摘要"],
        "subcategory": ["academic_search"]
    },
    
    {
        "name": "Devv",
        "logo": "https://devv.ai/favicon.ico",
        "description": "专为程序员设计的新一代搜索引擎，支持代码片段搜索和API文档直达",
        "url": "https://devv.ai",
        "tags": ["代码搜索", "开发者工具"],
        "subcategory": ["programming_search"]
    },
    
    {
        "name": "AlphaSense",
        "logo": "https://www.alphasese.com/favicon.ico",
        "description": "金融专业人士专用的AI平台，整合财报、新闻和行业分析数据",
        "url": "https://www.alphasese.com",
        "tags": ["金融数据", "行业分析"],
        "subcategory": ["finance_search"]
    },
    
    {
        "name": "点点（小红书）",
        "logo": "https://www.xiaohongshu.com/favicon.ico",
        "description": "小红书推出的生活场景AI搜索，涵盖美食、旅行、购物等实用推荐",
        "url": "https://www.xiaohongshu.com",
        "tags": ["生活推荐", "场景搜索"],
        "subcategory": ["life_search"]
    },
    
    {
        "name": "Flowith",
        "logo": "https://flowith.com/favicon.ico",
        "description": "节点式交互AI工具，通过可视化图谱连接搜索与对话内容",
        "url": "https://flowith.com",
        "tags": ["可视化搜索", "知识图谱"],
        "subcategory": ["innovative_search"]
    },
    
    {
        "name": "Exa AI",
        "logo": "https://exa.ai/favicon.ico",
        "description": "专为AI模型设计的搜索引擎，优化了RAG（检索增强生成）效果",
        "url": "https://exa.ai",
        "tags": ["AI开发", "模型训练"],
        "subcategory": ["tech_search"]
    },
    
    {
        "name": "纳米搜索（360）",
        "logo": "https://ai.360.cn/favicon.ico",
        "description": "360推出的AI搜索，可将文本结果自动生成短视频摘要",
        "url": "https://ai.360.cn",
        "tags": ["视频生成", "多媒体搜索"],
        "subcategory": ["special_search"]
    },
    
    // 编程开发类
    {
        name: "Phind",
        description: "专为开发者设计的AI搜索引擎，能解答复杂的编程问题",
        url: "https://www.phind.com/",
        tags: ["编程", "开发工具"],
        subcategory: ["programming_search"]
    },
    {
        name: "Bloop",
        description: "代码搜索引擎，理解语义并提供上下文相关的代码结果",
        url: "https://bloop.ai/",
        tags: ["代码搜索", "语义理解"],
        subcategory: ["programming_search"]
    },
    {
        name: "Devv",
        description: "开发者专用AI搜索，提供代码示例和技术解决方案",
        url: "https://devv.ai/",
        tags: ["代码示例", "技术解决方案"],
        subcategory: ["programming_search"]
    },
    {
        name: "AskCodi",
        description: "编程问答助手，提供即时代码建议和解决方案",
        url: "https://www.askcodi.com/",
        tags: ["编程问答", "代码建议"],
        subcategory: ["programming_search"]
    },
    
    // 金融/商业类
    {
        name: "Bloomberg AI",
        description: "彭博社的AI搜索，提供金融市场分析和数据解读",
        url: "https://www.bloomberg.com/ai",
        tags: ["金融市场", "数据分析"],
        subcategory: ["finance_search"]
    },
    {
        name: "Financial Chat",
        description: "专注金融领域问答的AI工具，提供投资建议和市场分析",
        url: "https://www.financialchat.ai/",
        tags: ["投资建议", "金融分析"],
        subcategory: ["finance_search"]
    },
    {
        name: "Stockwise AI",
        description: "股票市场AI搜索，分析公司财报和市场趋势",
        url: "https://www.stockwise.ai/",
        tags: ["股票分析", "市场趋势"],
        subcategory: ["finance_search"]
    },
    {
        name: "Finology Ticker",
        logo: "favicon/Finology Ticker.svg", 
        description: "印度市场股票分析工具，提供AI驱动的市场洞察",
        url: "https://ticker.finology.in/",
        tags: ["股票", "市场洞察"],
        subcategory: ["finance_search"]
    },
    
    // 生活娱乐类
    {
        name: "Copilot.travel",
        description: "AI旅行规划助手，帮助规划旅程、寻找景点和制定行程",
        url: "https://www.copilot.travel/",
        tags: ["旅行规划", "行程助手"],
        subcategory: ["life_search"]
    },
    {
        name: "RecipeGPT",
        description: "AI菜谱搜索引擎，根据食材和偏好推荐菜谱",
        url: "https://www.recipegpt.com/",
        tags: ["菜谱", "烹饪"],
        subcategory: ["life_search"]
    },
    {
        name: "Tripnotes",
        description: "AI旅行笔记助手，个性化旅行建议和攻略",
        url: "https://tripnotes.ai/",
        tags: ["旅行笔记", "个性化攻略"],
        subcategory: ["life_search"]
    },
    {
        name: "MovieGPT",
        description: "AI电影推荐搜索，根据观影偏好推荐电影",
        url: "https://www.moviegpt.com/",
        tags: ["电影推荐", "娱乐"],
        subcategory: ["life_search"]
    },
    
    // 产品/公司类
    {
        name: "Producthunt AI Tools",
        description: "专注发现新兴AI产品和工具的平台",
        url: "https://www.producthunt.com/topics/artificial-intelligence",
        tags: ["产品发现", "AI工具"],
        subcategory: ["product_search"]
    },
    {
        name: "SimilarWeb AI",
        description: "AI驱动的公司和网站流量分析工具",
        url: "https://www.similarweb.com/",
        tags: ["网站分析", "竞争情报"],
        subcategory: ["product_search"]
    },
    {
        name: "Crunchbase",
        description: "公司信息和投资数据搜索平台，集成AI搜索功能",
        url: "https://www.crunchbase.com/",
        tags: ["公司信息", "投资数据"],
        subcategory: ["product_search"]
    },
    {
        name: "G2 AI Tool Finder",
        description: "专业AI工具评估和比较平台，基于真实用户评价",
        url: "https://www.g2.com/categories/ai-tools",
        tags: ["工具评估", "用户评价"],
        subcategory: ["product_search"]
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
    
    // 加载合租平台数据
    loadRentSites();
    
    // 加载学习社区数据
    loadStudySites();
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

// 加载学习社区
function loadStudySites() {
    loadSitesByCategory(sitesData.study, 'study-grid');
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
            grid.innerHTML += createSiteCard({
                title: site.name,
                description: site.description,
                url: site.url,
                tags: site.tags || [],
                subcategory: site.subcategory || ''
            });
        });
    }
}

// 从localStorage获取数据或使用默认数据
function getSitesData() {
    // 尝试从localStorage获取数据
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    const sites = JSON.parse(localStorage.getItem('sites')) || [];
    
    // 返回处理后的数据
    return {
        categories: categories,
        sites: sites
    };
}

// 导出数据供其他JS文件使用
window.sitesData = getSitesData();

// ... existing code ...

// 加载电商平台数据
function loadEcommerceSites() {
    loadSitesByCategory(sitesData.ecommerce, 'ecommerce-grid');
}

// 加载社交平台数据
function loadSocialSites() {
    loadSitesByCategory(sitesData.social, 'social-grid');  
}

// 加载SEO工具数据
function loadWebsiteTools() {
    loadSitesByCategory(sitesData.website, 'website-tools-grid');
}

// 加载AI对话工具数据
function loadAiChatTools() {
    loadSitesByCategory(sitesData.ai_chat, 'ai-chat-grid');
}

// 加载AI写作工具数据
function loadAiWritingTools() {
    loadSitesByCategory(sitesData.ai_writing, 'ai-writing-grid');
}

// 加载AI图像工具数据
function loadAiImageTools() {
    loadSitesByCategory(sitesData.ai_image, 'ai-image-grid');
}

// 加载AI视频工具数据
function loadAiVideoTools() {
    loadSitesByCategory(sitesData.ai_video, 'ai-video-grid');
}

// 加载AI音频工具数据
function loadAiAudioTools() {
    loadSitesByCategory(sitesData.ai_audio, 'ai-audio-grid');
}

// 加载AI设计工具数据
function loadAiDesignTools() {
    loadSitesByCategory(sitesData.ai_design, 'ai-design-grid');
}

// 加载AI编程工具数据
function loadAiCodingTools() {
    loadSitesByCategory(sitesData.ai_coding, 'ai-coding-grid');
}

// 加载AI提示词工具
function loadAiPromptsTools() {
    loadSitesByCategory(aiPromptsData, 'ai-prompts-grid');
}

// 加载AI搜索工具
function loadAiSearchTools() {
    loadSitesByCategory(aiSearchData, 'ai-search-grid');
}

// 加载合租平台数据
function loadRentSites() {
    loadSitesByCategory(sitesData.rent, 'rent-grid');
}

// ... existing code ...