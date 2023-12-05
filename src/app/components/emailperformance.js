"use client"

import Chart from './chartchatbot'

export default function EmailPerformance (){
  return(
    <div className='p-2 bg-white drop-shadow-md m-4 w-auto rounded-lg '>  
    <div className='inline-flex mt-4'>
         <div className='bg-green relative drop-shadow-xl rounded w-10 h-10 ml-4'></div>
          <span className='ml-4 pt-2 text-blue text-2xl'>Performance</span>
    </div>
    <div className='flex mx-16 my-10'>
      <div> 
        <div className='flex gap-32'>
          <div className='flex flex-row'>
            <div className='bg-skyblue rounded-full w-12 h-12 p-2 fill-white'>
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DvrIcon"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z"></path></svg>
              </div> <div><span className='text-skyblue pl-2 font-medium text-lg'>40</span>
                        <p className='pl-2'>Chats</p></div>
            </div> 
          <div className='flex flex-row'>
          <div className='bg-green rounded-full w-12 h-12 p-2 fill-white' >
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckCircleIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
          </div><div><span className='text-green pl-2 font-medium text-lg'>60</span>
                      <p className='pl-2 '>New Contacts</p></div>
          </div>
          <div className='flex flex-row'>
          <div className='bg-magenta rounded-full w-12 h-12 p-2 fill-white ' >
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HealingIcon"><path d="m17.73 12.02 3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34a.9959.9959 0 0 0-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z"></path></svg>
          </div> <div><span className='text-magenta pl-2 font-medium text-lg'>60</span>
          <p className='pl-2'>Correct Answers</p></div>
          </div>
        </div>
        <div className='mt-8 mx-0'>
         <Chart/>
        </div>
      </div>
      <div className='mx-5 mt-6'>
        <p className='text-xl'>Achivements</p>
      <div className='flex-col my-14'>
      <div className='my-5'>
      <h3>Finishing 100 Chats</h3>
      <progress className="progress progress-info w-56 h-2" 
       value="50" max="100"></progress> 
      </div>
      <div className='my-5'>
      <h3>80% engaged conversations</h3>
      <progress className="progress progress-info w-56 h-2" value="10" max="100"></progress>
      </div>
      <div className='my-5'>
      <h3>80% Correct Answers</h3>
      <progress className="progress progress-info w-56 h-2" value="40" max="100"></progress>
      </div>
      <div className='my-5'>
      <h3>50% Completing Profile</h3>
      <progress className="progress progress-info w-56 h-2" value="40" max="100"></progress>
      </div>
      </div>
      </div>
      
    </div>
    
    </div>

  )
 
}