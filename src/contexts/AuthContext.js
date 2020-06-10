import React, { useState, createContext } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const userInfo = localStorage.getItem("userInfo");
  const expiresAt = localStorage.getItem("expiresAt");
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

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => {
          setAuthInfo(authInfo);
        },
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthProvider, AuthContext };
