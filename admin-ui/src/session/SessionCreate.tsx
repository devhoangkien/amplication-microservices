import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateInput,
} from "react-admin";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Access Token" source="accessToken" />
        <DateInput label="Deleted At" source="deletedAt" />
        <TextInput label="Device ID          " source="deviceId" />
        <TextInput label="Ip Address" source="ipAddress" />
        <TextInput label="Refresh Token     " source="refreshToken" />
      </SimpleForm>
    </Create>
  );
};
