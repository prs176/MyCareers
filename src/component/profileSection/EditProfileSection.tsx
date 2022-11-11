import { useState } from "react";
import { IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import * as Style from "./styled/ProfileSection";
import { User } from "../../models/user";
import AutosizedTextarea from "../autosizedTextarea/AutosizedTextarea";

interface Props {
  user?: User;
  onEditDone: (name: string, birth: string, intro: string) => void;
}

const EditProfileSection = ({ user, onEditDone }: Props): JSX.Element => {
  const [name, setName] = useState(user?.name || "");
  const [birth, setBirth] = useState(user?.birth || "");
  const [intro, setIntro] = useState(user?.intro || "");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => setBirth(e.target.value);
  const onChangeIntro = (e: React.ChangeEvent<HTMLTextAreaElement>) => setIntro(e.target.value);

  return (
    <Style.ProfileContainer>
      <Style.ToolContainer>
        <div>
          <Style.NameInput
            type="text"
            placeholder="이름"
            onChange={onChangeName}
            value={name}
          ></Style.NameInput>
          <Style.BirthInput
            type="date"
            onChange={onChangeBirth}
            value={birth}
            max="9999-12-31"
          ></Style.BirthInput>
        </div>

        <div>
          <IconButton
            onClick={() => {
              if (!(name && birth && intro)) {
                alert("값이 비어있거나 유효하지 않은 날짜가 입력되었습니다.");
                return;
              }
              onEditDone(name, birth, intro);
            }}
          >
            <DoneIcon />
          </IconButton>
        </div>
      </Style.ToolContainer>

      <AutosizedTextarea
        placeholder="한 줄 소개"
        onChange={onChangeIntro}
        value={intro}
      ></AutosizedTextarea>
    </Style.ProfileContainer>
  );
};

export default EditProfileSection;
