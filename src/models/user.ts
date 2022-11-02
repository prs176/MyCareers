export interface User {
  idx: number;
  name: string;
  intro: string;
  birth: string;
}

export interface Career {
  idx: number;
  userIdx: number;
  name: string;
  role: string;
  period: string;
  explanation: string;
  logs: Log[];
}

export interface School {
  idx: number;
  userIdx: number;
  name: string;
  department: string;
  period: string;
  explanation: string;
  logs: Log[];
}

export interface TechStack {
  idx: number;
  userIdx: number;
  name: string;
  logs: Log[];
}

export interface Project {
  idx: number;
  userIdx: number;
  name: string;
  role: string;
  period: string;
  explanation: string;
  logs: Log[];
}

export interface Team {
  idx: number;
  userIdx: number;
  name: string;
  role: string;
  period: string;
  explanation: string;
  logs: Log[];
}

export interface Certification {
  idx: number;
  userIdx: number;
  name: string;
  from: string;
  start: string;
  end: string;
  id: string;
  explanation: string;
  logs: Log[];
}

export interface Award {
  idx: number;
  userIdx: number;
  name: string;
  from: string;
  start: string;
  explanation: string;
  logs: Log[];
}

export interface Log {
  idx: number;
  recordIdx: number;
  title: string;
  intro: string;
  period: string;
  learning?: string;
  contribution?: string;
  overcame?: string;
  etc?: string;
}
