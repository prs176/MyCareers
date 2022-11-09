export interface User {
  id: number;
  email: string;
  name: string;
  birth: string;
  intro: string;
  good: number;
  isMine: boolean;
  isGood: boolean;
}

export interface SimpleUser {
  id: number;
  email: string;
  name: string;
  birth: string;
  intro: string;
  good: number;
}
