import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import userRoutes from "./user.route";
import productRoutes from "./product.route";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);

const swaggerOptions = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "My Express.js API",
			version: "1.0.0",
			description:
				"A sample Express.js API built with TypeScript and Swagger",
		},
	},
	apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

router.get("/healthcheck", (req, res) => res.sendStatus(200));

router.get("*", function (req, res) {
	res.status(404).json({ error: "Page not found" });
});

export default router;
