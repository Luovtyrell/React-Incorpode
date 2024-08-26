import { useContext } from "react";
import SpendingContext from "../context/SpendingContext";

const useSpending = () => {
  const context = useContext(SpendingContext);
  if (context === undefined) {
    throw new Error("useSpending must be used within a SpendingProvider");
  }
  return context;
};

export default useSpending;
