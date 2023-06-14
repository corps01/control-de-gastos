import React, { useContext } from "react";
import { TransactionCard } from "./TransactionCard";

import { GlobalContext } from "../../context/GlobalState";
import { Container } from "react-bootstrap";

export const TransactionList = () => {
  const { transactions, currentMonth } = useContext(GlobalContext);

  const todayTransactions = transactions[currentMonth].filter(
    (transaction) => transaction.date === new Date().getDate()
  );

  const yesterdayTransactions = transactions[currentMonth].filter(
    (transaction) => transaction.date === new Date().getDate() - 1
  );

  const olderTransactions = transactions[currentMonth].filter(
    (transaction) => transaction.date < new Date().getDate() - 1
  );

  return (
    <Container
      className="mt-2 p-0"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {todayTransactions.length > 0 ? (
        <>
          <b className="mt-3">
            Hoy - {new Date().getDate()} {currentMonth.slice(0, 3)}.
          </b>
          {todayTransactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </>
      ) : (
        ""
      )}

      {yesterdayTransactions.length > 0 ? (
        <>
          <b className="mt-3">
            Ayer - {new Date().getDate() - 1} {currentMonth.slice(0, 3)}.
          </b>
          {yesterdayTransactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </>
      ) : (
        ""
      )}
      {olderTransactions.length > 0 ? (
        <>
          <b className="mt-3">Movimientos del mes</b>
          {olderTransactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </>
      ) : (
        ""
      )}
    </Container>
  );
};
