import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

const VideoCard = ({ video, onClick }) => {
  return (
    <Card
      sx={{
        width: 200,
        borderRadius: 2,
        boxShadow: 3,
        margin: 1,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={() => onClick(video)} // Triggers modal later
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={video.thumbnail}
          alt={video.title}
        />
        <CardContent>
          <Typography variant="subtitle1" noWrap fontWeight="bold">
            {video.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
