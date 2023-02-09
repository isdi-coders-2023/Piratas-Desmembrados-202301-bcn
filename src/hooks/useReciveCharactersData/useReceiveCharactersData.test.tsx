import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { mockAction, mockDispatch, mockStore } from "../../mocks/mockStore";
import { TestContextWrap } from "../../mocks/TestContextWrap";

import { useReceiveCharactersData } from "./useReceiveCharactersData";

describe("Given the hook useReceieveCharactersData", () => {
  describe("When it calls the function getCharactersData", () => {
    test("Then it should invoque dispatch", async () => {
      const {
        result: {
          current: { getCharactersData },
        },
      } = renderHook(useReceiveCharactersData, {
        wrapper: ({ children }) => {
          return (
            <TestContextWrap mockStore={mockStore}>{children}</TestContextWrap>
          );
        },
      });

      await act(async () => {
        await getCharactersData();
      });

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
