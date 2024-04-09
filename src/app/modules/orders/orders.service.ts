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

  const processedResult: IOrders = result.toObject();
  processedResult.order.payment_details!.total = totalPrice;

  return processedResult;
};

export const OrdersServices = {
  ADD_ORDER_TO_DB,
};
