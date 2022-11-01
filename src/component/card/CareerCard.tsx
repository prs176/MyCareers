import { Key, RootContainer, ToolContainer } from "../styled/Card";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Career } from "../../models/user";

interface Props {
  career: Career;
  onEdit: () => void;
  onDelete: () => void;
}

const CareerCard = ({ career, onEdit, onDelete }: Props): JSX.Element => {
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
      {career.name}
      <br></br>
      <br></br>
      <Key>직책</Key>
      {career.role}
      <br></br>
      <br></br>
      <Key>기간</Key>
      {career.period}
      <br></br>
      <br></br>
      <Key>설명</Key>
      {career.explanation}
    </RootContainer>
  );
};

export default CareerCard;
