import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

export function Resultados() {
let navigate = useNavigate();
  // usetstate for storing and retrieving wallet details
  const [addres, setaddres] = useState();

  const accountChangeHandler = (account) => {
    setaddres(account);
  };
  const btnhandler = () => {

    if (window.ethereum) {
  
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
    if(addres){
      navigate("/voting");
    }
  };

  

  return (
    <>
    <div className="d-grid gap-2">
    <button type="button" className="btn btn-info " onClick={btnhandler} >Votar</button>
    </div>
    <br /> <br />
      <div className="row">
        <div className="col-md-3">
          <center>
            <img src="esteban.jpeg" className="Candidato" />
          </center>
          <center>
            <h3>Esteban Villegas</h3>
            <h1>10,000 votos</h1>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="patricia_flores.jpeg" className="Candidato" />
          </center>
          <center>
            <h3>Patricia Flores</h3>
            <h1>344 votos</h1>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="marina.jpeg" className="Candidato" />
          </center>
          <center>
            <h3>Marina Vitela</h3>
            <h1>3,466 votos</h1>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="independiente.jpeg" className="Candidato" />
          </center>
          <center>
            <h3>Candidato Indep.</h3>
            <h1>5,463 votos</h1>
          </center>
        </div>
        
        <div className="col-md-20">
          <br /><br />
        <table className="table">
          <thead>
            <th scope="row"> Ciudadano </th>
            <td colspan="2" className="table-active">
              Voto por
            </td>
            <td>Hora de votación</td>
          </thead>
          <tbody>
            <tr className="table-active">
              <th scope="row">Ciudadano#1</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>

            <tr>
              <th scope="row">Ciudadano#2</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>
            <tr>
            <th scope="row">Ciudadano#3</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>
            <tr>
            <th scope="row">Ciudadano#4</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>
            <tr>
            <th scope="row">Ciudadano#5</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>
            <tr>
            <th scope="row">Ciudadano#6</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>
            <tr>
            <th scope="row">Ciudadano#7</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>
            <tr>
            <th scope="row">Ciudadano#8</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>
            <tr>
            <th scope="row">Ciudadano#9</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>
            <tr>
            <th scope="row">Ciudadano#10</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>
            <tr>
            <th scope="row">Ciudadano#11</th>
              <td colspan="2" className="table-active">
              0xDB3E4A8a8055b951421c6fB2D7588794f2b26b4f
              </td>
              <td> 00:00 </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}
