import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Transactions({ sum }) {
  const [transactions, setTransactions] = useState([]);
const [total, setTotal] = useState(0)

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
      {/*  //! RETURNS LISTS OF TRANSACTIONS */}
      {transactions.map((transaction, id) => {
        return (
          <div key={transaction.id}>
            {" "}
            <Transaction transaction={transaction} id={id} />
          </div>
        );
      })}
      <br />
      <div>
        {
  transactions.reduce((acc, transaction) => {
      return    acc + transaction.amount
          
          // .toLocaleString("en-US");;
      
 },0)

        }
        {/* {transactions.map((transaction, id)=>{
          let sum = 0
          return (
            <div>
              <p>{
               setTotal(sum += Number(transaction.amount)) 
               
                }</p>
                {<p>{total}</p>}
            </div>
          )
        })} */}
      </div>
      {
    
      }
      
      <h1>Total: total expense goes here: </h1>
    </div>
  );
}
