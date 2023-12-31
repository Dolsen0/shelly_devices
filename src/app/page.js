"use client"

import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import GetShellyInfo from '@/components/GetShellyInfo'
import GetRestart from '@/components/GetRestart'
import LightSlider from '@/components/LightSlider'
import GetConfig from '@/components/GetConfig'


export default function Home() {
  const [shellyInfo, setShellyInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("")
  const [source, setSource] = useState("")
  const [output, setOutput] = useState("")
  const [apower, setApower] = useState("")
  const [aenergy, setAenergy] = useState("")
  const [voltage, setVoltage] = useState("")
  const [temperature, setTemperature] = useState("")
  const [wasOn, setWasOn] = useState("");
  const [mac, setMac] = useState("");

  useEffect(() => {
      fetch('http://localhost:3000/home')
      .then(res => res.json())
      .then(data => {
        let shellyInfo  = (data['switch:0'])
        let shellyMac  = (data['sys'])
        setId(shellyInfo['id'])
        setSource(shellyInfo['source'])
        setOutput(shellyInfo['output'])
        setApower(shellyInfo['apower'])
        setAenergy(shellyInfo['aenergy']['total'])
        setVoltage(shellyInfo['voltage'])
        setTemperature(Math.round(shellyInfo['temperature']['tF']))
        setWasOn(shellyInfo['output']);
        setMac(shellyMac['mac']);

        setShellyInfo(shellyInfo)
        setLoading(false)

        console.log(shellyInfo)
        console.log(temperature)
        console.log(mac)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className='container'>
            <h1>Shelly Plug Plus US</h1>
            <GetShellyInfo 
              loading={loading} 
              id={id} 
              mac={mac}
              source={source} 
              output={output} 
              apower={apower} 
              aenergy={aenergy} 
              voltage={voltage} 
              temperature={temperature} 
              wasOn={wasOn}
            />
            <GetRestart setWasOn={setWasOn} />
            <GetConfig />
          </div>
        </div>
      </main>
    </>
  )
}
