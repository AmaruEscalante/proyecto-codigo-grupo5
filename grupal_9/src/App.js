import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Navbar from '../src/components/Navbar'
import Sidebar from '../src/components/Sidebar'
import './assets/sidebar.css'


export default function App() {
  return (
    <div>
      <div className="d-flex" id="wrapper">
        <Sidebar></Sidebar>
        <Navbar></Navbar>
      </div>
    </div>
  )
}
