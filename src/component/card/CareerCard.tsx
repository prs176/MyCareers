import {
  ContentContainer,
  Key,
  RecordContainer,
  RootContainer,
  ToolContainer,
} from "../styled/Card";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Career } from "../../models/user";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogCard from "./Log";

interface Props {
  career: Career;
  onEdit: () => void;
  onDelete: () => void;
  onAdd: () => void;
  onEditLog: () => void;
  onDeleteLog: () => void;
  onDone: () => void;
}

const CareerCard = ({
  career,
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
        </RecordContainer>
        <LogCard
          isExtended={isExtended}
          logs={career.logs}
          onAdd={onAdd}
          onDone={onDone}
          onEditLog={onEditLog}
          onDeleteLog={onDeleteLog}
        ></LogCard>
      </ContentContainer>
    </RootContainer>
  );
};

export default CareerCard;
