'use client'
import React, {useState, useEffect} from 'react';

export default function GetShellyInfo(){
    const [shellyInfo, setShellyInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState("")
    const [source, setSource] = useState("")
    const [output, setOutput] = useState("")
    const [apower, setApower] = useState("")
    const [voltage, setVoltage] = useState("")
    const [temperature, setTemperature] = useState("")
    
    
    useEffect(() => {
        fetch('http://192.168.33.1/rpc/Shelly.GetStatus')
        // fetch('http://localhost:3000/home')
        .then(res => res.json())
        .then(data => {
        let shellyInfo  = (data['switch:0'])
        setId(shellyInfo['id'])
        setSource(shellyInfo['source'])
        setOutput(shellyInfo['output'])
        setApower(shellyInfo['apower'])
        setVoltage(shellyInfo['voltage'])
        setTemperature(Math.round(shellyInfo['temperature']['tF']))

        setShellyInfo(shellyInfo)
        setLoading(false)
        
        console.log(shellyInfo)
        console.log(temperature)
            
        })
        .catch(err => console.log(err))
    }
    ,[])
 
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
            </ul>
            }
        </div>
    )
}
