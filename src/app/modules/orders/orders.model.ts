import { Schema, model } from "mongoose";
import { IOrders, OrdersModel } from "./orders.interface";

const ordersSchema = new Schema<IOrders>(
  {
    order: {
      id: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
        default: Date.now,
      },
      notes: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      payment_details: {
        method: {
          type: String,
          required: true,
        },
        transaction_id: {
          type: String,
          required: true,
        },
        promo_code: {
          code: {
            type: String,
            required: true,
          },
          amount: {
            type: Number,
            required: true,
          },
        },
        total: {
          type: Number,
        },
      },
    },
    customer: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        street: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        postal_code: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
    },
    products: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        in_stock: {
          type: Boolean,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const OrderModel = model<IOrders, OrdersModel>("Orders", ordersSchema);
