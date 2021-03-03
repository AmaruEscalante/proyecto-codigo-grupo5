import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo2.png';


export default function Barralateral() {
    return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <link rel="stylesheet" href="simple-sidebar.css"></link>
                <div className="sidebar-heading">
                    <img src={logo} alt=""/>
                </div>
                <div className="list-group list-group-flush">
                    <a href={'#'} className="list-group-item list-group-item-action bg-light">Inicio</a>
                    <a href={'#'} className="list-group-item list-group-item-action bg-light">Stats por Universidad</a>
                    <a href={'#'} className="list-group-item list-group-item-action bg-light">Clientes</a>
                    <a href={'#'} className="list-group-item list-group-item-action bg-light">Luteachers</a>
                    <a href={'#'} className="list-group-item list-group-item-action bg-light">Postualantes</a>
                </div>
            </div>
    )
}
