import { useState } from "react";
import { IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import * as Style from "./styled/ProfileSection";
import { User } from "../../models/user";

interface Props {
  user?: User;
  onEditDone: () => void;
}

const EditProfileSection = ({ user, onEditDone }: Props): JSX.Element => {
  const [name, setName] = useState(user?.name || "");
  const [birth, setBirth] = useState(user?.birth || "");
  const [intro, setIntro] = useState(user?.intro || "");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => setBirth(e.target.value);
  const onChangeIntro = (e: React.ChangeEvent<HTMLInputElement>) => setIntro(e.target.value);

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
          <Style.BirthInput type="date" onChange={onChangeBirth} value={birth}></Style.BirthInput>
        </div>

        <div>
          <IconButton>
            <DoneIcon onClick={onEditDone} />
          </IconButton>
        </div>
      </Style.ToolContainer>

      <Style.IntroInput
        type="text"
        placeholder="한 줄 소개"
        onChange={onChangeIntro}
        value={intro}
      ></Style.IntroInput>
    </Style.ProfileContainer>
  );
};

export default EditProfileSection;
