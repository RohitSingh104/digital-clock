import React,{useState} from 'react'
import './App.css'

function App() {
  let res = new Date().toLocaleTimeString();
  const [time , settime] = useState(res);
 
  const getTime = () =>{
    res=new Date().toLocaleTimeString();
    settime(res);
  }
  setInterval(getTime,1000);
  return (
    <div className="Clock">
        <h3 id="time">{time}</h3>
        
    </div>
  );
}

export default App;
