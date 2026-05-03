import React from "react";
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateGoal from "./pages/CreateGoal";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import GoalDetails from "./pages/GoalDetails";
import GoalsOverview from "./pages/GoalsOverview";
import SignUp from "./pages/SignUp";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/create-goal" element={<CreateGoal/>}/>
        <Route path="/goal-details" element={<GoalDetails/>}/>
        <Route path="/goals-overview" element={<GoalsOverview/>}/>
      </Routes>
    </Router>
  );
}
export default App;