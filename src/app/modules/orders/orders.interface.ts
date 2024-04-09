import { Model } from "mongoose";

export interface IOrders {
  order: {
    id: string;
    date: string;
    notes?: string;
    status: string;
    payment_details?: {
      method: string;
      transaction_id: string;
      promo_code: {
        code: string;
        amount: number;
      };
      total: number;
    };
  };
  customer: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
  };
  products: {
    id: string;
    name: string;
    quantity: number;
    in_stock: boolean;
    price: number;
  }[];
}

export type OrdersModel = Model<IOrders>;
