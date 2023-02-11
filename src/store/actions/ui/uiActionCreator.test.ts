import { UiActionType } from "./types";
import { setLoaderOffAction, setLoaderOnAction } from "./uiActionCreator";

describe("Given the UiActionCreator function", () => {
  describe("When it is invoked with setLoaderActionOff", () => {
    test("Then it should return the same action type", () => {
      const expectedResult = {
        type: UiActionType.setLoaderOff,
      };

      const result = setLoaderOffAction();

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When it is invoked with setLoaderActionOn", () => {
    test("Then it should return the same action type", () => {
      const expectedResult = {
        type: UiActionType.setLoaderOn,
      };
      const result = setLoaderOnAction();

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
