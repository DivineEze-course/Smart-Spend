import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
   const [userName,setUserName] = useState("");
   const [userPassword,setUserPassword] = useState("");
   const [agreed, setAgreed] = useState(false);
   const [error, setError] = useState("");

  const navigate = useNavigate();

   const handleSubmit = (e) => {
    
    setError("");

    if(!userName || !userPassword ){
        setError("Missing Field");
    }
    if(userPassword.length < 6){
        setError("Increase Password strength")
    }
    

      setTimeout(() => {
      if (userName == "Martha12" && userPassword == "123456") {
        
        localStorage.setItem(
          "user",
          JSON.stringify({userName})
        );

        // 🔐 Store token
        localStorage.setItem("token", "fake-token");

       
        navigate("/dashboard");
      } else {
        setError("Invalid credentials");
      }

      setLoading(false);
    }, 1000);
   }
    return (
        <div className="flex flex-col p-8 justify-center align-center mt-6 shadow-lg rounded-lg md:w-150">
            <h2 className="text-center text-purple-900 text-xl">Welcome Back </h2>
            <h3 className="text-center text-sm">Login to continue</h3>

            <div className="form flex flex-col gap-3 mt-6">
                <span className="flex flex-col gap-1">
                <label className="text-purple-900">UserName</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="email" className="flex focus:border-purple-900 required border-gray-500 border-1 w-full rounded-sm p-1 " placeholder="JohnDoe12"/>
                </span>
                <span className="flex flex-col gap-1">
                <label className="text-purple-900">Password</label>
                <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="text" className="flex focus:border-purple-900 required border-gray-500 border-1 w-full rounded-sm p-1" placeholder="SmartSpend123"/>
                </span>
                {error && (
        <p className="text-red-500">{error}</p>
      )}
            </div>
            <span className="flex align-center justify-between mt-2">
                <span className="flex gap-2">
            <input type="checkbox"className="accent-purple-900" /><p className="text-md ">Remember me</p></span>
            <a href=""><p className="text-purple-900 cursor-pointer">Forgot password?</p></a>
            
            </span>
            <button className="sign-in-btn border-black  bg-purple-950 text-white rounded-sm p-2 mt-5" onClick={handleSubmit}>Log In</button>
            <p className="mt-6 text-center">Dont have an Account? <span className="text-purple-900 ms-1">Sign up</span></p>
        </div>)
        ;
    
}

 
   