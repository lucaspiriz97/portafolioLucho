import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../Main/Home';
import Container from 'react-bootstrap/Container';
import FotoAutoral from '../Main/Proyectos/FotoAutoral'; /* AGREGAR SEGUN PROYECTOS */
import Teatro from '../Main/Proyectos/Teatro';
import FotoFija from '../Main/Proyectos/FotoFija';
import Artistas from '../Main/Proyectos/Artistas';
import FotoInfantil from '../Main/Proyectos/FotoInfantil';
import AcercaDeMi from '../Main/AboutUs/AcercaDeMi';
import './Diseño/Nav.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <Router>
            <Navbar bg="light" variant="light" expand="lg">
                <Container fluid className="container-nav">
                    <Link to="/"><h3 className="logo" >Lucio<br/>Caneva</h3></Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'>Inicio</Link></Nav.Link>

                            {/* DROPDOWN DE PROYECTOS */}
                            <div className="nav-dropdown-wrapper">
                                <Link className="nav-link proyectos-link">Proyectos</Link>
                                <div className="nav-dropdown-menu">
                                    <Link to="/fotoautoral" className="nav-dropdown-item">Foto autoral</Link>
                                    <Link to="/teatro" className="nav-dropdown-item">Teatro</Link>
                                    <Link to="/fotofija" className="nav-dropdown-item">Foto fija</Link>
                                    <Link to="/artistas" className="nav-dropdown-item">Artistas</Link>
                                    <Link to="/fotoinfantil" className="nav-dropdown-item">Foto infantil</Link>
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
                    <Route path="/teatro" element={<Teatro />} />
                    <Route path="/fotoautoral" element={<FotoAutoral />} />
                    <Route path="/fotofija" element={<FotoFija />} />
                    <Route path="/artistas" element={<Artistas />} />
                    <Route path="/fotoinfantil" element={<FotoInfantil />} />
                    <Route path="/acercademi" element={<AcercaDeMi />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Header;