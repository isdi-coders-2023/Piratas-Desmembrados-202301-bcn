import { render, screen } from "@testing-library/react";
import Characters from "../Characters/Characters";

describe("Given a Character component", () => {
  describe("When is rendered with a character that contains am image with the text 'A card with Rick Sanchez'", () => {
    test("It should return an image with the text 'A card with Rick Sanchez'", () => {
      const textImage = "A card with Rick Sanchez";
      const results = [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "",
          species: "",
          gender: "",
          origin: { name: "" },
          location: { name: "" },
          image: "",
        },
      ];

      render(<Characters results={results} />);
      const expectedResult = screen.getByRole("img", {
        name: textImage,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
