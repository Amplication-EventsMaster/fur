import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type FeedbackCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  message?: string | null;
  rating?: number | null;
};
