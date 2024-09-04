import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import DailyExpenses from "./DailyExpenses";

// Mock hooks
vi.mock("../../hooks/useSpending", () => ({
  __esModule: true,
  default: () => ({
    getTodayExpenses: () => 123.45,
    getPercentageChange: () => -5.67, // Example of negative percentage
  }),
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key, // Mock translation function
  }),
}));

describe("DailyExpenses Component", () => {
  it("should render the component correctly and calculate percentage change", () => {
    render(<DailyExpenses />);

    // Check if the "todayExpenses" text is displayed
    expect(screen.getByText(/todayExpenses/i)).toBeInTheDocument();

    // Check if today's expenses are displayed correctly
    const todayExpensesElement = screen.getByText(/123.45 €/i);
    expect(todayExpensesElement).toBeInTheDocument();

    // Check if the percentage change is displayed correctly
    const percentageChangeElement = screen.getByText(/▼ -5.67%/i);
    expect(percentageChangeElement).toBeInTheDocument();

    // Check if the styling is applied based on percentage change
    expect(percentageChangeElement).toHaveClass("text-green-500");

    // Check if the correct icon is used for negative percentage change
    expect(screen.getByText(/▼/i)).toBeInTheDocument();
  });
});
