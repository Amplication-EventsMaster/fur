import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  updatedAt: Date;
};
