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
    
    
    useEffect(() => {
        // fetch('http://192.168.33.1/rpc/Shelly.GetStatus')
        fetch('http://localhost:3000/home')
        .then(res => res.json())
        .then(data => {
        let shellyInfo  = (data['switch:0'])
        setId(shellyInfo['id'])
        setSource(shellyInfo['source'])
        setOutput(shellyInfo['output'])
        setApower(shellyInfo['apower'])
        setVoltage(shellyInfo['voltage'])

        setShellyInfo(shellyInfo)
        setLoading(false)
        
        console.log(voltage)
            
        })
        .catch(err => console.log(err))
    }
    ,[])
 
    return(
        <div>
            {
            loading ? <h3>Loading...</h3> : 
            <p>Voltage:{voltage} Id: {id} Source: {source} output{output} apower: {apower}</p>
            }
        </div>
    )
}
