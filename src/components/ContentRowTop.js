import React from "react";
import ContentRowCenter from "./ContentRowCenter";
import ContentRowMovies from "./ContentRowMovies";
import Chart from "./Chart";

import { Routes, Route,  } from "react-router-dom";

function ContentRowTop() {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        {/*Paso por route el nombre de la ruta 'exacto' y el componente, no va **component** que de mostrará*/}
        {/*Según la documentación más de una ruta debe ir dentro de Routes y los **element** como elemento JSX  */}
        <Routes>
          <Route exact path="/metric" element={<ContentRowMovies />} />


          <Route exact path="/movies" element={<Chart />} />
          
        </Routes>
            <ContentRowCenter />
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
