import { Request, Response } from "express";
import { OrdersServices } from "./orders.service";
import sendResponse from "../../utilities/sendResponse";
import { IOrders } from "./orders.interface";

const createGadget = async (req: Request, res: Response) => {
  try {
    const { order } = req.body;
    const result = await OrdersServices.ADD_ORDER_TO_DB(order);
    sendResponse<IOrders>(res, {
      statusCode: 201,
      success: true,
      message: "New order created",
      data: result,
    });
  } catch (error) {}
};
