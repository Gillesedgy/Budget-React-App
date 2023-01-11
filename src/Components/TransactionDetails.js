import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TransactionDetails.css";

//! API
const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  //UseEffect
  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((res) => {
        setTransaction(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        navigate(`/not-found`);
      });
  }, [id, navigate]);

  // DELETE /transactions
  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${id}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="Details">
      <h1>Details</h1>
      <table className="TableDetails">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Name</th>
            <th>Desciprion</th>
            <th>From</th>
            <th>Category</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.item_name}</td>
            <td>{transaction.description}</td>
            <td>{transaction.from}</td>
            <td>{transaction.category}</td>
            <td className="Amount">{transaction.amount}</td>
          </tr>
        </tbody>
      </table>
      <div className="Transaction-Buttons">
        {" "}
        <button onClick={handleDelete}>DELETE </button>
        <button
          onClick={() => {
            navigate(`/transactions/${id}/edit`);
          }}
        >
          EDIT
        </button>{" "}
        <br />
        <button
          onClick={() => {
            navigate(`/transactions`);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
