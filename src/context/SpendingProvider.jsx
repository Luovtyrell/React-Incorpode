import SpendingContext from "./SpendingContext";
import { useState } from "react";
import PropTypes from "prop-types";

const SpendingProvider = ({ children }) => {
  const [weeklyExpenses, setWeeklyExpenses] = useState(254);
  const [totalExpenses, setTotalExpenses] = useState(3423);

  const addExpense = (amount) => {
    setWeeklyExpenses((prev) => prev + amount);
    setTotalExpenses((prev) => prev + amount);
  };

  return (
    <SpendingContext.Provider
      value={{
        weeklyExpenses,
        totalExpenses,
        addExpense,
      }}>
      {children}
    </SpendingContext.Provider>
  );
};

SpendingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpendingProvider;