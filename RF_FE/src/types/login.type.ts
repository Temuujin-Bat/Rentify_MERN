export interface TLogin {
  email: string;
  password: string;
}

export interface TLoginStore {
  token: string | null;
  userDetails: any | null;
}

export interface TLoginDetails {
  email: string;
  firstName: string;
  lastName: string;
  userID: string;
}
