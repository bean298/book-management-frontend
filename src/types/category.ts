export interface Category {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

export interface CategoryResponse {
  data: {
    items: Category[];
    total: number;
    page: number;
    page_size: number;
  };
  success: boolean;
  message: string;
}
