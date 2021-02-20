import style from './styles/styles.css'
import Navbar from './components/Navbar';
import Barralateral from './components/Barralateral';
import Contenido from './components/Contenido';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="d-flex" id="wrapper">
        <Col xs={2}>
        <Barralateral></Barralateral>
        </Col>
        <Col xs={10}>
        <Contenido></Contenido>
        <Card/>
        </Col>
      </div>
    </div>
  );
}


export default App;
