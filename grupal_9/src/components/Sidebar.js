import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../assets/sidebar.css'

export default function Sidebar() {
    return (
        <div>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Start Bootstrap </div>
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action bg-light">Inicio</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Stats por Universidad</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Clientes</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Luteachers</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Postulantes</a>
                </div>
            </div>
        </div>
    )
}
