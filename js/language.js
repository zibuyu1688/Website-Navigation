/**
 * 多语言支持模块
 * 管理网站的中英文切换功能
 */

// 定义语言数据
const languageData = {
    'zh': {
        // 导航菜单
        'menu_home': '首页',
        'menu_ecommerce': '电商平台',
        'menu_amazon': '亚马逊',
        'menu_aliexpress': '速卖通',
        'menu_ebay': 'Ebay',
        'menu_lazada': 'Lazada',
        'menu_shopee': 'Shopee',
        'menu_other_ecommerce': '其他',
        'menu_social': '社交平台',
        'menu_social_global': '全球平台',
        'menu_social_china': '中国平台',
        'menu_website': '建站工具',
        'menu_seo': 'SEO工具',
        'menu_keyword': '关键字工具',
        'menu_analytics': '网站分析',
        'menu_domain': '域名注册',
        'menu_server': '服务器',
        'menu_payment': '收款工具',
        'menu_erp': 'ERP',
        'menu_network': '网络优化',
        'menu_account': '账号资源',
        'menu_temp_mail': '临时邮箱',
        'menu_ip_proxy': 'IP代理',
        'menu_browser': '指纹浏览器',
        'menu_backlink': '反向外链',
        'menu_content': '内容优化',
        'menu_learning': '学习资料',
        'menu_ai_chat': 'AI对话',
        'menu_general_assistant': '通用AI助手',
        'menu_entertainment_ai': '游戏与娱乐AI',
        'menu_role_play': '角色扮演与虚拟陪伴',
        'menu_multimodal_ai': '多模态AI助手',
        'menu_professional_ai': '专业领域AI',
        'menu_international_ai': '国际化AI助手',
        'menu_ai_writing': 'AI写作',
        'menu_academic_paper': '学术论文写作',
        'menu_fiction_writing': '小说与文学创作',
        'menu_marketing_copy': '营销与商业文案',
        'menu_blog_media': '新媒体与博客写作',
        'menu_official_document': '公文与政务写作',
        'menu_multilingual': '多语言写作与翻译',
        'menu_script_content': '脚本与创意内容',
        'menu_ai_image': 'AI图像',
        'menu_general_image': '通用AI图片生成',
        'menu_portrait': '人像与头像生成',
        'menu_background': '背景与设计素材',
        'menu_brand_design': '品牌与商业设计',
        'menu_photo_enhancement': '照片修复与增强',
        'menu_anime': '动漫与二次元创作',
        'menu_fun_tools': '娱乐与趣味工具',
        'menu_fashion': '服装与时尚设计',
        'menu_image_editing': '图像编辑与处理',
        'menu_professional_scene': '专业场景生成',
        'menu_ai_video': 'AI视频',
        'menu_text_to_video': '文本生成视频',
        'menu_image_to_video': '图片生成视频',
        'menu_video_editing': '视频编辑与增强',
        'menu_digital_human': 'AI数字人与虚拟主播',
        'menu_animation': '动画与卡通生成',
        'menu_short_video': '短视频与社交媒体工具',
        'menu_speech_driven': '语音驱动视频',
        'menu_professional_video': '专业级视频生成',
        'menu_opensource_tools': '开源与开发者工具',
        'menu_ai_audio': 'AI音频',
        'menu_tts': 'AI配音/文本转语音',
        'menu_music_generation': 'AI音乐生成与创作',
        'menu_speech_to_text': '语音转文字与录音助手',
        'menu_voice_conversion': 'AI变声与语音处理',
        'menu_audio_editing': '音频编辑与增强工具',
        'menu_other_audio_tools': '其他工具',
        'menu_ai_design': 'AI设计',
        'menu_commerce_design': '平面与电商设计',
        'menu_ui_ux': 'UI/UX与原型设计',
        'menu_illustration': '插画与矢量设计',
        'menu_model_design': '3D与模型设计',
        'menu_assistant_tools': '辅助设计工具',
        'menu_special_tools': '其他专项工具',
        'menu_ai_coding': 'AI编程',
        'menu_code_generation': '代码生成与补全',
        'menu_fullstack_dev': '全栈/端到端开发',
        'menu_design_to_code': '设计转代码',
        'menu_code_review': '代码审查与测试',
        'menu_natural_language_dev': '自然语言交互开发',
        'menu_low_code': '低代码/无代码平台',
        'menu_cloud_ide': '云端IDE与编辑器',
        'menu_ai_prompts': 'AI提示词',
        'menu_prompt_platforms': '综合提示词平台',
        'menu_sd_tools': 'Stable Diffusion专属工具',
        'menu_chatgpt_prompts': 'ChatGPT提示优化',
        'menu_visual_tools': '可视化提示工具',
        'menu_chinese_resources': '中文特色资源',
        'menu_other_tools': '其他实用工具',
        'menu_ai_search': 'AI搜索',
        'menu_general_search': '综合类AI搜索',
        'menu_academic_search': '学术科研类',
        'menu_programming_search': '编程开发类',
        'menu_finance_search': '金融/商业类',
        'menu_life_search': '生活娱乐类',
        'menu_product_search': '产品/公司类',

        // 搜索相关
        'search_title': 'AI365导航',
        'search_subtitle': '你的AI电商军师，全年无休',
        'search_placeholder': '搜索AI工具名称、描述...',
        'search_button': '搜索',
        'site_search': '站内搜索',
        'no_results': '没有找到相关结果',
        'no_results_message': '尝试使用不同的关键词或浏览分类',
        'show_more': '显示更多 +',
        'collapse': '- 收起',
        'magic_tag': '魔法',
        'recommend_tag': '强烈推荐',
        'visit_button': '访问',
        'search_results': '搜索结果',
        'search_results_for': '搜索结果: ',

        // 分类标题
        'ecommerce_title': '电商平台',
        'social_title': '社交平台',
        'website_title': '建站工具',
        'ai_chat_title': 'AI对话',
        'ai_writing_title': 'AI写作',
        'ai_image_title': 'AI图像',
        'ai_video_title': 'AI视频',
        'ai_audio_title': 'AI音频',
        'ai_design_title': 'AI设计',
        'ai_coding_title': 'AI编程',
        'ai_prompts_title': 'AI提示词',
        'ai_search_title': 'AI搜索',

        // 其他
        'all': '全部'
    },
    'en': {
        // Navigation menu
        'menu_home': 'Home',
        'menu_ecommerce': 'E-commerce',
        'menu_amazon': 'Amazon',
        'menu_aliexpress': 'AliExpress',
        'menu_ebay': 'Ebay',
        'menu_lazada': 'Lazada',
        'menu_shopee': 'Shopee',
        'menu_other_ecommerce': 'Others',
        'menu_social': 'Social Media',
        'menu_social_global': 'Global Platforms',
        'menu_social_china': 'Chinese Platforms',
        'menu_website': 'Website Tools',
        'menu_seo': 'SEO Tools',
        'menu_keyword': 'Keyword Tools',
        'menu_analytics': 'Web Analytics',
        'menu_domain': 'Domain Registration',
        'menu_server': 'Servers',
        'menu_payment': 'Payment Tools',
        'menu_erp': 'ERP',
        'menu_network': 'Network Optimization',
        'menu_account': 'Account Resources',
        'menu_temp_mail': 'Temporary Email',
        'menu_ip_proxy': 'IP Proxy',
        'menu_browser': 'Fingerprint Browsers',
        'menu_backlink': 'Backlinks',
        'menu_content': 'Content Optimization',
        'menu_learning': 'Learning Resources',
        'menu_ai_chat': 'AI Chat',
        'menu_general_assistant': 'General AI Assistants',
        'menu_entertainment_ai': 'Gaming & Entertainment AI',
        'menu_role_play': 'Role-playing & Virtual Companions',
        'menu_multimodal_ai': 'Multimodal AI Assistants',
        'menu_professional_ai': 'Professional AI',
        'menu_international_ai': 'International AI Assistants',
        'menu_ai_writing': 'AI Writing',
        'menu_academic_paper': 'Academic Paper Writing',
        'menu_fiction_writing': 'Fiction & Literary Creation',
        'menu_marketing_copy': 'Marketing & Business Copy',
        'menu_blog_media': 'Media & Blog Writing',
        'menu_official_document': 'Official & Government Writing',
        'menu_multilingual': 'Multilingual Writing & Translation',
        'menu_script_content': 'Scripts & Creative Content',
        'menu_ai_image': 'AI Images',
        'menu_general_image': 'General AI Image Generation',
        'menu_portrait': 'Portrait & Avatar Generation',
        'menu_background': 'Backgrounds & Design Materials',
        'menu_brand_design': 'Brand & Business Design',
        'menu_photo_enhancement': 'Photo Repair & Enhancement',
        'menu_anime': 'Anime & 2D Creation',
        'menu_fun_tools': 'Entertainment & Fun Tools',
        'menu_fashion': 'Clothing & Fashion Design',
        'menu_image_editing': 'Image Editing & Processing',
        'menu_professional_scene': 'Professional Scene Generation',
        'menu_ai_video': 'AI Video',
        'menu_text_to_video': 'Text-to-Video',
        'menu_image_to_video': 'Image-to-Video',
        'menu_video_editing': 'Video Editing & Enhancement',
        'menu_digital_human': 'AI Digital Humans & Virtual Hosts',
        'menu_animation': 'Animation & Cartoon Generation',
        'menu_short_video': 'Short Video & Social Media Tools',
        'menu_speech_driven': 'Speech-Driven Video',
        'menu_professional_video': 'Professional Video Generation',
        'menu_opensource_tools': 'Open Source & Developer Tools',
        'menu_ai_audio': 'AI Audio',
        'menu_tts': 'AI Voice/Text-to-Speech',
        'menu_music_generation': 'AI Music Generation & Creation',
        'menu_speech_to_text': 'Speech-to-Text & Recording',
        'menu_voice_conversion': 'AI Voice Changing & Processing',
        'menu_audio_editing': 'Audio Editing & Enhancement',
        'menu_other_audio_tools': 'Other Tools',
        'menu_ai_design': 'AI Design',
        'menu_commerce_design': 'Graphic & E-commerce Design',
        'menu_ui_ux': 'UI/UX & Prototype Design',
        'menu_illustration': 'Illustration & Vector Design',
        'menu_model_design': '3D & Model Design',
        'menu_assistant_tools': 'Design Assistant Tools',
        'menu_special_tools': 'Other Specialized Tools',
        'menu_ai_coding': 'AI Coding',
        'menu_code_generation': 'Code Generation & Completion',
        'menu_fullstack_dev': 'Full-stack/End-to-end Development',
        'menu_design_to_code': 'Design-to-Code',
        'menu_code_review': 'Code Review & Testing',
        'menu_natural_language_dev': 'Natural Language Dev',
        'menu_low_code': 'Low-code/No-code Platforms',
        'menu_cloud_ide': 'Cloud IDEs & Editors',
        'menu_ai_prompts': 'AI Prompts',
        'menu_prompt_platforms': 'Comprehensive Prompt Platforms',
        'menu_sd_tools': 'Stable Diffusion Tools',
        'menu_chatgpt_prompts': 'ChatGPT Prompt Optimization',
        'menu_visual_tools': 'Visual Prompt Tools',
        'menu_chinese_resources': 'Chinese Resources',
        'menu_other_tools': 'Other Useful Tools',
        'menu_ai_search': 'AI Search',
        'menu_general_search': 'General AI Search',
        'menu_academic_search': 'Academic & Research',
        'menu_programming_search': 'Programming & Development',
        'menu_finance_search': 'Finance & Business',
        'menu_life_search': 'Lifestyle & Entertainment',
        'menu_product_search': 'Product & Company',

        // Search related
        'search_title': 'AI365 Navigation',
        'search_subtitle': 'Your AI E-commerce Advisor, 24/7',
        'search_placeholder': 'Search AI tools, descriptions...',
        'search_button': 'Search',
        'site_search': 'Site Search',
        'no_results': 'No results found',
        'no_results_message': 'Try different keywords or browse categories',
        'show_more': 'More websites',
        'collapse': '- Collapse',
        'magic_tag': '',
        'recommend_tag': 'Recommended',
        'visit_button': 'Visit',
        'search_results': 'Search Results',
        'search_results_for': 'Search Results for: ',

        // Category titles
        'ecommerce_title': 'E-commerce Platforms',
        'social_title': 'Social Media',
        'website_title': 'Website Tools',
        'ai_chat_title': 'AI Chat',
        'ai_writing_title': 'AI Writing',
        'ai_image_title': 'AI Images',
        'ai_video_title': 'AI Video',
        'ai_audio_title': 'AI Audio',
        'ai_design_title': 'AI Design',
        'ai_coding_title': 'AI Coding',
        'ai_prompts_title': 'AI Prompts',
        'ai_search_title': 'AI Search',

        // Others
        'all': 'All'
    }
};

