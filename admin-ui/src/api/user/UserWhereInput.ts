import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  email?: StringFilter;
  emailVerified?: BooleanFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: IntNullableFilter;
  phoneVerified?: BooleanFilter;
  role?: RoleWhereUniqueInput;
  status?: "Active" | "Inactive";
  username?: StringFilter;
};
