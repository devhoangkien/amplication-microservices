export type Session = {
  accessToken: string;
  createdAt: Date;
  deletedAt: Date | null;
  deviceId: string;
  id: string;
  ipAddress: string | null;
  refreshToken: string;
  updatedAt: Date;
};
