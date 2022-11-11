import { Log } from "../../models/log";
import CommonLogCard from "./CommonLogCard";
import EditLogCard from "./EditLogCard";

interface Props {
  type: "common" | "my" | "edit";
  log: Log;
  onEdit: () => void;
  onEditDone: (
    id: number,
    title: string,
    intro: string,
    period: string,
    learning?: string,
    contribution?: string,
    overcame?: string,
    etc?: string
  ) => void;
  onDelete: (id: number) => void;
}

const LogCard = ({ type, log, onEdit, onEditDone, onDelete }: Props): JSX.Element => {
  return (
    <>
      {type === "edit" ? (
        <EditLogCard log={log} onEditDone={onEditDone} />
      ) : (
        <CommonLogCard type={type} log={log} onEdit={onEdit} onDelete={onDelete} />
      )}
    </>
  );
};

export default LogCard;
