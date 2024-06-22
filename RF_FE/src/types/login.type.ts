export interface TLogin {
  email: string;
  password: string;
}

export interface TLoginStore {
  tokenDetails: string | null;
  authDetails: any | null;
}

export interface TLoginDetails {
  email: string;
  firstName: string;
  lastName: string;
  userID: string;
}
