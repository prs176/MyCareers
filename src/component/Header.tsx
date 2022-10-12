import Logo from "./Logo";
import { Divider, RootContainer, SearchInput } from "./styled/Header";

const Header = (): JSX.Element => {
  return (
    <div>
      <RootContainer>
        <Logo type="small"></Logo>
        <SearchInput></SearchInput>
      </RootContainer>
      <Divider></Divider>
    </div>
  );
};

export default Header;
