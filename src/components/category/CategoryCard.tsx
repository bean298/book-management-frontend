import { Box, Card, CardContent, Typography } from "@mui/material";
import type { Category } from "../../types/category";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
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
          background: "linear-gradient(145deg, #fff 0%, #fff8f4 100%)",
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
  );
}
