import { Button } from "./styled/LabelButton";

interface Props {
  children?: string;
  onClick: () => void;
}

const LabelButton = ({ children, onClick }: Props): JSX.Element => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default LabelButton;
