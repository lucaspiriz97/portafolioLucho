import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../Main/Home';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Productos from '../Main/Productos/Productos';
import Contacto from '../Main/Contacto/Contacto';
import './Diseño/Nav.css';


const Header = () => {

    return (
        <Router>
            <Navbar bg="light" variant="light" expand="lg">
                <Container fluid className="container-nav">
                {/* <Image src="/img/logo/logo.jpg" className="logo"/> */}
                <h3 className="logo">Lucio Caneva</h3> 
                
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link to='/'>Inicio</Link></Nav.Link>
                                <Nav.Link><Link to="/productos">Productos</Link></Nav.Link>
                                <Nav.Link><Link to="/contacto">Contacto</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Header;