// 当前语言
let currentLanguage = 'zh';

// 语言切换功能
function initLanguage() {
    // 检查当前页面是中文还是英文
    const isEnglish = window.location.href.includes('en.html');
    
    // 根据当前语言设置按钮状态
    const chineseBtn = document.getElementById('chinese-toggle');
    const englishBtn = document.getElementById('english-toggle');
    
    if (isEnglish) {
        currentLanguage = 'en'; // 设置当前语言为英文
        chineseBtn.classList.remove('active');
        englishBtn.classList.add('active');
    } else {
        currentLanguage = 'zh'; // 设置当前语言为中文
        chineseBtn.classList.add('active');
        englishBtn.classList.remove('active');
    }
    
    // 更新所有文本
    updateAllTexts();
}

// 切换语言函数
function switchLanguage(lang) {
    const chineseBtn = document.getElementById('chinese-toggle');
    const englishBtn = document.getElementById('english-toggle');
    
    if (lang === 'en') {
        // 切换到英文
        window.location.href = 'en.html';
        chineseBtn.classList.remove('active');
        englishBtn.classList.add('active');
        currentLanguage = 'en'; // 设置当前语言为英文
    } else {
        // 切换到中文
        window.location.href = 'index.html';
        chineseBtn.classList.add('active');
        englishBtn.classList.remove('active');
        currentLanguage = 'zh'; // 设置当前语言为中文
    }
}

