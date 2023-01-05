import { useNavigate } from "react-router-dom";
import "./Nav.css";
import account from "../Assets/account-home.png";
import newLight from "../Assets/new-light.png";
import { Link } from "react-router-dom";
export default function Navigation() {
  let navigate = useNavigate();
  return (
    <div className="Navigations">
      <h1>Budget App</h1>
      <button
        onClick={() => {
          navigate("/transactions/new");
        }}
      >
        <img src={newLight} alt="new_icon" /> New Transaction
      </button>
      <button className="Account-Home">
        <img src={account} alt="home_icon" />
      </button>
    </div>
  );
}
