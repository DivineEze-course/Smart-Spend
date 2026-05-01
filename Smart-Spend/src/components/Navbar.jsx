import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar= ()=>{
    const navigate= useNavigate();
    return(
        <nav className="sidebar-nav" style={{
            width: '250px',
            minWidth: '250px',
            height: '100vh',
            background:'#f8f9fa',
            padding:'20px',
            borderRight:'1px solid #ddd'
        }}>
            <div>
                <h2>Smart-Save</h2>
            </div>
            <ul>
                <li onClick={()=>navigate("/dashboard")}>🏡 Dashboard</li>
                <li onClick={()=>navigate("/goals-overview")}>Goals</li>
                <li > Transactions</li>
                <li > Reminders</li>
                <hr/>
                <li onClick={()=>navigate("/")}className="logout-btn">Logout</li>
            </ul>
        </nav>
    );
};
export default Navbar;