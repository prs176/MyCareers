import * as Style from "./styled/Card";
import { ResumeRecord, RecordTypeToField, RecordTypeToNumber } from "../../models/record";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  type: "common" | "my";
  recordType: RecordTypeToNumber;
  record: ResumeRecord;
  onEdit: () => void;
  onDelete: () => void;
}

const CommonRecordCard = ({ type, recordType, record, onEdit, onDelete }: Props): JSX.Element => {
  const fields = RecordTypeToField[
    RecordTypeToNumber[recordType] as keyof typeof RecordTypeToField
  ] as [string, string][];

  return (
    <Style.RootContainer>
      <Style.ToolContainer>
        <Style.NameText>{record.name}</Style.NameText>
        {type === "my" ? (
          <div>
            <IconButton onClick={onEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={onDelete}>
              <DeleteOutlineIcon />
            </IconButton>
          </div>
        ) : (
          <></>
        )}
      </Style.ToolContainer>

      {fields.map((field, id) => (
        <Style.FieldWrapper key={id}>
          <Style.TitleText>{field[0]}</Style.TitleText>
          <Style.ContentText>{record[field[1] as keyof ResumeRecord] as string}</Style.ContentText>
        </Style.FieldWrapper>
      ))}
    </Style.RootContainer>
  );
};

export default CommonRecordCard;
