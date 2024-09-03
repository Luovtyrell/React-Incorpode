import { useState } from "react";
import useSpending from "../../hooks/useSpending";

const BalanceSheet = () => {
  const { weeklyExpenses, totalExpenses } = useSpending();
  const [showWeekly, setShowWeekly] = useState(true);

  const handleArrowClick = () => {
    setShowWeekly((prevState) => !prevState);
  };

  return (
    <div className="container w-80">
      <div className="w-80 block max-w-3xl p-6 mt-9 bg-customYellow rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700 text-xs mb-1">
              {showWeekly ? "Balanç total de la setmana:" : "Balanç total:"}
            </p>
            <h5 className="mb-2 text-4xl font-extrabold tracking-tight mt-2">
              {showWeekly ? weeklyExpenses : totalExpenses} €
            </h5>
          </div>
          <button
            className="text-3xl cursor-pointer mx-4"
            onClick={handleArrowClick}
            aria-label={
              showWeekly ? "Show total balance" : "Show weekly balance"
            }>
            {showWeekly ? "→" : "←"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheet;
