import { render, screen } from "@testing-library/react";
import { mockStore } from "../../mocks/mockStore";
import { TestContextWrap } from "../../mocks/TestContextWrap";
import CharacterDetail from "./CharacterDetail";

describe("Given the component CharacterDetail", () => {
  describe("When it renders with Rick Shanchez data", () => {
    test("Then it should have an image with the alternative text `A page detail with Rick Sanchez`", () => {
      const altText = "A page detail with Rick Sanchez";

      render(
        <TestContextWrap mockStore={mockStore}>
          <CharacterDetail />
        </TestContextWrap>
      );

      const result = screen.getByAltText(altText);

      expect(result).toBeInTheDocument();
    });
  });
});
