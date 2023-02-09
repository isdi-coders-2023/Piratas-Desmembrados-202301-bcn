import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a component named Header", () => {
  describe("When it receives an image with the text 'page logo'", () => {
    test("Then it should render a image with the text 'page logo' in the interface", () => {
      const textLogo = "page logo";

      render(<Header />);
      const expectedResult = screen.getByRole("img", {
        name: textLogo,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
