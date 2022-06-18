import React from 'react'
//Pages

import {Main} from './Pages/SignInPanel'
import { Candidatos } from './Pages/candidatos';

<<<<<<< HEAD
import {Cuidadanos} from './Pages/Cuidadanos';
import {Resultados} from './Pages/Resultados';
//import {img} from './Pages/img' 

//Mora

=======
import {Cuidadanos} from './Pages/Cuidadanos'
>>>>>>> 820688bfc38968dc40f56040d487d8b4bbc4c35f
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
       <Route path="/" element={  <Main/> }/>
       <Route path="/uriel" element={  <Cuidadanos/>}/>
       {/*Danna*/ }
       <Route path="/voting" element={  <Vote/>}/>
       {/*Jorge*/ }
       <Route path="/candidatos" element={  <Candidatos/> }/>
       
    </Routes>
    </div>
    

</>

  )
}
export default App
