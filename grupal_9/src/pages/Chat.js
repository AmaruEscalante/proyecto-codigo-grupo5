import React from 'react'
import '../assets/chat.css'
import Alumno from '../assets/img/alumno.png'
import Profesor from '../assets/img/profesor.svg'

export default function Chat() {
    return (
        <div className="chat">
            <div className="container">
                <div className="box alumno">
                    <img src={Alumno} className="imagen"></img>
                    <p>Hello. How are you today?</p>
                </div>

                <div className="box profesor">
                    <img src={Profesor} className="imagen"></img>
                    <p>Hey! I'm fine. Thanks for asking!</p>
                </div>

                <div className="box alumno">
                    <img src={Alumno} className="imagen"></img>
                    <p>Sweet! So, what do you wanna do today?</p>
                </div>

                <div className="box profesor">
                    <img src={Profesor} className="imagen"></img>

                    <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                </div>
            </div>
        </div>
    )
}
