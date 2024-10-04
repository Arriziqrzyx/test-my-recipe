import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders App component with NavBar, image banner, and Footer", async () => {
  render(<App />);

  // image banner is rendered
  const banner = screen.getByTestId("image-banner");
  expect(banner).toBeInTheDocument();
  expect(banner).toHaveAttribute(
    "src",
    "https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg"
  );
  expect(banner).toHaveAttribute("alt", "banner");
});
