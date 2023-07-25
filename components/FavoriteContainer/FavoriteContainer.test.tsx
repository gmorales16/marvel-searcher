import "jsdom-global/register";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import FavoriteContainer from "./FavoriteContainer";

describe("<FavoriteContainer/>", () => {
  test("renders FavoriteContainer Component", () => {
    render(<FavoriteContainer />);
    const FavoriteContainerElement =
      screen.getAllByTestId("favorite-container");
    const FavoriteCardContainerElement = screen.getAllByTestId(
      "favorite-card-container"
    );
    expect(FavoriteContainerElement[0]).toBeInTheDocument();
    expect(FavoriteCardContainerElement[0]).toBeInTheDocument();
    // Take a snapshot of the SearchBar component
    const { asFragment } = render(<FavoriteContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
