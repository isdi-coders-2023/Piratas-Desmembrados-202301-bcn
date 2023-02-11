import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given the Loader", () => {
  describe("When it renders", () => {
    test("Then it should render an image whit the altenative text `Rick and Morty falling through a portal`", () => {
      const altText = "Rick and Morty falling through a portal";
      const ariaLabel = "The page is loading";

      render(<Loader />);

      const altTextImageRendered = screen.getByAltText(altText);
      const ariaLabelRendered = screen.getByRole("dialog", { name: ariaLabel });

      expect(altTextImageRendered).toBeInTheDocument();
      expect(ariaLabelRendered).toBeInTheDocument();
    });
  });
});
