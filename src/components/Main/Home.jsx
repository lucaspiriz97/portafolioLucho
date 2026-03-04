import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de tener esto en tu proyecto
import "./Diseño/Home.css";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";

const fotos = [
  {
    id: 1,
    src: "/img/fotos_lucho/FOTO AUTORAL/IMG_8364.jpg",
    alt: "Foto autoral",
    caption: "Centro porteño",
  },
  {
    id: 2,
    src: "/img/fotos_lucho/FOTO AUTORAL/IMG_8430.jpg",
    alt: "Foto autoral",
    caption: "Centro porteño",
  },
  {
    id: 3,
    src: "/img/fotos_lucho/FOTO FIJA/RUGE/RUGE_LUCIO_CANEVA_-8.jpg",
    alt: "Película",
    caption: "RUGE",
  },
  {
    id: 4,
    src: "/img/fotos_lucho/FOTO FIJA/RUGE/RUGE_LUCIO_CANEVA_-28.jpg",
    alt: "Película",
    caption: "RUGE",
  },
  {
    id: 5,
    src: "/img/fotos_lucho/OBRA DE TEATRO/IMG_4991.jpg",
    alt: "Obra de teatro",
    caption: "Nombre de la obra",
  },
];

const dataCartas = [
  {
    id: 1,
    titulo: "Foto autoral",
    alt: "Foto autoral",
    src: "/img/fotos_lucho/FOTO AUTORAL/00-2.jpg",
    descripcion:
      "foto sacada en la calle con un lente muy bueno corte perri loki naya",
  },
  {
    id: 2,
    titulo: "Foto autoral",
    alt: "Foto autoral",
    src: "/img/fotos_lucho/FOTO AUTORAL/00.jpg",
    descripcion:
      "foto sacada en la calle con un lente muy bueno corte perri loki naya",
  },
  {
    id: 3,
    titulo: "Foto autoral",
    alt: "Foto autoral",
    src: "/img/fotos_lucho/FOTO AUTORAL/0198.jpg",
    descripcion:
      "foto sacada en la calle con un lente muy bueno corte perri loki naya",
  },
  {
    id: 4,
    titulo: "Foto autoral",
    alt: "Foto autoral",
    src: "/img/fotos_lucho/FOTO AUTORAL/00-3.jpg",
    descripcion:
      "foto sacada en la calle con un lente muy bueno corte perri loki naya",
  },
  {
    id: 5,
    titulo: "Foto autoral",
    alt: "Foto autoral",
    src: "/img/fotos_lucho/FOTO AUTORAL/00-4.jpg",
    descripcion:
      "foto sacada en la calle con un lente muy bueno corte perri loki naya",
  },
  {
    id: 6,
    titulo: "Foto autoral",
    alt: "Foto autoral",
    src: "/img/fotos_lucho/FOTO AUTORAL/0198-9.jpg",
    descripcion:
      "foto sacada en la calle con un lente muy bueno corte perri loki naya",
  },
];

const Home = () => {
  return (
    <main className="home">
      {/*<h1 className="titulo"></h1>*/}
      <Carousel fade>
        {fotos.map((foto) => (
          <Carousel.Item key={foto.id}>
            <img
              className="d-block w-100"
              src={foto.src}
              alt={foto.alt}
              style={{ maxHeight: "600px", objectFit: "cover" }} // Ajusta altura si querés
            />
            <Carousel.Caption>
              <h3>{foto.alt}</h3>
              <p>{foto.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="cartas">
        <Row xs={1} sm={2} md={3} className="g-3">
          {dataCartas.map((carta, index) => (
            <Col key={carta.id}>
              <Card className="cartasInt h-100">
                <Card.Img variant="top" src={carta.src} />
                <Card.Body>
                  <Card.Title className="fw-bold">{carta.titulo}</Card.Title>
                  <Card.Text>{carta.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
};

export default Home;
