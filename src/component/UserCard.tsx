import { Intro, RootContainer, Title } from "./styled/UserCard";

interface Props {
  title: string;
  children: string;
}

const UserCard = ({ title, children }: Props): JSX.Element => {
  return (
    <RootContainer>
      <Title>{title}</Title>
      <Intro>{children}</Intro>
    </RootContainer>
  );
};

export default UserCard;
