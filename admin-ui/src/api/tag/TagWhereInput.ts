import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TagWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  name?: StringNullableFilter;
};
