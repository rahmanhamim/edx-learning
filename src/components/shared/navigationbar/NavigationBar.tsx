import {
  AppBar,
  Box,
  Container,
  FormControl,
  MenuItem,
  OutlinedInput,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Dashboard", "Profile", "Account", "Order History", "Sign Out"];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const NavigationBar = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const Styles = {
    navLinks: {
      display: "inline-block",
      my: 0,
      py: 1,
      px: 2,
      fontSize: "1.2rem",
      cursor: "pointer",
      "&: hover": {
        bgcolor: "#e1dddb",
      },
    },
  };

  const router = useRouter();

  return (
    <AppBar
      sx={{
        bgcolor: "primary.light",
        color: "primary.main",
        borderBottom: "1px solid #EAEAEA",
      }}
      elevation={0}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <Link href="/" passHref>
                <a>
                  <Image
                    src="/assets/images/edx-logo.png"
                    height="25px"
                    width="48px"
                    alt="logo"
                    objectFit={"contain"}
                  />
                </a>
              </Link>
            </Box>
            <Box sx={{ ml: "1em" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  fontWeight: "light",
                  color: "#454545",
                }}
              >
                IBM PY0101EN
              </Typography>
              <Typography
                color="secondary.light"
                sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Python Basics for Data Science
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/home">
              <a style={{ margin: "0 1em", fontSize: "1.1rem" }}>Help</a>
            </Link>

            <Box sx={{ display: "flex" }}>
              <Box>
                <FormControl>
                  <Select
                    sx={{
                      height: "40px",
                      borderRadius: "0px",
                      "&: hover": {
                        bgcolor: "primary.main",
                        color: "primary.light",
                      },
                    }}
                    multiple
                    displayEmpty
                    value={personName}
                    // onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return (
                          <>
                            <Typography
                              sx={{ display: { xs: "none", md: "block" } }}
                            >
                              Rahman Hamim
                            </Typography>
                            <AccountCircleIcon
                              sx={{ display: { xs: "block", md: "none" } }}
                            />
                          </>
                        );
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Toolbar>
        <Box>
          <Link href="/">
            <a
              className="navlinks"
              style={{
                borderBottom: `${
                  router.pathname === "/" ? "4px solid #00262B" : "transparent"
                }`,
              }}
            >
              Course
            </a>
          </Link>
          <Link href="/progress">
            <a
              className="navlinks"
              style={{
                borderBottom: `${
                  router.pathname === "/progress"
                    ? "4px solid #00262B"
                    : "transparent"
                }`,
              }}
            >
              Progress
            </a>
          </Link>
          <Link href="/dates">
            <a
              className="navlinks"
              style={{
                borderBottom: `${
                  router.pathname === "/dates"
                    ? "4px solid #00262B"
                    : "transparent"
                }`,
              }}
            >
              Dates
            </a>
          </Link>
          <Link href="/discussion">
            <a
              className="navlinks"
              style={{
                borderBottom: `${
                  router.pathname === "/discussion"
                    ? "4px solid #00262B"
                    : "transparent"
                }`,
              }}
            >
              Discussion
            </a>
          </Link>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
