import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer"; // ← add this

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <CssBaseline />
      <Navbar onSearch={setSearchTerm} />
      <HomePage searchTerm={searchTerm} />
      <Footer /> {/* ← here */}
    </>
  );
}

export default App;
