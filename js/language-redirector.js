/**
 * 语言重定向器
 * 根据用户的浏览器语言自动重定向到相应的中文或英文页面
 */

// 在页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否已经存在语言偏好设置
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    // 如果存在已保存的语言偏好，并且当前页面不匹配该偏好，则重定向
    if (savedLanguage) {
        redirectBasedOnSavedPreference(savedLanguage);
        return;
    }
    
    // 获取用户的浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;
    
    // 根据浏览器语言重定向
    if (browserLang.startsWith('zh')) {
        // 如果当前不在中文页面，则重定向到中文页面
        if (!isChinesePage()) {
            redirectToChinese();
        }
    } else {
        // 如果当前不在英文页面，则重定向到英文页面
        if (!isEnglishPage()) {
            redirectToEnglish();
        }
    }
});

// 根据保存的语言偏好重定向
function redirectBasedOnSavedPreference(language) {
    if (language === 'zh' && !isChinesePage()) {
        redirectToChinese();
    } else if (language === 'en' && !isEnglishPage()) {
        redirectToEnglish();
    }
}

// 判断当前是否为中文页面
function isChinesePage() {
    return window.location.pathname.endsWith('index.html') || 
           window.location.pathname === '/' || 
           window.location.pathname === '';
}

// 判断当前是否为英文页面
function isEnglishPage() {
    return window.location.pathname.endsWith('en.html');
}

// 重定向到中文页面
function redirectToChinese() {
    window.location.href = 'index.html';
}

// 重定向到英文页面
function redirectToEnglish() {
    window.location.href = 'en.html';
}

// 手动切换语言
function manualSwitchLanguage(language) {
    // 保存语言偏好
    localStorage.setItem('preferredLanguage', language);
    
    // 重定向到相应的页面
    if (language === 'zh') {
        redirectToChinese();
    } else {
        redirectToEnglish();
    }
} 