import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import * as Style from "./styled/ProfileSection";
import { User } from "../../models/user";
import { useLocation } from "react-router-dom";

interface Props {
  type: "my" | "common";
  user: User;
  isGood: boolean;
  onEdit: () => void;
  onGood: () => void;
  onNotGood: () => void;
}

const CommonProfileSection = ({
  type,
  user,
  isGood,
  onEdit,
  onGood,
  onNotGood,
}: Props): JSX.Element => {
  const location = useLocation();

  return (
    <Style.ProfileContainer>
      <Style.ToolContainer>
        <div>
          <Style.UserInfoWrapper>
            <Style.NameText>{user.name}</Style.NameText>
            <Style.EmailText>{user.email}</Style.EmailText>
          </Style.UserInfoWrapper>
          {user.birth}
        </div>

        <div>
          {type === "my" && (
            <>
              <IconButton onClick={onEdit}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={window.print}>
                <PrintIcon />
              </IconButton>
            </>
          )}
          <IconButton
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(`localhost:3000${location.pathname}`);
                alert("복사 성공");
              } catch (error) {
                alert("복사 실패");
              }
            }}
          >
            <ContentCopyIcon />
          </IconButton>
          <IconButton onClick={isGood ? onNotGood : onGood}>
            {isGood ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </Style.ToolContainer>
      {user?.intro}
    </Style.ProfileContainer>
  );
};

export default CommonProfileSection;
