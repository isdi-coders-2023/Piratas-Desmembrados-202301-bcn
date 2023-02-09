import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL!}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        info: {
          count: 826,
          pages: 42,
          next: "https://rickandmortyapi.com/api/character?page=2",
          prev: null,
        },
        results: [],
      })
    );
  }),
];
