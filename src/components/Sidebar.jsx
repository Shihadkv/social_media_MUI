import { Box } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      bgcolor="lightcoral"
      flex={1}
      padding={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      side abr
    </Box>
  );
};

export default Sidebar;
