import "jsdom-global/register";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  test("render correctly and verify functionalities", () => {
    // Render the SearchBar with mock setCharacterName prop
    render(<SearchBar setCharacterName={() => {}} />);

    // Check if the components are rendered
    expect(screen.getByAltText("Logo Marvel")).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
    expect(screen.getByTestId("star-icon")).toBeInTheDocument();
    console.log("components are rendered successfully.");
    // Check if the input element is rendered and has functionality
    const input = screen.getByPlaceholderText("Buscar") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.textContent).toBe("");
    console.log("Value Before change:", input.value);
    // Simulate typing in the input element
    fireEvent.change(input, { target: { value: "Spiderman" } });

    // Check if the input value has changed
    expect(input.value).toBe("Spiderman");

    console.log("Value after change:", input.value);

    // Take a snapshot of the SearchBar component
    const { asFragment } = render(<SearchBar setCharacterName={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
