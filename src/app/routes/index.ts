import express from "express";
import { OrderRoutes } from "../modules/orders/orders.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/orders",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
