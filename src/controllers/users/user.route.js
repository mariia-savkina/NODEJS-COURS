import { Router } from "express";
import { getList } from "./handlers/getList.handler";
import { create } from "./handlers/create.handler";
import { getUser } from "./handlers/get.handler";
import { updateUser } from "./handlers/update.handler";
import { deleteUser } from "./handlers/delete.handler";

export class UserRoute {
  constructor() {
    this.router = Router();
    this.path = "users";

    this.router.get("/", getList);
    this.router.post("/", create);
    this.router.get("/:id", getUser);
    this.router.patch("/:id", updateUser);
    this.router.delete("/:id", deleteUser);
  }
}
