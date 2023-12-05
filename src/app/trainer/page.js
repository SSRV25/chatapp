"use client"
import Image from 'next/image'
import Sidenav from '../components/sidebar'
import Navbar from '../components/navbar'
import Trainer from '../components/trainer'

export default function Home() {
  return (
    <>
    <Navbar/>
  <div className='flex '>
     <Sidenav/>   
     <Trainer/>
      
  </div>
    </>
  )
}
