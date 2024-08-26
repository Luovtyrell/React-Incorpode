import SpendingProvider from "./context/SpendingProvider";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";

function App() {
  return (
    <SpendingProvider>
      <BalanceSheet />
    </SpendingProvider>
  );
}

export default App;
