import React, { useContext } from "react";
import { TransactionCard } from "./TransactionCard";
import { getCurrentMonthEnEspanol } from "../../util/getCurrentDate";

import { GlobalContext } from "../../context/GlobalState";
import { Container } from "react-bootstrap";

export const TransactionList = () => {
  const { transactions, currentMonth } = useContext(GlobalContext);

  let todayTransactions = [];
  let yesterdayTransactions = [];
  let olderTransactions = [];
  let monthTransactions = [];

  if (currentMonth === getCurrentMonthEnEspanol()) {
    todayTransactions = transactions[currentMonth].filter(
      (transaction) => transaction.date === new Date().getDate()
    );

    yesterdayTransactions = transactions[currentMonth].filter(
      (transaction) => transaction.date === new Date().getDate() - 1
    );

    olderTransactions = transactions[currentMonth].filter(
      (transaction) => transaction.date < new Date().getDate() - 1
    );
  } else {
    monthTransactions = transactions[currentMonth];
  }

  return (
    <Container
      className="mt-2 p-0"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {monthTransactions.length > 0 ? (
        <>
          <b className="mt-3">Movimientos de {currentMonth}</b>
          {monthTransactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </>
      ) : (
        ""
      )}

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
