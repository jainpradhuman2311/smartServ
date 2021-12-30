import { Bar } from "react-chartjs-2";
import "./Chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "Everett",
      "Seattle",
      "Lynnwood",
      "Brothell",
      "Mukiteo",
      "Edmonds",
    ],
    datasets: [
      {
        label: "Revenue for November 2019",
        data: [100000, 90000, 50000, 47000, 45000, 35000],
        borderColor: "rgb(10, 151, 85)",
        backgroundColor: "rgb(10, 151, 85)",
      },
    ],
  };
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 1.5,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };

  return (
    <div className="Chart">
      <Bar options={options} data={data} />;
    </div>
  );
};

export default BarChart;
