import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import {useNavigate} from "react-router-dom"
import InputLogin from "../SignInput";

const Main = () => {
  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth){
      navigate('/login');
      localStorage.setItem('token', JSON.stringify('txt'));
    }
  }, []);
  return (
    <div>Main</div>
  )
}

export default Main