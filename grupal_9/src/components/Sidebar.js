import { Link } from 'react-router-dom';
import '../assets/sidebar.css'

export default function Sidebar() {
    return (
        <div>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="logo sidebar-heading">Luteach</div>
                <div className="list-group list-group-flush">
<<<<<<< HEAD
                    <Link to="/" className="list-group-item list-group-item-action bg-light">Inicio</Link>
                    <Link to="/stats" className="list-group-item list-group-item-action bg-light">Estadísticas</Link>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Clientes</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Luteachers</a>
=======
                    <Link to="/" className="list-group-item list-group-item-action bg-light" data-toggle="list">Inicio</Link>
                    <Link to="/stats" className="list-group-item list-group-item-action bg-light" data-toggle="list">Estadísticas</Link>
                    <Link to="/chat" className="list-group-item list-group-item-action bg-light" data-toggle="list">Clientes</Link>
                    <Link to="/luteachers" className="list-group-item list-group-item-action bg-light" data-toggle="list">Luteachers</Link>
>>>>>>> 32764a41b96f8f5202169f9937df90823a599b16
                </div>
            </div>
        </div>
    )
}
