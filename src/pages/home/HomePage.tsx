import { Box } from "@mui/material";
import BannerCarousel from "../../components/BannerCarousel";
import CategorySection from "../../components/CategorySection";

export default function HomePage() {
  return (
    <Box>
      {/* Banner */}
      <BannerCarousel />

      {/* Category */}
      <CategorySection />
    </Box>
  );
}
