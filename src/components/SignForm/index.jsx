import { useState } from "react";
import { Button } from "@mui/material";


import SignLabel from "../SignLabel";
import SignInput from "../SignInput";
import { ErrorX } from "../../assets/error-x";

const SignForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');



  return (
    <form>
      <SignLabel>Your name</SignLabel>
      <SignInput value={name} setValue={setName}>
        <ErrorX />
      </SignInput>
      <SignLabel>Your email</SignLabel>
      <SignInput value={email} setValue={setEmail}>
        <ErrorX />
      </SignInput>
      <SignLabel>Your username</SignLabel>
      <SignInput value={username} setValue={setUsername}>
        <ErrorX />
      </SignInput>
      <Button
        fullWidth
        type="submit"
        sx={{
          p: "10px 24px",
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: `'Mulish',sans-serif`,
          textTransform: "none",
          backgroundColor: "#6200EE",
          color: "#fefefe",
          lineHeight: 'normal',
          mt: "16px",
          "&:hover": {
            backgroundColor: "#6200EE",
          },
        }}
      >
        Button
      </Button>
    </form>
  );
};

export default SignForm;
