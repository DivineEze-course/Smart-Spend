import { useNavigate } from "react-router-dom";

function Goalcard({id,name,saved,target,onDelete}){
    const navigate= useNavigate();
    const progress= (saved/target)* 100;
    return(
        <div onClick={()=> navigate(`/goal-details/${id}`)} className="border-2 border-red w-85  p-7  pb-6  hover:bg-red-800 scale-105 transition duration-300 cursor-pointer  rounded-xl bg-red text-white relative">
             
            <h3 className="text-xl font-bold -mt-2">{name}</h3>
            <button className="text-right" onClick={(e)=>{
                e.stopPropagation();
                onDelete();
            }}>
                 <i className="bi bi-x absolute top-1 right-2 text-xl"></i></button>
            <p className="">₦{saved}/₦{target} </p>
           
            <div className="flex items-center gap-2">
            <div className="h-3 bg-red-100/60 rounded w-full">
              <div
                className="bg-white h-full rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs  text-white">{progress.toFixed(0)}%</span>
          </div>
          
        </div>
    );
}
export default Goalcard;