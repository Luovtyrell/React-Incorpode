import { createContext } from "react";

const SpendingContext = createContext({
  weeklyExpenses: 0,
  totalExpenses: 0,
  addExpense: () => {},
});

export default SpendingContext;