import React from 'react'
//Pages

import {Main} from './Pages/SignInPanel'
import { Candidatos } from './Pages/candidatos';
import {Main} from './Pages/Main'

import {Cuidadanos} from './Pages/Cuidadanos'
import {Resultados} from './Pages/Resultados'

//Mora
//Jorge
import { Navbar } from './components/navBar';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    
      <div className="p-4">
    <Routes>
       <Route path="/" element={  <Main/> }/>
       <Route path="/uriel" element={  <Cuidadanos/>}/>
       <Route path="/Resultados" element={ <Resultados/>}/>{}
       {/*Mora*/ }
       {/*Jorge*/ }
       <Route path="/candidatos" element={  <Candidatos/> }/>
       
    </Routes>
    </div>
    

</>

  )
}
export default App
