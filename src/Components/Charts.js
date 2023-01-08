import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, } from "react-chartjs-2";

//
import './Chart.css'
//
ChartJS.register(ArcElement, Tooltip, Legend);

const config = {
  data: {
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 20,
        weight: 100,
    
      },
    ],
  },
  options: {
    cutout: 150,
  },
};
export default function Charts({transactions}) {

  // TOTAL EXPENSES...
  let sum = transactions.reduce((acc, transaction) => {
    if (transaction.category === "Expense") {
      acc -= Number(transaction.amount);
    } else if (transaction.category === "Income") {
      acc += Number(transaction.amount);
    }

    return acc;
  }, 0);
  return (
    <div className="Chart-Container">
    <Doughnut {...config}></Doughnut>
    <h3 className="Title">Amount:{' '}<span className="Sum">$ <em> {sum.toLocaleString("en-US")}</em></span></h3> 
    </div>
  );
}
