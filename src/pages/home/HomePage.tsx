import { Box } from "@mui/material";
import BannerCarousel from "../../components/home/BannerCarousel";
import CategorySection from "../../components/home/CategorySection";
import BookSection from "../../components/home/BookSection";
import { useCategories } from "../../hooks/useCategories";
import { useBooks } from "../../hooks/useBooks";

export default function HomePage() {
  // Get state from useCategories hooks
  const categoriesState = useCategories();
  const booksState = useBooks();

  return (
    <Box>
      {/* Banner */}
      <BannerCarousel />

      {/* Category */}
      <CategorySection {...categoriesState} />

      {/* Book */}
      <BookSection {...booksState} />
    </Box>
  );
}
