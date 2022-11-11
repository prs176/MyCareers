import { ResumeRecord, RecordTypeToNumber } from "../../models/record";
import CommonAwardCard from "./CommonRecordCard";
import EditAwardCard from "./EditRecordCard";

interface Props {
  type: "common" | "my" | "edit";
  recordType: RecordTypeToNumber;
  record: ResumeRecord;
  onClick: () => void;
  onEdit: () => void;
  onEditDone: (
    id: number,
    type: number,
    name: string,
    role?: string,
    period?: string,
    description?: string,
    department?: string,
    from?: string,
    start?: string,
    end?: string,
    identifier?: string
  ) => void;
  onDelete: (id: number) => void;
}

const RecordCard = ({
  type,
  recordType,
  record,
  onClick,
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
          onClick={onClick}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default RecordCard;
