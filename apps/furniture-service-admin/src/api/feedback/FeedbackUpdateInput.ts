import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type FeedbackUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  message?: string | null;
  rating?: number | null;
};
