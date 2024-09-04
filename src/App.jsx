import SpendingProvider from "./context/SpendingProvider";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";
import WeeklyExpensesChart from "./components/WeeklyExpenseChart/WeeklyExpenseChart";

function App() {
  return (
    <SpendingProvider>
      <BalanceSheet />
      <WeeklyExpensesChart />
    </SpendingProvider>
  );
}

export default App;
