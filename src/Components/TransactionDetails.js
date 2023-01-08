import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import './TransactionDetails.css'
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
  
    <>
    
      <article className="Transaction-Container">
        <ol>
          <p>
            <b>Date:</b> {transaction.date}
          </p>
          <li>
            <b> ID:</b> {transaction.id}
            <p>
              <b>Name:</b> {transaction.item_name}:{" "}
              <span>$ {transaction.amount}</span>
            </p>
            <p>
              {" "}
              <b> Descritption:</b> {transaction.description}
            </p>
            <p>
              <b>From:</b> {transaction.from}
            </p>
            <p>
              <b>Category:</b> {transaction.category}
            </p>
            <p>
              <b></b>
            </p>
          </li>
        </ol>
      </article>
      <div className="Transaction-Buttons">
        {" "}
        <button onClick={handleDelete}>BETTER DELETE BUTTON</button>
        <button
          onClick={() => {
            navigate(`/transactions/${id}/edit`);
          }}
        >
          BETTER EDIT BUTTON
        </button>
        <button
          onClick={() => {
            navigate(`/transactions`);
          }}
        >
          BETTER BACK BUTTON
        </button>
      </div>
    </>
  );
}
