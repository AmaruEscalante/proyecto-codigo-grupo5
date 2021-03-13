import React from 'react'
import '../assets/chat.css'
import Alumno from '../assets/img/alumno.png'
import Profesor from '../assets/img/profesor.svg'
import Clip from '../assets/img/clip.png'

export default function Chat() {
    return (
        <div className="chat">
            <div className="container">

                <div id="card" className="teacher">
                    <div id="card-body">
                        <div id="card-title">
                            <img src={Profesor} className="card-img-top" alt="..."></img>
                            <h5>Luis</h5>
                        </div>

                        <p className="card-text">Buenos días, en qué puedo ayudarte?</p>
                    </div>
                </div>

                <div id="card" className="student">
                    <div id="card-body">
                        <div id="card-title">
                            <img src={Alumno} className="card-img-top" alt="..."></img>
                            <h5>User</h5>
                        </div>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div id="card" className="student">
                    <div id="card-body">
                        <div id="card-title">
                            <img src={Alumno} class="card-img-top" alt="..."></img>
                            <h5>User</h5>
                        </div>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            <form className="form-inline">
                <input className="form-control mr-sm-2 form" id="message" type="search" placeholder="Escribe tu mensaje" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                    <img src={Clip}></img>
                </button>
            </form>
            </div>
        </div>
    )
}