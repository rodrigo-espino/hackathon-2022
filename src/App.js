import React from 'react'
//Pages
import {Main} from './Pages/Main'
 
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
       <Route path="/" element={  <Main/> }/>
    </Routes>
  )
}
export default App
