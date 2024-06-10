import { Order } from "../order/Order";

export type Customer = {
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  updatedAt: Date;
};
