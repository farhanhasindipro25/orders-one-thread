import express from "express";
import { OrdersController } from "./orders.controller";

const router = express.Router();

router.post("/create-order", OrdersController.createOrder);
router.get("/", OrdersController.getOrdersList);
router.put("/:id", OrdersController.updateAndReplaceOrderDetails);
router.patch("/:id", OrdersController.partiallyUpdateOrderDetails);
router.delete("/:id", OrdersController.deleteOrder);

export const OrderRoutes = router;
