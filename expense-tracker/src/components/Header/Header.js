import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="d-flex flex-row overflow-auto">
            {months.map((month, index) => (
              <div className="px-3" key={index}>
                {month}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </header>
  );
};
