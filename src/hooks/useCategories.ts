import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";
import type { Category } from "../types/category";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    // Get categories data
    getCategories({ signal: controller.signal })
      .then(setCategories)
      .catch((loadError: unknown) => {
        if (!controller.signal.aborted) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Can't load categories.",
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
  return { categories, loading, error };
}
