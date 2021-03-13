import { NavLink } from 'react-router-dom';
import '../assets/sidebar.css'

export default function Sidebar() {
    return (
        <div>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading logo">Luteach</div>
                <div className="list-group list-group-flush">
                    <NavLink to="/home" className="list-group-item list-group-item-action bg-light" data-toggle="list">Inicio</NavLink>
                    <NavLink to="/stats" className="list-group-item list-group-item-action bg-light" data-toggle="list">Estadísticas</NavLink>
                    <NavLink to="/chat" className="list-group-item list-group-item-action bg-light" data-toggle="list">Clientes</NavLink>
                    <NavLink to="/luteachers" className="list-group-item list-group-item-action bg-light" data-toggle="list">Luteachers</NavLink>
                </div>
            </div>
        </div>
    )
}
