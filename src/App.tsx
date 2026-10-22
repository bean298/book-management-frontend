import { Box } from "@mui/material";
import Header from "./layouts/header";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
    </Box>
  );
}

export default App;
