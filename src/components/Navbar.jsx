import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar= ({ setShowReminder })=>{
    const navigate= useNavigate();
    const [showNavbar,setShowNavbar] = useState(true);
     const [menuOpen, setMenuOpen] = useState(false);

   
    return(
        <>
            
            <div className="md:hidden  z-50">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white bg-[#7a1c2e] p-2 text-2xl  rounded-r-md "
                >
                    <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
                </button>
            </div>

            
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

           
            <nav
                className={`
                fixed top-0 left-0 z-50
                w-72 h-screen
                bg-[url('/white-red-black.jpg')]
                bg-cover bg-bottom-right
                p-4 text-white
                transform transition-transform duration-300

                ${menuOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0 md:static md:block
            `}
            >
               
                <div className="flex items-center ms-2 text-3xl font-bold gap-2 mb-10">
                    <i className="bi bi-phone-fill"></i>

                    <h2 className="mt-2 font-bold text-white text-2xl">
                        SmartSpend
                    </h2>
                </div>

                
                <div className="flex flex-col justify-between h-[85%] text-xl font-bold mt-8 ms-3">
                    <div className="flex flex-col gap-5 cursor-pointer">
                        <div
                            onClick={() => {
                                navigate("/dashboard");
                                setMenuOpen(false);
                            }}
                        >
                            <i className="bi bi-house-fill"></i> Dashboard
                        </div>

                        <div
                            onClick={() => {
                                navigate("/goals-overview");
                                setMenuOpen(false);
                            }}
                        >
                            <i className="bi bi-bullseye"></i> Goals
                        </div>

                        <div
                            onClick={() => {
                                setShowReminder(true);
                                setMenuOpen(false);
                            }}
                        >
                            <i className="bi bi-bell-fill"></i> Reminders
                        </div>
                    </div>

                    <div>
                        <div
                            onClick={() => {
                                navigate("/");
                                setMenuOpen(false);
                            }}
                            className="logout-btn text-2xl cursor-pointer"
                        >
                            <i className="bi bi-box-arrow-left"></i> Logout
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;