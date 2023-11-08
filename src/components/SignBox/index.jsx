import { Box } from "@mui/material";
import { PropTypes } from "prop-types";

const SignBox = ({ children }) => {
  return (
    <Box
      sx={{
        width: "430px",
        backgroundColor: "#fff",
        p: "20px 28px",
        borderRadius: "12px",
        boxShadow: "0px 4px 32px 0px rgba(51, 51, 51, 0.04)",
      }}
    >
      {children}
    </Box>
  );
};

SignBox.propTypes = {
  children: PropTypes.node,
};

export default SignBox;
