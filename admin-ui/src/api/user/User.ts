import { Role } from "../role/Role";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  deletedAt: Date | null;
  email: string;
  emailVerified: boolean;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: number | null;
  phoneVerified: boolean;
  role?: Role | null;
  roles: JsonValue;
  status?: "Active" | "Inactive";
  updatedAt: Date;
  username: string;
};
