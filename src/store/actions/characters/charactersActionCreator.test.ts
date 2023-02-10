import { loadApiDataActionCreator } from "./charactersActionCreator";
import { CharactersActionType } from "./types";

describe("Given a loadCharactersActionCreator function", () => {
  describe("When is invoked with the api data", () => {
    test("Then it should return same api data", () => {
      const apiData = {
        info: {
          count: 826,
          pages: 42,
          next: "https://rickandmortyapi.com/api/character?page=2",
          prev: null,
        },
        results: [],
      };
      const expectedResult = {
        type: CharactersActionType.loadApiDataResponse,
        payload: {
          info: {
            count: 826,
            pages: 42,
            next: "https://rickandmortyapi.com/api/character?page=2",
            prev: null,
          },
          results: [],
        },
      };

      const actualResult = loadApiDataActionCreator(apiData);

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });
});
