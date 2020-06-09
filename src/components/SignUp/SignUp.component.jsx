import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import "./Signup.styles.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import authAxios from "./../../util/util";
import { AuthContext } from "../../contexts/AuthContext";
const SignUp = () => {
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const { register, handleSubmit } = useForm();
  const authContext = useContext(AuthContext);
  const onSubmit = async (data) => {
    const res = await authAxios.post("signup", data);
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
      <h2>Sign Up to create and Account!</h2>
      <Link to="/">Login Instead?</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input name="email" type="text" ref={register} />
        <label>FirstName</label>
        <input name="firstName" type="text" ref={register} />
        <label>LastName</label>
        <input name="lastName" type="text" ref={register} />
        <label>Password</label>
        <input name="password" type="password" ref={register} />
        <label>Confirm Password</label>
        <input name="confirmpassword" type="password" ref={register} />
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
