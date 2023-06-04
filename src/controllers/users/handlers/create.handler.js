import { UserStore } from "./user.store";

export const create = async (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "name is required",
    });
  }
  const user = UserStore.add(req.body);
  res.json(user);
};
