// 创建网站卡片
function createSiteCard(site) {
    // 确定当前语言
    const isEnglish = getCurrentLanguage() === 'en';
    
    // 检查网站是否需要VPN访问
    const needsMagic = site.needsMagic || site.tags.includes('魔法');
    // 如果是英文模式，则不显示魔法标签
    const magicTag = !isEnglish && needsMagic ? `<div class="magic-tag">${getText('magic_tag')}</div>` : '';
    
    // 检查网站是否为推荐网站
    const isRecommended = site.isRecommended || site.isPopular || site.tags.includes('推荐');
    const recommendTag = isRecommended ? `<div class="recommend-tag"><i class="bi bi-star-fill"></i> ${getText('recommend_tag')}</div>` : '';
    
    // 准备英文描述属性
    const descriptionEnAttr = site.descriptionEn ? `data-description-en="${site.descriptionEn.replace(/"/g, '&quot;')}"` : '';
    
    // 准备英文标题属性
    const titleEnAttr = site.titleEn ? `data-title-en="${site.titleEn.replace(/"/g, '&quot;')}"` : '';
    
    // 根据当前语言选择显示的标签
    let displayTags = site.tags;
    if (isEnglish && site.tagsEn && site.tagsEn.length > 0) {
        displayTags = site.tagsEn;
    } else if (isEnglish) {
        // 英文模式但没有英文标签时，尝试翻译常见标签
        displayTags = site.tags.map(tag => translateTag(tag));
    }
    
    const displayTitle = isEnglish && site.titleEn ? site.titleEn : site.title;
    const displayDescription = isEnglish && site.descriptionEn ? site.descriptionEn : site.description;

    // 获取访问按钮文本
    const visitButtonText = getText('visit_button');
    const visitLinkTitle = escapeHtmlAttribute(`${visitButtonText} - ${displayTitle}`);
    
    return `
        <div class="site-card" data-subcategory="${site.subcategory || ''}" ${descriptionEnAttr} ${titleEnAttr} style="position: relative;"
             itemscope itemtype="https://schema.org/WebSite">
            ${magicTag}
            ${recommendTag}
            <div class="card-content">
                <div class="card-header">
                    <div class="site-title" itemprop="name">${displayTitle}</div>
                </div>
                <div class="site-desc" itemprop="description">${displayDescription}</div>
                <div class="site-tags">
                    ${displayTags.slice(0, 3).map(tag => `<span class="site-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="card-footer">
                <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="visit-btn"
                   title="${visitLinkTitle}" aria-label="${visitLinkTitle}" itemprop="url">
                    ${visitButtonText} <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    `;
}

function escapeHtmlAttribute(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// 翻译常见标签到英文
function translateTag(tag) {
    const tagTranslations = {
        '亚马逊': 'Amazon',
        '卖家平台': 'Seller Platform',
        '跨境电商': 'Cross-border',
        '数据分析': 'Analytics',
        '品牌': 'Brand',
        '美国站': 'US Store',
        '消费者平台': 'Consumer',
        '卖家后台': 'Seller Backend',
        '英国站': 'UK Store',
        '日本站': 'Japan Store',
        '德国站': 'Germany Store',
        '法国站': 'France Store',
        '意大利站': 'Italy Store',
        '加拿大站': 'Canada Store',
        '澳洲站': 'Australia Store',
        '西班牙站': 'Spain Store',
        '墨西哥站': 'Mexico Store',
        '排行榜': 'Rankings',
        '新品': 'New Products',
        '销量': 'Sales',
        '飙升': 'Trending',
        '速卖通': 'AliExpress',
        '社交媒体': 'Social Media',
        '关键词': 'Keywords',
        '工具': 'Tools',
        '营销': 'Marketing',
        '研究': 'Research',
        '人工智能': 'AI',
        '图像生成': 'Image Generation',
        '文本生成': 'Text Generation',
        '视频制作': 'Video Creation',
        '音频处理': 'Audio Processing',
        '设计': 'Design',
        '编程': 'Programming',
        '学习资源': 'Learning',
        '推荐': 'Recommended',
        '免费': 'Free',
        '付费': 'Paid',
        '高级版': 'Premium',
        '魔法': '',
        '分析工具': 'Analytics',
        '排名': 'Ranking',
        '商业': 'Business',
        '电商': 'E-commerce',
        '购物': 'Shopping',
        '网站工具': 'Web Tools',
        '广告': 'Ads',
        '搜索引擎': 'Search Engine',
        '监控': 'Monitoring',
        '自动化': 'Automation',
        '流量': 'Traffic',
        '域名': 'Domain',
        '服务器': 'Server',
        '建站': 'Web Building',
        '社交': 'Social',
        '平台': 'Platform',
        '跨境': 'Cross-border',
        '在线学习': 'Online Learning',
        '建站教程': 'Website Tutorials',
        '电商技能': 'E-commerce Skills',
        '内容优化': 'Content Optimization',
        '英文校对': 'English Proofreading',
        '写作助手': 'Writing Assistant',
        'AI写作': 'AI Writing',
        '内容创作': 'Content Creation',
        '营销文案': 'Marketing Copy',
        '对话AI': 'Conversational AI',
        '自然语言处理': 'NLP',
        '信息检索': 'Information Retrieval',
        '访问': 'Visit',
        '在线教育': 'Online Education',
        '学习平台': 'Learning Platform',
        '多媒体': 'Multimedia',
        '视频教程': 'Video Tutorials',
        '专业课程': 'Professional Courses',
        '技能提升': 'Skill Enhancement',
        '语言学习': 'Language Learning',
        '写作工具': 'Writing Tools',
        '语法检查': 'Grammar Check',
        '拼写检查': 'Spell Check',
        '文章润色': 'Content Polishing',
        '专业写作': 'Professional Writing',
        '创意写作': 'Creative Writing',
        '内容管理': 'Content Management',
        '企业服务': 'Business Services',
        '沟通工具': 'Communication Tools',
        '协作平台': 'Collaboration Platform',
        '数据可视化': 'Data Visualization',
        '商业分析': 'Business Analytics',
        '人力资源': 'HR Resources',
        '客户服务': 'Customer Service',
        '项目管理': 'Project Management',
        '开发工具': 'Development Tools',
        '产品设计': 'Product Design',
        '用户体验': 'User Experience',
        '用户界面': 'User Interface',
        '网页设计': 'Web Design',
        '响应式设计': 'Responsive Design',
        '移动应用': 'Mobile Apps',
        '云服务': 'Cloud Services',
        '网络安全': 'Cybersecurity',
        '数据备份': 'Data Backup',
        '系统集成': 'System Integration'
    };
    
    return tagTranslations[tag] || tag;
}

// 从URL中提取域名
function extractDomain(url) {
    try {
        // 处理没有协议前缀的URL
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        
        const hostname = new URL(url).hostname;
        return hostname;
    } catch (e) {
        // 如果URL解析失败，返回原始输入
        console.error('URL解析错误:', e);
        return url.replace(/^https?:\/\//, '').split('/')[0];
    }
}

// 创建展开/收起按钮
function createMoreSitesButton(sectionId, expanded = false) {
    const buttonText = expanded ? getText('collapse') : getText('show_more');
    const filterId = `glow-${sectionId}`;
    return `
        <div class="more-sites-btn-container">
            <button class="btn-101" onclick="toggleMoreSites('${sectionId}', this)">
                ${buttonText}
                <svg width="100%" height="100%">
                    <filter id="${filterId}">
                        <feGaussianBlur result="coloredBlur" stdDeviation="5"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="coloredBlur"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <rect width="100%" height="100%" filter="url(#${filterId})"></rect>
                </svg>
            </button>
        </div>
    `;
}

// 切换展开/收起状态
function toggleMoreSites(sectionId, buttonElement) {
    const siteCards = document.querySelectorAll(`#${sectionId} .site-card`);
    const isExpanded = buttonElement.textContent.trim().includes(getText('collapse'));
    const filterId = `glow-${sectionId}`;
    
    // 切换卡片显示状态
    siteCards.forEach((card, index) => {
        if (index >= 8) {
            card.classList.toggle('hidden', isExpanded);
        }
    });
    
    // 更新按钮文本
    buttonElement.innerHTML = isExpanded ? 
        `${getText('show_more')}
        <svg width="100%" height="100%">
            <filter id="${filterId}">
                <feGaussianBlur result="coloredBlur" stdDeviation="5"></feGaussianBlur>
                <feMerge>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
            <rect width="100%" height="100%" filter="url(#${filterId})"></rect>
        </svg>` : 
        `${getText('collapse')}
        <svg width="100%" height="100%">
            <filter id="${filterId}">
                <feGaussianBlur result="coloredBlur" stdDeviation="5"></feGaussianBlur>
                <feMerge>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
            <rect width="100%" height="100%" filter="url(#${filterId})"></rect>
        </svg>`;
}

