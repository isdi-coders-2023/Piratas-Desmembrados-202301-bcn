import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Burger } from "./Burger";

describe("Given a Burger component", () => {
  describe("When it renders", () => {
    test("Then it should show three lines", () => {
      render(<Burger />);

      const burger = screen.getByRole("button", {});

      userEvent.click(burger);
      expect(burger).toBeInTheDocument();
    });
  });
});
