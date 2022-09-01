import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form } from "react-bootstrap";
export const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      amount: +amount,
      date,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          <label htmlFor="amount">
            Date <br />
          </label>
          <Form.Group controlId="duedate">
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="date"
            />
          </Form.Group>
        </div>
        <button className="btn">Add income</button>
      </form>
    </>
  );
};
