import React from 'react'
//Pages
import {Main} from './Pages/Main'
import {Cuidadanos} from './Pages/Cuidadanos'
 
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
       <Route path="/" element={  <Main/> }/>
       <Route path="/uriel" element={  <Cuidadanos/>}/>
    </Routes>
    
  )
}
export default App
