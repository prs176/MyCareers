export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  birth: string;
  intro: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserRequest {
  name: string;
  birth: string;
  intro: string;
}
