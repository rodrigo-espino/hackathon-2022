import React from 'react'
export function Candidatos() {
  return (
    <div className="col-md-8">
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Partido</th>
      <th scope="col">Cartera</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Independiente</td>
      <td>0xB3b3C662B547eBc3cDE4C481d9fB63f03a8d90Eb</td>
      <td>
      <button type="button" class="btn btn-secondary">Editar</button>
      </td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Jose</td>
      <td>Independiente</td>
      <td>0xB3b3C662B547eBc3cDE4C481d9fB63f03a8d90Eb</td>
      <td>
      <button type="button" class="btn btn-secondary">Editar</button>
      </td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Jesus</td>
      <td>Independiente</td>
      <td>0xB3b3C662B547eBc3cDE4C481d9fB63f03a8d90Eb</td>
      <td>
      <button type="button" class="btn btn-secondary">Editar</button>
      </td>
    </tr>
  </tbody>
  <button type="button" class="btn btn-primary">Agregar</button>
</table>
    </div>
  )
}

