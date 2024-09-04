import { createContext } from "react";

const SpendingContext = createContext({
  weeklyExpenses: [],
  totalExpenses: 0,
  addExpense: () => {},
  setWeeklyExpenses: () => {},
});

export default SpendingContext;
