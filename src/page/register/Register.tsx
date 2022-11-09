import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../api/api/user";
import { MessageResponse } from "../../api/response/response";
import AuthContainer from "../../component/authContainer/AuthContainer";
import LabelButton from "../../component/labelButton/LabelButton";
import TextField from "../../component/textField/TextField";
import { ButtonConatiner, InputContainer, RootContainer } from "./styled/Register";

const Register = (): JSX.Element => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [intro, setIntro] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => setBirth(e.target.value);
  const onChangeIntro = (e: React.ChangeEvent<HTMLInputElement>) => setIntro(e.target.value);

  const onRegister = async () => {
    if (!(email && password && name && birth.length && intro)) {
      alert("값이 비어 있습니다.");
      return;
    }
    if (birth.length > 10) {
      alert("생년월일은 년 4자, 월 2자, 일2자 이내로 입력해주세요");
      return;
    }
    try {
      await postRegister({ email, password, name, birth, intro });
      if (window.history.state) {
        navigate(-1);
      } else {
        navigate("/login", { replace: true });
      }
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  };

  return (
    <RootContainer>
      <AuthContainer>
        <InputContainer>
          <TextField label="아이디" placeholder="아이디" value={email} onChange={onChangeEmail} />
          <TextField
            type="password"
            label="비밀번호"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          <TextField label="이름" placeholder="이름" value={name} onChange={onChangeName} />
          <TextField
            type="date"
            label="생년월일"
            placeholder="생년월일"
            value={birth}
            onChange={onChangeBirth}
          />
          <TextField
            label="한 줄 소개"
            placeholder="한 줄 소개"
            value={intro}
            onChange={onChangeIntro}
          />
        </InputContainer>
        <ButtonConatiner>
          <LabelButton onClick={onRegister}>회원가입</LabelButton>
        </ButtonConatiner>
      </AuthContainer>
    </RootContainer>
  );
};

export default Register;
