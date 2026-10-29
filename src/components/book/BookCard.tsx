import type { Book } from "../../types/book";
import { Box, Button, Card, Typography } from "@mui/material";
import formatMoney from "../../utils/formatMoney";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface BookCardProps {
  book: Book;
  onAddToCart?: (book: Book) => void;
}

export default function BookCard({ book, onAddToCart }: BookCardProps) {
  const outOfStock = book.quantity <= 0;

  return (
    <Card
      component="article"
      variant="outlined"
      sx={{
        height: "100%",
        p: 1.25,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        borderColor: "divider",
        bgcolor: "background.paper",
        transition:
          "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.09)",
          borderColor: "#344767",
        },
        "&:hover .book-cover": {
          transform: "scale(1.03)",
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        className="book-cover"
        src={book.cover_image}
        alt={`Cover of ${book.title}`}
        loading="lazy"
        sx={{
          width: "100%",
          aspectRatio: "2 / 3",
          objectFit: "cover",
          display: "block",
          borderRadius: 1.5,
          bgcolor: "#f3f4f6",
          transition: "transform 300ms ease",
        }}
      />

      {/* Title */}
      <Typography
        component="h3"
        variant="body2"
        title={book.title}
        sx={{
          mt: 1.25,
          fontWeight: 700,
          lineHeight: 1.4,
          minHeight: "2.8em",
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
      >
        {book.title}
      </Typography>

      {/* Year */}
      <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
        {book.published_year}
      </Typography>

      {/* Description */}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          mt: 1,
          flexGrow: 1,
          minHeight: 34,
          lineHeight: 1.5,
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2, //Maximum of 2 lines
        }}
      >
        {book.description}
      </Typography>

      {/* BTN */}
      <Box
        sx={{
          mt: "auto",
          pt: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: 700, color: "#263b5b", lineHeight: 1.3 }}
        >
          {formatMoney(book.price)}
        </Typography>

        <Button
          startIcon={<ShoppingCartOutlinedIcon />}
          size="small"
          variant="contained"
          disabled={outOfStock}
          sx={{
            py: 0.9, //Padding top, bottom
            px: 1, //Padding left, right
            borderRadius: 1.5,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.8rem",
            bgcolor: "#2e7d32",
            color: "#fff",
            transition: "background-color 180ms ease",
            "&:hover": {
              bgcolor: "#1b5e20",
            },
            "&.Mui-disabled": {
              bgcolor: "#e5e7eb",
              color: "#9ca3af",
            },
          }}
          onClick={() => onAddToCart?.(book)}
        >
          {outOfStock ? "Out of stock" : "Add to Cart"}
        </Button>
      </Box>
    </Card>
  );
}
