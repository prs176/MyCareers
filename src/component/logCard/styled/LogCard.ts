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
  flex-wrap: wrap;
`;

export const FieldWrapper = styled.div`
  width: 50%;
  height: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleText = styled.p`
  font-size: 0.9em;
  margin: 0px;
  margin-right: 10px;
  color: #727272;
`;

export const ContentText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0px;
  margin-right: 40px;
  font-size: 1em;
  font-family: inherit;
`;

export const ContentInput = styled.input`
  font-size: 1em;
  font-family: inherit;
`;

export const DateInput = styled.input`
  font-size: 1em;
  font-family: inherit;
`;

export const GuideText = styled.p`
  margin-left: 10px;
  margin-right: 10px;
`;
