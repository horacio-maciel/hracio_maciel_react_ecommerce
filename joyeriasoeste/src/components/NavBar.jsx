import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CardWidget";

export const NavBAr = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Joyeriasoeste</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home">Alianzas</Nav.Link>
            <Nav.Link href="#features">Relojes</Nav.Link>
            <Nav.Link href="#pricing">Cadenas</Nav.Link>
          </Nav>
           < CartWidget />
        </Container>
      </Navbar>
          
           
    )
};