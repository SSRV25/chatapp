"use client"
import Image from 'next/image'
import Sidenav from '../components/sidebar'
import Navbar from '../components/navbar'
import ChatPerformance from '../components/chatperformance'
import EmailPerformance from '../components/emailperformance'

export default function Home() {
  return (
    <>
    <Navbar/>
  <div className='flex '>
     <Sidenav/>
     <div className='flex-col'>
     <ChatPerformance/>  
     <EmailPerformance/> 
      </div>
    </div>
    </>
  )
}
