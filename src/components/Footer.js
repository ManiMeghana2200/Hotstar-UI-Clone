// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 4,
        py: 2,
        textAlign: "center",
        borderTop: "1px solid #444",
        color: "gray",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Hotstar UI Clone.
      </Typography>
    </Box>
  );
};

export default Footer;
