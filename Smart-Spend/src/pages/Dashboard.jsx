import React, {useState, useEffect} from "react";
import Navbar from '../components/Navbar';
import Goalcard from "../components/Goalcard";
function Dashboard(){
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
                id: 2, name: "New Gadget",saved: 280000, target:420000
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
    <div style={{display:'flex'}}>
        <Navbar/>
        <div style={{flex:1,padding:'40px'}}>
            <header>
            <h1>Hello, {userName}</h1>
            <div>
                <p>Current Balance</p>
                <p>₦{currentBalance}</p>
            </div>
        </header>
        <hr/>
       <div className="dashboard-grid">
         <section>
            <h3>Quick Stats</h3>
            <div>
                <p><strong>Total Goals:</strong> {goals.length}</p>
                <p><strong>Total Saved:</strong> ₦250,000</p>
                <p><strong>Next Due Date:</strong> May 10, 2026</p>
            </div>
        </section>
        <hr/>
        <section>
            <h1>Your Savings Goals</h1>
           {goals.map((goal)=>(
            <Goalcard 
            key={goal.id}
            name={goal.name}
            saved={goal.saved}
            target={goal.target}/>
           )
           )
           }
            
            <br/>
            <button type="button" onClick={()=>window.location.href="/create-goal"}>
                + Add New Goal
            </button>
        </section>
        <hr/>
       </div>
        </div>
    </div>
   );
}
export default Dashboard;