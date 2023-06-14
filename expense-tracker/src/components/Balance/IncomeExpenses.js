import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./index.css";
import { Container } from "react-bootstrap";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$" +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const IncomeExpenses = () => {
  const { transactions, currentMonth } = useContext(GlobalContext);

  const amounts = transactions[currentMonth].map(
    (transaction) => transaction.amount
  );

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <Container className="inc-exp-container p-0 my-3">
      <div className="money-container plus">
        <p className="money-title">Income</p>
        <p className="money">+{moneyFormatter(income)}</p>
      </div>
      <hr
        style={{
          color: "gray",
          backgroundColor: "gray",
          width: "2px",
          margin: "0 10px",
          height: "57px",
        }}
      />
      <div className="money-container minus">
        <p className="money-title">Expense</p>
        <p className="money">-{moneyFormatter(expense)}</p>
      </div>
    </Container>
  );
};
