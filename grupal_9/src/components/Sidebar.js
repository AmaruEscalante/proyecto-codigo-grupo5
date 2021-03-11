import { Link } from 'react-router-dom';
import '../assets/sidebar.css'

export default function Sidebar() {
    return (
        <div>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="logo sidebar-heading">Luteach</div>
                <div className="list-group list-group-flush">
                    <Link to="/" className="list-group-item list-group-item-action bg-light" data-toggle="list">Inicio</Link>
                    <Link to="/stats" className="list-group-item list-group-item-action bg-light" data-toggle="list">Estadísticas</Link>
                    <a href="#" className="list-group-item list-group-item-action bg-light" data-toggle="list">Clientes</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light" data-toggle="list">Luteachers</a>
                </div>
            </div>
        </div>
    )
}
