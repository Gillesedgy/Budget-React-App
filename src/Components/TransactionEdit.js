import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Form.css";
//
// import background from "../Assets/formbackground.png";
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
    <div className="backgroundImg">
      <div className="EditTransaction-Container">
        <form onSubmit={handleSubmit}>
          <h2 className="h2title2">Edit</h2>
          <h1>Transaction</h1>
          <input
            type="text"
            id="date"
            value={transaction.date}
            placeholder="MM/DD/YYY"
            onChange={handleTextChange}
            required
          />
          <br />
          <input
            type="text"
            id="id"
            value={transaction.id}
            placeholder=""
            onChange={handleTextChange}
            required
          />
          <br />
          <input
            type="text"
            id="item_name"
            value={transaction.item_name}
            placeholder="Transaction Name"
            onChange={handleTextChange}
            required
          />
          <br />
          <input
            type="text"
            id="amount"
            value={transaction.amount}
            onChange={handleTextChange}
            placeholder="Enter Transaction ID"
            required
          />
          <br />
          <input
            type="text"
            id="from"
            value={transaction.from}
            onChange={handleTextChange}
            placeholder="From"
            required
          />
          <br />
          <input
            type="text"
            id="description"
            value={transaction.description}
            onChange={handleTextChange}
            placeholder="Description"
            required
          />
          <br />
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
          <input
            type="submit"
            className="edit-submit"
            //  disabled="disabled"
          />{" "}
          <button
            className="edit-submit"
            onClick={() => {
              navigate(`/transactions/${id}`);
            }}
          >
            Back
          </button>
        </form>
        <br />
      </div>
    </div>
  );
}
