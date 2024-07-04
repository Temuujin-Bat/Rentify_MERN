import axios from "axios";
import { TAccount, TName, TPassword, TProfile } from "../types";

async function UserInfoController() {
  try {
    const result = await axios.get(
      "http://localhost:1010/api/v1/user/profile",
      {
        withCredentials: true,
      }
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function UserPasswordController(passwordData: TPassword) {
  try {
    await axios.put(
      "http://localhost:1010/api/v1/user/password-change",
      passwordData,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    throw error;
  }
}

async function UserNameController(nameData: TName) {
  try {
    await axios.put(
      "http://localhost:1010/api/v1/user/profile/edit-name",
      nameData,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    throw error;
  }
}

async function UserAccountController(accountData: TAccount) {
  try {
    await axios.put(
      "http://localhost:1010/api/v1/user/profile/edit-account",
      accountData,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    throw error;
  }
}

async function UserProfileController(profileData: TProfile) {
  try {
    await axios.put(
      "http://localhost:1010/api/v1/user/profile/edit-profile",
      profileData,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    throw error;
  }
}

export {
  UserInfoController,
  UserPasswordController,
  UserNameController,
  UserAccountController,
  UserProfileController,
};
