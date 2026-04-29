import React from "react";
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateGoal from "./pages/CreateGoal";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/create-goal" element={<CreateGoal/>}/>
      </Routes>
    </Router>
  );
}
export default App;