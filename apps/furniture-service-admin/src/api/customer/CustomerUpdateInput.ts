import { FeedbackUpdateManyWithoutCustomersInput } from "./FeedbackUpdateManyWithoutCustomersInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  feedbacks?: FeedbackUpdateManyWithoutCustomersInput;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
