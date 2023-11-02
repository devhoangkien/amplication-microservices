import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "accessToken";

export const SessionTitle = (record: TSession): string => {
  return record.accessToken?.toString() || String(record.id);
};
