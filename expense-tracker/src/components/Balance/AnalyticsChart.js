import React, { useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Chart from "chart.js/auto";

export const TransactionChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const { transactions, currentMonth } = useContext(GlobalContext);
  const data = transactions[currentMonth];

  useEffect(() => {
    if (data && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const chartData = {
        labels: data.map((transaction) => transaction.date),

        datasets: [
          {
            label: "Cantidad",
            data: data.map((transaction) => transaction.amount),
            backgroundColor: "rgb(101,130,248)",
            borderColor: "rgb(101,130,248)",
            borderWidth: 3,
          },
        ],
      };

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "line",
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: true,
              title: {
                display: true,
                text: "$",
              },
            },
            x: {
              display: true,
              title: {
                display: true,
                text: "Días",
              },
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div
      style={{ maxHeight: "350px", display: "flex", justifyContent: "center" }}
    >
      <canvas ref={chartRef} />
    </div>
  );
};
