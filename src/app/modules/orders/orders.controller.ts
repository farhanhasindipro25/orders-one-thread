import { Request, Response } from "express";
import { OrdersServices } from "./orders.service";
import sendResponse from "../../utilities/sendResponse";
import { IOrders } from "./orders.interface";
import httpStatus from "http-status";

const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrdersServices.ADD_ORDER_TO_DB(req.body);
    sendResponse<IOrders>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "New order created",
      data: result,
    });
  } catch (error) {}
};

export const OrdersController = {
  createOrder,
};
