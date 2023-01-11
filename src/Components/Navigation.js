import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Nav.css";
import axios from "axios";
import account from "../Assets/account-home.png";
import newLight from "../Assets/new-light.png";


const API = process.env.REACT_APP_API_URL;
export default function Navigation() {
  const [transactions, setTransactions] = useState([]);
  let navigate = useNavigate();
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



// TOTAL EXPENSES...
console.log(transactions)
  let sum = transactions.reduce((acc, transaction) => {
    if (transaction.category === "Expense") {
      acc -= Number(transaction.amount);
    } else if (transaction.category === "Income") {
      acc += Number(transaction.amount);
    }

    return acc;
  }, 0);
  return (
    <nav>
      <button
        onClick={() => {
          navigate("/transactions");
        }}
        className="Account-Home"
        >
        <img src={account} alt="home_icon" />{" "}Home
      </button>
      <Link to={"/"}>
        {" "}
        <p><b>Account Total:{" "}${' '}</b>{sum.toLocaleString("en-US")}</p>
        <h1 className="dotReduce">dotReduce(💲)</h1>
      
      </Link>

      {/* //* I want buttons to be far right of the screen --> CCS  */}

      <button
        onClick={() => {
          navigate("/transactions/new");
        }}
      >
        <img src={newLight} alt="new_icon" /> New Transaction
      </button>
    </nav>
  );
}
