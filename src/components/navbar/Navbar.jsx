import React from "react";
import { AppBar, Toolbar, Grid, Box, Typography, Button } from "@mui/material";
const Navbar = () => {
  return (
    <div className="navbar">
      <AppBar sx={{background : "#00113B"}} elevation = {0}>
        <Toolbar style={{ justifyContent : "space-between", display : "flex"}}>
          <Typography sx={{p:1}}>Logo</Typography>
          <Typography sx={{textAlign: 'center', fontSize : "21px"}}>JS ID: 234566</Typography>
          <Button sx={{color : "white", fontWeight : "800"}}>My Profile</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
