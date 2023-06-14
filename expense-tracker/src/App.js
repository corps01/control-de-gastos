import React from "react";
import { Header } from "./components/Header/Header";
import { Balance } from "./components/Balance/Balance";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Container className="px-3">
        <Balance />
        <TransactionList />
        <AddTransaction />
      </Container>
    </GlobalProvider>
  );
}

export default App;
