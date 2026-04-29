import { useState } from "react";

export default function Login(){
   const [userName,setUserName] = useState("");
   const [userPassword,setUserPassword] = useState("");
   const [agreed, setAgreed] = useState(false);
   const [error, setError] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
   }
    return (
        <div className="flex flex-col p-8 justify-center align-center mt-6">
            <h2 className="text-center text-purple-900">Welcome Back </h2>
            <h3 className="text-center">Login to continue</h3>
            <div className="form flex flex-col gap-3 mt-6">
                <span className="flex flex-col gap-2">
                <label className="text-purple-900">UserName</label>
                <input value = {userName} type="email" className="flex border-xl required border-1 w-full rounded-sm p-1 hover:border-purple-900" placeholder="JohnDoe12"/>
                </span>
                <span className="flex flex-col gap-2">
                <label className="text-purple-900">Password</label>
                <input value ={userPassword} type="text" className="flex  required border-1 w-full rounded-sm p-1 focus:border-purple-900" placeholder="SmartSpend123"/>
                </span>
            </div>
            <a href=""><p className="text-end mt-3 text-purple-900">Forgot password?</p></a>
            <span className="flex gap-3 mt-7">
            <input type="radio" /><p>I've read and agreed to User Agreement and Privacy Policy</p></span>
            <button className="sign-in-btn border-black  bg-purple-950 text-white rounded-sm p-2 mt-5">Log In</button>
            <p className="mt-6 text-center">Dont have an Account? <span className="text-purple-900">Sign up Now</span></p>
        </div>)
        ;
    
}

 
   