"use client";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SuperHost from "../super-host";
import StarIcon from "@mui/icons-material/Star";

export default function MediaCard({ stay }: any) {
  return (
    <div style={{ margin: "1.5em" }}>
      <CardMedia
        sx={{ height: "269px", borderRadius: "24px", width: "395px" }}
        image={stay.photo}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            {stay.superHost && <SuperHost />} {stay.type}.{" "}
            {stay.beds && stay.beds + " beds"}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <StarIcon
              sx={{
                color: "red",
                height: "16px",
              }}
            />
            {stay.rating}
          </div>
        </Typography>

        <Typography sx={{ fontSize: "16px" }} variant="body1">
          {stay.title}
        </Typography>
      </CardContent>
    </div>
  );
}
