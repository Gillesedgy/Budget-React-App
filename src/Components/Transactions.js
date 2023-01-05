import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Transactions({sum}) {
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
      {transactions.map((transaction, id) => {
        return (
          <div key = {transaction.id}>
            {" "}
            <Transaction transaction={transaction} id={id} />
          </div>
        );
      })}
      <br />
      {transactions.map((transaction, id) => {
        let sum = 0
        sum += Number(transaction.amount)
        // console.log(sum.length)
        return (
          <div key = {transaction.id}>
            {" "}
          <p>{sum}</p>
         </div>
        )
        
      })
      }
        <h1>Total: total expense goes here </h1>
    </div>
  );
}
