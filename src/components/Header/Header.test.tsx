import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a component named Header", () => {
  describe("When it receives an image with the text 'page logo'", () => {
    test("Then it should render a image with the text 'page logo' in the interface", () => {
      const textLogo = "page logo";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const expectedResult = screen.getByRole("img", {
        name: textLogo,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
