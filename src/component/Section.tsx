import { ContentContainer, RootContainer, ToolContainer } from "./styled/Section";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

interface Props {
  title: string;
  onAdd: () => void;
  children: React.ReactNode;
}

const Section = ({ title, onAdd, children }: Props): JSX.Element => {
  return (
    <RootContainer>
      <hr></hr>
      <ToolContainer>
        <h2>{title}</h2>
        <div>
          <IconButton onClick={onAdd}>
            <AddIcon />
          </IconButton>
        </div>
      </ToolContainer>
      <ContentContainer>{children}</ContentContainer>
    </RootContainer>
  );
};

export default Section;
