import { Box, Button, Container, Grid, Typography } from "@mui/material";
import TitleMain from "components/shared/titles/TitleMain";
import React from "react";

const ProgressHome = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 2, minHeight: "60vh" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", fontSize: "2.3rem", my: 4 }}
      >
        Your progress
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              boxShadow: "1px 1px 2px 1px rgba(215,215,215,.5)",
              p: 3,
              borderRadius: "5px",
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", fontSize: "2rem", mb: 1 }}
              >
                Course completion
              </Typography>
              <Typography variant="body2">
                This represents how much of the course content you have
                completed. Note that some content may not yet be released.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                textAlign: "center",
                my: { xs: 2, md: 0 },
              }}
            >
              <Button variant="contained" sx={{}}>
                Start Course
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              boxShadow: "1px 1px 2px 1px rgba(215,215,215,.5)",
              borderRadius: "5px",
              bgcolor: "#FBFAF9",
              p: 4,
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Earn a certificate
            </Typography>
            <Typography
              sx={{
                fontSize: ".8rem",
                lineHeight: "1.8",
                my: 2,
                color: "#454545",
                fontWeight: "light",
              }}
            >
              You are in an audit track and do not qualify for a certificate. In
              order to work towards a certificate, upgrade your course today.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "primary.light",
                color: "secondary.main",
                display: "block",
                width: "100%",
                boxShadow: "none",
                border: "1px solid #e6e6e6",
                "&: hover": {
                  bgcolor: "secondary.main",
                  color: "primary.light",
                  border: "1px solid transparent",
                },
              }}
            >
              Upgrade Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProgressHome;
