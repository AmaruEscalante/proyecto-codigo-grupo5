import '../assets/control_panel.css';
import Card from '../components/Card';
import { Bar, Line, Radar } from 'react-chartjs-2'

export default function Home(){
    return (
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
                <div className="container-12 mt-3 ml-3 mr-3">
                    <div className="row">
                        <div className="col-12 col-md-4 barra card bg-light">
                            <Bar
                                data={{
                                    labels: ['UTP', 'U.Lima', 'Pacífico', 'Cayetano H.', 'U. Católica', 'U. Piura',],
                                    datasets: [{
                                        label: 'Cantidad de inscritos',
                                        data: [7, 12, 13, 9, 17, 3],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                        borderWidth: 1,
                                    }],
                                }}
                                height={50}
                                width={50}
                                options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [
                                            {
                                                ticks: {
                                                    beginAtZero: true
                                                }
                                            }
                                        ]
                                    },
                                }}></Bar>
                        </div>

                        <div className="col-12 col-md-4  barra card bg-light">
                            <Line
                                data={{
                                    labels: ['C.Vallejo', 'UPC', 'USIL', 'U. La Cantuta', 'UPeU', 'UPAO',],
                                    datasets: [{
                                        label: 'Cantidad de inscritos',
                                        data: [12, 19, 3, 5, 10, 3],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                        borderWidth: 1,
                                    }],
                                }}
                                height={50}
                                width={50}
                                options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [
                                            {
                                                ticks: {
                                                    beginAtZero: true
                                                }
                                            }
                                        ]
                                    },
                                }}></Line>
                        </div>

                        <div className="col-12 col-md-4  barra card bg-light">
                            <Radar
                                data={{
                                    labels: ['UNMSM', 'UNI', 'F.Villareal', 'U.Callao', 'USMP', 'USJB',],
                                    datasets: [{
                                        label: 'Cantidad de inscritos',
                                        data: [18, 4, 7, 9, 13, 15],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                        borderWidth: 1,
                                    }],
                                }}
                                height={50}
                                width={50}
                                options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [
                                            {
                                                ticks: {
                                                    beginAtZero: true
                                                }
                                            }
                                        ]
                                    },
                                }}></Radar>


                        </div>

                    </div>
                    {/* Tops */}
                </div>
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
                <Card/>
            </div>
    )

}