import { Dispatch, SetStateAction, createContext } from "react";
import { UserDataItf } from "../types";

const initialUserState: UserDataItf = {
  username: "",
  email: "",
};

export const UserContext = createContext<{
  user: UserDataItf;
  setUser: Dispatch<SetStateAction<UserDataItf>>;
}>({ user: initialUserState, setUser: () => {} });
