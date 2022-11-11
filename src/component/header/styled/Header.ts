import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;

export const ToolContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  background: #efefef;
  width: 400px;
  height: 36px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 20px;
  margin: 10px;
`;

export const LoginButton = styled.button`
  font-size: 1em;
  color: gray;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

export const LoggedInProfile = styled.div`
  display: flex;
  background: #ffc000;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-left: 10px;
  cursor: pointer;
`;

export const LoggedOutProfile = styled.div`
  display: flex;
  background: #d9d9d9;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Divider = styled.hr`
  border: 1px solid lightgray;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;
`;
