import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

function CartNavBar() {
  return (
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
      <Container style={{backgroundColor:"green" }}>
        <Image src="nav-bar/logo.jpg" fluid style={{ width: "55px", backgroundColor:"red" }} />
        <Navbar.Brand href="#home" style={{backgroundColor:"red" }}>Maluma-Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <InputGroup style={{backgroundColor:"purple" }}> 
            <Form.Control placeholder="Buscador" aria-label="Buscador" />
            <Button variant="outline-secondary">Button</Button>
          </InputGroup>
          <div style={{backgroundColor:"orange", display:"flex", flexWrap:"nowrap", alignItems:"center"}}>
            <img src="/nav-bar/carrito.svg" alt="" />
            <Badge bg="secondary">0</Badge>
           
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CartNavBar;
