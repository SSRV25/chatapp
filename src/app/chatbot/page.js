"use client"
import Image from 'next/image'
import Sidenav from '../components/sidebar'
import Navbar from '../components/navbar'

export default function Chatbot() {
  return (
    <>
    <Navbar/>
  <div className='flex '>
     <Sidenav/>     
    <div className='flex gap-4 m-5'>
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src="https://media.istockphoto.com/id/1482901838/vector/3d-artificial-intelligence-digital-brain-neural-network-ai-servers-and-robots-technology.jpg?s=612x612&w=is&k=20&c=Mxx45EEvMHIs0YlzuWpEfmCc2rDOFQbsWXn6BRXn0zc=" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Chatbot1</h2>
    <p>Legal help 24*7</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Customise</button>
      <button className="btn btn-error">Delete</button>
    </div>
  </div>
</div> 
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://media.istockphoto.com/id/1482901838/vector/3d-artificial-intelligence-digital-brain-neural-network-ai-servers-and-robots-technology.jpg?s=612x612&w=is&k=20&c=Mxx45EEvMHIs0YlzuWpEfmCc2rDOFQbsWXn6BRXn0zc=" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Customer Support</h2>
    <p>Help you when you need it</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Customise</button>
      <button className="btn btn-error">Delete</button>
    </div>
  </div>
</div>

    </div>
    </div>
    </>
  )
}