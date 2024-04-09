import { z } from "zod";

const createOrderZodSchema = z.object({
  order: z.object({
    id: z.string({ required_error: "Order ID is required!" }),
    date: z.string({ required_error: "Order date is required!" }),
    notes: z.string({ required_error: "Order notes are required!" }),
    status: z.string({ required_error: "Order status is required!" }),
    payment_details: z.object({
      method: z.string({ required_error: "Payment method is required!" }),
      transaction_id: z.string({
        required_error: "Transaction ID is required!",
      }),
      promo_code: z.object({
        code: z.string({ required_error: "Promo code is required!" }),
        amount: z
          .number()
          .min(0, "Promo code amount must be a positive number"),
      }),
      total: z.number().optional(),
    }),
  }),
  customer: z.object({
    id: z.string({ required_error: "Customer ID is required!" }),
    name: z.string({ required_error: "Customer name is required!" }),
    email: z
      .string({ required_error: "Customer Email is required!" })
      .email("Invalid email address"),
    phone: z.string({ required_error: "Customer phone number is required!" }),
    address: z.object({
      street: z.string({ required_error: "Street address is required!" }),
      city: z.string({ required_error: "City is required!" }),
      state: z.string({ required_error: "State is required!" }),
      postal_code: z.string({ required_error: "Postal code is required!" }),
      country: z.string({ required_error: "Country is required!" }),
    }),
  }),
  products: z.array(
    z.object({
      id: z.string({ required_error: "Product ID is required!" }),
      name: z.string({ required_error: "Product name is required!" }),
      quantity: z.number().int().min(1, "Quantity must be at least 1"),
      in_stock: z.boolean().optional(),
      price: z.number().min(0, "Price must be a positive number"),
    })
  ),
});

const PUTOrderZodSchema = z.object({
  order: z.object({
    id: z.string().optional(),
    date: z.string().optional(),
    notes: z.string().optional(),
    status: z.string().optional(),
    payment_details: z
      .object({
        method: z.string().optional(),
        transaction_id: z.string().optional(),
        promo_code: z
          .object({
            code: z.string().optional(),
            amount: z
              .number()
              .min(0, "Promo code amount must be a positive number")
              .optional(),
          })
          .optional(),
        total: z.number().optional(),
      })
      .optional(),
  }),
  customer: z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    email: z.string().email("Invalid email address").optional(),
    phone: z.string().optional(),
    address: z.object({
      street: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      postal_code: z.string().optional(),
      country: z.string().optional(),
    }),
  }),
  products: z.array(
    z.object({
      id: z.string().optional(),
      name: z.string().optional(),
      quantity: z
        .number()
        .int()
        .min(1, "Quantity must be at least 1")
        .optional(),
      in_stock: z.boolean().optional(),
      price: z.number().min(0, "Price must be a positive number").optional(),
    })
  ),
});
const PATCHOrderZodSchema = z.object({
  order: z
    .object({
      id: z.string().optional(),
      date: z.string().optional(),
      notes: z.string().optional(),
      status: z.string().optional(),
      payment_details: z
        .object({
          method: z.string().optional(),
          transaction_id: z.string().optional(),
          promo_code: z
            .object({
              code: z.string().optional(),
              amount: z
                .number()
                .min(0, "Promo code amount must be a positive number")
                .optional(),
            })
            .optional(),
          total: z.number().optional(),
        })
        .optional(),
    })
    .optional(),
  customer: z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      email: z.string().email("Invalid email address").optional(),
      phone: z.string().optional(),
      address: z.object({
        street: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        postal_code: z.string().optional(),
        country: z.string().optional(),
      }),
    })
    .optional(),
  products: z
    .array(
      z.object({
        id: z.string().optional(),
        name: z.string().optional(),
        quantity: z
          .number()
          .int()
          .min(1, "Quantity must be at least 1")
          .optional(),
        in_stock: z.boolean().optional(),
        price: z.number().min(0, "Price must be a positive number").optional(),
      })
    )
    .optional(),
});

export const OrderValidation = {
  createOrderZodSchema,
  PUTOrderZodSchema,
  PATCHOrderZodSchema,
};
