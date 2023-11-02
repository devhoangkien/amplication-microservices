import { JsonValue } from "type-fest";
import { Role } from "../role/Role";

export type Permission = {
  action: string;
  conditions: JsonValue;
  createdAt: Date;
  id: string;
  inverted: boolean | null;
  reason: string | null;
  roles?: Array<Role>;
  subject: string;
  updatedAt: Date;
};
