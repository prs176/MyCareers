import { Key, RootContainer, ToolContainer } from "../styled/Card";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton } from "@mui/material";
import { TechStack } from "../../models/user";
import { useState } from "react";

interface Props {
  techStack: TechStack;
  onDone: () => void;
}

const TechStackCardEdit = ({ techStack, onDone }: Props): JSX.Element => {
  const [name, setName] = useState<string>(techStack.name);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return (
    <RootContainer>
      <ToolContainer>
        <IconButton onClick={onDone}>
          {" "}
          <DoneIcon />
        </IconButton>
      </ToolContainer>
      <Key>이름</Key>
      <input type="text" onChange={onChangeName} value={name}></input>
    </RootContainer>
  );
};

export default TechStackCardEdit;
