import { Key, RootContainer, ToolContainer } from "../styled/Card";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton } from "@mui/material";
import { Team } from "../../models/user";
import { useState } from "react";

interface Props {
  team: Team;
  onDone: () => void;
}

const TeamCardEdit = ({ team, onDone }: Props): JSX.Element => {
  const [name, setName] = useState<string>(team.name);
  const [role, setRole] = useState<string>(team.role);
  const [start, setStart] = useState<string>(team.period.split(" ~ ")[0] || "");
  const [end, setEnd] = useState<string>(team.period.split(" ~ ")[1] || "");
  const [explanation, setExplanation] = useState<string>(team.explanation);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onChangeRole = (e: React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value);

  const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => setStart(e.target.value);

  const onChangeEnd = (e: React.ChangeEvent<HTMLInputElement>) => setEnd(e.target.value);

  const onChangeExplanation = (e: React.ChangeEvent<HTMLInputElement>) =>
    setExplanation(e.target.value);

  return (
    <RootContainer>
      <ToolContainer>
        <IconButton onClick={onDone}>
          <DoneIcon />
        </IconButton>
      </ToolContainer>
      <Key>이름</Key>
      <input type="text" onChange={onChangeName} value={name}></input>
      <br></br>
      <br></br>
      <Key>직책</Key>
      <input type="text" onChange={onChangeRole} value={role}></input>
      <br></br>
      <br></br>
      <Key>기간</Key>
      <input type="date" onChange={onChangeStart} value={start}></input> ~{" "}
      <input type="date" onChange={onChangeEnd} value={end}></input>
      <br></br>
      <br></br>
      <Key>설명</Key>
      <input type="text" onChange={onChangeExplanation} value={explanation}></input>
    </RootContainer>
  );
};

export default TeamCardEdit;
