import styled from "styled-components";

export const RootContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 500px;
  background: white;
  border-radius: 10px;
`;

export const Divider = styled.hr`
  border: 0.5px solid lightgray;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const LogContainer = styled.div`
  height: 85%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ToolContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
`;

export const NameText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.2em;
  font-weight: 600;
  margin: 0px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const FieldWrapper = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleText = styled.p`
  font-size: 0.9em;
  margin: 0px;
  width: 60px;
  color: #727272;
`;

export const ContentText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0px;
  margin: 0px;
  font-family: inherit;
`;

export const PlaceHolderWrapper = styled.div`
  display: flex;
`;

export const PlaceHolder = styled.div`
  margin: auto;
  margin-top: 100px;
  color: #a5a5a5;
`;
