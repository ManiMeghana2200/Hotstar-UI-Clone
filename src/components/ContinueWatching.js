import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import {
  addToContinueWatching,
  removeFromContinueWatching,
} from "../utils/storage";

const ContinueWatching = ({ videos, onVideoClick, refreshList }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuVideoId, setMenuVideoId] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event, videoId) => {
    setAnchorEl(event.currentTarget);
    setMenuVideoId(videoId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuVideoId(null);
  };

  const handleRemove = () => {
    refreshList(removeFromContinueWatching(menuVideoId));
    handleClose();
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" mb={1}>
        Continue Watching
      </Typography>

      <Box sx={{ display: "flex", overflowX: "auto", gap: 2 }}>
        {videos.map((v) => (
          <Box
            key={v.id}
            sx={{
              position: "relative",
              width: 180,
              flex: "0 0 auto",
              cursor: "pointer",
            }}
            onClick={() => {
              addToContinueWatching(v); // refresh timestamp/ordering
              onVideoClick(v);
            }}
          >
            {/* thumbnail */}
            <Box
              component="img"
              src={v.thumbnail}
              alt={v.title}
              sx={{ width: "100%", borderRadius: 1 }}
            />

            {/* play overlay */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "rgba(0,0,0,0.6)",
                borderRadius: "50%",
                p: 1.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PlayArrowIcon sx={{ color: "#fff", fontSize: 32 }} />
            </Box>

            {/* 3-dot menu button */}
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // don’t open modal
                handleMenuOpen(e, v.id);
              }}
              sx={{
                position: "absolute",
                bottom: 4,
                right: 4,
                bgcolor: "rgba(0,0,0,0.6)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
              }}
            >
              <MoreVertIcon sx={{ color: "#fff" }} fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* pop-over menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DownloadIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Download" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ThumbDownAltOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Not for me" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ThumbUpAltOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="I like it" />
        </MenuItem>
        <MenuItem onClick={handleRemove}>
          <ListItemIcon>
            <CloseIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Remove from row" />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ContinueWatching;
