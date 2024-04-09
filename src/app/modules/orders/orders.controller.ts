import { NextFunction, Request, Response } from "express";
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

const getOrdersList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await OrdersServices.GET_ORDERS_FROM_DB();
  sendResponse<IOrders[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All orders data retrieved",
    data: result,
  });
  next();
};

const updateOrderDetails = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await OrdersServices.PATCH_ORDER_TO_DB(id, updatedData);

  sendResponse<IOrders>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Information updated",
    data: result,
  });
};

export const OrdersController = {
  createOrder,
  getOrdersList,
  updateOrderDetails,
};
