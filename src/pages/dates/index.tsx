import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const DatesPage = () => {
  return (
    <Container
      sx={{ margin: "0 auto", textAlign: "center", minHeight: "60vh" }}
    >
      <Image
        src="/assets/images/coming-soon.gif"
        width={500}
        height={250}
        alt="img"
      />
    </Container>
  );
};

export default DatesPage;
