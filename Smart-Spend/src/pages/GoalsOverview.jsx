import { useEffect,useState } from "react";


function GoalsOverview(){
    const [goals,setGoals] = useState([]);

useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("userGoals")) || "[]";
    setGoals(storedGoals);
}, []);
    return (
            <div className=" w-full md:w-3/6 mx-auto pb-6 rounded-lg overflow-hidden ">

  <h1 className="text-center font-semibold text-lg py-3  ">
    Goals Overview
  </h1>

  <div className="hidden md:grid grid-cols-4 text-sm  border-gray-200 border rounded-lg">
    
    <div className="p-2 border-b border-r border-gray-200 font-medium">Goal Name</div>
    <div className="p-2 border-b border-r border-gray-200 font-medium">Target</div>
    <div className="p-2 border-b border-r border-gray-200 font-medium">Saved</div>
    <div className="p-2 border-b border-gray-200 font-medium">Progress</div>

    {goals.map((goal) => {
      const progress = (goal.saved / goal.target) * 100;

      return (
        <>
          <div className="p-2 border-b border-r border-gray-200">{goal.name}</div>
          <div className="p-2 border-b border-r border-gray-200">₦{goal.target}</div>
          <div className="p-2 border-b border-r border-gray-200">₦{goal.saved}</div>

          <div className="p-2 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="h-3 bg-gray-200 rounded w-full">
                <div
                  className="bg-blue-900/60 h-full rounded"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs">{progress.toFixed(0)}%</span>
            </div>
          </div>
        </>
      );
    })}
  </div>

  <div className="md:hidden flex flex-col gap-4 ps-6 pe-6   ">
    {goals.map((goal) => {
      const progress = (goal.saved / goal.target) * 100;

      return (
        <div key={goal.id} className="p-4 space-y-2 rounded-lg shadow-lg mt-3 border-t border-gray-100">
            <p className="flex justify-between"> <h2 className="font-medium text-blue-900">{goal.name}</h2> <p className="p-2 bg-green-600 rounded-lg text-white text-xs">Manual</p></p>
          

          <div className="text-sm text-gray-600">
            
            <p><span className="font-medium">Target:</span> ₦{goal.target}</p>
            
          </div>
          <p className="flex justify-between text-sm"><p>Progress</p> <p>₦{goal.saved} / <span className="font-heavy">₦{goal.target}</span></p></p>
          <div className="flex items-center gap-2">
            <div className="h-3 bg-gray-200 rounded w-full">
              <div
                className="bg-blue-900/60 h-full rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs">{progress.toFixed(0)}%</span>
          </div>
        </div>
      );
    })}
  </div>
</div>
            
    )

}
export default GoalsOverview;