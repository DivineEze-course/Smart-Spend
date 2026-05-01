import { useNavigate } from "react-router-dom";

function Goalcard({name,saved,target}){
    const navigate= useNavigate();
    const barWidth= (saved/target)* 100;
    return(
        <div onClick={()=> navigate("/goal-details")}>
            
            <h3>{name}</h3>
            <p>₦{saved}/₦{target} </p>
            <div style={{
                backgroundColor: '#7c3aed',
                width: `${barWidth}%`,
                height: '100%',
                borderRadius:'5px'
            }}></div>
        </div>
    );
}
export default Goalcard;