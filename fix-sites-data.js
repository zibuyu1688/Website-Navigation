/**
 * 修复JS文件语法错误
 */

// 读取原始文件
const fs = require('fs');
const path = require('path');

// 读取文件内容
const filePath = path.join(__dirname, 'js', 'sites-data-en.js');
let content = fs.readFileSync(filePath, 'utf8');

// 修复AI提示词工具数据部分
content = content.replace(/\/\/ AI提示词工具数据\s+"ai_prompts_data":\s+\[/g, '// AI提示词工具数据\nai_prompts_data: [');

// 修复函数前的语法结构
content = content.replace(/}\s*\],\s*\/\/ 加载所有站点数据\s*function/g, '}\n]\n};\n\n// 加载所有站点数据\nfunction');

// 写入修复后的文件
fs.writeFileSync(filePath + '.fixed', content, 'utf8');
console.log('文件已修复，保存为：' + filePath + '.fixed'); 