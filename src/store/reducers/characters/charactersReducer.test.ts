import { CharactersActionType } from "../../actions/characters/types";
import charactersReducer from "./charactersReducers";

describe("Given a charactersReducer function", () => {
  describe("When receives a list of 2 characters and has to load it", () => {
    test("Then it should return a list of 2 characters", () => {
      const characters = [
        {
          id: 1,
          name: "",
          status: "",
          species: "",
          gender: "",
          origin: { name: "" },
          location: { name: "" },
          image: "",
        },

        {
          id: 2,
          name: "",
          status: "",
          species: "",
          gender: "",
          origin: { name: "" },
          location: { name: "" },
          image: "",
        },
      ];
      const action = {
        type: CharactersActionType.loadCharacters,
        payload: characters,
      };

      const currentResult = charactersReducer(characters, action);

      expect(currentResult).toStrictEqual(characters);
    });
  });
  describe("When it receives a list of 1 character", () => {
    test("The it should return a list of 1 character", () => {
      const newCharacter = [
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
      ];

      const action = {
        type: CharactersActionType.default,
      };

      const currentResult = charactersReducer(newCharacter, action);

      expect(currentResult).toStrictEqual(newCharacter);
    });
  });
});
