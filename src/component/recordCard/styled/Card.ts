import styled from "styled-components";

export const RootContainer = styled.div`
  width: 290px;
  margin: 5px;
  margin-top: 0px;
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-radius: 15px;
`;

export const ToolContainer = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 200px;
  font-size: 1.2em;
  font-weight: 600;
  margin: 0px;
  margin-right: 10px;
`;

export const ContentContainer = styled.div`
  cursor: pointer;
`;

export const NameInput = styled.input`
  font-size: 1.2em;
  font-family: inherit;
  font-weight: 600;
  margin: 0px;
  margin-right: 10px;
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

export const GuideText = styled.p`
  margin-left: 10px;
  margin-right: 10px;
`;

export const ContentInput = styled.input`
  font-size: 1em;
  font-family: inherit;
`;

export const DateInput = styled.input`
  font-size: 1em;
  font-family: inherit;
`;
