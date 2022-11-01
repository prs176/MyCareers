import { Key, RootContainer, ToolContainer } from "../styled/Card";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton } from "@mui/material";
import { Award } from "../../models/user";
import { useState } from "react";

interface Props {
  award: Award;
  onDone: () => void;
}

const AwardCardEdit = ({ award, onDone }: Props): JSX.Element => {
  const [name, setName] = useState<string>(award.name);
  const [from, setFrom] = useState<string>(award.from);
  const [start, setStart] = useState<string>(award.start);
  const [explanation, setExplanation] = useState<string>(award.explanation);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => setFrom(e.target.value);

  const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => setStart(e.target.value);

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
      <Key>발행기관</Key>
      <input type="text" onChange={onChangeFrom} value={from}></input>
      <br></br>
      <br></br>
      <Key>발행일</Key>
      <input type="date" onChange={onChangeStart} value={start}></input>
      <br></br>
      <br></br>
      <Key>설명</Key>
      <input type="text" onChange={onChangeExplanation} value={explanation}></input>
    </RootContainer>
  );
};

export default AwardCardEdit;
