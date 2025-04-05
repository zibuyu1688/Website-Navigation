import re
import os
import shutil

# 创建备份
src_file = "D:/daohang/js/sites-data.js"
backup_file = src_file + ".bak"
shutil.copy2(src_file, backup_file)
print(f"已创建备份: {backup_file}")

# 读取文件内容
with open(src_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 直接查找所有外部URL的logo
pattern = r'(logo: *[\'"])(https?://[^\'"]+)([\'"])'
changes = 0

def replace_logo(match):
    global changes
    prefix = match.group(1)  # logo: '
    url = match.group(2)     # https://...
    suffix = match.group(3)  # '
    
    # 尝试从上下文获取网站名称
    start_pos = max(0, match.start() - 200)
    context = content[start_pos:match.start()]
    
    # 先尝试查找name属性
    name_match = re.search(r'name: *[\'"]([^\'"]+)[\'"]', context)
    if name_match:
        site_name = name_match.group(1)
    else:
        # 再尝试查找title属性
        title_match = re.search(r'title: *[\'"]([^\'"]+)[\'"]', context)
        if title_match:
            site_name = title_match.group(1)
        else:
            # 如果都找不到，使用域名作为名称
            domain_match = re.search(r'https?://(?:www\.)?([^/]+)', url)
            if domain_match:
                site_name = domain_match.group(1).replace('.', '_')
            else:
                site_name = f"unknown_site_{changes}"
    
    changes += 1
    return f'{prefix}favicon/{site_name}.svg{suffix}'

# 执行替换
new_content = re.sub(pattern, replace_logo, content)

# 保存修改后的内容
with open(src_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

# 验证是否还有外部URL
remaining = len(re.findall(r'logo: *[\'"]https?://', new_content))

print(f"完成修改！共修改了 {changes} 个logo路径。")
print(f"替换后还剩 {remaining} 个外部logo地址")
print("原始文件已备份为 .bak 文件。")