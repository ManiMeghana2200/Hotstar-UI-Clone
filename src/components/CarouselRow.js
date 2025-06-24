import React from "react";
import VideoCard from "./VideoCard";
import { Box, Typography } from "@mui/material";

const CarouselRow = ({ title, videos, onVideoClick }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h6" fontWeight="bold" mb={1} ml={1}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          paddingX: 1,
        }}
      >
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onClick={onVideoClick}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CarouselRow;
