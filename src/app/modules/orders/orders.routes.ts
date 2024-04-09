import express from "express";
import { OrdersController } from "./orders.controller";

const router = express.Router();

router.post("/create-order", OrdersController.createOrder);

export const OrderRoutes = router;
