import React, {useState} from 'react';

function TextForm(props) {

const [text, setText] = useState("");
const style = {
    color: (props.mode==='light')?'black':'white', 
    backgroundColor: (props.mode==='light')?'white': '#011931'
}
const handleOnChange = (event) =>{
    setText(event.target.value);
}
const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.displayAlert("Converted to uppercase.", "success!");
}

const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.displayAlert("Converted to lowercase.", "succes!");
}
const handleCopyClick = () => {
    const textElement = document.getElementById("myTextArea");
    navigator.clipboard.writeText(textElement.value);
    props.displayAlert("Text copied.", "success!");
}
const handleExtraSpacesClick = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.displayAlert("Extra spaces removed.", "success!");
}

  return(
  <>
    <div className="container my-3 " style ={style}>
        <h1>{props.title}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myTextArea" rows="8" value={text} onChange ={handleOnChange} style ={style}></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick ={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-2" onClick = {handleLowClick}>Convert To Lowercase</button>
        <button type="button" className="btn btn-primary mx-2" onClick = {handleCopyClick}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-2" onClick = {handleExtraSpacesClick}>Remove extra spaces</button>
    </div>
    <div className= "container my-3" style = {style}>
        <h1 >Your Summary</h1>
        <p> {text.split(' ').length} words and {text.length} characters</p>
        <h2> Preview </h2>
        <p> {text}</p>
    </div>
  </>
  )
}

export default TextForm;
