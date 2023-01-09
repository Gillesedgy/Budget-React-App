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
    
      {/* <article className="Transaction-Container">
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
      </article> */}
       <table>
        <thead>
          <tr>
            <th >ID</th>
            <th >Date</th>
            <th >Name</th>
            <th >Desciprion</th>
            <th >From</th>
            <th >Category</th>
            <th >amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >  {transaction.id}</td>
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
