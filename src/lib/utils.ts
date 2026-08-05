import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {return twMerge(clsx(inputs));}

export function formatPrice(price: number, currency: string = "CNY"): string {
  if (currency === "CNY") return `¥${price.toFixed(2)}`;
  if (currency === "USD") return `$${price.toFixed(2)}`;
  return `${price.toFixed(2)} ${currency}`;
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  if (diff < 60 * 1000) return "刚刚";
  if (diff < 60 * 60 * 1000) return `${Math.floor(diff / (60 * 1000))}分钟前`;
  if (diff < 24 * 60 * 60 * 1000) return `${Math.floor(diff / (60 * 60 * 1000))}小时前`;
  if (diff < 7 * 24 * 60 * 60 * 1000) return `${Math.floor(diff / (24 * 60 * 60 * 1000))}天前`;
  return d.toLocaleDateString("zh-CN", {year: "numeric", month: "2-digit", day: "2-digit"});
}