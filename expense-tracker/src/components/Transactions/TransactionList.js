import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../../context/GlobalState";
import { Container } from "react-bootstrap";

export const TransactionList = () => {
  const { transactions, currentMonth } = useContext(GlobalContext);

  return (
    <Container className="mt-4 p-0">
      <b>
        Hoy - {new Date().getDate()} {currentMonth.slice(0, 3)}.
      </b>
      {transactions[currentMonth].map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </Container>
  );
};
