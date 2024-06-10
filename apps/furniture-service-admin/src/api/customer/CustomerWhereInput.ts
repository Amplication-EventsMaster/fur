import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
};
