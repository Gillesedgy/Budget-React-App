import TransactionNew from "../Components/TransactionNew"
// UUID of the transaction = to create a new transaction with unique ID
import { v4 as uuidv4 } from 'uuid';


export default function New() {
  return (
    <div><h2>New</h2>
    <TransactionNew />
        </div>
  )
}
