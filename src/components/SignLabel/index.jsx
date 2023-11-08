import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";

const SignLabel = ({ children }) => {
  return (
    <Typography
      component="h5"
      sx={{
        fontSize: "14px",
        color: "#151515",
        fontWeight: 700,
        fontFamily: `'Mulish',sans-serif`,
        lineHeight: '120%',
        mb: '1px',
      }}
    >
      {children}
    </Typography>
  );
};

SignLabel.propTypes = {
  children: PropTypes.node,
};

export default SignLabel;
