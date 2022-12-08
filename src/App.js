import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

// Importando el compontente Header a nuestra aplicación

import Header from './Components/Header';
import CardImagen from './Components/CardImagen';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header className="headerGaleria" titulo="Galería de Imágenes con React"></Header>
      <Container>
        <Row>
          <Col>
            <CardImagen imagen="https://cdn.pixabay.com/photo/2018/07/05/23/31/ivy-3519431_960_720.jpg" titulo="Plantas" descripcion="Foto de plantas"></CardImagen>
          </Col>
          <Col>
            <CardImagen imagen="https://cdn.pixabay.com/photo/2014/08/29/03/02/horses-430441_960_720.jpg" titulo="Animales" descripcion="Foto de animales"></CardImagen>
          </Col>
          <Col>
            <CardImagen imagen="https://cdn.pixabay.com/photo/2015/12/30/11/57/fruits-1114060_960_720.jpg" titulo="Frutas" descripcion="Foto de frutas"></CardImagen>
          </Col>
        </Row>
      </Container>
      <Footer texto="Todos los derechos reservados @2022"></Footer>
    </div>
  );
}

export default App;
