import { useState } from "react";
import type { Book } from "../types/book";
import type { SnackbarSeverity } from "../components/common/AppSnackbar";

interface SnackbarState {
  open: boolean;
  message: string;
  severity: SnackbarSeverity;
}

const initialSnackbar: SnackbarState = {
  open: false,
  message: "",
  severity: "success",
};

export function useAddToCart() {
  // State
  const [snackbar, setSnackbar] = useState<SnackbarState>(initialSnackbar);

  // Function to add to cart
  const addToCart = (book: Book) => {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));

    if (!isLoggedIn) {
      setSnackbar({
        open: true,
        message: "Please sign in to add books to your cart.",
        severity: "warning",
      });
      return;
    }
  };

  // Function to close Snackbar
  const closeSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return { snackbar, addToCart, closeSnackbar };
}
