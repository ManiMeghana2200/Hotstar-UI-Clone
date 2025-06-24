import React from "react";
import { Dialog, DialogContent, Typography } from "@mui/material";

const VideoModal = ({ open, video, onClose }) => {
  if (!video) return null;

  console.log("Video object in modal:", video);


  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Typography variant="h6" gutterBottom>
          {video.title}
        </Typography>

        {video.youtubeUrl ? (
          <iframe
            width="100%"
            height="400"
            src={video.youtubeUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video controls autoPlay width="100%">
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <Typography variant="body2" mt={2}>
          {video.description}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
