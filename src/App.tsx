import { Box } from "@mui/material";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import BannerCarousel from "./components/BannerCarousel";
import CategorySection from "./components/CategorySection";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box component="main" sx={{ flex: 1 }}>
        <BannerCarousel />
        <CategorySection />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
