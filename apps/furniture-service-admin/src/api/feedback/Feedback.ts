import { Customer } from "../customer/Customer";

export type Feedback = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  message: string | null;
  rating: number | null;
  updatedAt: Date;
};
