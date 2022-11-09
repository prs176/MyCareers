import * as Style from "./styled/Section";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

interface Props {
  title: string;
  isMine: boolean;
  onAdd: () => void;
  children: React.ReactNode;
}

const Section = ({ title, isMine, onAdd, children }: Props): JSX.Element => {
  return (
    <Style.RootContainer>
      <Style.Hr></Style.Hr>
      <Style.ToolContainer>
        <Style.TitleText>{title}</Style.TitleText>
        {isMine && (
          <IconButton onClick={onAdd}>
            <AddIcon />
          </IconButton>
        )}
      </Style.ToolContainer>
      <Style.ContentContainer>{children}</Style.ContentContainer>
    </Style.RootContainer>
  );
};

export default Section;
