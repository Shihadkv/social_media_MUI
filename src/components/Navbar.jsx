import { AppBar, Toolbar, Typography } from "@mui/material";
import { display, styled } from "@mui/system";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AdbIcon from '@mui/icons-material/Adb';
import React from "react";

const StykedToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StykedToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          
        >
       SHIHAD BH
        </Typography>
        <AcUnitIcon sx={ {display :{ xs: "block", sm: "none" }}} />
        <AdbIcon sx= {{ display : {xs : "block", sm : "none"}}}/>
        <AcUnitIcon sx={ {display :{ xs: "block", sm: "none" }}}/>

      </StykedToolbar>
    </AppBar>
  );
};

export default Navbar;
