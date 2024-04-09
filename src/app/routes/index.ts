import express from "express";
import { OrderRoutes } from "../modules/orders/orders.routes";

const APP_ROUTER = express.Router();

const moduleRoutes = [
  {
    path: "/orders",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => APP_ROUTER.use(route.path, route.route));

export default APP_ROUTER;
