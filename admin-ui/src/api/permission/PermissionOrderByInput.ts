import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  action?: SortOrder;
  conditions?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  inverted?: SortOrder;
  reason?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
