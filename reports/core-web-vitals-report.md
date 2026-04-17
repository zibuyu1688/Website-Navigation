# Core Web Vitals专项压测报告

生成时间：2026-04-17

## 1) 压测方法
- 目标页面：`/index.html`、`/en.html`
- 运行环境：本地 `file://` 基线压测（Playwright 内置浏览器）
- 采集项：TTFB、DCL、Load、FCP、请求数、DOM 节点数
- 说明：`LCP/CLS` 在 `file://` 场景可观测性有限，线上建议用 Chrome + Lighthouse 复测

## 2) 结果概览
### index.html
- TTFB: 0.10 ms
- DCL: 864.90 ms
- Load: 932.70 ms
- FCP: 1012 ms
- Resource Requests: 7
- DOM Nodes: 7209

### en.html
- TTFB: 0 ms
- DCL: 378.90 ms
- Load: 435.70 ms
- FCP: 452 ms
- Resource Requests: 7
- DOM Nodes: 7122

## 3) 前端资源体积基线
- `js/sites-data-en.js`: 197,783 bytes (~193 KB)
- `js/sites-data.js`: 185,278 bytes (~181 KB)
- `js/scripts.js`: 101,804 bytes (~99 KB)
- `en.html`: 59,136 bytes (~58 KB)
- `index.html`: 57,764 bytes (~56 KB)
- `css/styles.css`: 35,674 bytes (~35 KB)

## 4) 结论与瓶颈
- DOM 规模较大（>7k 节点）会显著影响布局与主线程工作量。
- 站点数据 JS 文件体积偏大，且当前为首屏同步加载，影响解析与交互就绪。
- 部分样式仍以内联方式存在，降低缓存复用率。

## 5) 资源压缩与性能策略（已落地 + 建议）
### 已落地
- 增加静态资源长缓存：`/js/*`、`/css/*`、`/assets/*`、`/favicon/*`
- 放行并显式缓存 `robots.txt` 与 `sitemap.xml`
- 增加 `preconnect` 到 CDN

### 建议立即执行（高优先级）
1. 数据拆分懒加载：将 `sites-data*.js` 按一级分类拆包，首屏仅加载首页必要数据。
2. 减少初始 DOM：首页改为仅渲染首屏分类，非可见区域延迟渲染。
3. 抽离内联 CSS：将页面内联 `<style>` 迁移到外部文件以提升缓存命中。
4. 延迟非关键脚本：对非首屏逻辑采用 `defer`/按需执行。

### 建议中期执行（中优先级）
1. 预生成静态卡片片段（或 JSON + 客户端增量渲染）降低字符串拼接成本。
2. 增加真实线上 Lighthouse CI（移动端 4G/慢速 CPU）并设预算门槛。
3. 为热门图标/品牌 logo 增加尺寸约束与按需加载。

## 6) 目标阈值（建议）
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- 初始 JS 传输体积 < 220KB（gzip）
