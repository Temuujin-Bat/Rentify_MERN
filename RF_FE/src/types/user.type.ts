export interface TUserInfo {
  email: string;
  firstName: string;
  lastName: string;
  _id: string;
  phone?: string;
  birthday?: string;
}

export interface TPassword {
  currentPassword: string;
  newPassword: string;
}

export interface TName {
  firstName: string;
  lastName: string;
}

export interface TAccount {
  email: string;
  phone: string;
}
