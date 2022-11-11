import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "../logo/Logo";
import * as Style from "./styled/Header";
import { useNavigate } from "react-router-dom";
import { getMyId } from "../../api/api/user";
import { useCallback, useEffect, useState } from "react";
import { removeCookie } from "../../api/token/cookie";

interface Props {
  keyword: string;
  onChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ keyword, onChangeKeyword }: Props): JSX.Element => {
  const navigate = useNavigate();

  const [id, setId] = useState(0);

  const setup = useCallback(async () => {
    try {
      const id = await getMyId();
      setId(id);
    } catch (err) {}
  }, []);

  useEffect(() => {
    setup();
  }, [setup]);

  return (
    <div>
      <Style.RootContainer>
        <Logo type="small"></Logo>
        <Style.ToolContainer>
          <Style.SearchInput value={keyword} onChange={onChangeKeyword}></Style.SearchInput>
          <Style.LoginButton
            onClick={() => {
              if (id) {
                removeCookie("token");
                window.location.reload();
              } else {
                navigate("/login");
              }
            }}
          >
            {id ? "로그아웃" : "로그인"}
          </Style.LoginButton>
          {id ? (
            <Style.LoggedInProfile
              onClick={() => {
                navigate(`/resume/${id}`);
              }}
            />
          ) : (
            <Style.LoggedOutProfile
              onClick={() => {
                navigate("/login");
              }}
            />
          )}
        </Style.ToolContainer>
      </Style.RootContainer>
      <Style.Divider></Style.Divider>
    </div>
  );
};

export default Header;
