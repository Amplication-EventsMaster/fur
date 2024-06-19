import { FeedbackCreateNestedManyWithoutCustomersInput } from "./FeedbackCreateNestedManyWithoutCustomersInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  feedbacks?: FeedbackCreateNestedManyWithoutCustomersInput;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
