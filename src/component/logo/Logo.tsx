import { RootContainer, Image, Title } from "./styled/Logo";
import logo from "../../asset/logo.png";

interface Props {
  type: "small" | "big";
}

const Logo = ({ type }: Props): JSX.Element => {
  return (
    <RootContainer>
      <Image alt="" src={logo} type={type}></Image>
      <Title type={type}>My Career</Title>
    </RootContainer>
  );
};

export default Logo;
