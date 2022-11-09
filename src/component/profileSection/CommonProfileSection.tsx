import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import * as Style from "./styled/ProfileSection";
import { User } from "../../models/user";

interface Props {
  type: "my" | "common";
  user: User;
  onEdit: () => void;
}

const CommonProfileSection = ({ type, user, onEdit }: Props): JSX.Element => {
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
              <IconButton>
                <PrintIcon />
              </IconButton>
            </>
          )}
          <IconButton>
            <ContentCopyIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </div>
      </Style.ToolContainer>
      {user?.intro}
    </Style.ProfileContainer>
  );
};

export default CommonProfileSection;
