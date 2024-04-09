import express from "express";
import { OrdersController } from "./orders.controller";

const router = express.Router();

router.post("/create-order", OrdersController.createOrder);
router.get("/", OrdersController.getOrdersList);

export const OrderRoutes = router;
