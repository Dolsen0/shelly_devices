import React from 'react';

export default function GetShellyInfo({ loading, id, source, output, apower, voltage, temperature, wasOn }){
  return(
    <div>
      {
        loading ? <h3>Loading...</h3> : 
        <ul>
          <li>Id: {id}</li>
          <li>Source: {source}</li>
          <li>Temperature: {temperature}°F</li>
          <li>Voltage: {voltage}</li>
          <li>Output: {output}</li>
          <li>Apower: {apower}</li>
          <li>Was On: {wasOn ? 'On' : 'Off'}</li>
        </ul>
      }
    </div>
  )
}
