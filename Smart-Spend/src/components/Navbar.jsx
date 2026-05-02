import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar= ()=>{
    const navigate= useNavigate();
    return(
        <nav className="sidebar-nav border-e border-gray-200 rounded-e-lg w-1/6 h-screen bg-blue-900/80 text-white p-3">
            <div className="flex justify-around gap-8 pb-5 border-b border-blue-200/20">
                <h2 className="text-xl flex gap-3 "><i className="bi bi-piggy-bank text-2xl"></i> Smart Spend </h2>
                <i class="bi bi-list text-2xl"></i>
            </div>
            <div className="flex flex-col gap-3 mt-6">
                <div className="flex gap-4 text-lg p-2" onClick={()=>navigate("/dashboard")}><i class="bi bi-house"></i> Dashboard</div>
                <div className="flex gap-4 text-lg p-2" onClick={()=>navigate("/goals-overview")}><i class="bi bi-check-circle"></i> Goals</div>
                <div className="flex gap-4 text-lg p-2"><i class="bi bi-list-check"></i> Transactions</div>
                <div className="flex gap-4 text-lg p-2"> <i class="bi bi-bell"></i>Reminders</div>
                <div className="flex gap-4 text-lg p-2"> <i class="bi bi-person"></i>Profile</div>
                <div className="flex gap-4 text-lg border-b border-blue-200/20 p-2"> <i class="bi bi-gear"></i>Settings</div>
                
                <div onClick={()=>navigate("/")}className="logout-btn flex gap-4 text-lg p-2"><i class="bi bi-box-arrow-left"></i>Logout</div>
            </div>
        </nav>
    );
};
export default Navbar;