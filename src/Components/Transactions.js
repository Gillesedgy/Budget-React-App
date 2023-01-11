import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import Chart from "./Charts";
import "./Transactions.css";

const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  // Request Transactions
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Transactions">
         <div className="Graph">
          <Chart transactions={transactions} />
     
      </div>   
      <h1 className="Transactions-Title">List Of Transactions</h1>
     
      {transactions.map((transaction, id) => {
        return (
          <div className="Transaction-Table" key={transaction.id}>
            {" "}
      
            <Transaction transaction={transaction} id={id} />
          </div>
        );
      })}
  
      
    </div>
  );
}
