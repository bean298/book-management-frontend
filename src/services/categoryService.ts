import type { Category, CategoryResponse } from "../types/category";
import { apiRequest } from "./apiClient";

interface GetCategoriesParams {
  page?: number;
  pageSize?: number;
  signal?: AbortSignal; // Allows cancelling the request
}

// Get categories
export async function getCategories({
  page = 1,
  pageSize = 10,
  signal,
}: GetCategoriesParams = {}): Promise<Category[]> {
  // URL Params
  const query = new URLSearchParams({
    page: String(page),
    page_size: String(pageSize),
  });

  const data = await apiRequest<CategoryResponse["data"]>(
    `/api/v1/category?${query}`,
    { signal },
  );

  return data.items;
}
