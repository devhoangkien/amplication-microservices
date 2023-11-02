import { InputJsonValue } from "../../types";
import { RoleUpdateManyWithoutPermissionsInput } from "./RoleUpdateManyWithoutPermissionsInput";

export type PermissionUpdateInput = {
  action?: string;
  conditions?: InputJsonValue;
  inverted?: boolean | null;
  reason?: string | null;
  roles?: RoleUpdateManyWithoutPermissionsInput;
  subject?: string;
};
