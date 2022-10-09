import { RootContainer, Image, Title } from "./styled/Logo";
import logo from "../asset/logo.png";

const Logo = (): JSX.Element => {
  return (
    <RootContainer>
      <Image alt="" src={logo}></Image>
      <Title>My Career</Title>
    </RootContainer>
  );
};

export default Logo;
