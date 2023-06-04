import { Router } from "express";
import { getList } from "./handlers/getList.handler";

export class UserRoute {
  constructor() {
    this.router = Router();
    this.path = "users";

    this.router.get("/", getList);
  }
}
