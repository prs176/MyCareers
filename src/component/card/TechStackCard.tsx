import { Key, RootContainer, ToolContainer } from "../styled/Card";
import { TechStack } from "../../models/user";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  techStack: TechStack;
  onEdit: () => void;
  onDelete: () => void;
}

const TechStackCard = ({ techStack, onEdit, onDelete }: Props): JSX.Element => {
  return (
    <RootContainer>
      <ToolContainer>
        <IconButton onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteOutlineIcon />
        </IconButton>
      </ToolContainer>
      <Key>이름</Key>
      {techStack.name}
    </RootContainer>
  );
};

export default TechStackCard;
