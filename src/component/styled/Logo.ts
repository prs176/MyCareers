import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img<{ type: string }>`
  height: ${({ type }) => (type === "big" ? "80px" : "50px")};
`;

export const Title = styled.p<{ type: string }>`
  display: inline;
  margin: 0px;
  margin-left: 10px;
  font-size: ${({ type }) => (type === "big" ? "30px" : "20px")};
  font-weight: bold;
`;
