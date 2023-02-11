import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";

describe("Given the App component", () => {
  describe("When is rendered", () => {
    test("Then it shows an image with the text 'A card with Rick Sanchez'", () => {
      const textImage = "rick and morty name";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const image = screen.getByAltText(textImage);

      expect(image).toBeInTheDocument();
    });
    test("Then it shows a menu with a link that takes you to the page 'Characters'", () => {
      const textPage = "Characters";
      const routes = [
        {
          path: "/",
          element: <App />,
          children: [
            {
              path: "/",
              element: <HomePage />,
            },
          ],
        },
      ];
      const history = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });

      render(<RouterProvider router={history} />);

      const page = screen.getByText(textPage);
      userEvent.click(page);

      expect(page).toHaveClass("active");
    });
  });
});
