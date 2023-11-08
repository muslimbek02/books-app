import SignBox from "../SignBox";
import { SignBoxWrapper } from "../SignBoxWrapper";
import SignTitle from "../SignTitle";
import SocialButton from "../SocialButton";
import { FaceBookLogo } from "../../assets/facebook-logo";
import { GoogleLogo } from "../../assets/google-logo";
import Line from "../Line";
import SignForm from "../SignForm";
import FormAskingText from "../FormAskingText";

const Login = () => {
  return (
    <SignBoxWrapper>
      <SignBox>
        <SignTitle>Sign Up</SignTitle>
        <SocialButton text={"Continue with Google"}>
          <GoogleLogo />
        </SocialButton>
        <SocialButton text="Continue with Facebook">
          <FaceBookLogo />
        </SocialButton>
        <Line />
        <SignForm />
        <FormAskingText text={'Already signed up?'} href={"/signup"} linkText={'Go to sign in'} />
      </SignBox>
    </SignBoxWrapper>
  );
};

export default Login;
