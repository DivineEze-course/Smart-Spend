import { useEffect,useState } from "react";


function GoalsOverview(){
    const [goals,setGoals] = useState([]);

useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("userGoals")) || "[]";
    setGoals(storedGoals);
}, []);
    return (
        <div>
            <h1>Goals Overview</h1>
            {goals.map((goal) => {
                const progress = (goal.saved / goal.target) * 100;

                return (
                    <div key={goal.id}>
                        <h2>{goal.name}</h2>
                        <p>{goal.saved} / {goal.target}</p>
                        <div className="progress-bar h-10 bg-gray-200 rounded-lg">
                            <div className="bg-purple-800 h-full rounded-lg"style={{width: `${progress}%`}}></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}
export default GoalsOverview;