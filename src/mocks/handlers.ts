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
        results: [
          {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            origin: {
              name: "Earth (C-137)",
            },
            location: {
              name: "Citadel of Ricks",
            },
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          },
        ],
      })
    );
  }),
];

export const handlersError = [
  rest.get(`${process.env.REACT_APP_API_URL!}`, (req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
