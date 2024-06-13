import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FrequencyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  value?: IntNullableFilter;
};
