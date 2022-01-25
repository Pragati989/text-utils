import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from 'react';
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode =() =>{
     if(mode === 'light'){
     setMode("dark");
     document.body.style.backgroundColor = '#212529';
     } 
     else {
     setMode("light");
     document.body.style.backgroundColor = 'white';
     }
  }
  return (
    <div>
       <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/> 
       <TextForm title =" Enter your text here" mode ={mode}/>
    </div>
  );
}

export default App;
