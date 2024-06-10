import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  orderStatus?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
