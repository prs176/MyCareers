import { IconButton } from "@mui/material";
import { Log } from "../../models/log";
import * as Style from "./styled/LogCard";
import DoneIcon from "@mui/icons-material/Done";
import React, { useState } from "react";

interface Props {
  log?: Log;
  onEditDone: (
    id: number,
    title: string,
    intro: string,
    period: string,
    learning?: string,
    contribution?: string,
    overcame?: string,
    etc?: string
  ) => void;
}

const EditLogCard = ({ log, onEditDone }: Props): JSX.Element => {
  const [title, setTitle] = useState(log?.title || "");
  const [intro, setIntro] = useState(log?.intro || "");
  const [period1, setPeriod1] = useState(log?.period.split(" ~ ")[0] || "");
  const [period2, setPeriod2] = useState(log?.period.split(" ~ ")[1] || "");
  const [learning, setLearning] = useState(log?.learning || "");
  const [contribution, setContribution] = useState(log?.contribution || "");
  const [overcame, setOvercame] = useState(log?.overcame || "");
  const [etc, setEtc] = useState(log?.etc || "");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeIntro = (e: React.ChangeEvent<HTMLInputElement>) => setIntro(e.target.value);
  const onChangePeriod1 = (e: React.ChangeEvent<HTMLInputElement>) => setPeriod1(e.target.value);
  const onChangePeriod2 = (e: React.ChangeEvent<HTMLInputElement>) => setPeriod2(e.target.value);
  const onChangeLearning = (e: React.ChangeEvent<HTMLInputElement>) => setLearning(e.target.value);
  const onChangeContribution = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContribution(e.target.value);
  const onChangeOvercame = (e: React.ChangeEvent<HTMLInputElement>) => setOvercame(e.target.value);
  const onChangeEtc = (e: React.ChangeEvent<HTMLInputElement>) => setEtc(e.target.value);

  return (
    <Style.RootContainer>
      <Style.ToolContainer>
        <Style.NameInput placeholder="제목" value={title} onChange={onChangeTitle} />
        <div>
          <IconButton
            onClick={() =>
              onEditDone(
                log!.id,
                title,
                intro,
                period1 + " ~ " + period2,
                learning,
                contribution,
                overcame,
                etc
              )
            }
          >
            <DoneIcon />
          </IconButton>
        </div>
      </Style.ToolContainer>

      <Style.FieldContainer>
        <Style.FieldWrapper>
          <Style.TitleText>개요</Style.TitleText>
          <Style.ContentInput placeholder="개요" value={intro} onChange={onChangeIntro} />
        </Style.FieldWrapper>

        <Style.FieldWrapper>
          <Style.TitleText>기간</Style.TitleText>
          <Style.DateInput
            max="9999-12-31"
            type="date"
            value={period1}
            onChange={onChangePeriod1}
          />
          <Style.GuideText> ~ </Style.GuideText>
          <Style.DateInput
            max="9999-12-31"
            type="date"
            value={period2}
            onChange={onChangePeriod2}
          />
        </Style.FieldWrapper>

        <Style.FieldWrapper>
          <Style.TitleText>배운점</Style.TitleText>
          <Style.ContentInput placeholder="배운점" value={learning} onChange={onChangeLearning} />
        </Style.FieldWrapper>

        <Style.FieldWrapper>
          <Style.TitleText>기여점</Style.TitleText>
          <Style.ContentInput
            placeholder="기여점"
            value={contribution}
            onChange={onChangeContribution}
          />
        </Style.FieldWrapper>

        <Style.FieldWrapper>
          <Style.TitleText>어려웠던 점 및 극복법</Style.TitleText>
          <Style.ContentInput
            placeholder="어려웠던 점 및 극복법"
            value={overcame}
            onChange={onChangeOvercame}
          />
        </Style.FieldWrapper>

        <Style.FieldWrapper>
          <Style.TitleText>기타</Style.TitleText>
          <Style.ContentInput placeholder="기타" value={etc} onChange={onChangeEtc} />
        </Style.FieldWrapper>
      </Style.FieldContainer>

      <Style.Divider></Style.Divider>
    </Style.RootContainer>
  );
};

export default EditLogCard;
