'use client'
import React from 'react'
import styles from './page.module.css'
import GetShellyInfo from '@/components/GetShellyInfo'
import GetRestart from '@/components/GetRestart'
import LightSlider from '@/components/LightSlider'


export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.description}>
     <div className='container'>
     <h1>Shelly Plug Plus US</h1>
      <GetShellyInfo />
      <GetRestart />
      <LightSlider/>
     </div>
      </div>
    </main>
    </>
  )
}
