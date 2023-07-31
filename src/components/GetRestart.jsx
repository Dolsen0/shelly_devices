import React from "react";

export default function GetRestart() {
    return(
        <button className="btn__restart" onClick={()=>{
            // fetch('http://192.168.33.1/rpc/Switch.Toggle?id=0')
            fetch('http://localhost:3000/home/restart')
            .catch(err => console.log(err))
        }}>Power</button>
    )
}