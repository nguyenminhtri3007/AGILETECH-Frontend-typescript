import React, { useEffect, useRef, useState } from "react";
import styles from './ChatApp.module.scss'

const ChatApp = () =>{
  const [messages, setMessages] = useState<String[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null)


  useEffect (() =>{
    endRef.current?.scrollIntoView({behavior:'smooth'})
  },[messages])

 const SendMessage = () =>{
  if(input.trim() === "") return;
  setMessages((prev) => [...prev, input]);
  setInput("");
 }

return (
    <div className={styles.appContainer}>
      <div className={styles.appContent} >
    {messages.map((msg, i) =>(
      <div key={i} style={{padding:'4px 0'}}>
         {msg}
      </div>
    ))}
    <div ref={endRef}/>
      </div>
      

      <div style={{ display: "flex", gap: 5 }}>
       <input
       style={{flex: 1}}
       value={input}
       placeholder="nhận tin nhắn"
       onChange={(e) =>setInput(e.target.value)}
       onKeyDown={(e) => e.key === "Enter" && SendMessage()}
       />

       <button onClick={SendMessage}>Gửi tin nhắn</button>
      </div>
    </div>
  );
}

export default ChatApp;