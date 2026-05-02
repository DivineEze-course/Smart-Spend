import { useNavigate } from "react-router-dom";

function Goalcard({name,saved,target}){
    const navigate= useNavigate();
    const progress = (saved/target) * 100;
    return(
        <div className="flex flex-col p-3 w-1/5 border-1 rounded-lg border-gray-300 shadow-xs " onClick={()=> navigate("/goal-details")}> 
            <h3 className="text-md font-bold text-blue-900/80">{name}</h3>
            <p className="text-sm font-light">₦<span className="font-medium">{saved}</span>/₦{target} </p>
            <div className="flex items-center gap-4 mt-2">
              <div className="h-3 bg-gray-200 rounded w-full">
                <div
                  className="bg-blue-900/60 h-full rounded"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs">{progress.toFixed(0)}%</span>
            </div>
            <div className="flex justify-between mt-4 text-sm items-center">
                <p>Due: May 9 2025</p>
                <div className="p-1 bg-green-100 text-xs rounded-sm text-green-600">Maunal</div>
            </div>
        </div>
    );
}
export default Goalcard;