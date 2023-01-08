import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import './Edit.css'
const API = process.env.REACT_APP_API_URL;

export default function TransactionEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [transaction, setTransaction] = useState({
    date: "",
    id: "",
    item_name: "",
    amount: 0,
    from: "",
    description: "",
    category: "",
  });

  // TEXT CHANGE
  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };
  // API CALL
  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/transactions/${id}`, transaction)

      .then((res) => {
        navigate(`/transactions/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="NewTransaction-Container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date: </label>
          <input
            type="text"
            id="date"
            value={transaction.date}
            placeholder="MM/DD/YYY"
            onChange={handleTextChange}
            required
          />

          <label htmlFor="id">ID: </label>
          <input
            type="text"
            id="id"
            value={transaction.id}
            placeholder=""
            onChange={handleTextChange}
            required
          />

          <label htmlFor="item_name">Name:</label>
          <input
            type="text"
            id="item_name"
            value={transaction.item_name}
            placeholder=""
            onChange={handleTextChange}
            required
          />

          <label htmlFor="amount">Amount: </label>
          <input
            type="text"
            id="amount"
            value={transaction.amount}
            onChange={handleTextChange}
            required
          />

          <label htmlFor="from">From: </label>
          <input
            type="text"
            id="from"
            value={transaction.from}
            onChange={handleTextChange}
            required
          />

          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            value={transaction.description}
            onChange={handleTextChange}
            required
          />
            <label htmlFor="category">Category: </label>
        <select
          id="category"
          onChange={handleTextChange}
          value={transaction.category}
          className="Select"
        >
          <option value=""></option>
          <option id="income">Income</option>
          <option id="expense">Expense</option>
          {/* <option value=""></option> */}
        </select>

          <input
            type="submit"
            //  disabled="disabled"
          />
        </form>

        <button
          onClick={() => {
            navigate(`/transactions/${id}`);
          }}
        >
          BETTER LOOKING BACK BUTTON COMING SOON...
        </button>
      </div>
    </div>
  );
}
