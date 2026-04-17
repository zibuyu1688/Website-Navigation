# Resource Guides 标准化标签词表

本文件用于统一 resources 分类下所有条目的标签写法。

使用规则：

- 每个 resources 条目固定使用 3 个标签。
- 标签顺序为：主标签 -> 次标签 -> 补充标签。
- 只能从本词表中选取，不新增自由标签。
- 中文与英文标签必须一一对应，不混用近义词。
- 若一个网址同时满足多个语义，优先选择“第一价值”最强的 3 个标签。

## 固定标签词表

| 中文标签 | English Tag | 说明 |
| --- | --- | --- |
| 工具导航 | Tool Discovery | 用于目录站、导航站、聚合入口 |
| 任务检索 | Use Cases | 用于按任务或场景找工具 |
| 榜单 | Leaderboard | 用于排行榜、评分榜、官方榜单入口 |
| 模型对比 | Model Comparison | 用于横向比较不同模型或工具 |
| 开源 | Open Models | 用于开源模型、开源评测生态 |
| 社区 | Community | 用于社区、论坛、开发者生态 |
| 数据集 | Datasets | 用于模型、数据集、基准数据生态 |
| 中文 | Chinese | 用于强中文语境或中文本土生态 |
| 本地模型 | Local Models | 用于本地部署、私有化模型讨论 |
| 实时讨论 | Live Discussions | 用于高频实时交流、即时讨论 |
| 实战讨论 | Practical Discussions | 用于经验帖、对比帖、业务实践讨论 |
| 项目社群 | Project Communities | 用于围绕具体项目的官方群组或服务器 |
| 趋势 | Trends | 用于赛道趋势、热点变化、增长观察 |
| 竞品 | Competitive Research | 用于竞品扫描、候选比较、产品研究 |
| 市场情报 | Market Intelligence | 用于流量、渠道、市场和需求情报 |
| 融资 | Funding | 用于融资、创业公司、资本动态 |
| 盲测 | Blind Tests | 用于匿名对战、投票式模型评测 |
| 代码 | Coding | 用于编程能力、代码生成、工程能力 |
| 代码编辑 | Code Editing | 用于改码、重构、编辑型 coding benchmark |
| 无污染 | Contamination-Free | 用于抗泄露、训练集外测试 |
| 真实任务 | Real Tasks | 用于真实 issue、真实工作流、真实仓库任务 |
| 多语言 | Multilingual | 用于跨语言、多语言 benchmark |
| 科学 | Science | 用于科学、学术、高专业度评测 |
| 推理 | Reasoning | 用于逻辑、复杂推理、难题求解 |
| 高难问答 | Hard QA | 用于专家级问答、博士级难题 |
| AGI | AGI | 用于通用智能、流体智能、AGI 评测 |
| 前沿评测 | Frontier Evaluation | 用于 frontier benchmark、前沿能力测试 |
| 综合 | General | 用于多维混合、总榜、综合能力入口 |
| 商业部署 | Deployment | 用于成本、落地、生产可用性比较 |
| 成本 | Cost | 用于价格、token 成本、预算比较 |
| 延迟 | Latency | 用于速度、TTFT、响应延迟 |
| 资讯 | News | 用于新闻、快讯、每日更新 |
| 周报 | Briefings | 用于 newsletter、digest、周报类内容 |
| 报告 | Reports | 用于年度报告、深度研究报告 |

## 子分类推荐搭配

### 工具导航 `resource_tool_navigation`

- 优先标签：工具导航、任务检索、榜单、模型对比

### 模型与社区 `resource_model_community`

- 优先标签：开源、社区、数据集、中文、本地模型、项目社群、实时讨论、实战讨论

### 产品研究 `resource_product_research`

- 优先标签：趋势、竞品、市场情报、融资、盲测、代码、代码编辑、无污染、真实任务、多语言、科学、推理、高难问答、AGI、前沿评测、综合、商业部署、成本、延迟

### 学习与资讯 `resource_learning_news`

- 优先标签：资讯、周报、报告、趋势、综合

## 当前落标签约束

- 不再使用旧风格标签，例如：AI资源库、资源导航、产品发现、任务场景、创空间、生成式视觉、公司数据库、行业观察、应用解读 等。
- 遇到旧标签时，统一映射到本词表中的标准标签。
- 若后续新增网址确实无法覆盖，再扩充本词表，而不是在数据文件里直接发明新标签。