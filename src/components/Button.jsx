import React, { useState } from "react";


// Function creates individual states for each button allowing it to dynamically render
const Button = ({ info, id }) => {
    const [information, setInformation] = useState(false);
    
    return (
        <div>
        <li key={id}>
            {  information ? info : `${info.substring(0,250)}...`}
                <button onClick={() => setInformation((information) => !information)}>
               {information ? "Show Less" : "Read More"}
                </button> 
        </li>
        
        
        </div>
    )
}


export default Button;