// 应用初始化卡片显示/隐藏状态
function initializeCardVisibility(sectionId) {
    const siteCards = document.querySelectorAll(`#${sectionId} .site-card`);
    let visibleCards = 0;
    
    // 计算可见卡片数量
    siteCards.forEach(card => {
        if (card.style.display !== 'none') {
            visibleCards++;
        }
    });
    
    // 移除该区域内所有的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        // 检查按钮是否与当前部分相关
        if (button.querySelector("button")?.getAttribute("onclick")?.includes(sectionId)) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 只有当可见卡片超过8个时才显示"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        siteCards.forEach(card => {
            if (card.style.display !== 'none') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                } else {
                    card.classList.remove('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在site-grid后面而不是内部
        const gridElement = document.getElementById(sectionId);
        // 根据grid ID获取正确的section ID
        let sectionName = sectionId;
        if (sectionId === 'website-tools-grid') {
            sectionName = 'website';
        } else if (sectionId.includes('-grid')) {
            sectionName = sectionId.replace('-grid', '');
        }
        const sectionElement = document.getElementById(`${sectionName}-section`);
        
        if (sectionElement) {
            // 检查该部分是否已经有"显示更多"按钮
            const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="${sectionId}"]`);
            if (!existingButton) {
                // 确保只添加一个按钮，且添加到分类的底部
                sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton(sectionId));
            }
        } else {
            console.warn(`没有找到section元素: ${sectionName}-section，尝试添加到grid后面`);
            if (gridElement) {
                // 如果找不到section元素，尝试添加到grid后面
                const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="${sectionId}"]`);
                if (!existingButton) {
                    gridElement.insertAdjacentHTML('afterend', createMoreSitesButton(sectionId));
                }
            }
        }
    } else {
        // 如果卡片数量不超过8个，确保所有卡片都可见
        siteCards.forEach(card => {
            if (card.style.display !== 'none') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 处理分类切换后的卡片可见性
function handleCategoryVisibility() {
    initializeCardVisibility('resources-grid');
    initializeCardVisibility('tech-blog-grid');
    initializeCardVisibility('ecommerce-grid');
    initializeCardVisibility('social-grid');
    initializeCardVisibility('website-tools-grid');
    initializeCardVisibility('ai-chat-grid');
    initializeCardVisibility('ai-writing-grid');
    initializeCardVisibility('ai-image-grid');
    initializeCardVisibility('ai-video-grid');
    initializeCardVisibility('ai-audio-grid');
    initializeCardVisibility('ai-design-grid');
    initializeCardVisibility('ai-coding-grid');
    initializeCardVisibility('ai-prompts-grid');
    initializeCardVisibility('ai-search-grid');
}

// 加载网站数据
function loadSites() {
    // 加载资源导引
    const resourcesGrid = document.getElementById('resources-grid');
    if (resourcesGrid && Array.isArray(sitesData.resources)) {
        resourcesGrid.innerHTML = '';
        sitesData.resources.forEach(site => {
            resourcesGrid.innerHTML += createSiteCard(site);
        });
        initializeCardVisibility('resources-grid');
    }

    // 加载技术实战
    const techBlogGrid = document.getElementById('tech-blog-grid');
    if (techBlogGrid && Array.isArray(sitesData.tech_blog)) {
        techBlogGrid.innerHTML = '';
        sitesData.tech_blog.forEach(site => {
            techBlogGrid.innerHTML += createSiteCard(site);
        });
        initializeCardVisibility('tech-blog-grid');
    }

    filterResourcesSubcategory('all');
    filterTechBlogSubcategory('all');

    // 加载电商平台
    const ecommerceGrid = document.getElementById('ecommerce-grid');
    ecommerceGrid.innerHTML = '';
    
    sitesData.ecommerce.forEach(site => {
        ecommerceGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('ecommerce-grid');
    
    // 加载社交平台
    const socialGrid = document.getElementById('social-grid');
    socialGrid.innerHTML = '';
    
    sitesData.social.forEach(site => {
        socialGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('social-grid');
    
    // 加载建站工具
    const websiteToolsGrid = document.getElementById('website-tools-grid');
    websiteToolsGrid.innerHTML = '';
    
    sitesData.website.forEach(site => {
        websiteToolsGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('website-tools-grid');
    
    // 加载AI对话工具
    const aiChatGrid = document.getElementById('ai-chat-grid');
    aiChatGrid.innerHTML = '';
    
    sitesData.ai_chat.forEach(site => {
        aiChatGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('ai-chat-grid');
    
    // 加载AI写作工具
    const aiWritingGrid = document.getElementById('ai-writing-grid');
    aiWritingGrid.innerHTML = '';
    
    sitesData.ai_writing.forEach(site => {
        aiWritingGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('ai-writing-grid');
    
    // 加载AI图像工具
    const aiImageGrid = document.getElementById('ai-image-grid');
    aiImageGrid.innerHTML = '';
    
    sitesData.ai_image.forEach(site => {
        aiImageGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('ai-image-grid');
    
    // 加载电商专区工具
    const ecommerceZoneGrid = document.getElementById('ecommerce-zone-grid');
    if (ecommerceZoneGrid && Array.isArray(sitesData.ecommerce_zone)) {
        ecommerceZoneGrid.innerHTML = '';
        sitesData.ecommerce_zone.forEach(site => {
            ecommerceZoneGrid.innerHTML += createSiteCard(site);
        });
        initializeCardVisibility('ecommerce-zone-grid');
    }
    
    // 加载AI视频工具
    const aiVideoGrid = document.getElementById('ai-video-grid');
    aiVideoGrid.innerHTML = '';
    
    sitesData.ai_video.forEach(site => {
        aiVideoGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('ai-video-grid');
    
    // 加载AI音频工具
    const aiAudioGrid = document.getElementById('ai-audio-grid');
    aiAudioGrid.innerHTML = '';
    
    sitesData.ai_audio.forEach(site => {
        aiAudioGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('ai-audio-grid');
    
    // 加载AI设计工具
    const aiDesignGrid = document.getElementById('ai-design-grid');
    aiDesignGrid.innerHTML = '';
    
    sitesData.ai_design.forEach(site => {
        aiDesignGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('ai-design-grid');
    
    // 加载AI编程工具
    const aiCodingGrid = document.getElementById('ai-coding-grid');
    aiCodingGrid.innerHTML = '';
    
    sitesData.ai_coding.forEach(site => {
        aiCodingGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('ai-coding-grid');
    
    // 加载AI提示词工具
    const aiPromptsGrid = document.getElementById('ai-prompts-grid');
    aiPromptsGrid.innerHTML = '';
    
    sitesData.ai_prompts.forEach(site => {
        aiPromptsGrid.innerHTML += createSiteCard(site);
    });
    
    // 初始化卡片可见性
    initializeCardVisibility('ai-prompts-grid');
    
    // 加载AI搜索工具
    const aiSearchGrid = document.getElementById('ai-search-grid');
    if (aiSearchGrid) {
        aiSearchGrid.innerHTML = '';
        
        if (Array.isArray(aiSearchData)) {
            aiSearchData.forEach(site => {
                aiSearchGrid.innerHTML += createSiteCard({
                    title: site.name,
                    description: site.description,
                    url: site.url,
                    tags: site.tags || [],
                    subcategory: site.subcategory,
                    needsMagic: site.needsMagic || false,
                    isRecommended: site.isRecommended || false
                });
            });
        }
        
        // 初始化卡片可见性
        initializeCardVisibility('ai-search-grid');
    }
    
    // 处理卡片可见性
    handleCategoryVisibility();
}

function filterResourcesSubcategory(subcategory) {
    const section = document.getElementById('resources-section');
    if (!section) return;

    section.querySelectorAll('.subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeButton = section.querySelector(`.subcategory-btn[onclick*="filterResourcesSubcategory('${subcategory}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    const cards = document.querySelectorAll('#resources-grid .site-card');
    cards.forEach(card => {
        card.classList.remove('hidden');
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// 过滤建站工具二级分类
function filterSubcategory(subcategory) {
    // 更新按钮状态
    document.querySelectorAll('#website-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#website-section .subcategory-btn[onclick*="filterSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#website-tools-grid .site-card');
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除所有的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`#website-section .more-sites-btn-container`);
    allOldButtons.forEach(button => {
        button.parentNode.removeChild(button);
    });
    
    console.log(`${subcategory} 类别下有 ${visibleCards} 个可见卡片`);
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮和隐藏多余卡片
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById('website-tools-grid');
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton('website-tools-grid'));
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
    
    // 建站工具二级分类在不同宽度下重新计算两行平衡
    setTimeout(() => {
        balanceSubcategoryNav(document.querySelector('#website-section .subcategory-nav'));
    }, 50);
}

// 过滤技术实战二级分类
function filterTechBlogSubcategory(subcategory) {
    const section = document.getElementById('tech-blog-section');
    if (!section) return;

    section.querySelectorAll('.subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeButton = section.querySelector(`.subcategory-btn[onclick*="filterTechBlogSubcategory('${subcategory}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    const cards = document.querySelectorAll('#tech-blog-grid .site-card');
    cards.forEach(card => {
        card.classList.remove('hidden');
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// 过滤电商平台二级分类
function filterEcommerceSubcategory(subcategory) {
    // 更新按钮状态
    document.querySelectorAll('#ecommerce-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ecommerce-section .subcategory-btn[onclick*="filterEcommerceSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#ecommerce-grid .site-card');
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除与当前部分相关的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        if (button.querySelector("button").getAttribute("onclick").includes('ecommerce-grid')) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 电商“其他”分组条目较多，默认展示更多，避免用户误以为缺失
    const maxVisibleCards = subcategory === 'other' ? 24 : 8;

    // 只有当显示的卡片超过阈值时才添加"显示更多"按钮
    if (visibleCards > maxVisibleCards) {
        // 隐藏阈值之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > maxVisibleCards) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById('ecommerce-grid');
        const sectionElement = document.getElementById('ecommerce-section');
        
        // 检查该部分是否已经有"显示更多"按钮
        const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="ecommerce-grid"]`);
        if (!existingButton) {
            // 确保只添加一个按钮，且添加到分类的底部
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton('ecommerce-grid'));
        }
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 过滤社交平台二级分类
function filterSocialSubcategory(subcategory) {
    // 更新按钮状态
    document.querySelectorAll('#social-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#social-section .subcategory-btn[onclick*="filterSocialSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#social-grid .site-card');
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除与当前部分相关的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        if (button.querySelector("button").getAttribute("onclick").includes('social-grid')) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById('social-grid');
        const sectionElement = document.getElementById('social-section');
        
        // 检查该部分是否已经有"显示更多"按钮
        const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="social-grid"]`);
        if (!existingButton) {
            // 确保只添加一个按钮，且添加到分类的底部
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton('social-grid'));
        }
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 过滤AI写作二级分类
function filterAiWritingSubcategory(subcategory) {
    // 如果是要跳过的分类，直接返回
    if (subcategory === 'office_writing' || subcategory === 'summary_tools' || subcategory === 'interactive_writing') {
        return;
    }
    
    // 更新按钮状态
    document.querySelectorAll('#ai-writing-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-writing-section .subcategory-btn[onclick*="filterAiWritingSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#ai-writing-grid .site-card');
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        // 始终隐藏这三个分类的卡片
        const cardSubcategory = card.dataset.subcategory;
        if (cardSubcategory === 'office_writing' || cardSubcategory === 'summary_tools' || cardSubcategory === 'interactive_writing') {
            card.style.display = 'none';
            return;
        }
        
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除与当前部分相关的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        if (button.querySelector("button").getAttribute("onclick").includes('ai-writing-grid')) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById('ai-writing-grid');
        const sectionElement = document.getElementById('ai-writing-section');
        
        // 检查该部分是否已经有"显示更多"按钮
        const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="ai-writing-grid"]`);
        if (!existingButton) {
            // 确保只添加一个按钮，且添加到分类的底部
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-writing-grid'));
        }
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 过滤AI对话二级分类
function filterAiChatSubcategory(subcategory) {
    // 更新按钮状态
    document.querySelectorAll('#ai-chat-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-chat-section .subcategory-btn[onclick*="filterAiChatSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#ai-chat-grid .site-card');
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除与当前部分相关的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        if (button.querySelector("button").getAttribute("onclick").includes('ai-chat-grid')) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById('ai-chat-grid');
        const sectionElement = document.getElementById('ai-chat-section');
        
        // 检查该部分是否已经有"显示更多"按钮
        const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="ai-chat-grid"]`);
        if (!existingButton) {
            // 确保只添加一个按钮，且添加到分类的底部
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-chat-grid'));
        }
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 过滤AI图像二级分类
function filterAiImageSubcategory(subcategory) {
    // 更新按钮状态
    document.querySelectorAll('#ai-image-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-image-section .subcategory-btn[onclick*="filterAiImageSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#ai-image-grid .site-card');
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除与当前部分相关的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        if (button.querySelector("button").getAttribute("onclick").includes('ai-image-grid')) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById('ai-image-grid');
        const sectionElement = document.getElementById('ai-image-section');
        
        // 检查该部分是否已经有"显示更多"按钮
        const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="ai-image-grid"]`);
        if (!existingButton) {
            // 确保只添加一个按钮，且添加到分类的底部
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-image-grid'));
        }
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 过滤电商专区二级分类
function filterEcommerceZoneSubcategory(subcategory) {
    // 更新按钮状态
    document.querySelectorAll('#ecommerce-zone-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ecommerce-zone-section .subcategory-btn[onclick*="filterEcommerceZoneSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#ecommerce-zone-grid .site-card');
    let visibleCards = 0;
    
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    const allOldButtons = document.querySelectorAll('.more-sites-btn-container');
    allOldButtons.forEach(button => {
        if (button.querySelector('button').getAttribute('onclick').includes('ecommerce-zone-grid')) {
            button.parentNode.removeChild(button);
        }
    });
    
    if (visibleCards > 8) {
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        const sectionElement = document.getElementById('ecommerce-zone-section');
        const existingButton = document.querySelector('.more-sites-btn-container button[onclick*="ecommerce-zone-grid"]');
        if (!existingButton) {
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton('ecommerce-zone-grid'));
        }
    } else {
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 过滤AI视频二级分类
function filterAiVideoSubcategory(subcategory) {
    // 更新按钮状态
    document.querySelectorAll('#ai-video-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-video-section .subcategory-btn[onclick*="filterAiVideoSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#ai-video-grid .site-card');
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除与当前部分相关的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        if (button.querySelector("button").getAttribute("onclick").includes('ai-video-grid')) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById('ai-video-grid');
        const sectionElement = document.getElementById('ai-video-section');
        
        // 检查该部分是否已经有"显示更多"按钮
        const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="ai-video-grid"]`);
        if (!existingButton) {
            // 确保只添加一个按钮，且添加到分类的底部
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-video-grid'));
        }
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 过滤AI音频二级分类
function filterAiAudioSubcategory(subcategory) {
    // 更新按钮状态
    document.querySelectorAll('#ai-audio-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-audio-section .subcategory-btn[onclick*="filterAiAudioSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#ai-audio-grid .site-card');
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除与当前部分相关的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        if (button.querySelector("button").getAttribute("onclick").includes('ai-audio-grid')) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById('ai-audio-grid');
        const sectionElement = document.getElementById('ai-audio-section');
        
        // 检查该部分是否已经有"显示更多"按钮
        const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="ai-audio-grid"]`);
        if (!existingButton) {
            // 确保只添加一个按钮，且添加到分类的底部
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-audio-grid'));
        }
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 过滤AI设计二级分类
function filterAiDesignSubcategory(subcategory) {
    // 更新按钮状态
    document.querySelectorAll('#ai-design-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-design-section .subcategory-btn[onclick*="filterAiDesignSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#ai-design-grid .site-card');
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除与当前部分相关的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        if (button.querySelector("button").getAttribute("onclick").includes('ai-design-grid')) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById('ai-design-grid');
        const sectionElement = document.getElementById('ai-design-section');
        
        // 检查该部分是否已经有"显示更多"按钮
        const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="ai-design-grid"]`);
        if (!existingButton) {
            // 确保只添加一个按钮，且添加到分类的底部
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-design-grid'));
        }
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 过滤AI编程二级分类
function filterAiCodingSubcategory(subcategory) {
    // 更新按钮状态
    document.querySelectorAll('#ai-coding-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-coding-section .subcategory-btn[onclick*="filterAiCodingSubcategory('${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll('#ai-coding-grid .site-card');
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除与当前部分相关的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        if (button.querySelector("button").getAttribute("onclick").includes('ai-coding-grid')) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById('ai-coding-grid');
        const sectionElement = document.getElementById('ai-coding-section');
        
        // 检查该部分是否已经有"显示更多"按钮
        const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="ai-coding-grid"]`);
        if (!existingButton) {
            // 确保只添加一个按钮，且添加到分类的底部
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-coding-grid'));
        }
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 加载AI编程工具
function loadAiCodingTools() {
    const aiCodingGrid = document.getElementById('ai-coding-grid');
    aiCodingGrid.innerHTML = '';
    
    sitesData.ai_coding.forEach(site => {
        aiCodingGrid.innerHTML += createSiteCard(site);
    });
}

// 加载AI设计工具
function loadAiDesignTools() {
    const aiDesignGrid = document.getElementById('ai-design-grid');
    aiDesignGrid.innerHTML = '';
    
    sitesData.ai_design.forEach(site => {
        aiDesignGrid.innerHTML += createSiteCard(site);
    });
}

// 加载AI提示词工具
function loadAiPromptsTools() {
    const aiPromptsGrid = document.getElementById('ai-prompts-grid');
    aiPromptsGrid.innerHTML = '';
    
    sitesData.ai_prompts.forEach(site => {
        aiPromptsGrid.innerHTML += createSiteCard(site);
    });
}

// 过滤AI提示词子分类
function filterAiPromptsSubcategory(subcategory) {
    filterSubcategoryGeneric('ai-prompts', subcategory);
}

// 过滤AI搜索子分类
function filterAiSearchSubcategory(subcategory) {
    filterSubcategoryGeneric('ai-search', subcategory);
}

// 过滤子分类
function filterSubcategoryGeneric(sectionId, subcategory) {
    // 更新按钮状态
    document.querySelectorAll(`#${sectionId}-section .subcategory-btn`).forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#${sectionId}-section .subcategory-btn[onclick*="${subcategory}')"]`).classList.add('active');

    // 过滤卡片
    const cards = document.querySelectorAll(`#${sectionId}-grid .site-card`);
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    cards.forEach(card => {
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除与当前部分相关的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allOldButtons.forEach(button => {
        if (button.querySelector("button").getAttribute("onclick").includes(`${sectionId}-grid`)) {
            button.parentNode.removeChild(button);
        }
    });
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById(`${sectionId}-grid`);
        const sectionElement = document.getElementById(`${sectionId}-section`);
        
        // 检查该部分是否已经有"显示更多"按钮
        const existingButton = document.querySelector(`.more-sites-btn-container button[onclick*="${sectionId}-grid"]`);
        if (!existingButton) {
            // 确保只添加一个按钮，且添加到分类的底部
            sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton(`${sectionId}-grid`));
        }
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 显示分类
function showCategory(category) {
    // 调试信息
    console.log('显示分类:', category);
    
    // 如果是要跳过的分类，直接返回
    if (category === 'office_writing' || category === 'summary_tools' || category === 'interactive_writing') {
        console.log('跳过显示被排除的分类:', category);
        return;
    }
    
    // 隐藏所有分类
    document.querySelectorAll('.category-section').forEach(section => {
        section.style.display = 'none';
    });
    
    let targetSectionId = null;
    
    // 根据分类显示对应部分
    if (category === 'home') {
        // 主页显示所有分类
        console.log('显示首页 - 所有分类');
        document.querySelectorAll('.category-section').forEach(section => {
            section.style.display = 'block';
        });
    } else if (category === 'resources') {
        console.log('显示资源导引');
        targetSectionId = 'resources-section';
        document.getElementById(targetSectionId).style.display = 'block';
        filterResourcesSubcategory('all');
    } else if (category === 'resource_tool_navigation' || category === 'resource_model_community' ||
               category === 'resource_product_research' || category === 'resource_learning_news') {
        console.log('显示资源导引子分类:', category);
        targetSectionId = 'resources-section';
        document.getElementById(targetSectionId).style.display = 'block';
        filterResourcesSubcategory(category);
    } else if (category === 'tech-blog') {
        console.log('显示技术实战');
        targetSectionId = 'tech-blog-section';
        document.getElementById(targetSectionId).style.display = 'block';
        filterTechBlogSubcategory('all');
    } else if (category === 'tech_official_docs' || category === 'tech_tutorials' || 
               category === 'tech_workflows' || category === 'tech_deploy_ops' || 
               category === 'tech_case_studies') {
        console.log('显示技术实战子分类:', category);
        targetSectionId = 'tech-blog-section';
        document.getElementById(targetSectionId).style.display = 'block';
        filterTechBlogSubcategory(category);
    } else if (category === 'ecommerce') {
        console.log('显示电商平台主分类');
        document.getElementById('ecommerce-section').style.display = 'block';
        filterEcommerceSubcategory('all');
    } else if (category === 'amazon' || category === 'aliexpress' || category === 'ebay' || 
               category === 'lazada' || category === 'shopee' || category === 'tiktok-shop' ||
               category === 'temu' || category === 'mercado-libre' || category === 'shopify' ||
               category === 'other-ecommerce') {
        // 电商平台子分类
        console.log('显示电商平台子分类:', category);
        document.getElementById('ecommerce-section').style.display = 'block';
        filterEcommerceSubcategory(category);
    } else if (category === 'social-global' || category === 'social-china') {
        // 社交平台子分类
        console.log('显示社交平台子分类:', category);
        document.getElementById('social-section').style.display = 'block';
        filterSocialSubcategory(category);
    } else if (category === 'social') {
        // 社交平台主分类
        console.log('显示社交平台主分类');
        document.getElementById('social-section').style.display = 'block';
        filterSocialSubcategory('all'); // 显示所有社交平台
    } else if (category === 'website') {
        // 建站工具主分类
        console.log('显示建站工具主分类');
        document.getElementById('website-section').style.display = 'block';
        filterSubcategory('all'); // 显示所有建站工具
    } else if (category === 'seo' || category === 'keyword' || category === 'analytics' || 
               category === 'domain' || category === 'server' || category === 'payment' || 
               category === 'erp' || category === 'network' || category === 'account' || 
               category === 'temp-mail' || category === 'ip-proxy' || category === 'browser' || 
               category === 'backlink' || category === 'content' || category === 'learning') {
        // 建站工具子分类
        console.log('显示建站工具子分类:', category);
        document.getElementById('website-section').style.display = 'block';
        filterSubcategory(category);
    } else if (category === 'ai_chat') {
        // AI对话主分类
        console.log('显示AI对话主分类');
        document.getElementById('ai-chat-section').style.display = 'block';
        filterAiChatSubcategory('all');
    } else if (category === 'general_assistant' || category === 'entertainment_ai' || 
               category === 'role_play' || category === 'multimodal_ai' || category === 'professional_ai' || 
               category === 'international_ai') {
        // AI对话子分类
        console.log('显示AI对话子分类:', category);
        document.getElementById('ai-chat-section').style.display = 'block';
        filterAiChatSubcategory(category);
    } else if (category === 'ai_writing') {
        // AI写作主分类
        console.log('显示AI写作主分类');
        document.getElementById('ai-writing-section').style.display = 'block';
        filterAiWritingSubcategory('all');
    } else if (category === 'model_reasoning' || category === 'productivity_longform' || 
               category === 'content_safety' || category === 'vertical_specialized') {
        // AI写作子分类
        console.log('显示AI写作子分类:', category);
        document.getElementById('ai-writing-section').style.display = 'block';
        filterAiWritingSubcategory(category);
    } else if (category === 'ai_image') {
        // AI图像主分类
        console.log('显示AI图像主分类');
        document.getElementById('ai-image-section').style.display = 'block';
        filterAiImageSubcategory('all');
    } else if (category === 'painting_creation' || category === 'image_postprocess' || 
               category === 'portrait_custom' || category === 'commercial_design') {
        // AI图像子分类
        console.log('显示AI图像子分类:', category);
        document.getElementById('ai-image-section').style.display = 'block';
        filterAiImageSubcategory(category);
    } else if (category === 'ecommerce_zone') {
        // 电商专区主分类
        console.log('显示电商专区主分类');
        document.getElementById('ecommerce-zone-section').style.display = 'block';
        filterEcommerceZoneSubcategory('all');
    } else if (category === 'ai_model' || category === 'product_photo' || 
               category === 'listing_writing' || category === 'ad_assistant') {
        // 电商专区子分类
        console.log('显示电商专区子分类:', category);
        document.getElementById('ecommerce-zone-section').style.display = 'block';
        filterEcommerceZoneSubcategory(category);
    } else if (category === 'ai_video') {
        // AI视频主分类
        console.log('显示AI视频主分类');
        document.getElementById('ai-video-section').style.display = 'block';
        filterAiVideoSubcategory('all');
    } else if (category === 'text_to_video' || category === 'image_to_video' || 
               category === 'video_editing' || category === 'digital_human' || 
               category === 'animation' || category === 'short_video' || 
               category === 'speech_driven' || category === 'professional_video' || 
               category === 'opensource_tools') {
        // AI视频子分类
        console.log('显示AI视频子分类:', category);
        document.getElementById('ai-video-section').style.display = 'block';
        filterAiVideoSubcategory(category);
    } else if (category === 'ai_audio') {
        // AI音频主分类
        console.log('显示AI音频主分类');
        document.getElementById('ai-audio-section').style.display = 'block';
        filterAiAudioSubcategory('all');
    } else if (category === 'tts' || category === 'music_generation' || 
               category === 'speech_to_text' || category === 'voice_conversion' || 
               category === 'audio_editing' || category === 'other_audio_tools') {
        // AI音频子分类
        console.log('显示AI音频子分类:', category);
        document.getElementById('ai-audio-section').style.display = 'block';
        filterAiAudioSubcategory(category);
    } else if (category === 'ai_design') {
        // AI设计主分类
        console.log('显示AI设计主分类');
        document.getElementById('ai-design-section').style.display = 'block';
        filterAiDesignSubcategory('all');
    } else if (category === 'commerce_design' || category === 'ui_ux' || 
               category === 'illustration' || category === 'model_design' || 
               category === 'assistant_tools' || category === 'special_tools') {
        // AI设计子分类
        console.log('显示AI设计子分类:', category);
        document.getElementById('ai-design-section').style.display = 'block';
        filterAiDesignSubcategory(category);
    } else if (category === 'ai_coding') {
        // AI编程主分类
        console.log('显示AI编程主分类');
        document.getElementById('ai-coding-section').style.display = 'block';
        filterAiCodingSubcategory('all');
    } else if (category === 'code_generation' || category === 'fullstack_dev' || 
               category === 'automation_workflow' || category === 'design_to_code' || category === 'code_review' || 
               category === 'natural_language_dev' || category === 'low_code' || 
               category === 'cloud_ide') {
        // AI编程子分类
        console.log('显示AI编程子分类:', category);
        document.getElementById('ai-coding-section').style.display = 'block';
        filterAiCodingSubcategory(category);
    } else if (category === 'ai_prompts') {
        // AI提示词主分类
        console.log('显示AI提示词主分类');
        document.getElementById('ai-prompts-section').style.display = 'block';
        filterAiPromptsSubcategory('all');
    } else if (category === 'prompt_platforms' || category === 'sd_tools' || 
               category === 'chatgpt_prompts' || category === 'visual_tools' || 
               category === 'chinese_resources' || category === 'other_tools') {
        // AI提示词子分类
        console.log('显示AI提示词子分类:', category);
        document.getElementById('ai-prompts-section').style.display = 'block';
        filterAiPromptsSubcategory(category);
    } else if (category === 'ai_search') {
        // AI搜索主分类
        console.log('显示AI搜索主分类');
        document.getElementById('ai-search-section').style.display = 'block';
        filterAiSearchSubcategory('all');
    } else if (category === 'general_search' || category === 'academic_search' || 
               category === 'programming_search' || category === 'finance_search' || 
               category === 'life_search' || category === 'product_search') {
        // AI搜索子分类
        console.log('显示AI搜索子分类:', category);
        document.getElementById('ai-search-section').style.display = 'block';
        filterAiSearchSubcategory(category);
    } else {
        console.log('未匹配到任何已知分类:', category);
    }
    
    // 更新导航高亮显示
    updateNavHighlight(category);

    if (category === 'resources' || category === 'tech-blog') {
        const anchorElement = document.getElementById(category);
        if (anchorElement) {
            anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.history && window.history.replaceState) {
                window.history.replaceState(null, '', `#${category}`);
            } else {
                window.location.hash = category;
            }
        }
    }

    // 根据首页/分类页状态刷新结构化数据
    updateStructuredData(category);
}

// 切换子菜单
function toggleSubmenu(element) {
    const parentItem = element.parentElement;
    
    // 检查是否是已经激活的菜单
    const isCurrentlyActive = parentItem.classList.contains('active');
    
    // 关闭所有已展开的子菜单
    const allMenuItems = document.querySelectorAll('.nav-item.has-submenu');
    allMenuItems.forEach(item => {
        // 如果不是当前点击的项目，则关闭它
        if (item !== parentItem) {
            item.classList.remove('active');
            const submenu = item.querySelector('.nav-submenu');
            if (submenu) {
                submenu.classList.remove('active');
            }
        }
    });
    
    // 如果当前菜单已经是激活状态，点击则关闭
    // 如果当前菜单是非激活状态，点击则打开
    if (!isCurrentlyActive) {
        parentItem.classList.add('active');
        const submenu = parentItem.querySelector('.nav-submenu');
        if (submenu) {
            submenu.classList.add('active');
        }
    } else {
        parentItem.classList.remove('active');
        const submenu = parentItem.querySelector('.nav-submenu');
        if (submenu) {
            submenu.classList.remove('active');
        }
    }
}

// 搜索功能
let currentSearchEngine = 'site'; // 默认为站内搜索

// 切换搜索引擎下拉菜单显示
function toggleSearchEngines() {
    document.getElementById('search-engine-dropdown').classList.toggle('show');
}

// 选择搜索引擎
function selectSearchEngine(engine) {
    currentSearchEngine = engine;
    
    // 更新按钮显示
    const btnName = document.getElementById('current-engine-name');
    const btnIcon = document.getElementById('current-engine-icon');
    
    // 更新选中状态
    document.querySelectorAll('.search-engine-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.search-engine-item[data-engine="${engine}"]`).classList.add('active');
    
    // 更新按钮文本和图标
    switch(engine) {
        case 'site':
            btnName.textContent = '站内搜索';
            btnIcon.innerHTML = '<i class="bi bi-search"></i>';
            break;
        case 'baidu':
            btnName.textContent = '百度';
            btnIcon.innerHTML = '<img src="https://www.baidu.com/favicon.ico" alt="百度" class="search-engine-icon">';
            break;
        case 'google':
            btnName.textContent = 'Google';
            btnIcon.innerHTML = '<img src="https://www.google.com/favicon.ico" alt="Google" class="search-engine-icon">';
            break;
        case 'bing':
            btnName.textContent = 'Bing';
            btnIcon.innerHTML = '<img src="https://www.bing.com/favicon.ico" alt="Bing" class="search-engine-icon">';
            break;
        case 'gemini':
            btnName.textContent = 'Gemini';
            btnIcon.innerHTML = '<img src="https://gemini.google.com/favicon.ico" alt="Gemini" class="search-engine-icon">';
            break;
    }
    
    // 关闭下拉菜单
    document.getElementById('search-engine-dropdown').classList.remove('show');
}

// 执行搜索
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    
    // 如果搜索框为空，返回首页
    if (query.length === 0) {
        clearSearch(); // 清空搜索并返回首页
        return;
    }
    
    // 显示清除按钮
    document.getElementById('clear-search-btn').classList.add('visible');
    
    // 根据不同搜索引擎执行不同操作
    switch(currentSearchEngine) {
        case 'site':
            performSiteSearch(query);
            break;
        case 'baidu':
            window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(query)}`, '_blank');
            break;
        case 'google':
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
            break;
        case 'bing':
            window.open(`https://www.bing.com/search?q=${encodeURIComponent(query)}`, '_blank');
            break;
        case 'gemini':
            window.open(`https://gemini.google.com/app?q=${encodeURIComponent(query)}`, '_blank');
            break;
    }
}

function getFabLanguage() {
    if (typeof getCurrentLanguage === 'function') {
        const currentLanguage = getCurrentLanguage();
        if (currentLanguage === 'en' || currentLanguage === 'zh') {
            return currentLanguage;
        }
    }

    return (document.documentElement.lang || '').toLowerCase().startsWith('en') ? 'en' : 'zh';
}

function updateBackToTopVisibility() {
    const button = document.getElementById('back-to-top-fab');
    if (!button) return;

    const isVisible = window.scrollY > 420;
    button.classList.toggle('is-visible', isVisible);
}

function initFloatingActionButton() {
    if (document.getElementById('floating-action-bar')) {
        updateBackToTopVisibility();
        return;
    }

    const language = getFabLanguage();
    const label = language === 'en' ? 'Back to top' : '返回顶部';

    const fabBar = document.createElement('div');
    fabBar.id = 'floating-action-bar';
    fabBar.className = 'floating-action-bar';
    fabBar.innerHTML = `
        <button id="back-to-top-fab" class="floating-action-btn" type="button" title="${label}" aria-label="${label}">
            <i class="bi bi-arrow-up"></i>
        </button>
    `;

    document.body.appendChild(fabBar);

    const button = document.getElementById('back-to-top-fab');
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    updateBackToTopVisibility();
}

const TECH_BLOG_SUBCATEGORY_ORDER = [
    'tech_official_docs',
    'tech_tutorials',
    'tech_workflows',
    'tech_deploy_ops',
    'tech_case_studies'
];

const SEARCH_QUERY_VARIANTS = {
    '选品': ['产品研究', '选品工具', '销量数据', '亚马逊关键词', '关键词研究', '产品发现'],
    '产品研究': ['选品', '选品工具', '销量数据', '亚马逊关键词'],
    '关键词': ['关键词研究', '关键词工具', '关键词规划', '搜索趋势', '亚马逊关键词'],
    'listing': ['listing写作', 'listing优化', '关键词研究'],
    '部署': ['一键部署', '私有服务器', 'vps', 'lighthouse', '集成指南'],
    'deploy': ['deployment', 'one-click deploy', 'vps', 'integration guide'],
    '飞书': ['feishu'],
    'telegram': ['电报', 'telegram'],
    'whatsapp': ['whatsapp'],
    '企业微信': ['wecom'],
    '微信': ['wecom', '微信插件']
};

const SEARCH_INTENT_BOOSTS = {
    '选品': {
        categories: ['website', 'ecommerce_zone'],
        subcategories: ['keyword', 'analytics', 'listing_writing']
    },
    '产品研究': {
        categories: ['website', 'ecommerce_zone'],
        subcategories: ['keyword', 'analytics', 'listing_writing']
    },
    '关键词': {
        categories: ['website', 'ecommerce_zone'],
        subcategories: ['keyword', 'listing_writing']
    },
    '部署': {
        categories: ['tech_blog'],
        subcategories: ['tech_deploy_ops']
    },
    'deploy': {
        categories: ['tech_blog'],
        subcategories: ['tech_deploy_ops']
    }
};

function getTechBlogSubcategoryRank(subcategory) {
    const rank = TECH_BLOG_SUBCATEGORY_ORDER.indexOf(subcategory);
    return rank === -1 ? TECH_BLOG_SUBCATEGORY_ORDER.length : rank;
}

function getSearchQueryVariants(query) {
    const normalizedQuery = String(query || '').trim().toLowerCase();
    if (!normalizedQuery) return [];

    return [
        { value: normalizedQuery, weight: 1 },
        ...(SEARCH_QUERY_VARIANTS[normalizedQuery] || []).map(variant => ({
            value: variant.toLowerCase(),
            weight: 0.68
        }))
    ];
}

function scoreSearchFieldMatch(values, queryVariants) {
    if (!values.length || !queryVariants.length) return 0;

    let bestScore = 0;

    queryVariants.forEach(variantEntry => {
        const variant = typeof variantEntry === 'string' ? variantEntry : variantEntry.value;
        const variantWeight = typeof variantEntry === 'string' ? 1 : variantEntry.weight;

        values.forEach(value => {
            if (!value) return;

            if (value === variant) {
                bestScore = Math.max(bestScore, 1 * variantWeight);
            } else if (value.startsWith(variant)) {
                bestScore = Math.max(bestScore, 0.82 * variantWeight);
            } else if (value.includes(variant)) {
                bestScore = Math.max(bestScore, 0.62 * variantWeight);
            }
        });
    });

    return bestScore;
}

function getSearchResultCategoryName(site) {
    const isEnglish = getCurrentLanguage() === 'en';
    const categoryName = getCategoryDisplayName(site.category);

    if (site.category === 'tech_blog' && site.subcategory) {
        return `${categoryName} · ${getSeoLabel(site.subcategory, isEnglish)}`;
    }

    return categoryName;
}

function getSiteSearchScore(site, category, query) {
    const normalizedQuery = query.toLowerCase();
    const queryVariants = getSearchQueryVariants(normalizedQuery);
    const titles = [site.title, site.titleEn].filter(Boolean).map(text => text.toLowerCase());
    const descriptions = [site.description, site.descriptionEn].filter(Boolean).map(text => text.toLowerCase());
    const tags = [
        ...(Array.isArray(site.tags) ? site.tags : []),
        ...(Array.isArray(site.tagsEn) ? site.tagsEn : [])
    ].filter(Boolean).map(tag => String(tag).toLowerCase());
    const categoryLabels = [getCategoryDisplayName(category).toLowerCase()];
    const subcategoryLabels = site.subcategory
        ? [
            getSeoLabel(site.subcategory, false).toLowerCase(),
            getSeoLabel(site.subcategory, true).toLowerCase()
        ]
        : [];

    const titleScore = scoreSearchFieldMatch(titles, queryVariants);
    const tagScore = scoreSearchFieldMatch(tags, queryVariants);
    const descriptionScore = scoreSearchFieldMatch(descriptions, queryVariants);
    const subcategoryScore = scoreSearchFieldMatch(subcategoryLabels, queryVariants);
    const categoryScore = scoreSearchFieldMatch(categoryLabels, queryVariants);

    let score = 0;

    score += Math.round(titleScore * 120);
    score += Math.round(tagScore * 90);
    score += Math.round(descriptionScore * 42);
    score += Math.round(subcategoryScore * 28);
    score += Math.round(categoryScore * 12);

    // 没有任何字段命中时，不应仅靠分类偏置进入搜索结果。
    if (score <= 0) {
        return 0;
    }

    const intentBoost = SEARCH_INTENT_BOOSTS[normalizedQuery];
    if (intentBoost) {
        if (intentBoost.categories && intentBoost.categories.includes(category)) {
            score += 22;
        }

        if (site.subcategory && intentBoost.subcategories && intentBoost.subcategories.includes(site.subcategory)) {
            score += 34;
        }
    }

    if (category === 'tech_blog') {
        score += 8;
    }

    if (site.subcategory && TECH_BLOG_SUBCATEGORY_ORDER.includes(site.subcategory)) {
        score += 6;
    }

    if (site.isRecommended) {
        score += 2;
    }

    return score;
}

// 站内搜索功能
function performSiteSearch(query) {
    const originalQuery = query.trim();
    const normalizedQuery = originalQuery.toLowerCase();
    const isEnglish = getCurrentLanguage() === 'en';

    if (!normalizedQuery) {
        loadSites();
        document.querySelectorAll('.category-section').forEach(section => {
            section.style.display = 'block';
        });
        
        // 隐藏搜索结果区域
        const searchResultsSection = document.getElementById('search-results-section');
        if (searchResultsSection) {
            searchResultsSection.style.display = 'none';
        }
        return;
    }

    // 获取或创建搜索结果区域
    let searchResultsSection = document.getElementById('search-results-section');
    
    // 如果搜索结果区域不存在，创建它
    if (!searchResultsSection) {
        searchResultsSection = document.createElement('div');
        searchResultsSection.id = 'search-results-section';
        searchResultsSection.className = 'category-section';
        
        // 创建搜索结果标题
        const titleDiv = document.createElement('div');
        titleDiv.className = 'section-header';
        titleDiv.innerHTML = `<h2><i class="bi bi-search"></i> ${isEnglish ? 'Search Results' : '搜索结果'}</h2>`;
        searchResultsSection.appendChild(titleDiv);
        
        // 创建搜索结果网格
        const gridDiv = document.createElement('div');
        gridDiv.id = 'search-results-grid';
        gridDiv.className = 'site-grid';
        searchResultsSection.appendChild(gridDiv);
        
        // 将搜索结果区域添加到正确的主内容区域
        const contentArea = document.getElementById('content-area');
        if (contentArea) {
            contentArea.insertBefore(searchResultsSection, contentArea.firstChild);
        } else {
            // 备用方案：添加到.main-content中
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                if (mainContent.firstChild) {
                    mainContent.insertBefore(searchResultsSection, mainContent.firstChild.nextSibling);
                } else {
                    mainContent.appendChild(searchResultsSection);
                }
            } else {
                document.body.appendChild(searchResultsSection);
            }
        }
    }
    
    // 显示搜索结果区域
    searchResultsSection.style.display = 'block';
    
    // 隐藏所有其他分类区域，但保持左侧导航栏可见
    document.querySelectorAll('.category-section:not(#search-results-section)').forEach(section => {
        section.style.display = 'none';
    });
    
    // 确保左侧导航栏保持可见
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'block';
    }
    
    // 获取搜索结果网格
    const searchResultsGrid = document.getElementById('search-results-grid');
    searchResultsGrid.innerHTML = '';
    
    // 收集所有匹配的站点
    let allMatchedSites = [];
    
    // 搜索所有分类
    const categories = [
        'resources', 'tech_blog', 'ecommerce', 'social', 'website', 'ai_chat', 'ai_writing', 'ai_image',
        'ecommerce_zone', 'ai_video', 'ai_audio', 'ai_design', 'ai_coding', 'ai_prompts', 'ai_search'
    ];
    
    // 对每个分类进行搜索
    categories.forEach(category => {
        if (sitesData[category] && Array.isArray(sitesData[category])) {
            sitesData[category].forEach((site, index) => {
                if (!site) return;

                const searchScore = getSiteSearchScore(site, category, normalizedQuery);
                if (searchScore <= 0) return;

                // 创建副本以避免修改原始数据
                const siteCopy = {
                    ...site,
                    category,
                    searchScore,
                    searchIndex: index,
                    techBlogRank: category === 'tech_blog' ? getTechBlogSubcategoryRank(site.subcategory) : TECH_BLOG_SUBCATEGORY_ORDER.length
                };
                allMatchedSites.push(siteCopy);
            });
        }
    });

    allMatchedSites.sort((a, b) => {
        if (b.searchScore !== a.searchScore) {
            return b.searchScore - a.searchScore;
        }

        const aIsTechBlog = a.category === 'tech_blog';
        const bIsTechBlog = b.category === 'tech_blog';
        if (aIsTechBlog !== bIsTechBlog) {
            return aIsTechBlog ? -1 : 1;
        }

        if (aIsTechBlog && bIsTechBlog && a.techBlogRank !== b.techBlogRank) {
            return a.techBlogRank - b.techBlogRank;
        }

        if (a.category === b.category) {
            return a.searchIndex - b.searchIndex;
        }

        return categories.indexOf(a.category) - categories.indexOf(b.category);
    });
    
    // 如果没有找到匹配结果
    if (allMatchedSites.length === 0) {
        searchResultsGrid.innerHTML = `
            <div class="no-results-message" style="text-align: center; padding: 50px 0;">
                <i class="bi bi-emoji-frown" style="font-size: 48px; color: #ccc; display: block; margin-bottom: 20px;"></i>
                <p style="font-size: 20px; color: #666;">${isEnglish ? `No results found for "<strong>${escapeHtml(originalQuery)}</strong>"` : `没有找到与 "<strong>${escapeHtml(originalQuery)}</strong>" 相关的结果`}</p>
                <p style="color: #888;">${isEnglish ? 'Try another keyword or technical topic.' : '请尝试其他关键词，或直接搜索技术主题词。'}</p>
            </div>
        `;
        return;
    }
    
    // 更新搜索结果标题显示匹配数量
    const titleElement = searchResultsSection.querySelector('.section-header h2');
    if (titleElement) {
        titleElement.innerHTML = `<i class="bi bi-search"></i> ${isEnglish ? 'Search Results' : '搜索结果'} <span style="font-size: 0.8em; color: #666;">${isEnglish ? `(${allMatchedSites.length} matches)` : `(找到 ${allMatchedSites.length} 个匹配项)`}</span>`;
    }
    
    // 显示所有匹配的站点卡片
    allMatchedSites.forEach(site => {
        const categoryName = getSearchResultCategoryName(site);
        searchResultsGrid.innerHTML += createSiteCardWithCategory(site, categoryName);
    });
    
    // 初始化搜索结果卡片可见性，显示/隐藏
    initializeCardVisibility('search-results-grid');
    
    // 滚动到搜索结果区域
    searchResultsSection.scrollIntoView({ behavior: 'smooth' });

    // 搜索结果页状态下刷新结构化数据
    updateStructuredData('search');
}

// 获取分类的显示名称
function getCategoryDisplayName(categoryKey) {
    const isEnglish = getCurrentLanguage() === 'en';
    const categoryMap = {
        'resources': isEnglish ? 'Resource Guides' : '资源导引',
        'tech_blog': isEnglish ? 'Technical Playbooks' : '技术实战',
        'ecommerce': isEnglish ? 'E-commerce' : '电商平台',
        'social': isEnglish ? 'Social Platforms' : '社交平台',
        'website': isEnglish ? 'Website Tools' : '建站工具',
        'ai_chat': isEnglish ? 'AI Chat' : 'AI对话',
        'ai_writing': isEnglish ? 'AI Writing' : 'AI写作',
        'ai_image': isEnglish ? 'AI Images' : 'AI图像',
        'ecommerce_zone': isEnglish ? 'E-commerce Zone' : '电商专区',
        'ai_video': isEnglish ? 'AI Video' : 'AI视频',
        'ai_audio': isEnglish ? 'AI Audio' : 'AI音频',
        'ai_design': isEnglish ? 'AI Design' : 'AI设计',
        'ai_coding': isEnglish ? 'AI Coding' : 'AI编程',
        'ai_prompts': isEnglish ? 'AI Prompts' : 'AI提示词',
        'ai_search': isEnglish ? 'AI Search' : 'AI搜索'
    };
    
    return categoryMap[categoryKey] || categoryKey;
}

// 在搜索结果页面创建带分类的网站卡片
function createSiteCardWithCategory(site, categoryName) {
    // 检查网站是否需要VPN访问
    const needsMagic = site.needsMagic || site.tags.includes('魔法');
    const magicTag = needsMagic ? `<div class="magic-tag">${getText('magic_tag')}</div>` : '';
    
    // 检查网站是否为推荐网站
    const isRecommended = site.isRecommended || site.isPopular || site.tags.includes('推荐');
    const recommendTag = isRecommended ? `<div class="recommend-tag"><i class="bi bi-star-fill"></i> ${getText('recommend_tag')}</div>` : '';
    
    // 确定当前语言
    const isEnglish = getCurrentLanguage() === 'en';
    
    // 根据当前语言选择显示的标签
    let displayTags = site.tags;
    if (isEnglish && site.tagsEn && site.tagsEn.length > 0) {
        displayTags = site.tagsEn;
    } else if (isEnglish) {
        // 英文模式但没有英文标签时，尝试翻译常见标签
        displayTags = site.tags.map(tag => translateTag(tag));
    }
    
    const displayTitle = isEnglish && site.titleEn ? site.titleEn : site.title;
    const displayDescription = isEnglish && site.descriptionEn ? site.descriptionEn : site.description;
    const visitButtonText = getText('visit_button');
    const visitLinkTitle = escapeHtmlAttribute(`${visitButtonText} - ${displayTitle}`);

    return `
        <div class="site-card" data-subcategory="${site.subcategory || ''}" style="position: relative;">
            ${magicTag}
            ${recommendTag}
            <div class="category-badge">${categoryName}</div>
            <div class="card-content">
                <div class="card-header">
                    <div class="site-title">${displayTitle}</div>
                </div>
                <div class="site-desc">${displayDescription}</div>
                <div class="site-tags">
                    ${displayTags.slice(0, 3).map(tag => `<span class="site-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="card-footer">
                <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="visit-btn" title="${visitLinkTitle}" aria-label="${visitLinkTitle}">
                    ${visitButtonText} <i class="bi bi-box-arrow-up-right"></i>
                </a>
            </div>
        </div>
    `;
}

const SEO_CATEGORY_GROUPS = {
    resources: [],
    'tech-blog': ['tech_official_docs', 'tech_tutorials', 'tech_workflows', 'tech_deploy_ops', 'tech_case_studies'],
    ecommerce: ['amazon', 'aliexpress', 'ebay', 'lazada', 'shopee', 'tiktok-shop', 'temu', 'mercado-libre', 'shopify', 'other-ecommerce'],
    social: ['social-global', 'social-china'],
    website: ['seo', 'keyword', 'analytics', 'domain', 'server', 'payment', 'erp', 'network', 'account', 'temp-mail', 'ip-proxy', 'browser', 'backlink', 'content', 'learning'],
    ai_chat: ['general_assistant', 'entertainment_ai', 'role_play', 'multimodal_ai', 'professional_ai', 'international_ai'],
    ai_writing: ['model_reasoning', 'productivity_longform', 'content_safety', 'vertical_specialized'],
    ai_image: ['general_image', 'portrait', 'background', 'brand_design', 'photo_enhancement', 'anime', 'fun_tools', 'fashion', 'image_editing', 'professional_scene'],
    ai_video: ['text_to_video', 'image_to_video', 'video_editing', 'digital_human', 'animation', 'short_video', 'speech_driven', 'professional_video', 'opensource_tools'],
    ai_audio: ['tts', 'music_generation', 'speech_to_text', 'voice_conversion', 'audio_editing', 'other_audio_tools'],
    ai_design: ['commerce_design', 'ui_ux', 'illustration', 'model_design', 'assistant_tools', 'special_tools'],
    ai_coding: ['code_generation', 'fullstack_dev', 'automation_workflow', 'design_to_code', 'code_review', 'natural_language_dev', 'low_code', 'cloud_ide'],
    ai_prompts: ['prompt_platforms', 'sd_tools', 'chatgpt_prompts', 'visual_tools', 'chinese_resources', 'other_tools'],
    ai_search: ['general_search', 'academic_search', 'programming_search', 'finance_search', 'life_search', 'product_search']
};

function getSeoLabel(key, isEnglish) {
    const map = {
        home: isEnglish ? 'Home' : '首页',
        search: isEnglish ? 'Search Results' : '搜索结果',
        resources: isEnglish ? 'Resource Guides' : '资源导引',
        'tech-blog': isEnglish ? 'Technical Playbooks' : '技术实战',
        tech_blog: isEnglish ? 'Technical Playbooks' : '技术实战',
        tech_official_docs: isEnglish ? 'Official Docs' : '官方文档',
        tech_tutorials: isEnglish ? 'Tutorials' : '教程实战',
        tech_workflows: isEnglish ? 'Automation Workflows' : '自动化工作流',
        tech_deploy_ops: isEnglish ? 'Deployment & Ops' : '部署与运维',
        tech_case_studies: isEnglish ? 'Case Breakdowns' : '案例拆解',
        ecommerce: isEnglish ? 'E-commerce' : '电商平台',
        social: isEnglish ? 'Social Platforms' : '社交平台',
        website: isEnglish ? 'Website Tools' : '建站工具',
        ai_chat: isEnglish ? 'AI Chat' : 'AI对话',
        ai_writing: isEnglish ? 'AI Writing' : 'AI写作',
        ai_image: isEnglish ? 'AI Image' : 'AI图像',
        ai_video: isEnglish ? 'AI Video' : 'AI视频',
        ai_audio: isEnglish ? 'AI Audio' : 'AI音频',
        ai_design: isEnglish ? 'AI Design' : 'AI设计',
        ai_coding: isEnglish ? 'AI Coding' : 'AI编程',
        ai_prompts: isEnglish ? 'AI Prompts' : 'AI提示词',
        ai_search: isEnglish ? 'AI Search' : 'AI搜索'
    };

    return map[key] || key;
}

function getSeoDescription(context, isEnglish, defaultDescription) {
    const homeDescription = isEnglish
        ? 'AI365 Navigation curates cross-border e-commerce tools, AI products, resource guides and technical playbooks, including official docs, tutorials, automation workflows, deployment references and engineering case studies.'
        : 'AI365导航为跨境电商卖家、独立站运营者与 AI 创作者整理电商平台、AI工具、资源导引与技术实战内容，覆盖官方文档、教程实战、自动化工作流、部署运维与工程案例。';

    const descriptions = {
        'tech-blog': isEnglish
            ? 'Technical playbooks for frontend, AI and infrastructure work, combining official docs, tutorials, workflow tools, deployment references and engineering case studies.'
            : '技术实战频道聚合前端、AI 与基础设施落地资料，包含官方文档、教程实战、工作流平台、部署运维与真实工程案例。',
        tech_official_docs: isEnglish
            ? 'Official documentation resources for frontend frameworks, runtime platforms and AI APIs.'
            : '官方文档分类集中收录前端框架、运行时平台与 AI API 的核心开发文档。',
        tech_tutorials: isEnglish
            ? 'Hands-on tutorials, courses and engineering articles for frontend, AI and full-stack implementation.'
            : '教程实战分类聚合前端、AI 与全栈开发的课程、实战文章与上手指南。',
        tech_workflows: isEnglish
            ? 'Automation workflow resources covering CI/CD, durable execution, orchestration platforms and process automation tools.'
            : '自动化工作流分类覆盖 CI/CD、持久化执行、流程编排平台与自动化工具文档。',
        tech_deploy_ops: isEnglish
            ? 'Deployment and operations references for hosting, containers, orchestration, edge platforms and production rollout.'
            : '部署与运维分类覆盖托管平台、容器化、编排系统、边缘平台与生产发布资料。',
        tech_case_studies: isEnglish
            ? 'Engineering blogs and real-world case studies from leading teams building large-scale products and platforms.'
            : '案例拆解分类收录头部团队的工程博客与真实案例，适合研究大规模产品与平台实践。'
    };

    if (context.pageType === 'home') {
        return homeDescription;
    }

    if (context.subcategory && descriptions[context.subcategory]) {
        return descriptions[context.subcategory];
    }

    if (context.topLevel && descriptions[context.topLevel]) {
        return descriptions[context.topLevel];
    }

    return defaultDescription || homeDescription;
}

function resolveSeoCategoryContext(category) {
    if (!category || category === 'home') {
        return { pageType: 'home', topLevel: null, subcategory: null };
    }
    if (category === 'search') {
        return { pageType: 'search', topLevel: null, subcategory: null };
    }

    const topLevelKeys = Object.keys(SEO_CATEGORY_GROUPS);
    for (const topKey of topLevelKeys) {
        if (category === topKey) {
            return { pageType: 'category', topLevel: topKey, subcategory: null };
        }
        if (SEO_CATEGORY_GROUPS[topKey].includes(category)) {
            return { pageType: 'subcategory', topLevel: topKey, subcategory: category };
        }
    }

    return { pageType: 'home', topLevel: null, subcategory: null };
}

function getCategorySitesForSchema(context) {
    if (!context.topLevel) {
        return [];
    }

    const dataKey = context.topLevel === 'tech-blog' ? 'tech_blog' : context.topLevel;
    if (!Array.isArray(sitesData[dataKey])) {
        return [];
    }

    const list = sitesData[dataKey];
    if (!context.subcategory) {
        return list;
    }

    const subcategory = context.subcategory === 'other-ecommerce' ? 'other' : context.subcategory;
    return list.filter(site => site.subcategory === subcategory);
}

function updateStructuredData(category = 'home') {
    if (typeof sitesData === 'undefined') {
        return;
    }

    const existing = document.getElementById('ai365-structured-data');
    if (existing) {
        existing.remove();
    }

    const isEnglish = getCurrentLanguage() === 'en' || document.documentElement.lang.startsWith('en');
    const baseUrl = window.location.origin;
    const currentPath = window.location.pathname === '/index.html' ? '/' : window.location.pathname;
    const currentUrl = `${baseUrl}${currentPath}`;
    const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
    const siteName = isEnglish ? 'AI365 Navigation' : 'AI365导航';
    const context = resolveSeoCategoryContext(category);
    const schemaDescription = getSeoDescription(context, isEnglish, metaDescription);

    const breadcrumbs = [
        {
            '@type': 'ListItem',
            position: 1,
            name: getSeoLabel('home', isEnglish),
            item: currentUrl
        }
    ];

    if (context.topLevel) {
        breadcrumbs.push({
            '@type': 'ListItem',
            position: 2,
            name: getSeoLabel(context.topLevel, isEnglish),
            item: `${currentUrl}#${context.topLevel}`
        });
    }

    if (context.subcategory) {
        breadcrumbs.push({
            '@type': 'ListItem',
            position: 3,
            name: getSeoLabel(context.subcategory, isEnglish),
            item: `${currentUrl}#${context.subcategory}`
        });
    }

    if (context.pageType === 'search') {
        breadcrumbs.push({
            '@type': 'ListItem',
            position: breadcrumbs.length + 1,
            name: getSeoLabel('search', isEnglish),
            item: `${currentUrl}#search`
        });
    }

    const defaultCategoryKeys = [
        'resources', 'tech_blog',
        'ecommerce', 'social', 'website', 'ai_chat', 'ai_writing',
        'ai_image', 'ecommerce_zone', 'ai_video', 'ai_audio', 'ai_design', 'ai_coding',
        'ai_prompts', 'ai_search'
    ];

    const categorySites = context.topLevel
        ? getCategorySitesForSchema(context)
        : defaultCategoryKeys.flatMap(key => (Array.isArray(sitesData[key]) ? sitesData[key] : []));

    const listItems = categorySites.slice(0, 80).map((site, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: isEnglish && site.titleEn ? site.titleEn : site.title,
        url: site.url
    }));

    const pageName = context.topLevel
        ? `${getSeoLabel(context.topLevel, isEnglish)}${context.subcategory ? ` - ${getSeoLabel(context.subcategory, isEnglish)}` : ''}`
        : document.title;

    const graph = [
        {
            '@type': 'Organization',
            name: siteName,
            url: `${baseUrl}/`,
            logo: `${baseUrl}/logo.svg`
        },
        {
            '@type': 'WebSite',
            name: siteName,
            url: `${baseUrl}/`,
            inLanguage: isEnglish ? 'en' : 'zh-CN',
            description: getSeoDescription({ pageType: 'home', topLevel: null, subcategory: null }, isEnglish, metaDescription)
        },
        {
            '@type': 'WebPage',
            name: pageName,
            url: context.pageType === 'home' ? currentUrl : `${currentUrl}#${category}`,
            inLanguage: isEnglish ? 'en' : 'zh-CN',
            description: schemaDescription,
            breadcrumb: {
                '@id': `${currentUrl}#breadcrumb`
            }
        },
        {
            '@type': 'BreadcrumbList',
            '@id': `${currentUrl}#breadcrumb`,
            itemListElement: breadcrumbs
        },
        {
            '@type': 'ItemList',
            name: context.topLevel
                ? `${pageName} ${isEnglish ? 'Tools' : '工具列表'}`
                : (isEnglish ? 'Featured Tools Directory' : '精选工具导航'),
            itemListOrder: 'https://schema.org/ItemListOrderAscending',
            numberOfItems: listItems.length,
            itemListElement: listItems
        }
    ];

    if (context.topLevel) {
        graph.push({
            '@type': 'CollectionPage',
            name: pageName,
            url: `${currentUrl}#${context.subcategory || context.topLevel}`,
            inLanguage: isEnglish ? 'en' : 'zh-CN',
            description: schemaDescription
        });
    } else if (context.pageType === 'home') {
        defaultCategoryKeys.forEach(key => {
            const schemaKey = key === 'tech_blog' ? 'tech-blog' : key;
            graph.push({
                '@type': 'CollectionPage',
                name: getSeoLabel(schemaKey, isEnglish),
                url: `${currentUrl}#${schemaKey}`,
                inLanguage: isEnglish ? 'en' : 'zh-CN',
                description: getSeoDescription(resolveSeoCategoryContext(schemaKey), isEnglish, metaDescription)
            });
        });
    }

    const schema = {
        '@context': 'https://schema.org',
        '@graph': graph
    };

    const script = document.createElement('script');
    script.id = 'ai365-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 监听搜索框输入事件，控制X按钮显示/隐藏
    document.getElementById('search-input').addEventListener('input', function() {
        const clearBtn = document.getElementById('clear-search-btn');
        if (this.value.length > 0) {
            clearBtn.classList.add('visible');
        } else {
            clearBtn.classList.remove('visible');
            // 输入框为空时自动隐藏搜索结果区域，但不要立即恢复首页状态
            const searchResultsSection = document.getElementById('search-results-section');
            if (searchResultsSection) {
                searchResultsSection.style.display = 'none';
            }
        }
    });

    // 点击页面其他地方关闭搜索引擎下拉菜单
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('search-engine-dropdown');
        const btn = document.getElementById('search-engine-btn');
        
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    // 搜索框边框动画效果增强
    const searchInput = document.getElementById('search-input');
    const searchBox = document.querySelector('.search-box');
    
    // 当页面加载时，添加轻微的动画效果
    setTimeout(() => {
        if(searchBox.querySelector('.search-border-effect')) {
            searchBox.querySelector('.search-border-effect').style.opacity = '0.3';
        }
    }, 500);
    
    // 当搜索框获得焦点时，增加边框亮度
    searchInput.addEventListener('focus', function() {
        if(searchBox.querySelector('.search-border-effect')) {
            searchBox.querySelector('.search-border-effect').style.opacity = '1';
        }
    });

    // 注入首页结构化数据，后续在分类切换时动态更新
    updateStructuredData('home');
    
    // 当搜索框失去焦点时，减弱边框亮度
    searchInput.addEventListener('blur', function() {
        if(searchBox.querySelector('.search-border-effect')) {
            searchBox.querySelector('.search-border-effect').style.opacity = '0.3';
        }
    });

    // 清理页面上所有的"显示更多"按钮
    document.querySelectorAll('.more-sites-btn-container').forEach(button => {
        button.parentNode.removeChild(button);
    });

    // 页面加载时初始化
    loadSites();
    showCategory('home');
    
    // 初始化所有二级分类导航的平衡布局
    balanceAllSubcategoryNavs();
    
    // 监听窗口大小变化，重新平衡导航
    window.addEventListener('resize', balanceAllSubcategoryNavs);
    
    // 初始化底部分类导航
    organizeFooterCategories();

    // 初始化悬浮返回顶部按钮
    initFloatingActionButton();
    
    // 为所有侧边栏和底部分类链接添加监听器，确保在搜索状态下点击也能切换类目
    initCategoryLinks();
});

// 清除搜索框内容并恢复首页状态
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    document.getElementById('clear-search-btn').classList.remove('visible');
    
    // 隐藏搜索结果区域
    const searchResultsSection = document.getElementById('search-results-section');
    if (searchResultsSection) {
        searchResultsSection.style.display = 'none';
    }
    
    // 重新加载所有站点数据
    loadSites();
    
    // 显示首页（所有分类）
    showCategory('home');
    
    // 滚动到页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 组织底部分类导航为三列分组布局
function organizeFooterCategories() {
    const container = document.querySelector('.categories-container');
    if (!container) return;

    const pageLanguage = typeof detectPageLanguage === 'function'
        ? detectPageLanguage()
        : ((document.documentElement.lang || '').toLowerCase().startsWith('en') ? 'en' : 'zh');
    const isEnglish = pageLanguage === 'en';
    
    // 清空现有内容
    container.innerHTML = '';

    const groups = isEnglish
        ? [
            {
                title: 'Core Channels',
                description: 'High-frequency navigation and business entry points',
                tone: 'core',
                items: [
                    { id: 'ecommerce', icon: 'bi-shop', text: 'E-commerce', description: 'Amazon / Shopify / DTC', title: 'E-commerce navigation, Amazon, Shopify, DTC tools', iconBg: 'rgba(255, 156, 110, 0.16)', iconColor: '#d96b3b' },
                    { id: 'social', icon: 'bi-people', text: 'Social Media', description: 'TikTok / Instagram / Traffic', title: 'Social media navigation, TikTok, Instagram, growth resources', iconBg: 'rgba(111, 148, 255, 0.16)', iconColor: '#4e6fd8' },
                    { id: 'ecommerce_zone', icon: 'bi-bag-check', text: 'Seller Zone', description: 'Products / Ads / Operations', title: 'Seller zone navigation, cross-border e-commerce operations and marketing', iconBg: 'rgba(115, 207, 168, 0.18)', iconColor: '#2f9c71' },
                    { id: 'ai_search', icon: 'bi-search', text: 'AI Search', description: 'Research / Discovery / Insight', title: 'AI search navigation, search engines, research and insight tools', iconBg: 'rgba(100, 200, 224, 0.18)', iconColor: '#257f99' }
                ]
            },
            {
                title: 'Creative Tools',
                description: 'Creation workflows across text, image, video and audio',
                tone: 'creative',
                items: [
                    { id: 'ai_chat', icon: 'bi-chat-dots', text: 'AI Chat', description: 'Assistants / Q&A / Agents', title: 'AI chat navigation, assistants, Q&A and agent tools', iconBg: 'rgba(120, 224, 164, 0.18)', iconColor: '#2f9463' },
                    { id: 'ai_writing', icon: 'bi-pen', text: 'AI Writing', description: 'Copy / SEO / Translation', title: 'AI writing navigation, content, SEO and translation tools', iconBg: 'rgba(118, 180, 255, 0.18)', iconColor: '#3d73cb' },
                    { id: 'ai_image', icon: 'bi-image', text: 'AI Images', description: 'Posters / Branding / Visuals', title: 'AI image navigation, poster design and visual creation tools', iconBg: 'rgba(255, 135, 193, 0.18)', iconColor: '#c64d8d' },
                    { id: 'ai_video', icon: 'bi-film', text: 'AI Video', description: 'Short-form / Editing / Motion', title: 'AI video navigation, short-form generation and editing tools', iconBg: 'rgba(106, 212, 247, 0.18)', iconColor: '#2384aa' },
                    { id: 'ai_audio', icon: 'bi-soundwave', text: 'AI Audio', description: 'Voice / Music / Dubbing', title: 'AI audio navigation, voice, music and dubbing tools', iconBg: 'rgba(255, 208, 102, 0.22)', iconColor: '#b68315' },
                    { id: 'ai_design', icon: 'bi-palette', text: 'AI Design', description: 'UI / Brand / Mockups', title: 'AI design navigation, UI, brand and mockup tools', iconBg: 'rgba(255, 159, 208, 0.18)', iconColor: '#bf5a92' }
                ]
            },
            {
                title: 'Resource Platforms',
                description: 'Development, prompting and site-building resources',
                tone: 'resource',
                items: [
                    { id: 'website', icon: 'bi-globe', text: 'Site Builders', description: 'Landing pages / Storefronts / CMS', title: 'Website builder navigation, landing page, store and CMS resources', iconBg: 'rgba(118, 165, 255, 0.18)', iconColor: '#3e65d1' },
                    { id: 'ai_coding', icon: 'bi-code-slash', text: 'AI Coding', description: 'Code generation / IDE / Debugging', title: 'AI coding navigation, code generation, IDE and debugging tools', iconBg: 'rgba(108, 225, 224, 0.2)', iconColor: '#198b97' },
                    { id: 'ai_prompts', icon: 'bi-lightbulb', text: 'Prompting', description: 'Prompt libraries / Templates / Workflows', title: 'Prompt engineering navigation, prompt libraries and workflow templates', iconBg: 'rgba(255, 215, 128, 0.22)', iconColor: '#b07a0f' }
                ]
            }
        ]
        : [
            {
                title: '核心频道',
                description: '覆盖高频入口与主业务场景',
                tone: 'core',
                items: [
                    { id: 'ecommerce', icon: 'bi-shop', text: '电商平台', description: 'Amazon / Shopify / 独立站', title: '电商平台导航，Amazon、Shopify、独立站资源', iconBg: 'rgba(255, 156, 110, 0.16)', iconColor: '#d96b3b' },
                    { id: 'social', icon: 'bi-people', text: '社交平台', description: 'TikTok / Instagram / 引流', title: '社交平台导航，TikTok、Instagram、内容引流资源', iconBg: 'rgba(111, 148, 255, 0.16)', iconColor: '#4e6fd8' },
                    { id: 'ecommerce_zone', icon: 'bi-bag-check', text: '电商专区', description: '选品 / 广告 / 运营', title: '电商专区导航，跨境卖家运营与营销工具', iconBg: 'rgba(115, 207, 168, 0.18)', iconColor: '#2f9c71' },
                    { id: 'ai_search', icon: 'bi-search', text: 'AI搜索', description: '检索 / 调研 / 资讯发现', title: 'AI搜索导航，AI搜索引擎、调研与资讯检索工具', iconBg: 'rgba(100, 200, 224, 0.18)', iconColor: '#257f99' }
                ]
            },
            {
                title: '创作工具',
                description: '覆盖文本、图像、视频与音频创作链路',
                tone: 'creative',
                items: [
                    { id: 'ai_chat', icon: 'bi-chat-dots', text: 'AI对话', description: '助手 / 问答 / 智能体', title: 'AI对话导航，智能助手、问答与 Agent 工具', iconBg: 'rgba(120, 224, 164, 0.18)', iconColor: '#2f9463' },
                    { id: 'ai_writing', icon: 'bi-pen', text: 'AI写作', description: '文案 / SEO / 翻译', title: 'AI写作导航，文案、SEO 与翻译工具', iconBg: 'rgba(118, 180, 255, 0.18)', iconColor: '#3d73cb' },
                    { id: 'ai_image', icon: 'bi-image', text: 'AI图像', description: '海报 / 品牌视觉 / 素材', title: 'AI图像导航，海报设计与视觉生成工具', iconBg: 'rgba(255, 135, 193, 0.18)', iconColor: '#c64d8d' },
                    { id: 'ai_video', icon: 'bi-film', text: 'AI视频', description: '短视频 / 剪辑 / 动效', title: 'AI视频导航，短视频生成与剪辑工具', iconBg: 'rgba(106, 212, 247, 0.18)', iconColor: '#2384aa' },
                    { id: 'ai_audio', icon: 'bi-soundwave', text: 'AI音频', description: '配音 / 音乐 / 语音', title: 'AI音频导航，配音、音乐与语音工具', iconBg: 'rgba(255, 208, 102, 0.22)', iconColor: '#b68315' },
                    { id: 'ai_design', icon: 'bi-palette', text: 'AI设计', description: 'UI / 品牌 / 原型', title: 'AI设计导航，UI、品牌与原型设计工具', iconBg: 'rgba(255, 159, 208, 0.18)', iconColor: '#bf5a92' }
                ]
            },
            {
                title: '资源平台',
                description: '聚合建站、开发与提示词相关资源',
                tone: 'resource',
                items: [
                    { id: 'website', icon: 'bi-globe', text: '建站工具', description: '落地页 / 商店 / CMS', title: '建站工具导航，落地页、商店与 CMS 资源', iconBg: 'rgba(118, 165, 255, 0.18)', iconColor: '#3e65d1' },
                    { id: 'ai_coding', icon: 'bi-code-slash', text: 'AI编程', description: '代码生成 / IDE / 调试', title: 'AI编程导航，代码生成、IDE 与调试工具', iconBg: 'rgba(108, 225, 224, 0.2)', iconColor: '#198b97' },
                    { id: 'ai_prompts', icon: 'bi-lightbulb', text: 'AI提示词', description: '提示词库 / 模板 / 工作流', title: 'AI提示词导航，提示词库、模板与工作流资源', iconBg: 'rgba(255, 215, 128, 0.22)', iconColor: '#b07a0f' }
                ]
            }
        ];

    groups.forEach(group => {
        const groupSection = document.createElement('section');
        groupSection.className = `footer-category-group footer-group-${group.tone}`;

        const groupHeader = document.createElement('div');
        groupHeader.className = 'footer-group-header';

        const groupTitle = document.createElement('h4');
        groupTitle.textContent = group.title;

        const groupDescription = document.createElement('p');
        groupDescription.textContent = group.description;

        groupHeader.appendChild(groupTitle);
        groupHeader.appendChild(groupDescription);

        const groupList = document.createElement('div');
        groupList.className = 'footer-category-list';

        group.items.forEach(category => {
            const item = document.createElement('a');
            item.className = `footer-category-item footer-tone-${group.tone}`;
            item.href = `#${category.id}-section`;
            item.title = category.title;
            item.setAttribute('aria-label', category.title);
            item.setAttribute('onclick', `showCategory('${category.id}')`);
            item.style.setProperty('--footer-icon-bg', category.iconBg);
            item.style.setProperty('--footer-icon-color', category.iconColor);

            const iconWrap = document.createElement('span');
            iconWrap.className = 'footer-category-icon';

            const icon = document.createElement('i');
            icon.className = `bi ${category.icon}`;

            const copy = document.createElement('span');
            copy.className = 'footer-category-copy';

            const text = document.createElement('strong');
            text.textContent = category.text;

            const description = document.createElement('small');
            description.textContent = category.description;

            iconWrap.appendChild(icon);
            copy.appendChild(text);
            copy.appendChild(description);
            item.appendChild(iconWrap);
            item.appendChild(copy);
            groupList.appendChild(item);
        });

        groupSection.appendChild(groupHeader);
        groupSection.appendChild(groupList);
        container.appendChild(groupSection);
    });
}

// 更新导航高亮状态
function updateNavHighlight(category) {
    const activeLink = document.querySelector(`.nav-link[onclick*="showCategory('${category}')"]`);
    const topLevelParentItem = activeLink?.parentElement?.classList.contains('has-submenu')
        ? activeLink.parentElement
        : null;
    const shouldKeepTopLevelExpanded = !!topLevelParentItem?.querySelector('.nav-submenu.active');

    // 移除所有导航项的激活状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelectorAll('.nav-item.has-submenu').forEach(item => {
        item.classList.remove('active');
    });

    document.querySelectorAll('.nav-submenu').forEach(submenu => {
        submenu.classList.remove('active');
    });
    
    if (activeLink) {
        activeLink.classList.add('active');
        
        // 如果在子菜单中，确保父菜单项也被激活并展开
        const parentSubmenu = activeLink.closest('.nav-submenu');
        if (parentSubmenu) {
            const parentItem = parentSubmenu.closest('.has-submenu');
            if (parentItem) {
                const parentLink = parentItem.querySelector('.nav-link');
                parentItem.classList.add('active');
                parentLink.classList.add('active');
                parentSubmenu.classList.add('active');
            }
        } else if (topLevelParentItem && shouldKeepTopLevelExpanded) {
            topLevelParentItem.classList.add('active');
            const submenu = topLevelParentItem.querySelector('.nav-submenu');
            if (submenu) {
                submenu.classList.add('active');
            }
        }
    }
}

// 页面加载完成后初始化滚动导航
document.addEventListener('DOMContentLoaded', function() {
    // 移除滚动导航初始化，因为现在是两行显示
    // initScrollNavigation();
    // initCategoryNavButtons();
});

// 初始化导航平滑滚动 - 不再需要滚动
function initScrollNavigation() {
    // 已废弃，二级导航现在是两行显示
    // const navContainers = document.querySelectorAll('.subcategory-nav');
    
    // navContainers.forEach(container => {
    //     container.addEventListener('wheel', function(e) {
    //         if (e.deltaY !== 0) {
    //             e.preventDefault();
    //             container.scrollLeft += e.deltaY;
    //         }
    //     });
    // });
}

// 为分类导航添加左右滚动按钮 - 不再需要滚动按钮
function initCategoryNavButtons() {
    // 已废弃，二级导航现在是两行显示
    // const navContainers = document.querySelectorAll('.subcategory-nav');
    
    // 以下代码已不再需要
}

// 平衡所有二级分类导航布局
function balanceAllSubcategoryNavs() {
    // 获取所有二级分类导航
    const navs = document.querySelectorAll('.subcategory-nav');
    navs.forEach(nav => {
        balanceSubcategoryNav(nav);
    });
}

// 平衡单个二级分类导航的布局
function balanceSubcategoryNav(nav) {
    if (!nav) return;

    // 首先移除任何现有的行分隔符
    const existingBreaks = nav.querySelectorAll('.row-break');
    existingBreaks.forEach(breakEl => breakEl.remove());
    
    // 获取导航容器的宽度
    const navWidth = nav.offsetWidth;
    
    // 获取所有按钮
    const buttons = Array.from(nav.querySelectorAll('.subcategory-btn'));
    
    // 如果按钮太少不需要处理
    if (buttons.length <= 1) return;
    
    // 计算按钮宽度和按钮组
    const buttonInfo = buttons.map((btn, index) => ({
        button: btn,
        width: btn.offsetWidth + 
            parseInt(window.getComputedStyle(btn).marginLeft) + 
            parseInt(window.getComputedStyle(btn).marginRight),
        text: btn.textContent.trim(),
        index: index
    }));
    
    // 特殊处理：确保特定的按钮在同一行显示
    // IP代理、指纹浏览器、反向外链、内容优化和学习资料
    const specialButtonsWebsite = ['IP代理', '指纹浏览器', '反向外链', '内容优化', '学习资料'];
    
    // AI写作分类中的特殊按钮
    const specialButtonsWriting = ['脚本与创意内容', '速读与摘要工具', '互动式写作'];
    
    // AI图像分类中的特殊按钮 - 第一行
    const specialButtonsImageRow1 = ['通用AI图片生成', '人像与头像生成', '背景与设计素材', '品牌与商业设计', '照片修复与增强'];
    
    // AI图像分类中的特殊按钮 - 第二行
    const specialButtonsImageRow2 = ['动漫与二次元创作', '娱乐与趣味工具', '服装与时尚设计', '图像编辑与处理', '专业场景生成'];
    
    // 检查当前导航区域是哪个分类
    const sectionId = nav.closest('.category-section').id;
    
    // 计算使每行尽可能排满的方法
    const optimizeRowDistribution = () => {
        // 尝试计算每行平均能放多少按钮
        const totalWidth = buttonInfo.reduce((sum, info) => sum + info.width, 0);
        const avgButtonsPerRow = Math.ceil(buttons.length / Math.ceil(totalWidth / navWidth));

        // 建站工具特殊处理：优先保持两行，且两行宽度尽量均衡。
        // 如果存在一个断点使得前后两行都能放下，则只使用两行，不再退化成三行。
        if (sectionId === 'website-section') {
            if (totalWidth <= navWidth) {
                return [buttonInfo];
            }

            const prefixWidths = [];
            let runningWidth = 0;
            buttonInfo.forEach((info, index) => {
                runningWidth += info.width;
                prefixWidths[index] = runningWidth;
            });

            let bestSplit = -1;
            let bestScore = Infinity;

            for (let splitIndex = 1; splitIndex < buttonInfo.length; splitIndex++) {
                const row1Width = prefixWidths[splitIndex - 1];
                const row2Width = totalWidth - row1Width;

                if (row1Width <= navWidth && row2Width <= navWidth) {
                    const widthDiff = Math.abs(row1Width - row2Width);
                    const centerBias = Math.abs(splitIndex - buttonInfo.length / 2);
                    const score = widthDiff + centerBias * 10;

                    if (score < bestScore) {
                        bestScore = score;
                        bestSplit = splitIndex;
                    }
                }
            }

            if (bestSplit !== -1) {
                return [
                    buttonInfo.slice(0, bestSplit),
                    buttonInfo.slice(bestSplit)
                ];
            }
        }
        
        // 初始化行数组
        let rows = [];
        let currentRow = [];
        let currentRowWidth = 0;
        
        // AI图像分类特殊处理 - 强制两行排列
        if (sectionId === 'ai-image-section') {
            // 找出"全部"按钮
            const allButton = buttonInfo.find(info => info.text === '全部');
            
            // 初始化第一行，从"全部"按钮开始
            let row1 = allButton ? [allButton] : [];
            let row1Width = allButton ? allButton.width : 0;
            
            // 添加第一行的剩余按钮 (通用AI图片生成到照片修复与增强)
            specialButtonsImageRow1.forEach(buttonText => {
                const buttonInfo1 = buttonInfo.find(info => info.text === buttonText);
                if (buttonInfo1) {
                    row1.push(buttonInfo1);
                    row1Width += buttonInfo1.width;
                }
            });
            
            // 第二行按钮 (动漫与二次元创作到专业场景生成)
            let row2 = [];
            let row2Width = 0;
            
            specialButtonsImageRow2.forEach(buttonText => {
                const buttonInfo2 = buttonInfo.find(info => info.text === buttonText);
                if (buttonInfo2) {
                    row2.push(buttonInfo2);
                    row2Width += buttonInfo2.width;
                }
            });
            
            // 返回两行按钮
            if (row1.length > 0) rows.push(row1);
            if (row2.length > 0) rows.push(row2);
            
            return rows;
        }
        
        // 选择适当的特殊按钮组
        let specialButtons = [];
        if (sectionId === 'website-section') {
            specialButtons = specialButtonsWebsite;
        } else if (sectionId === 'ai-writing-section') {
            specialButtons = specialButtonsWriting;
        }
        
        // 标记特殊按钮的索引
        const specialIndices = buttonInfo
            .filter(info => specialButtons.includes(info.text))
            .map(info => info.index);
        
        // 计算特殊按钮的总宽度
        const specialButtonsWidth = buttonInfo
            .filter(info => specialButtons.includes(info.text))
            .reduce((sum, info) => sum + info.width, 0);
        
        // 如果特殊按钮不适合放在一行，则按正常逻辑处理
        const specialButtonsFitInOneRow = specialButtonsWidth <= navWidth * 0.95;
        
        // 尝试按平均每行按钮数进行分配
        buttonInfo.forEach((info, index) => {
            // 特殊处理：如果当前按钮是特殊组中第一个且前面已有按钮，且当前行无法容纳所有特殊按钮，则换行
            if (specialIndices.length > 0 && 
                index === specialIndices[0] && 
                currentRow.length > 0 &&
                specialButtonsFitInOneRow) {
                rows.push(currentRow);
                currentRow = [info];
                currentRowWidth = info.width;
                return;
            }
            
            // 常规处理逻辑
            if (currentRowWidth + info.width <= navWidth) {
                // 当前行还能放下这个按钮
                currentRow.push(info);
                currentRowWidth += info.width;
            } else {
                // 当前行已经放不下，开始新行
                rows.push(currentRow);
                currentRow = [info];
                currentRowWidth = info.width;
            }
        });
        
        // 添加最后一行
        if (currentRow.length > 0) {
            rows.push(currentRow);
        }
        
        return rows;
    };
    
    // 执行优化
    const optimizedRows = optimizeRowDistribution();
    
    // 重新插入行分隔符
    optimizedRows.forEach((row, rowIndex) => {
        if (rowIndex > 0) {
            const breakEl = document.createElement('div');
            breakEl.className = 'row-break';
            // 插入断行符在该行第一个按钮前面
            const firstButtonInRow = row[0].button;
            nav.insertBefore(breakEl, firstButtonInRow);
        }
    });
}

// 初始化所有分类链接的点击事件
function initCategoryLinks() {
    // 侧边栏链接
    document.querySelectorAll('.nav-link[onclick*="showCategory"]').forEach(link => {
        link.addEventListener('click', function() {
            // 清除搜索状态
            const searchInput = document.getElementById('search-input');
            if (searchInput && searchInput.value.trim() !== '') {
                // 清空搜索框但不触发自动跳转到首页
                searchInput.value = '';
                document.getElementById('clear-search-btn').classList.remove('visible');
            }
            
            // 原有的点击处理会通过onclick属性调用showCategory函数
        });
    });
    
    // 底部分类链接
    document.querySelectorAll('.footer-category-item').forEach(link => {
        link.addEventListener('click', function() {
            // 清除搜索状态
            const searchInput = document.getElementById('search-input');
            if (searchInput && searchInput.value.trim() !== '') {
                // 清空搜索框但不触发自动跳转到首页
                searchInput.value = '';
                document.getElementById('clear-search-btn').classList.remove('visible');
            }
            
            // 原有的点击处理会通过onclick属性调用showCategory函数
        });
    });
}

// 根据网站名称过滤站点
function filterSitesByName(siteName, gridId) {
    // 获取网格中的所有卡片
    const cards = document.querySelectorAll(`#${gridId} .site-card`);
    let visibleCards = 0;
    
    // 先移除所有hidden类，重置显示状态
    cards.forEach(card => {
        card.classList.remove('hidden');
    });
    
    // 电商网站名称与二级分类的映射
    const ecommerceSiteToCategory = {
        'amazon': 'amazon',
        'aliexpress': 'aliexpress',
        'ebay': 'ebay',
        'lazada': 'lazada',
        'shopee': 'shopee',
        'tiktok-shop': 'tiktok-shop',
        'temu': 'temu',
        'mercado-libre': 'mercado-libre',
        'shopify': 'shopify',
        'other-ecommerce': 'other'
    };
    
    // 社交网站名称与二级分类的映射
    const socialSiteToCategory = {
        'social-global': 'social-global',
        'social-china': 'social-china'
    };
    
    // 根据gridId确定是电商平台还是社交平台
    if (gridId === 'ecommerce-grid') {
        // 电商平台处理逻辑
        const category = ecommerceSiteToCategory[siteName];
        if (category) {
            // 移除所有按钮的活跃状态
            document.querySelectorAll('#ecommerce-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 找到并激活对应的按钮
            const targetBtn = document.querySelector(`#ecommerce-section .subcategory-btn[onclick*="filterEcommerceSubcategory('${category}')"]`);
            if (targetBtn) {
                targetBtn.classList.add('active');
                
                // 直接调用对应的分类过滤函数，保持统一的处理方式
                filterEcommerceSubcategory(category);
                return;
            }
        }
        
        // 后备方案：使用关键词过滤
        const searchTerms = {
            'amazon': ['亚马逊', 'amazon'],
            'aliexpress': ['速卖通', 'aliexpress'],
            'ebay': ['ebay'],
            'lazada': ['lazada'],
            'shopee': ['shopee'],
            'tiktok-shop': ['tiktok shop', 'tiktok'],
            'temu': ['temu'],
            'mercado-libre': ['mercado libre', 'mercadolibre'],
            'shopify': ['shopify'],
            'other-ecommerce': ['other']
        };
        
        const terms = searchTerms[siteName] || [siteName];
        filterByTerms(cards, terms);
    } else if (gridId === 'social-grid') {
        // 社交平台处理逻辑
        const category = socialSiteToCategory[siteName];
        if (category) {
            // 移除所有按钮的活跃状态
            document.querySelectorAll('#social-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 找到并激活对应的按钮
            const targetBtn = document.querySelector(`#social-section .subcategory-btn[onclick*="filterSocialSubcategory('${category}')"]`);
            if (targetBtn) {
                targetBtn.classList.add('active');
                
                // 直接调用对应的分类过滤函数，保持统一的处理方式
                filterSocialSubcategory(category);
                return;
            }
        }
        
        // 后备方案：使用关键词过滤
        const searchTerms = {
            'social-global': ['全球', 'global', 'international'],
            'social-china': ['中国', 'china', 'domestic']
        };
        
        const terms = searchTerms[siteName] || [siteName];
        filterByTerms(cards, terms);
    } else {
        // 其他分类的处理（如有需要）
        console.log(`未知的网格ID: ${gridId}`);
    }
    
    // 内部函数：根据关键词过滤卡片
    function filterByTerms(cards, terms) {
        // 通过网站标题进行过滤
        cards.forEach(card => {
            const title = card.querySelector('.site-title').textContent.toLowerCase();
            const isMatch = terms.some(term => title.toLowerCase().includes(term.toLowerCase()));
            
            if (isMatch) {
                card.style.display = 'flex';
                visibleCards++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // 显示过滤结果
        console.log(`过滤 ${terms.join(', ')}: 找到 ${visibleCards} 个网站`);
    }
    
    // 移除所有的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`#${gridId}-section .more-sites-btn-container`);
    allOldButtons.forEach(button => {
        button.parentNode.removeChild(button);
    });
    
    // 只有当显示的卡片超过8个时才添加"显示更多"按钮
    if (visibleCards > 8) {
        // 隐藏第8个之后的卡片
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // 添加"显示更多"按钮 - 在grid后面而不是内部
        const gridElement = document.getElementById(gridId);
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton(gridId));
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 获取当前语言
function getCurrentLanguage() {
    if (typeof detectPageLanguage === 'function') {
        return detectPageLanguage();
    }

    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    const htmlLang = (document.documentElement.lang || '').toLowerCase();
    return path.endsWith('/en') || path.endsWith('/en.html') || htmlLang.startsWith('en') ? 'en' : 'zh';
}

// 在DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 加载网站数据
    loadSites();
    
    // 初始化事件监听器
    initCategoryLinks();
    initCategoryNavButtons();
    initScrollNavigation();
    
    // 平衡所有二级导航
    balanceAllSubcategoryNavs();
    
    // 组织底部分类
    organizeFooterCategories();

    // 初始化悬浮返回顶部按钮
    initFloatingActionButton();
    
    // 为搜索输入框添加回车触发搜索
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 为清除搜索按钮添加默认隐藏样式
    const clearBtn = document.getElementById('clear-search-btn');
    clearBtn.style.display = 'none';
    
    // 监听搜索输入框变化，控制清除按钮显示
    document.getElementById('search-input').addEventListener('input', function() {
        clearBtn.style.display = this.value ? 'flex' : 'none';
    });
    
    // 如果有语言设置，应用语言
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
    
    console.log('页面初始化完成');
}); 