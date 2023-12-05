"use client"
import Image from 'next/image'
import Sidenav from '../components/sidebar'
import Navbar from '../components/navbar'
import Livechat from '../components/livechat'

export default function Home() {
  return (
    <>
    <Navbar/>
  <div className='flex '>
     <Sidenav/>     
     <Livechat/>
    </div>
    </>
  )
}