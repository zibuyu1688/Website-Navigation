// 创建网站卡片
function createSiteCard(site) {
    // 检查网站是否需要VPN访问
    const needsMagic = site.needsMagic || site.tags.includes('魔法');
    const magicTag = needsMagic ? `<div class="magic-tag">魔法</div>` : '';
    
    // 检查网站是否为推荐网站
    const isRecommended = site.isRecommended || site.isPopular || site.tags.includes('推荐');
    const recommendTag = isRecommended ? `<div class="recommend-tag"><i class="bi bi-star-fill"></i> 强烈推荐</div>` : '';
    
    return `
        <div class="site-card" data-subcategory="${site.subcategory || ''}" style="position: relative;">
            ${magicTag}
            ${recommendTag}
            <div class="card-content">
                <div class="card-header">
                    <div class="site-title">${site.title}</div>
                </div>
                <div class="site-desc">${site.description}</div>
                <div class="site-tags">
                    ${site.tags.slice(0, 3).map(tag => `<span class="site-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="card-footer">
                <a href="${site.url}" target="_blank" class="visit-btn">
                    访问 <i class="bi bi-box-arrow-up-right"></i>
                </a>
            </div>
        </div>
    `;
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
    const buttonText = expanded ? '- 收起' : '显示更多 +';
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
    const isExpanded = buttonElement.textContent.trim().includes('收起');
    const filterId = `glow-${sectionId}`;
    
    // 确保没有其他相同section的显示更多按钮
    const otherButtons = document.querySelectorAll(`.more-sites-btn-container button[onclick*="${sectionId}"]`);
    otherButtons.forEach(btn => {
        if (btn !== buttonElement) {
            btn.closest('.more-sites-btn-container').remove();
        }
    });
    
    // 切换卡片显示状态
    siteCards.forEach((card, index) => {
        if (index >= 8) {
            card.classList.toggle('hidden', isExpanded);
        }
    });
    
    // 更新按钮文本
    buttonElement.innerHTML = isExpanded ? 
        `显示更多 +
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
        `- 收起
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
    
    // 移除相关的"显示更多"按钮
    cleanupMoreButtons(sectionId);
    
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
        
        // 确保只添加一个按钮
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton(sectionId));
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
    // 只处理当前显示的分类区域
    const visibleSections = document.querySelectorAll('.category-section[style*="display: block"]');
    visibleSections.forEach(section => {
        const gridId = section.querySelector('.site-grid').id;
        if (gridId) {
            initializeCardVisibility(gridId);
        }
    });
}

// 加载网站数据
function loadSites() {
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
    
    // 加载SEO工具
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

// 过滤SEO工具二级分类
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
    
    // 平衡二级分类导航
    setTimeout(() => {
        balanceSubcategoryNav(document.querySelector('#website-section .subcategory-nav'));
    }, 50);
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
    
    // 移除所有的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`#ecommerce-section .more-sites-btn-container`);
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
        const gridElement = document.getElementById('ecommerce-grid');
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton('ecommerce-grid'));
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}

// 清理特定grid相关的"显示更多"按钮
function cleanupMoreButtons(gridId) {
    const allButtons = document.querySelectorAll(`.more-sites-btn-container`);
    allButtons.forEach(button => {
        const buttonHtml = button.innerHTML;
        if (buttonHtml.includes(gridId)) {
            button.parentNode.removeChild(button);
        }
    });
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
    
    // 移除所有的"显示更多"按钮
    cleanupMoreButtons('social-grid');
    
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
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton('social-grid'));
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
        if (subcategory === 'all' || card.dataset.subcategory === subcategory) {
            card.style.display = 'flex';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 移除所有的"显示更多"按钮
    cleanupMoreButtons('ai-writing-grid');
    
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
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton('ai-writing-grid'));
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
    
    // 移除所有的"显示更多"按钮
    cleanupMoreButtons('ai-chat-grid');
    
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
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton('ai-chat-grid'));
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
    
    // 移除所有的"显示更多"按钮
    cleanupMoreButtons('ai-image-grid');
    
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
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton('ai-image-grid'));
    } else {
        // 确保所有可见卡片都显示出来
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
    
    // 移除所有的"显示更多"按钮
    cleanupMoreButtons('ai-video-grid');
    
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
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton('ai-video-grid'));
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
    
    // 移除所有的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`#ai-audio-section .more-sites-btn-container`);
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
        const gridElement = document.getElementById('ai-audio-grid');
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton('ai-audio-grid'));
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
    
    // 移除所有的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`#ai-design-section .more-sites-btn-container`);
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
        const gridElement = document.getElementById('ai-design-grid');
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton('ai-design-grid'));
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
    
    // 移除所有的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`#ai-coding-section .more-sites-btn-container`);
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
        const gridElement = document.getElementById('ai-coding-grid');
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton('ai-coding-grid'));
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
    
    // 移除所有的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`#${sectionId}-section .more-sites-btn-container`);
    allOldButtons.forEach(button => {
        button.parentNode.removeChild(button);
    });
    
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
        const gridElement = document.getElementById(`${sectionId}-grid`);
        gridElement.insertAdjacentHTML('afterend', createMoreSitesButton(`${sectionId}-grid`));
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
    
    // 平衡二级分类导航
    setTimeout(() => {
        balanceSubcategoryNav(document.querySelector(`#${sectionId}-section .subcategory-nav`));
    }, 50);
}

