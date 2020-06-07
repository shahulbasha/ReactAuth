import React, { useState } from 'react';
import "./Signup.styles.css";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import authAxios from "./../../util/util";
const SignUp = () => {
    const [user,setUser]=useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data)=>{
        console.log(data);
        const res= await authAxios.post("signup",data);
        console.log(res.data);
        console.log(res.headers.token);
    }

    return <div>
     <h2>Sign Up to create and Account!</h2>
        <Link to="/">Login Instead?</Link>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input name ="email" type="text" ref={register}/>
        <label>FirstName</label>
        <input name="firstName" type="text" ref={register} />
        <label>LastName</label>
        <input name="lastName" type="text" ref={register}/>
        <label>Password</label>
        <input name="password" type="password" ref={register}/>
        <label>Confirm Password</label>
        <input name="confirmpassword" type="password" ref={register}/>
        <button>SignUp</button>
        </form>
    </div>
}

export default SignUp;