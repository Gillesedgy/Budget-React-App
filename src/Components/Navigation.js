import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Nav.css";
import account from "../Assets/account-home.png";
import newLight from "../Assets/new-light.png";

export default function Navigation() {
   
  let navigate = useNavigate();
  return (
    <nav>
      {/* //* I want buttons to be far Left of the screen --> CCS  */}
      <button
        onClick={() => {
          navigate("/transactions");
        }}
        className="Account-Home"
      >
        <img src={account} alt="home_icon" />
      </button>
      <Link to={"/"}>
        {" "}
        <h1>Budget App</h1>
      
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
