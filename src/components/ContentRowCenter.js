import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";

import {Routes,  Route } from "react-router-dom";

function ContentRowCenter() {
  return (
    <div className="row">
    {/*<!-- Last Movie in DB -->*/}
      {/*Paso por route el nombre de la ruta 'exacto' y el componente que de mostrará*/}
      {/*Paso por route el nombre de la ruta 'exacto' y el componente que de mostrará*/}
      {/*Según la documentación más de una ruta debe ir dentro de Routes y los componentes como elemento JSX  */}
        <Routes>
          <Route exact path="/lastMovie" element={<LastMovieInDb/>} />
            
          {/*<!-- End content row last movie in Data Base -->*/}
          
          {/*<!-- Genres in DB -->*/}
          <Route exact path="/genre" element={<GenresInDb/>} />
        
          
        </Routes>
     
    </div>
  );
}

export default ContentRowCenter;
