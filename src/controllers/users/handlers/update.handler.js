import { UserStore } from "./user.store";

export const updateUser = async (req, res, next) => {
  const user = UserStore.get(req.params.id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  const userUpdated = UserStore.update(req.params.id, req.body);
  res.json(userUpdated);
};
