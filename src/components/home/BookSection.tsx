import {
  Alert,
  Box,
  Button,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import BookCard from "../book/BookCard";
import type { Book } from "../../types/book";

interface BookSectionProps {
  books: Book[];
  loading?: boolean;
  error?: string;
  onViewAll?: () => void;
  onAddToCart?: (book: Book) => void;
}

export default function BookSection({
  books, //Books data
  loading = false,
  error = "",
  onViewAll,
  onAddToCart,
}: BookSectionProps) {
  return (
    <Box component="section" aria-labelledby="featured-books-heading">
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            id="featured-books-heading"
            component="h2"
            variant="h5"
            sx={{ fontWeight: 700, color: "#273244" }}
          >
            Featured Books
          </Typography>

          <Button variant="outlined" size="small" onClick={onViewAll}>
            View All
          </Button>
        </Box>

        {/* Main content */}
        {error ? (
          // Error
          <Alert severity="error">{error}</Alert>
        ) : loading ? (
          // Loading
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
              gap: 2,
            }}
          >
            {Array.from({ length: 8 }, (_, index) => (
              <Skeleton key={index} variant="rounded" height={320} />
            ))}
          </Box>
        ) : books.length === 0 ? (
          <Typography color="text.secondary" sx={{ py: 4 }}>
            No books available yet.
          </Typography>
        ) : (
          // Books
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr", //Mobile: 1 colukm
                sm: "repeat(2, minmax(0, 1fr))", //Tablet: 2 column
                md: "repeat(5, minmax(0, 1fr))", //Desktop: 5 column
              },
              gap: 2,
            }}
          >
            {books.map((book) => (
              <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
