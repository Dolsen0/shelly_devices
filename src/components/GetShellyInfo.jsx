import React from 'react';

export default function GetShellyInfo({ loading, id, mac, source, output, apower, aenergy, voltage, temperature, wasOn }){
  return(
    <div>
      {
        loading ? <h3>Loading...</h3> : 
        <ul>
          <h3>Shelly Info</h3>
          <li>Power: {wasOn ? 'On' : 'Off'}</li>
          <li>Temperature: {temperature}°F</li>
          <li>Apower: {apower}</li>
          <li>Acc. Energy (total): {aenergy}</li>
          <li>Voltage: {voltage}</li>
          <li>Id: {id}</li>
          <li>Source: {source}</li>
          <li>Output: {output}</li>
          <li>Mac: {mac}</li>
        </ul>
      }
    </div>
  )
}
