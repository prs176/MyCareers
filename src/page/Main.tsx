import Header from "../component/Header";
import UserCard from "../component/UserCard";
import { UserCardContainer } from "./styled/Main";

const Main = (): JSX.Element => {
  const users = [
    {
      title: "로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자",
      intro:
        "로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자",
    },
    {
      title: "로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자",
      intro:
        "로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자",
    },
    {
      title: "로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자",
      intro:
        "로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자",
    },
    {
      title: "로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자",
      intro:
        "로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자",
    },
    {
      title: "로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자",
      intro:
        "로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자로미야밥먹자",
    },
  ];
  return (
    <div>
      <Header></Header>
      <UserCardContainer>
        {users.map((user) => (
          <UserCard title={user.title}>{user.intro}</UserCard>
        ))}
      </UserCardContainer>
    </div>
  );
};

export default Main;
