import { Box, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

const footerGroups = [
  {
    title: "Explore Books",
    links: [
      { label: "All Books", to: "/books" },
      { label: "Categories", to: "/categories" },
      { label: "Bestsellers", to: "/bestsellers" },
      { label: "New Arrivals", to: "/new-arrivals" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "FAQs", to: "/faq" },
      { label: "Shipping Information", to: "/shipping" },
      { label: "Return Policy", to: "/returns" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "My Account", to: "/account" },
      { label: "My Orders", to: "/orders" },
      { label: "Shopping Cart", to: "/cart" },
    ],
  },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: "auto", bgcolor: "grey.50" }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))", // Mobile: 2 columns
              sm: "repeat(4, minmax(0, 1fr))", //Web: 4 columns
            },
            gap: { xs: 4, sm: 5 },
          }}
        >
          {/* Book store */}
          <Box>
            <Typography variant="subtitle2">Book Store</Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 1.5,
                maxWidth: 230,
                fontSize: "0.8rem",
                color: "text.disabled",
              }}
            >
              Your trusted partner for Love, Knowledge, and History books.
            </Typography>
          </Box>

          {/* Explore Books - Customer Service - About Us */}
          {footerGroups.map((group) => (
            <Box component="section" key={group.title}>
              <Typography variant="subtitle2">{group.title}</Typography>

              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  mt: 1.5,
                  mb: 0,
                  display: "grid",
                  gap: 1,
                }}
              >
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      component={RouterLink}
                      to={link.to}
                      underline="hover"
                      color="text.secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Reserved */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: "block",
            mt: 3,
            pt: 2.5,
            borderTop: 1,
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          © 2026 Book Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
