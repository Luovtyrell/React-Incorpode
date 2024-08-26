import SpendingContext from "./SpendingContext";
import { useState } from "react";
import PropTypes from "prop-types";

const SpendingProvider = ({ children }) => {
  const [balance, setBalance] = useState(499);

  return (
    <SpendingContext.Provider
      value={{
        balance,
        setBalance,
      }}>
      {children}
    </SpendingContext.Provider>
  );
};

SpendingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpendingProvider;
