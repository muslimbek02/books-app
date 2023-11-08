import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

const SocialButton = ({ text, children }) => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        textTransform: "none",
        mb: "16px",
        border: "1px solid #151515",
        p: "10px 24px",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      {children}
      <Typography
        component={"span"}
        sx={{
          ml: "16px",
          fontSize: "16px",
          color: "#151515",
          fontWeight: 500,
          fontFamily: `'Mulish',sans-serif`,
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};
SocialButton.propTypes = {
  children: PropTypes.node,
  text: PropTypes.node,
};
export default SocialButton;
