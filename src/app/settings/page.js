import Navbar from "../components/navbar";
import Sidenav from "../components/sidebar";

export default function Chatbot(){
    return(
        <div className="w-5/6 flex bg-white">
            <div className="w-2/6 bg-white drop-shadow"> 
            <div className="flex bg-white my-2 p-3 drop-shadow">
                <ul className="w-14 h-14 rounded-full bg-lime-300 mx-4">
                <li>
                    <p>Name</p>
                    <p>Email</p>
                    <span>Country</span>
                </li>
                </ul>
             </div>            
             </div>
           
        </div>
    )
}
