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
`;

export const Title = styled.h3`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0px;
  margin-bottom: 10px;
`;

export const Intro = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0px;
`;
