import React, { useState, createContext } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    userInfo: {},
    expiresAt: null,
  });

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
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
