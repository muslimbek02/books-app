import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";


const SignTitle = ({children}) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontSize: "36px",
        fontWeight: 700,
        fontFamily: `'Mulish', sans-serif`,
        textAlign: "center",
        lineHeight: 'normal',
        mb: '36px'
      }}
    >
      {children}
    </Typography>
  );
};
SignTitle.propTypes = {
  children: PropTypes.node
}

export default SignTitle;
