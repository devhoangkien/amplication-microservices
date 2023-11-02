import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";

export type PermissionWhereInput = {
  action?: StringFilter;
  conditions?: JsonFilter;
  id?: StringFilter;
  inverted?: BooleanNullableFilter;
  reason?: StringNullableFilter;
  roles?: RoleListRelationFilter;
  subject?: StringFilter;
};
