import { render, screen } from "@testing-library/react";
import Character from "./Character";

describe("Given a Character component", () => {
  describe("When is rendered with a character that contains am image with the text 'A card with Rick Sanchez'", () => {
    test("It should return an image with the text 'A card with Rick Sanchez'", () => {
      const textImage = "A card with Rick Sanchez";
      const character = {
        id: 1,
        name: "Rick Sanchez",
        status: "",
        species: "",
        gender: "",
        origin: { name: "" },
        location: { name: "" },
        image: "",
      };

      render(<Character character={character} />);
      const expectedResult = screen.getByAltText(textImage);

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should return a card with a title 'Rick Sanchez'", () => {
      const cardTitle = "Rick Sanchez";
      const character = {
        id: 1,
        name: "Rick Sanchez",
        status: "",
        species: "",
        gender: "",
        origin: { name: "" },
        location: { name: "" },
        image: "",
      };

      render(<Character character={character} />);
      const expectedResult = screen.getByText(cardTitle);

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should return a card with the origin value 'Earth (C-137)'", () => {
      const origin = "Earth (C-137)";
      const character = {
        id: 1,
        name: "Rick Sanchez",
        status: "",
        species: "",
        gender: "",
        origin: { name: "Earth (C-137)" },
        location: { name: "" },
        image: "",
      };

      render(<Character character={character} />);
      const expectedResult = screen.getByText(origin);

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it shold return a card with the species value 'Human'", () => {
      const species = "Human";
      const character = {
        id: 1,
        name: "Rick Sanchez",
        status: "",
        species: "Human",
        gender: "",
        origin: { name: "" },
        location: { name: "" },
        image: "",
      };

      render(<Character character={character} />);
      const expectedResult = screen.getByText(species);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
