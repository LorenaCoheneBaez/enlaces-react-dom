import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import {Routes,  Route } from "react-router-dom";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      {/*Paso por route el nombre de la ruta 'exacto' y el componente que de mostrará*/}
     
        <Routes>
          <Route exact path="/lastMovie" component={LastMovieInDb} />
            
          {/*<!-- End content row last movie in Data Base -->*/}
          
          {/*<!-- Genres in DB -->*/}
          <Route exact path="/genre" component={GenresInDb} />
          
        </Routes>
     
    </div>
  );
}

export default ContentRowCenter;
