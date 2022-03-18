import React from "react";
import { Paper, Typography, Grid, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
const SensorReadings = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"],
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0}>
        {/* // Water level */}
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            pl: { md: 6, xs: 3 },
            pt: { md: 7, xs: 3 },
            pb: { md: 5, xs: 3 },
            pr: { xs: 3 },
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "15px",
            }}
            elevation={12}
          >
            <Typography
              color="error"
              variant="h3"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              13%
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              Water Level
            </Typography>
            <Typography>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Typography>
          </Paper>
        </Grid>

        {/* // quality */}
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            pl: { md: 6, xs: 3 },
            pt: { md: 7, xs: 3 },
            pb: { md: 5, xs: 3 },
            pr: { xs: 3 },
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "15px",
            }}
            elevation={12}
          >
            <Typography
              color="#F5A841"
              variant="h3"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              4.5pH
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              Water Quality
            </Typography>
            <Typography>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Typography>
          </Paper>
        </Grid>
        {/* // Turbidity */}
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            pl: { md: 6, xs: 3 },
            pt: { md: 7, xs: 3 },
            pb: { md: 5, xs: 3 },
            pr: { xs: 3 },
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              pb: 2,
              pt: 2,
              mb: 5,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "15px",
            }}
            elevation={12}
          >
            <Typography
              color="#F5A841"
              variant="h4"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              4.5pH
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              Turbidity
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 4,
              pb: 2,
              pt: 2,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "15px",
            }}
            elevation={12}
          >
            <Typography
              color="#F5A841"
              variant="h4"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              4.5pH
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              Drainage
            </Typography>
          </Paper>
        </Grid>

        {/* // Bill */}
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            pl: { md: 6, xs: 3 },
            pt: { md: 7, xs: 3 },
            pb: { md: 5, xs: 3 },
            pr: { md: 7, xs: 3 },
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "15px",
            }}
            elevation={12}
          >
            <Typography
              variant="h3"
              fontWeight={600}
              // gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              ₹540
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" }, pb:3 }}
            >
              {`Date: ${new Date().toLocaleString("en-US", {
                month: "long",
              })} ${new Date().getFullYear()}`}
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "10000px",
                display: {md:"flex", xs:""},
                justifyContent: { md: "end", xs: "center" },
                bgcolor: "#383838",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#383838",
                },
              }}
            >
              Pay Here
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SensorReadings;
