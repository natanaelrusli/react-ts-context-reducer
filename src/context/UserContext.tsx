import { Dispatch, SetStateAction, createContext } from "react";
import { UserDataItf } from "../types";

interface UserContextItf {
  user: UserDataItf;
  setUser: Dispatch<SetStateAction<UserDataItf>>;
}

const initialUserState: UserDataItf = {
  username: "",
  email: "",
};

export const UserContext = createContext<UserContextItf>({
  user: initialUserState,
  setUser: () => {},
});
