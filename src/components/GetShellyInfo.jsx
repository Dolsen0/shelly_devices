import React from 'react';

export default function GetShellyInfo({ loading, id, source, output, apower, aenergy, voltage, temperature, wasOn }){
  return(
    <div>
      {
        loading ? <h3>Loading...</h3> : 
        <ul>
          <li>Power: {wasOn ? 'On' : 'Off'}</li>
          <li>Temperature: {temperature}°F</li>
          <li>Apower: {apower}</li>
          <li>Acc. Energy (minutes): {aenergy}</li>
          <li>Voltage: {voltage}</li>
          <li>Id: {id}</li>
          <li>Source: {source}</li>
          <li>Output: {output}</li>
        </ul>
      }
    </div>
  )
}
