import useSpending from "../../hooks/useSpending";

const BalanceSheet = () => {
  const { balance } = useSpending();

  return (
    <div className="container w-80">
      <div className=" w-80 block max-w-3xl p-6 mt-9 bg-customYellow rounded-3xl">
        <p className="text-gray-700">Balanç total:</p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {balance} €
        </h5>
      </div>
    </div>
  );
};

export default BalanceSheet;
