import React from 'react'
//Pages
import {voting} from './Pages/voting|'
 
import { Routes, Route } from "react-router-dom";
function vote() {
  return (
    <Routes>
       <Route path="/" element={  <voting/> }/>
    </Routes>
  )
}
export default vote