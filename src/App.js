import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode =() =>{
     if(mode === 'light'){
     setMode("dark");
     document.body.style.backgroundColor = '#212529';
     displayAlert("Dark mode is enabled.", "success!");
     } 
     else {
     setMode("light");
     document.body.style.backgroundColor = 'white';
     displayAlert("Light mode is enabled.", "success!");
     }
  }

  const displayAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type
    })
    //to dismiss it after 2 seconds
    setTimeout( () => {
      setAlert(null);} , 2000);
  }

  return (
    <div>
       <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/> 
       <Alert alert = {alert}/>
       <TextForm title =" Enter your text here" mode ={mode} displayAlert = {displayAlert}/>
    </div>
  );
}

export default App;
