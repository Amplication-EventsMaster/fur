import { Feedback } from "../feedback/Feedback";
import { Order } from "../order/Order";

export type Customer = {
  createdAt: Date;
  feedbacks?: Array<Feedback>;
  id: string;
  orders?: Array<Order>;
  updatedAt: Date;
};
