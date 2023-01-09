import { Link, useNavigate } from "react-router-dom";
import "./Transaction.css";
// icons
// import editButton from "../Assets/editButton.png";
//*
export default function Transaction({ transaction, id }) {
  let navigate = useNavigate();
  return (
    <div style={{}} className="Transaction-Show" key={id}>
      {/* TABLE ELEMENTS */}
      <table>
        <thead>
          <tr>
            <th className="TableHead">ID</th>
            <th className="TableHead">Date</th>
            <th className="TableHead">Name</th>
            <th className="TableHead">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Link to={`/transactions/${id}`}>
              <td className="TableId"> {transaction.id}</td>
            </Link>

            <td>{transaction.date}</td>
            <td>{transaction.item_name}</td>
            <td className="Amount">{transaction.amount}</td>
          
        <button   onClick={() => {
            navigate(`/transactions/${id}/edit`);
          }} >"📝"</button>
    
          </tr>
        </tbody>
      </table>
     
    </div>
  );
}
