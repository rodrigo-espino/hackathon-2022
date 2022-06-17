import React from 'react'
//Pages
import { Candidatos } from './Pages/candidatos';
import {Main} from './Pages/Main'
 
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="col-md-4">
      <div className="p-4">
    <Routes>
       <Route path="/" element={  <Main/> }/>
       
       
       <Route path="/candidatos" element={  <Candidatos/> }/>
       
    </Routes>
    </div>
    </div>
  )
}
export default App
