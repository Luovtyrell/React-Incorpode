import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import WeeklyExpensesChart from "./WeeklyExpenseChart";

// Mocks hooks
vi.mock("../../hooks/useSpending", () => ({
  __esModule: true,
  default: () => ({
    weeklyExpenses: [34.45, 14.6, 65, 100.67, 31.5, 43.45, 92.89],
  }),
}));

vi.mock("../../hooks/useChartOptions", () => ({
  __esModule: true,
  default: () => ({
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  }),
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe("WeeklyExpensesChart", () => {
  test("should render the chart canvas", () => {
    render(<WeeklyExpensesChart />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
