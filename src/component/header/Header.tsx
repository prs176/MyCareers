import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "../logo/Logo";
import { Divider, RootContainer, SearchInput } from "./styled/Header";

interface Props {
  keyword: string;
  onChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ keyword, onChangeKeyword }: Props): JSX.Element => {
  return (
    <div>
      <RootContainer>
        <Logo type="small"></Logo>
        <div>
          <SearchInput value={keyword} onChange={onChangeKeyword}></SearchInput>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </div>
      </RootContainer>
      <Divider></Divider>
    </div>
  );
};

export default Header;
