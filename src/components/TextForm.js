import React, {useState} from 'react';

function TextForm(props) {

const [text, setText] = useState("");

const handleOnChange = (event) =>{
    setText(event.target.value);
}
const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
}

const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
}
  return(
  <>
    <div className="container my-3">
        <h1>{props.title}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myTextArea" rows="8" value={text} onChange ={handleOnChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick ={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-2" onClick = {handleLowClick}>Convert To Lowercase</button>
    </div>
    <div className= "container my-3">
        <h1 >Your Summary</h1>
        <p> {text.split(' ').length} words and {text.length} characters</p>
        <h2> Preview </h2>
        <p> {text}</p>
    </div>
  </>
  )
}

export default TextForm;
