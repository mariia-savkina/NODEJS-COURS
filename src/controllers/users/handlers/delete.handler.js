import { UserStore } from "./user.store";

export const deleteUser = async (req, res, next) => {
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  UserStore.delete(req.params.id);
  res.status(204);
  res.send();
};
