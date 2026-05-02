import React, {useState, useEffect} from "react";
import Navbar from '../components/Navbar';
import Goalcard from "../components/Goalcard";  
import { useNavigate } from "react-router-dom";
export default function Dashboard(){
   const navigate = useNavigate();
   const userName= "Francesca";
   const currentBalance="520,000";
   const [goals, setGoals]=useState([]);
   useEffect(()=> {
    const savedGoals= JSON.parse(localStorage.getItem("userGoals"))||[];
    if(savedGoals.length===0){
        const starterGoals= [
            {
                id: 1, name: "Vacation Funds",saved: 80000, target:120000
            },
            {
                id: 2, name: "New Gadget",saved: 200000, target:420000
            }
        ];
        setGoals(starterGoals);
        localStorage.setItem("userGoals", JSON.stringify(starterGoals));
    }else{
        setGoals(savedGoals);
    }
    
   },[]
);
   
   return(
    <div className="flex font-roboto">
        <Navbar/>
        <div style={{flex:1,padding:'40px'}}>
            
            <h1 className="text-2xl text-blue-900/80">Hello, {userName}</h1>
            <p className="text-xs text-gray-500">Here's what's happening in your savings today</p>
        
       <div className="dashboard-grid">
        
            <div className="flex gap-4 pb-3  mt-6" >
                <div className="flex items-center p-4 pb-3 ps-2 border-1 border-gray-300 gap-4 pb-3 ps-2 rounded-lg">
                    <div>
                <p className="text-xs">Active Goals</p> 
                <p className="font-bold mt-3">{goals.length}</p>
                <a href="./goals-overview"><p className="text-xs text-blue-900"><i class="bi bi-arrow-left"></i> View all goals</p></a>
                </div>
                <i className="bi bi-bullseye bg-blue text-4xl"></i>
                </div>

                <div className="flex gap-4 pb-3 ps-2 flex items-center p-4 pb-3 ps-2 border-1 border-gray-300  rounded-lg">
                    <div className="">
                 <p className="text-xs">Total Saved</p>
                <p className="mt-3 font-bold">₦250,000</p>
                <p className="text-xs text-green-500">+12% from last month</p>
                </div>
                <i class="bi bi-wallet2 text-3xl"></i>
                 </div>
                <div className="flex gap-5 flex items-center p-4 pb-3 ps-2 border-1 border-gray-300  rounded-lg">
                <div>
                <p className="text-xs">Next Due Date</p> 
                <p className="text-md font-bold mt-3">May 10, 2026</p>
                <p className="text-xs text-yellow-500">Due in 8 days</p>
                </div>
                <i class="bi bi-calendar3 text-3xl"></i>
                </div>
            <div className="flex gap-5 flex items-center p-4 pb-3 ps-2 border-1 border-gray-300  rounded-lg">
                <div>
                <p className="text-xs">Current Balance</p>
                <p className="text-md mt-3 font-bold ">₦{currentBalance}</p>
                <p className="text-xs">In your linked bank</p>
                </div>
                <i class="bi bi-bank2 text-3xl"></i>
            </div>
           </div>
        <div>
            <div className="flex justify-between mt-5 w-3/5">
            <h1 className="text-lg ">Your Goals</h1> <button className="p-2 ps-4 pe-4 bg-blue-800/80 text-white rounded-md" type="button" onClick={()=>window.location.href="/create-goal"}>
                + Add New Goal
            </button>
            </div>
            <div className="flex gap-4">
           {goals.map((goal)=>(
            <Goalcard 
            key={goal.id}
            name={goal.name}
            saved={goal.saved}
            target={goal.target}/>
           )
           )
           }
            </div>
           
        </div>
       </div>
        </div>
    </div>
   );
}
