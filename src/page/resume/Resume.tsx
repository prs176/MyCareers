import { useCallback, useEffect, useState } from "react";
import Section from "../../component/section/Section";
import { User } from "../../models/user";
import * as Style from "./styled/Resume";
import RecordCard from "../../component/recordCard/RecordCard";
import EditRecordCard from "../../component/recordCard/EditRecordCard";
import { ResumeRecord, RecordTypeToNumber, RecordType } from "../../models/record";
import { getUser } from "../../api/api/user";
import { useParams } from "react-router-dom";
import { getRecords } from "../../api/api/record";
import { AxiosError } from "axios";
import { MessageResponse } from "../../api/response/response";
import ProfileSection from "../../component/profileSection/ProfileSection";

const Resume = (): JSX.Element => {
  const { userId } = useParams();
  const recordTypes = Object.keys(RecordTypeToNumber)
    .map((category) => Number(category))
    .filter((category) => !isNaN(category));

  const [user, setUser] = useState<User>({
    id: 0,
    email: "",
    name: "",
    birth: "",
    intro: "",
    good: 0,
    isMine: false,
    isGood: false,
  });
  const [records, setRecords] = useState<Record<RecordTypeToNumber, ResumeRecord[]>>(
    {} as Record<RecordTypeToNumber, ResumeRecord[]>
  );
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isEdit, setIsEdit] = useState<[RecordTypeToNumber, boolean]>([
    RecordTypeToNumber.CAREER,
    false,
  ]);
  const [editedRecordId, setEditedRecordId] = useState<number>(0);

  const setUp = useCallback(async () => {
    try {
      const user = await getUser(parseInt(userId!, 10));
      setUser(user);

      const records = await getRecords(parseInt(userId!, 10));
      setRecords(
        records.reduce<Record<RecordTypeToNumber, ResumeRecord[]>>((acc, record) => {
          if (acc[record.type] === undefined) {
            acc[record.type] = [];
          }
          acc[record.type].push(record);
          return acc;
        }, {} as Record<RecordTypeToNumber, ResumeRecord[]>)
      );
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  }, [userId]);
  const onEditProfile = async () => {
    try {
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  };
  const onAdd = async () => {};

  useEffect(() => {
    setUp();
  }, [setUp]);

  return (
    <Style.RootContainer>
      <Style.ResumeContainer>
        <ProfileSection
          type={isEditProfile ? "edit" : user?.isMine ? "my" : "common"}
          user={user}
          onEdit={() => {
            setIsEditProfile(true);
          }}
          onEditDone={() => {
            setIsEditProfile(false);
          }}
        />

        {recordTypes.map((recordType) => (
          <Section
            key={recordType}
            title={
              RecordType[RecordType[RecordTypeToNumber[recordType] as keyof typeof RecordType]]
            }
            isMine={user?.isMine}
            onAdd={() => {
              if (isEdit[1] || isEditProfile) {
                return;
              }
              setIsEdit([recordType as RecordTypeToNumber, true]);
            }}
          >
            {isEdit[1] && isEdit[0] === recordType && !editedRecordId && (
              <EditRecordCard
                recordType={isEdit[0]}
                onEditDone={() => {
                  setIsEdit([RecordTypeToNumber.CAREER, false]);
                }}
              />
            )}
            {records[recordType as RecordTypeToNumber] &&
              records[recordType as RecordTypeToNumber].map((record) => (
                <RecordCard
                  key={record.id}
                  recordType={record.type}
                  type={record.id === editedRecordId ? "edit" : user?.isMine ? "my" : "common"}
                  record={record}
                  onEdit={() => {
                    if (isEdit[1] || isEditProfile) {
                      return;
                    }
                    setIsEdit([record.type, true]);
                    setEditedRecordId(record.id);
                  }}
                  onEditDone={() => {
                    setIsEdit([record.type, false]);
                    setEditedRecordId(0);
                  }}
                  onDelete={() => {}}
                />
              ))}
          </Section>
        ))}
      </Style.ResumeContainer>
    </Style.RootContainer>
  );
};

export default Resume;
