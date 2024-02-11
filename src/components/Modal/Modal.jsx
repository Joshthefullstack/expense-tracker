import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const ExpenseModal = ({show, handleShow, handleClose, setData, data}) => {

  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const expenseAdded = {
    enteredAmount: Number(enteredAmount),
    enteredDescription: enteredDescription,
    enteredDate: enteredDate
  }

  // console.log(data);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExpenseForm  setEnteredAmount={setEnteredAmount} setEnteredDescription={setEnteredDescription} setEnteredDate={setEnteredDate} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            setData(prev => [...prev, expenseAdded]);
            handleClose()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExpenseModal;
