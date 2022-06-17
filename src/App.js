import React from 'react'
//Pages
import { Candidatos } from './Pages/candidatos';
import {Main} from './Pages/Main'
import {Cuidadanos} from './Pages/Cuidadanos'
//Danna
import {Vote} from './Pages/voting'
//Jorge
import { Navbar } from './components/navBar';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <div className="col-md-4">
      <div className="p-4">
    <Routes>
       <Route path="/" element={  <Main/> }/>
       <Route path="/uriel" element={  <Cuidadanos/>}/>
       {/*Danna*/ }
       <Route path="/voting" element={  <Vote/>}/>
       {/*Jorge*/ }
       <Route path="/candidatos" element={  <Candidatos/> }/>
       
    </Routes>
    </div>
    </div>

</>

  )
}
export default App
