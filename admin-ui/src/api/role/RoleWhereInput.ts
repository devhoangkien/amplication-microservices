import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RoleWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  level?: IntNullableFilter;
  name?: StringNullableFilter;
  permission?: PermissionListRelationFilter;
  users?: UserListRelationFilter;
};
