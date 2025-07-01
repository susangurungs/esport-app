import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';




function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type,
  })
  setTimeout(()=>{
    setAlert(null);
  },3000);
  }
  const toggle=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
      showAlert("dark mode has been enable","sucess");
    }
    else{
      setMode("light");
       document.body.style.backgroundColor="white";
       showAlert("white mode has been enable","sucess");
    }
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} toggle={toggle}/>
      <Alert alert={alert}></Alert>
    <Routes>

            <Route path="/" element={<TextForm showAlert={showAlert} heading="enter text for the used"/>} />
            <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home/>}/>
         </Routes>
      
      </Router>
     
    </>
  );
}

export default App;
