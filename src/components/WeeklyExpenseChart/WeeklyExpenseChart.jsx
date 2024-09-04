import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import useSpending from "../../hooks/useSpending";
import useChartOptions from "../../hooks/useChartOptions";
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
  const { t } = useTranslation();
  const { weeklyExpenses } = useSpending();
  const chartOptions = useChartOptions();

  const barColors = [
    "#0029FF",
    "#0029FF",
    "#0029FF",
    "#0029FF",
    "#0029FF",
    "#0029FF",
    "#FF5600",
  ];

  const chartData = {
    labels: [
      t("mon"),
      t("tue"),
      t("wed"),
      t("thu"),
      t("fri"),
      t("sat"),
      t("sun"),
    ],
    datasets: [
      {
        label: t("expenses"),
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
