import { setupServer } from "msw/node";
import { handlers, handlersError } from "./handlers";

export const server = setupServer(...handlers);

export const serverError = setupServer(...handlersError);
