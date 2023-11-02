import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";
import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  level?: number | null;
  name?: string | null;
  permission?: PermissionCreateNestedManyWithoutRolesInput;
  users?: UserCreateNestedManyWithoutRolesInput;
};
