# Vercel部署指南

## 快速部署步骤

### 方法一：通过GitHub部署（推荐）

1. **创建GitHub仓库**
   ```bash
   # 在GitHub上创建新仓库，然后：
   git remote add origin https://github.com/你的用户名/4EnglishStudy.git
   git branch -M main
   git push -u origin main
   ```

2. **部署到Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择刚创建的GitHub仓库
   - 点击 "Deploy"

### 方法二：通过Vercel CLI部署

1. **安装Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录并部署**
   ```bash
   vercel login
   vercel --prod
   ```

### 方法三：拖拽部署

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 拖拽项目文件夹到上传区域
4. 点击 "Deploy"

## 项目配置

本项目已包含：
- `vercel.json` - Vercel配置文件
- `index.html` - 主页面
- `css/style.css` - 样式文件
- `js/app.js` - 应用逻辑
- `data/words.json` - 单词数据

## 部署后特性

✅ 静态网站托管  
✅ HTTPS安全连接  
✅ 全球CDN加速  
✅ 自动域名分配  
✅ 持续集成部署  

## 访问网站

部署完成后，你会得到一个类似这样的URL：
`https://4english-study.vercel.app`

也可以绑定自定义域名。

## 故障排除

如果遇到问题：
1. 确保所有文件都在根目录
2. 检查`vercel.json`配置
3. 查看Vercel部署日志
4. 确保GitHub仓库是公开的（免费版）