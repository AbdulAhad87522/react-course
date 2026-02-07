import { useState, useEffect } from 'react'
import './App.css'
import { Chatbot } from 'supersimpledev'
import { ChatInput } from './components/ChatInput.jsx'
import { ChatMesaages } from './components/ChatMesaages.jsx'

function App(){
         const array = useState(JSON.parse(localStorage.getItem('messages')) || [{
         message: 'Hello Chatbot',
          sender: 'user',
          key: 'id1'
        },{
          message: 'I am chatbot',
          sender: 'robot',
          key: 'id2'
        },{
          message: 'Give me today date',
          sender: 'user',
          key: 'id3'
        },{
          message: 'TOday is 2-2-26',
          sender: 'robot',
          key: 'id4'
        }]);
        const chatMessages = array[0];
        const setChatMessage = array[1];
          useEffect(() => {
            localStorage.setItem  ('messages', JSON.stringify(chatMessages))
          }, [chatMessages]);

        return (
           <div className = "app-container">
            
            <ChatMesaages
              chatMessages = {chatMessages}
            />
            <ChatInput
              chatMessages = {chatMessages}
              setChatMessage = {setChatMessage}
            />
          </div>
        );
      }

export default App
