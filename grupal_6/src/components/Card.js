import style from '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card(){
    return (
        <div className="card card-custom">
        <div className="card-header border-0 pt-3">
            <h3 className="d-flex card-title align-items-start flex-column">
                <span className="card-label fw-bolder">Cursos Vendidos</span>
                <span># ventas</span>
            </h3>
            <div className="card-toolbar">
                <ul className="nav nav-pills nav-pills-sm" role="tablist">
                    <li className="nav-item custom-nav">
                        <button className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active" data-bs-toggle="tab" data-bs-target="#dia" role="tab">Dia</button>
                    </li>
                    <li className="nav-item custom-nav">
                        <button className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" data-bs-toggle="tab" data-bs-target="#mes" role="tab">Mes</button>
                    </li>
                    <li className="nav-item custom-nav">
                        <button className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" data-bs-toggle="tab" data-bs-target="#ciclo" role="tab">Ciclo</button>
                    </li>
                </ul>
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
    )
}