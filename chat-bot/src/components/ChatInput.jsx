import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ chatMessages , setChatMessage})
      {
        const [inputText, setInputText] = useState('');

        function SaveInputText(event){
          setInputText(event.target.value);
        }

       function SaveInput() {
        if (!inputText.trim()) return;

        const userMessage = {
          message: inputText,
          sender: 'user',
          key: crypto.randomUUID()
        };

        const loadingMessage = {
          message: 'Loading...',
          sender: 'robot',
          key: 'loading'
        };

        const newChatMessages = [
          ...chatMessages,
          userMessage,
          loadingMessage
        ];

        setChatMessage(newChatMessages);
        setInputText('');

        setTimeout(() => {
          const response = Chatbot.getResponse(inputText);

          const updatedMessages = newChatMessages.map(chat =>
            chat.key === 'loading'
              ? { ...chat, message: response, key: crypto.randomUUID() }
              : chat
          );

          setChatMessage(updatedMessages);
        }, 800); // ⏳ delay for realism
      }


        function buttonclicked(event){
          if(event.key == 'Enter'){
          SaveInput();
        }
        }

        function Cleardata(){
          setChatMessage([])
        }

        return(
          <div className = "chat-input-container">
            <input className = "inputchat" size = "70" placeholder = "Typr your query" onKeyDown = {buttonclicked}  onChange = {SaveInputText} value = {inputText}/>
            <button onClick = {SaveInput}>Send</button>
            <button onClick = {Cleardata}>Clear</button>
            </div>
        );
      }