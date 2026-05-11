import React,{useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
function CreateGoal(){
    const [goalName,setGoalName]=useState("");
    const[targetAmount, setTargetAmount]=useState("");
    const[monthlyContribution, setMonthlyContribution]=useState("");
    const[startDate, setStartDate]= useState("");
    const handleSave= (e)=>{
        e.preventDefault();
        const calculatedDuration= Math.ceil(Number(targetAmount)/Number(monthlyContribution));
        const newGoal= {
            id: Date.now(),
            name: goalName,
            saved: 0,
            target: Number(targetAmount),
            monthlyAmount: Number(monthlyContribution),
            startDate: startDate,
            duration: calculatedDuration,
            tracker: []
        };
        const existing =JSON.parse(localStorage.getItem("userGoals"))||[];
        localStorage.setItem("userGoals",JSON.stringify([...existing,newGoal]));
        window.location.href="/dashboard";
    };
    return (
        
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">

  <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 relative animate-fadeIn">

    <button
      className="absolute top-4 right-4 text-gray-400 hover:text-red-800 text-xl transition"
   onClick={()=>window.location.href="/dashboard"} >
      <i className="bi bi-x-lg"></i>
    </button>

    
    <div className="mb-6">
<div className="flex items-center gap-2">
      <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
        <i className="bi bi-bullseye text-2xl text-red-800"></i>
      </div>

      <h2 className="text-3xl font-bold text-red-900">
        Create Goal
      </h2>
      </div>

      <p className="text-gray-500 mt-2">
        Set up a savings goal and start tracking your progress.
      </p>

    </div>

    
    <form onSubmit={handleSave} className="flex flex-col gap-5">

        
      <div>
        <label className="text-sm font-semibold text-gray-700 block mb-2">
          Goal Name
        </label>

        <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 focus-within:border-red-700 transition">

          <i className="bi bi-pencil text-gray-400 mr-3"></i>

          <input
            type="text"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            placeholder="e.g Vacation Fund"
            className="w-full outline-none bg-transparent"
            required
          />

        </div>
      </div>

    
      <div>
        <label className="text-sm font-semibold text-gray-700 block mb-2">
          Target Amount
        </label>

        <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 focus-within:border-red-700 transition">

          <span className="text-gray-500 mr-2">₦</span>

          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            placeholder="100000"
            className="w-full outline-none bg-transparent"
            required
          />

        </div>
      </div>

      
      <div>
        <label className="text-sm font-semibold text-gray-700 block mb-2">
          Monthly Contribution
        </label>

        <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 focus-within:border-red-700 transition">

          <span className="text-gray-500 mr-2">₦</span>

          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            placeholder="20000"
            className="w-full outline-none bg-transparent"
          />

        </div>
      </div>
        <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                        Start Saving Date
                        </label>
                        <div className="flex items-centre border border-gray-200 rounded-xl px-4 py-3 focus-within: border-red-700 transition">
                            <i className="bi bi-calendar-event text-gray-400 mr-3"></i>
                    <input type="date" value={startDate}onChange={(e)=> setStartDate(e.target.value)}
                        className="w-full outline-none bg-transparent text-gray-600" required
                    />
                    </div>
                </div>
      
      <div className="flex gap-3 mt-4">

        <button
          type="submit"
          className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition"
        >
          Create Goal
        </button>

      </div>

    </form>

  </div>

</div>

    );
    
    
}
export default CreateGoal;