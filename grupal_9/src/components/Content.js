import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../assets/sidebar.css'



export default function Content() {
    return (
        <div>
            {/* Aquí va el contenido general */}
            <div className="container-fluid" id="contenido">
                <h1 className="mt-4">Estadísticas por Universidad</h1>

                {/* Botones */}
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary">Días</button>
                    <button type="button" className="btn btn-outline-primary">Semanas</button>
                    <button type="button" className="btn btn-outline-primary">Meses</button>
                    <button type="button" className="btn btn-outline-primary">Semestre</button>
                </div>

                {/* Gráficas */}

                {/* Tops */}
                <div className="card-group mt-4">
                    <div className="card border-secondary">
                        <div className="card-header gaa">Cursos Top Vendidos</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Curso</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card border-secondary">
                        <div className="card-header gaa">Problemas</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Usuario</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card border-secondary">
                        <div className="card-header gaa">Productos Top</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Productos</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                {/* Tabla cursos */}
                <div className="card card-custom mt-4 mb-3">
                    <div className="card-header border-0 pt-3">
                        <h3 className="d-flex card-title align-items-start flex-column">
                            <span className="card-label fw-bolder">Cursos Vendidos</span>
                            <span># ventas</span>
                        </h3>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-secondary">Left</button>
                            <button type="button" class="btn btn-secondary">Middle</button>
                            <button type="button" class="btn btn-secondary">Right</button>
                        </div>

                    </div>
                    <div className="card-body">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="dia" role="tabpanel">
                                <div className="table-responsive-md">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Cursos</th>
                                                <th scope="col">Individuales</th>
                                                <th scope="col">Grupales</th>
                                                <th scope="col">Ingresos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Mate 1</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                            <tr>
                                                <th>Quimica</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                            <tr>
                                                <th>ICC</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                            <tr>
                                                <th>Fisica 1</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="mes" role="tabpanel">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Cursos</th>
                                                <th scope="col">Individuales</th>
                                                <th scope="col">Grupales</th>
                                                <th scope="col">Ingresos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Mate 1</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                            <tr>
                                                <th>Quimica</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                            <tr>
                                                <th>ICC</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                            <tr>
                                                <th>Fisica 1</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ciclo" role="tabpanel">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Cursos</th>
                                                <th scope="col">Individuales</th>
                                                <th scope="col">Grupales</th>
                                                <th scope="col">Ingresos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Mate 1</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                            <tr>
                                                <th>Quimica</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                            <tr>
                                                <th>ICC</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                            <tr>
                                                <th>Fisica 1</th>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>S/.1200</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
