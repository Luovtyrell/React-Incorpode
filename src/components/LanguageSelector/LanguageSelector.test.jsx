import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import LanguageSelector from "./LanguageSelector";

// Mocks hooks
const mockChangeLanguage = vi.fn();

vi.mock("react-i18next", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useTranslation: () => ({
      i18n: {
        changeLanguage: mockChangeLanguage,
      },
    }),
  };
});

describe("LanguageSelector", () => {
  beforeEach(() => {
    mockChangeLanguage.mockClear();
  });

  it("should render language buttons", () => {
    render(<LanguageSelector />);

    // Check that the language buttons are present
    expect(screen.getByAltText("English")).toBeInTheDocument();
    expect(screen.getByAltText("Català")).toBeInTheDocument();
    expect(screen.getByAltText("Castellano")).toBeInTheDocument();
  });

  it("should call changeLanguage with the correct code when a button is clicked", () => {
    render(<LanguageSelector />);

    // Simulate clicking the English button
    fireEvent.click(screen.getByAltText("English"));
    expect(mockChangeLanguage).toHaveBeenCalledWith("en");

    // Simulate clicking the Catalan button
    fireEvent.click(screen.getByAltText("Català"));
    expect(mockChangeLanguage).toHaveBeenCalledWith("ca");

    // Simulate clicking the Spanish button
    fireEvent.click(screen.getByAltText("Castellano"));
    expect(mockChangeLanguage).toHaveBeenCalledWith("es");
  });
});
