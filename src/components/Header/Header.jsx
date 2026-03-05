import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../Main/Home';
import Container from 'react-bootstrap/Container';
import Proyectos from '../Main/Proyectos/Proyectos'; /* AGREGAR SEGUN PROYECTOS */
import AcercaDeMi from '../Main/AboutUs/AcercaDeMi';
import './Diseño/Nav.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <Router>
            <Navbar bg="light" variant="light" expand="lg">
                <Container fluid className="container-nav">
                    <h3 className="logo">Lucio<br/>Caneva</h3>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'>Inicio</Link></Nav.Link>

                            {/* DROPDOWN DE PROYECTOS */}
                            <div className="nav-dropdown-wrapper">
                                <Link className="nav-link proyectos-link">Proyectos</Link>
                                <div className="nav-dropdown-menu">
                                    <Link to="/proyectos/foto-autoral" className="nav-dropdown-item">Foto autoral</Link>
                                    <Link to="/proyectos/retrato" className="nav-dropdown-item">Retrato</Link>
                                    <Link to="/proyectos/urbano" className="nav-dropdown-item">Urbano</Link>
                                    <Link to="/proyectos/documental" className="nav-dropdown-item">Documental</Link>
                                </div>
                            </div>

                            <Nav.Link><Link to="/acercademi">Acerca de mi</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/proyectos/:categoria" element={<Proyectos />} />
                    <Route path="/acercademi" element={<AcercaDeMi />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Header;