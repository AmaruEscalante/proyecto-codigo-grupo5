import React from 'react'
import '../assets/luteachers.css'
import { Bar, Line, Radar } from 'react-chartjs-2'



export default function Luteachers() {
    return (
        <div className="container_luteacher">
            <div className="chart_luteachers">
                <div class="card" style={{ minWidth: "30rem" }}>
                    <div class="card-body grafico">
                        <h5 class="card-title titulo">Lista de Luteachers</h5>

                        {/* Inicio gráfica */}
                        <div className="container-12">
                            <div className="row barra">

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
                                    height={150}
                                    width={200}
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

                        </div>


                        {/* Fin gráfica */}

                        <div class="btn-group">
                            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Seleccionar </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Semana</a>
                                <a class="dropdown-item" href="#">Mes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
