import { UserStore } from "./user.store";

export const getUser = async (req, res, next) => {
  const user = UserStore.get(req.params.id);
  if (!user) {
    return res.status(404).json({
      error: "User not found",
    });
  }
  res.json(user);
};
