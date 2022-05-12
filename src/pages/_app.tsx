import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import NavigationBar from "components/shared/navigationbar/NavigationBar";
import Footer from "components/shared/footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#00262B",
      dark: "#000",
    },
    secondary: {
      light: "#454545",
      main: "#D13328",
      dark: "#99241c",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: "1px",
            padding: ".6rem 1.2rem",
          },
        },
      ],
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
