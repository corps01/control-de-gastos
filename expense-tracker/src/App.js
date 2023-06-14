import React from "react";
import { Header } from "./components/Header/Header";
import { Balance } from "./components/Balance/Balance";
import { Transactions } from "./components/Transactions/Transactions";
import { GlobalProvider } from "./context/GlobalState";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Container className="px-3">
        <Balance />
        <Transactions />
      </Container>
    </GlobalProvider>
  );
}

export default App;
