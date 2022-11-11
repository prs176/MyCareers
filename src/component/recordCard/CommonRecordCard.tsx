import * as Style from "./styled/Card";
import { ResumeRecord, RecordTypeToField, RecordTypeToNumber } from "../../models/record";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  type: "common" | "my";
  recordType: RecordTypeToNumber;
  record: ResumeRecord;
  onClick: () => void;
  onEdit: () => void;
  onDelete: (id: number) => void;
}

const CommonRecordCard = ({
  type,
  recordType,
  record,
  onClick,
  onEdit,
  onDelete,
}: Props): JSX.Element => {
  const fields = (
    RecordTypeToField[RecordTypeToNumber[recordType] as keyof typeof RecordTypeToField] as [
      string,
      string
    ][]
  ).filter((field) => field[1] !== "name");

  return (
    <Style.RootContainer>
      <Style.ToolContainer>
        <Style.NameText>{record.name}</Style.NameText>
        {type === "my" ? (
          <div>
            <IconButton onClick={onEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(record.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </div>
        ) : (
          <></>
        )}
      </Style.ToolContainer>

      <Style.ContentContainer onClick={onClick}>
        {fields.map((field, id) => (
          <Style.FieldWrapper key={id}>
            <Style.TitleText>{field[0]}</Style.TitleText>
            <Style.ContentText>
              {record[field[1] as keyof ResumeRecord] as string}
            </Style.ContentText>
          </Style.FieldWrapper>
        ))}
      </Style.ContentContainer>
    </Style.RootContainer>
  );
};

export default CommonRecordCard;
