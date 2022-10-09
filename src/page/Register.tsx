import BoxContainer from "../component/BoxContainer";
import LabelButton from "../component/LabelButton";
import TextField from "../component/TextField";
import { ButtonConatiner, InputContainer, RootContainer } from "./styled/Register";

const Register = (): JSX.Element => {
  return (
    <RootContainer>
      <BoxContainer>
        <InputContainer>
          <TextField label="아이디" placeholder="아이디"></TextField>
          <TextField label="비밀번호" placeholder="비밀번호"></TextField>
          <TextField label="이름" placeholder="이름"></TextField>
          <TextField label="생년월일" placeholder="생년월일"></TextField>
          <TextField label="한 줄 소개" placeholder="한 줄 소개"></TextField>
        </InputContainer>
        <ButtonConatiner>
          <LabelButton>회원가입</LabelButton>
        </ButtonConatiner>
      </BoxContainer>
    </RootContainer>
  );
};

export default Register;
