import express from "express";
import { OrdersController } from "./orders.controller";

const router = express.Router();

router.post("/create-order", OrdersController.createOrder);
router.get("/", OrdersController.getOrdersList);
router.patch("/:id", OrdersController.updateOrderDetails);

export const OrderRoutes = router;
