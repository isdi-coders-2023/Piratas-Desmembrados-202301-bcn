import { CharactersActionType } from "../../actions/characters/types";
import { loadApiDataActionCreator } from "../../actions/characters/charactersActionCreator";
import charactersReducer from "./charactersReducers";

describe("Given a charactersReducer function", () => {
  describe("When it receives a loadCharacters action a list of 2 characters in the payload", () => {
    test("Then it should return the received list", () => {
      const apiData = {
        info: {
          count: 826,
          pages: 42,
          next: "https://rickandmortyapi.com/api/character?page=2",
          prev: null,
        },
        results: [
          {
            id: 1,
            name: "",
            status: "",
            species: "",
            gender: "",
            origin: {
              name: "",
            },
            location: {
              name: "",
            },
            image: "",
          },
        ],
      };
      const action = loadApiDataActionCreator(apiData);

      const currentResult = charactersReducer(apiData, action);

      expect(currentResult).toStrictEqual(apiData);
    });
  });
  describe("When it receives a list of 1 character", () => {
    test("The it should return a list of 1 character", () => {
      const apiData = {
        info: {
          count: 826,
          pages: 42,
          next: "https://rickandmortyapi.com/api/character?page=2",
          prev: null,
        },
        results: [
          {
            id: 1,
            name: "",
            status: "",
            species: "",
            gender: "",
            origin: {
              name: "",
            },
            location: {
              name: "",
            },
            image: "",
          },
        ],
      };

      const action = {
        type: "" as unknown as CharactersActionType,
      };

      const currentResult = charactersReducer(apiData, action);

      expect(currentResult).toStrictEqual(apiData);
    });
  });
});
