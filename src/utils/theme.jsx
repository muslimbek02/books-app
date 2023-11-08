import React from "react";
import { createTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});

LinkBehavior.displayName = "LinkBehavior";

LinkBehavior.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FBC100",
      light: "#fff",
      dark: "FBC100",
      contrastText: "#000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      body {
        background-color: #f8f8f8;
        color: #151515;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Mulish', sans-serif;
        background-image: url(../public/main.png);
        background-repeat: no-repeat;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      `,
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});
