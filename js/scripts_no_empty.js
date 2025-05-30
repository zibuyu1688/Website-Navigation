// ?????????
function createSiteCard(site) {
    // ?????????????PN???
    const needsMagic = site.needsMagic || site.tags.includes('???');
    const magicTag = needsMagic ? `<div class="magic-tag">???</div>` : '';
    
    // ?????????????????
    const isRecommended = site.isRecommended || site.isPopular || site.tags.includes('???');
    const recommendTag = isRecommended ? `<div class="recommend-tag"><i class="bi bi-star-fill"></i> ??????</div>` : '';
    
    // ?????????
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
                    ??? <i class="bi bi-box-arrow-up-right"></i>
                </a>
            </div>
        </div>
    `;
}
// ??RL????????
function extractDomain(url) {
    try {
        // ??????????????RL
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        
        const hostname = new URL(url).hostname;
        return hostname;
    } catch (e) {
        // ???URL?????????????????
        console.error('URL??????:', e);
        return url.replace(/^https?:\/\//, '').split('/')[0];
    }
}
// ??????/??????
function createMoreSitesButton(sectionId, expanded = false) {
    const buttonText = expanded ? '- ???' : '?????? +';
    return `
        <div class="more-sites-btn-container" style="text-align: center; width: 100%; margin: 5px 0;">
            <button class="more-sites-btn" onclick="toggleMoreSites('${sectionId}', this)">
                ${buttonText}
            </button>
        </div>
    `;
}
// ??????/???????
function toggleMoreSites(sectionId, buttonElement) {
    const siteCards = document.querySelectorAll(`#${sectionId} .site-card`);
    const isExpanded = buttonElement.textContent.trim().includes('???');
    
    // ?????????????
    siteCards.forEach((card, index) => {
        if (index >= 8) {
            card.classList.toggle('hidden', isExpanded);
        }
    });
    
    // ?????????
    buttonElement.innerHTML = isExpanded ? '?????? +' : '- ???';
}
// ?????????????????????
function initializeCardVisibility(sectionId) {
    const siteCards = document.querySelectorAll(`#${sectionId} .site-card`);
    let visibleCards = 0;
    
    // ????????????
    siteCards.forEach(card => {
        if (card.style.display !== 'none') {
            visibleCards++;
        }
    });
    
    // ????????????
    const oldButton = document.querySelector(`#${sectionId} .more-sites-btn-container`);
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ????????????????????????????"???
    if (visibleCards > 8) {
        // ??????????????
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
        
        // ???"??????"???
        const sectionElement = document.getElementById(sectionId);
        sectionElement.insertAdjacentHTML('beforeend', createMoreSitesButton(sectionId));
    } else {
        // ???????????????????????????????
        siteCards.forEach(card => {
            if (card.style.display !== 'none') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ????????????????????
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
// ?????????
function loadSites() {
    // ?????????
    const ecommerceGrid = document.getElementById('ecommerce-grid');
    ecommerceGrid.innerHTML = '';
    
    sitesData.ecommerce.forEach(site => {
        ecommerceGrid.innerHTML += createSiteCard(site);
    });
    
    // ?????????????
    initializeCardVisibility('ecommerce-grid');
    
    // ?????????
    const socialGrid = document.getElementById('social-grid');
    socialGrid.innerHTML = '';
    
    sitesData.social.forEach(site => {
        socialGrid.innerHTML += createSiteCard(site);
    });
    
    // ?????????????
    initializeCardVisibility('social-grid');
    
    // ?????????
    const websiteToolsGrid = document.getElementById('website-tools-grid');
    if (websiteToolsGrid) {
        websiteToolsGrid.innerHTML = '';
        sitesData.website.forEach(site => {
            websiteToolsGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // ???AI??????
    const aiChatGrid = document.getElementById('ai-chat-grid');
    if (aiChatGrid) {
        aiChatGrid.innerHTML = '';
        sitesData.ai_chat.forEach(site => {
            aiChatGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // ???AI??????
    const aiWritingGrid = document.getElementById('ai-writing-grid');
    if (aiWritingGrid) {
        aiWritingGrid.innerHTML = '';
        sitesData.ai_writing.forEach(site => {
            aiWritingGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // ???AI??????
    const aiImageGrid = document.getElementById('ai-image-grid');
    if (aiImageGrid) {
        aiImageGrid.innerHTML = '';
        sitesData.ai_image.forEach(site => {
            aiImageGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // ???AI??????
    const aiVideoGrid = document.getElementById('ai-video-grid');
    if (aiVideoGrid) {
        aiVideoGrid.innerHTML = '';
        sitesData.ai_video.forEach(site => {
            aiVideoGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // ???AI??????
    const aiAudioGrid = document.getElementById('ai-audio-grid');
    if (aiAudioGrid) {
        aiAudioGrid.innerHTML = '';
        sitesData.ai_audio.forEach(site => {
            aiAudioGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // ???AI??????
    const aiDesignGrid = document.getElementById('ai-design-grid');
    if (aiDesignGrid) {
        aiDesignGrid.innerHTML = '';
        sitesData.ai_design.forEach(site => {
            aiDesignGrid.innerHTML += createSiteCard(site);
        });
    }
    
    // ???AI??????
    const aiCodingGrid = document.getElementById('ai-coding-grid');
    aiCodingGrid.innerHTML = '';
    
    sitesData.ai_coding.forEach(site => {
        aiCodingGrid.innerHTML += createSiteCard(site);
    });
    
    // ?????????????
    initializeCardVisibility('ai-coding-grid');
    
    // ???AI????????
    const aiPromptsGrid = document.getElementById('ai-prompts-grid');
    aiPromptsGrid.innerHTML = '';
    
    sitesData.ai_prompts.forEach(site => {
        aiPromptsGrid.innerHTML += createSiteCard(site);
    });
    
    // ?????????????
    initializeCardVisibility('ai-prompts-grid');
    
    // ???AI??????
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
        
        // ?????????????
        initializeCardVisibility('ai-search-grid');
    }
    
    // ???????????
    handleCategoryVisibility();
}
// ???????????????
function filterSubcategory(subcategory) {
    // ??????????
    document.querySelectorAll('#website-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#website-section .subcategory-btn[onclick*="filterSubcategory('${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll('#website-tools-grid .site-card');
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector('#website-tools-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    console.log(`${subcategory} ?????? ${visibleCards} ????????);
    
    // ???????????????8??????????????"??????????????
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById('website-tools-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('website-tools-grid'));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ???????????????
function filterEcommerceSubcategory(subcategory) {
    // ??????????
    document.querySelectorAll('#ecommerce-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ecommerce-section .subcategory-btn[onclick*="filterEcommerceSubcategory('${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll('#ecommerce-grid .site-card');
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector('#ecommerce-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ???????????????8??????????????"???
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById('ecommerce-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ecommerce-grid'));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ???????????????
function filterSocialSubcategory(subcategory) {
    // ??????????
    document.querySelectorAll('#social-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#social-section .subcategory-btn[onclick*="filterSocialSubcategory('${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll('#social-grid .site-card');
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector('#social-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ???????????????8??????????????"???
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById('social-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('social-grid'));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ???AI?????????
function filterAiWritingSubcategory(subcategory) {
    // ??????????
    document.querySelectorAll('#ai-writing-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-writing-section .subcategory-btn[onclick*="filterAiWritingSubcategory('${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll('#ai-writing-grid .site-card');
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector('#ai-writing-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ???????????????8??????????????"???
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById('ai-writing-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-writing-grid'));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ???AI?????????
function filterAiChatSubcategory(subcategory) {
    // ??????????
    document.querySelectorAll('#ai-chat-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-chat-section .subcategory-btn[onclick*="filterAiChatSubcategory('${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll('#ai-chat-grid .site-card');
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector('#ai-chat-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ???????????????8??????????????"???
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById('ai-chat-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-chat-grid'));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ???AI?????????
function filterAiImageSubcategory(subcategory) {
    // ??????????
    document.querySelectorAll('#ai-image-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-image-section .subcategory-btn[onclick*="filterAiImageSubcategory('${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll('#ai-image-grid .site-card');
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector('#ai-image-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ???????????????8??????????????"???
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById('ai-image-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-image-grid'));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ???AI?????????
function filterAiVideoSubcategory(subcategory) {
    // ??????????
    document.querySelectorAll('#ai-video-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-video-section .subcategory-btn[onclick*="filterAiVideoSubcategory('${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll('#ai-video-grid .site-card');
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector('#ai-video-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ???????????????8??????????????"???
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById('ai-video-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-video-grid'));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ???AI?????????
function filterAiAudioSubcategory(subcategory) {
    // ??????????
    document.querySelectorAll('#ai-audio-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-audio-section .subcategory-btn[onclick*="filterAiAudioSubcategory('${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll('#ai-audio-grid .site-card');
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector('#ai-audio-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ???????????????8??????????????"???
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById('ai-audio-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-audio-grid'));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ???AI?????????
function filterAiDesignSubcategory(subcategory) {
    // ??????????
    document.querySelectorAll('#ai-design-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-design-section .subcategory-btn[onclick*="filterAiDesignSubcategory('${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll('#ai-design-grid .site-card');
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector('#ai-design-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ???????????????8??????????????"???
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById('ai-design-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-design-grid'));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ???AI??????
function loadAiCodingTools() {
    const aiCodingGrid = document.getElementById('ai-coding-grid');
    aiCodingGrid.innerHTML = '';
    
    sitesData.ai_coding.forEach(site => {
        aiCodingGrid.innerHTML += createSiteCard(site);
    });
}
// ???AI????????
function loadAiPromptsTools() {
    const aiPromptsGrid = document.getElementById('ai-prompts-grid');
    aiPromptsGrid.innerHTML = '';
    
    sitesData.ai_prompts.forEach(site => {
        aiPromptsGrid.innerHTML += createSiteCard(site);
    });
}
// ???AI?????????
function filterAiCodingSubcategory(subcategory) {
    // ??????????
    document.querySelectorAll('#ai-coding-section .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#ai-coding-section .subcategory-btn[onclick*="filterAiCodingSubcategory('${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll('#ai-coding-grid .site-card');
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector('#ai-coding-grid .more-sites-btn-container');
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ???????????????8??????????????"???
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById('ai-coding-grid');
        container.insertAdjacentHTML('beforeend', createMoreSitesButton('ai-coding-grid'));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
}
// ???AI?????????
function filterAiPromptsSubcategory(subcategory) {
    filterSubcategoryGeneric('ai-prompts', subcategory);
}
// ???AI????????
function filterAiSearchSubcategory(subcategory) {
    filterSubcategoryGeneric('ai-search', subcategory);
}
// ??????
function showCategory(category) {
    // ??????????
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
    // ???????????????????
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
        
        // ?????????????
        updateNavHighlight('home');
        
        // ???????????
        handleCategoryVisibility();
        return;
    }
    // ????????????????????
    if (category === 'ecommerce') {
        document.getElementById('ecommerce-section').style.display = 'block';
        
        // ??????????????
        updateNavHighlight('ecommerce');
    } else if (category === 'social') {
        document.getElementById('social-section').style.display = 'block';
        
        // ??????????????
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
        
        // ?????????
        if (category !== 'website') {
            filterSubcategory(category);
        } else {
            // ????????????"???"???
            document.querySelectorAll('#website-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#website-section .subcategory-btn[onclick*="filterSubcategory(\'all\')"]').classList.add('active');
        }
        
        // ??????????????
        updateNavHighlight('website');
    } else if (category === 'ai_chat' || 
               category === 'general_assistant' || 
               category === 'entertainment_ai' || 
               category === 'role_play' || 
               category === 'multimodal_ai' || 
               category === 'professional_ai' || 
               category === 'international_ai') {
        document.getElementById('ai-chat-section').style.display = 'block';
        
        // ?????????
        if (category !== 'ai_chat') {
            filterAiChatSubcategory(category);
        } else {
            // ????????????"???"???
            document.querySelectorAll('#ai-chat-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-chat-section .subcategory-btn[onclick*="filterAiChatSubcategory(\'all\')"]').classList.add('active');
        }
        
        // ??????????????
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
        
        // ?????????
        if (category !== 'ai_writing') {
            filterAiWritingSubcategory(category);
        } else {
            // ????????????"???"???
            document.querySelectorAll('#ai-writing-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-writing-section .subcategory-btn[onclick*="filterAiWritingSubcategory(\'all\')"]').classList.add('active');
        }
        
        // ??????????????
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
        
        // ?????????
        if (category !== 'ai_image') {
            filterAiImageSubcategory(category);
        } else {
            // ????????????"???"???
            document.querySelectorAll('#ai-image-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-image-section .subcategory-btn[onclick*="filterAiImageSubcategory(\'all\')"]').classList.add('active');
        }
        
        // ??????????????
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
        
        // ?????????
        if (category !== 'ai_video') {
            filterAiVideoSubcategory(category);
        } else {
            // ????????????"???"???
            document.querySelectorAll('#ai-video-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-video-section .subcategory-btn[onclick*="filterAiVideoSubcategory(\'all\')"]').classList.add('active');
        }
        
        // ??????????????
        updateNavHighlight('ai_video');
    } else if (category === 'ai_audio' || 
               category === 'tts' || 
               category === 'music_generation' || 
               category === 'speech_to_text' || 
               category === 'voice_conversion' || 
               category === 'audio_editing' || 
               category === 'other_audio_tools') {
        document.getElementById('ai-audio-section').style.display = 'block';
        
        // ?????????
        if (category !== 'ai_audio') {
            filterAiAudioSubcategory(category);
        } else {
            // ????????????"???"???
            document.querySelectorAll('#ai-audio-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-audio-section .subcategory-btn[onclick*="filterAiAudioSubcategory(\'all\')"]').classList.add('active');
        }
        
        // ??????????????
        updateNavHighlight('ai_audio');
    } else if (category === 'ai_design') {
        document.getElementById('ai-design-section').style.display = 'block';
        
        // ?????????
        if (category !== 'ai_design') {
            filterAiDesignSubcategory(category);
        } else {
            // ????????????"???"???
            document.querySelectorAll('#ai-design-section .subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('#ai-design-section .subcategory-btn[onclick*="filterAiDesignSubcategory(\'all\')"]').classList.add('active');
        }
        
        // ??????????????
        updateNavHighlight('ai_design');
    } else if (category === 'ai_coding' || 
               category === 'code_generation' || 
               category === 'fullstack_dev' || 
               category === 'design_to_code' || 
               category === 'code_review' || 
               category === 'natural_language_dev' || 
               category === 'low_code' || 
               category === 'cloud_ide') {
        // ???AI??????
        document.getElementById('ai-coding-section').style.display = 'block';
        
        // ?????????
        if (category !== 'ai_coding') {
            filterAiCodingSubcategory(category);
        } else {
            // ????????
            document.querySelectorAll('#ai-coding-section .subcategory-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('#ai-coding-section .subcategory-btn[onclick*="filterAiCodingSubcategory(\'all\')"]').classList.add('active');
            loadAiCodingTools();
        }
        
        // ??????????????
        updateNavHighlight('ai_coding');
    } else if (category === 'ai_prompts' || category === 'prompt_platforms' || 
        category === 'sd_tools' || category === 'chatgpt_prompts' || 
        category === 'visual_tools' || category === 'chinese_resources' || 
        category === 'other_tools') {
        // ???AI????????
        document.getElementById('ai-prompts-section').style.display = 'block';
        
        // ?????????
        if (category !== 'ai_prompts') {
            filterAiPromptsSubcategory(category);
        } else {
            // ????????
            document.querySelectorAll('#ai-prompts-section .subcategory-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('#ai-prompts-section .subcategory-btn[onclick*="filterAiPromptsSubcategory(\'all\')"]').classList.add('active');
            loadAiPromptsTools();
        }
        
        // ??????????????
        updateNavHighlight('ai_prompts');
    } else if (category === 'ai_search' || category === 'general_search' || 
        category === 'vertical_search') {
        // ???AI??????
        document.getElementById('ai-search-section').style.display = 'block';
        
        // ?????????
        if (category !== 'ai_search') {
            filterAiSearchSubcategory(category);
        } else {
            // ????????
            document.querySelectorAll('#ai-search-section .subcategory-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('#ai-search-section .subcategory-btn[onclick*="filterAiSearchSubcategory(\'all\')"]').classList.add('active');
        }
        
        // ??????????????
        updateNavHighlight('ai_search');
    }
    
    // ???????????
    handleCategoryVisibility();
}
// ????????
function toggleSubmenu(element) {
    const parentItem = element.parentElement;
    parentItem.classList.toggle('active');
    const submenu = parentItem.querySelector('.nav-submenu');
    if (submenu) {
        submenu.classList.toggle('active');
    }
}
// ??????
let currentSearchEngine = 'site'; // ???????????
// ??????????????????
function toggleSearchEngines() {
    document.getElementById('search-engine-dropdown').classList.toggle('show');
}
// ?????????
function selectSearchEngine(engine) {
    currentSearchEngine = engine;
    
    // ?????????
    const btnName = document.getElementById('current-engine-name');
    const btnIcon = document.getElementById('current-engine-icon');
    
    // ??????????
    document.querySelectorAll('.search-engine-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.search-engine-item[data-engine="${engine}"]`).classList.add('active');
    
    // ??????????????
    switch(engine) {
        case 'site':
            btnName.textContent = '??????';
            btnIcon.innerHTML = '<i class="bi bi-search"></i>';
            break;
        case 'baidu':
            btnName.textContent = '???';
            btnIcon.innerHTML = '<img src="https://www.baidu.com/favicon.ico" alt="???" class="search-engine-icon">';
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
    
    // ?????????
    document.getElementById('search-engine-dropdown').classList.remove('show');
}
// ??????
function performSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (!query) return;
    
    // ?????????????????????
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
// ?????????
function performSiteSearch(query) {
    query = query.toLowerCase();
    if (!query) {
        loadSites();
        document.querySelectorAll('.category-section').forEach(section => {
            section.style.display = 'block';
        });
        return;
    }
    // ??????????
    document.querySelectorAll('.category-section').forEach(section => {
        section.style.display = 'block';
    });
    
    // ?????????
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
        
        // ??????????????
        initializeCardVisibility('ecommerce-grid');
    }
    
    // ?????????
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
        
        // ??????????????
        initializeCardVisibility('social-grid');
    }
    // ?????????
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
        
        // ??????????????
        initializeCardVisibility('website-tools-grid');
    }
    
    // ???AI??????
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
        
        // ??????????????
        initializeCardVisibility('ai-chat-grid');
    }
    
    // ???AI??????
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
        
        // ??????????????
        initializeCardVisibility('ai-writing-grid');
    }
    // ???AI??????
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
        
        // ??????????????
        initializeCardVisibility('ai-image-grid');
    }
    
    // ???AI??????
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
        
        // ??????????????
        initializeCardVisibility('ai-video-grid');
    }
    
    // ???AI??????
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
        
        // ??????????????
        initializeCardVisibility('ai-audio-grid');
    }
    
    // ???AI??????
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
        
        // ??????????????
        initializeCardVisibility('ai-design-grid');
    }
    
    // ???AI??????
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
        
        // ??????????????
        initializeCardVisibility('ai-coding-grid');
    }
}
// ?????????
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    // ???????????????????????????
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('search-engine-dropdown');
        const btn = document.getElementById('search-engine-btn');
        
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
    // ????????????
    loadSites();
    showCategory('home');
});
// ?????????????
function updateNavHighlight(category) {
    // ???????????????????
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // ??????????????
    const activeLink = document.querySelector(`.nav-link[onclick*="showCategory('${category}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        
        // ????????????????????????????????
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
// ????????
function filterSubcategoryGeneric(sectionId, subcategory) {
    // ??????????
    document.querySelectorAll(`#${sectionId}-section .subcategory-btn`).forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#${sectionId}-section .subcategory-btn[onclick*="${subcategory}')"]`).classList.add('active');
    // ??????
    const cards = document.querySelectorAll(`#${sectionId}-grid .site-card`);
    let visibleCards = 0;
    
    // ????????idden?????????????
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
    
    // ????????????
    const oldButton = document.querySelector(`#${sectionId}-grid .more-sites-btn-container`);
    if (oldButton) {
        oldButton.parentNode.removeChild(oldButton);
    }
    
    // ???????????????8??????????????"??????????????
    if (visibleCards > 8) {
        // ??????????????
        let count = 0;
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                count++;
                if (count > 8) {
                    card.classList.add('hidden');
                }
            }
        });
        
        // ???"??????"???
        const container = document.getElementById(`${sectionId}-grid`);
        container.insertAdjacentHTML('beforeend', createMoreSitesButton(`${sectionId}-grid`));
    } else {
        // ????????????????????
        cards.forEach(card => {
            if (card.style.display === 'flex') {
                card.classList.remove('hidden');
            }
        });
    }
} 
