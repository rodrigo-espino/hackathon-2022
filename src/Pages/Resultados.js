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
            <img src="jonhy.jpg" className="Candidato" />
          </center>
          <center>
            <h3>Jonhy Deep</h3>
            <h1>1851862 votos</h1>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="KatyPerry.jpg" className="Candidato" />
          </center>
          <center>
            <h3>Katy Perry</h3>
            <h1>1868486 votos</h1>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="TomHolland.jpg" className="Candidato" />
          </center>
          <center>
            <h3>Tom Holland</h3>
            <h1>186486486 votos</h1>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <img src="AndrewGarfield.jpg" className="Candidato" />
          </center>
          <center>
            <h3>Andrew Garfield</h3>
            <h1>46745848 votos</h1>
          </center>
        </div>
        <br /><br />
        <div className="col-md-20">
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
