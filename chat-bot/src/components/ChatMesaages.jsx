import { useRef } from 'react'
import { useEffect } from 'react'
import { ChatMesaage } from './ChatMesaage'
import './ChatMesaages.css'

export function ChatMesaages({ chatMessages}){
       const chatMessagesRef = useRef(null);
       useEffect(() => {
        const containerElem = chatMessagesRef.current
        if(containerElem){
          containerElem.scrollTop = containerElem.scrollHeight; 
        }
       },[chatMessages])

        return(
          <div className = "chat-message-container" ref = {chatMessagesRef}>
            {chatMessages.map((chat) => {
                return (
                  <ChatMesaage
                    message = {chat.message}
                    sender = {chat.sender}
                    key = {chat.key}
                  />
                );
              })
            }
          </div>
          );
      }