import { Key, RootContainer, ToolContainer } from "../styled/Card";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { School } from "../../models/user";

interface Props {
  school: School;
  onEdit: () => void;
  onDelete: () => void;
}

const SchoolCard = ({ school, onEdit, onDelete }: Props): JSX.Element => {
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
      {school.name}
      <br></br>
      <br></br>
      <Key>과</Key>
      {school.department}
      <br></br>
      <br></br>
      <Key>기간</Key>
      {school.period}
      <br></br>
      <br></br>
      <Key>설명</Key>
      {school.explanation}
    </RootContainer>
  );
};

export default SchoolCard;
