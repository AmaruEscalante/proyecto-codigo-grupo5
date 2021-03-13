import axios from 'axios';
import { Fragment, useState, useEffect } from 'react';
import './Card.css';

export default function Card(){
    const url = 'https://603c3566f4333a0017b6742d.mockapi.io/admin/v0/';
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get(`${url}sold_courses`)
        .then((res) => {
            const sold_courses = res.data;
            setCourses(sold_courses)
        })
    }, []);
    

    return(<Fragment>
        <div className="col-xl-4">
            <div className="card card-custom mt-4 mb-3">
            <div className="d-flex card-header border-0 pt-3 justify-content-between">
                <h3 className="d-inline-flex card-title align-items-start flex-column">
                    <span className="card-label fw-bolder">Cursos Vendidos</span>
                    <span># ventas</span>
                </h3>
                <div className="d-inline-flex card-toolbar">
                    <ul className="nav nav-pills nav-pills-sm" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link btn btn-color-muted font-weight-bold mr-2 active"  data-toggle="pill" href="#dia" role="tab">Dia</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link btn btn-color-muted font-weight-bold mr-2" data-toggle="pill" href="#mes" role="tab">Mes</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link btn btn-color-muted font-weight-bold mr-2" data-toggle="pill" href="#ciclo" role="tab">Ciclo</a>
                        </li>
                    </ul>
                </div>
            

            </div>
            <div className="card-body">
                <div className="tab-content" id="pills-tabContent">
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
                                    {courses.map((item) => {
                                        return(
                                            <tr>
                                            <th>{item.name}</th>
                                            <td>{item.individual}</td>
                                            <td>{item.group}</td>
                                            <td>S/.{item.revenue}</td>
                                            </tr>
                                        )
                                    })}
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
    </Fragment>
    )

}
