import React, { useState } from 'react';
import "./Login.styles.css";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import authAxios from "./../../util/util";
const Login = () => {

    const [user,setUser]=useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = (data)=>{
        console.log(data);
    }

    return (<div>
       
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login to access the application</h2>
        <label>Email</label>
        <input name="email" type="text" ref={register}/>
        <label>Password</label>
        <input name="password" type="password" ref={register}/>
        <button>Login</button>
        </form>
        <Link to="/">Forgot Password?</Link>
    </div>)
}

export default Login;