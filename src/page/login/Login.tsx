import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/api/user";
import { MessageResponse } from "../../api/response/response";
import AuthContainer from "../../component/authContainer/AuthContainer";
import LabelButton from "../../component/labelButton/LabelButton";
import Logo from "../../component/logo/Logo";
import TextField from "../../component/textField/TextField";
import {
  InputContainer,
  RootContainer,
  RegisterText,
  UnderlineButton,
  RegisterTextContainer,
  ButtonConatiner,
  LogoWrapper,
} from "./styled/Login";

const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onLogin = async () => {
    if (!(email && password)) {
      alert("값이 비어있습니다.");
      return;
    }
    try {
      await postLogin({ email, password });
      if (window.history.state) {
        navigate(-1);
      } else {
        navigate("/", { replace: true });
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
        <LogoWrapper>
          <Logo type="big" />
        </LogoWrapper>
        <InputContainer>
          <TextField label="아이디" placeholder="아이디" value={email} onChange={onChangeEmail} />
          <TextField
            type="password"
            label="비밀번호"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
        </InputContainer>
        <ButtonConatiner>
          <LabelButton onClick={onLogin}>로그인</LabelButton>
          <RegisterTextContainer>
            <RegisterText>계정이 없으신가요?</RegisterText>
            <UnderlineButton onClick={() => navigate("/register")}>회원가입</UnderlineButton>
          </RegisterTextContainer>
        </ButtonConatiner>
      </AuthContainer>
    </RootContainer>
  );
};

export default Login;
