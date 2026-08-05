const categories = [
  {id: 1, name: "ChatGPT", icon: "🤖", slug: "chatgpt", count: 15},
  {id: 2, name: "Claude", icon: "🧠", slug: "claude", count: 12},
  {id: 3, name: "Gemini", icon: "✨", slug: "gemini", count: 8},
  {id: 4, name: "Grok", icon: "🚀", slug: "grok", count: 6},
  {id: 5, name: "邮箱", icon: "📧", slug: "email", count: 20},
  {id: 6, name: "接码", icon: "📱", slug: "sms", count: 18},
];

const hotProducts = [
  {id: 1, name: "ChatGPT Plus 订阅", category: "ChatGPT", lowestPrice: 14.73, merchantCount: 8, slug: "chatgpt-plus"},
  {id: 2, name: "Claude Pro 订阅", category: "Claude", lowestPrice: 125, merchantCount: 5, slug: "claude-pro"},
  {id: 3, name: "Gemini Pro 订阅", category: "Gemini", lowestPrice: 2.25, merchantCount: 6, slug: "gemini-pro"},
  {id: 4, name: "Gmail 邮箱", category: "邮箱", lowestPrice: 0.27, merchantCount: 12, slug: "gmail"},
  {id: 5, name: "Outlook 邮箱", category: "邮箱", lowestPrice: 0.05, merchantCount: 10, slug: "outlook"},
  {id: 6, name: "OpenAI 接码", category: "接码", lowestPrice: 0.41, merchantCount: 15, slug: "openai-sms"},
];

export default function Home() {
  return (
    <div className="container py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">AI资源比价平台</h1>
        <p className="mt-4 text-lg text-gray-600">比较ChatGPT、Claude、Gemini等AI服务订阅价格，找到最优惠的购买渠道</p>
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <input type="search" placeholder="搜索AI服务、账号、邮箱..." className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700">搜索</button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">热门分类</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <a key={category.id} href={`/categories/${category.slug}`} className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="mt-2 font-medium text-gray-900">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{category.count}个商品</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">热门商品</h2>
          <a href="/products" className="text-sm font-medium text-blue-600 hover:underline">查看全部 →</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hotProducts.map((product) => (
            <a key={product.id} href={`/products/${product.slug}`} className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="p-6">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-4xl">
                  {product.category === "ChatGPT" ? "🤖" : product.category === "Claude" ? "🧠" : product.category === "Gemini" ? "✨" : "📧"}
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-red-600">¥{product.lowestPrice}</span>
                    <span className="ml-1 text-sm text-gray-500">起</span>
                  </div>
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600">{product.merchantCount}家商家</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">平台特色</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 text-4xl">📊</div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">实时价格对比</h3>
            <p className="text-sm text-gray-600">实时更新各商家价格，帮您找到最优惠的购买渠道</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">多商家聚合</h3>
            <p className="text-sm text-gray-600">汇聚多家商家商品，一站式比较价格和库存</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 text-4xl">✅</div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">质量保障</h3>
            <p className="text-sm text-gray-600">筛选优质商家，提供质保信息和用户评价</p>
          </div>
        </div>
      </section>
    </div>
  );
}