import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