// 获取翻译文本
function getText(key) {
    return languageData[currentLanguage][key] || key;
}

// 更新所有文本
function updateAllTexts() {
    // 更新导航菜单
    updateNavMenuTexts();
    
    // 更新搜索区域
    updateSearchAreaTexts();
    
    // 更新分类标题
    updateCategoryTitles();
    
    // 更新子分类按钮
    updateSubcategoryButtons();
    
    // 更新网站卡片
    updateSiteCards();
}

// 更新导航菜单文本
function updateNavMenuTexts() {
    try {
        // 采用更健壮的选择器方法
        function updateMenuItemByIcon(iconClass, textKey) {
            const menuItems = document.querySelectorAll(`.nav-link i.${iconClass}`);
            menuItems.forEach(icon => {
                const menuItem = icon.parentNode;
                // 保留图标但更新文本
                menuItem.innerHTML = `<i class="${iconClass}"></i> ${getText(textKey)}`;
            });
        }
        
        function updateSubmenuItems(submenuClass, itemsMap) {
            const submenu = document.querySelector(`.${submenuClass}`);
            if (submenu) {
                Object.entries(itemsMap).forEach(([selector, textKey]) => {
                    const item = submenu.querySelector(`.nav-link[onclick*="${selector}"]`);
                    if (item) {
                        item.textContent = getText(textKey);
                    }
                });
            }
        }
        
        // 首页
        const homeLink = document.querySelector('.nav-link[onclick*="showCategory(\'home\')"]');
        if (homeLink) homeLink.textContent = getText('menu_home');
        
        // 主菜单项（保留图标）
        updateMenuItemByIcon('bi-shop', 'menu_ecommerce');
        updateMenuItemByIcon('bi-people', 'menu_social');
        updateMenuItemByIcon('bi-globe', 'menu_website');
        updateMenuItemByIcon('bi-chat-dots', 'menu_ai_chat');
        updateMenuItemByIcon('bi-pen', 'menu_ai_writing');
        updateMenuItemByIcon('bi-image', 'menu_ai_image');
        updateMenuItemByIcon('bi-film', 'menu_ai_video');
        updateMenuItemByIcon('bi-soundwave', 'menu_ai_audio');
        updateMenuItemByIcon('bi-palette', 'menu_ai_design');
        updateMenuItemByIcon('bi-code-slash', 'menu_ai_coding');
        updateMenuItemByIcon('bi-lightbulb', 'menu_ai_prompts');
        updateMenuItemByIcon('bi-search', 'menu_ai_search');
        
        // 子菜单项
        // 电商平台子菜单
        const ecommerceItems = {
            'amazon': 'menu_amazon',
            'aliexpress': 'menu_aliexpress',
            'ebay': 'menu_ebay',
            'lazada': 'menu_lazada',
            'shopee': 'menu_shopee',
            'other-ecommerce': 'menu_other_ecommerce'
        };
        updateSubmenuItems('submenu-ecommerce', ecommerceItems);
        
        // 社交平台子菜单
        const socialItems = {
            'social-global': 'menu_social_global',
            'social-china': 'menu_social_china'
        };
        updateSubmenuItems('submenu-social', socialItems);
        
        // 建站工具子菜单
        const websiteItems = {
            'seo': 'menu_seo',
            'keyword': 'menu_keyword',
            'analytics': 'menu_analytics',
            'domain': 'menu_domain',
            'server': 'menu_server',
            'payment': 'menu_payment',
            'erp': 'menu_erp',
            'network': 'menu_network',
            'account': 'menu_account',
            'temp-mail': 'menu_temp_mail',
            'ip-proxy': 'menu_ip_proxy',
            'browser': 'menu_browser',
            'backlink': 'menu_backlink',
            'content': 'menu_content',
            'learning': 'menu_learning'
        };
        updateSubmenuItems('submenu-website', websiteItems);
        
        // AI对话子菜单
        const aiChatItems = {
            'general_assistant': 'menu_general_assistant',
            'entertainment_ai': 'menu_entertainment_ai',
            'role_play': 'menu_role_play',
            'multimodal_ai': 'menu_multimodal_ai',
            'professional_ai': 'menu_professional_ai',
            'international_ai': 'menu_international_ai'
        };
        updateSubmenuItems('submenu-ai-chat', aiChatItems);
        
        // AI写作子菜单
        const aiWritingItems = {
            'academic_paper': 'menu_academic_paper',
            'fiction_writing': 'menu_fiction_writing',
            'marketing_copy': 'menu_marketing_copy',
            'blog_media': 'menu_blog_media',
            'official_document': 'menu_official_document',
            'multilingual': 'menu_multilingual',
            'script_content': 'menu_script_content'
        };
        updateSubmenuItems('submenu-ai-writing', aiWritingItems);
        
        // AI图像子菜单
        const aiImageItems = {
            'general_image': 'menu_general_image',
            'portrait': 'menu_portrait',
            'background': 'menu_background',
            'brand_design': 'menu_brand_design',
            'photo_enhancement': 'menu_photo_enhancement',
            'anime': 'menu_anime',
            'fun_tools': 'menu_fun_tools',
            'fashion': 'menu_fashion',
            'image_editing': 'menu_image_editing',
            'professional_scene': 'menu_professional_scene'
        };
        updateSubmenuItems('submenu-ai-image', aiImageItems);
        
        // AI视频子菜单
        const aiVideoItems = {
            'text_to_video': 'menu_text_to_video',
            'image_to_video': 'menu_image_to_video',
            'video_editing': 'menu_video_editing',
            'digital_human': 'menu_digital_human',
            'animation': 'menu_animation',
            'short_video': 'menu_short_video',
            'speech_driven': 'menu_speech_driven',
            'professional_video': 'menu_professional_video',
            'opensource_tools': 'menu_opensource_tools'
        };
        updateSubmenuItems('submenu-ai-video', aiVideoItems);
        
        // AI音频子菜单
        const aiAudioItems = {
            'tts': 'menu_tts',
            'music_generation': 'menu_music_generation',
            'speech_to_text': 'menu_speech_to_text',
            'voice_conversion': 'menu_voice_conversion',
            'audio_editing': 'menu_audio_editing',
            'other_audio_tools': 'menu_other_audio_tools'
        };
        updateSubmenuItems('submenu-ai-audio', aiAudioItems);
        
        // AI设计子菜单
        const aiDesignItems = {
            'commerce_design': 'menu_commerce_design',
            'ui_ux': 'menu_ui_ux',
            'illustration': 'menu_illustration',
            'model_design': 'menu_model_design',
            'assistant_tools': 'menu_assistant_tools',
            'special_tools': 'menu_special_tools'
        };
        updateSubmenuItems('submenu-ai-design', aiDesignItems);
        
        // AI编程子菜单
        const aiCodingItems = {
            'code_generation': 'menu_code_generation',
            'fullstack_dev': 'menu_fullstack_dev',
            'design_to_code': 'menu_design_to_code',
            'code_review': 'menu_code_review',
            'natural_language_dev': 'menu_natural_language_dev',
            'low_code': 'menu_low_code',
            'cloud_ide': 'menu_cloud_ide'
        };
        updateSubmenuItems('submenu-ai-coding', aiCodingItems);
        
        // AI提示词子菜单
        const aiPromptsItems = {
            'prompt_platforms': 'menu_prompt_platforms',
            'sd_tools': 'menu_sd_tools',
            'chatgpt_prompts': 'menu_chatgpt_prompts',
            'visual_tools': 'menu_visual_tools',
            'chinese_resources': 'menu_chinese_resources',
            'other_tools': 'menu_other_tools'
        };
        updateSubmenuItems('submenu-ai-prompts', aiPromptsItems);
        
        // AI搜索子菜单
        const aiSearchItems = {
            'general_search': 'menu_general_search',
            'academic_search': 'menu_academic_search',
            'programming_search': 'menu_programming_search',
            'finance_search': 'menu_finance_search',
            'life_search': 'menu_life_search',
            'product_search': 'menu_product_search'
        };
        updateSubmenuItems('submenu-ai-search', aiSearchItems);
        
        console.log('导航菜单文本更新完成');
    } catch (error) {
        console.error('更新导航菜单时出错:', error);
    }
}

