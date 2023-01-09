import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./New.css";
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
    <div className="NewTransaction-Container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input
          type="date"
          id="date"
          value={transaction.date}
          placeholder=""
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="id">ID: </label>
        <input
          type="text"
          id="id"
          value={transaction.id}
          placeholder=""
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="item_name">Name:</label>
        <input
          type="text"
          id="item_name"
          value={transaction.item_name}
          placeholder=""
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="amount">Amount: </label>
        <input
          type="number"
          id="amount"
          value={transaction.amount}
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="from">From: </label>
        <input
          type="text"
          id="from"
          value={transaction.from}
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          value={transaction.description}
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="category">Category: </label>
        <select
          id="category"
          onChange={handleTextChange}
          value={transaction.category}
          className="Select"
        >
          <option value="">----------</option>
          <option id="income">Income</option>
          <option id="expense">Expense</option>
          {/* <option value="premium">Premium</option> */}
        </select>

        <p> Select one from the given options:</p>
        <input type="submit" />
      </form>

      <button
        onClick={() => {
          navigate(`/transactions`);
        }}
      >
        🔙
      </button>
    </div>
  );
}
