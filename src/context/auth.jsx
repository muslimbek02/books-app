import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { getItem } from "../utils/useStorage";

const AuthContext = createContext();

const Provider = ({ children }) => {
  const [auth, setAuth] = useState(getItem("token"));

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
Provider.propTypes = {
  children: PropTypes.node,
};
export { AuthContext, Provider };
