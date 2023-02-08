// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL!}`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          info: {
            count: 45,
            pages: 45,
            next: "https://rickandmortyapi.com/api/character?page=2",
            prev: null,
          },
          results: [
            {
              id: 1,
              name: "Nano",
              status: "Chill",
              species: "bot",
              gender: "cat",
              origin: {
                name: "Pedrucho",
              },
              location: {
                name: "En algun lugar de la mancha",
              },
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            },
          ],
        },
      ])
    );
  }),
];
