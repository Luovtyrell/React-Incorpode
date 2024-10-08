import SpendingContext from "./SpendingContext";
import { useState } from "react";
import PropTypes from "prop-types";

const SpendingProvider = ({ children }) => {
  const [weeklyExpenses, setWeeklyExpenses] = useState([
    34.45, 14.6, 65, 100.67, 31.5, 43.45, 92.89,
  ]);

  const [totalExpenses, setTotalExpenses] = useState(3423.98);

  const addExpense = (dayIndex, amount) => {
    if (typeof amount !== "number" || isNaN(amount)) {
      throw new Error("Amount must be a valid number");
    }

    setWeeklyExpenses((prev) => {
      const newExpenses = [...prev];
      newExpenses[dayIndex] += amount;
      return newExpenses;
    });

    setTotalExpenses((prev) => prev + amount);
  };

  const calculateTotalWeeklyExpenses = () => {
    return weeklyExpenses.reduce((acc, curr) => acc + curr, 0);
  };

  const getTodayExpenses = () => {
    return weeklyExpenses[weeklyExpenses.length - 1];
  };

  const getYesterdayExpenses = () => {
    return weeklyExpenses[weeklyExpenses.length - 2];
  };

  const getPercentageChange = () => {
    const todayExpenses = getTodayExpenses();
    const yesterdayExpenses = getYesterdayExpenses();
    return ((todayExpenses - yesterdayExpenses) / yesterdayExpenses) * 100;
  };

  return (
    <SpendingContext.Provider
      value={{
        weeklyExpenses,
        totalExpenses,
        addExpense,
        totalWeeklyExpenses: calculateTotalWeeklyExpenses(),
        getTodayExpenses,
        getYesterdayExpenses,
        getPercentageChange,
      }}>
      {children}
    </SpendingContext.Provider>
  );
};

SpendingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpendingProvider;
