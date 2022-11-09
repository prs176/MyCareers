import { ResumeRecord, RecordTypeToNumber } from "../../models/record";
import CommonAwardCard from "./CommonRecordCard";
import EditAwardCard from "./EditRecordCard";

interface Props {
  type: "common" | "my" | "edit";
  recordType: RecordTypeToNumber;
  record: ResumeRecord;
  onEdit: () => void;
  onEditDone: () => void;
  onDelete: () => void;
}

const RecordCard = ({
  type,
  recordType,
  record,
  onEdit,
  onEditDone,
  onDelete,
}: Props): JSX.Element => {
  return (
    <>
      {type === "edit" ? (
        <EditAwardCard recordType={recordType} record={record} onEditDone={onEditDone} />
      ) : (
        <CommonAwardCard
          type={type}
          recordType={recordType}
          record={record}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default RecordCard;
