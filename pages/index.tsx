import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Box>
      <Typography variant="h1" color="secondary.light">
        hello
      </Typography>
      <Button variant="contained">link</Button>
    </Box>
  );
};

export default Home;
