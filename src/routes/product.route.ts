import {
	createProductHandler,
	getProductHandler,
	updateProductHandler,
} from "../controller/product.controller";

import requireUser from "../middleware/requireUser";
import validateResource from "../middleware/validateResource";
import {
	createProductSchema,
	deleteProductSchema,
	getProductSchema,
	updateProductSchema,
} from "../schema/product.schema";

import express from "express";
const router = express.Router();

router.post(
	"/",
	[requireUser, validateResource(createProductSchema)],
	createProductHandler
);

router.put(
	"/:productId",
	[requireUser, validateResource(updateProductSchema)],
	updateProductHandler
);

router.get(
	"/:productId",
	validateResource(getProductSchema),
	getProductHandler
);

router.delete(
	"/:productId",
	[requireUser, validateResource(deleteProductSchema)],
	getProductHandler
);

export default router;
