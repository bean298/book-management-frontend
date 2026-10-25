import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";
import { Link as RouterLink, NavLink, useNavigate } from "react-router";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

const navigationItems = [
  { label: "Home", to: "/", end: true },
  { label: "Popular", to: "/popular" },
  { label: "Information", to: "/information" },
];

export default function Header() {
  // State
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Local storage
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  return (
    // AppBar: Header
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0} //Turn off shadow
      sx={{ borderBottom: 1, borderColor: "divider" }}
    >
      {/* Toolbar: content */}
      <Toolbar
        component="nav" //Render toolbar -> nav
        aria-label="Main navigation"
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          gap: 2,
          minHeight: "56px !important",
          px: { xs: 2, sm: 3 }, //Padding
        }}
      >
        {/* Left: Title, Icon */}
        <Box
          component={RouterLink}
          to="/"
          aria-label="Book Store - Home"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "text.primary",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <MenuBookOutlinedIcon />
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              transform: "translateY(1px)",
            }}
          >
            Book Store
          </Typography>
        </Box>

        {/* Middler: Navigation Bar */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 0.5, mx: "auto" }}>
          {navigationItems.map((item) => (
            <Button
              key={item.to}
              component={NavLink}
              to={item.to}
              end={item.end}
              className="nav-link"
              sx={{
                color: "text.secondary",
                textTransform: "none",
                "&.active": {
                  bgcolor: "action.selected",
                  color: "text.primary",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Right: Search, Cart, User */}

        {/* Search */}
        <TextField
          size="small"
          placeholder="Search books..."
          aria-label="Search books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            ml: "auto",
            width: { xs: "min(42vw, 220px)", sm: 220 },
            "& .MuiOutlinedInput-root": {
              bgcolor: "grey.100",
              "& fieldset": { border: 0 },
            },
          }}
          // Pass prop into MUI Component
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: search && (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="Clear search"
                    onClick={() => setSearch("")}
                    edge="end"
                  >
                    <ClearIcon fontSize="small" sx={{ color: "red" }} />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        {/* Cart */}
        <Tooltip title="Shopping cart" arrow>
          <IconButton aria-label="Shopping cart" color="inherit">
            <ShoppingCartOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        {/* Avatar */}
        {isLoggedIn ? (
          <Avatar sx={{ width: 30, height: 30, fontSize: 13 }}>A</Avatar>
        ) : (
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate("/login")}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 2,
              boxShadow: "none",
            }}
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
