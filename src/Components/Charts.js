import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// STYLES
import "./Chart.css";
//
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Charts({ transactions }) {
  const config = {
    data: {
      datasets: [
        {
          data: transactions.map((data) => Number(data.amount)),

          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86)",
            "rgb(201, 203, 207)",
            "rgb(54, 162, 235)",
          ],
          hoverOffset: 9,
          borderRadius: 30,
          spacing: 20,
          weight: 100,
        },
      ],
    },
    options: {
      cutout: 120,
    },
  };

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
    <>
      <div className="Chart-Container">
        <Doughnut
          {...config}
          // data={data}
        ></Doughnut>  </div>
        <h3 className="Chart-Title">
          Amount:{" "}
          <span className="Sum">
            $ <em> {sum.toLocaleString("en-US")}</em>
          </span>
        </h3>
    
    </>
  );
}
