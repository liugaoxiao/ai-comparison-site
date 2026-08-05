import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI资源比价 - AI订阅服务价格对比平台",
  description: "比较ChatGPT、Claude、Gemini等AI服务订阅价格，找到最优惠的购买渠道",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-14 items-center">
              <a className="mr-6 flex items-center space-x-2" href="/">
                <span className="font-bold text-xl">AI比价</span>
              </a>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a href="/categories">分类</a>
                <a href="/products">商品</a>
                <a href="/about">关于</a>
              </nav>
              <div className="flex flex-1 items-center justify-end">
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm md:w-[300px]" placeholder="搜索AI服务..." type="search" />
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t py-6">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-muted-foreground">© 2026 AI资源比价. 保留所有权利.</p>
              <div className="flex items-center space-x-4">
                <a href="/privacy" className="text-sm text-muted-foreground hover:underline">隐私政策</a>
                <a href="/terms" className="text-sm text-muted-foreground hover:underline">服务条款</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}