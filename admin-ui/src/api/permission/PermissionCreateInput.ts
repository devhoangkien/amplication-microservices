import { InputJsonValue } from "../../types";
import { RoleCreateNestedManyWithoutPermissionsInput } from "./RoleCreateNestedManyWithoutPermissionsInput";

export type PermissionCreateInput = {
  action: string;
  conditions?: InputJsonValue;
  inverted?: boolean | null;
  reason?: string | null;
  roles?: RoleCreateNestedManyWithoutPermissionsInput;
  subject: string;
};
