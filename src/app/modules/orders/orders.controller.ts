import { NextFunction, Request, RequestHandler, Response } from "express";
import { OrdersServices } from "./orders.service";
import sendResponse from "../../utilities/sendResponse";
import { IOrders } from "./orders.interface";
import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";

const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    try {
      const result = await OrdersServices.ADD_ORDER_TO_DB(req.body);
      sendResponse<IOrders>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "New order created",
        data: result,
      });
    } catch (error) {}
  }
);

const getOrdersList: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await OrdersServices.GET_ORDERS_FROM_DB();
    sendResponse<IOrders[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All orders data retrieved",
      data: result,
    });
    next();
  }
);

const partiallyUpdateOrderDetails: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await OrdersServices.PATCH_ORDER_TO_DB(id, updatedData);

    sendResponse<IOrders>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Order Information for id:${id} updated`,
      data: result,
    });
  }
);

const updateAndReplaceOrderDetails: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await OrdersServices.PUT_ORDER_TO_DB(id, updatedData);
    sendResponse<IOrders>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Order Information of id:${id} updated and replaced`,
      data: result,
    });
  }
);

const deleteOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await OrdersServices.DELETE_ORDER_FROM_DB(id);

    sendResponse<IOrders>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Order with id ${id} has been deleted`,
      data: result,
    });
  }
);

export const OrdersController = {
  createOrder,
  getOrdersList,
  partiallyUpdateOrderDetails,
  updateAndReplaceOrderDetails,
  deleteOrder,
};
