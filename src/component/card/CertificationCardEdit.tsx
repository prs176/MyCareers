import { Key, RootContainer, ToolContainer } from "../styled/Card";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton } from "@mui/material";
import { Certification } from "../../models/user";
import { useState } from "react";

interface Props {
  certification: Certification;
  onDone: () => void;
}

const CertificationCardEdit = ({ certification, onDone }: Props): JSX.Element => {
  const [name, setName] = useState<string>(certification.name);
  const [from, setFrom] = useState<string>(certification.from);
  const [start, setStart] = useState<string>(certification.start);
  const [end, setEnd] = useState<string>(certification.end);
  const [id, setId] = useState<string>(certification.id);
  const [explanation, setExplanation] = useState<string>(certification.explanation);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => setFrom(e.target.value);

  const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => setStart(e.target.value);

  const onChangeEnd = (e: React.ChangeEvent<HTMLInputElement>) => setEnd(e.target.value);

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);

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
      <input type="text" onChange={onChangeStart} value={start}></input>
      <br></br>
      <br></br>
      <Key>만료일</Key>
      <input type="text" onChange={onChangeEnd} value={end}></input>
      <br></br>
      <br></br>
      <Key>식별번호</Key>
      <input type="text" onChange={onChangeId} value={id}></input>
      <br></br>
      <br></br>
      <Key>설명</Key>
      <input type="text" onChange={onChangeExplanation} value={explanation}></input>
    </RootContainer>
  );
};

export default CertificationCardEdit;
