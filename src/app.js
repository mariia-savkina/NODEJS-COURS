import express from "express";

export class App {
  constructor() {
    // Init server
    this.host = express();
  }

  listen() {
    this.host.listen(3000, () => {
      console.info(`🚀 http://localhost:3000`);
      console.info(`========================`);
    });
  }
}
