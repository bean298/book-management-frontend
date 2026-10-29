export interface Book {
  id: string;
  title: string;
  slug: string;
  author_id: string;
  category_id: string;
  published_year: number;
  cover_image: string;
  price: number;
  quantity: number;
  description: string;
}

export interface BookResponse {
  data: {
    items: Book[];
    total: number;
    page: number;
    page_size: number;
  };
  success: boolean;
  message: string;
}
