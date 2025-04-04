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
    return `
        <div class="more-sites-btn-container" style="text-align: center; width: 100%; margin: 5px 0;">
            <button class="more-sites-btn" onclick="toggleMoreSites('${sectionId}', this)">
                ${buttonText}
            </button>
        </div>
    `;
}

// 切换展开/收起状态
function toggleMoreSites(sectionId, buttonElement) {
    const siteCards = document.querySelectorAll(`#${sectionId} .site-card`);
    const isExpanded = buttonElement.textContent.trim().includes('收起');
    
    // 切换卡片显示状态
    siteCards.forEach((card, index) => {
        if (index >= 8) {
            card.classList.toggle('hidden', isExpanded);
        }
    });
    
    // 更新按钮文本
    buttonElement.innerHTML = isExpanded ? '显示更多 +' : '- 收起';
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector(`#${sectionId} .more-sites-btn-container`);
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const sectionElement = document.getElementById(sectionId);
        sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton(sectionId));
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
}

// 加载网站数据
function loadSites() {
    // 加载电商平台
    const ecommerceGrid = document.getElementById('ecommerce-grid');
    if (ecommerceGrid) {
        ecommerceGrid.innerHTML = '';
        sitesData.ecommerce.forEach(site => {
            ecommerceGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // 加载社交平台
    const socialGrid = document.getElementById('social-grid');
    if (socialGrid) {
        socialGrid.innerHTML = '';
        sitesData.social.forEach(site => {
            socialGrid.innerHTML += createSiteCard(site);
        });
    }
    
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
    if (aiCodingGrid) {
        aiCodingGrid.innerHTML = '';
        sitesData.ai_coding.forEach(site => {
            aiCodingGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // 初始化卡片可见性
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector('#website-tools-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const container = document.getElementById('website-tools-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('website-tools-grid'));
    } else {
        // 确保所有可见卡片都显示出来
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector('#ecommerce-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const container = document.getElementById('ecommerce-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ecommerce-grid'));
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector('#social-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const container = document.getElementById('social-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('social-grid'));
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector('#ai-writing-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const container = document.getElementById('ai-writing-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-writing-grid'));
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector('#ai-chat-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const container = document.getElementById('ai-chat-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-chat-grid'));
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector('#ai-image-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const container = document.getElementById('ai-image-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-image-grid'));
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector('#ai-video-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const container = document.getElementById('ai-video-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-video-grid'));
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector('#ai-audio-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const container = document.getElementById('ai-audio-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-audio-grid'));
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector('#ai-design-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const container = document.getElementById('ai-design-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-design-grid'));
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
    
    // 移除旧的更多按钮
    const oldButton = document.querySelector('#ai-coding-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
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
        
        // 添加"显示更多"按钮
        const container = document.getElementById('ai-coding-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-coding-grid'));
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
        
        // 更新导航高亮状态
        updateNavHighlight('home');
        
        // 处理卡片可见性
        handleCategoryVisibility();
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
        document.getElementById('ai-coding-section').style.display = 'block';
        
        // 过滤二级分类
        if (category !== 'ai_coding') {
            filterAiCodingSubcategory(category);
        } else {
            // 显示全部时，选中"全部"按钮
            document.querySelectorAll('#ai-coding-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-coding-section .subcategory-btn[onclick*="filterAiCodingSubcategory(\'all\')"]').classList.add('active');
        }
        
        // 更新导航栏高亮状态
        updateNavHighlight('ai_coding');
    }
    
    // 处理卡片可见性
    handleCategoryVisibility();
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
    const query = document.getElementById('search-input').value.trim();
    if (!query) return;
    
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

// 添加键盘事件
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
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

    // 页面加载时初始化
    loadSites();
    showCategory('home');
});

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