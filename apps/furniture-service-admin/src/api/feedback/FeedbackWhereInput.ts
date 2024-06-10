import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeedbackWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  rating?: IntNullableFilter;
};
