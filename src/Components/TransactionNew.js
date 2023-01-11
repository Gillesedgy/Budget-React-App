import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./Form.css";
//?
const API = process.env.REACT_APP_API_URL;
export default function TransactionNew() {
  let navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    date: "",
    id: uuidv4(),
    item_name: "",
    amount: 0,
    from: "",
    description: "",
    category: "",
  });

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/transactions`, transaction)
      .then((res) => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //TEXT CHANGES
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  return (
    <div className="backgroundImg">
      <div className="EditTransaction-Container">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="h2title2">New</h2>
          <h1>Transaction</h1>
          <input
            type="date"
            id="date"
            value={transaction.date}
            onChange={handleTextChange}
            required
          />
          <br />
          {/* <label htmlFor="id">ID: </label> */}
          <input
            type="text"
            id="id"
            value={transaction.id}
            onChange={handleTextChange}
            required
          />
          <br />
          {/* <label htmlFor="item_name">Name:</label> */}
          <input
            type="text"
            id="item_name"
            value={transaction.item_name}
            placeholder="Transaction Name"
            onChange={handleTextChange}
            required
          />
          <br />
          {/* <label htmlFor="amount">Amount: </label> */}
          <input
            type="number"
            id="amount"
            value={transaction.amount}
            onChange={handleTextChange}
            placeholder="Enter Amount"
            required
          />
          <br />
          {/* <label htmlFor="from">From: </label> */}
          <input
            type="text"
            id="from"
            value={transaction.from}
            placeholder="From"
            onChange={handleTextChange}
            required
          />
          <br />
          {/* <label htmlFor="description">Description: </label> */}
          <input
            type="text"
            id="description"
            value={transaction.description}
            onChange={handleTextChange}
            placeholder="Description"
            required
          />
          <br />
          {/* <label htmlFor="category">Category: </label> */}{" "}
          <p>
            {" "}
            <b>Select a Category:</b>{" "}
          </p>
          <select
            id="category"
            onChange={handleTextChange}
            value={transaction.category}
            className="Edit-Select"
          >
            <option value="">Category</option>
            <option id="income">Income</option>
            <option id="expense">Expense</option>
          </select>
          <br />
          <input className="edit-submit" type="submit" />{" "}
          <button
            className="edit-submit"
            onClick={() => {
              navigate(`/transactions`);
            }}
          >
           Back
          </button>
        </form>
      </div>
    </div>
  );
}
