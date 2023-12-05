
export default function Livechat(){
    return(
        <div className='p-2 bg-white drop-shadow-md m-4 w-screen rounded-lg '>  
        <div className='inline-flex mt-4'>
             <div className='bg-green relative drop-shadow-xl rounded w-10 h-10 ml-4'></div>
              <span className='ml-4 pt-2 text-blue text-2xl'>Livechat</span>
        </div>
        <div className='flex mx-8 my-10 '>
            <div className='mx-5 flex w-3/6'>
                <ul>
                <li className="border-skyblue flex gap-3">
                        <div className="w-10 h-10 bg-green rounded-xl"></div>
                        <div>
                        <div>Name</div>
                        <div>Email</div>
                        </div>
                    </li>
                    <li className="border-skyblue flex gap-3">
                        <div className="w-10 h-10 bg-green rounded-xl"></div>
                        <div>
                        <div>Name</div>
                        <div>Email</div>
                        </div>
                    </li>
                    <li className="border-skyblue flex gap-3">
                        <div className="w-10 h-10 bg-green rounded-xl"></div>
                        <div>
                        <div>Name</div>
                        <div>Email</div>
                        </div>
                    </li>
                </ul>
            </div>
          <div>             
          </div>
 
          <div className='ml-20 w-3/6' style={{ border: '0.5px solid #D9D9D9', borderRadius: '10px' }}>          
            <p className=' flex text-lg p-4 bg-skyblue text-white ' style={{ borderRadius:'10px 10px 0px 0px'}}>
            <div className="w-10 h-10 bg-white rounded-2xl mr-2"></div>User</p>
          <div className='flex-col my-14 p-4'>
          <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="/profile.webp" />
    </div>
  </div>
  <div className="chat-header">
    Abhi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">Hi Saurav</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="/profile.webp" />
    </div>
  </div>
  <div className="chat-header">
    Saurav
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">How it is going?</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>

          <div className="flex h-full flex-grow p-3" style={{border: '0.5px solid #D9D9D9', borderRadius:'0px 0px 10px 10px'}}>
           <input placeholder="Type your messege" className="w-5/6"></input>
           <div className="w-10 h-10 flex-grow p-2 text-white bg-blue rounded-2xl mr-2"> Send</div>           
          </div>
          <p className="pt-4">Powered By Example & Company Name</p>
          </div>
          </div>
          
        </div>
        
        </div>
    )
}