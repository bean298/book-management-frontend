import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import {
  Alert,
  Box,
  Container,
  IconButton,
  Skeleton,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import type { Category } from "../types/category";
import { getCategories } from "../services/categoryService";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CategorySection() {
  // State
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    // Get categories data
    getCategories(controller.signal)
      .then(setCategories)
      .catch((loadError: unknown) => {
        if (!controller.signal.aborted) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Can't load categories.",
          );
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    // Cancel request
    return () => controller.abort();
  }, []);

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
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              py: 2, //Padding top,bottom
              my: -2, //Margin top,bottom
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none", //Hide scrollbar
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {loading ? (
              // Skeleton for loading
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
            ) : (
              // Card category
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
                    <Box sx={{ pb: 1 }}>
                      <Card
                        component="article"
                        sx={{
                          height: "100%",
                          minHeight: 220,
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: 3,
                          border: "1px solid rgba(39, 50, 68, 0.07)",
                          background:
                            "linear-gradient(145deg, #fff 0%, #fff8f4 100%)",
                          boxShadow: "0 4px 14px rgba(39, 50, 68, 0.035)",
                          // Line on card
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 4,
                            bgcolor: "#b9785b",
                            transform: "scaleX(0.18)",
                            transformOrigin: "left",
                            transition: "transform 220ms ease",
                          },
                          "&:hover": {
                            cursor: "pointer",
                            transform: "translateY(-1px)",
                            borderColor: "#b9785b",
                            boxShadow: "0 18px 36px rgba(39, 50, 68, 0.12)",

                            "&::before": {
                              transform: "scaleX(1)",
                            },

                            "& h3": {
                              color: "#b9785b",
                            },
                          },
                          //Padding
                          p: { xs: 3, md: 3.5 },
                        }}
                      >
                        <CardContent>
                          <Typography
                            component="h3"
                            sx={{
                              fontSize: 22,
                              fontWeight: 700,
                              letterSpacing: "-0.02em",
                              transition: "color 220ms ease",
                            }}
                          >
                            {category.name}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 2, lineHeight: 1.7 }}
                          >
                            {category.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
}
