import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useCallback, useEffect, useState } from "react";
import { deleteLog, getLogs, postLog, putLog } from "../../api/api/log";
import { Log } from "../../models/log";
import { RecordTypeToField, RecordTypeToNumber, ResumeRecord } from "../../models/record";
import handleAxiosError from "../../util/handleAxiosError";
import LogCard from "../logCard/LogCard";
import * as Style from "./styled/DetailRecordModal";
import EditLogCard from "../logCard/EditLogCard";

interface Props {
  isMine: boolean;
  record: ResumeRecord;
}

const DetailRecordModal = ({ isMine, record }: Props): JSX.Element => {
  const fields = RecordTypeToField[
    RecordTypeToNumber[record.type] as keyof typeof RecordTypeToField
  ] as [string, string][];

  const [logs, setLogs] = useState<Log[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editedLogId, setEditedLogId] = useState(0);

  const setup = useCallback(() => {
    handleAxiosError(async () => {
      const logs = await getLogs(record.id);
      setLogs(logs);
    });
  }, [record]);
  const onAdd = (
    title: string,
    intro: string,
    period: string,
    learning?: string,
    contribution?: string,
    overcame?: string,
    etc?: string
  ) => {
    handleAxiosError(async () => {
      await postLog(record.id, { title, intro, period, learning, contribution, overcame, etc });
      const logs = await getLogs(record.id);
      setLogs(logs);
    });
    setIsEdit(false);
  };
  const onEditDone = (
    id: number,
    title: string,
    intro: string,
    period: string,
    learning?: string,
    contribution?: string,
    overcame?: string,
    etc?: string
  ) => {
    handleAxiosError(async () => {
      await putLog(id, { title, intro, period, learning, contribution, overcame, etc });
      const logs = await getLogs(record.id);
      setLogs(logs);
    });
    setIsEdit(false);
    setEditedLogId(0);
  };
  const onDelete = (id: number) => {
    handleAxiosError(async () => {
      await deleteLog(id);
      const logs = await getLogs(record.id);
      setLogs(logs);
    });
  };

  useEffect(() => {
    setup();
  }, [setup]);

  return (
    <Style.RootContainer>
      <Style.ToolContainer>
        <Style.NameText>{record.name}</Style.NameText>
        <IconButton
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <AddIcon />
        </IconButton>
      </Style.ToolContainer>

      {logs.length === 0 && !isEdit ? (
        <Style.PlaceHolderWrapper>
          <Style.PlaceHolder>
            로그가 없습니다.
            <br />+ 버튼을 통해 새로운 로그를 만들 수 있습니다.
          </Style.PlaceHolder>
        </Style.PlaceHolderWrapper>
      ) : (
        <Style.LogContainer>
          {isEdit && !editedLogId && (
            <EditLogCard
              log={{
                id: 0,
                title: "",
                intro: "",
                period: "",
                learning: "",
                contribution: "",
                overcame: "",
                etc: "",
              }}
              onEditDone={(_, title, intro, period, learning, contribution, overcame, etc) => {
                if (!(title && intro && period.length === 23)) {
                  alert("값이 비어있거나 유효하지 않은 날짜가 입력되었습니다.");
                  return;
                }
                onAdd(title, intro, period, learning, contribution, overcame, etc);
              }}
            />
          )}
          {logs.map((log) => (
            <LogCard
              key={log.id}
              type={isEdit && editedLogId === log.id ? "edit" : isMine ? "my" : "common"}
              log={log}
              onEdit={() => {
                setIsEdit(true);
                setEditedLogId(log.id);
              }}
              onEditDone={(id, title, intro, period, learning, contribution, overcame, etc) => {
                if (!(title && intro && period.length === 23)) {
                  alert("값이 비어있거나 유효하지 않은 날짜가 입력되었습니다.");
                  return;
                }
                onEditDone(id, title, intro, period, learning, contribution, overcame, etc);
              }}
              onDelete={onDelete}
            />
          ))}
        </Style.LogContainer>
      )}
    </Style.RootContainer>
  );
};

export default DetailRecordModal;
