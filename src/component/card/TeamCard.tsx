import { Key, RootContainer, ToolContainer } from "../styled/Card";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Team } from "../../models/user";

interface Props {
  team: Team;
  onEdit: () => void;
  onDelete: () => void;
}

const TeamCard = ({ team, onEdit, onDelete }: Props): JSX.Element => {
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
      {team.name}
      <br></br>
      <br></br>
      <Key>직책</Key>
      {team.role}
      <br></br>
      <br></br>
      <Key>기간</Key>
      {team.period}
      <br></br>
      <br></br>
      <Key>설명</Key>
      {team.explanation}
    </RootContainer>
  );
};

export default TeamCard;
