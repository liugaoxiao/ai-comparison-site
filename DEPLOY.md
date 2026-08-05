# 🚀 部署指南

## 项目信息

- **GitHub仓库**: https://github.com/liugaoxiao/ai-comparison-site
- **域名**: www.xiaoliusix.de
- **技术栈**: Next.js + Prisma + PostgreSQL

## 第一步：配置 Supabase 数据库

### 1. 注册 Supabase

访问 https://supabase.com 注册账号

### 2. 创建项目

- 点击 "New Project"
- 选择区域（推荐 Singapore 或 Tokyo）
- 设置数据库密码
- 等待项目创建完成

### 3. 获取连接字符串

进入项目 → Settings → Database → Connection string → URI

复制连接字符串，格式如：
```
postgresql://postgres.xxxx:password@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
```

## 第二步：部署到 Cloudflare Pages

### 1. 登录 Cloudflare Pages

访问 https://pages.cloudflare.com

### 2. 创建项目

- 点击 "Create a project"
- 选择 "Connect to Git"
- 授权 GitHub
- 选择仓库: `liugaoxiao/ai-comparison-site`

### 3. 配置构建设置

- **Production branch**: main
- **Build command**: `npm run build`
- **Build output directory**: `.next`

### 4. 添加环境变量

```
DATABASE_URL = 你的Supabase连接字符串
NEXTAUTH_SECRET = ai-comparison-site-secret-2026
NEXTAUTH_URL = https://www.xiaoliusix.de
SITE_URL = https://www.xiaoliusix.de
```

### 5. 部署

点击 "Save and Deploy"

## 第三步：绑定自定义域名

### 1. 在 Cloudflare Pages 中添加域名

- 进入项目 → Custom domains
- 添加: `www.xiaoliusix.de`

### 2. DNS 已配置

DNS 记录已自动配置：
- `www.xiaoliusix.de` → Cloudflare Pages

## 第四步：初始化数据库

### 方式一：使用 Prisma CLI（推荐）

```bash
# 克隆仓库
git clone https://github.com/liugaoxiao/ai-comparison-site.git
cd ai-comparison-site

# 安装依赖
npm install

# 配置环境变量
# 创建 .env 文件，添加 DATABASE_URL

# 生成 Prisma Client
npx prisma generate

# 推送数据库 schema
npx prisma db push

# 填充示例数据（可选）
npx prisma db seed
```

### 方式二：使用 Supabase Dashboard

1. 进入 Supabase 项目
2. 点击 "SQL Editor"
3. 执行以下 SQL：

```sql
-- 创建分类表
CREATE TABLE "Category" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  icon VARCHAR(50),
  parentId INTEGER REFERENCES "Category"(id),
  sortOrder INTEGER DEFAULT 0,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

-- 创建商品表
CREATE TABLE "Product" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  imageUrl VARCHAR(500),
  categoryId INTEGER REFERENCES "Category"(id),
  isActive BOOLEAN DEFAULT true,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

-- 创建商家表
CREATE TABLE "Merchant" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  logoUrl VARCHAR(500),
  websiteUrl VARCHAR(500),
  reputationScore DECIMAL(3,2),
  description TEXT,
  isActive BOOLEAN DEFAULT true,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

-- 创建价格表
CREATE TABLE "Price" (
  id SERIAL PRIMARY KEY,
  productId INTEGER REFERENCES "Product"(id),
  merchantId INTEGER REFERENCES "Merchant"(id),
  price DECIMAL(10,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'CNY',
  stockStatus VARCHAR(50) DEFAULT 'in_stock',
  warrantyInfo VARCHAR(255),
  productUrl VARCHAR(500),
  lastUpdated TIMESTAMP DEFAULT NOW(),
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW(),
  UNIQUE(productId, merchantId)
);

-- 插入示例数据
INSERT INTO "Category" (name, slug, icon, sortOrder) VALUES
('ChatGPT', 'chatgpt', '🤖', 1),
('Claude', 'claude', '🧠', 2),
('Gemini', 'gemini', '✨', 3),
('Grok', 'grok', '🚀', 4),
('邮箱', 'email', '📧', 5),
('接码', 'sms', '📱', 6);
```

## 第五步：验证部署

1. 访问 https://www.xiaoliusix.de
2. 检查首页是否正常显示
3. 测试搜索功能
4. 测试商品详情页

## 常见问题

### Q: 部署失败怎么办？

A: 检查以下几点：
- 环境变量是否配置正确
- 数据库连接字符串是否正确
- 构建命令是否正确

### Q: 数据库连接失败？

A: 检查以下几点：
- Supabase 项目是否暂停（免费版14天不活跃会暂停）
- 连接字符串是否正确
- 密码是否正确

### Q: 如何更新网站？

A: 推送代码到 GitHub main 分支，Cloudflare Pages 会自动部署。

```bash
git add .
git commit -m "feat: 更新功能"
git push origin main
```

## 技术支持

- GitHub Issues: https://github.com/liugaoxiao/ai-comparison-site/issues
- Cloudflare 文档: https://developers.cloudflare.com/pages/
- Supabase 文档: https://supabase.com/docs

## 下一步

1. ✅ 部署完成
2. ⬜ 添加更多商品数据
3. ⬜ 优化 SEO
4. ⬜ 添加用户系统
5. ⬜ 实现价格走势图