import { useEffect,useState } from "react";


function GoalsOverview(){
    const [goals,setGoals] = useState([]);

useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("userGoals")) || "[]";
    setGoals(storedGoals);
}, []);
    return (
            <div className=" w-full md:w-4/6 mx-auto pb-6 rounded-lg overflow-hidden font-roboto mt-7 ">

  <h1 className="text-center font-semibold text-purple py-3 text-4xl  ">
    Goals Overview
  </h1>

  <div className="hidden md:grid grid-cols-4 text-sm  border-purple rounded-lg mt-7 shadow-md/10 inset-shadow-md">
    
    <div className="text-center p-2 border-b border-r border-gray-200 rounded-tl-lg font-medium text-lg text-white bg-purple-900/80">Goal Name</div>
    <div className="text-center p-2 border-b border-r border-gray-200 font-bold text-lg text-purple bg-gray-200 ">Target</div>
    <div className="text-center p-2 border-b border-r border-gray-200 font-medium text-lg text-white bg-purple-900/80">Saved</div>
    <div className="text-center p-2 border-b border-gray-200 rounded-tr-lg font-bold text-lg text-purple bg-gray-200">Progress</div>

    {goals.map((goal) => {
      const progress = (goal.saved / goal.target) * 100;

      return (
        <>
          <div className="p-2 border-b border-r border-purple-200  text-purple ps-4">{goal.name}</div>
          <div className="p-2 border-b border-r border-purple-200 text-purple text-center">₦{goal.target}</div>
          <div className="p-2 border-b border-r border-purple-200 text-purple text-center">₦{goal.saved}</div>

          <div className="p-2 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="h-3 bg-purple-200 rounded w-full">
                <div
                  className="bg-purple-900/90 h-full rounded"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-700">{progress.toFixed(0)}%</span>
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
            <p className="flex justify-between"> <h2 className="font-bold text-purple-900 text-lg ">{goal.name}</h2> <p className="p-2 bg-slate rounded-lg text-white text-xs">Manual</p></p>
          

          <div className="text-sm text-gray-600">
            
            <p className="text-purple-950"><span className="font-medium ">Target:</span> ₦{goal.target}</p>
            
          </div>
          <p className="flex justify-between text-sm"><p>Progress</p> <p className="text-purple-900/80">₦{goal.saved} / <span className="font-heavy text-purple-950">₦{goal.target}</span></p></p>
          <div className="flex items-center gap-2">
            <div className="h-3 bg-purple-200/60 rounded w-full">
              <div
                className="bg-purple h-full rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs  text-gray-700">{progress.toFixed(0)}%</span>
          </div>
        </div>
      );
    })}
  </div>
</div>
            
    )

}
export default GoalsOverview;