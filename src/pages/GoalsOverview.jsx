import { useEffect,useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import AddFunds from "./AddFunds";
import ReminderModal from "./Reminders";
function GoalsOverview(){
  const [showReminder, setShowReminder] =
  useState(false);
    const [goals,setGoals] = useState([]);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
      const [selectedGoal, setSelectedGoal] = useState(null);

useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("userGoals")) || [];
    setGoals(storedGoals);
}, []);
const totalGoalsCount= goals.length;
const getUpcomingGoal = () => {
        const today = new Date();
        const goalsWithDates = goals.filter(goal => goal.startDate)
        .map(goal => {
            const baseDate = Array.isArray(goal.startDate) ? goal.startDate[0] : goal.startDate;
            let dueDate = new Date(baseDate);

            while (dueDate < today) {
                dueDate.setMonth(dueDate.getMonth() + 1);
            }
            return { ...goal, nextDueDate: dueDate };
        });

        goalsWithDates.sort((a, b) => a.nextDueDate - b.nextDueDate);
        return goalsWithDates[0];
    };

    const upcomingGoal = getUpcomingGoal();
     const totalSaved = goals.reduce(
        (acc, goal) => acc + goal.saved,
        0
    );

    const deadlineDisplay = upcomingGoal 
        ? upcomingGoal.nextDueDate.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          }).replace(',', '') 
        : "N/A";
const avgCompletion = goals.length > 0 
        ? Math.round((goals.reduce((acc, goal) => acc + (goal.saved / goal.target), 0) / goals.length) * 100) 
        : 0;

    return (
      <div className="flex">
      <Navbar setShowReminder={setShowReminder}/>
            <div className="flex-1 p-6 bg-gray-100 w-full ">

  
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4">
    <div>
      <h1 className="text-4xl font-bold text-red-900">
        Goals Overview
      </h1>
      <p className="text-gray-500 mt-1">
        Track and manage your savings goals
      </p>
    </div>

    
  </div>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <p className="text-gray-500">Total Goals</p>
      <h2 className="text-3xl font-bold text-red-900">{totalGoalsCount}</h2>
    </div>

    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <p className="text-gray-500">Total Saved</p>
      <h2 className="text-3xl font-bold text-red-900">₦{totalSaved.toLocaleString()}</h2>
    </div>

    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <p className="text-gray-500">Nearest Deadline</p>
      <h2 className="text-xl font-semibold text-red-900">
        {deadlineDisplay}
      </h2>
    </div>

    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <p className="text-gray-500">Completion Rate</p>
      <h2 className="text-3xl font-bold text-green-600">
        {avgCompletion}%
      </h2>
    </div>

  </div>

  
 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
  {goals.map((goal) => {

    const progress = (goal.saved / goal.target) * 100;

    return (
      <div
        key={goal.id}
        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
      >

        
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-red-900">
            {goal.name}
          </h2>

          <i className="bi bi-bullseye text-2xl text-red-800"></i>
        </div>

        
        <p className="text-gray-500 mt-3">
          ₦{goal.saved} saved of ₦{goal.target}
        </p>

        
        <div className="w-full bg-red-100 h-3 rounded-full mt-4 overflow-hidden">

          <div
            className="bg-red-800 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

        
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <p>{Math.round(progress)}% completed</p>
          <p>₦{goal.monthlyAmount}</p>
        </div>

       
        <div className="mt-5 flex gap-3">

          <button className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-lg transition cursor-pointer" onClick={() => {
    setSelectedGoal(goal);
    setShowModal(true);
  }}>
            Add Funds
          </button>

          <button className="border border-red-800 hover:bg-red-50 text-red-800 px-4 py-2 rounded-lg transition cursor-pointer" onClick={()=> navigate(`/goal-details/${goal.id}`)}>
            Details
          </button>

        </div>

      </div>
    );
  })}
  {showModal && (
  <AddFunds
    goal={selectedGoal}
    onClose={() => setShowModal(false)}
    goals={goals}
    setGoals={setGoals}
  />
)}

 {showReminder && (
  <ReminderModal
    onClose={() => setShowReminder(false)}
  />
)}
</div>
    </div>  
    </div>      
    )

}
export default GoalsOverview;