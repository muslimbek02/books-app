import { Link, Typography } from "@mui/material";
import { PropTypes } from "prop-types";


const FormAskingText = ({href, text, linkText }) => {
  return (
    <Typography
      component="div"
      sx={{
        textAlign: "center",
        fontSize: "14px",
        fontFamily: `'Mulish',sans-serif`,
        fontWeight: 300,
        color: "#333",
        mt: '12px',
      }}
    >
      {text}{" "}
      <Link color="#6200EE" underline="none" href={href}>
        {linkText}
      </Link>
      .
    </Typography>
  );
};
FormAskingText.propTypes = {
  text: PropTypes.string,
  linkText: PropTypes.string,
  href: PropTypes.string,
}

export default FormAskingText;
