import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Chip, Avatar } from "@mui/material";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
const BasicInfo = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"],
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item md={6} xs={12} sx={{ p: { md: 7, xs: 3 } }}>
          <Typography variant="h4" fontWeight={700} sx={{textAlign : {xs : "center", md:"left"}}} gutterBottom>
            Welcome Again, Aryan Sharma
          </Typography>
          <Typography variant="subtitle1" sx={{textAlign : {xs : "center", md:"left"}}}>Address</Typography>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: { md: "end", xs: "center" },
            alignItems: "center",
          }}
        >
          <Chip
            avatar={<Avatar src="https://shantidentals.com/wp-content/uploads/2022/01/djb.png" />}
            label="Delhi Jal Board Reports"
            variant="outlined"
            // size="medium"
            sx={{
              mr: { md: 3, xs: 1 },
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              px: 1,
              py: 3,
              borderRadius: "10000px",
              bgcolor: "#383838",
              color: "#FFFFFF",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#383838",
              },
            }}
            onClick={() => {}}
          />
          <Chip
            label="Monthly Jalsetu Reports"
            variant="outlined"
            sx={{
              mr: {md : 7},
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              px: 1,
              py: 3,
              borderRadius: "10000px",
              bgcolor: "#383838",
              color: "#FFFFFF",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#383838",
              },
            }}
            onClick={() => {}}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default BasicInfo;
