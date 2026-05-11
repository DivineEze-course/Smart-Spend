import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
function GoalDetails(){
    const{id}= useParams();
    const navigate = useNavigate();
    const goals= JSON.parse(localStorage.getItem("userGoals")||"[]");
    const currentGoal= goals.find(g=> String(g.id)===  String(id));
    if(!currentGoal){
        return(
            <div className="text-center p-5">
                <h2>Goal not fouund</h2>
                
            </div>
        );
    }
    const percentage= currentGoal.target > 0 ? 
    Math.round((currentGoal.saved/ currentGoal.target)*100):0;
    const amountLeft= currentGoal.target > 0?
    currentGoal.target - currentGoal.saved : 0;
    const duration= currentGoal.monthlyAmount> 0
    ? Math.ceil(currentGoal.target / currentGoal.monthlyAmount): 0;
    const months= Array.from({length:duration},(_,i)=> i+1);
    const getStatus= (index)=>{
        if(!currentGoal.tracker||
            currentGoal.tracker.length===0
        ){
            return "neutral";
        }
        return currentGoal.tracker[index]|| "neutral";
    };
   const getNextDueDate= () =>{
    if (!currentGoal.startDate) return null;
    const start= new
    Date(currentGoal.startDate);
    const today= new Date();
    let dueDate= new Date(start);
    while (dueDate < today) {
        dueDate.setMonth(dueDate.getMonth()+ 1);
    }
    return dueDate;
   };
   const nextDueDate= getNextDueDate();
   const [showPaymentModal, setShowPaymentModal]= useState(false);
    return (
        <div className="min-h-screen bg-[url('/red-bg.jpg')] bg-cover p-4">
        <div  
        className="fixed top-5 left-5 z-50 flex items-center gap-2 px-3 py-2 cursor-pointer text-black bg-white rounded-full shadow-md"
        onClick={()=> navigate("/dashboard")}>
            <i className="bi bi-arrow-left text-2xl"></i>
            
        </div>

      <div className="flex justify-center items-center mt-20">
   <div className="w-full xl:w-3/5 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6  rounded-3xl shadow-lg ">
         <div className="left-column">
 <div className="bg-white rounded-3xl p-7 border border-[#eadede] shadow-sm ">
                <div className="flex items-center justify-between mb-6 mt-1">
  
  <div>
    <p className="text-2xl font-bold text-[#4b0d16]">
      {currentGoal.name}
    </p>

    <p className="text-sm text-[#4b0d16]/70">
      Saving Progress
    </p>
  </div>

 
  <div className="relative w-24 h-24">
    
    
    <div
      className="w-full h-full rounded-full flex items-center justify-center"
      style={{
        background: `conic-gradient(
          #7a1c2e 0% ${percentage}%,
          white ${percentage}% 100%
        )`,
        padding: "8px",
      }}
    >
      
    
      <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner">
        
        <span className="text-xl font-bold text-[#7a1c2e]">
          {percentage}%
        </span>

      </div>
    </div>
  </div>
</div>
              <div className="space-y-5 text-sm mt-8">
                
                <p className="text-md text-[#4b0d16] font-bold flex items-center gap-4 rounded-lg">
                    <span className="p-2 rounded-md bg-red text-white ">Saved:</span><p className="p-2 bg-gray-200/40 rouned-md"><span className="">₦{currentGoal.saved}</span>/₦{currentGoal.target}</p>
                </p>
               
                <p className="text-md font-bold text-[#4b0d16] flex items-center gap-4  w-60">
                    <span className="p-2 bg-red text-white rounded-md ">Amount Left:</span><span className="p-2 bg-gray-200/40 rouned-md">₦{amountLeft}</span>
                </p>

                
                

                <p className="text-md font-bold text-[#4b0d16] flex items-center gap-4">
                    <span className="font-bold  p-2 bg-red text-white rounded-md">Monthly Contribution:</span>{""}
                    <span className="p-2 bg-gray-200/40 rouned-md">
                    {currentGoal.monthlyAmount
                    ? `₦${currentGoal.monthlyAmount}`
                : "Not Set"}
                </span>
                </p>

                 <p className="text-md font-bold  flex items-center gap-4 ">
                    <span className="font-semibold p-2 bg-red text-white rounded-md">Duration: </span>{""}
                    <span className="p-2 bg-gray-200/40 rouned-md">
                    {duration>0 ?`${duration}months`: "Not Set"}
                    </span>
                </p>
               
            </div>
            <div className="mt-6">
            </div>
            <div className="mt-6 space-y-2 text-xs flex gap-6 items-center">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red"></div>
                    <span>Paid</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <span>Due Soon</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <span>Neutral</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <span>Missed</span>
                    </div>
            </div>
         </div>
          </div> 
         <div className="right-column flex flex-col justify-center gap-6">
     <div className="bg-[#fffafa] rounded-3xl p-7 border border-[#eadede] shadow-sm  flex flex-col ">
           <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#4b0d16]">
                Monthly Timeline({duration}months)
            </h2>
            <p className="text-sm text-gray-500 mt-1 mb-6">
                Next Due: 
                {""}
                {nextDueDate?
                nextDueDate.toDateString()
                :"Not Set"
            }
            </p>
           </div> 
        
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 place-items-center">
            {months.map((month, index)=>{
                const status= getStatus(index);
                return(
                    <div key={month} className="flex flex-col items-center">
                    <div className={`
                    w-14 h-14 rounded-full
                    flex items-center justify-center
                    text-sm font-bold shadow-sm

                    ${status==="paid"?
                    "bg-red text-white": ""}


                    ${status=== "due"?
                        "bg-black text-white ring-4 ring-red-200" : ""
                    }
                    ${status==="missed"?
                        "bg-red-600 text-white" : ""
                    }
                    ${status==="neutral"?
                        "bg-gray-200 text-gray-700" : ""
                    }
                    `}
                    >
                        {status==="paid"?"✓": ""}

                        {status!=="paid"? month : ""}

                    </div>
                    <p className="text-xs mt-2 text-gray-600">Month {month}</p>
                </div>
                );
                            
 } )}
        </div>
        <button onClick={()=>
            setShowPaymentModal(true)
        } className="
               w-full mt-10
               bg-[#4b0d16]
               hover: bg-[#5c1420]
               text-white
               font-semibold
               p-4
               rounded-xl
               shadow-md
               transition">
            Confirm Contribution (₦{currentGoal.monthlyAmount})
        </button>
         </div>
        </div>
        </div>
       
        {showPaymentModal &&(
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 relative">
                    <button className="absolute top-4 right-4 text-gray-400 hover:text-red-800 text-xl transition"
                    onClick={()=> setShowPaymentModal(false)}>
                        <i className="bi bi-x-lg"></i>

                    </button>
            <div className="mb-6">
                <div className="flex items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
            <i className="bi bi-wallet2 text-2xl text-red-700"></i>
                </div>
                <h2 className="text-3xl font-bold text-red-800">
                    Goal Payment
                </h2>
                </div>
                <p className="text-gray-500 mt-2">
                    Choose a payment method to fund this goal
                </p>

            </div>
            <div className="flex flex-col gap-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-4 bg-red-50">
            <p className="text-sm text-gray-500">
            Goal Name
            </p>
            <h3 className="text-xl font-bold text-red-800">
                {currentGoal.name}
            </h3>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                        Monthly Contribution
                    </p>
                    <h3 className="text-2xl font-bold">
                            ₦{currentGoal.monthlyAmount}
                    </h3>
                </div>
                </div>
                <div className="mb-6">
                    <p className="font-semibold text-gray-700 mb-3">
                        Payment Method
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                        <button className="border border-gray-300 hover:border-red-700 rounded-xl p-3 transition">
                            Bank
                        </button>
                        <button className="border border-gray-300 hover:border-red-700 rounded-xl p-3 transition">
                            Card
                        </button>
                        <button className="border border-gray-300 hover:border-red-700 rounded-xl p-3 transition">
                            USSD
                        </button>
                        </div>
                    </div>
                    <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-xl shadow-md transition">
                            Make Payment
                    </button>
                </div>
                </div>
        )}
      </div>
      </div>
    
    
    


    );}
export default GoalDetails;