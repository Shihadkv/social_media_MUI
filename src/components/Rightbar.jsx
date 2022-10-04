import { Box } from "@mui/system";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      bgcolor="lightblue"
      flex={2}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Right bar
    </Box>
  );
};

export default Rightbar;
