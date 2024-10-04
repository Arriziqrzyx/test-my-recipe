import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer text and social links", () => {
  render(<Footer />);

  const footerText = screen.getByTestId("footer-text");
  expect(footerText).toHaveTextContent(
    "© 2024 Company, Inc. All rights reserved."
  );

  const facebookLink = screen.getByTestId("link-facebook");
  expect(facebookLink).toHaveAttribute("href", "https://facebook.com");

  const twitterLink = screen.getByTestId("link-x");
  expect(twitterLink).toHaveAttribute("href", "https://x.com");

  const instagramLink = screen.getByTestId("link-instagram");
  expect(instagramLink).toHaveAttribute("href", "https://instagram.com/");
});
