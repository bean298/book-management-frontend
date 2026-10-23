import { Box } from "@mui/material";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box component="main" sx={{ flex: 1 }} />

      <Footer />
    </Box>
  );
}

export default App;
