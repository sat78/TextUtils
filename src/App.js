import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Textform } from './components/Textform';

function App() {
  const  [Mode, setMode] = useState("light")
  const toggleMode=()=>{
    if(Mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#212529"
  }
  else{
    setMode("light")
    document.body.style.backgroundColor="white"

  }
}


  return (
    <>

      <NavBar title="TextUtils" About="About Us" Mode={Mode} toggleMode={toggleMode} />

      <div className='container my-3' >
        <Textform heading="Enter the text to analyze below:-"  Mode={Mode} />
      </div>

    </>


  );
}

export default App;
