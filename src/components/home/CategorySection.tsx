import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper";
import {
  Alert,
  Box,
  Container,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import type { Category } from "../../types/category";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "./CategoryCard";
import "swiper/css";

interface CategorySectionProps {
  categories: Category[];
  loading?: boolean;
  error?: string;
}

export default function CategorySection({
  categories, //Category data
  loading = false,
  error = "",
}: CategorySectionProps) {
  // Reference to object control of Swiper
  const swiperRef = useRef<SwiperClass | null>(null);

  //   Uncomment to watch categories data
  //   console.log(categories);

  return (
    <Box
      component="section"
      aria-labelledby="category-heading"
      sx={{ bgcolor: "#faf9f7" }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            mb: 4,
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Text of category section */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                color: "#9a6b58",
                fontWeight: 700,
                letterSpacing: "0.16em",
                lineHeight: 1,
                // Draw a line
                "&::before": {
                  content: '""',
                  width: 24,
                  height: 2,
                  borderRadius: 1,
                  bgcolor: "currentColor",
                },
              }}
            >
              YOUR BOOK CORNER
            </Typography>

            <Typography
              id="category-heading"
              component="h2"
              sx={{
                mt: 1.5,
                fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.045em",
                lineHeight: 1.1,
                color: "#273244",
              }}
            >
              EXPLORE{" "}
              <Box component="span" sx={{ color: "#a66f58" }}>
                CATEGORIES
              </Box>
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1.5, fontSize: { xs: 15, md: 17 }, lineHeight: 1.65 }}
            >
              Choose a favorite topic and begin your process of active reading.
            </Typography>
          </Box>

          {/* Button arrow */}
          <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
            <IconButton
              aria-label="Previous"
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                width: 42,
                height: 42,
                border: "1px solid #e3e0dc",
                bgcolor: "#fff",
                color: "#596273",
                transition: "all 200ms ease",
                "&:hover": {
                  bgcolor: "#273244",
                  color: "#fff",
                  borderColor: "#273244",
                },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              aria-label="Next"
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                width: 42,
                height: 42,
                border: "1px solid #e3e0dc",
                bgcolor: "#fff",
                color: "#596273",
                transition: "all 200ms ease",
                "&:hover": {
                  bgcolor: "#273244",
                  color: "#fff",
                  borderColor: "#273244",
                },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Main content */}
        {error ? (
          // Error
          <Alert severity="error">{error}</Alert>
        ) : loading ? (
          // Loading
          <Box sx={{ display: "flex", gap: 3 }}>
            {Array.from({ length: 3 }, (_, index) => (
              <Skeleton
                key={index}
                variant="rounded"
                sx={{
                  flex: {
                    xs: "0 0 100%",
                    sm: "0 0 calc(50% - 12px)",
                    md: "0 0 calc(33.333% - 16px)",
                  },
                  height: 184,
                  borderRadius: 3,
                }}
              />
            ))}
          </Box>
        ) : categories.length === 0 ? (
          <Typography color="text.secondary" sx={{ py: 4 }}>
            No categories available yet.
          </Typography>
        ) : (
          // Category
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                {/* Category Card */}
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </Box>
  );
}