// 更新搜索区域文本
function updateSearchAreaTexts() {
    document.querySelector('.search-title').textContent = getText('search_title');
    document.querySelector('.search-subtitle').textContent = getText('search_subtitle');
    document.querySelector('.search-input').placeholder = getText('search_placeholder');
    document.querySelector('.search-button').innerHTML = `<i class="bi bi-search"></i> ${getText('search_button')}`;
    document.querySelector('#current-engine-name').textContent = getText('site_search');
}

// 更新分类标题
function updateCategoryTitles() {
    try {
        const categoryTitles = {
            'ecommerce': 'ecommerce_title',
            'social': 'social_title',
            'website': 'website_title',
            'ai-chat': 'ai_chat_title',
            'ai-writing': 'ai_writing_title',
            'ai-image': 'ai_image_title',
            'ai-video': 'ai_video_title',
            'ai-audio': 'ai_audio_title',
            'ai-design': 'ai_design_title',
            'ai-coding': 'ai_coding_title',
            'ai-prompts': 'ai_prompts_title',
            'ai-search': 'ai_search_title'
        };
        
        // 更新所有分类标题
        Object.entries(categoryTitles).forEach(([category, textKey]) => {
            const titleElement = document.querySelector(`#${category}-section .category-title h2`);
            if (titleElement) {
                // 保留图标但更新文本
                const icon = titleElement.querySelector('i')?.outerHTML || '';
                titleElement.innerHTML = `${icon} ${getText(textKey)}`;
            }
        });
        
        console.log('分类标题更新完成');
    } catch (error) {
        console.error('更新分类标题时出错:', error);
    }
}

