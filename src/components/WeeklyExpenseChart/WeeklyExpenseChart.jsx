import { Bar } from "react-chartjs-2";
import useSpending from "../../hooks/useSpending";
import chartOptions from "./chartOptions";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const WeeklyExpensesChart = () => {
  const { weeklyExpenses } = useSpending();

  const barColors = [
    "#AFC97E",
    "#AFC97E",
    "#AFC97E",
    "#AFC97E",
    "#AFC97E",
    "#AFC97E",
    "#A41623",
  ];

  const chartData = {
    labels: ["Dll", "Dm", "Dx", "Dj", "Dv", "Ds", "Dg"],
    datasets: [
      {
        label: "Despeses (€)",
        data: weeklyExpenses,
        backgroundColor: barColors,
        borderWidth: 0,
        barThickness: 29,
      },
    ],
  };

  return (
    <div className="container w-80 mt-5">
      <div className="w-full h-80 max-w-3xl p-6 bg-white rounded-3xl">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default WeeklyExpensesChart;
