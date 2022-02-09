import React from 'react';
import imagenHome from '../assets/images/stormtrooper.jpg';

export default function Home() {
  return (
    <div>
      <h1>¡Bienvenid@!</h1>
      <div className="card-body">
        <div className="text-center">
          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={imagenHome} alt=" Star Wars - stormtrooper " />
        </div>
        </div>

    </div>
  )
}
