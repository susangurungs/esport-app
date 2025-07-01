import React, {useState} from 'react';

export default function TextForm(props) {
  const [text,setText]=useState('enter the text');

  const handleUpClick=(e)=>{
    e.preventDefault();
    console.log("button was click ");
    let newText=text.toUpperCase();
    setText(newText);
     props.showAlert("convet to upper case:","sucess");
  }
  const handleOnChange=(event)=>{

    setText(event.target.value)
  }
   const handleloClick=()=>{
    
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("convet to lower case:","sucess");
   }
   const handleClickClick=()=>{
    let newText="";
    setText(newText);
   }
   const handle=()=>{
    let newText=text+text;
    setText(newText);
   }
  return (
    <>
    <div className="container my-3">
      <form>
        {props.heading}
        <div className="mb-3">
          <label htmlFor="box" className="form-label">Example textarea</label>
          <textarea className="form-control" id="box" rows="3" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" className="btn btn-1" onClick={handleUpClick}>convert to upercase</button>
        <button type="button" className="btn btn-2" onClick={handleloClick}>convert to lowercase</button>
         <button type="button" className="btn btn-2" onClick={handleClickClick}>clear</button>
         <button type="button" className='btn btn-3' onClick={handle}>double</button>
      </form>
    </div>
    <div className="content">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} min read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
