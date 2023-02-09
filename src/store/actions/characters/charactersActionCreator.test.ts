import { loadApiDataActionCreator } from "./charactersActionCreator";
import { CharactersActionType } from "./types";

describe("Given a loadCharactersActionCreator function", () => {
  describe("When is invoke with two characters", () => {
    test("Then it should return a list of two characters", () => {
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
      const expectedResult = {
        type: CharactersActionType.loadCharacters,
        payload: [
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
        ],
      };

      const actualResult = loadApiDataActionCreator(characters);

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });
});
