import React from 'react'
import {useNavigate} from 'react-router-dom'
export function Vote() {
const navigate = useNavigate();
  const handleonClick = () => {
    navigate('/')
  }
  return (
    <>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
      <div className="row">
    
      
       <button className="btn btn-primary me-md-2 logout" type="button" onClick={handleonClick} >Log Out</button>
       
       
<br />
<br />
       
       </div>
       <div className="row">
        <div className="col-md-3">
          <center>
            <img src="esteban.jpeg" className="Candidato" />
          </center>
          <center>
            <h3>Esteban Villegas</h3>
            <a href="#" className="btn btn-primary" onClick={handleonClick} >Votar</a>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="marina.jpeg" className="Candidato" />
          </center>
          <center>
            <h3>Marina Vitela</h3>
            <a href="#" className="btn btn-primary" onClick={handleonClick}>Votar</a>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="patricia_flores.jpeg" className="Candidato" />
          </center>
          <center>
            <h3>Patricia Flores</h3>
            <a href="#" className="btn btn-primary" onClick={handleonClick}>Votar</a>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="independiente.jpeg" className="Candidato" />
          </center>
          <center>
            <h3>Candidato Indep.</h3>
            <a href="#" className="btn btn-primary" onClick={handleonClick}>Votar</a>
          </center>
        </div>
        </div>

          </>
        )
      }
