// 学习社区数据
const learningCommunityData = [
    // 公众号博主推荐
    {
        name: "吴恩达AI课程",
        description: "AI领域权威专家，斯坦福大学教授，Coursera联合创始人",
        url: "https://www.deeplearning.ai/",
        tags: ["AI教育", "深度学习"],
        subcategory: "wechat_blogger"
    },
    {
        name: "李沐",
        description: "亚马逊首席科学家，深度学习领域专家，《动手学深度学习》作者",
        url: "https://space.bilibili.com/1567748478",
        tags: ["深度学习", "编程教育"],
        subcategory: "bilibili_blogger"
    },
    {
        name: "Two Minute Papers",
        description: "AI研究论文的通俗解读，让复杂的AI概念变得简单易懂",
        url: "https://www.youtube.com/c/K%C3%A1rolyZsolnai",
        tags: ["AI研究", "论文解读"],
        subcategory: "youtube_blogger"
    },
    {
        name: "机器之心",
        description: "专业的人工智能媒体和产业服务平台",
        url: "https://www.jiqizhixin.com/",
        tags: ["AI资讯", "技术分享"],
        subcategory: "good_article"
    }
];

// 加载学习社区数据
function loadLearningCommunity() {
    loadSitesByCategory(learningCommunityData, 'learning-community-grid');
}

// 过滤学习社区子类别
function filterLearningCommunitySubcategory(subcategory) {
    const grid = document.getElementById('learning-community-grid');
    const buttons = document.querySelectorAll('#learning-community-section .subcategory-btn');
    
    // 更新按钮状态
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.includes(subcategory === 'all' ? '全部' : 
            subcategory === 'wechat_blogger' ? '公众号博主' :
            subcategory === 'video_account' ? '视频号博主' :
            subcategory === 'bilibili_blogger' ? 'B站博主' :
            subcategory === 'youtube_blogger' ? 'Youtube博主' :
            subcategory === 'knowledge_planet' ? '知识星球' :
            subcategory === 'good_article' ? '优秀网文' : '')) {
            button.classList.add('active');
        }
    });
    
    // 过滤并显示相关卡片
    grid.innerHTML = '';
    const filteredData = subcategory === 'all' ? 
        learningCommunityData : 
        learningCommunityData.filter(site => site.subcategory === subcategory);
    
    filteredData.forEach(site => {
        grid.innerHTML += createSiteCard({
            title: site.name,
            description: site.description,
            url: site.url,
            tags: site.tags || [],
            subcategory: site.subcategory || ''
        });
    });
} 