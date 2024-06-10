import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
