import React from 'react'
//Pages
import { Candidatos } from './Pages/candidatos';
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
     
       <Route path="/uriel" element={  <Cuidadanos/>}/>
       <Route path="/Resultados" element={  <Resultados/>}/>
       <Route path="/voting" element={  <Vote/>}/>
       {/*Jorge*/ }
       <Route path="/candidatos" element={  <Candidatos/> }/>
       
    </Routes>
    </div>
    

</>

  )
}
export default App
