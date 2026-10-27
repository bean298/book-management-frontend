import type { Category, CategoryResponse } from "../types/category";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getCategories(
  signal?: AbortSignal, // Allows cancelling the request
): Promise<Category[]> {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/category?page=1&page_size=10`,
    { signal },
  );

  if (!response.ok) {
    throw new Error("Can't load categories.");
  }

  const result: CategoryResponse = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Can't load categories.");
  }

  return result.data.items;
}
