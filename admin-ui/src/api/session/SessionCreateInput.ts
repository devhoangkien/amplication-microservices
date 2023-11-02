export type SessionCreateInput = {
  accessToken: string;
  deletedAt?: Date | null;
  deviceId: string;
  ipAddress?: string | null;
  refreshToken: string;
};
