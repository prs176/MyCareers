import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin: 20px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ToolContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const NameText = styled.h2`
  margin: 0px;
  margin-right: 10px;
  white-space: nowrap;
`;

export const EmailText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0px;
  color: gray;
`;

export const NameInput = styled.input`
  font-size: 1.5em;
  font-weight: bold;
  margin-right: 10px;
  margin-top: 1.5px;
`;

export const BirthInput = styled.input`
  font-size: 1em;
  display: block;
  font-family: inherit;
  margin-bottom: -1px;
  margin-left: -1px;
`;

export const IntroInput = styled.input`
  font-size: 1em;
`;
