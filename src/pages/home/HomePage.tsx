import { Box } from "@mui/material";
import BannerCarousel from "../../components/home/BannerCarousel";
import CategorySection from "../../components/home/CategorySection";
import BookSection from "../../components/home/BookSection";
import AppSnackbar from "../../components/common/AppSnackbar";
import { useCategories } from "../../hooks/useCategories";
import { useBooks } from "../../hooks/useBooks";
import { useAddToCart } from "../../hooks/useAddToCart";

export default function HomePage() {
  // Get state from useCategories hooks
  const categoriesState = useCategories();
  const booksState = useBooks();

  // Add to cart + notification
  const { snackbar, addToCart, closeSnackbar } = useAddToCart();

  return (
    <Box>
      {/* Banner */}
      <BannerCarousel />

      {/* Category */}
      <CategorySection {...categoriesState} />

      {/* Book */}
      <BookSection {...booksState} onAddToCart={addToCart} />

      {/* Notification */}
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={closeSnackbar}
      />
    </Box>
  );
}
