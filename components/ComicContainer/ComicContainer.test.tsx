import "jsdom-global/register";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import ComicContainer, { IComicContainer } from "./ComicContainer";

describe("<ComicContainer/>", () => {
  test("renders ComicContainer Component", () => {
    const mockData: IComicContainer = {
      image: "Hi im Iron Man Link Image",
      title: "Iron Man",
      published: "16 / 12 / 2000",
      writer: "Carl Johnson",
      penciler: "Rohan Kishibe",
      artist: "Lionel Messi",
      description:
        "He launches missiles, flies and his suit is made of iron, that's why he is called Iron Man. Oh yes, he also shoots lightning from his chest",
    };
    render(<ComicContainer {...mockData} />);

    const imageElement = screen.getByAltText("Comic Image");
    const titleElement = screen.getByTestId("comic-title");
    const publishedElement = screen.getByText(/Published:/i);
    const writerElement = screen.getByText(/Writer:/i);
    const pencilerElement = screen.getByText(/Penciler:/i);
    const artistElement = screen.getByText(/Cover Artist:/i);
    const descriptionElement = screen.getByTestId("comic-description");

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(publishedElement).toBeInTheDocument();
    expect(writerElement).toBeInTheDocument();
    expect(pencilerElement).toBeInTheDocument();
    expect(artistElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();

    // Take a snapshot of the SearchBar component
    const { asFragment } = render(<ComicContainer {...mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
