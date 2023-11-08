import PropTypes from 'prop-types'
import { Box } from "@mui/material";



export const SignBoxWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

SignBoxWrapper.propTypes = {
  children: PropTypes.element
}
