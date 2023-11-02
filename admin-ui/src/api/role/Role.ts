import { Permission } from "../permission/Permission";
import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  description: string | null;
  id: string;
  level: number | null;
  name: string | null;
  permission?: Array<Permission>;
  updatedAt: Date;
  users?: Array<User>;
};
