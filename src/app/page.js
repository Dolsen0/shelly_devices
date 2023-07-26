'use client'
import React from 'react'
import styles from './page.module.css'
import GetShellyInfo from '@/components/GetShellyInfo'
import GetRestart from '@/components/GetRestart'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.description}>
     <h1>Shelly Device</h1>
      <GetShellyInfo />
      <GetRestart />
      </div>
    </main>
    </>
  )
}
