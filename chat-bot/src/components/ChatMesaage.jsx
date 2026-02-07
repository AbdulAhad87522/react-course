import userimage from '../assets/ahad.png'
import robotimage from '../assets/robot.jpg'
import './ChatMesaage.css';
import dayjs from 'dayjs';
export function ChatMesaage({message , sender })
{ 
      const time = dayjs().format('HH:mm:ss')
        return (
          
          <div className = {sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && <img src={robotimage} width = "30"/>  }
            <div className= "chat-message">
              {message}
              <p>{time}</p>
              </div>
            {sender === 'user' && <img src={userimage} width = "30"/>  }
          </div>

        );
      }