import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("Given a page NotFoundPage", () => {
  describe("When it receives an image with the text 'Rick opening Morty's eyes'", () => {
    test("Then it should render a image with the text 'Rick opening Morty's eyes' in the interface", () => {
      const imageText = "Rick opening Morty's eyes";

      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );
      const expectedResult = screen.getByRole("img", {
        name: imageText,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
