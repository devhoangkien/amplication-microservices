import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  accessToken?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  deviceId?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  refreshToken?: SortOrder;
  updatedAt?: SortOrder;
};
