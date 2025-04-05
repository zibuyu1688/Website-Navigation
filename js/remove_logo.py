import re

# 读取文件
with open('sites-data.js', 'r', encoding='utf-8') as file:
    content = file.read()

# 使用正则表达式删除所有包含logo:的行
# 匹配整行：包括可能的空格，logo: 和后面的路径，直到行尾
modified_content = re.sub(r'\s+logo:.+,\n', '\n', content)

# 写回文件
with open('sites-data.js', 'w', encoding='utf-8') as file:
    file.write(modified_content)

print("已成功移除所有logo行") 