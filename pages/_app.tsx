import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#00262B",
      dark: "#000",
    },
    secondary: {
      light: "#99241c",
      main: "#D13328",
      dark: "#000",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: "1px",
          },
        },
      ],
    },
  },
});

console.log(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
