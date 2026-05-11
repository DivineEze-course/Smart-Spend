import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

    useEffect(() => {
    const timings = [
      setTimeout(() => setStep(2), 1000),
      setTimeout(() => setStep(3), 2200),
      setTimeout(() => setStep(4), 3400),
      setTimeout(() => setStep(5), 4600),
    ];

    return () => timings.forEach(clearTimeout);
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!userName || !userPassword) {
      setError("Missing Field");
      return;
    }

    if (userPassword.length < 6) {
      setError("Increase Password strength");
      return;
    }

    setTimeout(() => {
      
        localStorage.setItem("user", JSON.stringify({ userName }));
        localStorage.setItem("token", "fake-token");

        navigate("/dashboard");
      } 
    , 1000);
  };

  return (
    <div className="min-h-screen flex xl:bg-[url('/black-red-bg.jpg')] bg-cover">

  <div className=" hidden md:block w-2/3 " >
    
<div className="credit-card float-card bg-red w-85 text-white p-7 pb-4 pt-4 rounded-xl mt-50 mx-80 shadow-lg">
  <div className="flex justify-between items-center flex-row-reverse">
  <p className="text-end text-gray-100/50">SmartSpend</p>
  <i className="bi bi-credit-card-fill text-3xl"></i>
  </div>
  <p className="text-xs mt-2  text-gray-100/50">Total Saved</p>
  <p className="text-4xl font-bold">₦1,200,000</p>
  <div className="flex justify-between items-center mt-4">
    <div >
      <p className="text-xs text-gray-100/50">Active goal</p>
      <p className="text-md font-bold text-gray-100/90">Vacation Funds</p>
    </div>
    <div>
      <p className="text-lg font-bold text-gray-100/50">70%</p>
      <p className="text-md text-gray-100/50">acheieved</p>
    </div>
  </div>
</div>
<div className="text-white w-120 p-10 mt-25 ">
  <TypeAnimation
        sequence={[
          "Every Naira Has a Purpose",
          1500,
          "",
          500,
          "Track your goals, build saving habits,— one step at a time.",
        ]}
        speed={50}
        className="text-3xl font-bold mt-9"
        cursor={true}
      />

      
      <div className="flex items-center gap-4 mt-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500
              
              ${
                item < step
                  ? "bg-red-700 text-white scale-110"
                  : item === step
                  ? "border-2 border-red-500 text-red-500 animate-pulse"
                  : "bg-gray-700 text-gray-400"
              }
            `}
          >
            {item < step ? "✓" : item}
          </div>
        ))}
      </div>
  </div>
</div>

  
  <div className="w-full flex flex-col items-center gap-4 lg:gap-9 bg-white  p-7 l shadow-lg lg:w-1/3"> 
  <div className="flex justify-center items-center mt-10">
    <img src="./logo-no-bg.png" className="w-19"/> <p className="text-4xl font-bold -ms-3">Smart<span className="text-red-900">Spend</span></p></div>
    
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-8 lg:w-96 w-90  shadow-lg rounded-xl"
    >
      <div className="flex justify-center">
      </div>
      <h2 className="text-center text-2xl font-bold mt-4">Welcome Back, <span className="text-red-900 ">Saver👋</span></h2>
      <h3 className="text-center text-sm text-gray-500 mt-2 font-medium">Login to check your goals and savings</h3>

      <div className="flex flex-col gap-3 mt-6">
        <span className="flex flex-col gap-1">
          <label className="text-red-900">Username</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="border-gray-500 border w-full rounded-sm p-2"
           
          />
        </span>

        <span className="flex flex-col gap-1">
          <label className="text-red-900">Password</label>
          <input
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            type="password"
            className="border-gray-500 border w-full rounded-sm p-2"
           
          />
        </span>

        {error && <p className="text-red-500">{error}</p>}
      </div>

      <div className="flex justify-between mt-2">
        <label className="flex gap-2 items-center">
          <input type="checkbox" className="accent-red-900" />
          <span>Remember me</span>
        </label>

        <span className="text-red-900 cursor-pointer text-sm">
          Forgot password?
        </span>
      </div>

      <button
        type="submit"
        className="bg-black text-white rounded-sm p-2 mt-5 hover:scale-105 hover:bg-red-900 transition duration-300 "
      >
        Log In
      </button>

      <p className="mt-6 text-center">
        Don’t have an Account?
        <span className="text-red-900 ms-1 cursor-pointer">
          Sign up
        </span>
      </p>
    </form>
    </div>
  </div>
  );
}
            


   