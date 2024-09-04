import useSpending from "../../hooks/useSpending";
import { useTranslation } from "react-i18next";

const DailyExpenses = () => {
  const { t } = useTranslation();
  const { getTodayExpenses, getPercentageChange } = useSpending();

  const todayExpenses = getTodayExpenses();
  const percentageChange = getPercentageChange();

  return (
    <div className="container w-80">
      <div className="w-80 block max-w-3xl p-6 mt-5 bg-customBlue rounded-3xl">
        <h2 className="text-gray-300 text-xs mb-1">{t("todayExpenses")}</h2>
        <p className="text-4xl font-extrabold mb-2 text-white">
          {todayExpenses.toFixed(2)} €
        </p>
        <p
          className={`text-lg ${
            percentageChange >= 0 ? "text-red-500" : "text-green-500"
          }`}>
          {percentageChange >= 0 ? "▲" : "▼"} {percentageChange.toFixed(2)}%
          <span className="text-gray-300 text-xs ml-2">
            {t("comparedToYesterday")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DailyExpenses;
