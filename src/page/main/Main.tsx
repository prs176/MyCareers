import { AxiosError } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { getUsers } from "../../api/api/user";
import { MessageResponse } from "../../api/response/response";
import Header from "../../component/header/Header";
import UserCard from "../../component/userCard/UserCard";
import { SimpleUser } from "../../models/user";
import { UserCardContainer } from "./styled/Main";

const Main = (): JSX.Element => {
  const [keyword, setKeyword] = useState("");
  const [users, setUsers] = useState<SimpleUser[]>();

  const setUp = useCallback(async () => {
    try {
      const users = await getUsers(keyword);
      setUsers(users);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  }, [keyword]);

  useEffect(() => {
    setUp();
  }, [setUp]);

  return (
    <div>
      <Header
        keyword={keyword}
        onChangeKeyword={(e: React.ChangeEvent<HTMLInputElement>) => {
          setKeyword(e.target.value);
        }}
      ></Header>
      <UserCardContainer>
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UserCardContainer>
    </div>
  );
};

export default Main;
