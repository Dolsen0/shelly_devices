"use client"

import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import GetShellyInfo from '@/components/GetShellyInfo'
import GetRestart from '@/components/GetRestart'
import LightSlider from '@/components/LightSlider'


export default function Home() {
  const [shellyInfo, setShellyInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("")
  const [source, setSource] = useState("")
  const [output, setOutput] = useState("")
  const [apower, setApower] = useState("")
  const [voltage, setVoltage] = useState("")
  const [temperature, setTemperature] = useState("")
  const [wasOn, setWasOn] = useState("");

  useEffect(() => {
      fetch('http://localhost:3000/home')
      .then(res => res.json())
      .then(data => {
        let shellyInfo  = (data['switch:0'])
        setId(shellyInfo['id'])
        setSource(shellyInfo['source'])
        setOutput(shellyInfo['output'])
        setApower(shellyInfo['apower'])
        setVoltage(shellyInfo['voltage'])
        setTemperature(Math.round(shellyInfo['temperature']['tF']))
        setWasOn(shellyInfo['output']);

        setShellyInfo(shellyInfo)
        setLoading(false)

        console.log(shellyInfo)
        console.log(temperature)
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
              source={source} 
              output={output} 
              apower={apower} 
              voltage={voltage} 
              temperature={temperature} 
              wasOn={wasOn}
            />
            <GetRestart setWasOn={setWasOn} />
          </div>
        </div>
      </main>
    </>
  )
}
