import { IOrders } from "./orders.interface";
import { OrderModel } from "./orders.model";

const ADD_ORDER_TO_DB = async (payload: IOrders): Promise<IOrders> => {
  const result = await OrderModel.create(payload);
  let totalPrice = 0;
  const { products, order } = payload;
  const { payment_details } = order;
  for (const product of products) {
    totalPrice += product.price * product.quantity;
  }

  if (payment_details?.promo_code) {
    totalPrice -= payment_details.promo_code.amount;
  }

  const processedResult = {
    ...result.toObject(),
    _id: result._id,
  };
  processedResult.order.payment_details!.total = totalPrice;
  return processedResult;
};

const GET_ORDERS_FROM_DB = async (): Promise<IOrders[]> => {
  const orders = await OrderModel.find();
  return orders;
};

const PATCH_ORDER_TO_DB = async (
  id: string,
  payload: Partial<IOrders>
): Promise<IOrders | null> => {
  const result = await OrderModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const DELETE_ORDER_FROM_DB = async (id: string): Promise<IOrders | null> => {
  const result = await OrderModel.findByIdAndDelete(id);
  return result;
};

export const OrdersServices = {
  ADD_ORDER_TO_DB,
  GET_ORDERS_FROM_DB,
  PATCH_ORDER_TO_DB,
  DELETE_ORDER_FROM_DB,
};
