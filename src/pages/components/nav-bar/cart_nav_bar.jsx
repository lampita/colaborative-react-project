import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { Col, Row } from "react-bootstrap";

function CartNavBar() {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Container fluid style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,109,147,1) 46%, rgba(10,46,54,1) 100%);" }}>
        
            <Image
              src="nav-bar/logo.jpg"
                    style={{ width: "55px", backgroundColor: "red",}}
            />

            <Navbar.Brand className="col-3" href="#home" style={{ backgroundColor: "red" }}>
              Maluma-Store
            </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="col-3" id="responsive-navbar-nav">
            <Container style={{
                backgroundColor: "black",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                
              }}>
   <InputGroup  style={{ backgroundColor: "purple", width:"80%"}}>
              <Form.Control placeholder="Buscador" aria-label="Buscador" />
              <Button variant="outline-secondary">Buscar</Button>
            </InputGroup>
            <div

              style={{
                backgroundColor: "orange",
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                
              }}
            >
              <img src="/nav-bar/carrito.svg" alt="" />
              <Badge bg="danger">0</Badge>
            </div>
            </Container>
          </Navbar.Collapse>
     
      </Container>
    </Navbar>
  );
}

export default CartNavBar;
