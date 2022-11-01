import { Key, RootContainer, ToolContainer } from "../styled/Card";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Award } from "../../models/user";

interface Props {
  award: Award;
  onEdit: () => void;
  onDelete: () => void;
}

const AwardCard = ({ award, onEdit, onDelete }: Props): JSX.Element => {
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
      {award.name}
      <br></br>
      <br></br>
      <Key>발행기관</Key>
      {award.from}
      <br></br>
      <br></br>
      <Key>발행일</Key>
      {award.start}
      <br></br>
      <br></br>
      <Key>설명</Key>
      {award.explanation}
    </RootContainer>
  );
};

export default AwardCard;
