import { IconButton } from "@mui/material";
import { Log } from "../../models/log";
import * as Style from "./styled/LogCard";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  type: "common" | "my";
  log: Log;
  onEdit: () => void;
  onDelete: (id: number) => void;
}

const CommonLogCard = ({ type, log, onEdit, onDelete }: Props): JSX.Element => {
  return (
    <Style.RootContainer>
      <Style.ToolContainer>
        <Style.NameText>{log.title}</Style.NameText>
        {type === "my" ? (
          <div>
            <IconButton onClick={onEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(log.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </div>
        ) : (
          <></>
        )}
      </Style.ToolContainer>

      <Style.FieldContainer>
        <Style.LeftRightFieldContainer>
          <Style.FieldWrapper>
            <Style.TitleText>개요</Style.TitleText>
            <Style.ContentText>{log.intro}</Style.ContentText>
          </Style.FieldWrapper>

          <Style.FieldWrapper>
            <Style.TitleText>기간</Style.TitleText>
            <Style.ContentText>{log.period}</Style.ContentText>
          </Style.FieldWrapper>

          <Style.FieldWrapper>
            <Style.TitleText>배운점</Style.TitleText>
            <Style.ContentText>{log.learning}</Style.ContentText>
          </Style.FieldWrapper>
        </Style.LeftRightFieldContainer>

        <Style.LeftRightFieldContainer>
          <Style.FieldWrapper>
            <Style.TitleText>기여점</Style.TitleText>
            <Style.ContentText>{log.contribution}</Style.ContentText>
          </Style.FieldWrapper>

          <Style.FieldWrapper>
            <Style.TitleText>성장점</Style.TitleText>
            <Style.ContentText>{log.overcame}</Style.ContentText>
          </Style.FieldWrapper>

          <Style.FieldWrapper>
            <Style.TitleText>기타</Style.TitleText>
            <Style.ContentText>{log.etc}</Style.ContentText>
          </Style.FieldWrapper>
        </Style.LeftRightFieldContainer>
      </Style.FieldContainer>

      <Style.Divider></Style.Divider>
    </Style.RootContainer>
  );
};

export default CommonLogCard;
