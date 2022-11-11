import { useCallback, useEffect, useState } from "react";
import Section from "../../component/section/Section";
import { User } from "../../models/user";
import * as Style from "./styled/Resume";
import RecordCard from "../../component/recordCard/RecordCard";
import EditRecordCard from "../../component/recordCard/EditRecordCard";
import { ResumeRecord, RecordTypeToNumber, RecordType } from "../../models/record";
import { getUser, postGood, postNotGood, putUser } from "../../api/api/user";
import { useParams } from "react-router-dom";
import { deleteRecord, getRecords, postRecord, putRecord } from "../../api/api/record";
import ProfileSection from "../../component/profileSection/ProfileSection";
import handleAxiosError from "../../util/handleAxiosError";
import { Modal } from "@mui/material";
import DetailRecordModal from "../../component/detailRecordModal/DetailRecordModal";

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
  const [editedRecordId, setEditedRecordId] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openedRecord, setOpenedRecord] = useState<ResumeRecord>({
    id: 0,
    type: RecordTypeToNumber.CAREER,
    name: "",
    role: "",
    period: "",
    description: "",
    department: "",
    from: "",
    start: "",
    end: "",
    identifier: "",
    count: 0,
  });

  const setup = useCallback(async () => {
    handleAxiosError(async () => {
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
    });
  }, [userId]);
  const onFetchRecords = () => {
    handleAxiosError(async () => {
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
    });
  };
  const onEditProfileDone = (name: string, birth: string, intro: string) => {
    handleAxiosError(async () => {
      await putUser({ name, birth, intro });

      const user = await getUser(parseInt(userId!, 10));
      setUser(user);
    });
  };
  const onAdd = (
    type: number,
    name: string,
    role?: string,
    period?: string,
    description?: string,
    department?: string,
    from?: string,
    start?: string,
    end?: string,
    identifier?: string
  ) => {
    handleAxiosError(async () => {
      await postRecord({
        type,
        name,
        role,
        period,
        description,
        department,
        from,
        start,
        end,
        identifier,
      });

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
    });
  };
  const onEditDone = (
    id: number,
    type: number,
    name: string,
    role?: string,
    period?: string,
    description?: string,
    department?: string,
    from?: string,
    start?: string,
    end?: string,
    identifier?: string
  ) => {
    handleAxiosError(async () => {
      await putRecord(id, {
        type,
        name,
        role,
        period,
        description,
        department,
        from,
        start,
        end,
        identifier,
      });

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
    });
  };
  const onDelete = (id: number) => {
    handleAxiosError(async () => {
      await deleteRecord(id);

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
    });
  };
  const onGood = () => {
    handleAxiosError(async () => {
      await postGood(parseInt(userId!, 10));

      const user = await getUser(parseInt(userId!, 10));
      setUser(user);
    });
  };
  const onNotGood = () => {
    handleAxiosError(async () => {
      await postNotGood(parseInt(userId!, 10));

      const user = await getUser(parseInt(userId!, 10));
      setUser(user);
    });
  };

  useEffect(() => {
    setup();
  }, [setup]);

  return (
    <Style.RootContainer>
      <Modal
        open={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
          onFetchRecords();
        }}
      >
        <div>
          <DetailRecordModal isMine={user.isMine} record={openedRecord} />
        </div>
      </Modal>
      <Style.ResumeContainer>
        <ProfileSection
          type={isEditProfile ? "edit" : user?.isMine ? "my" : "common"}
          user={user}
          onEdit={() => {
            setIsEditProfile(true);
          }}
          onEditDone={(name, birth, intro) => {
            setIsEditProfile(false);
            onEditProfileDone(name, birth, intro);
          }}
          isGood={user.isGood}
          onGood={() => {
            onGood();
          }}
          onNotGood={() => {
            onNotGood();
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
              <div>
                <EditRecordCard
                  recordType={isEdit[0]}
                  onEditDone={(
                    _,
                    type,
                    name,
                    role,
                    period,
                    description,
                    department,
                    from,
                    start,
                    end,
                    identifier
                  ) => {
                    setIsEdit([RecordTypeToNumber.CAREER, false]);
                    onAdd(
                      type,
                      name,
                      role,
                      period,
                      description,
                      department,
                      from,
                      start,
                      end,
                      identifier
                    );
                  }}
                />
              </div>
            )}
            {records[recordType as RecordTypeToNumber] &&
              records[recordType as RecordTypeToNumber].map((record) => (
                <div>
                  <RecordCard
                    key={record.id}
                    recordType={record.type}
                    type={record.id === editedRecordId ? "edit" : user?.isMine ? "my" : "common"}
                    record={record}
                    onClick={() => {
                      setOpenedRecord(record);
                      setIsOpenModal(true);
                    }}
                    onEdit={() => {
                      if (isEdit[1] || isEditProfile) {
                        return;
                      }
                      setIsEdit([record.type, true]);
                      setEditedRecordId(record.id);
                    }}
                    onEditDone={(
                      id,
                      type,
                      name,
                      role,
                      period,
                      description,
                      department,
                      from,
                      start,
                      end,
                      identifier
                    ) => {
                      setIsEdit([record.type, false]);
                      setEditedRecordId(0);
                      onEditDone(
                        id,
                        type,
                        name,
                        role,
                        period,
                        description,
                        department,
                        from,
                        start,
                        end,
                        identifier
                      );
                    }}
                    onDelete={(id) => {
                      onDelete(id);
                    }}
                  />
                </div>
              ))}
          </Section>
        ))}
      </Style.ResumeContainer>
    </Style.RootContainer>
  );
};

export default Resume;
