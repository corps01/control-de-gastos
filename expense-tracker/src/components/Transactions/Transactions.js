import { TransactionList } from "./TransactionList";
import { AddTransactionModal } from "./AddTransactionModal";
import { Container } from "react-bootstrap";

export const Transactions = () => {
  return (
    <Container className="transactions-container p-0">
      <TransactionList />
      <AddTransactionModal />
    </Container>
  );
};
