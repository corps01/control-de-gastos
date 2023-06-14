import React, { useState } from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import { TransactionChart } from "./AnalyticsChart";

export const Analytics = () => {
  const [showChart, setShowChart] = useState(false);
  const handleToggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <Container className="analytics pt-2">
      {showChart && <TransactionChart />}

      <div onClick={handleToggleChart} className="pt-2">
        <p>{showChart ? "Cerrar" : "Mostrar Analiticas"}</p>

        {!showChart && (
          <div className="svg-container">
            <svg
              fill="lightgrey"
              height="10px"
              width="10px"
              id="Layer_1"
              viewBox="0 0 330 330"
            >
              <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
            </svg>
          </div>
        )}
      </div>
    </Container>
  );
};
