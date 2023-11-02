import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput, DateInput } from "react-admin";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Access Token" source="accessToken" />
        <DateInput label="Deleted At" source="deletedAt" />
        <TextInput label="Device ID          " source="deviceId" />
        <TextInput label="Ip Address" source="ipAddress" />
        <TextInput label="Refresh Token     " source="refreshToken" />
      </SimpleForm>
    </Edit>
  );
};
