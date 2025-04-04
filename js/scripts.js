// 创建网站卡片
function createSiteCard(site) {
    // 检查网站是否需要VPN访问
    const needsMagic = site.needsMagic || site.tags.includes('魔法');
    const magicTag = needsMagic ? `<div class="magic-tag">魔法</div>` : '';
    
    // 检查网站是否为推荐网站
    const isRecommended = site.isRecommended || site.isPopular || site.tags.includes('推荐');
    const recommendTag = isRecommended ? `<div class="recommend-tag"><i class="bi bi-star-fill"></i> 强烈推荐</div>` : '';
    
    // 处理网站图标
    const domain = extractDomain(site.url);
    let logoUrl = site.logo || `https://${domain}/favicon.ico`;
    const fallbackIcon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    
    return `
        <div class="site-card" data-subcategory="${site.subcategory || ''}" style="position: relative;">
            ${magicTag}
            ${recommendTag}
            <div class="card-content">
                <div class="card-header">
                    <div class="site-logo">
                        <img src="${logoUrl}" alt="${site.title}" onerror="this.onerror=null; this.src='${fallbackIcon}';">
                    </div>
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
    
    // 移除该区域内所有的"显示更多"按钮
    const allOldButtons = document.querySelectorAll(`#${sectionId}-section .more-sites-btn-container`);
    allOldButtons.forEach(button => {
        button.parentNode.removeChild(button);
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
    if (websiteToolsGrid) {
        websiteToolsGrid.innerHTML = '';
        sitesData.website.forEach(site => {
            websiteToolsGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // 加载AI对话工具
    const aiChatGrid = document.getElementById('ai-chat-grid');
    if (aiChatGrid) {
        aiChatGrid.innerHTML = '';
        sitesData.ai_chat.forEach(site => {
            aiChatGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // 加载AI写作工具
    const aiWritingGrid = document.getElementById('ai-writing-grid');
    if (aiWritingGrid) {
        aiWritingGrid.innerHTML = '';
        sitesData.ai_writing.forEach(site => {
            aiWritingGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // 加载AI图像工具
    const aiImageGrid = document.getElementById('ai-image-grid');
    if (aiImageGrid) {
        aiImageGrid.innerHTML = '';
        sitesData.ai_image.forEach(site => {
            aiImageGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // 加载AI视频工具
    const aiVideoGrid = document.getElementById('ai-video-grid');
    if (aiVideoGrid) {
        aiVideoGrid.innerHTML = '';
        sitesData.ai_video.forEach(site => {
            aiVideoGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // 加载AI音频工具
    const aiAudioGrid = document.getElementById('ai-audio-grid');
    if (aiAudioGrid) {
        aiAudioGrid.innerHTML = '';
        sitesData.ai_audio.forEach(site => {
            aiAudioGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // 加载AI设计工具
    const aiDesignGrid = document.getElementById('ai-design-grid');
    if (aiDesignGrid) {
        aiDesignGrid.innerHTML = '';
        sitesData.ai_design.forEach(site => {
            aiDesignGrid.innerHTML += createSiteCard(site);
        });
    }
    
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
                    logo: site.logo,
                    description: site.description,
                    url: site.url,
                    tags: site.tags,
                    subcategory: site.subcategory
                });
            });
        }
        
        // 初始化卡片可见性
        initializeCardVisibility('ai-search-grid');
    }
    
    // 处理卡片可见性
    handleCategoryVisibility();
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
    const allOldButtons = document.querySelectorAll(`#social-section .more-sites-btn-container`);
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
    const allOldButtons = document.querySelectorAll(`#ai-writing-section .more-sites-btn-container`);
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
    const allOldButtons = document.querySelectorAll(`#ai-chat-section .more-sites-btn-container`);
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
    const allOldButtons = document.querySelectorAll(`#ai-image-section .more-sites-btn-container`);
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
    const allOldButtons = document.querySelectorAll(`#ai-video-section .more-sites-btn-container`);
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
        
        // 更新导航高亮状态
        updateNavHighlight('home');
        
        // 处理卡片可见性
        handleCategoryVisibility();
        
        // 平衡所有显示的二级分类导航
        setTimeout(balanceAllSubcategoryNavs, 50);
        return;
    }

    // 根据传入的分类显示相应内容
    if (category === 'ecommerce') {
        document.getElementById('ecommerce-section').style.display = 'block';
        
        // 更新导航栏高亮状态
        updateNavHighlight('ecommerce');
    } else if (category === 'social') {
        document.getElementById('social-section').style.display = 'block';
        
        // 更新导航栏高亮状态
        updateNavHighlight('social');
    } else if (category === 'website' || 
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
}

// 切换子菜单
function toggleSubmenu(element) {
    const parentItem = element.parentElement;
    parentItem.classList.toggle('active');
    const submenu = parentItem.querySelector('.nav-submenu');
    if (submenu) {
        submenu.classList.toggle('active');
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
    
    if (query.length === 0) {
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
        return;
    }

    // 显示所有分类
    document.querySelectorAll('.category-section').forEach(section => {
        section.style.display = 'block';
    });
    
    // 搜索电商平台
    const ecommerceGrid = document.getElementById('ecommerce-grid');
    if (ecommerceGrid) {
        ecommerceGrid.innerHTML = '';
        const filteredEcommerce = sitesData.ecommerce.filter(site => 
            site && (
                site.title.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query) ||
                site.tags.some(tag => tag.toLowerCase().includes(query))
            )
        );
        filteredEcommerce.forEach(site => {
            ecommerceGrid.innerHTML += createSiteCard(site);
        });
        
        // 重新应用卡片可见性
        initializeCardVisibility('ecommerce-grid');
    }
    
    // 搜索社交平台
    const socialGrid = document.getElementById('social-grid');
    if (socialGrid) {
        socialGrid.innerHTML = '';
        const filteredSocial = sitesData.social.filter(site => 
            site && (
                site.title.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query) ||
                site.tags.some(tag => tag.toLowerCase().includes(query))
            )
        );
        filteredSocial.forEach(site => {
            socialGrid.innerHTML += createSiteCard(site);
        });
        
        // 重新应用卡片可见性
        initializeCardVisibility('social-grid');
    }

    // 搜索建站工具
    const websiteToolsGrid = document.getElementById('website-tools-grid');
    if (websiteToolsGrid) {
        websiteToolsGrid.innerHTML = '';
        const filteredWebsite = sitesData.website.filter(site => 
            site && (
                site.title.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query) ||
                site.tags.some(tag => tag.toLowerCase().includes(query))
            )
        );
        filteredWebsite.forEach(site => {
            websiteToolsGrid.innerHTML += createSiteCard(site);
        });
        
        // 重新应用卡片可见性
        initializeCardVisibility('website-tools-grid');
    }
    
    // 搜索AI对话工具
    const aiChatGrid = document.getElementById('ai-chat-grid');
    if (aiChatGrid) {
        aiChatGrid.innerHTML = '';
        const filteredAiChat = sitesData.ai_chat.filter(site => 
            site && (
                site.title.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query) ||
                site.tags.some(tag => tag.toLowerCase().includes(query))
            )
        );
        filteredAiChat.forEach(site => {
            aiChatGrid.innerHTML += createSiteCard(site);
        });
        
        // 重新应用卡片可见性
        initializeCardVisibility('ai-chat-grid');
    }
    
    // 搜索AI写作工具
    const aiWritingGrid = document.getElementById('ai-writing-grid');
    if (aiWritingGrid) {
        aiWritingGrid.innerHTML = '';
        const filteredAiWriting = sitesData.ai_writing.filter(site => 
            site && (
                site.title.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query) ||
                site.tags.some(tag => tag.toLowerCase().includes(query))
            )
        );
        filteredAiWriting.forEach(site => {
            aiWritingGrid.innerHTML += createSiteCard(site);
        });
        
        // 重新应用卡片可见性
        initializeCardVisibility('ai-writing-grid');
    }

    // 搜索AI图像工具
    const aiImageGrid = document.getElementById('ai-image-grid');
    if (aiImageGrid) {
        aiImageGrid.innerHTML = '';
        const filteredAiImage = sitesData.ai_image.filter(site => 
            site && (
                site.title.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query) ||
                site.tags.some(tag => tag.toLowerCase().includes(query))
            )
        );
        filteredAiImage.forEach(site => {
            aiImageGrid.innerHTML += createSiteCard(site);
        });
        
        // 重新应用卡片可见性
        initializeCardVisibility('ai-image-grid');
    }
    
    // 搜索AI视频工具
    const aiVideoGrid = document.getElementById('ai-video-grid');
    if (aiVideoGrid) {
        aiVideoGrid.innerHTML = '';
        const filteredAiVideo = sitesData.ai_video.filter(site => 
            site && (
                site.title.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query) ||
                site.tags.some(tag => tag.toLowerCase().includes(query))
            )
        );
        filteredAiVideo.forEach(site => {
            aiVideoGrid.innerHTML += createSiteCard(site);
        });
        
        // 重新应用卡片可见性
        initializeCardVisibility('ai-video-grid');
    }
    
    // 搜索AI音频工具
    const aiAudioGrid = document.getElementById('ai-audio-grid');
    if (aiAudioGrid) {
        aiAudioGrid.innerHTML = '';
        const filteredAiAudio = sitesData.ai_audio.filter(site => 
            site && (
                site.title.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query) ||
                site.tags.some(tag => tag.toLowerCase().includes(query))
            )
        );
        filteredAiAudio.forEach(site => {
            aiAudioGrid.innerHTML += createSiteCard(site);
        });
        
        // 重新应用卡片可见性
        initializeCardVisibility('ai-audio-grid');
    }
    
    // 搜索AI设计工具
    const aiDesignGrid = document.getElementById('ai-design-grid');
    if (aiDesignGrid) {
        aiDesignGrid.innerHTML = '';
        const filteredAiDesign = sitesData.ai_design.filter(site => 
            site && (
                site.title.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query) ||
                site.tags.some(tag => tag.toLowerCase().includes(query))
            )
        );
        filteredAiDesign.forEach(site => {
            aiDesignGrid.innerHTML += createSiteCard(site);
        });
        
        // 重新应用卡片可见性
        initializeCardVisibility('ai-design-grid');
    }
    
    // 搜索AI编程工具
    const aiCodingGrid = document.getElementById('ai-coding-grid');
    if (aiCodingGrid) {
        aiCodingGrid.innerHTML = '';
        const filteredAiCoding = sitesData.ai_coding.filter(site => 
            site && (
                site.title.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query) ||
                site.tags.some(tag => tag.toLowerCase().includes(query))
            )
        );
        filteredAiCoding.forEach(site => {
            aiCodingGrid.innerHTML += createSiteCard(site);
        });
        
        // 重新应用卡片可见性
        initializeCardVisibility('ai-coding-grid');
    }
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
            // 当输入框内容被清空时，恢复首页状态
            showCategory('home');
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
});

// 清除搜索框内容并恢复首页状态
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    document.getElementById('clear-search-btn').classList.remove('visible');
    
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
        { id: 'website', icon: 'bi-globe', text: '建站工具' },
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
    
    // 计算按钮总宽度
    let totalButtonsWidth = 0;
    const buttonWidths = buttons.map(btn => {
        const width = btn.offsetWidth + parseInt(window.getComputedStyle(btn).marginLeft) + parseInt(window.getComputedStyle(btn).marginRight);
        totalButtonsWidth += width;
        return width;
    });
    
    // 如果总宽度小于容器宽度，则不需要分行
    if (totalButtonsWidth <= navWidth) return;
    
    // 计算应该在第一行放置多少按钮以实现平衡
    let firstRowWidth = 0;
    let buttonsInFirstRow = 0;
    
    // 尝试找到最佳的分割点，使得两行按钮数量尽量接近
    const idealButtonsPerRow = Math.ceil(buttons.length / 2);
    
    for (let i = 0; i < buttons.length; i++) {
        firstRowWidth += buttonWidths[i];
        
        // 如果已经达到或超过理想的每行按钮数量，或者宽度已经接近容器宽度的一半
        if (i + 1 >= idealButtonsPerRow || firstRowWidth >= navWidth * 0.9) {
            buttonsInFirstRow = i + 1;
            break;
        }
    }
    
    // 如果无法分割得很好，就简单地在中间分割
    if (buttonsInFirstRow === 0 || buttonsInFirstRow === buttons.length) {
        buttonsInFirstRow = Math.ceil(buttons.length / 2);
    }
    
    // 在适当位置添加换行元素
    if (buttonsInFirstRow < buttons.length) {
        const breakEl = document.createElement('div');
        breakEl.className = 'row-break';
        nav.insertBefore(breakEl, buttons[buttonsInFirstRow]);
    }
} 