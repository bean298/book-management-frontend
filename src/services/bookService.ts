import type { Book, BookResponse } from "../types/book";
import { apiRequest } from "./apiClient";

interface GetBooksParams {
  page?: number;
  pageSize?: number;
  signal?: AbortSignal; // Allows cancelling the request
}

// Get books
export async function getBooks({
  page = 1,
  pageSize = 10,
  signal,
}: GetBooksParams = {}): Promise<Book[]> {
  // URL Params
  const query = new URLSearchParams({
    page: String(page),
    page_size: String(pageSize),
  });

  const data = await apiRequest<BookResponse["data"]>(`/api/v1/book?${query}`, {
    signal,
  });

  return data.items;
}
