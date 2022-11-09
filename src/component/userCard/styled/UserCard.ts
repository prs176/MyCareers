import styled from "styled-components";

export const RootContainer = styled.div`
  margin: 10px;
  margin-top: 20px;
  padding: 20px;
  width: 290px;
  height: 140px;
  border: 1px solid lightgray;
  border-radius: 15px;
  box-shadow: 0px 5px 30px #efefef;
  cursor: pointer;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const NameText = styled.h3`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0px;
  margin-right: 10px;
`;

export const EmailText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0px;
  color: gray;
`;

export const IntroText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  height: 80px;
  overflow: hidden;
  margin: 0px;
  margin-bottom: 10px;
`;

export const GoodWrapper = styled.div`
  display: flex;
  color: lightgray;
  justify-content: right;
  align-items: center;
`;

export const GoodText = styled.div`
  font-size: 0.9em;
  margin-right: 10px;
  color: gray;
`;
