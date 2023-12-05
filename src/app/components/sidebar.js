import Link from 'next/link'

export default function Sidenav() {
    return (
      <div className="flex flex-col group w-20 bg-white max-h-max hover:w-1/6 text-md bg-clip-content dark:bg-slate-800">
        <div className="flex flex-col ml-5 my-6 gap-4">
        <Link href="/dashboard" >
        <div className="group flex">
            <img src="/dashboard.svg" alt="Dashboard Icon" className="pr-1"/>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4">
            <Link href="/dashboard"> Dashboard</Link> 
            </div>
          </div>
        </Link>
        </div>       
          
        <div className="flex flex-col ml-5 my-6 gap-4">
            <Link href="/chatbot">
            <div className="group flex">
            <img src="/chatbot.svg" alt="Chatbot Icon" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2">Chatbot</div>
          </div>    
            </Link>          
        </div>

        <div className="flex flex-col ml-5 my-6 gap-4">
        <Link href="/users">
        <div className="group flex" >
            <img src="/user.svg" alt="User Icon" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2">User</div>
          </div>
        </Link>         
        </div>

        <div className="flex flex-col ml-5 my-6 gap-4">
        <Link href="/email">
        <div className="group flex">
            <img src="/mail.svg" alt="Mail Icon" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity pl-3 py-1">Email</div>
          </div>
        </Link>          
        </div>

        <div className="flex flex-col ml-5 my-6 gap-4">
        <Link href="/trainer">
        <div className="group flex">
            <img src="/trainer.svg" alt="Trainer Icon" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2">Trainer</div>
          </div>
        </Link>
        </div>

        <div className="flex flex-col ml-5 my-6 gap-4">
        <Link href="/settings">
        <div className="group flex">
            <img src="/setting.svg" alt="Setting Icon" className="pr-2" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-1">Settings</div>
          </div>
        </Link>         
        </div>
      </div>
    );
  }
  