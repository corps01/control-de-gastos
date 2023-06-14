import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalState";
import "./index.css";

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
  const { setMonth, currentMonth } = useContext(GlobalContext);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handleMonthClick = (month) => {
    setMonth(month);
    setSelectedMonth(month);
  };

  return (
    <header>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col className="d-flex flex-row overflow-auto header">
            {months.map((month, index) => (
              <div
                className={`px-3 ${selectedMonth === month ? "bold" : "date"}`}
                key={index}
                onClick={() => handleMonthClick(month)}
              >
                {month}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </header>
  );
};
