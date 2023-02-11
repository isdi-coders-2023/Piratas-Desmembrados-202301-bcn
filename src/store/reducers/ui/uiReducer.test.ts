import { UiActionType } from "../../actions/ui/types";
import { setLoaderOnAction } from "../../actions/ui/uiActionCreator";
import uiReducer from "./uiReducer";

describe("Given the uiReducer function", () => {
  describe("When it recieves the setLoaderOnAction", () => {
    test("Then it should return true", () => {
      const isLoading = false;

      const uiAction = setLoaderOnAction();

      const result = uiReducer(isLoading, uiAction);

      expect(result).toBeTruthy();
    });
  });

  describe("When it recieves the setLoaderOffAction", () => {
    test("Then it should return false", () => {
      const isLoading = false;

      const uiAction = setLoaderOnAction();

      const result = uiReducer(isLoading, uiAction);

      expect(result).toBeTruthy();
    });
  });
  describe("When it recieves an unset action", () => {
    test("Then it should return the same value of isLoading", () => {
      const isLoading = true;
      const inNotLoading = false;
      const uiAction = { type: "" as unknown as UiActionType };

      const resultFromTrue = uiReducer(isLoading, uiAction);
      const resultFromFalse = uiReducer(inNotLoading, uiAction);
      expect(resultFromTrue).toBeTruthy();
      expect(resultFromFalse).toBeFalsy();
    });
  });
});
