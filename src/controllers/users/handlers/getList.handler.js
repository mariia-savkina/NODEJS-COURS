import { UserStore } from "./user.store";

export const getList = async (req, res, next) => {
  // res.send("Get all users");
  const users = UserStore.find("<name>");
  res.json(users);
};
