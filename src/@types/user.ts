export interface Users {
  email: string
  password: string
}

export type User = {
  id?: number;
  email: string;
  password: string;
  name: string;
  phone: string;
}


export interface LoginResponse {
  token: string
  user: User
}
