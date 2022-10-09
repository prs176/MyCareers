import { ReactNode } from "react";
import { RootContainer } from "./styled/BoxContainer";

interface Props {
  children: ReactNode;
}

const BoxContainer = ({ children }: Props): JSX.Element => {
  return <RootContainer>{children}</RootContainer>;
};

export default BoxContainer;
