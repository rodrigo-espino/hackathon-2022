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
    <div className="col-md-6">
      <button type="button" className="btn btn-secondary">Votos restantes</button>
      </div>
      <div className="col-md-6">
       <button class="btn btn-primary me-md-2" type="button" onClick={handleonClick} >Log Out</button>
       </div>
       <div className="col-md-6">
<br />
<br />
       </div>
       </div>
       <div className="row">
        <div className="col-md-3">
          <center>
            <img src="jonhy.jpg" className="Candidato" />
          </center>
          <center>
            <h3>Jonhy Deep</h3>
            <a href="#" className="btn btn-primary" onClick={handleonClick} >Votar</a>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="KatyPerry.jpg" className="Candidato" />
          </center>
          <center>
            <h3>Katy Perry</h3>
            <a href="#" className="btn btn-primary" onClick={handleonClick}>Votar</a>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="TomHolland.jpg" className="Candidato" />
          </center>
          <center>
            <h3>Tom Holland</h3>
            <a href="#" className="btn btn-primary" onClick={handleonClick}>Votar</a>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="AndrewGarfield.jpg" className="Candidato" />
          </center>
          <center>
            <h3>Andrew Garfield</h3>
            <a href="#" className="btn btn-primary" onClick={handleonClick}>Votar</a>
          </center>
        </div>
        </div>

          </>
        )
      }
