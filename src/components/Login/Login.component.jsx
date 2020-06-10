import React, { useState, useContext } from "react";
import "./Login.styles.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import authAxios from "./../../util/util";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const { register, handleSubmit } = useForm();
  const authContext = useContext(AuthContext);

  const onSubmit = async (data) => {
    const res = await authAxios.post("login", data);
    console.log(res);
    const token = res.headers.token;
    const userInfo = res.data;
    authContext.setAuthState({
      token,
      userInfo,
      expiresAt: null,
    });
    setRedirectOnLogin(true);
  };

  if (redirectOnLogin) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login to access the application</h2>
        <label>Email</label>
        <input name="email" type="text" ref={register} />
        <label>Password</label>
        <input name="password" type="password" ref={register} />
        <button>Login</button>
      </form>
      <Link to="/">Forgot Password?</Link>
    </div>
  );
};

export default Login;
