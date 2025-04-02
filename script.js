// 分类切换函数 - 修改为滚动到指定分类位置而不是隐藏/显示页面
function showCategory(categoryId) {
    console.log('跳转到分类:', categoryId);
    
    // 1. 移除所有导航链接的active类
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // 2. 为当前点击的导航链接添加active类
    const activeLink = document.querySelector(`.nav-link[onclick*="showCategory('${categoryId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        
        // 如果是子菜单项，确保父菜单保持展开状态
        const parentSubmenu = activeLink.closest('.nav-submenu');
        if (parentSubmenu) {
            const parentItem = parentSubmenu.closest('.has-submenu');
            if (parentItem) {
                parentItem.classList.add('active');
                parentSubmenu.classList.add('active');
            }
        }
        
        console.log('激活导航链接:', activeLink.textContent.trim());
    } else {
        console.warn('未找到导航链接:', categoryId);
    }
    
    // 3. 滚动到对应分类
    if (categoryId === 'home') {
        // 如果是首页，滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // 首先尝试查找子分类
        let targetContent = document.getElementById(categoryId);
        
        // 如果没有找到子分类，则查找主分类
        if (!targetContent) {
            targetContent = document.getElementById(categoryId + '-page');
        }
        
        if (targetContent) {
            // 计算目标元素的位置并滚动
            const targetPosition = targetContent.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetPosition - 20, // 减去一点顶部间距以获得更好的视觉效果
                behavior: 'smooth'
            });
            console.log('滚动到内容区域:', targetContent.id);
        } else {
            console.error('找不到目标内容区域:', categoryId);
        }
    }
}

// 二级菜单切换功能
function toggleSubmenu(element) {
    const parentItem = element.parentElement;
    const wasActive = parentItem.classList.contains('active');
    
    // 关闭所有其他打开的子菜单
    document.querySelectorAll('.has-submenu').forEach(item => {
        item.classList.remove('active');
        const submenu = item.querySelector('.nav-submenu');
        if (submenu) {
            submenu.classList.remove('active');
        }
    });
    
    // 切换当前子菜单的状态
    if (!wasActive) {
        parentItem.classList.add('active');
        const submenu = parentItem.querySelector('.nav-submenu');
        if (submenu) {
            submenu.classList.add('active');
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 显示所有分类内容
    document.querySelectorAll('.category-section').forEach(section => {
        section.style.display = 'block';
    });
    
    // 默认激活首页导航
    const homeLinkElement = document.querySelector(`.nav-link[onclick*="showCategory('home')"]`);
    if (homeLinkElement) {
        homeLinkElement.classList.add('active');
    }

    const searchEngineSelector = document.getElementById('searchEngineSelector');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const currentEngine = document.getElementById('currentEngine');
    let selectedEngine = 'internal';

    // 搜索引擎下拉菜单切换
    searchEngineSelector.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });

    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', function() {
        searchEngineSelector.classList.remove('active');
    });

    // 搜索引擎选择
    document.querySelectorAll('.search-engine-option').forEach(option => {
        option.addEventListener('click', function() {
            selectedEngine = this.dataset.engine;
            currentEngine.textContent = this.textContent;
            searchEngineSelector.classList.remove('active');
        });
    });

    // 执行搜索
    function performSearch() {
        const query = searchInput.value.trim();
        if (!query) return;

        let searchUrl;
        switch (selectedEngine) {
            case 'internal':
                // 站内搜索逻辑
                searchInternalContent(query);
                return;
            case 'gemini':
                searchUrl = `https://gemini.google.com/`;
                break;
            case 'chatgpt':
                searchUrl = `https://chatgpt.com/`;
                break;
            case 'secretSearch':
                searchUrl = `https://www.mituwen.com/search?q=${encodeURIComponent(query)}`;
                break;
            case 'baidu':
                searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
                break;
            case 'bing':
                searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
                break;
            case 'google':
                searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                break;
        }

        if (searchUrl) {
            window.open(searchUrl, '_blank');
        }
    }

    // 站内搜索功能
    function searchInternalContent(query) {
        console.log('执行站内搜索:', query);
        
        // 清除之前的搜索结果高亮
        document.querySelectorAll('.tool-card').forEach(card => {
            card.classList.remove('search-highlight');
            card.style.display = '';
        });
        
        if (!query) {
            // 如果搜索词为空，显示所有内容
            document.querySelectorAll('.category-section').forEach(section => {
                section.style.display = 'block';
            });
            document.querySelectorAll('.sub-category').forEach(sub => {
                sub.style.display = 'block';
            });
            return;
        }
        
        const searchResults = [];
        let hasResults = false;
        
        // 搜索所有工具卡片
        document.querySelectorAll('.tool-card').forEach(card => {
            const title = card.querySelector('.tool-title').textContent.toLowerCase();
            const desc = card.querySelector('.tool-desc').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tool-tag')).map(tag => tag.textContent.toLowerCase());
            
            const searchQuery = query.toLowerCase();
            
            // 检查标题、描述和标签是否匹配搜索词
            if (title.includes(searchQuery) || 
                desc.includes(searchQuery) || 
                tags.some(tag => tag.includes(searchQuery))) {
                
                card.classList.add('search-highlight');
                card.style.display = '';
                hasResults = true;
                
                // 获取卡片所在的分类区域
                const categorySection = card.closest('.category-section');
                if (categorySection) {
                    categorySection.style.display = 'block';
                }
                
                // 如果卡片在子分类中，显示子分类
                const subCategory = card.closest('.sub-category');
                if (subCategory) {
                    subCategory.style.display = 'block';
                }
                
                searchResults.push({
                    element: card,
                    title: title,
                    relevance: title.includes(searchQuery) ? 2 : 1
                });
            } else {
                card.style.display = 'none';
            }
        });
        
        // 隐藏没有匹配结果的分类
        document.querySelectorAll('.category-section').forEach(section => {
            const visibleCards = Array.from(section.querySelectorAll('.tool-card')).filter(card => 
                card.style.display !== 'none'
            ).length;
            
            if (visibleCards === 0) {
                section.style.display = 'none';
            }
        });
        
        // 如果没有搜索结果，显示提示信息
        const noResultsMsg = document.getElementById('noResultsMessage') || createNoResultsMessage();
        if (!hasResults) {
            noResultsMsg.style.display = 'block';
            noResultsMsg.textContent = `未找到与"${query}"相关的工具`;
        } else {
            noResultsMsg.style.display = 'none';
        }
        
        // 按相关性排序搜索结果
        searchResults.sort((a, b) => b.relevance - a.relevance);
        
        // 滚动到第一个搜索结果
        if (searchResults.length > 0) {
            searchResults[0].element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    // 创建无搜索结果提示信息
    function createNoResultsMessage() {
        const msg = document.createElement('div');
        msg.id = 'noResultsMessage';
        msg.style.cssText = `
            display: none;
            text-align: center;
            padding: 2rem;
            color: #666;
            font-size: 1.1rem;
            background: #fff;
            border-radius: 12px;
            margin: 2rem auto;
            max-width: 600px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        `;
        document.querySelector('.main-content').appendChild(msg);
        return msg;
    }

    // 搜索按钮点击事件
    searchButton.addEventListener('click', performSearch);

    // 输入框回车事件
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 快捷键搜索（Ctrl + K）
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    // 添加展开/收起功能
    function initializeShowMoreButtons() {
        console.log('初始化展开/收起按钮');
        const categories = document.querySelectorAll('.category-section');
        console.log('找到分类数量:', categories.length);
        
        categories.forEach(category => {
            const toolGrid = category.querySelector('.tool-grid');
            if (!toolGrid) {
                console.log('未找到工具网格');
                return;
            }
            
            const tools = toolGrid.querySelectorAll('.tool-card');
            console.log('工具卡片数量:', tools.length);
            
            if (tools.length <= 6) {
                console.log('工具卡片数量不足6个，不添加按钮');
                return;
            }
            
            // 移除已存在的"查看更多"按钮（如果有）
            const existingContainer = category.querySelector('.show-more-container');
            if (existingContainer) {
                existingContainer.remove();
            }
            
            // 创建"查看更多"容器和按钮
            const showMoreContainer = document.createElement('div');
            showMoreContainer.className = 'show-more-container';
            
            const showMoreBtn = document.createElement('button');
            showMoreBtn.className = 'show-more-btn';
            showMoreBtn.innerHTML = `查看更多 (${tools.length - 6}) <i class="bi bi-plus"></i>`;
            
            showMoreContainer.appendChild(showMoreBtn);
            toolGrid.parentNode.appendChild(showMoreContainer);
            
            // 默认隐藏超过6个的卡片
            tools.forEach((tool, index) => {
                if (index >= 6) {
                    tool.style.display = 'none';
                }
            });
            
            // 添加点击事件
            showMoreBtn.addEventListener('click', () => {
                category.classList.toggle('expanded');
                const isExpanded = category.classList.contains('expanded');
                
                // 更新按钮文本和图标
                showMoreBtn.innerHTML = isExpanded ? 
                    `收起 <i class="bi bi-dash"></i>` : 
                    `查看更多 (${tools.length - 6}) <i class="bi bi-plus"></i>`;
                
                // 显示或隐藏卡片
                tools.forEach((tool, index) => {
                    if (index >= 6) {
                        tool.style.display = isExpanded ? 'flex' : 'none';
                    }
                });
            });
            
            console.log('成功添加查看更多按钮');
        });
    }

    // 初始化展开/收起按钮
    initializeShowMoreButtons();
}); 