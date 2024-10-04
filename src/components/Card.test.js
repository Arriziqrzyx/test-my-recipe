import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

const el = {
  image: "https://via.placeholder.com/150",
  name: "Test Recipe",
  rating: 4.5,
  tags: ["Tag1", "Tag2", "Tag3"],
  id: 1,
};

test("renders the component Card with given props", () => {
  render(<Card el={el} />);
});

test("renders Card props correctly", () => {
  render(<Card el={el} />);

  const imgCard = screen.getByTestId("img-recipe-1");
  expect(imgCard).toBeInTheDocument();
  expect(imgCard).toHaveAttribute("src", "https://via.placeholder.com/150");

  const titleCard = screen.getByTestId("title-recipe-1");
  expect(titleCard).toBeInTheDocument();
  expect(titleCard).toHaveTextContent("Test Recipe");

  const ratingCard = screen.getByTestId("rating-recipe-1");
  expect(ratingCard).toBeInTheDocument();
  expect(ratingCard).toHaveTextContent("4.5");

  const linkCard = screen.getByTestId("link-recipe-1");
  expect(linkCard).toBeInTheDocument();
  expect(linkCard).toHaveAttribute("href", "https://dummyjson.com/recipes/1");
  expect(linkCard).toHaveTextContent("READ MORE");
});
