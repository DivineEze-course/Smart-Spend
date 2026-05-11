import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar= ({ setShowReminder })=>{
    const navigate= useNavigate();
    const [showNavbar,setShowNavbar] = useState(true);
   
    return(
        <nav className="sidebar-nav w-80 h-screen bg-[url('/white-red-black.jpg')] bg-cover bg-bottom-right p-4 text-white hidden md:block " >
            <div className="flex items-center ms-2 text-3xl font-bold gap-2 mb-10">
               <i class="bi bi-phone-fill"></i>
                <h2 className="mt-2 font-bold text-white  text-2xl "><span className="">Smart</span>Spend</h2>
            </div>
            <div className="flex flex-col gap-100  text-xl font-bold mt-8 ms-3">
                <div className="flex flex-col gap-5 cursor-pointer">
                <div onClick={()=>navigate("/dashboard")} className="cursor-pointer"><i className="bi bi-house-fill"></i> Dashboard</div>
                <div onClick={()=>navigate("/goals-overview")} className="cursor-pointer"><i className="bi bi-bullseye"></i> Goals</div>
                <div onClick={() => {setShowReminder(true)}} className="cursor-pointer"><i className="bi bi-bell-fill"></i> Reminders</div>
                </div>

                <div>
                <div onClick={()=>navigate("/")}className="logout-btn text-2xl "><i className="bi bi-box-arrow-left "></i> Logout</div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;