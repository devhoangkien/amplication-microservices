import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";
import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  description?: string | null;
  level?: number | null;
  name?: string | null;
  permission?: PermissionUpdateManyWithoutRolesInput;
  users?: UserUpdateManyWithoutRolesInput;
};
