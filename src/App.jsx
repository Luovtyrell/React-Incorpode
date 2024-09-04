import SpendingProvider from "./context/SpendingProvider";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";
import WeeklyExpensesChart from "./components/WeeklyExpenseChart/WeeklyExpenseChart";
import DailyExpenses from "./components/DailyExpenses/DailyExpenses";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

function App() {
  return (
    <SpendingProvider>
      <LanguageSelector />
      <BalanceSheet />
      <WeeklyExpensesChart />
      <DailyExpenses />
    </SpendingProvider>
  );
}

export default App;
