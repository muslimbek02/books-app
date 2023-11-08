import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import PropTypes from "prop-types";

const SignInput = ({ children, value, setValue }) => {
  const handleChange = (evt) => setValue(evt.target.value);

  return (
    <OutlinedInput
      value={value}
      onChange={handleChange}
      sx={{
        mb: "16px",
        height: "47px",
        p: "14px 16px 14px 0",
        fontSize: "16px",
        fontFamily: `'Mulish',sans-serif`,
      }}
      fullWidth
      endAdornment={
        <InputAdornment position="end">
          <IconButton sx={{ p: 0 }}>{children}</IconButton>
        </InputAdornment>
      }
    />
  );
};
SignInput.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  setValue: PropTypes.func,
};
export default SignInput;
