import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Button, Modal, Form } from "react-bootstrap";

export const AddTransactionModal = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setError("");
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const { addTransaction, currentMonth } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "" || amount.trim() === "") {
      setError("Porfavor Ingresa una descripción y cantidad.");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date: new Date().getDate(),
    };

    setText("");
    setAmount(0);
    setError("");
    handleCloseModal();
    addTransaction(newTransaction, currentMonth);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Movimiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="text">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required={true}
                placeholder="Agrega una descripción"
              />
            </Form.Group>

            <Form.Group controlId="amount" className="pt-2">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                required={true}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Ingresa la cantidad..."
              />
              <Form.Text className="text-muted">
                (Negativo - Gasto, Positivo - Ingreso)
              </Form.Text>
            </Form.Group>

            {error && <div className="text-danger">{error}</div>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="fixed-bottom">
        <Button
          onClick={handleShowModal}
          style={{
            width: "250px",
            backgroundColor: "#6582f8",
            fontWeight: "bold",
          }}
        >
          Agregar Movimiento
        </Button>
      </div>
    </>
  );
};
