import {
  ContentContainer,
  Key,
  LogContainer,
  RecordContainer,
  RootContainer,
  ToolContainer,
} from "../styled/Card";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import { Team } from "../../models/user";
import { useState } from "react";
import LogCard from "./Log";

interface Props {
  team: Team;
  onEdit: () => void;
  onDelete: () => void;
  onAdd: () => void;
  onEditLog: () => void;
  onDeleteLog: () => void;
  onDone: () => void;
}

const TeamCard = ({
  team,
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
        </RecordContainer>
        <LogCard
          isExtended={isExtended}
          logs={team.logs}
          onAdd={onAdd}
          onDone={onDone}
          onEditLog={onEditLog}
          onDeleteLog={onDeleteLog}
        ></LogCard>
      </ContentContainer>
    </RootContainer>
  );
};

export default TeamCard;
