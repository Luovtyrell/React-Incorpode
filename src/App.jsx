import SpendingProvider from "./context/SpendingProvider";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";
import WeeklyExpensesChart from "./components/WeeklyExpenseChart/WeeklyExpenseChart";
import DailyExpenses from "./components/DailyExpenses/DailyExpenses";

function App() {
  return (
    <SpendingProvider>
      <BalanceSheet />
      <WeeklyExpensesChart />
      <DailyExpenses />
    </SpendingProvider>
  );
}

export default App;