// 更新子分类按钮
function updateSubcategoryButtons() {
    try {
        // 获取当前语言的"全部"文本
        const allText = getText('all');
        
        // 更新所有"全部"按钮
        document.querySelectorAll('.subcategory-btn').forEach(btn => {
            if (btn.textContent.trim() === '全部' || btn.textContent.trim() === 'All') {
                btn.textContent = allText;
            }
        });
        
        // 特定子分类按钮的翻译映射
        const subcategoryButtonsMap = {
            // 电商平台子分类
            'filterEcommerceSubcategory(\'amazon\')': 'menu_amazon',
            'filterEcommerceSubcategory(\'aliexpress\')': 'menu_aliexpress',
            'filterEcommerceSubcategory(\'ebay\')': 'menu_ebay',
            'filterEcommerceSubcategory(\'lazada\')': 'menu_lazada',
            'filterEcommerceSubcategory(\'shopee\')': 'menu_shopee',
            'filterEcommerceSubcategory(\'other\')': 'menu_other_ecommerce',
            
            // 社交平台子分类
            'filterSocialSubcategory(\'social-global\')': 'menu_social_global',
            'filterSocialSubcategory(\'social-china\')': 'menu_social_china',
            
            // 建站工具子分类
            'filterSubcategory(\'seo\')': 'menu_seo',
            'filterSubcategory(\'keyword\')': 'menu_keyword',
            'filterSubcategory(\'analytics\')': 'menu_analytics',
            'filterSubcategory(\'domain\')': 'menu_domain',
            'filterSubcategory(\'server\')': 'menu_server',
            'filterSubcategory(\'payment\')': 'menu_payment',
            'filterSubcategory(\'erp\')': 'menu_erp',
            'filterSubcategory(\'network\')': 'menu_network',
            'filterSubcategory(\'account\')': 'menu_account',
            'filterSubcategory(\'temp-mail\')': 'menu_temp_mail',
            'filterSubcategory(\'ip-proxy\')': 'menu_ip_proxy',
            'filterSubcategory(\'browser\')': 'menu_browser',
            'filterSubcategory(\'backlink\')': 'menu_backlink',
            'filterSubcategory(\'content\')': 'menu_content',
            'filterSubcategory(\'learning\')': 'menu_learning'
            
            // 其他子分类按钮可以按需添加
        };
        
        // 遍历所有子分类按钮，根据onclick属性进行翻译
        document.querySelectorAll('.subcategory-btn:not(.active)').forEach(btn => {
            const onclickAttr = btn.getAttribute('onclick');
            if (onclickAttr && subcategoryButtonsMap[onclickAttr]) {
                btn.textContent = getText(subcategoryButtonsMap[onclickAttr]);
            }
        });
        
        console.log('子分类按钮更新完成');
    } catch (error) {
        console.error('更新子分类按钮时出错:', error);
    }
}

