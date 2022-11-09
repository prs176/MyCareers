import * as Style from "./styled/Card";
import { useState } from "react";
import { ResumeRecord, RecordTypeToField, RecordTypeToNumber } from "../../models/record";
import { IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import useInput from "../../util/useInput";

interface Props {
  record?: ResumeRecord;
  recordType: RecordTypeToNumber;
  onEditDone: () => void;
}

const EditRecordCard = ({ record, recordType, onEditDone }: Props): JSX.Element => {
  const fields = RecordTypeToField[
    RecordTypeToNumber[recordType] as keyof typeof RecordTypeToField
  ] as [string, string][];

  const [state, onChange] = useInput({
    name: "",
    role: "",
    period: "",
    description: "",
    department: "",
    from: "",
    start: "",
    end: "",
    identifier: "",
  });

  return (
    <Style.RootContainer>
      <Style.ToolContainer>
        <Style.NameInput placeholder="이름" name="name" value={state.name} onChange={onChange} />
        <IconButton onClick={onEditDone}>
          <DoneIcon />
        </IconButton>
      </Style.ToolContainer>

      {fields.map((field, id) => (
        <Style.FieldWrapper key={id}>
          <Style.TitleText>{field[0]}</Style.TitleText>
          <Style.ContentInput
            placeholder={field[0]}
            name={field[1]}
            onChange={onChange}
            value={state[field[1]]}
          ></Style.ContentInput>
        </Style.FieldWrapper>
      ))}
    </Style.RootContainer>
  );
};

export default EditRecordCard;
