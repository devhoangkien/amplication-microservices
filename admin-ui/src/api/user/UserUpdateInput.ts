import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  deletedAt?: Date | null;
  email?: string;
  emailVerified?: boolean;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phone?: number | null;
  phoneVerified?: boolean;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  status?: "Active" | "Inactive";
  username?: string;
};
