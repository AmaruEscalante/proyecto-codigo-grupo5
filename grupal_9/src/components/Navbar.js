import $ from 'jquery';
import '../assets/sidebar.css';
import '../assets/navbar.css';

export default function Navbar({handleLogout}) {


    return (
        <div className="custom-navbar" id="page-content-wrapper">

        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button className="btn btn-primary toggle" id="menu-toggle" onClick={function(e){
              e.preventDefault();
              $("#wrapper").toggleClass("toggled");
              $("#page-content-wrapper").toggleClass("toggle-navbar");
          }}>Mostrar Menú</button>
  
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Buscar"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Usuario
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Perfil</a>
                  <a className="dropdown-item" href="#">Configuración</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" onClick={handleLogout} href="#">Cerrar Sesión</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {/* <Content></Content> */}
      </div>
    )
}
