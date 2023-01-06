import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, PolarArea } from "react-chartjs-2";

//
ChartJS.register(ArcElement, Tooltip, Legend);

// data for charts
const data = {
  labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
      hoverOffset: 4,
    },
  ],
};

export default function Charts() {
  return (
    <div>
      {/* <PolarArea data={data}></PolarArea> */}
      <Doughnut data={data}></Doughnut>
    </div>
  );
}
