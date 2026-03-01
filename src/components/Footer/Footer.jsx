import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaInstagram, FaTwitter, FaArrowDown } from 'react-icons/fa'; // Importar iconos
import { useState, useEffect } from 'react';
import './Footer.css'; 


const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    useEffect(() => {
        // Actualizar el estado si la pantalla cambia de tamaño
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Container className="footer-links" fluid>
                <Row className="footer">

                    {/* Síguenos */}
                    <Col xs={12} md={4} className="footer-section social mx-auto text-center">
                        <h3 onClick={() => isMobile && toggleSection('social')}>
                            Redes Sociales
                            {isMobile && <FaArrowDown className={`arrow ${activeSection === 'social' ? 'rotated' : ''}`} />}
                        </h3>
                        {!isMobile || activeSection === 'social' ? (
                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size="2em"  className="socialicons"/>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size="2em" className="socialicons"/>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size="2em" className="socialicons"/>
                                </a>
                            </div>
                        ) : null}
                    </Col>

                    {/* Footer inferior */}
                    <Col xs={12} md={12} className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Lucio Caneva. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;
