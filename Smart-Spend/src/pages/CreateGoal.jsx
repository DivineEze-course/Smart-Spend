import React,{useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
function CreateGoal(){
    const [goalName,setGoalName]=useState("");
    const[targetAmount, setTargetAmount]=useState("");
    const handleSave= (e)=>{
        e.preventDefault();
        const newGoal= {
            id: Date.now(),
            name: goalName,
            saved: 0,
            target: Number(targetAmount)
        };
        const existing =JSON.parse(localStorage.getItem("userGoals"))||[];
        localStorage.setItem("userGoals",JSON.stringify([...existing,newGoal]));
        window.location.href="/dashboard";
    };
    return (
        <main>
            <h2> Create a New Savings Goal </h2>
            <p>Fill in the details to create your goal</p>
            <form onSubmit={handleSave}>
                <div>
                    <label>Goal Name</label>
                    <input type="text" value={goalName} onChange={(e)=>setGoalName(e.target.value)} required />
                </div>
                <div>
                    <label>Target Amount</label>
                    <input type="number" value={targetAmount} onChange={(e)=>setTargetAmount(e.target.value)} required />
                </div>
                <button type="submit">Create Goal</button>
            </form>
        </main>
    );
}
export default CreateGoal;