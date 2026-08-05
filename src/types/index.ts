export interface Product {
  id: number; name: string; slug: string; description?: string; imageUrl?: string;
  categoryId: number; category: Category; prices: Price[]; tags: Tag[];
  isActive: boolean; createdAt: Date; updatedAt: Date;
}

export interface Category {
  id: number; name: string; slug: string; icon?: string; parentId?: number;
  parent?: Category; children?: Category[]; products?: Product[];
  sortOrder: number; createdAt: Date; updatedAt: Date;
}

export interface Merchant {
  id: number; name: string; slug: string; logoUrl?: string; websiteUrl?: string;
  reputationScore?: number; description?: string; prices?: Price[];
  isActive: boolean; createdAt: Date; updatedAt: Date;
}

export interface Price {
  id: number; productId: number; product?: Product; merchantId: number; merchant?: Merchant;
  price: number; currency: string; stockStatus: string; warrantyInfo?: string;
  productUrl?: string; lastUpdated: Date; createdAt: Date; updatedAt: Date;
}

export interface Tag {id: number; name: string; products?: Product[];}

export interface SearchParams {
  query?: string; category?: string; minPrice?: number; maxPrice?: number;
  stockStatus?: string; sort?: string; page?: number; limit?: number;
}

export interface PaginatedResponse<T> {data: T[]; total: number; page: number; limit: number; totalPages: number;}

export interface ApiResponse<T> {success: boolean; data?: T; error?: string; message?: string;}