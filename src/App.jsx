import React from "react";
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateGoal from "./pages/CreateGoal";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import GoalDetails from "./pages/GoalDetails";
import GoalsOverview from "./pages/GoalsOverview";
import Reminders from "./pages/Reminders";


function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <div className=""><Login/></div>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/create-goal" element={<div className="flex justify-center items-center mt-7"><CreateGoal/></div>}/>
        <Route path="/goal-details/:id" element={<GoalDetails/>}/>
        <Route path="/goals-overview" element={<GoalsOverview/>}/>
        <Route path="/reminders" element={<Reminders/>}/>
      </Routes>
    </Router>
  );
}
export default App;