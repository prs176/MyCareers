import { styled } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/material";

const AutosizedTextarea = styled(TextareaAutosize)(() => ({
  fontFamily: "inherit",
  fontSize: "inherit",
  resize: "none",
  width: "100%",
  padding: 0,
  margin: 0,
  border: "none",
  outline: "none",
}));

export default AutosizedTextarea;
