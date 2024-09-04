import SpendingContext from "./SpendingContext";
import { useState } from "react";
import PropTypes from "prop-types";

const SpendingProvider = ({ children }) => {
  const [weeklyExpenses, setWeeklyExpenses] = useState([
    34, 14, 65, 100, 31, 43, 52,
  ]);

  const [totalExpenses, setTotalExpenses] = useState(3423);

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

  return (
    <SpendingContext.Provider
      value={{
        weeklyExpenses,
        totalExpenses,
        addExpense,
        totalWeeklyExpenses: calculateTotalWeeklyExpenses(),
      }}>
      {children}
    </SpendingContext.Provider>
  );
};

SpendingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpendingProvider;
