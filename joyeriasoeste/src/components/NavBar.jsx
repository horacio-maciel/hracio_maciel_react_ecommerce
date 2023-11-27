import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CardWidget";

import  Products  from "./data/Products";

const categories = Products.map((item) => item.category);
const uniqueCategories = new Set(categories);

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
               <NavLink to="/">
                <Navbar.Brand>Joyeriasoeste</Navbar.Brand>
                </NavLink> 
                <Nav className="me-auto">
                    {[...uniqueCategories].map((item) => (
                        <Nav.Link as={NavLink} key={item} to={`/category/${item}`} className="nav-link">
                            {item}
                        </Nav.Link>
                    ))}
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
};




// export const NavBAr = () => {
//     return (
//         <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Joyeriasoeste</Navbar.Brand>
//           <Nav className="me-auto">
//                 { [...uniqueCategories].map((item) => (
//                 <Nav.Link key={item} to={item}>{item}</Nav.Link>
//                 ))}
//           </Nav>
//            < CartWidget />
//         </Container>
//       </Navbar>
          
           
//     )
// };