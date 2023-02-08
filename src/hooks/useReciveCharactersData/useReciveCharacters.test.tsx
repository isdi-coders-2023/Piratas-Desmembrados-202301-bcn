import { renderHook } from "@testing-library/react";
import { useReciveCharactersData } from "./useReciveCharactersData";

describe("Given the hook useRecieveCharacters", () => {
  describe("When it calls the function getCharactersData", () => {
    test("Then it should invoque dispatch", async () => {
      const {
        result: { current },
      } = renderHook(useReciveCharactersData, {
        wrapper,
      });

      const spyOn = jest.spyOn(current.getCharactersData, "dispatch");

      const characters = {
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
      };
      expect(spyOn).toHaveBeenCalled();

      spyOn.mockRestore();

      expect(current.getCharactersData()).toHaveBeenCalled();
    });
  });
});
