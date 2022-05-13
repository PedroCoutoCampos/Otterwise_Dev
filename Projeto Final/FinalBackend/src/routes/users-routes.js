import { validateRequest } from "../middleware/auth.js";
import * as UserController from "../controllers/user-controller.js";

export default {
  getUsersById: {
    method: "GET",
    url: "/users/:id",
    preHandler: [validateRequest],
    handler: UserController.getByID,
  },
  getUsersByUsername: {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: UserController.getByUsername,
  },
};
