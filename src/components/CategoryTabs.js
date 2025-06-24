import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const CategoryTabs = ({ categories, selected, onChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
      <Tabs
        value={selected}
        onChange={(_, idx) => onChange(idx)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {categories.map((cat, idx) => (
          <Tab key={cat.name} label={cat.name} />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoryTabs;
