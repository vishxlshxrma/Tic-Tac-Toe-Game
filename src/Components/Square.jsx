import React from "react";

const Square = (props) =>{
    return (
        <div 
            onClick={props.onClick}
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
            <h3>{props.value}</h3>   
        </div>
    );
};

export default Square;