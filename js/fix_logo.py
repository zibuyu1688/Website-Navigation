import re
import os
import time

# 使用绝对路径
file_path = "D:/daohang/js/sites-data.js"

# 检查文件是否存在
if not os.path.exists(file_path):
    print(f"错误: 文件不存在 - {file_path}")
    exit(1)
else:
    print(f"文件存在，大小: {os.path.getsize(file_path)} 字节")

# 备份原始文件
backup_path = file_path + f".bak.{int(time.time())}"
try:
    with open(file_path, "r", encoding="utf-8") as source:
        content = source.read()
        # 打印前100行进行调试
        first_100_lines = "\n".join(content.split("\n")[:100])
        print("文件前100行预览:")
        print("=====文件内容开始=====")
        print(first_100_lines)
        print("=====文件内容结束=====")
        
        with open(backup_path, "w", encoding="utf-8") as backup:
            backup.write(content)
    print(f"已创建备份: {backup_path}")
except Exception as e:
    print(f"读取文件时出错: {e}")
    exit(1)

# 统计原始外部URL数量
original_count = len(re.findall(r'logo: *[\'"]https?://', content))
print(f"找到 {original_count} 个外部logo URL")

# 如果未找到URL，尝试不同的模式
if original_count == 0:
    alt_count1 = len(re.findall(r'logo: *[\'"](https?://[^\'"])', content))
    alt_count2 = len(re.findall(r'"logo": *"https?://', content))
    alt_count3 = len(re.findall(r'logo:', content))
    print(f"尝试其他模式：")
    print(f"- 模式1: 找到 {alt_count1} 个匹配")
    print(f"- 模式2: 找到 {alt_count2} 个匹配")  
    print(f"- 模式3: 找到 {alt_count3} 个logo字段")

# 定义简单替换函数
def replace_url(match):
    full_match = match.group(0)  # 完整匹配: logo: 'https://...'
    url_part = match.group(1)    # URL部分: https://...
    
    # 从URL中提取域名作为图标名称
    domain = re.search(r'https?://(?:www\.)?([^/]+)', url_part)
    if domain:
        site_name = domain.group(1).replace('.', '_')
    else:
        site_name = "default"
        
    # 替换为本地路径
    return f'logo: "favicon/{site_name}.svg"'

# 使用最简单的替换模式
pattern = r'logo: *[\'"](https?://[^\'"]+)[\'"]'
new_content = re.sub(pattern, replace_url, content)

# 检查替换效果
final_count = len(re.findall(r'logo: *[\'"]https?://', new_content))
changed = original_count - final_count
print(f"替换了 {changed} 个URL，剩余 {final_count} 个")

# 保存修改后的内容
try:
    with open(file_path, "w", encoding="utf-8") as output:
        output.write(new_content)
    print("替换完成!")
except Exception as e:
    print(f"写入文件时出错: {e}")
    exit(1) 