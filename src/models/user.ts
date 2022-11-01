export interface User {
  idx: number;
  name: string;
  intro: string;
  birth: string;
}

export interface Career {
  idx: number;
  name: string;
  role: string;
  period: string;
  explanation: string;
}

export interface School {
  idx: number;
  name: string;
  department: string;
  period: string;
  explanation: string;
}

export interface TechStack {
  idx: number;
  name: string;
}

export interface Project {
  idx: number;
  name: string;
  role: string;
  period: string;
  explanation: string;
}

export interface Team {
  idx: number;
  name: string;
  role: string;
  period: string;
  explanation: string;
}

export interface Certification {
  idx: number;
  name: string;
  from: string;
  start: string;
  end: string;
  id: string;
  explanation: string;
}

export interface Award {
  idx: number;
  name: string;
  from: string;
  start: string;
  explanation: string;
}
