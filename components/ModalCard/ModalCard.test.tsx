import "jsdom-global/register";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import ModalCard from "./ModalCard";

// Mock the react-icons library
jest.mock("react-icons/ci", () => ({
  CiStar: () => <div data-testid="star-icon" />,
}));

describe("ModalCard", () => {
  test("renders with correct title and description", () => {
    const mockProps = {
      url: "Hi im mock-url",
      title: "Leon Scott Kennedy",
      description: "Mock Description",
      id: 1,
    };
    render(<ModalCard {...mockProps} />);

    const titleElement = screen.getByText("Leon Scott Kennedy");
    const descriptionElement = screen.getByText("Mock Description");
    const iconElement = screen.getByTestId("star-icon");

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    const { asFragment } = render(<ModalCard {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
