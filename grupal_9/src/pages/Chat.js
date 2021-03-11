import React from 'react'
import '../assets/chat.css'
import Alumno from '../assets/img/alumno.png'
import Profesor from '../assets/img/profesor.svg'
import Clip from '../assets/img/clip.png'

export default function Chat() {
    return (
        <div className="chat">
            <div className="container">

                <div class="card teacher">
                    <div class="card-body">
                        <div className="card-title">
                            <img src={Profesor} class="card-img-top" alt="..."></img>
                            <h5>Luis</h5>
                        </div>

                        <p class="card-text">Buenos días, en qué puedo ayudarte?</p>
                    </div>
                </div>

                <div class="card student">
                    <div class="card-body">
                        <div className="card-title">
                            <img src={Alumno} class="card-img-top" alt="..."></img>
                            <h5>User</h5>
                        </div>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div class="card student">
                    <div class="card-body">
                        <div className="card-title">
                            <img src={Alumno} class="card-img-top" alt="..."></img>
                            <h5>User</h5>
                        </div>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            <form class="form-inline">
                <input class="form-control mr-sm-2 form" type="search" placeholder="Escribe tu mensaje" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    <img src={Clip}></img>
                </button>
            </form>
            </div>
        </div>
    )
}
