import { IOrders } from "./orders.interface";
import { OrderModel } from "./orders.model";

const ADD_ORDER_TO_DB = async (payload: IOrders): Promise<IOrders> => {
  const result = await OrderModel.create(payload);
  return result;
};

export const OrdersServices = {
  ADD_ORDER_TO_DB,
};
