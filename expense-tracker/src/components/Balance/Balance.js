import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IncomeExpenses } from "./IncomeExpenses";
import { Container } from "react-bootstrap";
import "./index.css";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Balance = () => {
  const { transactions, currentMonth } = useContext(GlobalContext);

  const amounts = transactions[currentMonth].map(
    (transaction) => transaction.amount
  );

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <Container className="balance">
      <h4 className="title">Balance del mes</h4>
      <h1>{moneyFormatter(total)}</h1>
      <IncomeExpenses />
    </Container>
  );
};
