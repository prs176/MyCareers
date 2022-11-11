import * as Style from "./styled/Card";
import { ResumeRecord, RecordTypeToField, RecordTypeToNumber } from "../../models/record";
import { IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import useInput from "../../hooks/useInput";

interface Props {
  record?: ResumeRecord;
  recordType: RecordTypeToNumber;
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
}

const EditRecordCard = ({ record, recordType, onEditDone }: Props): JSX.Element => {
  const fields = RecordTypeToField[
    RecordTypeToNumber[recordType] as keyof typeof RecordTypeToField
  ] as [string, string][];

  const [state, onChange] = useInput({
    name: record?.name || "",
    role: record?.role || "",
    period1: record?.period?.split(" ~ ")[0] || "",
    period2: record?.period?.split(" ~ ")[1] || "",
    description: record?.description || "",
    department: record?.department || "",
    from: record?.from || "",
    start: record?.start || "",
    end: record?.end || "",
    identifier: record?.identifier || "",
  });

  return (
    <Style.RootContainer>
      <Style.ToolContainer>
        <Style.NameInput placeholder="이름" name="name" value={state.name} onChange={onChange} />
        <IconButton
          onClick={() => {
            if (
              !fields.every((field) => {
                if (field[1] === "period") {
                  return state["period1"] && state["period2"];
                }
                return state[field[1]];
              })
            ) {
              alert("값이 비어있거나 유효하지 않은 날짜가 입력되었습니다.");
              return;
            }
            onEditDone(
              record?.id || 0,
              recordType,
              state.name,
              state.role,
              state.period1 + " ~ " + state.period2,
              state.description,
              state.department,
              state.from,
              state.start,
              state.end,
              state.identifier
            );
          }}
        >
          <DoneIcon />
        </IconButton>
      </Style.ToolContainer>

      {fields.map((field, id) => (
        <Style.FieldWrapper key={id}>
          <Style.TitleText>{field[0]}</Style.TitleText>
          {field[1] !== "period" ? (
            <Style.ContentInput
              type={field[1] === "start" || field[1] === "end" ? "date" : "text"}
              placeholder={field[0]}
              name={field[1]}
              onChange={onChange}
              max="9999-12-31"
              value={state[field[1]]}
            />
          ) : (
            <>
              <Style.DateInput
                type={"date"}
                name="period1"
                onChange={onChange}
                value={state["period1"]}
                max="9999-12-31"
              ></Style.DateInput>
              <Style.GuideText>~</Style.GuideText>
              <Style.DateInput
                type={"date"}
                name="period2"
                onChange={onChange}
                value={state["period2"]}
                max="9999-12-31"
              ></Style.DateInput>
            </>
          )}
        </Style.FieldWrapper>
      ))}
    </Style.RootContainer>
  );
};

export default EditRecordCard;
