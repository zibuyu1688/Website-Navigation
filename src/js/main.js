// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  // 初始化搜索引擎切换
  initSearchEngines();
  
  // 初始化分类切换
  initCategories();
  
  // 初始化工具卡片交互
  initToolCards();
  
  // 初始化错误处理
  initErrorHandling();
  
  // 初始化加载状态
  initLoadingState();
});

// 搜索引擎切换功能
function initSearchEngines() {
  const searchInput = document.querySelector('.search-input');
  const searchEngineSelect = document.querySelector('.search-engine-select');
  
  if (searchInput && searchEngineSelect) {
    searchEngineSelect.addEventListener('change', () => {
      updateSearchPlaceholder(searchEngineSelect.value);
    });
  }
}

// 更新搜索框占位符
function updateSearchPlaceholder(engine) {
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.placeholder = `在 ${engine} 中搜索...`;
  }
}

// 分类切换功能
function initCategories() {
  const categoryLinks = document.querySelectorAll('.category-link');
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const categoryId = link.getAttribute('href').substring(1);
      scrollToCategory(categoryId);
    });
  });
}

// 滚动到指定分类
function scrollToCategory(categoryId) {
  const category = document.getElementById(categoryId);
  if (category) {
    category.scrollIntoView({ behavior: 'smooth' });
  }
}

// 工具卡片交互
function initToolCards() {
  const toolCards = document.querySelectorAll('.tool-card');
  
  toolCards.forEach(card => {
    card.addEventListener('click', () => {
      const url = card.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
    
    card.addEventListener('mouseenter', () => {
      card.classList.add('hover');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hover');
    });
  });
}

// 错误处理
function initErrorHandling() {
  window.addEventListener('error', (e) => {
    showError('页面加载出错，请刷新重试');
  });
}

// 显示错误信息
function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  
  document.body.appendChild(errorDiv);
  
  setTimeout(() => {
    errorDiv.remove();
  }, 3000);
}

// 初始化加载状态
function initLoadingState() {
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'loading';
  loadingDiv.innerHTML = '<div class="spinner"></div>';
  
  document.body.appendChild(loadingDiv);
  
  window.addEventListener('load', () => {
    loadingDiv.remove();
  });
} 