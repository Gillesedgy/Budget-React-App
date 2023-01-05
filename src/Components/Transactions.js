import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  // Request Transactions
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        console.log(res.data);
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Transactions">
      {transactions.map((transaction, id)=>{
        return (
          <div style={{border: '1px solid black'}} key={id}>

<ol><li>{transaction.date} 
  </li></ol>
          </div>
        )
      })}
    </div>
  );
}
