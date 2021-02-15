import style from '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Barralateral() {
    return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <link rel="stylesheet" href="simple-sidebar.css"></link>
                <div className="sidebar-heading">Luteach</div>
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action bg-light">Inicio</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Stats por Universidad</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Clientes</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Luteachers</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Postualantes</a>
                </div>
            </div>
    )
}
