import React, { useState } from "react";

export default function AddFunds({ goal, onClose, goals, setGoals }) {

  const [amount, setAmount] = useState(goal.monthlyAmount);
  const handleConfirm = (e) => {
     e.preventDefault();

  const updatedGoal = {
    ...goal,
    saved: goal.saved + Number(amount),
    tracker: [...(goal.tracker || []), "positive"]
  };

  const updatedGoals = goals.map((g) =>
    g.id === goal.id ? updatedGoal : g
  );


  setGoals(updatedGoals);

 
  localStorage.setItem(
    "userGoals",
    JSON.stringify(updatedGoals)
  );

  onClose();
  };


  return (

    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >

      {/* Modal */}
      <div
        className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >

        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-red"
        >
          <i className="bi bi-x text-3xl"></i>
        </button>

        
        <h2 className="text-3xl font-bold text-red-900">
          Add Funds
        </h2>

        <p className="text-gray-500 mt-2">
          Send money to your savings goal
        </p>

      
        <div className="bg-red-50 rounded-2xl p-4 mt-6">

          <p className="text-sm text-gray-500">
            Goal
          </p>

          <h3 className="text-xl font-semibold text-red-900">
            {goal.name}
          </h3>

        </div>

        
        <div className="mt-6">

          <label className="block mb-2 font-semibold">
            Contribution Amount
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-red-800"
          />

        </div>

        
        <div className="mt-6">

          <p className="font-semibold mb-3">
            Payment Method
          </p>

          <div className="grid grid-cols-3 gap-3">

            <button className="border rounded-xl p-3 hover:border-red-800">
              Bank
            </button>

            <button className="border rounded-xl p-3 hover:border-red-800">
              Card
            </button>

            <button className="border rounded-xl p-3 hover:border-red-800">
              USSD
            </button>

          </div>

        </div>

       
        <button
          className="w-full mt-8 bg-red-800 hover:bg-red-900 text-white py-4 rounded-xl font-semibold transition"
          onClick={handleConfirm}
        >
          Confirm & Send
        </button>

      </div>

    </div>
  );
}