import express from "express";
import { OrdersController } from "./orders.controller";
import validateRequest from "../../middlewares/validateRequest";
import { OrderValidation } from "./orders.validation";

const router = express.Router();

router.post(
  "/create-order",
  validateRequest(OrderValidation.createOrderZodSchema),
  OrdersController.createOrder
);
router.get("/", OrdersController.getOrdersList);
router.put(
  "/:id",
  validateRequest(OrderValidation.PUTOrderZodSchema),
  OrdersController.updateAndReplaceOrderDetails
);
router.patch(
  "/:id",
  validateRequest(OrderValidation.PATCHOrderZodSchema),
  OrdersController.partiallyUpdateOrderDetails
);
router.delete("/:id", OrdersController.deleteOrder);

export const OrderRoutes = router;
