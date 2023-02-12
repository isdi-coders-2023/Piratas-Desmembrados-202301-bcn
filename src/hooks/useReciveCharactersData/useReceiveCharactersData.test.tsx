import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { handlersError } from "../../mocks/handlers";
import {
  mockAction,
  mockDispatch,
  mockStore,
  mockUiDispatch,
} from "../../mocks/mockStore";
import { server } from "../../mocks/server";
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
            <TestContextWrap mockStore={mockStore} mockUiStore={mockUiDispatch}>
              {children}
            </TestContextWrap>
          );
        },
      });

      await act(async () => {
        await getRickApiData();
      });

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
  describe("When it request failed the function getRicksData", () => {
    beforeEach(() => {
      server.resetHandlers(...handlersError);
    });
    test("Then it should return an Error", async () => {
      const {
        result: {
          current: { getRickApiData },
        },
      } = renderHook(useReceiveCharactersData, {
        wrapper: ({ children }) => {
          return (
            <TestContextWrap mockStore={mockStore} mockUiStore={mockUiDispatch}>
              {children}
            </TestContextWrap>
          );
        },
      });

      await act(async () => {
        await getRickApiData();
      });

      expect(mockDispatch).not.toHaveBeenCalledWith(mockAction);
    });
  });
});
