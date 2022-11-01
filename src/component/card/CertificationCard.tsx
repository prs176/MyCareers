import { Key, RootContainer, ToolContainer } from "../styled/Card";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Certification } from "../../models/user";

interface Props {
  certification: Certification;
  onEdit: () => void;
  onDelete: () => void;
}

const CertificationCard = ({ certification, onEdit, onDelete }: Props): JSX.Element => {
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
      {certification.name}
      <br></br>
      <br></br>
      <Key>발행기관</Key>
      {certification.from}
      <br></br>
      <br></br>
      <Key>발행일</Key>
      {certification.start}
      <br></br>
      <br></br>
      <Key>만료일</Key>
      {certification.end}
      <br></br>
      <br></br>
      <Key>식별번호</Key>
      {certification.id}
      <br></br>
      <br></br>
      <Key>설명</Key>
      {certification.explanation}
    </RootContainer>
  );
};

export default CertificationCard;
