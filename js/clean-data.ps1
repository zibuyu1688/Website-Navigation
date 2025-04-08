# 清理 sites-data.js 文件
$content = Get-Content -Path 'sites-data.js' -Raw

# 查找第一个大括号定义（开始）
$firstDefStart = $content.IndexOf('const sitesData = {')

# 查找第一个大括号结束
$firstDefEnd = $content.IndexOf('};', $firstDefStart) + 2

# 查找 aiPromptsData 定义开始
$aiPromptsStart = $content.IndexOf('const aiPromptsData = [', $firstDefEnd)

# 查找 aiPromptsData 定义结束
$aiPromptsEnd = $content.IndexOf('];', $aiPromptsStart) + 2

# 查找 aiSearchData 定义开始
$aiSearchStart = $content.IndexOf('const aiSearchData = [', $aiPromptsEnd)

# 查找 aiSearchData 定义结束
$aiSearchEnd = $content.IndexOf(']', $aiSearchStart) + 1

# 只保留这三个主要部分，删除重复定义和占位符注释
$cleanedContent = $content.Substring(0, $aiSearchEnd)

# 添加函数定义（从最后一个重复定义中提取）
$functions = @'

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

// 加载AI提示词工具
function loadAiPromptsTools() {
    loadSitesByCategory(aiPromptsData, 'ai-prompts-grid');
}

// 加载AI搜索工具
function loadAiSearchTools() {
    loadSitesByCategory(aiSearchData, 'ai-search-grid');
}

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
                title: site.title || site.name,
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
'@

# 合并内容和函数定义，写入新文件
$cleanedContent + $functions | Set-Content -Path 'sites-data.js.clean'

Write-Host '已清理 sites-data.js，新文件保存为 sites-data.js.clean' 