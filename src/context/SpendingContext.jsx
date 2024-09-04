import { createContext } from "react";

const SpendingContext = createContext({
  weeklyExpenses: [],
  totalExpenses: 0,
  addExpense: () => {},
  setWeeklyExpenses: () => {},
  getTodayExpenses: () => {},
  getYesterdayExpenses: () => {},
  getPercentageChange: () => {},
});

export default SpendingContext;
