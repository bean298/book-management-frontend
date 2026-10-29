import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import { getBooks } from "../services/bookService";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    // Get books data
    getBooks({ signal: controller.signal })
      .then(setBooks)
      .catch((loadError: unknown) => {
        if (!controller.signal.aborted) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Can't load books.",
          );
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    // Cancel request
    return () => controller.abort();
  }, []);

  // Return states
  return { books, loading, error };
}
