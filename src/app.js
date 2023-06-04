import express from "express";
import { UserRoute } from "./controllers/users/user.route";

export class App {
  constructor() {
    // Init server
    this.host = express();
    this.host.use(express.json());

    this.host.get("/", (req, res, next) => {
      res.send("Hello Mariia!");
    });

    const usersRoute = new UserRoute();
    this.host.use(`/api/${usersRoute.path}`, usersRoute.router);
  }

  listen() {
    this.host.listen(3000, () => {
      console.info(`🚀 http://localhost:3000`);
      console.info(`========================`);
    });
  }
}
