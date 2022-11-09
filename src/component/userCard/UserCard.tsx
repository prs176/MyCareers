import { SimpleUser } from "../../models/user";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as Style from "./styled/UserCard";
import { useNavigate } from "react-router-dom";

interface Props {
  user: SimpleUser;
}

const UserCard = ({ user }: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Style.RootContainer onClick={() => navigate(`/resume/${user.id}`)}>
      <Style.UserInfoWrapper>
        <Style.NameText>{user.name}</Style.NameText>
        <Style.EmailText>{user.email}</Style.EmailText>
      </Style.UserInfoWrapper>
      <Style.IntroText>{user.intro}</Style.IntroText>
      <Style.GoodWrapper>
        <Style.GoodText>{user.good}</Style.GoodText>
        <FavoriteIcon color="inherit" />
      </Style.GoodWrapper>
    </Style.RootContainer>
  );
};

export default UserCard;
