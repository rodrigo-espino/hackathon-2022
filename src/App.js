import React from 'react'
//Pages

import { Candidatos } from './Pages/candidatos';

import {Cuidadanos} from './Pages/Cuidadanos';
import {Resultados} from './Pages/Resultados';
//import {img} from './Pages/img' 

//Mora


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
