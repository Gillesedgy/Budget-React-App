export default function Transaction({ transaction, id }) {
  return (
    <div style={{ border: "1px solid black" }} key={id}>
      <ol>
        <p>
          <b>Date:</b> {transaction.date}
        </p>
        <li>
          <b> ID:</b> {transaction.id}
          <p>
            <b>Name:</b> {transaction.item_name}:{" "}
            <span>$ {transaction.amount}</span>
          </p>
          <p>
            {" "}
            <b> Descritption:</b> {transaction.description}
          </p>
          <p>
            <b>From:</b> {transaction.from}
          </p>
          <p>
            <b>Category:</b> {transaction.category}
          </p>
          <p>
            <b></b>
          </p>
        </li>
      </ol>
    
    </div>
  );
}
