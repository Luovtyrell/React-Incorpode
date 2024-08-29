import { useState } from "react";
import useSpending from "../../hooks/useSpending";

const BalanceSheet = () => {
  const { weeklyExpenses, totalExpenses } = useSpending();
  const [showWeekly, setShowWeekly] = useState(true);

  const handleArrowClick = () => {
    setShowWeekly((prevState) => !prevState);
  };

  const renderContent = () => {
    if (showWeekly) {
      return (
        <>
          <p className="text-gray-700 text-xs mb-1">
            Balanç total de la setmana:
          </p>
          <h5 className="mb-2 text-4xl font-extrabold tracking-tight mt-2">
            {weeklyExpenses} €
          </h5>
        </>
      );
    } else {
      return (
        <>
          <p className="text-gray-700 text-xs mb-1">Balanç total:</p>
          <h5 className="mb-2 text-4xl font-extrabold tracking-tight mt-2">
            {totalExpenses} €
          </h5>
        </>
      );
    }
  };

  const renderArrow = () => {
    return (
      <span className="text-3xl cursor-pointer mx-4" onClick={handleArrowClick}>
        {showWeekly ? "→" : "←"}
      </span>
    );
  };

  return (
    <div className="container w-80">
      <div className="w-80 block max-w-3xl p-6 mt-9 bg-customYellow rounded-3xl">
        <div className="flex items-center justify-between">
          <div>{renderContent()}</div>
          <div className="flex items-center">{renderArrow()}</div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheet;
