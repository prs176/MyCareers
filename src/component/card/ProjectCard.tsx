import { Key, RootContainer, ToolContainer } from "../styled/Card";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Project } from "../../models/user";

interface Props {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
}

const ProjectCard = ({ project, onEdit, onDelete }: Props): JSX.Element => {
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
      {project.name}
      <br></br>
      <br></br>
      <Key>역할</Key>
      {project.role}
      <br></br>
      <br></br>
      <Key>기간</Key>
      {project.period}
      <br></br>
      <br></br>
      <Key>설명</Key>
      {project.explanation}
    </RootContainer>
  );
};

export default ProjectCard;
