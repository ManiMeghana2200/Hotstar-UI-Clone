import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Switch,
  TextField,
} from "@mui/material";
import { useThemeMode } from "../theme";

const Navbar = ({ onSearch }) => {
  const { mode, toggleTheme } = useThemeMode();

  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: mode === "dark" ? "#141414" : "#fff",
        color: mode === "dark" ? "#fff" : "#000",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img
            src="/logo192.png"
            alt="Logo"
            style={{ height: 40, marginRight: 12 }}
          />
          <Typography variant="h6">TeluguFlix</Typography>
        </Box>

        <TextField
          size="small"
          placeholder="Search..."
          onChange={handleSearchChange}
          sx={{
            input: { color: mode === "dark" ? "#fff" : "#000" },
            label: { color: "#888" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#888" },
            },
          }}
        />

        <Switch checked={mode === "dark"} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
