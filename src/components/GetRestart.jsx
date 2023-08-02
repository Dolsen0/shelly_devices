import React from "react";

export default function GetRestart({ setWasOn }) {
  const handleClick = () => {
    fetch('http://localhost:3000/home/restart', { // fetch endpoint
      method: 'POST', // change to a POST request
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      fetchCurrentState();
    })
    .catch(err => console.log(err));
  };

  const fetchCurrentState = () => {
    fetch('http://localhost:3000/home')
    .then(res => res.json())
    .then(data => {
      let shellyInfo  = (data['switch:0'])
      setWasOn(shellyInfo['output']);
    })
    .catch(err => console.log(err));
  }

  return (
    <button className="btn__restart" onClick={handleClick}>
      Power
    </button>
  );
}
