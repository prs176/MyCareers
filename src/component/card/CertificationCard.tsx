import {
  ContentContainer,
  Key,
  RecordContainer,
  RootContainer,
  ToolContainer,
} from "../styled/Card";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import { Certification } from "../../models/user";
import { useState } from "react";
import LogCard from "./Log";

interface Props {
  certification: Certification;
  onEdit: () => void;
  onDelete: () => void;
  onAdd: () => void;
  onEditLog: () => void;
  onDeleteLog: () => void;
  onDone: () => void;
}

const CertificationCard = ({
  certification,
  onEdit,
  onDelete,
  onAdd,
  onEditLog,
  onDeleteLog,
  onDone,
}: Props): JSX.Element => {
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const onToggle = () => {
    setIsExtended(!isExtended);
  };

  return (
    <RootContainer>
      <ContentContainer>
        <RecordContainer>
          <ToolContainer>
            <IconButton onClick={onEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={onDelete}>
              <DeleteOutlineIcon />
            </IconButton>
            <IconButton onClick={onToggle}>
              {isExtended ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
        </RecordContainer>
        <LogCard
          isExtended={isExtended}
          logs={certification.logs}
          onAdd={onAdd}
          onDone={onDone}
          onEditLog={onEditLog}
          onDeleteLog={onDeleteLog}
        ></LogCard>
      </ContentContainer>
    </RootContainer>
  );
};

export default CertificationCard;
