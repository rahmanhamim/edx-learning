import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";

const Footer = () => {
  const Styles = {
    linkStyles: {
      cursor: "pointer",
      color: "#00688C",
      my: "3px",
      letterSpacing: ".5px",
      fontWeight: "light",
    },
  };

  return (
    <Box sx={{ borderTop: "1px solid #CCCCCC" }}>
      <Grid container spacing={2} sx={{ pt: 4, pb: 2 }}>
        <Grid item xs={12} md={2} sx={{ borderRight: "1px solid gray" }}>
          <Box sx={{ px: { xs: 2, md: 5 } }}>
            <Image
              src="/assets/images/edx-logo.png"
              height="45px"
              width="78px"
              alt="logo"
              objectFit={"contain"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={2} sx={{ borderRight: "1px solid gray" }}>
          <Box sx={{ px: { xs: 2, md: 0 } }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              edX
            </Typography>
            <Box sx={{ my: 1 }}>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>About</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Affilliates</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>edX for Business</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Open edX</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Careers</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>News</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ borderRight: "1px solid gray" }}>
          <Box sx={{ px: { xs: 2, md: 0 } }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Legal
            </Typography>
            <Box sx={{ my: 1 }}>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>
                  Terms of Service &#38; Honor Code
                </Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Privacy Policy</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>
                  Accessibillity Policy
                </Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Trademark Policy</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Sitemap</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={2} sx={{ borderRight: "1px solid gray" }}>
          <Box sx={{ px: { xs: 2, md: 0 } }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Connect
            </Typography>
            <Box sx={{ my: 1 }}>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Blog</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Privacy Policy</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Contact Us</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Help Center</Typography>
              </Link>
              <Link href="/progress">
                <Typography sx={Styles.linkStyles}>Media Kit</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ px: { xs: 2, md: 0 } }}>
            <Box sx={{ width: { xs: "100%", md: "75%" } }}>
              <Box
                sx={{ "*": { color: "#00688C", mr: 1, fontSize: "2.3rem" } }}
              >
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <InstagramIcon />
                <RedditIcon />
              </Box>
              <Box sx={{ my: 2 }}>
                <Link href="/">
                  <a style={{ marginRight: "15px" }}>
                    <Image
                      src="/assets/images/google-play.png"
                      height="45px"
                      width="110px"
                      alt="logo"
                      objectFit={"contain"}
                    />
                  </a>
                </Link>
                <Image
                  src="/assets/images/apple-store.svg"
                  height="45px"
                  width="125px"
                  alt="logo"
                  objectFit={"contain"}
                />
              </Box>
              <Box sx={{ mt: 8 }}>
                © 2022 edX LLC. All rights reserved. 深圳市恒宇博科技有限公司
                粤ICP备17044299号-2
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
