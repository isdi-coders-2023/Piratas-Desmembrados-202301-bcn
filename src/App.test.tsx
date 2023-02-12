import { render, screen } from "@testing-library/react";
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { routes } from "./pages/router/router";

describe("Given the App component", () => {
  describe("When is rendered", () => {
    test("Then it shows an image with the text 'rick and morty name'", () => {
      const headerTextImage = "rick and morty name";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const image = screen.getByAltText(headerTextImage);

      expect(image).toBeInTheDocument();
    });

    test("Then it should render page header and HomePage on deafult route", () => {
      const textPage = "Characters";
      const history = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });

      render(<RouterProvider router={history} />);
      const page = screen.getByText(textPage);

      expect(page).toBeInTheDocument();
    });
  });
});
