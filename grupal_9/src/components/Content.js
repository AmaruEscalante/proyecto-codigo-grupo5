import { Fragment } from 'react';
import '../assets/sidebar.css'
import Navbar from './Navbar';

export default function Content(props) {
    return (
        <div>
            <Navbar/>
            {props.children}
            {/* Aquí va el contenido general */}
            
        </div>
    )
}
