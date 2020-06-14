import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const userInfo = localStorage.getItem("userInfo");
  const expiresAt = localStorage.getItem("expiresAt");
  const history = useHistory();

  const [authState, setAuthState] = useState({
    token,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
    expiresAt,
  });

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("expiresAt", expiresAt);
    setAuthState({
      token,
      userInfo,
      expiresAt,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("expiresAt");
    setAuthState({
      token: null,
      userInfo: {},
      expiresAt: null,
    });
    console.log("logout functionality");
    history.push("/login");
  };

  const isAuthenticated = () => {
    if (!authState.token) {
      return false;
    }
    return true;
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => {
          setAuthInfo(authInfo);
        },
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthProvider, AuthContext };
