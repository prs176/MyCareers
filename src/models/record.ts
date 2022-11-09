import { Log } from "./log";

export interface ResumeRecord {
  id: number;
  type: RecordTypeToNumber;
  name: string;
  role?: string;
  period?: string;
  description?: string;
  department?: string;
  from?: string;
  start?: string;
  end?: string;
  identifier?: string;
  Logs: Log[];
}

export enum RecordType {
  CAREER = "경력" as any,
  SCHOOL = "학력" as any,
  TECHSTACK = "보유기술" as any,
  PROJECT = "프로젝트" as any,
  TEAM = "단체" as any,
  CERTIFICATION = "자격증" as any,
  AWARD = "수상" as any,
}

export enum RecordTypeToNumber {
  CAREER = 1,
  SCHOOL = 2,
  TECHSTACK = 3,
  PROJECT = 4,
  TEAM = 5,
  CERTIFICATION = 6,
  AWARD = 7,
}

export const RecordTypeToField = {
  CAREER: [
    ["이름", "name"],
    ["직책", "role"],
    ["기간", "period"],
    ["설명", "description"],
  ],
  SCHOOL: [
    ["이름", "name"],
    ["과", "department"],
    ["기간", "period"],
    ["설명", "description"],
  ],
  TECHSTACK: [["이름", "name"]],
  PROJECT: [
    ["이름", "name"],
    ["역할", "role"],
    ["기간", "period"],
    ["설명", "description"],
  ],
  TEAM: [
    ["이름", "name"],
    ["직책", "role"],
    ["기간", "period"],
    ["설명", "description"],
  ],
  CERTIFICATION: [
    ["이름", "name"],
    ["발행기관", "from"],
    ["발행일", "start"],
    ["만료일", "end"],
    ["식별번호", "identifier"],
    ["설명", "description"],
  ],
  AWARD: [
    ["이름", "name"],
    ["발행기관", "from"],
    ["발행일", "start"],
    ["설명", "description"],
  ],
};
