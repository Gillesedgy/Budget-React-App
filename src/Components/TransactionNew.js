import { useEffect, useNavigate } from "react";
import { v4 as uuidv4 } from "uuid";

//?
export default function TransactionNew() {

// SUBMIT
const handleSubmit = ()=>{

}
//TEXT CHANGES
  const handleTextChange = (e)=>{

  }
  return (
    <div className="NewTransaction-Container">
      <form onSubmit={handleSubmit} >
        <label htmlFor="date">Date</label>
        <input type="text" 
        id=""
        value={''}
        onChange={handleTextChange}
        />
  
                <input type="submit"/>
      </form >
      <button disabled="disabled">
        BE ABLE TO CLICK ADD AFTER COMPLETING FORM
      </button>
      <button>BETTER LOOKING BACK BUTTON COMING SOON...</button>
    </div>
  );
}
