import { createSessionSchema } from "../schema/session.schema";
import { createUserSchema } from "../schema/user.schema";
import { createUserHandler } from "../controller/user.controller";
import {
	createUserSessionHandler,
	deleteSessionHandler,
	getUserSessionsHandler,
} from "../controller/session.controller";
import requireUser from "../middleware/requireUser";
import validateResource from "../middleware/validateResource";

import express from "express";
const router = express.Router();

router.post(
	"/",
	validateResource(createUserSchema),
	createUserHandler
);

router.post(
	"/sessions",
	validateResource(createSessionSchema),
	createUserSessionHandler
);

router.get("/sessions", requireUser, getUserSessionsHandler);

router.delete("/sessions", requireUser, deleteSessionHandler);

export default router;
