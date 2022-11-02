import { IconButton } from "@mui/material";
import { useState } from "react";
import { Log } from "../../models/user";
import { LogContainer, TextInput, ToolContainer, VerticalHr } from "../styled/Card";
import DoneIcon from "@mui/icons-material/Done";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  isExtended: boolean;
  logs: Log[];
  onAdd: () => void;
  onEditLog: () => void;
  onDeleteLog: () => void;
  onDone: () => void;
}

const LogCard = ({
  isExtended,
  logs,
  onAdd,
  onEditLog,
  onDeleteLog,
  onDone,
}: Props): JSX.Element => {
  const [editedLogIdx, setEditedLogIdx] = useState<number>(-2);

  const [title, setTitle] = useState<string>("");
  const [intro, setIntro] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [learning, setLearning] = useState<string>("");
  const [contribution, setContribution] = useState<string>("");
  const [overcame, setOvercame] = useState<string>("");
  const [etc, setEtc] = useState<string>("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const onChangeIntro = (e: React.ChangeEvent<HTMLInputElement>) => setIntro(e.target.value);

  const onChangePeriod = (e: React.ChangeEvent<HTMLInputElement>) => setPeriod(e.target.value);

  const onChangeLearning = (e: React.ChangeEvent<HTMLInputElement>) => setLearning(e.target.value);

  const onChangeContribution = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContribution(e.target.value);

  const onChangeOvercame = (e: React.ChangeEvent<HTMLInputElement>) => setOvercame(e.target.value);

  const onChangeEtc = (e: React.ChangeEvent<HTMLInputElement>) => setEtc(e.target.value);

  return (
    <>
      {isExtended ? (
        <>
          {logs.map((log) => {
            if (editedLogIdx === log.idx) {
              return (
                <>
                  <VerticalHr></VerticalHr>
                  <LogContainer>
                    <ToolContainer>
                      <IconButton
                        onClick={() => {
                          setEditedLogIdx(-2);
                          onDone();
                        }}
                      >
                        <DoneIcon />
                      </IconButton>
                    </ToolContainer>
                    제목: <TextInput type="text" onChange={onChangeTitle} value={title}></TextInput>
                    <br></br>
                    <br></br>
                    개요: <TextInput type="text" onChange={onChangeIntro} value={intro}></TextInput>
                    <br></br>
                    <br></br>
                    기간:{" "}
                    <TextInput type="text" onChange={onChangePeriod} value={period}></TextInput>
                    <br></br>
                    <br></br>
                    {log.learning ? (
                      <>
                        배운 점:{" "}
                        <TextInput
                          type="text"
                          onChange={onChangeLearning}
                          value={learning}
                        ></TextInput>
                      </>
                    ) : (
                      <></>
                    )}
                    <br></br>
                    <br></br>
                    {log.contribution ? (
                      <>
                        기여 점:{" "}
                        <TextInput
                          type="text"
                          onChange={onChangeContribution}
                          value={contribution}
                        ></TextInput>
                      </>
                    ) : (
                      <></>
                    )}
                    <br></br>
                    <br></br>
                    {log.overcame ? (
                      <>
                        어려웠던 점 및 극복법:{" "}
                        <TextInput
                          type="text"
                          onChange={onChangeOvercame}
                          value={overcame}
                        ></TextInput>
                      </>
                    ) : (
                      <></>
                    )}
                    <br></br>
                    <br></br>
                    {log.etc ? (
                      <>
                        기타: <TextInput type="text" onChange={onChangeEtc} value={etc}></TextInput>
                      </>
                    ) : (
                      <></>
                    )}
                  </LogContainer>
                </>
              );
            } else {
              return (
                <>
                  <VerticalHr></VerticalHr>
                  <LogContainer>
                    <ToolContainer>
                      <IconButton
                        onClick={() => {
                          setEditedLogIdx(log.idx);
                          onEditLog();
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={onDeleteLog}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </ToolContainer>
                    제목: {log.title}
                    <br></br>
                    <br></br>
                    개요: {log.intro}
                    <br></br>
                    <br></br>
                    기간: {log.period}
                    <br></br>
                    <br></br>
                    {log.learning ? <>배운 점: {log.learning}</> : <></>}
                    <br></br>
                    <br></br>
                    {log.contribution ? <>기여 점: {log.contribution}</> : <></>}
                    <br></br>
                    <br></br>
                    {log.overcame ? <>어려웠던 점 및 극복법: {log.overcame}</> : <></>}
                    <br></br>
                    <br></br>
                    {log.etc ? <>기타: {log.etc}</> : <></>}
                  </LogContainer>
                </>
              );
            }
          })}
          <div>
            <IconButton>
              <AddIcon
                onClick={() => {
                  onAdd();
                  setEditedLogIdx(-1);
                }}
              />
            </IconButton>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default LogCard;
