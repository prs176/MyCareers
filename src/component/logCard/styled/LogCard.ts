import styled from "styled-components";

export const RootContainer = styled.div`
  padding-left: 20px;
  padding-right: 10px;
`;

export const ToolContainer = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.hr`
  border: 0.5px solid lightgray;
  margin: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContentContainer = styled.div`
  cursor: pointer;
`;

export const NameText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.1em;
  margin: 0px;
  margin-right: 10px;
`;

export const NameInput = styled.input`
  font-size: 1.1em;
  font-family: inherit;
  margin: 0px;
  margin-right: 10px;
`;

export const FieldContainer = styled.div`
  display: flex;
`;

export const LeftRightFieldContainer = styled.div`
  width: 50%;
`;

export const FieldWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const TitleText = styled.p`
  font-size: 0.9em;
  margin: 0px;
  width: 60px;
  color: #727272;
`;

export const ContentText = styled.p`
  margin-right: 40px;
  width: 70%;
  overflow-wrap: break-word;
  padding: 0px;
  margin: 0px;
  font-size: 0.9em;
  font-family: inherit;
`;

export const ContentInput = styled.input`
  font-size: 1em;
  width: 70%;
  font-family: inherit;
  font-size: 0.9em;
`;

export const DateInputContainer = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
`;

export const DateInput = styled.input`
  font-size: 1em;
  font-family: inherit;
  height: 20px;
`;

export const GuideText = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  height: 20px;
`;
