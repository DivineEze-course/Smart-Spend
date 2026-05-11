import React, {useState, useEffect} from "react";
import Navbar from '../components/Navbar';
import Goalcard from "../components/Goalcard";  
import { useNavigate } from "react-router-dom";
import ReminderModal from "./Reminders";

export default function Dashboard(){
const [showReminder, setShowReminder] = useState(false);
const [selectedGoal, setSelectedGoal] =
  useState(null);
   const navigate = useNavigate();
   const user = JSON.parse(localStorage.getItem("user")) || {};
   const userName= user.userName;
   const currentBalance="520,000";
   const [goals, setGoals]=useState([]);
   const [showModal,setShowModal] = useState(false);
   useEffect(()=> {
    const savedGoals= JSON.parse(localStorage.getItem("userGoals"))||[];
    if(savedGoals.length===0){
        const starterGoals= [ 
            {
                id: 1,
                name: "Vacation Funds",
                saved: 80000,
                target:120000,
                monthlyAmount:20000,
                startDate:["2026-03-10"],
                tracker: ["paid", "paid","paid","due","neutral","neutral"]
                
            },
            {
                id: 2,
                 name: "New Gadget",
                 saved: 280000, 
                 target:420000,
                 monthlyAmount:50000,
                 startDate:["2026-01-24"],
                 tracker: ["paid","missed","paid","paid","due","neutral","neutral","neutral"]
            }
        ];
        setGoals(starterGoals);
        localStorage.setItem("userGoals", JSON.stringify(starterGoals));
    }else{
        setGoals(savedGoals);
    }
    
   },[]

);
   const handleDelete= (id)=>{
    if (window.confirm("Are you sure you want to delete this goal?")){
        const updatedGoals=
        goals.filter((goal)=>goal.id !==id);
        setGoals(updatedGoals);
        localStorage.setItem("userGoals", JSON.stringify(updatedGoals));
    }
   };
   const getUpcomingGoal= ()=> {
    const today= new Date();
    const goalsWithDates= goals.filter(goal => goal.startDate)
    .map(
        goal=> {
            let dueDate = new Date(goal.startDate);
            while (dueDate < today){
                dueDate.setMonth(dueDate.getMonth()+ 1);
            }
            return{
                ...goal,
                nextDueDate: dueDate
            };
        }
    );
    goalsWithDates.sort(
        (a,b)=> a.nextDueDate - b.nextDueDate
    );
    return goalsWithDates[0];
   };
   const upcomingGoal= getUpcomingGoal();
   const daysLeft= upcomingGoal
   ? Math.ceil(
    (upcomingGoal.nextDueDate - new Date())/
    (1000* 60 * 60 * 24)
   )
   :null ;
   
   return(
    <div className="flex flex-col md:flex-row">
        <Navbar setShowReminder={setShowReminder}/>
         <div className="flex-1 p-4 sm:p-8 bg-gray-100/30 bg-[url('/black-red-2-copy.jpg')] bg-cover">
        <div className=" p-4  rounded-lg ">
            <h1 className="text-4xl font-semibold text-red">Hello, {userName}👋</h1>
            <p className="text-sm text-gray-600">Heres what's happening in your savings today.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="flex gap-6 bg-white p-4 justify-center items-center rounded-lg shadow-lg  text-red"    >
                    <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">Current Balance</p>
                <p className="text-3xl font-semibold">₦{currentBalance}</p>
                <p className="hidden md:block text-xs text-green-800">12% from last month</p>
                </div>
                <i className="bi bi-wallet2 text-5xl"></i>
                </div>
                

                <div className="flex gap-6 bg-white p-4 justify-center items-center rounded-lg shadow-lg  text-red">
                    <div className="flex flex-col gap-1">
                    <p className="text-sm">Total Goals:</p> 
                    <p className="text-4xl font-semibold">{goals.length}</p>
                    <p className="text-xs">View all goals</p>
                    </div>
                    <i className="bi bi-bullseye text-5xl"></i>
                    </div>
                <div className="flex gap-6 bg-white p-4 justify-center items-center rounded-lg shadow-lg  text-red">
                    <div className="flex flex-col gap-1">
                    <p className="text-sm">Total Saved:</p> 
                    <p className="text-3xl font-semibold">₦250,000</p>
                    <p className="text-xs">In your bank</p>
                    </div>
                    <i className="bi bi-bank text-5xl"></i>
                    </div>
                <div className="flex gap-6 bg-red p-4 justify-center items-center rounded-lg shadow-lg text-white">
              <div className="flex flex-col gap-1">
                    <p className="text-sm">Next Due Date:</p>
                    <p className="text-xl font-semibold">{upcomingGoal?
                upcomingGoal.nextDueDate.toDateString()
            : "No due Dates"}  </p>
                    <p className="text-xs">{upcomingGoal
            ? `${upcomingGoal.name} •Due in ${daysLeft} days`
            : "No upcoming goals" }</p>
                    </div>
                    <i className="bi bi-calendar-fill text-white text-4xl"></i>
                     </div>
       </div>
       </div>
        <div className="mt-12">
            <h1 className="text-2xl font-semibold text-red">Your Goals</h1>
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {goals.map((goal)=>(
            <Goalcard 
            id={goal.id}
            key={goal.id}
            name={goal.name}
            saved={goal.saved}
            target={goal.target}
            onDelete={()=>handleDelete(goal.id)}/>
            
           )
           )
           }
           </div>
           
            
            <br/>
            <button className="bg-red text-white p-4 rounded-lg mt-4 hover:bg-red-800 transition duration-300 cursor-pointer" type="button" onClick={()=>window.location.href="/create-goal"}>
                + Add New Goal
            </button>
            
        </div>
        </div>
        {showReminder && (
  <ReminderModal
    onClose={() => setShowReminder(false)}
  />
)}
       </div>
        
   
   );
}
