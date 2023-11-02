import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryListRelationFilter } from "./CategoryListRelationFilter";

export type CategoryWhereInput = {
  categories?: CategoryWhereUniqueInput;
  id?: StringFilter;
  key?: StringNullableFilter;
  name?: StringNullableFilter;
  parentId?: CategoryListRelationFilter;
};