// 显示分类
function showCategory(category) {
    // 要滚动到的目标分类节点ID
    let targetSectionId = '';
    
    // 清除搜索状态 - 隐藏搜索结果区域
    const searchResultsSection = document.getElementById('search-results-section');
    if (searchResultsSection) {
        searchResultsSection.style.display = 'none';
    }
    
    // 清理页面上所有的"显示更多"按钮
    document.querySelectorAll('.more-sites-btn-container').forEach(button => {
        button.parentNode.removeChild(button);
    });

    // 隐藏所有分类
    document.getElementById('ecommerce-section').style.display = 'none';
    document.getElementById('social-section').style.display = 'none';
    document.getElementById('website-section').style.display = 'none';
    document.getElementById('ai-chat-section').style.display = 'none';
    document.getElementById('ai-writing-section').style.display = 'none';
    document.getElementById('ai-image-section').style.display = 'none';
    document.getElementById('ai-video-section').style.display = 'none';
    document.getElementById('ai-audio-section').style.display = 'none';
    document.getElementById('ai-design-section').style.display = 'none';
    document.getElementById('ai-coding-section').style.display = 'none';
    document.getElementById('ai-prompts-section').style.display = 'none';
    document.getElementById('ai-search-section').style.display = 'none';
    document.getElementById('rent-section').style.display = 'none';

    // 如果是首页，显示所有分类
    if (category === 'home') {
        document.getElementById('ecommerce-section').style.display = 'block';
        document.getElementById('social-section').style.display = 'block';
        document.getElementById('website-section').style.display = 'block';
        document.getElementById('ai-chat-section').style.display = 'block';
        document.getElementById('ai-writing-section').style.display = 'block';
        document.getElementById('ai-image-section').style.display = 'block';
        document.getElementById('ai-video-section').style.display = 'block';
        document.getElementById('ai-audio-section').style.display = 'block';
        document.getElementById('ai-design-section').style.display = 'block';
        document.getElementById('ai-coding-section').style.display = 'block';
        document.getElementById('ai-prompts-section').style.display = 'block';
        document.getElementById('ai-search-section').style.display = 'block';
        document.getElementById('rent-section').style.display = 'block';
        
        // 更新导航高亮状态
        updateNavHighlight('home');
        
        // 处理卡片可见性
        handleCategoryVisibility();
        
        // 平衡所有显示的二级分类导航
        setTimeout(balanceAllSubcategoryNavs, 50);
        
        // 滚动到页面顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        return;
    }
    
    // 添加合租平台的处理
    else if (category === 'rent' || 
             category === 'ai-account' || 
             category === 'social-account' || 
             category === 'software-account') {
        document.getElementById('rent-section').style.display = 'block';
        targetSectionId = 'rent-section';
        
        // 过滤二级分类
        if (category !== 'rent') {
            // 更新按钮状态
            document.querySelectorAll('#rent-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            const targetBtn = document.querySelector(`#rent-section .subcategory-btn[onclick*="filterRentSubcategory('${category}')"]`);
            if (targetBtn) {
                targetBtn.classList.add('active');
            }
            
            // 过滤显示对应分类的网站
            const rentGrid = document.getElementById('rent-grid');
            if (rentGrid && sitesData.rent) {
                rentGrid.innerHTML = '';
                sitesData.rent.forEach(site => {
                    if (site.subcategory === category) {
                        rentGrid.innerHTML += createSiteCard(site);
                    }
                });
            }
        } else {
            // 显示全部时，选中"全部"按钮并显示所有网站
            document.querySelectorAll('#rent-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#rent-section .subcategory-btn[onclick*="filterRentSubcategory(\'all\')"]').classList.add('active');
            
            // 显示所有合租平台网站
            const rentGrid = document.getElementById('rent-grid');
            if (rentGrid && sitesData.rent) {
                rentGrid.innerHTML = '';
                sitesData.rent.forEach(site => {
                    rentGrid.innerHTML += createSiteCard(site);
                });
            }
        }
        
        // 初始化卡片可见性
        initializeCardVisibility('rent-grid');
        
        // 更新导航栏高亮状态
        updateNavHighlight('rent');
    }

    // 处理特定电商网站的情况
    const ecommerceWebsites = {
        'amazon': 'domestic_ecommerce',
        'aliexpress': 'cross_border_ecommerce',
        'ebay': 'cross_border_ecommerce',
        'lazada': 'cross_border_ecommerce',
        'shopee': 'cross_border_ecommerce',
        'tiktok': 'cross_border_ecommerce',
        'other-ecommerce': 'other_ecommerce'
    };

    // 处理特定社交网站的情况
    const socialWebsites = {
        'social-global': 'international_social',
        'social-china': 'domestic_social'
    };

    // 判断是否是电商平台下的具体网站
    if (ecommerceWebsites[category]) {
        // 显示电商平台部分
        document.getElementById('ecommerce-section').style.display = 'block';
        targetSectionId = 'ecommerce-section';
        
        // 过滤特定网站 - 调用修改后的函数
        filterSitesByName(category, 'ecommerce-grid');
        
        // 更新导航高亮状态
        updateNavHighlight('ecommerce');
        
        // 平衡所有显示的二级分类导航
        setTimeout(balanceAllSubcategoryNavs, 50);
    }
    // 判断是否是社交平台下的具体类型
    else if (socialWebsites[category]) {
        // 显示社交平台部分
        document.getElementById('social-section').style.display = 'block';
        targetSectionId = 'social-section';
        
        // 过滤特定社交网站 - 调用修改后的函数
        filterSitesByName(category, 'social-grid');
        
        // 更新导航高亮状态
        updateNavHighlight('social');
        
        // 平衡所有显示的二级分类导航
        setTimeout(balanceAllSubcategoryNavs, 50);
    }
    // 根据传入的分类显示相应内容
    else if (category === 'ecommerce' || 
        category === 'domestic_ecommerce' || 
        category === 'cross_border_ecommerce' || 
        category === 'content_ecommerce' || 
        category === 'supply_chain' || 
        category === 'vertical_ecommerce' || 
        category === 'other_ecommerce') {
        document.getElementById('ecommerce-section').style.display = 'block';
        targetSectionId = 'ecommerce-section';
        
        // 过滤二级分类
        if (category !== 'ecommerce') {
            filterEcommerceSubcategory(category);
        } else {
            // 显示全部时，选中"全部"按钮
            document.querySelectorAll('#ecommerce-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ecommerce-section .subcategory-btn[onclick*="filterEcommerceSubcategory(\'all\')"]').classList.add('active');
            
            // 确保显示所有电商平台网站
            filterEcommerceSubcategory('all');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ecommerce');
    } else if (category === 'social' || 
               category === 'domestic_social' || 
               category === 'international_social' || 
               category === 'image_social' || 
               category === 'video_social' || 
               category === 'blog_forum' || 
               category === 'dating_social' || 
               category === 'social-influencer' ||
               category === 'niche_social') {
        document.getElementById('social-section').style.display = 'block';
        targetSectionId = 'social-section';
        
        // 过滤二级分类
        if (category !== 'social') {
            filterSocialSubcategory(category);
        } else {
            // 显示全部时，选中"全部"按钮
            document.querySelectorAll('#social-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#social-section .subcategory-btn[onclick*="filterSocialSubcategory(\'all\')"]').classList.add('active');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('social');
    } else if (category === 'website' || 
               category === 'google' || 
               category === 'seo' || 
               category === 'keyword' || 
               category === 'analytics' || 
               category === 'domain' || 
               category === 'server' || 
               category === 'payment' || 
               category === 'erp' || 
               category === 'network' || 
               category === 'account' || 
               category === 'temp-mail' || 
               category === 'ip-proxy' || 
               category === 'browser' || 
               category === 'learning' || 
               category === 'backlink' || 
               category === 'content') {
        document.getElementById('website-section').style.display = 'block';
        targetSectionId = 'website-section';
        
        // 过滤二级分类
        if (category !== 'website') {
            filterSubcategory(category);
        } else {
            // 显示全部时，选中"全部"按钮
            document.querySelectorAll('#website-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#website-section .subcategory-btn[onclick*="filterSubcategory(\'all\')"]').classList.add('active');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('website');
    } else if (category === 'ai_chat' || 
               category === 'general_assistant' || 
               category === 'entertainment_ai' || 
               category === 'role_play' || 
               category === 'multimodal_ai' || 
               category === 'professional_ai' || 
               category === 'international_ai') {
        document.getElementById('ai-chat-section').style.display = 'block';
        targetSectionId = 'ai-chat-section';
        
        // 过滤二级分类
        if (category !== 'ai_chat') {
            filterAiChatSubcategory(category);
        } else {
            // 显示全部时，选中"全部"按钮
            document.querySelectorAll('#ai-chat-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-chat-section .subcategory-btn[onclick*="filterAiChatSubcategory(\'all\')"]').classList.add('active');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ai_chat');
    } else if (category === 'ai_writing' || 
               category === 'academic_paper' || 
               category === 'official_document' || 
               category === 'fiction_writing' || 
               category === 'marketing_copy' || 
               category === 'blog_media' || 
               category === 'multilingual' || 
               category === 'office_writing' || 
               category === 'script_content' || 
               category === 'summary_tools' || 
               category === 'interactive_writing') {
        document.getElementById('ai-writing-section').style.display = 'block';
        targetSectionId = 'ai-writing-section';
        
        // 过滤二级分类
        if (category !== 'ai_writing') {
            filterAiWritingSubcategory(category);
        } else {
            // 显示全部时，选中"全部"按钮
            document.querySelectorAll('#ai-writing-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-writing-section .subcategory-btn[onclick*="filterAiWritingSubcategory(\'all\')"]').classList.add('active');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ai_writing');
    } else if (category === 'ai_image' || 
               category === 'general_image' || 
               category === 'portrait' || 
               category === 'background' || 
               category === 'brand_design' || 
               category === 'photo_enhancement' || 
               category === 'anime' || 
               category === 'fun_tools' || 
               category === 'fashion' || 
               category === 'image_editing' || 
               category === 'professional_scene') {
        document.getElementById('ai-image-section').style.display = 'block';
        targetSectionId = 'ai-image-section';
        
        // 过滤二级分类
        if (category !== 'ai_image') {
            filterAiImageSubcategory(category);
        } else {
            // 显示全部时，选中"全部"按钮
            document.querySelectorAll('#ai-image-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-image-section .subcategory-btn[onclick*="filterAiImageSubcategory(\'all\')"]').classList.add('active');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ai_image');
    } else if (category === 'ai_video' || 
               category === 'text_to_video' || 
               category === 'image_to_video' || 
               category === 'video_editing' || 
               category === 'digital_human' || 
               category === 'animation' || 
               category === 'short_video' || 
               category === 'speech_driven' || 
               category === 'professional_video' || 
               category === 'opensource_tools') {
        document.getElementById('ai-video-section').style.display = 'block';
        targetSectionId = 'ai-video-section';
        
        // 过滤二级分类
        if (category !== 'ai_video') {
            filterAiVideoSubcategory(category);
        } else {
            // 显示全部时，选中"全部"按钮
            document.querySelectorAll('#ai-video-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-video-section .subcategory-btn[onclick*="filterAiVideoSubcategory(\'all\')"]').classList.add('active');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ai_video');
    } else if (category === 'ai_audio' || 
               category === 'tts' || 
               category === 'music_generation' || 
               category === 'speech_to_text' || 
               category === 'voice_conversion' || 
               category === 'audio_editing' || 
               category === 'other_audio_tools') {
        document.getElementById('ai-audio-section').style.display = 'block';
        targetSectionId = 'ai-audio-section';
        
        // 过滤二级分类
        if (category !== 'ai_audio') {
            filterAiAudioSubcategory(category);
        } else {
            // 显示全部时，选中"全部"按钮
            document.querySelectorAll('#ai-audio-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-audio-section .subcategory-btn[onclick*="filterAiAudioSubcategory(\'all\')"]').classList.add('active');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ai_audio');
    } else if (category === 'ai_design') {
        document.getElementById('ai-design-section').style.display = 'block';
        targetSectionId = 'ai-design-section';
        
        // 过滤二级分类
        if (category !== 'ai_design') {
            filterAiDesignSubcategory(category);
        } else {
            // 显示全部时，选中"全部"按钮
            document.querySelectorAll('#ai-design-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-design-section .subcategory-btn[onclick*="filterAiDesignSubcategory(\'all\')"]').classList.add('active');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ai_design');
    } else if (category === 'ai_coding' || 
               category === 'code_generation' || 
               category === 'fullstack_dev' || 
               category === 'design_to_code' || 
               category === 'code_review' || 
               category === 'natural_language_dev' || 
               category === 'low_code' || 
               category === 'cloud_ide') {
        // 显示AI编程部分
        document.getElementById('ai-coding-section').style.display = 'block';
        targetSectionId = 'ai-coding-section';
        
        // 过滤二级分类
        if (category !== 'ai_coding') {
            filterAiCodingSubcategory(category);
        } else {
            // 重置为全部
            document.querySelectorAll('#ai-coding-section .subcategory-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('#ai-coding-section .subcategory-btn[onclick*="filterAiCodingSubcategory(\'all\')"]').classList.add('active');
            loadAiCodingTools();
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ai_coding');
    } else if (category === 'ai_prompts' || category === 'prompt_platforms' || 
        category === 'sd_tools' || category === 'chatgpt_prompts' || 
        category === 'visual_tools' || category === 'chinese_resources' || 
        category === 'other_tools') {
        // 显示AI提示词部分
        document.getElementById('ai-prompts-section').style.display = 'block';
        targetSectionId = 'ai-prompts-section';
        
        // 过滤二级分类
        if (category !== 'ai_prompts') {
            filterAiPromptsSubcategory(category);
        } else {
            // 重置为全部
            document.querySelectorAll('#ai-prompts-section .subcategory-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('#ai-prompts-section .subcategory-btn[onclick*="filterAiPromptsSubcategory(\'all\')"]').classList.add('active');
            loadAiPromptsTools();
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ai_prompts');
    } else if (category === 'ai_search' || category === 'general_search' || 
        category === 'vertical_search') {
        // 显示AI搜索部分
        document.getElementById('ai-search-section').style.display = 'block';
        targetSectionId = 'ai-search-section';
        
        // 过滤二级分类
        if (category !== 'ai_search') {
            filterAiSearchSubcategory(category);
        } else {
            // 重置为全部
            document.querySelectorAll('#ai-search-section .subcategory-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('#ai-search-section .subcategory-btn[onclick*="filterAiSearchSubcategory(\'all\')"]').classList.add('active');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ai_search');
    }
    
    // 处理卡片可见性
    handleCategoryVisibility();
    
    // 平衡当前显示的二级分类导航
    setTimeout(balanceAllSubcategoryNavs, 50);
    
    // 滚动到对应分类标题的位置
    if (targetSectionId) {
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            // 获取搜索框的高度和其他可能的固定元素高度，作为偏移量
            const searchContainer = document.querySelector('.search-container');
            const offsetTop = searchContainer ? searchContainer.offsetHeight + 20 : 0;
            
            // 计算需要滚动的位置（减去偏移量以确保标题完全可见）
            const scrollPosition = targetSection.offsetTop - offsetTop;
            
            // 平滑滚动到目标位置
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
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

// 站内搜索功能
function performSiteSearch(query) {
    query = query.toLowerCase();
    if (!query) {
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
        titleDiv.innerHTML = `<h2><i class="bi bi-search"></i> 搜索结果</h2>`;
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
        'ecommerce', 'social', 'website', 'ai_chat', 'ai_writing', 'ai_image', 
        'ai_video', 'ai_audio', 'ai_design', 'ai_coding', 'ai_prompts', 'ai_search'
    ];
    
    // 对每个分类进行搜索
    categories.forEach(category => {
        if (sitesData[category] && Array.isArray(sitesData[category])) {
            const matchedSites = sitesData[category].filter(site => 
                site && (
                    (site.title && site.title.toLowerCase().includes(query)) || 
                    (site.description && site.description.toLowerCase().includes(query)) ||
                    (site.tags && Array.isArray(site.tags) && site.tags.some(tag => tag.toLowerCase().includes(query)))
                )
            );
            
            // 添加分类信息到每个站点
            matchedSites.forEach(site => {
                // 创建副本以避免修改原始数据
                const siteCopy = {...site, category: category};
                allMatchedSites.push(siteCopy);
            });
        }
    });
    
    // 如果没有找到匹配结果
    if (allMatchedSites.length === 0) {
        searchResultsGrid.innerHTML = `
            <div class="no-results-message" style="text-align: center; padding: 50px 0;">
                <i class="bi bi-emoji-frown" style="font-size: 48px; color: #ccc; display: block; margin-bottom: 20px;"></i>
                <p style="font-size: 20px; color: #666;">没有找到与 "<strong>${query}</strong>" 相关的结果</p>
                <p style="color: #888;">请尝试使用其他关键词搜索</p>
            </div>
        `;
        return;
    }
    
    // 更新搜索结果标题显示匹配数量
    const titleElement = searchResultsSection.querySelector('.section-header h2');
    if (titleElement) {
        titleElement.innerHTML = `<i class="bi bi-search"></i> 搜索结果 <span style="font-size: 0.8em; color: #666;">(找到 ${allMatchedSites.length} 个匹配项)</span>`;
    }
    
    // 显示所有匹配的站点卡片
    allMatchedSites.forEach(site => {
        const categoryName = getCategoryDisplayName(site.category);
        searchResultsGrid.innerHTML += createSiteCardWithCategory(site, categoryName);
    });
    
    // 初始化搜索结果卡片可见性，显示/隐藏
    initializeCardVisibility('search-results-grid');
    
    // 滚动到搜索结果区域
    searchResultsSection.scrollIntoView({ behavior: 'smooth' });
}

// 获取分类的显示名称
function getCategoryDisplayName(categoryKey) {
    const categoryMap = {
        'ecommerce': '电商平台',
        'social': '社交平台',
        'website': 'SEO 工具',
        'ai_chat': 'AI对话',
        'ai_writing': 'AI写作',
        'ai_image': 'AI图像',
        'ai_video': 'AI视频',
        'ai_audio': 'AI音频',
        'ai_design': 'AI设计',
        'ai_coding': 'AI编程',
        'ai_prompts': 'AI提示词',
        'ai_search': 'AI搜索'
    };
    
    return categoryMap[categoryKey] || categoryKey;
}

// 创建带有分类标记的站点卡片
function createSiteCardWithCategory(site, categoryName) {
    // 直接复用createSiteCard函数生成卡片，确保搜索结果与普通卡片样式一致
    return createSiteCard(site);
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
    
    // 为所有侧边栏和底部分类链接添加监听器，确保在搜索状态下点击也能切换类目
    initCategoryLinks();
    
    // 加载合租平台数据
    loadRentSites();
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

// 组织底部分类导航为两行布局
function organizeFooterCategories() {
    const container = document.querySelector('.categories-container');
    if (!container) return;
    
    // 清空现有内容
    container.innerHTML = '';
    
    // 创建第一行和第二行容器
    const row1 = document.createElement('div');
    row1.className = 'footer-category-row';
    
    const row2 = document.createElement('div');
    row2.className = 'footer-category-row';
    
    // 定义所有一级分类
    const categories = [
        { id: 'ecommerce', icon: 'bi-shop', text: '电商平台' },
        { id: 'social', icon: 'bi-people', text: '社交平台' },
        { id: 'website', icon: 'bi-globe', text: 'SEO 工具' },
        { id: 'ai_chat', icon: 'bi-chat-dots', text: 'AI对话' },
        { id: 'ai_writing', icon: 'bi-pen', text: 'AI写作' },
        { id: 'ai_image', icon: 'bi-image', text: 'AI图像' },
        { id: 'ai_video', icon: 'bi-film', text: 'AI视频' },
        { id: 'ai_audio', icon: 'bi-soundwave', text: 'AI音频' },
        { id: 'ai_design', icon: 'bi-palette', text: 'AI设计' },
        { id: 'ai_coding', icon: 'bi-code-slash', text: 'AI编程' },
        { id: 'ai_prompts', icon: 'bi-lightbulb', text: 'AI提示词' },
        { id: 'ai_search', icon: 'bi-search', text: 'AI搜索' }
    ];
    
    // 上半部分添加到第一行，下半部分添加到第二行
    const firstRowItems = categories.slice(0, 6); // 前6个
    const secondRowItems = categories.slice(6);   // 后6个
    
    // 为第一行创建分类项
    firstRowItems.forEach(category => {
        const item = document.createElement('a');
        item.className = 'footer-category-item';
        item.setAttribute('onclick', `showCategory('${category.id}')`);
        
        const icon = document.createElement('i');
        icon.className = `bi ${category.icon}`;
        
        const text = document.createElement('span');
        text.textContent = category.text;
        
        item.appendChild(icon);
        item.appendChild(text);
        row1.appendChild(item);
    });
    
    // 为第二行创建分类项
    secondRowItems.forEach(category => {
        const item = document.createElement('a');
        item.className = 'footer-category-item';
        item.setAttribute('onclick', `showCategory('${category.id}')`);
        
        const icon = document.createElement('i');
        icon.className = `bi ${category.icon}`;
        
        const text = document.createElement('span');
        text.textContent = category.text;
        
        item.appendChild(icon);
        item.appendChild(text);
        row2.appendChild(item);
    });
    
    // 将行添加到容器
    container.appendChild(row1);
    container.appendChild(row2);
}

// 更新导航高亮状态
function updateNavHighlight(category) {
    // 移除所有导航项的激活状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // 查找匹配的导航链接
    const activeLink = document.querySelector(`.nav-link[onclick*="showCategory('${category}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        
        // 如果在子菜单中，确保父菜单项也被激活并展开
        const parentSubmenu = activeLink.closest('.nav-submenu');
        if (parentSubmenu) {
            const parentItem = parentSubmenu.closest('.has-submenu');
            if (parentItem) {
                const parentLink = parentItem.querySelector('.nav-link');
                parentLink.classList.add('active');
                parentSubmenu.style.display = 'block';
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
        'tiktok': 'tiktok',
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
            'tiktok': ['tiktok', '抖音'],
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
            'social-china': ['中国', 'china', 'domestic'],
            'social-influencer': ['红人', '网红', '博主', 'influencer']
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
    
    // 移除相关的"显示更多"按钮
    cleanupMoreButtons(gridId);
    
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

// 初始化合租平台数据
const rentData = [
    {
        title: '银河录像局',
        description: 'AI账号共享平台，提供各类AI工具的账号共享服务',
        tags: ['AI账号', '共享平台', '账号合租'],
        url: 'https://nf.video/wKHLL',
        subcategory: 'ai-account',
        isRecommended: true
    },
    {
        title: '银河录像局',
        description: '社交媒体账号共享平台，提供各类社交媒体账号的共享服务',
        tags: ['社交媒体', '账号共享', '合租平台'],
        url: 'https://nf.video/wKHLL',
        subcategory: 'social-account',
        isRecommended: true
    },
    {
        title: '野火',
        description: '软件账号共享平台，提供各类软件工具的账号共享服务',
        tags: ['软件账号', '共享平台', '合租服务'],
        url: 'https://yeka.ai/',
        subcategory: 'software-account',
        isRecommended: true
    }
];

// 更新子分类按钮状态
function updateSubcategoryButtons(sectionId, activeSubcategory) {
    const buttons = document.querySelectorAll(`#${sectionId} .subcategory-btn`);
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    const activeButton = document.querySelector(`#${sectionId} .subcategory-btn[onclick*="${activeSubcategory}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// 加载合租平台数据
function loadRentSites() {
    const rentGrid = document.getElementById('rent-grid');
    if (!rentGrid) return;
    
    rentGrid.innerHTML = '';
    
    if (sitesData.rent) {
        sitesData.rent.forEach(site => {
            rentGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // 初始化卡片可见性
    initializeCardVisibility('rent-grid');
}

// 筛选合租平台子分类
function filterRentSubcategory(subcategory) {
    const rentGrid = document.getElementById('rent-grid');
    if (!rentGrid) return;
    
    // 更新按钮状态
    updateSubcategoryButtons('rent-section', subcategory);
    
    rentGrid.innerHTML = '';
    
    if (sitesData.rent) {
        sitesData.rent.forEach(site => {
            if (subcategory === 'all' || site.subcategory === subcategory) {
                rentGrid.innerHTML += createSiteCard(site);
            }
        });
    }
    
    // 初始化卡片可见性
    initializeCardVisibility('rent-grid');
}

// 在页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // 加载合租平台数据
    loadRentSites();
    
    // 添加合租平台到handleCategoryVisibility函数中
    handleCategoryVisibility = function() {
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
        initializeCardVisibility('rent-grid');
    }
}); 