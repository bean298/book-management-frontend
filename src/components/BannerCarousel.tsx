import { Box, Button, Typography } from "@mui/material";
import { Carousel } from "antd";
import { Link as RouterLink } from "react-router";
import carousel1 from "../assets/carousel/carousel1.jpg";
import carousel2 from "../assets/carousel/carousel2.jpg";
import carousel3 from "../assets/carousel/carousel3.jpg";

const slides = [
  { src: carousel1, alt: "Banner 1" },
  { src: carousel2, alt: "Banner 2" },
  { src: carousel3, alt: "Banner 3" },
];

export default function BannerCarousel() {
  return (
    <Box
      component="section" //Render Box -> section
      sx={{
        color: "common.white",
        background:
          "linear-gradient(110deg, #263244 0%, #747f91 52%, #e5e7eb 100%)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto", //Margin left-right
          px: { xs: 3, md: 6, xl: 8 }, //Padding left-rigth
          py: { xs: 7, md: 10 }, //Padding top-bottom
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, //Responsive: xs-1column, md: 2column
          alignItems: "center",
          gap: { xs: 5, md: 8 },
        }}
      >
        {/* Left: Welcome title */}
        <Box>
          <Typography
            component="h1"
            sx={{
              maxWidth: 580,
              lineHeight: 1.1,
              fontSize: { xs: 38, md: 56, lg: 68 },
              fontWeight: 400,
            }}
          >
            Welcome to Book Store
          </Typography>

          <Typography
            sx={{
              maxWidth: 620,
              mt: 2.5,
              color: "grey.100",
              fontSize: { xs: 17, md: 20 },
              lineHeight: 1.6,
            }}
          >
            Discover your next favorite book from our carefully curated
            collection of Love, Knowledge, and History books.
          </Typography>

          {/* BTN */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 4 }}>
            <Button
              component={RouterLink}
              to="/popular"
              variant="contained"
              sx={{
                bgcolor: "grey.100",
                color: "grey.900",
                textTransform: "none",
                "&:hover": { bgcolor: "common.white" },
              }}
            >
              Browse Popular Books
            </Button>

            <Button
              component={RouterLink}
              to="/information"
              variant="outlined"
              sx={{
                color: "common.white",
                borderColor: "grey.300",
                textTransform: "none",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>

        {/* Right: Slide image */}
        <Box
          role="region"
          aria-label="Featured bookstore images"
          sx={{
            overflow: "hidden",
            borderRadius: 3,
            boxShadow: 6,
          }}
        >
          <Carousel arrows dots infinite={true} autoplay autoplaySpeed={3000}>
            {slides.map((slide, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    aspectRatio: "1.52",
                    display: "grid",
                    placeItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img" //Render Box -> section
                    src={slide.src}
                    alt={slide.alt}
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
}
