import { Box, CircularProgress, Container } from "@mui/material";
import React from "react";
import styles from "../styles/TestComponent.module.css";

const TestComponent = () => {
  return (
    <Container sx={{ minHeight: "50vh", my: 10 }}>
      <div className={styles.outCircle}>
        <div
          className={`${styles.rotate}  ${styles.linear} ${styles.infinite} ${styles.duringTen}`}
        >
          <div className={styles.counter}>
            <div className={`${styles.inner} ${styles.blue}`}>hello</div>
          </div>
        </div>
        <div
          className={`${styles.second} ${styles.rotate} ${styles.linear} ${styles.infinite} ${styles.duringFour}`}
        >
          <div className={styles.counter}>
            <div className={`${styles.inner} ${styles.red}`}>bye bye</div>
          </div>
        </div>
      </div>

      <Box>
        <CircularProgress />
      </Box>
    </Container>
  );
};

export default TestComponent;
