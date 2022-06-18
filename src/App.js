import React from 'react'
//Pages
import {Resultados} from './Pages/Resultados';
//Danna
import {Vote} from './Pages/voting'
//Jorge
import { Navbar } from './components/navBar';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
      <div className="p-4">
    <Routes>
       <Route path="/" element={  <Resultados/>}/>
       <Route path="/voting" element={  <Vote/>}/>
    </Routes>
    </div>
    

</>

  )
}
export default App
