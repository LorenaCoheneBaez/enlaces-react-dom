import React from "react";
import image from "../assets/images/logo-DH.png";
import { Link, Outlet } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar">
        {/*<!-- Sidebar - Brand -->*/}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/" >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Digital House" />
          </div>
        </Link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DH movies</span>
          </a>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>
        {/**Cada Link debe terminar con la etiqueta <Outlet /> importada!!!!*/}
        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/lastMovie">
            <i className="fas fa-fw fa-folder"></i>
            <span>Última Película</span>
          </Link>
           <Outlet />
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/metric">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Métricas</span>
          </Link>
          <Outlet />
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/movies">
            <i className="fas fa-fw fa-table"></i>
            <span>Películas</span>
          </Link>
          <Outlet />
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/genre">
            <i className="fas fa-fw fa-table"></i>
            <span>Géneros</span>
          </Link>
        <Outlet />
        </li>
        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
    </React.Fragment>
  );
}
export default SideBar;