// 更新网站卡片
function updateSiteCards() {
    try {
        // 确保在英文模式下显示英文版本的网站信息
        if (currentLanguage === 'en') {
            // 更新网站标题和描述为英文版本
            document.querySelectorAll('.site-card').forEach(card => {
                // 检查是否有英文版描述属性
                if (card.hasAttribute('data-description-en')) {
                    const descElement = card.querySelector('.site-desc');
                    if (descElement) {
                        descElement.textContent = card.getAttribute('data-description-en');
                    }
                }
                
                // 检查是否有英文版标题属性
                if (card.hasAttribute('data-title-en')) {
                    const titleElement = card.querySelector('.site-title');
                    if (titleElement) {
                        titleElement.textContent = card.getAttribute('data-title-en');
                    }
                } else {
                    // 如果没有专门的英文标题属性，尝试翻译常见的中文标题
                    const titleElement = card.querySelector('.site-title');
                    if (titleElement) {
                        const originalTitle = titleElement.textContent.trim();
                        
                        // 常见网站标题的翻译映射
                        const titleTranslations = {
                            '亚马逊卖家中心': 'Amazon Seller Central',
                            '美国前台': 'Amazon US Store',
                            '美国站后台': 'Amazon US Seller Central',
                            '英国前台': 'Amazon UK Store',
                            '英国站后台': 'Amazon UK Seller Central',
                            '日本前台': 'Amazon Japan Store',
                            '日本站后台': 'Amazon Japan Seller Central',
                            '德国前台': 'Amazon Germany Store',
                            '德国站后台': 'Amazon Germany Seller Central',
                            '法国前台': 'Amazon France Store',
                            '法国站后台': 'Amazon France Seller Central',
                            '意大利前台': 'Amazon Italy Store',
                            '意大利站后台': 'Amazon Italy Seller Central',
                            '加拿大前台': 'Amazon Canada Store',
                            '加拿大站后台': 'Amazon Canada Seller Central',
                            '澳洲前台': 'Amazon Australia Store',
                            '澳洲站后台': 'Amazon Australia Seller Central',
                            '西班牙前台': 'Amazon Spain Store',
                            '西班牙站后台': 'Amazon Spain Seller Central',
                            '墨西哥前台': 'Amazon Mexico Store',
                            '墨西哥站后台': 'Amazon Mexico Seller Central',
                            '美亚新品榜': 'Amazon US New Releases',
                            '美亚销售榜': 'Amazon US Best Sellers',
                            '美亚飙升榜': 'Amazon US Movers & Shakers',
                            '英国排行榜': 'Amazon UK Best Sellers',
                            '法国排行榜': 'Amazon France Best Sellers',
                            '速卖通商家平台': 'AliExpress Seller Central',
                            'eBay商家平台': 'eBay Seller Hub',
                            'Shopee卖家中心': 'Shopee Seller Center',
                            'Lazada卖家中心': 'Lazada Seller Center'
                        };
                        
                        if (titleTranslations[originalTitle]) {
                            titleElement.textContent = titleTranslations[originalTitle];
                        }
                    }
                }
                
                // 更新描述，如果没有专门的英文描述属性
                const descElement = card.querySelector('.site-desc');
                if (descElement && !card.hasAttribute('data-description-en')) {
                    const originalDesc = descElement.textContent.trim();
                    
                    // 常见描述术语的替换
                    let translatedDesc = originalDesc
                        .replace(/亚马逊/g, 'Amazon')
                        .replace(/卖家平台/g, 'seller platform')
                        .replace(/产品上传/g, 'product upload')
                        .replace(/订单管理/g, 'order management')
                        .replace(/广告投放/g, 'advertising')
                        .replace(/跨境电商/g, 'cross-border e-commerce')
                        .replace(/数据分析/g, 'data analytics')
                        .replace(/品牌分析/g, 'brand analytics')
                        .replace(/关键词搜索/g, 'keyword search')
                        .replace(/购物行为/g, 'shopping behavior')
                        .replace(/商品比较/g, 'product comparison')
                        .replace(/美国站/g, 'US store')
                        .replace(/英国站/g, 'UK store')
                        .replace(/日本站/g, 'Japan store')
                        .replace(/德国站/g, 'Germany store')
                        .replace(/法国站/g, 'France store')
                        .replace(/意大利站/g, 'Italy store')
                        .replace(/西班牙站/g, 'Spain store')
                        .replace(/加拿大站/g, 'Canada store')
                        .replace(/澳洲站/g, 'Australia store')
                        .replace(/墨西哥站/g, 'Mexico store')
                        .replace(/卖家后台/g, 'seller backend')
                        .replace(/消费者平台/g, 'consumer platform')
                        .replace(/电子商务平台/g, 'e-commerce platform')
                        .replace(/新品发布排行榜/g, 'new releases ranking')
                        .replace(/销售排行榜/g, 'best sellers ranking')
                        .replace(/销量飙升榜/g, 'movers and shakers ranking')
                        .replace(/查看各品类最畅销的商品/g, 'view best-selling products across categories')
                        .replace(/展示销量增长最快的商品/g, 'shows products with fastest-growing sales')
                        .replace(/查看不同品类的新品趋势/g, 'view new product trends across categories')
                        .replace(/速卖通/g, 'AliExpress')
                        .replace(/淘宝/g, 'Taobao')
                        .replace(/天猫/g, 'Tmall')
                        .replace(/京东/g, 'JD.com')
                        .replace(/社交媒体/g, 'social media')
                        .replace(/网站分析/g, 'website analytics')
                        .replace(/人工智能/g, 'artificial intelligence')
                        .replace(/面向消费者的/g, 'consumer-facing')
                        .replace(/管理产品、订单和销售数据/g, 'manage products, orders and sales data')
                        .replace(/在线学习平台/g, 'online learning platform')
                        .replace(/提供数千门课程/g, 'offers thousands of courses')
                        .replace(/建站技能/g, 'website building skills')
                        .replace(/营销技巧/g, 'marketing techniques')
                        .replace(/电商运营/g, 'e-commerce operations')
                        .replace(/专业的英文写作和内容优化工具/g, 'professional English writing and content optimization tool')
                        .replace(/提供语法/g, 'provides grammar')
                        .replace(/拼写和风格建议/g, 'spelling and style suggestions')
                        .replace(/AI驱动的内容创作平台/g, 'AI-driven content creation platform')
                        .replace(/帮助创建高质量的博客文章/g, 'helps create high-quality blog posts')
                        .replace(/产品描述和营销文案/g, 'product descriptions and marketing copy')
                        .replace(/大型语言模型/g, 'large language model')
                        .replace(/能够进行自然对话和信息检索/g, 'capable of natural conversation and information retrieval')
                        .replace(/写作助手/g, 'writing assistant')
                        .replace(/内容优化/g, 'content optimization')
                        .replace(/英文校对/g, 'English proofreading')
                        .replace(/AI对话/g, 'AI chat')
                        .replace(/自然语言处理/g, 'natural language processing')
                        .replace(/信息检索/g, 'information retrieval')
                        .replace(/学习资源/g, 'learning resources')
                        .replace(/全球最大的/g, 'one of the world\'s largest')
                        .replace(/提供数千/g, 'offers thousands of')
                        .replace(/课程/g, 'courses')
                        .replace(/专业的/g, 'professional')
                        .replace(/工具/g, 'tools')
                        .replace(/平台/g, 'platform')
                        .replace(/帮助/g, 'helps')
                        .replace(/创建/g, 'create');
                    
                    descElement.textContent = translatedDesc;
                }
                
                // 更新标签
                const tagsContainer = card.querySelector('.site-tags');
                if (tagsContainer) {
                    const tagElements = tagsContainer.querySelectorAll('.site-tag');
                    tagElements.forEach(tagElement => {
                        // 翻译常见标签
                        const originalTag = tagElement.textContent.trim();
                        
                        // 常见标签的翻译映射
                        const tagTranslations = {
                            '亚马逊': 'Amazon',
                            '访问': 'Visit',
                            '亚马逊卖家中心': 'Amazon Seller Central',
                            '卖家平台': 'Seller Platform',
                            '跨境电商': 'Cross-border',
                            '数据分析': 'Analytics',
                            '品牌': 'Brand',
                            '美国站': 'US Store',
                            '美国前台': 'Amazon US Store',
                            '消费者平台': 'Consumer',
                            '卖家后台': 'Seller Backend',
                            '英国站': 'UK Store',
                            '英国前台': 'Amazon UK Store',
                            '日本站': 'Japan Store',
                            '日本前台': 'Amazon Japan Store',
                            '德国站': 'Germany Store',
                            '德国前台': 'Amazon Germany Store',
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
                            '魔法': 'VPN Required',
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
                        
                        if (tagTranslations[originalTag]) {
                            tagElement.textContent = tagTranslations[originalTag];
                        }
                    });
                }
            });
        }
        
        // 更新"访问"按钮
        document.querySelectorAll('.visit-btn').forEach(btn => {
            btn.innerHTML = `${getText('visit_button')} <i class="bi bi-box-arrow-up-right"></i>`;
        });
        
        // 更新"魔法"标签
        document.querySelectorAll('.magic-tag').forEach(tag => {
            tag.textContent = getText('magic_tag');
        });
        
        // 更新"推荐"标签
        document.querySelectorAll('.recommend-tag').forEach(tag => {
            tag.innerHTML = `<i class="bi bi-star-fill"></i> ${getText('recommend_tag')}`;
        });
        
        console.log('网站卡片更新完成');
    } catch (error) {
        console.error('更新网站卡片时出错:', error);
    }
}

// 导出函数
window.initLanguage = initLanguage;
window.switchLanguage = switchLanguage;
window.getText = getText; 