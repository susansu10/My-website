import React, { useState, useEffect } from 'react';
import './App.css';
import myPhoto from './myphoto.png';

function App() {
  // 留言板的 state
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // 訪客計數器的 state
  const [visitorCount, setVisitorCount] = useState(0);

  // 處理留言輸入框變動
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 處理留言發送
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  // 增加訪客數量當頁面載入
  useEffect(() => {
    setVisitorCount(visitorCount + 1);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={myPhoto} alt="My Photograph" className="My-photo" />
        <p>
          Hi, I'm 杜昉紜.
          Welcome to my personal website!
        </p>
      </header>
      <div className="visitor-counter">
        <h2>Visitor Counter</h2>
        <p>{visitorCount} visitors have visited this site.</p>
      </div>
      <div className="message-board">
        <h2>Message Board</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Leave a message..."
        />
        <button onClick={handleSendMessage}>Send Message</button>
        <div className="messages">
          {messages.map((message, index) => (
            <p key={index} className="message">{message}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;