import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
      <Router>
        <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/> 
        <Alert alert = {alert}/>
        <Routes>
          <Route path ="/" element = {<TextForm title =" Enter your text here" mode ={mode} displayAlert = {displayAlert}/>} />
          <Route path="/about" element ={  <About />} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
