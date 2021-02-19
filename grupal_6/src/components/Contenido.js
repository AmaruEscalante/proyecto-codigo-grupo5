import style from '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import graficos from '../img/graficos.jpg';
import graficos1 from '../img/graficos1.jpg';
import graficos2 from '../img/graficos2.jpg';
import Container from 'react-bootstrap/Container'

import Card from './Card'

export default function Contenido() {
    return (
        <Container fluid>

            <h1 className="mt-4">Estadísticas por Universidad</h1>
            {/* Botones */}
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary">Días</button>
                <button type="button" className="btn btn-outline-primary">Semanas</button>
                <button type="button" className="btn btn-outline-primary">Meses</button>
                <button type="button" className="btn btn-outline-primary">Semestre</button>
            </div>

            {/* Gráficos */}
            <div className="card-group mt-4 mb-3">
                <div className="card text-center bg-dark text-white border-warning">
                    <img src={graficos} className="card-img-top" alt="..."></img>
                    <div className="card-body bg-light text-dark">
                        <h5 className="card-title">Satisfacción</h5>
                        <p className="card-text">Descripción 1</p>
                    </div>
                </div>
                <div className="card text-center bg-dark text-white border-warning">
                    <img src={graficos1} className="card-img-top" alt="..."></img>
                    <div className="card-body bg-light text-dark">
                        <h5 className="card-title">Clientes recurrentes</h5>
                        <p className="card-text">Descripción 2</p>
                    </div>
                </div>
                <div className="card text-center bg-dark text-white border-warning">
                    <img src={graficos2} className="card-img-top" alt="..."></img>
                    <div className="card-body bg-light text-dark">
                        <h5 className="card-title">Nuevos clientes</h5>
                        <p className="card-text">Descripción 3</p>
                    </div>
                </div>
            </div>

            {/* Tops */}
            <div className="row row-cols-1">
                <div className="card border-secondary mb-3 ml-3 mr-3" style={{ 'maxWidth': '20em' }}>
                    <div className="card-header">Cursos Top Vendidos</div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title">Curso</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="card border-secondary mb-3 ml-3 mr-3" style={{ 'maxWidth': '20em' }}>
                    <div className="card-header">Problemas</div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title">Usuario</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="card border-secondary mb-3 ml-3 mr-3" style={{ 'maxWidth': '20em' }}>
                    <div className="card-header">Productos Top</div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title">Productos</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}