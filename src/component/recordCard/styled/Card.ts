import styled from "styled-components";

export const RootContainer = styled.div`
  width: 280px;
  margin: 10px;
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
  font-size: 1.2em;
  font-weight: 600;
  margin: 0px;
  margin-right: 10px;
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
  margin-right: 10px;
  color: #727272;
`;

export const ContentText = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 1em;
  font-family: inherit;
`;

export const ContentInput = styled.input`
  font-size: 1em;
  font-family: inherit;
`;
