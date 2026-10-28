import { Box } from "@mui/material";
import BannerCarousel from "../../components/BannerCarousel";
import CategorySection from "../../components/CategorySection";
import { useCategories } from "../../hooks/useCategories";

export default function HomePage() {
  // Get state from useCategories hooks
  const { categories, loading, error } = useCategories();

  return (
    <Box>
      {/* Banner */}
      <BannerCarousel />

      {/* Category */}
      <CategorySection
        categories={categories}
        loading={loading}
        error={error}
      />
    </Box>
  );
}
