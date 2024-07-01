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
