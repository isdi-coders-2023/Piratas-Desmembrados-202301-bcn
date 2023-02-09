import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { mockAction, mockDispatch, mockStore } from "../../mocks/mockStore";
import { TestContextWrap } from "../../mocks/TestContextWrap";
import { useReceiveCharactersData } from "./useReceiveCharactersData";

describe("Given the hook useReceieveCharactersData", () => {
  describe("When it calls the function getRicksData", () => {
    test("Then it should invoque dispatch", async () => {
      const {
        result: {
          current: { getRickApiData },
        },
      } = renderHook(useReceiveCharactersData, {
        wrapper: ({ children }) => {
          return (
            <TestContextWrap mockStore={mockStore}>{children}</TestContextWrap>
          );
        },
      });

      await act(async () => {
        await getRickApiData();
      });

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
