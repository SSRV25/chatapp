"use client"
import { useState, useEffect, useRef } from 'react';

export default function Livechat() {
  const [active_user, setActiveUser] = useState('');
  const [role, setRole] = useState('admin');
  const [webSocket, setWebSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const messageContainerRef = useRef(null);

  const connectWebSocket = () => {
    const socket = new WebSocket('wss://3.17.37.157/ws/socket-server/bot1/');

    socket.onmessage = (e) => {
      console.log('Received message:', e.data);
      console.log(e);
      const data = JSON.parse(e.data);
      const { active, msg, a_user_disconnected, new_user_connected, admin_connected, admin_disconnected } = data;
      console.log(data);

      if (msg !== undefined) {
        setMessages((prevMessages) => [...prevMessages, { content: msg, sent_by_admin: data.admin }]);
      }
 
      
     /* if (active !== undefined) {
        const users = Object.entries(active)
          .filter(([layerName, userInfo]) => layerName !== 'admin') // Filter out the 'admin' entry
          .map(([layerName, userInfo]) => ({ id: layerName, name: userInfo.name }));
        setActiveUsers(users);
      }
      */

      if (active !== undefined) {
        const users = Object.entries(active)
          .filter(([layerName, userInfo]) => layerName !== 'admin') // Filter out the 'admin' entry
          .map(([layerName, userInfo]) => ({ id: layerName, ...userInfo }));
        setActiveUsers(users);
      }
      
      

      if (a_user_disconnected !== undefined) {
        setActiveUsers((prevUsers) => prevUsers.filter((user) => user.id !== data.id));
      }

      if (new_user_connected !== undefined) {
        setActiveUsers((prevUsers) => [...prevUsers, { id: data.id, name: data.name }]);
      }

      if (admin_connected !== undefined) {
        setActiveUser(data.channel_id);
      }

      if (admin_disconnected !== undefined) {
        setActiveUser('');
      }
    };

    socket.onopen = () => {
      if (role === 'admin') {
        socket.send(
          JSON.stringify({
            admin: true,
            system: true,
            name: 'admin',
            email: 'abc@gmail.com',
            init_setup: true,
            bot_id: '',
          })
        );
      } else {
        socket.send(
          JSON.stringify({
            system: true,
            name: 'user',
            init_setup: true,
            bot_id: '',
          })
        );
      }
    };

    setWebSocket(socket);
  };

  useEffect(() => {
    if (webSocket) {
      webSocket.close();
    }
    connectWebSocket();
  }, [role]);

  useEffect(() => {
    // Scroll to the bottom of the message container when messages change 
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.querySelector('input').value;

    webSocket.send(
      JSON.stringify({
        system: false,
        send_to: active_user,
        msg: message,
        admin: role === 'admin',
      })
    );

    // Display the sent message in the message area
    setMessages((prevMessages) => [...prevMessages, { content: message, sent_by_admin: role === 'admin' }]);
    e.target.querySelector('input').value = '';     // Clear the input field after sending
  };

  return (
    <div className="p-2 bg-white drop-shadow-md m-4 w-screen rounded-lg h-screen">
      <div className="flex">
        <div className="my-6">
          <span className="ml-4 pt-2 text-blue text-base">Live Users</span>
          <ul id="active" className="mx-5 my-3">
            {activeUsers
              .filter(user => user.name !== 'admin') // Exclude users with the name 'admin' REMOVING THE ADMIN
              .map((user) => (
                <li
                  className={`border-skyblue flex gap-3 p-4 ${user.id === active_user ? 'active' : ''}`}
                  key={user.id}
                  onClick={() => setActiveUser(user.id)}
                >
                  <span>
                    <img src="/avatar.png" width={'32px'} height={'32px'} alt="avatar" />
                  </span>
                  <span className="text-sm">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </span>
                  <span>Country</span>
                </li>
              ))}
          </ul>
        </div>



        <div className="right-10 ml-20 w-3/6 h-96" style={{ border: '0.5px solid #D9D9D9', borderRadius: '10px' }}>
          <p className="flex text-base p-4 bg-skyblue text-white" style={{ borderRadius: '10px 10px 0px 0px' }}>
            <div className="w-6 h-6 bg-white rounded-2xl mr-2"></div>User
          </p>
          <div className="overflow-y-scroll" style={{ height: '300px' }} id="messages" ref={messageContainerRef}>
            {messages.map((msg, index) => (
              <div
                className={`bg-${msg.sent_by_admin ? 'blue' : 'green'}  text-white left-0 p-2 my-1 mx-2 rounded`}
                key={index}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className="flex h-22 mt-1 p-3 bg-white z-10" style={{ border: '0.5px solid #494949' }}>
            <form id="form" onSubmit={handleSubmit}>
              <input placeholder="Type your message" className="w-4/6" />
              <span className="w-15 h-10 ml-5 flex-grow p-2 text-white bg-blue rounded-2xl mr-2" type="submit">
                Send
              </span>
            </form>
          </div>
          <p className="text-sm text-center py-1">Your Watermark</p>
        </div>
      </div>
    </div>
  );
}
