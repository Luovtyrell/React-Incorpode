import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BalanceSheet from "./BalanceSheet";
import RightArrow from "../../assets/png/flecha-derecha.png";
import LeftArrow from "../../assets/png/flecha-izquierda.png";

// Mock hooks
vi.mock("../../hooks/useSpending", () => ({
  __esModule: true,
  default: () => ({
    totalWeeklyExpenses: 123.45,
    totalExpenses: 678.9,
  }),
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key, // Mock translation function
  }),
}));

describe("BalanceSheet Component", () => {
  it("should render the component correctly", () => {
    render(<BalanceSheet />);

    // Check if the balance container is present
    const balanceContainer = screen.getByText(/weeklyBalance|totalBalance/i);
    expect(balanceContainer).toBeInTheDocument();

    // Check if the totalWeeklyExpenses or totalExpenses is displayed
    const balanceAmount = screen.getByText(/123.45|678.90/i);
    expect(balanceAmount).toBeInTheDocument();

    // Check if the arrow button is present
    const arrowButton = screen.getByRole("button", {
      name: /showTotalBalance|showWeeklyBalance/i,
    });
    expect(arrowButton).toBeInTheDocument();

    // Check the initial image source
    const arrowImage = screen.getByRole("img");
    expect(arrowImage).toHaveAttribute("src", RightArrow);
  });

  it("should toggle between weekly and total balance when clicking the arrow button", () => {
    render(<BalanceSheet />);

    // Click the arrow button to toggle
    const arrowButton = screen.getByRole("button", {
      name: /showTotalBalance/i,
    });
    fireEvent.click(arrowButton);

    // Verify that the balance amount and text change
    const newBalanceAmount = screen.getByText(/678.90/i);
    expect(newBalanceAmount).toBeInTheDocument();

    // Verify the arrow image changes
    const newArrowImage = screen.getByRole("img");
    expect(newArrowImage).toHaveAttribute("src", LeftArrow);

    // Click the arrow button to toggle back
    fireEvent.click(arrowButton);

    // Verify that the balance amount and text revert
    const revertedBalanceAmount = screen.getByText(/123.45/i);
    expect(revertedBalanceAmount).toBeInTheDocument();

    // Verify the arrow image reverts
    const revertedArrowImage = screen.getByRole("img");
    expect(revertedArrowImage).toHaveAttribute("src", RightArrow);
  });
});
