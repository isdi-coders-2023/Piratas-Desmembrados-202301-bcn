import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("It should contain the app container", () => {
      render(<App />);
      const result = screen.getByTestId("AppContainer");
      expect(result).toBeInTheDocument();
    });
  });
});
