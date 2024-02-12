import React from "react";

const Square = () =>{
    return (
        <div 
            style= {{
                border: "1px solid",
                height: "100px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
            }}
            className= "square"
        >
            <h3>x</h3>   
        </div>
    );
};

export default Square;